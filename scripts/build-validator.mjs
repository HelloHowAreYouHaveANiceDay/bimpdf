// Rebuilds vendor/validator/validate.bundle.mjs from a BUILT packages/core (pdfmarkuptool repo).
//   node scripts/build-validator.mjs <path-to-packages/core> <esbuild-module-dir>
// Needs `pnpm --filter @bim-pdf/core build` first (dist/validate.js, dist/index.js). The bundle inlines ajv's
// runtime helper and the schemas, so third parties run it with plain node (no npm install). Then relock:
//   node scripts/vendor-sums.mjs
import { createHash } from 'node:crypto'
import { createRequire } from 'node:module'
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const [core, esbuildDir] = process.argv.slice(2).map((p) => p && resolve(p))
if (!core || !esbuildDir) {
  console.error('usage: node scripts/build-validator.mjs <packages/core> <esbuild module dir>')
  process.exit(2)
}
const root = fileURLToPath(new URL('..', import.meta.url))
const out = join(root, 'vendor', 'validator', 'validate.bundle.mjs')
const entry = join(core, 'dist', '_validator-entry.mjs')
writeFileSync(
  entry,
  [
    "export * from './validate.js'",
    "export { detectBimPdf, DETECTION_ORDER, afRelationshipFor, writeDeclaration, declareAttachment } from './index.js'",
    "export { CURRENT_FORMAT_VERSION, SUPPORTED_FORMAT_MAJORS, BIMP, BIMPDF_XMP_NS, BIMPDF_SPEC_URL } from './index.js'",
    '',
  ].join('\n'),
)
try {
  const esbuild = createRequire(import.meta.url)(esbuildDir)
  await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    legalComments: 'none',
    outfile: out,
  })
} finally {
  rmSync(entry, { force: true })
}
console.log(`wrote ${out} sha256=${createHash('sha256').update(readFileSync(out)).digest('hex')}`)
