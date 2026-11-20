#!/usr/bin/env node
// Standalone bimpdf validator: node validator/bimpdf-validate.mjs [--json] [--quiet] <file.bim.pdf>...
// Exit 0 when every file is valid at its declared conformance, 1 when any file has an error, 2 on bad usage.
import { readFileSync } from 'node:fs'
import { validateBimPdf } from './validate-bimpdf.mjs'

const args = process.argv.slice(2)
const json = args.includes('--json')
const quiet = args.includes('--quiet')
const files = args.filter((a) => !a.startsWith('--'))
if (files.length === 0) {
  console.error('usage: node validator/bimpdf-validate.mjs [--json] [--quiet] <file.bim.pdf>...')
  process.exit(2)
}
const reports = []
let failed = false
for (const file of files) {
  let report
  try {
    report = { file, ...validateBimPdf(readFileSync(file)) }
  } catch (e) {
    report = {
      file,
      valid: false,
      findings: [{ severity: 'error', rule: '1', message: `cannot read: ${e.message}` }],
    }
  }
  if (!report.valid) failed = true
  reports.push(report)
  if (json) continue
  const head = report.valid ? 'ok  ' : 'FAIL'
  const lvl = report.declared
    ? ` ${report.declared}${report.archival ? '+' + report.archival : ''}`
    : ''
  console.log(
    `${head} ${file}${report.formatVersion ? ` (format ${report.formatVersion}${lvl}, reached ${report.reached})` : ''}`,
  )
  if (!quiet || !report.valid)
    for (const f of report.findings) console.log(`  ${f.severity} [${f.rule}] ${f.message}`)
}
if (json) console.log(JSON.stringify(reports, null, 2))
process.exit(failed ? 1 : 0)
