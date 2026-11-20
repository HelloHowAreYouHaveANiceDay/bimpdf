import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

// bimpdf.com is styled by the Broadsheet UI kit (packages/ui-kit). These checks keep it that way:
// the pages load the kit, the site CSS uses kit tokens only and no raw colour, the kit's spot comes from
// design/tokens.css (never a site override), and the site draws no look the kit owns (bare elements, kit classes).

const appPath = fileURLToPath(new URL('.', import.meta.url))
// pinned to Broadsheet 1.0.0 (design/vendor/broadsheet/1.0.0, from ui.bimisland.com/kit/1.0.0/)
const kitPath = join(appPath, 'design/vendor/broadsheet/1.0.0')
const PAGES = ['index.html', '404.html']

const read = (f) => readFileSync(join(appPath, f), 'utf8')
const tokensCss = readFileSync(join(kitPath, 'tokens.css'), 'utf8')
const baseCss = readFileSync(join(kitPath, 'base.css'), 'utf8')
const siteCss = (html) =>
  [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n')
const styleAttrs = (html) => [...html.matchAll(/\sstyle="([^"]*)"/g)].map((m) => m[1])
const stripComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '')
const head = (html) => html.slice(0, html.indexOf('</head>'))

const definedVars = new Set(
  [...(tokensCss + baseCss).matchAll(/(--ui-[a-z0-9-]+)\s*:/g)].map((m) => m[1]),
)

