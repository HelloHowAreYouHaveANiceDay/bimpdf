// Generates the synthetic example files in examples/ (no client data, no PDF library).
//   node scripts/gen-examples.mjs [--out <dir>]   rewrite examples/*.bim.pdf (or write them to <dir>)
// The declaration (XMP label, /Extensions, AFRelationship, /Desc) comes from core's declaration writer, the
// same code the producers use (vendor/validator). Files: a core-level example and a drawing-level example
// that also carries the archival flag (written to pass veraPDF PDF/A-3b: no text, CalGray linework).
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { writeDeclaration } from '../vendor/validator/validate.bundle.mjs'

const root = fileURLToPath(new URL('..', import.meta.url))
const MOD = "D:20260705000000+00'00'"
const IDS = {
  project: '8f1a3c2e-0000-5000-8000-000000000001',
  document: '8f1a3c2e-0000-5000-8000-000000000002',
  level: '8f1a3c2e-0000-5000-8000-0000000000aa',
}
const meta = {
  project_id: IDS.project,
  document_id: IDS.document,
  exported_at: '2026-07-05T00:00:00Z',
  producer: 'bimpdf-site gen-examples (synthetic)',
}
const source = {
  format: 'other',
  version: '1',
  id_strategy: 'synthetic-sequential',
  id_stability_notes: 'synthetic example; ids are fixed strings',
}
const json = (o) => Buffer.from(JSON.stringify(o, null, 2) + '\n')

const elements = {
  'bim-pdf': '1.14',
  meta,
  source,
  class_registry: '1.0',
  elements: [
    {
      id: 'wall-0001',
      class: 'wall',
      label: 'Basic Wall: Generic - 200mm',
      level: 'Level 1',
      level_id: IDS.level,
      quantities: { length: { value: 5.0, unit: 'm' }, area: { value: 12.5, unit: 'm2' } },
    },
    {
      id: 'door-0001',
      class: 'door',
      label: 'Single-Flush: 0915 x 2134mm',
      level: 'Level 1',
      level_id: IDS.level,
    },
  ],
}
const levels = {
  'bim-pdf': '1.14',
  levels: [{ id: IDS.level, name: 'Level 1', elevation: { value: 0, unit: 'm' } }],
}
const readme = (what) =>
  Buffer.from(
    [
      '# Reading this file',
      '',
      `This is a synthetic bimpdf 1.14 example (${what}). It contains no real project data.`,
      '',
      '1. Start with `elements.json`: the building elements and their ids.',
      '2. `marks.json` places elements on pages (bbox in PDF points, bottom-left origin).',
      '3. Every attachment is listed in the catalog `/AF`; `/Desc` names its role.',
      '4. The format specification is https://bimpdf.com/spec.',
      '',
    ].join('\n'),
  )

// ------------------------------------------------------------------ PDF writer
const bin = (s) => Buffer.from(s, 'latin1')
const str = (s) => '(' + s.replace(/[\\()]/g, '\\$&') + ')'
const hex = (s) => '<FEFF' + Buffer.from(s, 'utf16le').swap16().toString('hex').toUpperCase() + '>'

// objects: [num, Buffer|string] pairs, written in number order with a classic xref table
function build(objects) {
  const head = Buffer.concat([bin('%PDF-1.7\n%'), Buffer.from([0xe2, 0xe3, 0xcf, 0xd3]), bin('\n')])
  const parts = [head]
  const offsets = new Map()
  let pos = head.length
  const push = (b) => {
    parts.push(b)
    pos += b.length
  }
  for (const [num, body] of [...objects].sort((a, b) => a[0] - b[0])) {
    offsets.set(num, pos)
    push(
      Buffer.concat([
        bin(`${num} 0 obj\n`),
        Buffer.isBuffer(body) ? body : bin(body),
        bin('\nendobj\n'),
      ]),
    )
  }
  const size = Math.max(...offsets.keys()) + 1
  const xrefAt = pos
  let x = `xref\n0 ${size}\n0000000000 65535 f \n`
  for (let i = 1; i < size; i++)
    x += `${String(offsets.get(i) ?? 0).padStart(10, '0')} 00000 ${offsets.has(i) ? 'n' : 'f'} \n`
  const id = '<0123456789ABCDEF0123456789ABCDEF>'
  x += `trailer\n<< /Size ${size} /Root 1 0 R /ID [${id} ${id}] >>\nstartxref\n${xrefAt}\n%%EOF\n`
  push(bin(x))
  return Buffer.concat(parts)
}
const streamObj = (dict, data) =>
  Buffer.concat([bin(`<< ${dict} /Length ${data.length} >>\nstream\n`), data, bin('\nendstream')])

