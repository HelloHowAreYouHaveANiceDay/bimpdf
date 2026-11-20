// Renders /spec (spec/index.html) from two committed sources, with no hand copies of version facts:
//   - docs/specs/0002-bimpdf-format.md, section "## The format" (the normative text, sections 1-7)
//   - vendor/core/src/schema/bim-pdf-*.schema.json (current version, schema links, sidecar table)
import { readdirSync, readFileSync } from 'node:fs'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const inline = (s) =>
  esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

/** Minimal markdown for the spec text: ###/#### headings, paragraphs, - and 1. lists, pipe tables. */
export function mdToHtml(md) {
  const out = []
  const lines = md.split('\n')
  let i = 0
  const slug = (t) =>
    t
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  while (i < lines.length) {
    const l = lines[i]
    if (!l.trim()) {
      i++
      continue
    }
    let m
    if ((m = l.match(/^(#{3,4}) (.*)$/))) {
      const lvl = m[1].length === 3 ? 'h2' : 'h3'
      out.push(`<${lvl} id="${slug(m[2])}">${inline(m[2])}</${lvl}>`)
      i++
    } else if (l.startsWith('|')) {
      const rows = []
      while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++])
      const cells = (r) =>
        r
          .replace(/^\||\|$/g, '')
          .split(/(?<!\\)\|/)
          .map((c) => c.trim())
      const [head, , ...body] = rows
      out.push(
        '<div class="bk-table-wrap" role="region" tabindex="0"><table><thead><tr>' +
          cells(head)
            .map((c) => `<th>${inline(c)}</th>`)
            .join('') +
          '</tr></thead><tbody>' +
          body
            .map(
              (r) =>
                '<tr>' +
                cells(r)
                  .map((c) => `<td>${inline(c)}</td>`)
                  .join('') +
                '</tr>',
            )
            .join('') +
          '</tbody></table></div>',
      )
    } else if (/^(- |\d+\. )/.test(l)) {
      const ordered = /^\d+\. /.test(l)
      const items = []
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i])) {
        items.push(lines[i++].replace(/^(- |\d+\. )/, ''))
        while (i < lines.length && /^ {2,}\S/.test(lines[i]))
          items[items.length - 1] += ' ' + lines[i++].trim()
      }
      const tag = ordered ? 'ol' : 'ul'
      out.push(`<${tag}>` + items.map((t) => `<li>${inline(t)}</li>`).join('') + `</${tag}>`)
    } else {
      const para = []
      while (i < lines.length && lines[i].trim() && !/^(#{3,4} |\||- |\d+\. )/.test(lines[i]))
        para.push(lines[i++])
      out.push(`<p>${inline(para.join(' '))}</p>`)
    }
  }
  return out.join('\n')
}

export function specFacts(coreDir = './vendor/core/src/schema') {
  const versions = readdirSync(coreDir)
    .map((f) => f.match(/^bim-pdf-(\d+)\.(\d+)\.schema\.json$/))
    .filter(Boolean)
    .map((m) => ({ major: +m[1], minor: +m[2], file: m[0], v: `${m[1]}.${m[2]}` }))
    .sort((a, b) => b.major - a.major || b.minor - a.minor)
  const current = versions[0]
  const schema = JSON.parse(readFileSync(`${coreDir}/${current.file}`, 'utf8'))
  if (!schema.$id.endsWith(current.file))
    throw new Error(`${current.file}: $id ${schema.$id} does not match the file name`)
  const sidecars = Object.entries(schema.definitions)
    .filter(([k]) => /Document$/.test(k))
    .map(([k, d]) => ({
      file: k.replace(/Document$/, '').toLowerCase() + '.json',
      required: d.required.filter((r) => r !== 'bim-pdf'),
      anchor: k === 'ElementsDocument',
      description: (d.description || '').split(/(?<=\.)\s/)[0],
    }))
    .sort((a, b) => Number(b.anchor) - Number(a.anchor) || a.file.localeCompare(b.file))
  return { current: current.v, versions, sidecars }
}

export function renderSpec({ specMd, facts, shell }) {
  const start = specMd.indexOf('## The format')
  const end = specMd.indexOf('## Acceptance criteria')
  if (start < 0 || end < 0) throw new Error('spec markdown lacks the "The format" section')
  const body = mdToHtml(specMd.slice(start, end).replace(/^## The format\n/, ''))
  const links = facts.versions
    .map(
      (x) =>
        `<li><a href="/schema/${x.file}"><code>${x.file}</code></a>${x.v === facts.current ? ' (current)' : ''}</li>`,
    )
    .join('')
  const table =
    '<div class="bk-table-wrap" role="region" aria-label="Sidecar documents" tabindex="0"><table><thead><tr><th>Sidecar</th><th>Required fields</th><th>Role</th></tr></thead><tbody>' +
    facts.sidecars
      .map(
        (s) =>
          `<tr><td><code>${s.file}</code>${s.anchor ? ' (anchor)' : ''}</td><td>${s.required.map((r) => `<code>${esc(r)}</code>`).join(', ')}</td><td>${esc(s.description)}</td></tr>`,
      )
      .join('') +
    '</tbody></table></div>'
  return shell
    .replaceAll('{{VERSION}}', facts.current)
    .replace('{{SCHEMA_LINKS}}', `<ul>${links}</ul>`)
    .replace('{{SIDECAR_TABLE}}', table)
    .replace('{{SPEC_BODY}}', body)
}
