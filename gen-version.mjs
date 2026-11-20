#!/usr/bin/env node
// Generates version.json at build/deploy time, copies schema files from
// @bim-pdf/core so they're served at /schema/*.schema.json, and copies the
// Broadsheet UI kit (@bim-pdf/ui-kit published/<pinned version>/ tokens.css + base.css) to /kit/ -- the pages
// link /kit/*.css on their own origin, never a runtime link to another site.
// Called via wrangler [build] so it runs before wrangler ships the assets.
import { execSync, spawnSync } from 'child_process'
import { writeFileSync, mkdirSync, copyFileSync, readdirSync, readFileSync } from 'fs'
import { renderSpec, specFacts } from './gen-spec.mjs'

function git(cmd) {
  const r = spawnSync('git', cmd.split(' '), { encoding: 'utf8', cwd: '.' })
  return r.status === 0 ? r.stdout.trim() : 'unknown'
}

const version = git('describe --tags --always')
const commit = git('rev-parse HEAD')
const built = new Date().toISOString()

writeFileSync('version.json', JSON.stringify({ version, commit, built }))
console.log(`version.json: ${version} @ ${commit.slice(0, 8)} built ${built}`)

// Copy all *.schema.json files from @bim-pdf/core → /schema/ so the $id URL
// (https://bimpdf.com/schema/bim-pdf-1.0.schema.json) is a real dereferenceable URL.
const coreSchemaDir = './vendor/core/src/schema'
mkdirSync('schema', { recursive: true })
for (const f of readdirSync(coreSchemaDir).filter((f) => f.endsWith('.schema.json'))) {
  copyFileSync(`${coreSchemaDir}/${f}`, `schema/${f}`)
  console.log(`schema/${f}: copied from packages/core`)
}

// (R6-4: the v8 review-loop contract and its vectors -- review-contract.json, review-vectors.json -- are no
// longer published: the loop is deleted and pdf-cli no longer vendors them.)

// Review CORE contract (the revision / document-control verbs) + its conformance vectors, published so
// pdf-cli can check its vendored copy byte-for-byte against https://bimpdf.com/schema/review-core-contract.json.
copyFileSync(
  './vendor/core/src/markups/review-core-contract.json',
  'schema/review-core-contract.json',
)
console.log('schema/review-core-contract.json: copied from packages/core/src/markups')
copyFileSync(
  './vendor/core/conformance/review-core/vectors.json',
  'schema/review-core-vectors.json',
)
console.log('schema/review-core-vectors.json: copied from packages/core/conformance/review-core')

// Review REQUEST contract (wiki spec--review-revamp R5), published for pdf-cli's byte-identity check.
copyFileSync(
  './vendor/core/src/markups/review-request-contract.json',
  'schema/review-request-contract.json',
)
console.log('schema/review-request-contract.json: copied from packages/core/src/markups')

// Broadsheet UI kit: the pages link /kit/tokens.css + /kit/spot.css + /kit/base.css on their own origin. Copied at
// build time from the committed, immutable design/vendor/broadsheet/<KIT_VERSION>/ copy (from ui.bimisland.com/kit/<v>/,
// locked by its SHA256SUMS), so a Broadsheet release does not ship to bimpdf.com until the pin moves.
// spot.css is design/tokens.css: bimpdf's own --ui-color-spot on top of Broadsheet.
export const KIT_VERSION = '1.0.0'
mkdirSync('kit', { recursive: true })
for (const f of ['tokens.css', 'base.css']) {
  copyFileSync(`./design/vendor/broadsheet/${KIT_VERSION}/${f}`, `kit/${f}`)
  console.log(`kit/${f}: copied from design/vendor/broadsheet/${KIT_VERSION}`)
}
copyFileSync('./design/tokens.css', 'kit/spot.css')
console.log('kit/spot.css: copied from design/tokens.css')

// /spec: the normative text from docs/specs/0002-bimpdf-format.md plus version, schema links and the sidecar table,
// all read from vendor/core (gen-spec.mjs). /ns/1/ and /ns/1.0/ are committed static pages.
const facts = specFacts()
mkdirSync('spec', { recursive: true })
writeFileSync(
  'spec/index.html',
  renderSpec({
    specMd: readFileSync('docs/specs/0002-bimpdf-format.md', 'utf8'),
    facts,
    shell: readFileSync('pages-src/spec.shell.html', 'utf8'),
  }),
)
console.log(`spec/index.html: rendered for format ${facts.current}`)