function xmpBase(archival) {
  const pdfa = archival
    ? '<rdf:Description rdf:about="" xmlns:pdfaid="http://www.aiim.org/pdfa/ns/id/"><pdfaid:part>3</pdfaid:part><pdfaid:conformance>B</pdfaid:conformance></rdf:Description>'
    : ''
  return (
    '<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>\n<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">' +
    pdfa +
    '<rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<xmp:CreatorTool>bimpdf-site gen-examples (synthetic)</xmp:CreatorTool><xmp:CreateDate>2026-07-05T00:00:00Z</xmp:CreateDate><xmp:ModifyDate>2026-07-05T00:00:00Z</xmp:ModifyDate>' +
    '<dc:title><rdf:Alt><rdf:li xml:lang="x-default">bimpdf synthetic example</rdf:li></rdf:Alt></dc:title></rdf:Description>' +
    '</rdf:RDF></x:xmpmeta>\n<?xpacket end="w"?>'
  )
}

function makeFile({ conformance, archival, sidecars, pageSpecs }) {
  const objects = []
  let next = 10
  const alloc = () => next++
  const decl = writeDeclaration({
    conformance,
    archival,
    attachmentNames: Object.keys(sidecars),
    existingXmp: xmpBase(archival),
  })
  const files = decl.attachments.map((a) => {
    const fsNum = alloc()
    const stNum = alloc()
    const data = sidecars[a.name]
    objects.push([
      stNum,
      streamObj(
        `/Type /EmbeddedFile /Subtype /${a.subtype} /Params << /Size ${data.length} /ModDate (${MOD}) >>`,
        data,
      ),
    ])
    objects.push([
      fsNum,
      `<< /Type /Filespec /F ${str(a.name)} /UF ${str(a.name)} /Desc ${str(a.desc)} /AFRelationship /${a.afRelationship} /EF << /F ${stNum} 0 R /UF ${stNum} 0 R >> >>`,
    ])
    return { name: a.name, fsNum }
  })
  files.sort((a, b) => (a.name < b.name ? -1 : 1))
  const pageNums = pageSpecs.map(() => alloc())
  const contentNums = pageSpecs.map(() => alloc())
  pageSpecs.forEach((p, i) => {
    const annots = (p.annots ?? []).map((a) => {
      const n = alloc()
      objects.push([
        n,
        `<< /Type /Annot /Subtype /Link /Rect [${a.rect.join(' ')}] /Border [0 0 0] /F 4 /NM ${str(a.nm)} /Dest [${pageNums[0]} 0 R /Fit] >>`,
      ])
      return n
    })
    objects.push([contentNums[i], streamObj('', bin(p.content))])
    objects.push([
      pageNums[i],
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${p.w} ${p.h}] /Resources << /ColorSpace << /CS0 [/CalGray << /WhitePoint [0.9505 1 1.089] /Gamma 1 >>] >> >> /Contents ${contentNums[i]} 0 R` +
        (annots.length ? ` /Annots [${annots.map((n) => `${n} 0 R`).join(' ')}]` : '') +
        (p.vp ? ` /VP [${p.vp}]` : '') +
        ' >>',
    ])
  })
  objects.push([
    2,
    `<< /Type /Pages /Kids [${pageNums.map((n) => `${n} 0 R`).join(' ')}] /Count ${pageNums.length} >>`,
  ])
  let drawing = ''
  if (conformance === 'drawing') {
    const outNums = pageSpecs.map(() => alloc())
    objects.push([
      3,
      `<< /Type /Outlines /First ${outNums[0]} 0 R /Last ${outNums.at(-1)} 0 R /Count ${outNums.length} >>`,
    ])
    pageSpecs.forEach((p, i) => {
      objects.push([
        outNums[i],
        `<< /Title ${hex(`${p.sheet} ${p.title}`)} /Parent 3 0 R` +
          (i ? ` /Prev ${outNums[i - 1]} 0 R` : '') +
          (i < outNums.length - 1 ? ` /Next ${outNums[i + 1]} 0 R` : '') +
          ` /Dest [${pageNums[i]} 0 R /Fit] >>`,
      ])
    })
    objects.push([
      4,
      `<< /Nums [${pageSpecs.map((p, i) => `${i} << /P ${str(p.sheet)} >>`).join(' ')}] >>`,
    ])
    drawing = ' /Outlines 3 0 R /PageLabels 4 0 R'
  }
  objects.push([5, streamObj('/Type /Metadata /Subtype /XML', Buffer.from(decl.xmp, 'utf8'))])
  const e = decl.extensions
  objects.push([
    1,
    `<< /Type /Catalog /Pages 2 0 R /Metadata 5 0 R /Names << /EmbeddedFiles << /Names [${files.map((f) => `${str(f.name)} ${f.fsNum} 0 R`).join(' ')}] >> >> /AF [${files.map((f) => `${f.fsNum} 0 R`).join(' ')}]` +
      ` /Extensions << /${e.key} << /BaseVersion /${e.baseVersion} /ExtensionLevel ${e.extensionLevel} /URL (${e.url}) >> >>${drawing} >>`,
  ])
  return build(objects)
}

// ------------------------------------------------------------------ the two files
const coreFile = makeFile({
  conformance: 'core',
  sidecars: {
    'elements.json': json(elements),
    'levels.json': json(levels),
    'marks.json': json({
      'bim-pdf': '1.14',
      requires: ['elements.json'],
      coordinate_space: 'pdf-points-bottom-left',
      marks: [{ element_id: 'wall-0001', page: 1, bbox: [72, 72, 288, 144], view_type: 'plan' }],
    }),
    'README-agent.md': readme('conformance core'),
  },
  pageSpecs: [{ w: 612, h: 792, content: '' }],
})

// Drawing example: two sheets. Sheet A-101 has one scaled viewport (1:100) holding a CalGray frame and a wall.
const C = (100 * 25.4) / 72 // mm of model per PDF point at 1:100
const vpRect = [72, 72, 540, 720]
const source1 = {
  driver: 'other',
  document_id: 'synthetic',
  producer: meta.producer,
  exported_at: meta.exported_at,
  format: 'other',
}
const drawingFile = makeFile({
  conformance: 'drawing',
  archival: 'pdfa-3b',
  sidecars: {
    'elements.json': json(elements),
    'levels.json': json(levels),
    'marks.json': json({
      'bim-pdf': '1.14',
      requires: ['elements.json'],
      coordinate_space: 'pdf-points-bottom-left',
      marks: [
        { element_id: 'wall-0001', page: 1, bbox: [100, 300, 460, 312], view_type: 'plan', vp: 0 },
        { element_id: 'door-0001', page: 1, bbox: [270, 296, 300, 316], view_type: 'plan', vp: 0 },
      ],
    }),
    'scales.json': json({
      'bim-pdf': '1.14',
      pages: {
        1: {
          viewports: [
            {
              rect: vpRect,
              name: 'Level 1 plan',
              scale: { type: 'ratio', ratio: 100, unit: 'mm' },
            },
          ],
        },
        2: { default: { type: 'ratio', ratio: 100, unit: 'mm' } },
      },
    }),
    'pages.json': json({
      'bim-pdf': '1.14',
      meta,
      pages: [
        {
          page: 1,
          page_id: 'synthetic:a-101',
          native_key: 'a-101',
          sheet_number: 'A-101',
          label: 'Level 1 Plan',
          source: source1,
          geometry: { media_box: [0, 0, 612, 792], rotate: 0 },
        },
        {
          page: 2,
          page_id: 'synthetic:a-102',
          native_key: 'a-102',
          sheet_number: 'A-102',
          label: 'Notes',
          source: source1,
          geometry: { media_box: [0, 0, 612, 792], rotate: 0 },
        },
      ],
    }),
    'README-agent.md': readme('conformance drawing, archival pdfa-3b'),
  },
  pageSpecs: [
    {
      w: 612,
      h: 792,
      sheet: 'A-101',
      title: 'Level 1 Plan',
      content: '/CS0 CS 0 SC 1 w 72 72 468 648 re S 100 300 m 460 300 l S 100 312 m 460 312 l S',
      vp: `<< /Type /Viewport /Name (Level 1 plan) /BBox [${vpRect.join(' ')}] /Measure << /Type /Measure /Subtype /RL /R (1:100) /X [<< /Type /NumberFormat /U (mm) /C ${C.toFixed(6)} /D 1 /FD false >>] /D [<< /Type /NumberFormat /U (mm) /C ${C.toFixed(6)} /D 1 /FD false >>] /A [<< /Type /NumberFormat /U (mm) /C 1 /D 1 /FD false >>] >> >>`,
      annots: [{ rect: [100, 296, 130, 316], nm: 'a3f0c9d2-1b7e-4c55-9a10-000000000001' }],
    },
    {
      w: 612,
      h: 792,
      sheet: 'A-102',
      title: 'Notes',
      content: '/CS0 CS 0 SC 1 w 72 72 468 648 re S',
      annots: [{ rect: [100, 700, 200, 720], nm: 'a3f0c9d2-1b7e-4c55-9a10-000000000002' }],
    },
  ],
})

const oi = process.argv.indexOf('--out')
const out = oi > 0 ? process.argv[oi + 1] : join(root, 'examples')
mkdirSync(out, { recursive: true })
writeFileSync(join(out, 'core-minimal.bim.pdf'), coreFile)
writeFileSync(join(out, 'drawing-sheet.bim.pdf'), drawingFile)
console.log(
  `wrote core-minimal.bim.pdf (${coreFile.length} bytes), drawing-sheet.bim.pdf (${drawingFile.length} bytes) to ${out}`,
)
