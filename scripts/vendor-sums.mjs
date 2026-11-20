// Writes or verifies vendor/SHA256SUMS: "<sha256>  <repo-relative path>" for every file under vendor/, sorted.
//   node scripts/vendor-sums.mjs          rewrite vendor/SHA256SUMS
//   node scripts/vendor-sums.mjs --check  fail (exit 1) when any file differs from the lock, is missing or is unlisted
import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const vendor = join(root, 'vendor')
const lockPath = join(vendor, 'SHA256SUMS')

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}

export function currentSums() {
  return walk(vendor)
    .filter((p) => p !== lockPath)
    .map((p) => relative(root, p).split(sep).join('/'))
    .sort()
    .map(
      (rel) =>
        `${createHash('sha256')
          .update(readFileSync(join(root, rel)))
          .digest('hex')}  ${rel}`,
    )
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const now = currentSums().join('\n') + '\n'
  if (process.argv.includes('--check')) {
    const locked = readFileSync(lockPath, 'utf8')
    if (locked !== now) {
      const a = new Set(locked.split('\n'))
      const b = new Set(now.split('\n'))
      for (const l of a) if (!b.has(l)) console.error(`lock-only/changed: ${l}`)
      for (const l of b) if (!a.has(l)) console.error(`disk-only/changed: ${l}`)
      console.error(
        'vendor/ does not match vendor/SHA256SUMS (run core-sync, or vendor-sums.mjs to relock a deliberate edit)',
      )
      process.exit(1)
    }
    console.log(`vendor/SHA256SUMS ok (${now.trim().split('\n').length} files)`)
  } else {
    writeFileSync(lockPath, now)
    console.log(`wrote vendor/SHA256SUMS (${now.trim().split('\n').length} files)`)
  }
}
