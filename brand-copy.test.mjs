import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const BRAND =
  /\bPDF[-\u00b7\u2013]BIM\b|\bBIM[- ]?(CLI|PDF|Island)\b|\bBim ?(Island|CLI|PDF)\b|\bBIM (data|overlay|style rules|elements?|categories|magnifier|sidecars?)\b/

test('our bim names and bim data are lowercase in site copy', () => {
  const index = readFileSync(new URL('./index.html', import.meta.url), 'utf8')
    .split(/\r?\n/)
    .filter((line) => !/"keywords"\s*:/.test(line))
  const llms = readFileSync(new URL('./llms.txt', import.meta.url), 'utf8').split(/\r?\n/)
  const found = [...index, ...llms].filter((line) => BRAND.test(line))
  assert.deepEqual(found, [])
})
