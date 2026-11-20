import test from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { deflateSync } from 'node:zlib'
import * as core from './vendor/validator/validate.bundle.mjs'
import { validateBimPdf } from './validator/validate-bimpdf.mjs'
import { PdfFile } from './validator/pdf-reader.mjs'
import { findVeraPdf } from './scripts/verapdf-check.mjs'

const root = fileURLToPath(new URL('.', import.meta.url))
const examples = readdirSync(join(root, 'examples')).filter((f) => f.endsWith('.bim.pdf'))
const read = (f) => readFileSync(join(root, 'examples', f))
const errorRules = (r) => r.findings.filter((f) => f.severity === 'error').map((f) => f.rule)

test('AC8: every example passes the public validator at its declared conformance', () => {
  assert.ok(examples.length >= 2, 'a core and a drawing example')
  const seen = new Set()
  for (const f of examples) {
    const r = validateBimPdf(read(f))
    assert.deepEqual(
      r.findings.filter((x) => x.severity === 'error'),
      [],
      f,
    )
    assert.equal(r.valid, true, f)
    assert.equal(r.formatVersion, '1.14', f)
    assert.equal(r.reached, r.declared, f)
    seen.add(r.declared)
  }
  assert.deepEqual([...seen].sort(), ['core', 'drawing'])
})

test('examples are what scripts/gen-examples.mjs produces (no hand edits)', () => {
  const out = mkdtempSync(join(tmpdir(), 'bimpdf-ex-'))
  const r = spawnSync(process.execPath, [join(root, 'scripts', 'gen-examples.mjs'), '--out', out], {
    encoding: 'utf8',
  })
  assert.equal(r.status, 0, r.stderr)
  for (const f of examples)
    assert.ok(readFileSync(join(out, f)).equals(read(f)), `${f} differs from the generator output`)
})

test('the vendored validator bundle carries the published 1.14 schema and is locked in vendor/SHA256SUMS', () => {
  const published = JSON.parse(
    readFileSync(join(root, 'vendor/core/src/schema/bim-pdf-1.14.schema.json'), 'utf8'),
  )
  assert.deepEqual(core.bimPdfSchema, published)
  assert.equal(core.CURRENT_FORMAT_VERSION, '1.14')
  assert.match(
    readFileSync(join(root, 'vendor/SHA256SUMS'), 'utf8'),
    /^[0-9a-f]{64} {2}vendor\/validator\/validate\.bundle\.mjs$/m,
  )
})

// Negative cases: byte-level edits of a valid example. The reader ignores the xref, so edits need not keep offsets.
const edit = (file, from, to) => {
  const s = read(file).toString('latin1')
  assert.ok(s.includes(from), `${from} not in ${file}`)
  return Buffer.from(s.replace(from, to), 'latin1')
}
const cases = [
  ['drawing-sheet.bim.pdf', '/AFRelationship /BIMP_Elements', '/AFRelationship /Data', '3.4'],
  ['drawing-sheet.bim.pdf', '/Subtype /application#2Fjson', '/Subtype /Data', '3.3'],
  ['drawing-sheet.bim.pdf', '<bimpdf:formatVersion>1.14<', '<bimpdf:formatVersion>1.13<', '4'],
  ['drawing-sheet.bim.pdf', '"bim-pdf": "1.14"', '"bim-pdf": "1.15"', '6.3'],
  [
    'drawing-sheet.bim.pdf',
    '/NM (a3f0c9d2-1b7e-4c55-9a10-000000000001)',
    '/Nm (a3f0c9d2-1b7e-4c55-9a10-000000000001)',
    '2',
  ],
  ['drawing-sheet.bim.pdf', '/P (A-102)', '/P (A-999)', '2'],
  [
    'drawing-sheet.bim.pdf',
    '/C 35.277778 /D 1 /FD false >>] /D',
    '/C 40.000000 /D 1 /FD false >>] /D',
    '2',
  ],
  ['drawing-sheet.bim.pdf', '/Root 1 0 R', '/Root 1 0 R /Encrypt 9 0 R', '1.2'],
  ['core-minimal.bim.pdf', '%PDF-1.7', '%PDF-1.4', '1.1'],
  [
    'core-minimal.bim.pdf',
    '\\(https://bimpdf.com/spec\\)) /AFRelationship /BIMP_Elements',
    '\\(https://example.org/\\)) /AFRelationship /BIMP_Elements',
    '3.2',
  ],
  ['core-minimal.bim.pdf', '"element_id": "wall-0001"', '"element_id": 7', 'schema'],
]
for (const [file, from, to, rule] of cases) {
  test(`refuses ${file}: ${from.slice(0, 40)} -> ${to.slice(0, 30)} [${rule}]`, () => {
    const r = validateBimPdf(edit(file, from, to))
    assert.equal(r.valid, false)
    assert.ok(
      errorRules(r).includes(rule),
      `expected a [${rule}] error, got ${JSON.stringify(r.findings)}`,
    )
  })
}

