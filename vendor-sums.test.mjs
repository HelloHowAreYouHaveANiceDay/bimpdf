import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { currentSums } from './scripts/vendor-sums.mjs'

test('vendor/ matches vendor/SHA256SUMS byte for byte', () => {
  assert.equal(
    readFileSync(new URL('./vendor/SHA256SUMS', import.meta.url), 'utf8'),
    currentSums().join('\n') + '\n',
  )
})

test('vendor/core records its upstream commit', () => {
  const up = readFileSync(new URL('./vendor/core/UPSTREAM', import.meta.url), 'utf8')
  assert.match(up, /^commit: [0-9a-f]{40}$/m)
  assert.ok(existsSync(new URL('./vendor/core/src/schema', import.meta.url)))
})
