import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { mdToHtml, specFacts } from './gen-spec.mjs'

const build = () => spawnSync(process.execPath, ['gen-version.mjs'], { encoding: 'utf8' })

test('/spec is generated from vendor/core: version, schema links, sidecar table', () => {
  const r = build()
  assert.equal(r.status, 0, r.stderr)
  const html = readFileSync('spec/index.html', 'utf8')
  const facts = specFacts()
  assert.equal(facts.current, '1.14')
  assert.match(html, /version 1\.14/)
  for (const f of readdirSync('vendor/core/src/schema').filter((x) =>
    /^bim-pdf-.*\.schema\.json$/.test(x),
  ))
    assert.ok(html.includes(`/schema/${f}`), `schema link ${f}`)
  for (const s of ['elements.json', 'marks.json', 'scales.json', 'pages.json'])
    assert.ok(html.includes(`<code>${s}</code>`), s)
  for (const n of ['1-base-file', '4-declaration-and-discovery', '7-migration'])
    assert.ok(html.includes(`id="${n}"`), n)
  assert.doesNotMatch(html, /\{\{[A-Z_]+\}\}/)
})

test('mdToHtml escapes html and renders tables and lists', () => {
  const h = mdToHtml('### 1. A <b>\n\n- x `<PFX>`\n- y\n\n| a | b |\n| - | - |\n| 1 | 2 |\n')
  assert.match(h, /<h2 id="1-a-b">1\. A &lt;b&gt;<\/h2>/)
  assert.match(h, /<li>x <code>&lt;PFX&gt;<\/code><\/li>/)
  assert.match(h, /<td>2<\/td>/)
})

test('/ns/1/ and /ns/1.0/ pages exist and name their namespace', () => {
  assert.match(readFileSync('ns/1/index.html', 'utf8'), /https:\/\/bimpdf\.com\/ns\/1\//)
  assert.match(readFileSync('ns/1.0/index.html', 'utf8'), /http:\/\/pdfbim\.com\/ns\/1\.0\//)
})

test('llms.txt and index.html: current version, /spec link, no stale claims', () => {
  const llms = readFileSync('llms.txt', 'utf8')
  assert.match(llms, /1\.14/)
  assert.match(llms, /https:\/\/bimpdf\.com\/spec/)
  assert.doesNotMatch(llms, /v1\.1 \(current\)/)
  const idx = readFileSync('index.html', 'utf8')
  assert.doesNotMatch(idx, /no PDF structure modification/)
  assert.doesNotMatch(idx, /extract file attachments by name/)
})

test('licence files are present', () => {
  assert.match(readFileSync('LICENSE', 'utf8'), /Apache License/)
  assert.match(readFileSync('LICENSE-spec', 'utf8'), /Attribution 4\.0 International/)
  assert.ok(existsSync('README.md'))
})
