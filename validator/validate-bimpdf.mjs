// bimpdf validator: checks a whole .bim.pdf against spec 0002 (https://bimpdf.com/spec) sections 1-5.
// The sidecar checks are core's built validator, vendored byte-locked (vendor/validator/); the PDF side
// (sections 1, 2, 3, 4 and the conformance levels of 5) is this file on top of ./pdf-reader.mjs.
import * as core from '../vendor/validator/validate.bundle.mjs'
import { PdfFile, PdfString, Ref, Stream } from './pdf-reader.mjs'

const SPEC_URL = core.BIMPDF_SPEC_URL // https://bimpdf.com/spec
const PFX = core.BIMP
const RESERVED = new Set([
  'elements.json',
  'marks.json',
  'scales.json',
  'levels.json',
  'titleblock.json',
  'annotations.json',
  'model3d.json',
  'schedules.json',
  'ifc-subset.json',
  'pages.json',
  'README-agent.md',
])
const FORMAT_SIDECARS = new Set(
  [...RESERVED].filter((n) => n !== 'elements.json' && n !== 'README-agent.md'),
)
const MM_PER_UNIT = { mm: 1, cm: 10, m: 1000, in: 25.4, ft: 304.8 }

const versionNum = (v) => {
  const m = /^(\d+)\.(\d+)$/.exec(v ?? '')
  return m ? Number(m[1]) * 1000 + Number(m[2]) : null
}
const text = (pdf, v) => {
  const s = pdf.resolve(v)
  return s instanceof PdfString ? s.text : null
}
const nums = (pdf, a) => (pdf.array(a) ?? []).map((x) => pdf.resolve(x))

function pageLabel(ranges, index) {
  let hit = null
  for (const r of ranges) if (r.start <= index) hit = r
  if (!hit) return String(index + 1)
  const n = index - hit.start + (hit.st ?? 1)
  return (hit.prefix ?? '') + (hit.style === 'D' ? String(n) : '')
}
function pageLabelRanges(pdf, node, seen = new Set()) {
  const d = pdf.dict(node)
  if (!d || seen.has(d)) return []
  seen.add(d)
  const out = []
  const arr = pdf.array(d.get('Nums'))
  if (arr) {
    for (let i = 0; i + 1 < arr.length; i += 2) {
      const e = pdf.dict(arr[i + 1])
      out.push({
        start: pdf.resolve(arr[i]),
        prefix: e ? text(pdf, e.get('P')) : null,
        style: e ? pdf.nameOf(e.get('S')) : null,
        st: e ? pdf.resolve(e.get('St')) : null,
      })
    }
  }
  for (const k of pdf.array(d.get('Kids')) ?? []) out.push(...pageLabelRanges(pdf, k, seen))
  return out.sort((a, b) => a.start - b.start)
}
function countOutlines(pdf, node, seen = new Set()) {
  let n = 0
  for (let d = pdf.dict(node); d && !seen.has(d); d = pdf.dict(d.get('Next'))) {
    seen.add(d)
    n += 1 + countOutlines(pdf, d.get('First'), seen)
  }
  return n
}

/**
 * @param {Buffer} buf  the .bim.pdf bytes
 * @returns {{formatVersion: string|null, declared: string|null, reached: string|null, rung: string|null,
 *   archival: string|null, attachments: string[],
 *   findings: {severity: 'error'|'warning', rule: string, message: string}[], valid: boolean}}
 */
