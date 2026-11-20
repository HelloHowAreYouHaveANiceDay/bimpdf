// Runs after ui-gen (wrangler [build]): add version.json (the deployed commit), robots.txt and noindex headers.
// ui.bimpdf.com is a design reference, not a ranking page.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist-ui')
const pack = JSON.parse(fs.readFileSync(path.join(root, 'design', 'pack.json'), 'utf8'))
const commit = process.env.GITHUB_SHA || 'dev'

fs.writeFileSync(
  path.join(dist, 'version.json'),
  `${JSON.stringify({ pack: pack.pack, version: pack.version, commit })}\n`,
)
fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n')
fs.writeFileSync(path.join(dist, '_headers'), '/*\n  X-Robots-Tag: noindex, nofollow\n')
console.log(`stamp: ${pack.pack}@${pack.version} commit ${commit.slice(0, 7)}`)
