---
version: alpha
name: Broadsheet
description: >-
  The Everbeach UI kit. Essentialist newsprint: seven inks on a neutral light
  paper, serif headlines, monospaced tabular ledger data, sans chrome, hairline
  rules instead of boxes, square corners. Meaning is carried by lightness, an
  edge and a word, never by hue or weight.
colors:
  series-1: "#141414"
  series-2: "#575757"
  chart-grid: "#d4d4d4"
  chart-axis: "#575757"
  hatch-ink: "#141414"
  primary: "#141414"
  on-primary: "#fafafa"
  background: "#fafafa"
  panel: "#ebebeb"
  elevated: "#ebebeb"
  hover: "#ebebeb"
  line: "#d4d4d4"
  border: "#575757"
  focus: "#141414"
  text: "#141414"
  muted: "#575757"
  faint: "#575757"
  ok: "#141414"
  warn: "#575757"
  bad: "#141414"
  alert: "#a01919"
  on-alert: "#fafafa"
  spot: "#a12a61"
colorsDark:
  series-1: "#f5f5f5"
  series-2: "#b6b6b6"
  chart-grid: "#333333"
  chart-axis: "#b6b6b6"
  hatch-ink: "#f5f5f5"
  primary: "#f5f5f5"
  on-primary: "#0f0f0f"
  background: "#0f0f0f"
  panel: "#1e1e1e"
  elevated: "#1e1e1e"
  hover: "#1e1e1e"
  line: "#333333"
  border: "#b6b6b6"
  focus: "#f5f5f5"
  text: "#f5f5f5"
  muted: "#b6b6b6"
  faint: "#b6b6b6"
  ok: "#f5f5f5"
  warn: "#b6b6b6"
  bad: "#f5f5f5"
  alert: "#eb776b"
  on-alert: "#0f0f0f"
  spot: "#d77aa4"
colorsSheet:
  background: "#ffffff"
spots:
  # One spot per portfolio property: data-bk-property="<name>" on <html> or <body>. pmt = the default spot.
  pmt:
    light: "#a12a61"
    dark: "#d77aa4"
  bimpdf:
    light: "#9a5414"
    dark: "#c8721e"
  bimcli:
    light: "#896400"
    dark: "#f4b400"
fonts:
  serif: "Georgia, 'Times New Roman', ui-serif, serif"
  sans: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
  mono: "'SF Mono', ui-monospace, 'Cascadia Mono', Menlo, Consolas, monospace"
typography:
  masthead:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 1.75rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline-lg:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.25
  headline-md:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 0.9375rem
    coarseFontSize: 1.0625rem
    fontWeight: 700
    lineHeight: 1.25
  field:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 0.75rem
    coarseFontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  headline-sm:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 0.8125rem
    fontWeight: 700
    lineHeight: 1.25
  body-md:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 0.8125rem
    coarseFontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 0.75rem
    coarseFontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 0.75rem
    coarseFontSize: 0.9375rem
    fontWeight: 600
    lineHeight: 1
  label-sm:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 0.6875rem
    coarseFontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.06em
  data-display:
    fontFamily: "'SF Mono', ui-monospace, 'Cascadia Mono', Menlo, Consolas, monospace"
    fontSize: 1.625rem
    fontWeight: 400
    lineHeight: 1
    fontFeature: "'tnum'"
  data-md:
    fontFamily: "'SF Mono', ui-monospace, 'Cascadia Mono', Menlo, Consolas, monospace"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum'"
  data-sm:
    fontFamily: "'SF Mono', ui-monospace, 'Cascadia Mono', Menlo, Consolas, monospace"
    fontSize: 0.75rem
    coarseFontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum'"
  reading-display:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 2.75rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  reading-headline:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 1.75rem
    fontWeight: 700
    lineHeight: 1.15
  reading-subhead:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.25
  reading-lead:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.5
  reading-body:
    fontFamily: "Georgia, 'Times New Roman', ui-serif, serif"
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "'SF Mono', ui-monospace, 'Cascadia Mono', Menlo, Consolas, monospace"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum'"
rounded:
  none: 0px
spacing:
  # Spacing: the 4px grid in rem (--bk-space-<n>; 1rem = 16px at the default root)
  "0": 0.125rem
  "1": 0.25rem
  "2": 0.5rem
  "3": 0.75rem
  "4": 1rem
  "5": 1.5rem
  "6": 2rem
  "7": 3rem
  # Controls: control heights (fine pointer, in rem; then the any-pointer: coarse twins and the touch minimum, in px)
  control-sm: 1.5rem
  control-md: 1.75rem
  control-lg: 2.125rem
  control-sm-coarse: 44px
  control-md-coarse: 44px
  control-lg-coarse: 48px
  touch-min: 44px
  # Rules & focus: line weights and the focus ring (px: a hairline that scales stops being a hairline)
  rule: 1px
  rule-medium: 2px
  rule-heavy: 3px
  focus-ring: 2px
  # Page: page width, the reading column and the reading measure
  page-max: 1440px
  reading-max: 47.5rem
  measure: 68ch
  # State: how a disabled control fades (a unitless opacity, not a size)
  disabled-opacity: 0.45