export function validateBimPdf(buf) {
  const findings = []
  const add = (severity, rule, message) => findings.push({ severity, rule, message })
  const err = (rule, message) => add('error', rule, message)
  const result = (extra = {}) => ({
    formatVersion: null,
    declared: null,
    reached: null,
    rung: null,
    archival: null,
    attachments: [],
    ...extra,
    findings,
    valid: !findings.some((f) => f.severity === 'error'),
  })

  const pdf = new PdfFile(buf)
  for (const w of pdf.warnings) add('warning', '1', `reader: ${w}`)
  if (!pdf.header) {
    err('1.1', 'not a PDF: no %PDF- header in the first 1024 bytes')
    return result()
  }
  const cat = pdf.catalog
  if (!cat) {
    err('1', 'no document catalog found (trailer /Root missing or unreadable)')
    return result()
  }

  // 1. base file
  const catVersion = pdf.nameOf(cat.get('Version'))
  const eff = Math.max(versionNum(pdf.version) ?? 0, versionNum(catVersion) ?? 0)
  if (eff < 1007)
    err(
      '1.1',
      `PDF version ${catVersion ?? pdf.version} is below 1.7 (header or catalog /Version must be >= 1.7)`,
    )
  if (pdf.encrypted) err('1.2', 'the file is encrypted (producers MUST NOT encrypt a .bim.pdf)')

  // 4.2 XMP label
  const md = pdf.resolve(cat.get('Metadata'))
  let xmp = null
  if (md instanceof Stream) {
    try {
      xmp = pdf.streamData(md).toString('utf8')
    } catch (e) {
      err('4.2', `catalog /Metadata cannot be decoded: ${e.message}`)
    }
  }
  // 4.3 /Extensions
  const ext = pdf.dict(cat.get('Extensions'))
  const extensionPrefixes = ext ? [...ext.keys()] : []

  // 3. attachments
  const afSet = new Set()
  const afDirect = new Set()
  for (const a of pdf.array(cat.get('AF')) ?? []) {
    if (a instanceof Ref) afSet.add(a.num)
    else {
      const d = pdf.dict(a)
      if (d) afDirect.add(d)
    }
  }
  const efNode = pdf.dict(pdf.get(pdf.dict(cat.get('Names')), 'EmbeddedFiles'))
  const entries = efNode ? pdf.nameTree(efNode) : []
  const attachments = []
  const docs = {}
  const rawFiles = {}
  for (const { name, value } of entries) {
    const fs = pdf.dict(value)
    if (!fs) {
      err('3.2', `${name}: name-tree value is not a file specification`)
      continue
    }
    const f = text(pdf, fs.get('F'))
    const uf = text(pdf, fs.get('UF'))
    const rel = pdf.nameOf(fs.get('AFRelationship'))
    const desc = text(pdf, fs.get('Desc'))
    attachments.push({ name, afRelationship: rel, desc })
    const inAf = (value instanceof Ref && afSet.has(value.num)) || afDirect.has(fs)
    if (!inAf) err('3.1', `${name}: not in the catalog /AF array`)
    if (f !== name || uf !== name)
      err('3.2', `${name}: /F (${f}) and /UF (${uf}) must both equal the file name`)
    if (!rel) err('3.2', `${name}: missing /AFRelationship`)
    if (!desc || !desc.includes(SPEC_URL))
      err('3.2', `${name}: /Desc must name the file's role and ${SPEC_URL}`)
    const want =
      name === 'elements.json'
        ? `${PFX}_Elements`
        : FORMAT_SIDECARS.has(name)
          ? 'Data'
          : 'Supplement'
    if (rel && rel !== want) err('3.4', `${name}: /AFRelationship /${rel}, expected /${want}`)
    if (!RESERVED.has(name) && !/^model_.*\.glb$/.test(name) && !/^[a-z0-9]+-/i.test(name)) {
      err(
        '3.7',
        `${name}: an app-private attachment must carry an <app>- prefix (e.g. pmt-${name})`,
      )
    }
    const stream = pdf.resolve(pdf.dict(fs.get('EF'))?.get('F'))
    if (!(stream instanceof Stream)) {
      err('3.3', `${name}: no embedded file stream (/EF /F)`)
      continue
    }
    const sub = pdf.nameOf(stream.dict.get('Subtype'))
    if (!sub || !/^[a-z]+\/[a-z0-9.+-]+$/i.test(sub))
      err(
        '3.3',
        `${name}: stream /Subtype must be a MIME name such as /application#2Fjson (got ${sub ?? 'none'})`,
      )
    const params = pdf.dict(stream.dict.get('Params'))
    if (!params || typeof pdf.get(params, 'Size') !== 'number' || !params.has('ModDate'))
      err('3.3', `${name}: stream /Params needs /Size and /ModDate`)
    try {
      const data = pdf.streamData(stream)
      rawFiles[name] = data
      if (name.endsWith('.json')) docs[name] = JSON.parse(data.toString('utf8'))
    } catch (e) {
      err('3.3', `${name}: cannot read the embedded file: ${e.message}`)
    }
  }
  if (!efNode) err('3.1', 'catalog /Names /EmbeddedFiles is missing: no sidecars')
  else if (!attachments.some((a) => a.name === 'elements.json'))
    err('3.5', 'elements.json is missing')
  const readme = rawFiles['README-agent.md']
  if (readme && readme.toString('utf8').split('\n').length >= 60)
    add('warning', '4.5', 'README-agent.md should be under 60 lines')

  // 4. detection + declaration
  const elementsVersion =
    typeof docs['elements.json']?.['bim-pdf'] === 'string' ? docs['elements.json']['bim-pdf'] : null
  const det = core.detectBimPdf({ xmp, extensionPrefixes, attachments, elementsVersion })
  if (!det) {
    err(
      '4',
      'not a .bim.pdf: no declaration rung hits (XMP label, /Extensions /BIMP, AFRelationship, legacy XMP, elements.json)',
    )
    return result({ attachments: attachments.map((a) => a.name) })
  }
  const declared = det.conformance
  if (det.rung !== 'xmp-label')
    err(
      '4.2',
      `no bimpdf XMP label (detected only by rung "${det.rung}"); a 1.14 file MUST carry formatVersion and conformance`,
    )
  else {
    if (!declared) err('4.2', 'XMP bimpdf:conformance must be core or drawing')
    if (!xmp.includes('pdfaExtension:schemas') || !xmp.includes('https://bimpdf.com/ns/1/'))
      err(
        '4.2',
        'the XMP packet MUST include a PDF/A extension-schema block describing the bimpdf: properties',
      )
  }
  if (det.versionMismatch)
    err(
      '4',
      `XMP formatVersion ${det.declaredVersion} disagrees with elements.json "bim-pdf" ${elementsVersion}`,
    )
  if (!extensionPrefixes.includes(PFX))
    add(
      declared === 'drawing' ? 'error' : 'warning',
      '4.3',
      `catalog /Extensions has no /${PFX} entry`,
    )
  else {
    const e = pdf.dict(ext.get(PFX))
    const ok =
      e &&
      pdf.nameOf(e.get('BaseVersion')) === '1.7' &&
      pdf.resolve(e.get('ExtensionLevel')) === 1 &&
      text(pdf, e.get('URL')) === SPEC_URL
    if (!ok)
      err(
        '4.3',
        `/Extensions /${PFX} must be << /BaseVersion /1.7 /ExtensionLevel 1 /URL (${SPEC_URL}) >>`,
      )
  }

  // 6.3 version / schemas: refuse a version with no schema, never fall back
  let schemasOk = false
  const cur = versionNum(core.CURRENT_FORMAT_VERSION)
  if (elementsVersion) {
    const chk = core.checkFormatVersion(docs['elements.json'])
    if (!chk.ok) err('6.3', chk.message)
    else if (versionNum(elementsVersion) > cur)
      err(
        '6.3',
        `unknown format version ${elementsVersion}: this validator has schemas up to ${core.CURRENT_FORMAT_VERSION} and does not fall back to an older one`,
      )
    else schemasOk = true
  }
  if (schemasOk) {
    const pkg = core.validatePackage(docs)
    for (const [name, r] of Object.entries(pkg.sidecars))
      if (!r.valid) err('schema', `${name}: ${r.message}`)
    for (const m of pkg.packageErrors) err('schema', m)
  }

  // 5 conformance. 2: PDF-native constructs, required at `drawing`.
  const before = findings.length
  const pages = pdf.pages()
  const labelRanges = pageLabelRanges(pdf, cat.get('PageLabels'))
  if (!cat.has('PageLabels'))
    err('2', 'catalog /PageLabels missing (sheet numbers, MUST at drawing)')
  if (!cat.has('Outlines')) err('2', 'catalog /Outlines missing (sheet index, MUST at drawing)')
  else {
    const n = countOutlines(pdf, pdf.dict(cat.get('Outlines'))?.get('First'))
    if (n === 0) err('2', '/Outlines has no entries (one entry per sheet)')
    else if (n !== pages.length)
      add(
        'warning',
        '2',
        `/Outlines has ${n} entries for ${pages.length} pages (one entry per sheet)`,
      )
  }
  const pagesDoc = docs['pages.json']?.pages
  if (labelRanges.length && Array.isArray(pagesDoc)) {
    for (const p of pagesDoc) {
      if (typeof p.sheet_number !== 'string' || typeof p.page !== 'number') continue
      const label = pageLabel(labelRanges, p.page - 1)
      if (label !== p.sheet_number)
        err(
          '2',
          `page ${p.page}: PageLabels say "${label}" but pages.json sheet_number is "${p.sheet_number}"`,
        )
    }
  }
  for (const [pn, entry] of Object.entries(docs['scales.json']?.pages ?? {})) {
    const page = pages[Number(pn) - 1]
    const pdfVps = page
      ? (pdf.array(page.get('VP')) ?? []).map((v) => pdf.dict(v)).filter(Boolean)
      : []
    ;(entry?.viewports ?? []).forEach((vp, j) => {
      const r = vp.rect
      const hit = pdfVps.find((v) => {
        const bb = nums(pdf, v.get('BBox'))
        return bb.length === 4 && r?.length === 4 && bb.every((x, i) => Math.abs(x - r[i]) <= 1)
      })
      if (!hit)
        return err(
          '2',
          `scales.json page ${pn} viewport ${j}: no page /VP entry with the same /BBox (+-1 pt)`,
        )
      const m = pdf.dict(hit.get('Measure'))
      if (!m || pdf.nameOf(m.get('Subtype')) !== 'RL')
        return err('2', `page ${pn} viewport ${j}: /VP /Measure must be /Subtype /RL`)
      const x0 = pdf.dict(pdf.array(m.get('X'))?.[0])
      const unit = x0 ? text(pdf, x0.get('U')) : null
      const c = x0 ? pdf.resolve(x0.get('C')) : null
      const ratio = vp.scale?.type === 'ratio' ? vp.scale.ratio : null
      if (ratio && c && MM_PER_UNIT[unit]) {
        const have = (c * MM_PER_UNIT[unit]) / (25.4 / 72)
        if (Math.abs(have - ratio) / ratio > 0.001)
          err(
            '2',
            `page ${pn} viewport ${j}: /Measure implies 1:${have.toFixed(2)} but scales.json says 1:${ratio} (limit 0.1%)`,
          )
      } else if (ratio)
        add(
          'warning',
          '2',
          `page ${pn} viewport ${j}: scale ratio not compared (/Measure /X unit ${unit ?? 'unknown'})`,
        )
    })
  }
  const nms = new Set()
  pages.forEach((p, i) => {
    for (const a of pdf.array(p.get('Annots')) ?? []) {
      const d = pdf.dict(a)
      const nm = d ? text(pdf, d.get('NM')) : null
      if (!nm)
        err('2', `page ${i + 1}: annotation without /NM (a document-unique id, MUST at drawing)`)
      else if (nms.has(nm)) err('2', `page ${i + 1}: duplicate annotation /NM "${nm}"`)
      else nms.add(nm)
    }
  })
  // Rule 2 findings only block the `drawing` level; below it they are reported as warnings.
  const drawingFindings = findings.splice(before)
  const coreOk = !findings.some((f) => f.severity === 'error')
  const drawingOk = !drawingFindings.some((f) => f.severity === 'error')
  const reached = !coreOk ? null : drawingOk ? 'drawing' : 'core'
  if (declared === 'drawing') findings.push(...drawingFindings)

  if (declared === 'drawing' && reached !== 'drawing')
    err('5', `declares conformance drawing but reaches ${reached ?? 'neither core nor drawing'}`)
  if (declared === 'core' && reached === null)
    err('5', 'declares conformance core but does not reach it')

  return result({
    formatVersion: det.formatVersion,
    declared,
    reached,
    rung: det.rung,
    archival: det.archival,
    attachments: attachments.map((a) => a.name),
  })
}
