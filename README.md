---
doc: readme
repo: bimpdf-site
---

# bimpdf-site

Static spec site for bimpdf.com, the open format that keeps BIM sidecars attached to a standard PDF; for people adopting or evaluating the format.

## What it does

- Publishes the bim-pdf open format spec and the free Revit add-in download at bimpdf.com.
- Serves the versioned JSON schemas at `https://bimpdf.com/schema/*` and the shared UI kit css at `kit/`.
- Ships `llms.txt` and `version.json` for agents and deploy checks.

## Use it

- Live: https://bimpdf.com
- Build: `npm ci && npm run build`; test: `npm test`.
- Deployed as the Cloudflare Worker `bim-pdf-worker` (assets only); rollback with `npx wrangler rollback`.

## Validate a .bim.pdf

```
node validator/bimpdf-validate.mjs [--json] file.bim.pdf   # Node 20+, no npm install
```

See `validator/README.md`. `examples/` holds the synthetic 1.14 files (`/examples/` on the site); `npm test` validates them, and the `verapdf` check runs veraPDF PDF/A-3b on the archival one.

## Docs

- Agent instructions: AGENTS.md
- Specs: docs/specs/
- Decisions: docs/decisions/
- Current state: spec front matter, `git describe` (deploy tags), Linear project

## Licences

| Files                                                                                           | Licence                                               |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Spec text: `docs/specs/0002-bimpdf-format.md`, the rendered `/spec` and `/ns/*` pages           | CC-BY-4.0 (`LICENSE-spec`)                            |
| JSON Schemas (`vendor/core`, `/schema/*`), reference types, validator, build scripts, site code | Apache-2.0 (`LICENSE`)                                |
| `downloads/bim-pdf-addin.zip`                                                                   | Closed-source free binary. Neither licence covers it. |

## Pages

`/spec` is generated at build by `gen-version.mjs` (via `gen-spec.mjs`) from the spec text and `vendor/core`; nothing about the current version is hand-copied. `/ns/1/` and `/ns/1.0/` are the resolvable XMP namespace pages, `/llms.txt` the agent summary.