test('a drawing file that lacks a drawing construct is refused; a core file need not have it', () => {
  const d = validateBimPdf(edit('drawing-sheet.bim.pdf', '/Outlines 3 0 R', '/OutlinesX 3 0 R'))
  assert.equal(d.valid, false)
  assert.ok(errorRules(d).includes('5'))
  const c = validateBimPdf(read('core-minimal.bim.pdf'))
  assert.equal(c.valid, true)
  assert.equal(c.findings.length, 0)
})

test('a plain PDF is not a .bim.pdf', () => {
  const plain = Buffer.from(
    '%PDF-1.7\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [] /Count 0 >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF\n',
  )
  const r = validateBimPdf(plain)
  assert.equal(r.valid, false)
  assert.ok(errorRules(r).includes('4'))
})

test('reader: object streams, Flate and /Kids name trees', () => {
  const objs = [
    '<< /Type /Catalog /Pages 2 0 R /Names << /EmbeddedFiles 4 0 R >> >>',
    '<< /Type /Pages /Kids [] /Count 0 >>',
    '<< /Kids [5 0 R] >>',
    '<< /Names [(a.json) 6 0 R (b.json) 7 0 R] >>',
  ]
  const nums = [1, 2, 4, 5]
  let off = 0
  const head = objs
    .map((o, i) => {
      const h = `${nums[i]} ${off} `
      off += o.length + 1
      return h
    })
    .join('')
  const objstm = deflateSync(Buffer.from(head + objs.join(' '), 'latin1'))
  const pdf = Buffer.concat([
    Buffer.from(
      `%PDF-1.7\n9 0 obj\n<< /Type /ObjStm /N 4 /First ${head.length} /Filter /FlateDecode /Length ${objstm.length} >>\nstream\n`,
    ),
    objstm,
    Buffer.from(
      '\nendstream\nendobj\n10 0 obj\n<< /Type /XRef /Root 1 0 R >>\nstream\n\nendstream\nendobj\n',
    ),
  ])
  const f = new PdfFile(pdf)
  assert.ok(f.catalog, 'catalog read out of the object stream')
  const tree = f.dict(f.catalog.get('Names')).get('EmbeddedFiles')
  assert.deepEqual(
    f.nameTree(tree).map((e) => e.name),
    ['a.json', 'b.json'],
  )
})

test('CLI: exit 0 on the examples, 1 on a broken file, 2 without arguments', () => {
  const cli = join(root, 'validator', 'bimpdf-validate.mjs')
  const ok = spawnSync(process.execPath, [cli, ...examples.map((f) => join(root, 'examples', f))], {
    encoding: 'utf8',
  })
  assert.equal(ok.status, 0, ok.stdout + ok.stderr)
  assert.match(
    ok.stdout,
    /ok .*drawing-sheet\.bim\.pdf \(format 1\.14 drawing\+pdfa-3b, reached drawing\)/,
  )
  const bad = join(mkdtempSync(join(tmpdir(), 'bimpdf-bad-')), 'bad.bim.pdf')
  writeFileSync(bad, edit('core-minimal.bim.pdf', '%PDF-1.7', '%PDF-1.4'))
  const fail = spawnSync(process.execPath, [cli, '--json', bad], { encoding: 'utf8' })
  assert.equal(fail.status, 1)
  assert.equal(JSON.parse(fail.stdout)[0].valid, false)
  assert.equal(spawnSync(process.execPath, [cli], { encoding: 'utf8' }).status, 2)
})

// AC10 runs in CI's verapdf job, and here when veraPDF is installed (VERAPDF=<dir> npm test).
test(
  'AC10: the archival example passes veraPDF PDF/A-3b',
  { skip: findVeraPdf() ? false : 'veraPDF not installed (CI job `verapdf` runs it)' },
  () => {
    const r = spawnSync(process.execPath, [join(root, 'scripts', 'verapdf-check.mjs')], {
      encoding: 'utf8',
    })
    assert.equal(r.status, 0, r.stdout + r.stderr)
    assert.match(r.stdout, /PASS .*drawing-sheet\.bim\.pdf/)
  },
)