components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    padding: 1rem
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
  well:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: 0.75rem
  ledger-row-detail:
    backgroundColor: "{colors.elevated}"
    textColor: "{colors.text}"
    typography: "{typography.data-sm}"
  control:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    height: 1.75rem
    padding: 0.5rem
  control-hover:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
  ledger-row-hover:
    backgroundColor: "{colors.hover}"
    textColor: "{colors.text}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    height: 1.75rem
    padding: 0.5rem
  button-alert:
    backgroundColor: "{colors.alert}"
    textColor: "{colors.on-alert}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    height: 1.75rem
    padding: 0.5rem
  caption:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
  meta:
    backgroundColor: "{colors.background}"
    textColor: "{colors.faint}"
    typography: "{typography.label-sm}"
  status-ok:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ok}"
    typography: "{typography.label-sm}"
  status-warn:
    backgroundColor: "{colors.background}"
    textColor: "{colors.warn}"
    typography: "{typography.label-sm}"
  status-bad:
    backgroundColor: "{colors.background}"
    textColor: "{colors.bad}"
    typography: "{typography.label-sm}"
  status-quiet:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted}"
    typography: "{typography.label-sm}"
  rule-hairline:
    backgroundColor: "{colors.line}"
    height: 1px
  rule-strong:
    backgroundColor: "{colors.border}"
    height: 1px
  focus-ring:
    backgroundColor: "{colors.focus}"
    width: 2px
  spot-mark:
    backgroundColor: "{colors.background}"
    textColor: "{colors.spot}"
    typography: "{typography.masthead}"
  chart-series-1:
    backgroundColor: "{colors.series-1}"
  chart-series-2:
    backgroundColor: "{colors.series-2}"
  chart-grid:
    backgroundColor: "{colors.chart-grid}"
    height: "{spacing.rule}"
  chart-axis:
    backgroundColor: "{colors.chart-axis}"
    height: "{spacing.rule}"
  chart-hatch:
    backgroundColor: "{colors.hatch-ink}"
    width: "{spacing.rule}"
---

# Broadsheet

## Overview

Broadsheet is the one UI kit for the Everbeach properties (pdfmarkuptool.com,
bimpdf.com, bimcli.com, and bimisland's apps: bimisland.com, status.bimisland.com,
bim.bimisland.com, dash.bimisland.com). It is a newspaper set the way a careful
printer would set it when every ink and every typeface costs money: a dense
page of paper and ink where structure comes from size, space, position and
hairline rules rather than boxes, colour, weight or shadow.

- **Seven inks per theme.** paper, tint, rule, grey, ink, alert and spot. The
  18 colour names below all resolve to one of these seven values; a new name
  never brings a new value.
