// Refreshes vendor/core/ from the canonical home: packages/core in HelloHowAreYouHaveANiceDay/pdfmarkuptool (renamed from pdf-bim, PLAN S8;
// the old name redirects). Byte copies only; vendor/core/UPSTREAM records the commit.
//   GH_TOKEN=<read token> node scripts/core-sync.mjs [--ref main]
// Requires the `gh` CLI. Then run `node scripts/vendor-sums.mjs` to relock (the workflow does both).
import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO = process.env.CORE_SYNC_REPO || 'HelloHowAreYouHaveANiceDay/pdfmarkuptool'
const ref = process.argv.includes('--ref')
  ? process.argv[process.argv.indexOf('--ref') + 1]
  : 'main'
const root = fileURLToPath(new URL('..', import.meta.url))

const gh = (args, opts = {}) =>
  execFileSync('gh', args, { encoding: opts.buffer ? 'buffer' : 'utf8', maxBuffer: 64 << 20 })
const sha = gh(['api', `repos/${REPO}/commits/${ref}`, '--jq', '.sha']).trim()

// What bimpdf-site publishes (gen-version.mjs): every *.schema.json, the two review contracts and the vectors.
const schemaDir = 'packages/core/src/schema'
const files = JSON.parse(gh(['api', `repos/${REPO}/contents/${schemaDir}?ref=${sha}`]))
  .filter((f) => f.type === 'file' && f.name.endsWith('.schema.json'))
  .map((f) => `${schemaDir}/${f.name}`)
files.push(
  'packages/core/src/markups/review-core-contract.json',
  'packages/core/src/markups/review-request-contract.json',
  'packages/core/conformance/review-core/vectors.json',
)

const outRoot = join(root, 'vendor', 'core')
for (const f of readdirSync(join(outRoot, 'src', 'schema')))
  rmSync(join(outRoot, 'src', 'schema', f))
for (const f of files) {
  const bytes = execFileSync(
    'gh',
    ['api', '-H', 'Accept: application/vnd.github.raw', `repos/${REPO}/contents/${f}?ref=${sha}`],
    {
      maxBuffer: 64 << 20,
    },
  )
  const dest = join(outRoot, f.replace(/^packages\/core\//, ''))
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, bytes)
}
writeFileSync(join(outRoot, 'UPSTREAM'), `repo: ${REPO}\npath: packages/core\ncommit: ${sha}\n`)
console.log(`vendor/core synced from ${REPO}@${sha} (${files.length} files)`)
