// AC10: every example that declares `archival: pdfa-3b` must pass veraPDF PDF/A-3b.
//   VERAPDF=<dir holding bin/ or the verapdf launcher> node scripts/verapdf-check.mjs [files...]
// With no files it checks every examples/*.bim.pdf whose XMP label says archival pdfa-3b, and fails when
// there is none. veraPDF is found via $VERAPDF (a directory with verapdf / verapdf.bat or bin/*.jar) or PATH.
// scripts/install-verapdf.sh installs the pinned greenfield release.
import { spawnSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateBimPdf } from '../validator/validate-bimpdf.mjs'

const root = fileURLToPath(new URL('..', import.meta.url))

export function findVeraPdf(env = process.env) {
  const dir = env.VERAPDF
  if (dir) {
    for (const n of ['verapdf', 'verapdf.bat'])
      if (existsSync(join(dir, n))) return { cmd: join(dir, n), args: [] }
    if (existsSync(join(dir, 'bin')))
      return {
        cmd: 'java',
        args: ['-cp', join(dir, 'bin', '*'), 'org.verapdf.apps.GreenfieldCliWrapper'],
      }
  }
  const probe =
    process.platform === 'win32'
      ? spawnSync('verapdf --version', { encoding: 'utf8', shell: true })
      : spawnSync('verapdf', ['--version'], { encoding: 'utf8' })
  return probe.status === 0 ? { cmd: 'verapdf', args: [] } : null
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const vera = findVeraPdf()
  if (!vera) {
    console.error(
      'veraPDF not found: set VERAPDF to its install dir or put verapdf on PATH (scripts/install-verapdf.sh)',
    )
    process.exit(2)
  }
  let files = process.argv.slice(2)
  if (files.length === 0) {
    const dir = join(root, 'examples')
    files = readdirSync(dir)
      .filter((f) => f.endsWith('.bim.pdf'))
      .map((f) => join(dir, f))
      .filter((f) => validateBimPdf(readFileSync(f)).archival === 'pdfa-3b')
    if (files.length === 0) {
      console.error('no example declares archival pdfa-3b: AC10 needs one')
      process.exit(1)
    }
  }
  let failed = false
  for (const f of files) {
    const r = spawnSync(vera.cmd, [...vera.args, '--flavour', '3b', '--format', 'text', f], {
      encoding: 'utf8',
      shell: process.platform === 'win32' && vera.cmd.endsWith('.bat'),
    })
    const ok = r.status === 0 && /^PASS /m.test(r.stdout)
    console.log(`${ok ? 'PASS' : 'FAIL'} ${f} (veraPDF PDF/A-3b)`)
    if (!ok) {
      failed = true
      console.log(r.stdout + r.stderr)
      const detail = spawnSync(vera.cmd, [...vera.args, '--flavour', '3b', f], {
        encoding: 'utf8',
        shell: process.platform === 'win32' && vera.cmd.endsWith('.bat'),
      })
      for (const m of detail.stdout.matchAll(
        /<rule [^>]*clause="([^"]+)"[^>]*testNumber="(\d+)"[\s\S]*?<description>([^<]*)<\/description>/g,
      ))
        console.log(`  rule ${m[1]}-${m[2]}: ${m[3]}`)
    }
  }
  process.exit(failed ? 1 : 0)
}