- **Neutral paper in both themes.** The light page is a neutral #fafafa and
  its tint, rule, grey and ink are neutral greys too (0.3.1: the warm laid
  paper of 0.3.0 read as yellow on real pages). Dark is neutral as well. The
  drawing sheet stays pure white (#ffffff): it is the job's artwork, not
  chrome, and it keeps its hairline edge, because white on #fafafa is too
  close to see without it.
- **Newsprint character.** Serif (Georgia) for nameplates and headlines,
  monospaced tabular figures for every number in a ledger, a plain system sans
  for chrome (buttons, labels, navigation).
- **Four faces.** sans 400 and 600, serif 700, mono 400. Weight never carries
  state: a selected, current, pressed or expanded thing changes fill or edge,
  never weight.
- **Status is a word.** A status chip is a small-caps word in the line, with
  no box: ok and bad are ink (the worst state never reads weakest), warn and
  quiet are the grey, and the word tells them apart, so the page reads the same
  printed in black and white or seen with any colour-vision deficiency. Only a
  selection (ink) and an urgent word (red) take a fill.
- **One red.** A single newspaper red (`alert`) appears only redundantly, next
  to a label that already says URGENT, DOWN or DELETE.
- **One spot colour per property.** Each site has exactly one `spot` colour,
  used for its logo and, in pdfmarkuptool, for markup ink on the drawing sheet.
  The kit owns every property's spot (the `spots` registry): a site names
  itself with `data-bk-property` and never writes `--bk-spot`. It never colours
  chrome, and spot text sits on paper only.
- **Two densities.** `ledger` (the default: 0.8125rem / 13px base, tight rows,
  dashboards and tools) and `reading` (1.0625rem / 17px serif body, a 68ch
  measure: marketing pages and docs). A density is inherited: a kit root
  nested in a reading page stays in reading density; `data-bk-density="ledger"`
  switches a section back.
- **Accessibility is a token property.** Body text is at least 7:1 (AAA),
  secondary text at least 4.5:1, interactive edges and focus rings at least
  3:1 -- on every surface (background, panel, elevated, hover, and the white
  sheet), in both themes. The kit's tests fail when a token breaks this.
- **Charts are ink, one grey and hatching.** `series-1` is ink, `series-2`
  the one grey (both at least 3:1 on page and panel in both themes); a third
  series is told apart by a hatch, never by a lighter grey, and more than four
  series become small multiples. Gridlines are the hairline rule: reading aids,
  not data. Alert red marks only an exception or a drop; the spot colour never
  appears in a chart.

## Colors

Seven inks per theme. Light ("paper") is the base; dark ("ink") applies through
`prefers-color-scheme: dark` and an explicit `[data-theme="dark"]`, and
`[data-theme="light"]` forces paper -- on the root or on any subtree. `colors`
holds paper, `colorsDark` holds ink; every name exists in both.

| ink | light | dark | names |
| --- | --- | --- | --- |
| paper | #fafafa | #0f0f0f | background, on-primary, on-alert |
| tint | #ebebeb | #1e1e1e | panel, elevated, hover |
| rule | #d4d4d4 | #333333 | line |
| grey | #575757 | #b6b6b6 | muted, faint, warn, border |
| ink | #141414 | #f5f5f5 | primary, text, ok, bad, focus |
| alert | #a01919 | #eb776b | alert |
| spot | #a12a61 | #d77aa4 | spot (the default = pmt; one per property, below) |

- **Paper (#fafafa / #0f0f0f):** the page, and the text on an ink or red fill.
- **Tint (#ebebeb / #1e1e1e):** the one surface step: panels, detail rows and
  row hover. Controls sit on paper, not on the tint: a control's hover turns its
  edge ink. A tint is never the only signal of a state.
- **Rule (#d4d4d4 / #333333):** decorative hairlines and dividers. Never a fill
  under text.
- **Grey (#575757 / #b6b6b6):** secondary text, the warn / quiet status word
  and the interactive edge (>= 4.5:1 as text, so >= 3:1 as an edge, on every surface).
- **Ink (#141414 / #f5f5f5):** body text, the primary fill, the ok and bad
  status words, and the 2px focus ring. Selected / current = a 2px ink edge.
- **Alert (#a01919 / #eb776b):** the newspaper red, for urgent / down /
  destructive only, always redundant with text.
- **Spot (#a12a61 / #d77aa4):** the property's spot colour (default:
  pdfmarkuptool's markup ink). Each portfolio property takes its own from the
  `spots` registry by naming itself on `<html>` or `<body>`:
  `data-bk-property="pmt" | "bimpdf" | "bimcli"`; tokens.css sets `--bk-spot`
  for it in light, OS dark and forced dark. Every registered spot meets 4.5:1 on
  the paper, the tint and (light) the white sheet, in its theme -- the kit's
  contrast tests cover each one, so a site never writes `--bk-spot` itself.

  | property | light | dark |
  | --- | --- | --- |
  | pmt (default) | #a12a61 | #d77aa4 |
  | bimpdf | #9a5414 | #c8721e |
  | bimcli | #896400 | #f4b400 |
- **The drawing sheet (`colorsSheet`):** a `[data-theme="light"]` subtree below
  the root is a drawing sheet. It keeps every light ink but its `background` is
  white (#ffffff), so a badge or chip drawn on the sheet keeps paper white and
  the page grey never tints the drawing. The sheet white is artwork, not one of
  the seven inks.

### Data visualization

Ink is scarce in a chart too: every mark earns its place. The chart tokens
reuse the seven inks' values -- they add no new one.

| token | light | dark | job |
| --- | --- | --- | --- |
| series-1 | #141414 | #f5f5f5 | the key mark, the first series (ink) |
| series-2 | #575757 | #b6b6b6 | every other mark, the second series (the one grey) |
| chart-axis | #575757 | #b6b6b6 | an axis drawn as a frame (prefer the ink zero baseline) |
| chart-grid | #d4d4d4 | #333333 | gridlines (the hairline rule) |
| hatch-ink | #141414 | #f5f5f5 | the one ink of every hatch pattern |

- **Contrast.** Series, the axis / zero baseline, hatch ink and labels keep at
  least 3:1 (labels 4.5:1, they are text) on `background` and `panel` in both
  themes. Gridlines are reading aids, not data, so they are exempt from the 3:1
  floor and take the hairline grey: a grid must never print heavier than the
  marks it measures.
- **Ink + one grey + hatching.** One key mark in ink, the rest in the grey.
  Two series = ink and grey; a third and fourth are told apart by a hatch from
  the tone ladder below, never by a lighter grey. More than four series = small
  multiples on a shared scale. Prefer direct labels (a series name at the end of
  its line, a value on its bar) over a legend; a legend, when used, carries the
  meaning in text.
- **Red** (`alert`) marks only an exception or a drop -- the one bar that
  missed, the one board row that fell -- and the label says so too. The
  property's spot colour never appears in a chart.
- **The newspaper chart block** (`.bk-chartblock`): a 3px ink rule on top, a
  serif headline that states the finding (not the topic), a dek with the units,
  the chart, and a mono source / footnote line under a hairline. In the chart:
  value labels sit on the gridlines (flush left, just above the line), the zero
  baseline is a 1px ink rule, an italic serif annotation with a hairline leader
  names the one thing to see, a dashed line marks a reference or target, and a
  line ends in a terminal value tag (ink box, paper figure; the quieter series
  outlined).
- **The terminal board** (`.bk-board`): a framed mono table under an inverted
  (ink) title bar, uppercase eyebrow heads, LAST and CHG with a glyph (▲ rise =
  ink, ▼ drop = alert, · flat = grey), a block-glyph sparkline cell, a 30-day
  low / high range track with the current value as an ink tick, and a footer
  line. Every figure is mono with tabular numerals. Use `--down` (red) only
  when the drop is the exception the reader must act on; a neutral fall is
  `--fall` (ink ▼).
- **The tape** (`.bk-tape`): the market-at-a-glance strip over a stock page,
  one ruled line of quotes (name, last, change) set close together.

### Hatches

The hatch library is a tone ladder of eleven fills, ordered by ink coverage.
One ink (`hatch-ink`, the text colour by default) and one 1px weight; the
pattern's spacing sets the tone, so series stay distinct in one-ink print and a
photocopy.

| id | fill | ink |
| --- | --- | --- |
| `solid` | solid | 100% |
| `diag-dense` | 45deg lines, 3px pitch | 33% |
| `diag` | 45deg lines, 5px pitch | 20% |
| `diag-sparse` | 45deg lines, 8px pitch | 13% |
| `back` | -45deg lines, 5px pitch | 20% |
| `cross` | 45deg cross, 6px pitch | 31% |
| `horiz` | horizontal lines, 4px pitch | 25% |
| `vert` | vertical lines, 4px pitch | 25% |
| `dots` | 1.6px dots, 5px pitch | 10% |
| `grid` | square grid, 8px pitch | 23% |
| `outline` | the edge only | edge |

- **Use** `.bk-hatch-<id>` on an SVG mark (a bar, a band) or on the `<rect>` of
  a legend swatch (`<svg class="bk-chart-legend__swatch">`). The nine patterned
  fills read `url(#bk-hatch-<id>)`. Chrome cannot paint with an external SVG
  file (`fill: url(hatches.svg#id)`), so a page inlines the kit's `hatches.svg`
  defs fragment ONCE (anywhere in the body); `solid` and `outline` need no
  pattern.
- **Order of use** for series: solid, diag, dots, outline, then cross / horiz.
- **Reserved meaning:** a diagonal hatch = partial or estimated; a dashed
  outline (`.bk-hatch-dashed`) = projected; a sparse band (`.bk-hatch-band`
  with `diag-sparse`) = a window or forecast.
- **Red is never a hatch.** Every hatched mark has a direct label or a legend
  entry.
- **Scaling:** a pattern's pitch is in the user units of the SVG that draws the
  mark. In a chart whose viewBox is scaled to its box, the hatch scales with it
  (a 520-unit chart shown 1040px wide doubles the pitch). Draw hatched charts
  1:1 -- `.bk-chart--fixed` keeps an SVG at its width / height attributes and
  only shrinks it to fit -- or accept the scaled pitch.
- **Theme:** a pattern takes its ink where the fragment sits, so inline it
  inside the themed root (the kit root's `data-bk` body), not in a differently
  themed subtree.

## Typography

Four faces, three families, each with one job:

- **Serif 700** (`Georgia, 'Times New Roman', ui-serif, serif`): masthead,
  title (1.25rem / 20px) and heading (0.9375rem / 15px), reading body.
- **Sans 400 / 600** (system UI stack): body 0.8125rem / 13px at 400; control
  labels and tabs 0.75rem / 12px at 600, sentence case, normal tracking; the
  eyebrow (table head, field label, kicker, status word) 0.6875rem / 11px at 600,
  uppercase +0.06em -- the only place caps appear.
- **Mono 400** (`'SF Mono', ui-monospace, ...`): every figure in a ledger, tile
  value and code block, with tabular numerals and no tracking.
- **Serif italic** sets one thing only: a chart annotation (`.bk-chart-annot`),
  the newspaper's note on the artwork. It is never chrome.

Chrome sizes are 11, 12, 13, 15 and 20px (0.6875, 0.75, 0.8125, 0.9375 and
1.25rem) and three leadings: 1 (single-line controls), 1.25 (headings,
eyebrows) and 1.5 (running text). Under `@media (any-pointer: coarse)`, the
body, secondary, button, meta, eyebrow and heading roles step to 15, 13, 15,
13, 12 and 17px respectively; fields step to 16px. The base values stay the
fine-pointer scale.
Ledger density uses `body-md`. Reading density
swaps the body for `reading-body` (17px / 1.6 serif) and the headline steps for
the `reading-*` scale; reading type and the masthead sit outside the chrome
budget. No webfonts are loaded: every stack resolves to a system font.

## Layout

Mixed units, one rule: rem for type sizes, line-heights and text-adjacent
spacing (padding, gaps), so a block keeps its proportion when the reader's text
grows; px for rules, borders, the focus ring and the 44px touch floor, so a
hairline stays a hairline. Pixel figures below are at the default 16px root.

A 4px grid: spacing steps `0`-`7` are 2, 4, 8, 12, 16, 24, 32 and 48px
(0.125-3rem). The named `spacing` entries are the fixed sizes the primitives are
built from, in groups (the format has no sizes category, so they stay under
`spacing`, grouped by a comment):

- **Controls:** `control-sm` / `-md` / `-lg` (rem), their `-coarse` twins and
  `touch-min` (px: a floor, never a cap).
- **Rules & focus:** `rule` (1px), `rule-medium` (2px), `rule-heavy` (3px)
  and `focus-ring`. Every line weight in `base.css` -- borders, underlines,
  inset rings -- reads one of these, and one edge carries one weight.
- **Page:** `page-max`, `reading-max` (47.5rem / 760px, the reading column of
  `.bk-page--reading`) and `measure`.
- **State:** `disabled-opacity` (0.45), the fade of a disabled control. It is
  a unitless number, which the format allows under `spacing`.
Ledger pages run to `page-max` (1440px) with 16px gutters; reading pages
(`.bk-page--reading`) run to `reading-max` (760px) and hold text to a 68ch
measure. Columns are separated by a vertical hairline rule, not a
gap of colour.

Controls are 24 / 28 / 34px tall on a fine pointer and 44 / 44 / 48px under
`@media (any-pointer: coarse)` (any touch input, so an iPad with a trackpad keeps touch sizes). Under the
same query every tap target -- `.bk-button` (all variants), `.bk-control`, a `.bk-nav` tab and a link in
`.bk-crumbs` / `.bk-linkrow` -- also takes
`min-width: touch-min`, so a short label ("Day", "7d", a glyph) is still a 44 x 44px target: touch targets are
at least 44px in both dimensions on an iPad. Field controls use 16px text under the same query. Chips are status
labels, not tap targets.
Layout keys on window width; target size keys on pointer capability.

## Elevation & Depth

There is none. The kit is flat: no drop shadows, no glows, no blur. Something
that floats is separated by a 1px border (`border`) and the tint. Emphasis is
size and rule thickness: a 3px ink rule tops the nameplate, a hero tile and the
andon headline. Nothing moves: no pulse, no fade, no transition.

## Shapes

Square. `rounded.none` (0) everywhere, including buttons, chips, inputs and
tiles. There are no circles: the andon board has no lamp. Five rule marks:
a 1px `line` for dividers, a 1px grey `border` on controls, a 1px ink rule under
a table head, a 2px ink rule for the current / selected thing, and a 3px ink
(or alert) rule for heavy marks -- notices, code blocks, the masthead, a hero
tile, the andon headline.

## Components

All primitives are plain CSS classes with a `bk-` prefix in `base.css`; no
framework is needed.

- **Page** (`.bk-page`): opt-in root that applies the page background, ink and
  body type. Add `data-bk-density="reading"` for marketing/docs pages -- on the
  root or on any ancestor: a `.bk-page` inside a `[data-bk]` body (or inside any
  density) inherits the density around it (`body data-bk
  data-bk-density="reading"` + an inner `.bk-page--reading` column reads the
  same as the density on the column). `data-bk-density="ledger"` puts a section
  back in ledger density.
- **Masthead** (`.bk-masthead`, `.bk-nameplate`, `.bk-wordmark`,
  `.bk-dateline`): the newspaper head: a 3px ink rule, a serif wordmark, a
  small-caps dateline between hairlines.
- **Nav** (`.bk-nav`): section tabs in sentence case, one weight; the current
  one (`.is-on`, `aria-current`) takes a 2px ink underline that replaces the
  hairline under it. A tab bar of buttons uses the same look:
  `<div class="bk-nav" role="tablist">` with `button[role=tab][aria-selected]`
  (no wrap, no margin: the host keeps its placement).
  **Logo in the nav row** (a one-row masthead): a `.bk-logo` link as the
  nav's first child keeps the logo look (the spot colour, the headline serif,
  no underline, no tab rule, no hover or current recolour) and pushes the tabs
  to the right -- one row on a desktop and a tablet; on a phone (760px and
  under) the logo takes its own line and the tabs wrap under it. Inside a
  `.bk-masthead` that row is the nameplate: it carries the 3px ink rule on top.
  A logo with a wordmark is an img or svg plus a `.bk-wordmark` span in the link.
- **Controls** (`.bk-control`, `.bk-button`): paper, a 1px grey edge (the 3:1
  interactive edge), label type; hover turns the edge ink -- no tint, no fade.
  `.bk-button--primary` is the ink fill
  (`button-primary`), `.bk-button--alert` the red fill (`button-alert`),
  `.is-on` / `aria-pressed` inverts a toggle -- all at the label's one weight.
  Side padding is 8px (`spacing.2`, the `padding` of `control` /
  `button-primary` / `button-alert`); `.bk-button--sm` takes 4px (`spacing.1`)
  and `.bk-button--lg` 12px (`spacing.3`). Under a coarse pointer each is at
  least `touch-min` (44px) wide as well as tall.
- **Range** (`.bk-range`, on `<input type="range">`): a level (an opacity, a
  sensitivity) drawn by the kit in every engine, never the browser's blue knob.
  The track is a 1px grey hairline (`border`, the 3:1 interactive edge) across a
  control-tall box, spanning only the thumb's travel so it ends where the thumb
  stops (under touch the thumb box is 44px wide); the thumb is a square ink block (`primary`) with no filled
  part beside it, so Blink and Gecko read the same. Hover turns the track ink,
  focus takes the 2px ring, disabled takes the one fade. Under a coarse pointer
  the box is 44px tall and the thumb's hit area is `touch-min` square while its
  ink stays the same size. The host sets the width.
  `.bk-range--notched` adds dial notches, like an amplifier's: a 1px tick
  (`rule`), 8px tall (`spacing.2`), in the track colour across the hairline at
  every stop, both ends included, each under the thumb's centre when it sits
  there; hover turns them ink with the track. Use it on a range whose step makes
  few stops (an opacity in 5% steps). CSS cannot read min / max / step, so the
  host sets `--bk-range-steps` to the interval count, (max - min) / step
  (10 when unset). Skip the notches above ~24 stops, or where stops would sit
  closer than ~6px apart: they then read as a texture, not as stops.
- **Kicker** (`.bk-kicker`): the eyebrow line over a headline (label-sm,
  uppercase, +0.06em, the grey), on its own line; usable anywhere, not only in
  a hero.
- **Field** (`.bk-field`): a column of an eyebrow label (its first `span` or
  `label` child) over a control. Stacked fields side by side go in
  `.bk-field-row` (a form row: wraps, 12px gap, the controls' bottoms on one
  line), never in `.bk-toolbar`.
- **Toolbar** (`.bk-toolbar`): a wrapping row of controls (a range bar, a filter
  bar) with one small gap and a leading `.bk-label`. The row aligns on ONE text
  baseline: the label, button words, a control's value and a field's eyebrow,
  which goes inline before its control (8px gap) instead of over it. Items with
  no text baseline centre on the row: a range field centres its label on the
  track, and a bare range or an icon-only button centres itself.
- **Chips** (`.bk-chip`): a status WORD in the eyebrow type (`label-sm`,
  uppercase, +0.06em), no border and no padding box. `--ok` and `--bad` are the
  ink word, `--warn` and `--quiet` the grey word (quiet = done / neutral /
  background states); the word tells them apart. Only `--on` (ink fill, a
  selection) and `--alert` (red fill, an urgent word) are fills. Two forms
  combine with any look: `--count`, a number in a column of counts (at least
  2em wide in a flex or grid row, centred, tabular figures; in running text it
  stays an inline word), and `--dot`, a status lead with no text
  (a `spacing.2` square filled with the word's colour; an `--on` / `--alert`
  dot keeps its fill -- give it an aria-label or aria-hidden). `--zero`
  recesses a count of nothing (the faint word, no fill) so populated rows read
  first. A chip never shrinks in a flex row.
- **Ledger** (`.bk-ledger`): a table with eyebrow heads over a 1px ink rule and
  mono tabular-nums cells; numeric columns align right. Row hover is the tint;
  a selected row (`.is-on`, `aria-selected`) takes a 2px ink edge.
  **Wide tables** (`.bk-table-wrap`): the scroll wrapper of any table (a ledger
  or a bare reading table) -- it scrolls sideways inside its column, so the page
  never does, and the table inside stays a table. Give it `role="region"`, an
  `aria-label` and `tabindex="0"` so a keyboard can scroll it.
- **Tiles** (`.bk-tiles`, `.bk-tile`): a KPI board drawn as one ruled grid.
- **Andon** (`.bk-andon`): a printed status headline -- a 3px ink rule on top,
  a hairline below, the serif status word, a sub line and the WIP figure flush
  right. No box, no lamp, no motion. State is the WORD: `--up` ink, `--idle`
  the grey, `--down` the word in `alert` with a 2px underline (two marks on a
  word that already says DOWN). There is no lamp element (0.4.0 removed
  `.bk-lamp`).
- **Well** (`.bk-well`) and **notice** (`.bk-banner`): a notice is one mark, its
  3px left rule (ink, or alert for `--alert`), with no box and no tint. One
  line: a `strong` word and a `span` side by side. Block form: a banner that
  holds a text block (`p`, a list, `dl`, `pre`, `table`, a heading; not a
  `div` -- a host's text + actions row stays one line)
  stacks its children -- the word on its own line, lists indented one step, no
  margin above the first child or below the last; no extra class.
- **Code** (`.bk-code`): one mark too -- the 3px ink rule on the left, mono
  code type, no fill and no hairline box.
- **Code panel** (`.bk-codepanel`, `.bk-codepanel-head`): a command to copy (an
  install line, a prompt): the head is an eyebrow label and a
  `.bk-button.bk-button--sm` copy button over a hairline, the code below it. The
  whole panel is ONE mark -- the code block's 3px ink rule runs down its left
  side, head included -- so the code inside drops its own rule. The copied state
  is the button's `.is-on` (the ink fill); no site class.
- **Reading column** (`.bk-page--reading`): a `.bk-page` held to `reading-max`
  (760px), for docs and marketing pages in reading density.
- **Crumbs** (`.bk-crumbs`): the breadcrumb trail of a docs page:
  `<nav class="bk-crumbs" aria-label="Breadcrumb"><ol><li><a>...`, body-sm in
  the grey, a faint `›` between crumbs, the current crumb (`aria-current="page"`)
  in ink. Its links are tap targets.
- **Link row** (`.bk-linkrow`): one muted, wrapping row of links under a
  hairline -- related pages, a trust strip, a footer's links -- with an optional
  leading `.bk-label`. The gap separates the links (no separator glyphs). Inside
  `.bk-footer` it drops its hairline (the footer draws one). Its links are tap
  targets.
- **Cards** (`.bk-cards`): a grid of short stories (jobs, features, plug-ins):
  columns of at least 16rem, each child a card under a hairline -- no box, no
  tint (the ruled KPI grid is `.bk-tiles`).
- **Caption** (`.bk-caption`): a note under a figure, a demo or a download
  button: body-sm in the grey (DESIGN's `caption`). A bare `figcaption` in
  reading density takes the same look.
- **Charts** (`.bk-chart`, `.bk-chart-bar`, `.bk-chart-line`, `.bk-chart-area`,
  `.bk-chart-grid`, `.bk-chart-baseline`, `.bk-chart-axis`): framework-free
  inline SVG marks in `series-1` (ink) and `--s2` (the grey); `--alert` flags
  the one exception or drop. Annotation marks: `.bk-chart-tick` (a label on its
  gridline), `.bk-chart-annot` + `.bk-chart-leader`, `.bk-chart-ref` (dashed
  reference / target), `.bk-chart-tag` (`--quiet`) terminal value tags,
  `.bk-chart-dot` end markers, `.bk-chart-direct` series labels. Labels and the
  `.bk-chart-legend` carry meaning in text. `.bk-spark` fits a line of text;
  `.bk-chart--fixed` draws an SVG 1:1. All line weights use `rule` tokens, and
  print keeps the chart colours exact.
- **Chart block** (`.bk-chartblock`, `-title`, `-dek`, `-source`): the
  newspaper figure around a chart; `.bk-figures` sets blocks side by side.
- **Terminal board** (`.bk-board`, `-head`, `-title`, `-meta`, `-table`,
  `-foot`; `.bk-chg--up|down|fall|flat`, `.bk-blocks`, `.bk-lohi`): the framed
  mono table of figures. Use `--down` (red) only when the drop is the exception
  the reader must act on; a neutral fall is `--fall` (ink ▼).
- **Tape** (`.bk-tape`, `.bk-quote`, `.bk-quote-last`): the market-at-a-glance
  strip: one ruled line of quotes, set close together under a 1px ink rule with
  a hairline below and between them. Each quote is a `dt` name (the small-caps
  eyebrow) and a `dd` with the last figure (mono, tabular) and its
  `.bk-chg--*` glyph. A `dl` with an `aria-label`.
- **Small multiples** (`.bk-multiples`, `.bk-multiple`) on a
  shared scale; **ranked bars** (`.bk-ranked`): name, bar, figure, the leader in
  ink and the rest grey.
- **Hatches** (`.bk-hatch-<id>`, `.bk-hatch-band`, `.bk-hatch-dashed`, the
  `hatches.svg` fragment): the tone ladder (Data visualization, above).
- **Focus**: every focusable element gets a 2px ink outline offset by 2px.

### Reading-density element defaults

Inside `[data-bk-density="reading"]` the kit sets the bare elements of a
markdown page, so a docs site writes no element CSS of its own. Every rule is
`[data-bk-density="reading"] :where(<element>)` (specificity 0,1,0): any class --
the kit's or a site's -- wins over it.

- `h2`: 48px above, a hairline under it (the section-head rule); `h3`: 24px above.
- `ul` / `ol`: 24px indent; `li` 4px apart.
- `hr`: the `.bk-rule` hairline.
- `figure`: 24px above and below; `figcaption`: the caption look.
- `pre`: the code mark (`.bk-code`); `blockquote`: the notice mark (`.bk-banner`
  as a block) -- one 3px ink rule, no box, no tint.
- Long runs: reading density (and `.bk-page--reading`) sets `overflow-wrap:
  break-word`, so a run wider than the column (a pipe list, a code chain)
  breaks instead of widening the page; min-content is unchanged, so
  identifiers in table cells stay whole (the table scrolls).
- `table`: a ledger whose cells wrap: eyebrow heads over a 1px ink rule,
  hairline rows, body-md sans cells aligned to the top; inline `code` in a cell
  drops its chip.
- `dl`: each `dt` a serif subhead under a hairline, its `dd` below (a FAQ).
- One phone step (`max-width: 760px`, the kit's one breakpoint): `h1` drops to
  `reading-headline`, `.bk-lead` to `reading-body`, and a bare `table` scrolls
  sideways inside the column (a block box with `overflow-x: auto`) instead of
  widening the page; a table in `.bk-table-wrap` stays a table (the wrapper
  scrolls).

### Drawing sheet template

`templates/sheet/` is the kit's drawing sheet: an Arch D (36 x 24 in) sheet
with a title strip down the right edge, built in **Revit only** (the scripts
are `bim revit exec` C# files). `sheet.json` is its source: the strip's rows,
the text styles and the static words, with colours named by token and faces
by role. `scripts/gen-sheet.mjs` resolves it per property into
`sheet.<property>.json` (fonts and rgb), the file the Revit scripts read.

- Paper is the light theme: ink (`text`) and grey (`muted`) on a white sheet.
  The property's spot colours the wordmark and nothing else.
- The four faces, mapped to Windows fonts: serif 700 = Georgia Bold (the
  wordmark and the project name), sans 400 = Segoe UI (site, sheet name),
  sans 600 = Segoe UI Semibold with bold off (field labels, the disclaimer, the
  sheet number), mono 400 = Consolas (the data block, date, scale, URL). No Georgia
  regular: its old-style figures read badly in a title block.
- Field labels are kickers, set like the kit kicker: sans 600, uppercase,
  small, grey.
- The family carries the frame and the static words. Revit cannot bind labels
  to parameters from the API, so each sheet's values (project, site, data,
  date, scale, sheet name and number) are written onto the sheet as text notes
  in the layout's boxes by `revit/fill_sheet.cs`, re-runnable on the same sheet.
- Published with the kit from 0.6.3 on:
  `https://ui.bimisland.com/kit/<version>/templates/sheet/` (sources only; the
  `.rfa`, `.rte` and PDFs are build products of `build.sh`).

## Do's and Don'ts

- **Do** carry state with fill, edge and a label: "DOWN" in a red chip, not a red
  dot; a selected row gets a 2px ink edge, not bold text.
- **Do** use mono tabular figures for every number that is compared.
- **Do** use the ink fill for the one primary action in a view.
- **Do** keep touch targets at least 44px in both dimensions under a coarse pointer.
- **Don't** add an ink. A new role reuses one of the seven values.
- **Don't** change weight for state (selected, current, pressed, expanded).
- **Don't** add a second hue to chrome. Status colours (green, amber, teal) are
  not part of the kit.
- **Don't** use `alert` without a word that already says the same thing.
- **Don't** use the spot colour for buttons, links, hover or focus, or as text
  on the tint; it is for the logo and the markup ink.
- **Don't** round corners or add shadows.
- **Don't** let the kit restyle a host app globally: it only applies inside
  `.bk-page` / `[data-bk]`.
