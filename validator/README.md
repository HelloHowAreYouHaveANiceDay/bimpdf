# bimpdf validator

Checks a whole `.bim.pdf` against the format spec (https://bimpdf.com/spec, version 1.14). Apache-2.0.

```
node validator/bimpdf-validate.mjs [--json] [--quiet] file.bim.pdf [more files...]
```

Node 20 or newer. No install step: `vendor/validator/validate.bundle.mjs` is core's built validator with ajv inlined. Exit code 0 = every file is valid at its declared conformance, 1 = errors, 2 = bad usage. Library use: `import { validateBimPdf } from './validator/validate-bimpdf.mjs'` (takes a `Buffer`, returns `{ valid, declared, reached, formatVersion, archival, findings }`).

## What it checks

| Spec section                               | Check                                                                                                                                                                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 Base file                                | header or catalog `/Version` >= 1.7; no encryption                                                                                                                                                                                                                  |
| 2 PDF-native first (required at `drawing`) | `/PageLabels` match `pages.json` sheet numbers; `/Outlines` present; every `scales.json` viewport has a page `/VP` with the same `/BBox` (+-1 pt) and a `/Measure /RL` whose scale agrees within 0.1%; every annotation has a unique `/NM`                          |
| 3 Sidecars as AF                           | each sidecar in `/EmbeddedFiles` and `/AF`; `/F` = `/UF` = name; `/AFRelationship` per 3.4; `/Desc` names the spec URL; stream `/Subtype` is a MIME name; `/Params` has `/Size` and `/ModDate`; `elements.json` present; app-private names carry an `<app>-` prefix |
| 4 Declaration                              | XMP label (with the PDF/A extension-schema block) and `elements.json` `"bim-pdf"` agree; `/Extensions /BIMP` has the 4.3 shape; detection runs in the spec's order                                                                                                  |
| 5 Conformance                              | the declared `core` or `drawing` level is reached                                                                                                                                                                                                                   |
| 6.3 Versions                               | an unknown version is refused, never validated against an older schema                                                                                                                                                                                              |
| Sidecars                                   | every sidecar against its JSON Schema, plus the pages.json, scales.json and marks.json cross-checks (core's `validatePackage`)                                                                                                                                      |

`archival: pdfa-3b` is a claim this validator reports but does not check; run veraPDF for that (`scripts/verapdf-check.mjs`).

## Not checked yet

- PageLabels with a number style other than plain prefix + decimal (only prefix and decimal ranges are compared with `pages.json`).
- `/Measure` units other than mm, cm, m, in, ft (reported as a warning).
- PDF 1.4 cross-reference damage: the reader scans for objects instead of following the xref, so a file with a broken xref still validates when its objects are intact.
- Stream filters other than Flate (such a stream is reported, not decoded).
- Rule 1.4 (the file degrades to a plain PDF): needs a renderer.

## Vendored core

`vendor/validator/validate.bundle.mjs` is built by `scripts/build-validator.mjs` from a built `packages/core` of the pdfmarkuptool repo; `vendor/validator/UPSTREAM` names the commit and `vendor/SHA256SUMS` locks the bytes.
