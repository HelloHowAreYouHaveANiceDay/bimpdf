#!/usr/bin/env node
// Vendor a published Broadsheet version into design/vendor/broadsheet/<version>/ and write its SHA256SUMS.
//
//   node design/vendor.mjs <version>        e.g. node design/vendor.mjs 1.0.0
//
// Source: https://ui.bimisland.com/kit/<version>/ (immutable; hashes checked against kit/latest.json's `files` map for
// the latest version, and against the file bytes' own SHA256SUMS thereafter). Only the files an app needs are vendored.
// After vendoring: point design/pack.json "version" + "vendor" at it, delete the old vendor folder, run the lint
// (`node .standards/check.mjs`). Run by hand after a Broadsheet release.
import { createHash } from 'node:crypto'
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const VENDORED = [
  'tokens.css',
  'base.css',
  'hatches.svg',
  'DESIGN.md',
  'pack.json',
  'rename-tokens.json',
]
const BASE = process.env.BROADSHEET_BASE || 'https://ui.bimisland.com/kit'
export const sha256 = (buf) => createHash('sha256').update(buf).digest('hex')

export async function vendor(version, root = ROOT) {
  if (!/^\d+\.\d+\.\d+$/.test(version || ''))
    throw new Error('usage: node design/vendor.mjs <x.y.z>')
  const latest = await (await fetch(`${BASE}/latest.json`)).json()
  const expect = latest.version === version ? latest.files : null
  const to = join(root, 'design', 'vendor', 'broadsheet', version)
  mkdirSync(to, { recursive: true })
  let sums = ''
  for (const f of VENDORED) {
    const res = await fetch(`${BASE}/${version}/${f}`)
    if (!res.ok) throw new Error(`${f}: HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    if (expect && expect[f] !== sha256(buf)) throw new Error(`${f}: hash differs from latest.json`)
    writeFileSync(join(to, f), buf)
    sums += `${sha256(buf)}  ${f}\n`
  }
  writeFileSync(join(to, 'SHA256SUMS'), sums)
  return to
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  vendor(process.argv[2]).then(
    (to) => console.log(`vendored -> ${to}`),
    (e) => {
      console.error(e.message)
      process.exit(2)
    },
  )
}