for (const page of PAGES) {
  const html = read(page)

  test(`${page}: loads the kit (tokens, then base) before the site styles`, () => {
    const h = head(html)
    const tokens = h.indexOf('<link rel="stylesheet" href="/kit/tokens.css">')
    const spot = h.indexOf('<link rel="stylesheet" href="/kit/spot.css">')
    const base = h.indexOf('<link rel="stylesheet" href="/kit/base.css">')
    const style = h.indexOf('<style>')
    assert.ok(tokens >= 0, 'links /kit/tokens.css')
    assert.ok(spot > tokens, 'links /kit/spot.css after tokens.css')
    assert.ok(base > spot, 'links /kit/base.css after spot.css')
    assert.ok(style > base, 'site <style> comes after the kit')
    // pinned, same-origin copies only: no stylesheet from another origin
    assert.doesNotMatch(h, /<link[^>]+rel="stylesheet"[^>]+href="(https?:)?\/\//)
  })

  test(`${page}: body is the kit root in reading density, the reading column (the spot is design/tokens.css, no data-bk-property)`, () => {
    assert.match(html, /<body class="bk-page bk-page--reading" data-bk-density="reading">/)
  })

  test(`${page}: no raw colour (the spot colour is design/tokens.css)`, () => {
    const css = stripComments(siteCss(html)) + '\n' + styleAttrs(html).join('\n')
    const hexes = [...css.matchAll(/#[0-9a-fA-F]{3,8}\b/g)].map((m) => m[0].toUpperCase())
    assert.deepEqual([...new Set(hexes)], [], 'no raw hex in the site CSS')
    assert.doesNotMatch(
      css,
      /\b(rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\(/,
      'no functional colours',
    )
    assert.doesNotMatch(
      css,
      /\b(box-shadow|text-shadow|drop-shadow|border-radius)\b/,
      'kit is flat and square',
    )
    assert.doesNotMatch(css, /linear-gradient|radial-gradient/, 'no gradients')
  })

  test(`${page}: every custom property it reads is a kit token`, () => {
    const css = stripComments(siteCss(html)) + '\n' + styleAttrs(html).join('\n')
    const used = [...css.matchAll(/var\((--[a-z0-9-]+)/g)].map((m) => m[1])
    const unknown = [...new Set(used)].filter((v) => !definedVars.has(v))
    assert.deepEqual(unknown, [], 'unknown custom properties (renamed kit token?)')
  })

  test(`${page}: the spot colour never colours text`, () => {
    const css = stripComments(siteCss(html))
    assert.doesNotMatch(
      css,
      /(^|[;{\s])color\s*:\s*var\(--ui-color-spot\)/,
      'color: var(--ui-color-spot)',
    )
  })

  test(`${page}: every link is a kit tap target or a kit button (no inline text link, no site nav link)`, () => {
    const body = html.slice(html.indexOf('<body'))
    const links = [...body.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map((m) => ({
      attrs: m[1],
      text: m[2],
      at: m.index,
    }))
    const bad = links
      .filter((l) => {
        if (/class="[^"]*\bbk-button\b/.test(l.attrs)) return false // a kit button
        const before = body.slice(0, l.at)
        const open = (tag) =>
          before.lastIndexOf(`<${tag}`) > before.lastIndexOf(`</${tag.split(' ')[0]}>`)
        return !(
          open('nav class="bk-nav"') ||
          open('nav class="bk-linkrow"') ||
          open('nav class="bk-crumbs"')
        )
      })
      .map((l) => l.text.replace(/<[^>]+>/g, '').trim())
    assert.deepEqual(bad, [])
  })

  test(`${page}: the site writes no kit-owned look -- no --ui-* token, no bare-element or kit-class rule`, () => {
    const css = stripComments(siteCss(html))
    assert.doesNotMatch(
      css,
      /--ui-[a-z0-9-]+\s*:/,
      'a site sets no --ui-* token (the spot comes from design/tokens.css)',
    )
    const selectors = [...css.matchAll(/([^{}]+)\{/g)]
      .map((m) => m[1].trim())
      .filter((s) => !s.startsWith('@'))
    // the reading-density element defaults the kit owns since 0.4.0, and the kit's own classes
    const owned =
      /(^|[\s>+~(,])(h1|h2|h3|ul|ol|li|pre|blockquote|table|th|td|dl|dt|dd|hr|figure|figcaption|main)(?![\w-])|\.bk-(?!page\b)/
    const local = selectors.filter((s) =>
      s
        .split(',')
        .some((part) => owned.test(part.trim()) && !/^\.(plugin|hero) /.test(part.trim())),
    )
    assert.deepEqual(local, [], 'site rules restyling what the kit owns')
  })

  test(`${page}: every bk- class it uses exists in the kit`, () => {
    const classes = [...html.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/))
    const missing = [...new Set(classes.filter((c) => c.startsWith('bk-')))].filter(
      (c) => !new RegExp(`\\.${c}(?![a-z0-9-])`).test(baseCss),
    )
    assert.deepEqual(missing, [])
  })
}

test('design/tokens.css owns the bimpdf spot: light, OS dark and forced dark, and nothing else', () => {
  const own = readFileSync(join(appPath, 'design/tokens.css'), 'utf8')
  const spots = [...own.matchAll(/--ui-color-spot:\s*(#[0-9a-f]{6});/g)].map((m) => m[1])
  assert.deepEqual(spots, ['#9a5414', '#c8721e', '#c8721e'], 'light + OS dark + forced dark')
  assert.match(own, /:root\[data-theme='dark'\]/)
  assert.match(own, /@media \(prefers-color-scheme: dark\)/)
  const declared = [...stripComments(own).matchAll(/(--[a-z0-9-]+)\s*:/g)].map((m) => m[1])
  assert.deepEqual([...new Set(declared)], ['--ui-color-spot'], 'only the spot is set')
})

test('index.html: one-row masthead -- the logo link is the first child of the kit nav (kit 0.4.1), no site brand rule', () => {
  const html = read('index.html')
  assert.match(
    html,
    /<header class="bk-masthead">\s*<nav class="bk-nav" aria-label="Site">\s*<a class="bk-logo" href="\/">/,
  )
  assert.doesNotMatch(
    html,
    /class="bk-nameplate"|class="brand"/,
    'no nameplate row above the nav, no site brand link',
  )
})

test('index.html: every wide-table scroller is the kit wrapper, focusable and named (role=region, aria-label, tabindex=0)', () => {
  const html = read('index.html')
  const tables = (html.match(/<table>/g) || []).length
  const wraps = [...html.matchAll(/<div class="bk-table-wrap"([^>]*)>\s*<table>/g)].map((m) => m[1])
  assert.equal(wraps.length, tables, 'every table sits in a bk-table-wrap')
  for (const a of wraps) assert.match(a, /role="region" aria-label="[^"]+" tabindex="0"/)
})
