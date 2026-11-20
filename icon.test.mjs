import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

// bimpdf.com's icon (owner decision D5, 2026-11-02): the b1 cell-grid "b" on ONE flat spot tile, no rim, the same tile
// in light and dark. Two drawings, copied byte for byte from the approved set (_design-topbar/portfolio/v2/flush):
//   favicon.svg = bimpdf-b1-16.svg (hand-tuned for 16 px: the tab icon)
//   logo.svg    = bimpdf-b1-32.svg (the master for 32 px and up: header logo, hero, add-in card)
// Rasters are rendered from them (16 from the 16 drawing, the rest from the 32 master): favicon.ico (16 + 32),
// favicon-32.png, logo.png (256, the og-image source).

const site = fileURLToPath(new URL('.', import.meta.url))
const read = (f) => readFileSync(join(site, f))
const text = (f) => read(f).toString('utf8')
const head = (html) => html.slice(0, html.indexOf('</head>'))
const SPOT_TILE = '<rect width="16" height="16" rx="3" fill="#9a5414"/>'
const SPOT_TILE_32 = '<rect width="32" height="32" rx="6" fill="#9a5414"/>'
const sha = async (buf) => Buffer.from(await crypto.subtle.digest('SHA-256', buf)).toString('hex')
// sha256 of the approved files (portfolio/v2/flush/bimpdf-b1-{16,32}.svg)
const APPROVED = {
  'favicon.svg': '21fd66e48e61084d2c9bea0632438ef6a5deb58a2619fff493906f4ec623bb5a',
  'logo.svg': 'fb0ca70994b9b6aaf97013120146b99715d024714a0ed90ad8db6eb4e242b7fc',
}

const pngSize = (buf) => {
  assert.equal(buf.subarray(1, 4).toString('latin1'), 'PNG', 'a PNG')
  return [buf.readUInt32BE(16), buf.readUInt32BE(20)]
}

test('favicon.svg is the approved 16 px b1 drawing; logo.svg the approved 32 px master', async () => {
  for (const f of ['favicon.svg', 'logo.svg']) assert.ok(existsSync(join(site, f)), `${f} exists`)
  assert.ok(
    text('favicon.svg').startsWith(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">' + SPOT_TILE,
    ),
  )
  assert.ok(
    text('logo.svg').startsWith(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' + SPOT_TILE_32,
    ),
  )
  for (const [f, want] of Object.entries(APPROVED))
    assert.equal(await sha(read(f)), want, `${f} = the approved bytes`)
  for (const f of ['favicon.svg', 'logo.svg'])
    assert.doesNotMatch(text(f), /stroke|prefers-color-scheme/, `${f}: flush tile, one look`)
})

test('index.html declares the SVG favicon first-class, with the ICO + 32 px PNG fallbacks', () => {
  const h = head(text('index.html'))
  assert.match(h, /<link rel="icon" type="image\/svg\+xml" href="\/favicon\.svg">/)
  assert.match(h, /<link rel="icon" href="\/favicon\.ico" sizes="any">/)
  assert.match(h, /<link rel="icon" type="image\/png" href="\/favicon-32\.png" sizes="32x32">/)
})

test('the header logo (a.bk-logo, first in the nav) is the 32 px master beside the bim·pdf wordmark', () => {
  const html = text('index.html')
  assert.match(
    html,
    /<nav class="bk-nav" aria-label="Site">\s*<a class="bk-logo" href="\/"><img src="\/logo\.svg" alt="" width="32" height="32"><span class="bk-wordmark">bim&middot;pdf<\/span><\/a>/,
  )
  // no page draws the old pixel-art file icon any more
  assert.doesNotMatch(html, /src="\/logo\.png"/)
})

test('favicon.ico holds 16 and 32 px images; favicon-32.png is 32 x 32; logo.png is 256 x 256', () => {
  const ico = read('favicon.ico')
  assert.equal(ico.readUInt16LE(0), 0)
  assert.equal(ico.readUInt16LE(2), 1, 'type icon')
  const n = ico.readUInt16LE(4)
  const sizes = []
  for (let i = 0; i < n; i++) {
    const e = 6 + 16 * i
    const [w, h] = [ico[e] || 256, ico[e + 1] || 256]
    const len = ico.readUInt32LE(e + 8)
    const off = ico.readUInt32LE(e + 12)
    assert.deepEqual(
      pngSize(ico.subarray(off, off + len)),
      [w, h],
      'entry PNG matches its directory size',
    )
    sizes.push(w)
  }
  assert.deepEqual(
    sizes.sort((a, b) => a - b),
    [16, 32],
  )
  assert.deepEqual(pngSize(read('favicon-32.png')), [32, 32])
  assert.deepEqual(pngSize(read('logo.png')), [256, 256])
})
