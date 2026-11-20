---
id: 0002
title: The .bim.pdf format, public spec of record
status: approved
approved: 2026-11-20 libo (Slack #everbeach thread 1795140892.774669, "yes. go")
appetite: 450
version: v2
reason:
---

# 0002 -- The .bim.pdf format (public spec of record)

Lands as `bimpdf-site/docs/specs/0002-bimpdf-format.md` (0001 = the spec site itself, on origin/main).
Design folder: `docs/specs/0002-bimpdf-format/` (CONTEXT, AUDIT, PRIOR-ART, REVIEW-pressure, REVIEW-simplify, FOLD-v1, PLAN).

## TL;DR

- A .bim.pdf is a plain PDF 1.7 that carries building data as attached JSON files and says so where PDF tools look.
- What PDF can already say, we say the PDF way: sheet numbers, sheet index, scales, layers, markup ids.
- Data PDF has no home for stays in sidecars, each a catalog Associated File with a plain `/Desc`; `elements.json` is the anchor.
- One declaration (XMP `bimpdf:formatVersion`, namespace URI = the spec), echoed by `/Extensions` and every `/Desc`.
- Spec text CC-BY-4.0; schemas, examples and a small vendored-from-core validator Apache-2.0; all in the public bimpdf-site.

## What you need to decide now

## Decisions taken (owner, 2026-11-20)

1. **Developer prefix.** Register `BIMP` on adobe/pdf-names-list (`<PFX>` below). Recommendation: yes, after checking the sheet. If not: no `/Extensions` entry, no custom AFRelationship, `/PMT` stays an unprefixed key.
2. **Next version is 1.14, not 2.0.** Recommendation: 1.14 (all additive). If 2.0: blender-cli (1.0) and autocad-cli (legacy wrapper) break [AUDIT risk 5].
3. **Fresh-history push.** Recommendation: publish one squashed commit. If not: history keeps personal emails, `a local path` paths and "live fixture" fixture names (no secrets found).
4. **Public CI on GitHub-hosted runners only.** Recommendation: yes. If not: fork PRs run on the build host.
5. **Public validator = core's validator, vendored into bimpdf-site as built JS.** Recommendation: yes (one implementation, byte-locked like the schemas). If not: say "no public validator in 1.14" and move it to Out (D1 names one).
6. **Public examples: synthetic files + the landing sample re-exported at 1.14.** Recommendation: yes; no a client project, no fixture A. If a client project is allowed: a richer example, but the owner's house becomes public.

## Why

Owner asks, verbatim (Slack #everbeach, 2026-11-19):

- "does bimpdf format fulfill the ethos of pdf?"
- "lets get the spec public ready"
- "recs for license. public repo. lets publish"
- "bimpdf.com and the repo should match. we split the repos remember?"
- "let's look at prior art for filetype standards like this."
- "do a broad web search on the built in metadata. even better if it's a natural way to have agents and readers tell how to read bimpdf"
- "what would be the most pdf natural way to extend the format?"
- "do a thorough scan of bimcli and pdfmarkuptool and wherever else we use bimpdf to see the splash radius of this. then produce a spec based on our sdlc"

## Decided

- D1: License: CC-BY-4.0 for spec text; Apache-2.0 for schemas, reference types, validator. (owner)
- D2: Public home is the EXISTING repo `HelloHowAreYouHaveANiceDay/bimpdf-site`. bimpdf.com and the repo match: spec, schemas, examples, validator live there and deploy to bimpdf.com (`/spec`, `/schema`). No new repo. The pdfmarkuptool monorepo stays private. (owner)
- D3: Publish approved; overrides the 2026-10-30 stealth stance for the spec. Before going public: a full-history audit of bimpdf-site (secrets, private paths, AGENTS.md/CLAUDE.md, .standards, ci/, docs/, scripts/). The closed-source add-in binary in `downloads/` may stay as a free download, stated plainly. Fresh-history push if history can't be cleaned safely. (owner)
- D4: Direction: PDF-native first. Use PDF constructs viewers already honour (Measure/Viewport, PageLabels, Outlines, OCGs, Tagged PDF + per-object AF/Metadata, annotation /NM, ISO/TS 32007 glTF). Sidecars only where PDF has no home, each linked to the object it describes. New keys under a registered developer prefix (ISO 32000 Annex E) + catalog `/Extensions`. (owner; detail designed here)
- D5: Self-declaration, cheapest first: visible notice -> XMP label in a bimpdf namespace whose URI resolves to the spec -> `/Extensions` -> AFRelationship + `/Desc` on every attachment -> README-agent.md -> bimpdf.com/llms.txt. Today's XMP (`pdfbim:version=2` + generator, `http://pdfbim.com/ns/1.0/`) must stay readable. (owner)

## Problem

From AUDIT.md (32 repos at origin/main, 13 real files probed) and review checks on 2026-11-20:

- No spec text exists. `https://bimpdf.com/spec` is 404; the format lives in TypeScript types, 14 JSON Schemas (1.0-1.13) and `packages/core/DESIGN.md` in a private repo.
- Every repo involved is private, including pdf-cli, the only full validator (`gh repo view`, 2026-11-20).
- Five producers write five versions: addin 1.13, pdf-cli `package` 1.10, revit-cli 1.10, blender-cli 1.0, autocad-cli a pre-1.0 wrapper [AUDIT risk 5].
- pdf-cli vendors schemas only to 1.12 and validates 1.13 files against 1.12 silently [`bim_schema.go:15-38`].
- Detection is by name: PMT looks for `elements.json` [`loadBimPackage.ts:102`]; pdf-cli searches XMP bytes for `pdfbim` [`bim_validate.go:398`].
- `pdfbim:version` is always `"2"`, the packaging generation, not the format version [`PdfBimPacker.cs:158`, `bim.go:158`]; its namespace URI ends in a 404.
- PMT export rebuilds the PDF and drops XMP, PageLabels, Outlines, catalog `/AF` and AFRelationship [`export-document.ts:94`, `sidecar-writer.ts:125`]; it skips attachments in a `/Kids` tree [`sidecar-writer.ts:103`].
- pdf-cli writes `/Subtype` as a string on the filespec, not a MIME name on the stream [`bim.go:147-148`]; no output is PDF/A-3; the addin writes a `%PDF-1.6` header with PDF/A-3/2.0 `/AF` keys.
- 0 of 13 probed files have `/VP`/`/Measure`, a structure tree, `/Extensions`, annotation `/NM` (0 of 300+ annotations), or `/Desc` from Revit producers. Revit output already has PageLabels + Outlines.
- The 809 MB file (DIM-2085) was a 3D export; the addin already defaults 3D off [`AppSettings.cs:15`, `Model3dOptInTests.cs:20-32`].
- Public prose contradicts D4: "no format extension, no PDF structure modification" [`index.html:130`]; "v1.1 current" [`llms.txt:38`].
- PMT writes an unprefixed private annotation key `/PMT` [`annotation-writer.ts:395`].
- No external users: no GitHub code hits outside our org, `@bim-pdf/core` not on npm, 217 pdf-cli release downloads. Everything except the live schema bytes can still change.

## The format

Normative. MUST, SHOULD, MAY per RFC 2119. "Producer" writes a .bim.pdf; "reader" reads one; "validator" checks one. `<PFX>` = the registered developer prefix (proposed `BIMP`).

### 1. Base file

- 1.1 A .bim.pdf MUST be a valid PDF 1.7 file (ISO 32000-1) with header or catalog `/Version` >= 1.7. Keys from PDF 2.0 below MUST be ignorable by a 1.7 reader.
- 1.2 Producers MUST NOT encrypt it (AF payloads are always encrypted in an encrypted PDF). Readers MAY try to read an encrypted file. Signing is allowed.
- 1.3 The extension is `.pdf`; `.bim.pdf` is a naming convention.
- 1.4 Degrades to a plain PDF: removing every attachment, the XMP label and `/Extensions` MUST leave a file that renders the same pages. No page content MAY depend on bim data, 3D or JavaScript. Every OCG holding sheet content MUST default ON.

### 2. PDF-native first

Where PDF has a construct, a producer at conformance `drawing` MUST use it. Sidecars MAY carry the same fact for tool convenience; when both exist they MUST agree, and validators MUST check it.

| Fact                    | PDF construct                        | Sidecar           | Rule                                                                                                                                                         |
| ----------------------- | ------------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sheet number            | catalog `/PageLabels`                | `pages.json`      | MUST at `drawing`. Display strings; sheet ids stay in the sidecar.                                                                                           |
| Sheet index             | catalog `/Outlines`                  | `pages.json`      | MUST at `drawing`. One entry per sheet; no data in titles.                                                                                                   |
| Drawing scale           | page `/VP` + `/Measure /Subtype /RL` | `scales.json`     | MUST at `drawing` for each scaled viewport. Agreement: same BBox in raw user space (+-1 pt) and scale ratio within 0.1%. `scales.json` stays (PMT reads it). |
| Layers                  | OCGs + `/OCProperties`               | `pmt-layers.json` | SHOULD. OCG names are the join key and MUST be stable across exports.                                                                                        |
| Markup identity         | annotation `/NM`                     | `marks.json`      | MUST at `drawing` on every annotation in the output (Revit's link annotations included): a document-unique UUID. Readers key by page + `/NM`.                |
| Private annotation data | `/<PFX>_*` keys                      | --                | Any private key MUST carry the prefix. `/PMT` is legacy, read-only.                                                                                          |
| 3D                      | glTF attachment `model_*.glb`        | --                | Optional, opt-in only. The sheet is always the 2D poster.                                                                                                    |

### 3. Sidecars as Associated Files

- 3.1 Every sidecar MUST be in the catalog `/EmbeddedFiles` name tree AND the catalog `/AF` array. Page-level `/AF` is not used in 1.x.
- 3.2 Each filespec MUST have `/F` = `/UF` = the filename, `/AFRelationship`, and a `/Desc` naming the file's role and `https://bimpdf.com/spec`.
- 3.3 Each embedded file stream MUST have `/Subtype` as a MIME name (`/application#2Fjson`, `/model#2Fgltf-binary`, `/text#2Fmarkdown`) and `/Params` with `/Size` and `/ModDate`.
- 3.4 AFRelationship: `elements.json` (the anchor) and the other format sidecars `/Data`; `README-agent.md`, glTF and app-private files `/Supplement`. Note: custom AFRelationship names are valid per ISO 32000-2 but rejected by widely used libraries (pdfcpu); revisit when they accept second-class names. Readers MAY still accept `/BIMP_Elements` on `elements.json` in files written earlier (detection rung 3).
- 3.5 `elements.json` MUST be present; its `"bim-pdf"` field is the data version of the sidecars.
- 3.6 Readers MUST walk both flat `/Names` arrays and `/Kids` trees.
- 3.7 Reserved names: the canonical sidecar names in the schema, `README-agent.md`, `model_*.glb`. App-private attachments MUST use an `<app>-` prefix (e.g. `pmt-marks.json`). Readers MUST ignore unknown names.
- 3.8 No bim data in `/PieceInfo` or private streams.

### 4. Declaration and discovery

Each rung stands alone; a reader MUST NOT require more than one.

1. Visible notice (shipped). Unchanged.
2. XMP label: namespace `https://bimpdf.com/ns/1/`, prefix `bimpdf`. Properties: `formatVersion` (Text, `1.14`), `conformance` (Text, `core|drawing`), `archival` (Text, optional, `pdfa-3b`), `spec` (URI), `readingHint` (Text, one sentence). The packet MUST include a PDF/A extension-schema block describing them. The namespace URI MUST resolve to a page on bimpdf.com. Producer identity uses standard `xmp:CreatorTool`.
3. Catalog `/Extensions /<PFX> << /BaseVersion /1.7 /ExtensionLevel 1 /URL (https://bimpdf.com/spec) >>`. ExtensionLevel changes only on a major.
4. AFRelationship + `/Desc` on every attachment (section 3).
5. `README-agent.md` attachment: how to read this file, under 60 lines.
6. `https://bimpdf.com/llms.txt` describing the format and linking `/spec`.

`formatVersion` is the one declaration. When it disagrees with `elements.json`'s `"bim-pdf"` field, readers use `elements.json` and validators report an error.

Legacy: readers MUST read `pdfbim:version` and `pdfbim:generator` (`http://pdfbim.com/ns/1.0/`) and MUST NOT treat `pdfbim:version` as a format version. Producers MAY keep writing them. `https://bimpdf.com/ns/1.0/` MUST resolve to a page explaining them.

Detection order: XMP `bimpdf:formatVersion` -> `/Extensions /<PFX>` -> AFRelationship `/<PFX>_Elements` (legacy: older files only; writers use `/Data`, so detection normally rests on the XMP and `/Extensions` rungs) -> legacy `pdfbim` XMP -> an attachment named `elements.json`. The first hit wins.

### 5. Conformance

- `core`: base file (1) + sidecars as AF (3) + XMP label (4.2). Every producer MUST reach `core`.
- `drawing`: core + PageLabels, Outlines, `/VP` + `/Measure`, annotation `/NM` (2).
- Orthogonal flag `archival: pdfa-3b`: the file also passes veraPDF as PDF/A-3b.
- The word "profile" is not used: pdf-cli's `bim.validate` already has a `profile` field (sidecar shape) that drafter keys on [`bim_validate.go:36`, `issue.test.mjs:75`].

### 6. Versioning

- 6.1 `MAJOR.MINOR`. Minor = additive. Major = an old reader would misread a new file.
- 6.2 Every published `https://bimpdf.com/schema/bim-pdf-1.X.schema.json` is frozen forever, bytes and `$id`. New versions add files only.
- 6.3 Our own components pin: each producer writes exactly one version and byte-checks that schema. A validator given a version it has no schema for MUST refuse ("unknown format version 1.X") and MUST NOT fall back to an older schema.
- 6.4 Release order for our components: core -> pdf-cli release vendoring the new schema -> bim-cli pin -> producers write the new version. A producer MUST NOT write a version the validator pinned by bim-cli lacks.
- 6.5 Third-party policy: readers SHOULD accept any minor of a known major and ignore unknown fields and attachments; MUST refuse an unknown major. Producers SHOULD write the newest minor they fully implement.
- 6.6 The XMP namespace URI and ExtensionLevel change only on a major.

### 7. Migration

- 7.1 Files written before 1.14 stay valid at their sidecar version; readers find them by the legacy rungs (section 4).
- 7.2 autocad-cli's pre-1.0 wrapper stays readable by pdf-cli (`v2`/`legacy-v1` shape) but is not a conforming .bim.pdf.
- 7.3 blender-cli's 1.0 output is valid 1.0.
- 7.4 A tool that rewrites a .bim.pdf (PMT export) MUST regenerate the declaration (XMP label, `/Extensions`, AF entries) for what it writes, MUST carry over PageLabels, Outlines and legacy `pdfbim:*` fields, and MUST NOT copy a stale declaration.

## Acceptance criteria

Site and publication (bimpdf-site):

- AC1 [must] `bimpdf.com/spec` serves sections 1-7 as HTML with version and licence; the current version, schema links and sidecar list are generated at build from `vendor/core`.
- AC2 [must] The repo has `LICENSE` (Apache-2.0) and `LICENSE-spec` (CC-BY-4.0) and a README stating which files each covers and that `downloads/bim-pdf-addin.zip` is a closed-source free binary.
- AC3 [must] Every existing `/schema/bim-pdf-1.0..1.13.schema.json` keeps its bytes (deploy hash poll green).
- AC4 [must] `/ns/1/` and `/ns/1.0/` return 200 pages explaining the new and legacy namespaces.
- AC5 [must] `llms.txt` names the current version and links `/spec`; `index.html` no longer says "no PDF structure modification".
- AC6 [must] The repo goes public only after a recorded history audit or a fresh-history push, with zero secret-scan hits and no private fixtures, personal paths or client names.
- AC7 [must] All CI runs on GitHub-hosted runners; fork-PR workflows need maintainer approval; `core-sync.yml` never runs on `pull_request`.
- AC8 [must] `examples/` holds only synthetic or already-public files, each passing the public validator at its declared conformance.
- AC9 [must] A public validator (core's built validator vendored and byte-locked, plus a PDF reader for sections 1, 3, 4) runs from the repo and in CI on `examples/`.
- AC10 [must] The `archival` example passes veraPDF PDF/A-3b in CI.
- AC11 [nice] The prefix is registered and the extension is listed at pdf-association/pdf-extensions.

Core (pdfmarkuptool `packages/core`):

- AC12 [must] Core ships the 1.14 schema and one `detectBimPdf()` implementing section 4's detection order, tested on legacy and new fixtures.
- AC13 [must] Core's version check refuses an unknown major and reports the version found.
- AC14 [must] Core exports one declaration writer used by PMT export (7.4).

Producers:

- AC15 [must] Addin output passes the validator at `drawing` (header 1.7, PageLabels, Outlines, VP/Measure, `/NM`, XMP label, `/Extensions`, AFRelationship, `/Desc`).
- AC16 [must] Every producer's default output carries no glTF; a test per producer pins it.
- AC17 [nice] Addin output passes veraPDF PDF/A-3b when its archival option is on.
- AC18 [must] pdf-cli `package` writes stream `/Subtype` as a MIME name and reaches `core`.
- AC19 [must] revit-cli and autocad-cli outputs (via pdf-cli `package`) reach `core`; revit-cli's vendored schema pin moves to 1.14.
- AC20 [nice] blender-cli writes 1.14 `core`.

Consumers and validators:

- AC21 [must] pdf-cli `bim.validate` checks sections 1, 3 and 4, reports `conformance`, keeps `profile` with today's values, refuses versions it has no schema for, and passes on every file in bimpdf-site `examples/`.
- AC22 [must] PMT export keeps PageLabels, Outlines, every sidecar's AFRelationship and `/Desc`, regenerates the declaration (AC14), and finds `/Kids` attachments.
- AC23 [must] PMT loads a file found by any section-4 rung.
- AC24 [must] PMT writes `/NM` on every annotation, writes `/<PFX>_PMT` and reads `/PMT`.
- AC25 [must] Drafter's issue flow passes against the new pdf-cli (`profile` and `checks.af_present` present).
- AC26 [must] The release order of 6.4 holds: no producer release writes 1.14 before bim-cli pins a pdf-cli that has the 1.14 schema.
- AC27 [must] bim-cli's format docs link to bimpdf.com/spec.
- AC28 [nice] Wiki pages and Hermes skills point to the public spec; core `DESIGN.md` points to it.

## Publication

- Licences per D1; SPDX headers on schema and code files.
- History: 47 commits on main; reachable history includes the pdf-bim split. Pattern scan: no secret hits. It holds personal author emails, `a local path` paths and "live fixture" fixture names. Recommendation: fresh-history push (decide-now 3).
- Review before publishing: `AGENTS.md`, `CLAUDE.md`, `.standards/`, `ci/`, `docs/`, `scripts/core-sync.mjs` (names the private repo and `PMT_READ_TOKEN`), the IndexNow key file (public by design).
- Schema sync: `vendor/core` stays a byte copy of private `packages/core`, refreshed by `core-sync.yml`; the spec page's version facts are generated from it (AC1), so there is no hand copy to drift.
- Fixtures: synthetic files + the landing sample re-exported at 1.14. Not public: a client project, fixture A (Autodesk licence unverified), fixture A, a client project (a private PMT fixture; scrub it there, separately).
- veraPDF in CI on the archival example (AC10).
- 3D: opt-in in every producer (AC16).
- Pages: `/spec`, `/ns/1/`, `/ns/1.0/`, `/llms.txt`.
- Prefix registration (owner action, external): issue on adobe/pdf-names-list; after `/spec` is live, issue on pdf-association/pdf-extensions.

## OPEN: where code and docs disagree today

| #   | Docs say                                                     | Code does                                     | Resolution                                                                  |
| --- | ------------------------------------------------------------ | --------------------------------------------- | --------------------------------------------------------------------------- |
| O1  | `index.html:130` "no PDF structure modification"             | D4 adds native constructs                     | AC5                                                                         |
| O2  | `llms.txt:38` v1.1 current                                   | core 1.13                                     | AC5                                                                         |
| O3  | bim-cli `bim-pdf-format.md:108` promises PDF/A-3 conventions | none written                                  | `archival` flag, AC10/AC17                                                  |
| O4  | `pdfbim:version=2` reads as a format version                 | packaging generation                          | section 4 legacy rule                                                       |
| O5  | pdf-cli validates "1.13"                                     | against 1.12                                  | AC21 refuse rule                                                            |
| O6  | CONTEXT "11 schema versions"; "3D default on"                | 14 live; addin 3D off                         | facts corrected here                                                        |
| O7  | addin `Model3dWireShapeTests` cite 1.9                       | 1.13 DTOs                                     | addin slice touch-up                                                        |
| O8  | `pdf-bim/AGENTS.md` documents `pnpm benchmark --stage 0`     | removed (#492)                                | core slice doc fix                                                          |
| O9  | core `DESIGN.md` is the de facto spec                        | this spec                                     | AC28                                                                        |
| O10 | bimpdf-site 0001 says "format-logic changes out"             | this spec puts the format text in bimpdf-site | 0001's Out stays true: schemas are still owned by core; 0002 owns the prose |

## Out

- Tagged PDF / structure-tree links and per-object AF (D4 direction kept; deferred, no producer yet). If revived: needs a Revit element <-> content mapping and pdf-cli splice/explode support for page-scoped AF (REVIEW-pressure P8).
- ISO/TS 32007 RichMedia 3D writing (D4 direction kept; deferred): glTF stays a plain attachment.
- Both items above are explored together in spike S13 (owner, 2026-11-20: "add it. Include 3d too so we can think about the format cohesively"), which delivers a cohesive 1.15 format model (one element id across elements.json, marks, tags, OCGs and 3D nodes) with go/no-go per feature. 1.14 does not wait on it.
- A separate manifest file (`bim-pdf.json`) and a nested schema AF: rejected, they restate facts other parts own (REVIEW-simplify S1, S6).
- A `3d` conformance level: glTF presence is a plain fact.
- PDF/A-4f and PDF 2.0 headers.
- A size-warning config key: no measured incident since 3D became opt-in.
- Publishing `@bim-pdf/core` to npm; opening the pdfmarkuptool monorepo or pdf-cli.
- A hosted web validator.
- Rewriting 1.0-1.13 schemas or `$id`s.

## How it works (guidance)

In short: core defines and detects; producers write; pdf-cli and the public validator check; the site publishes. Build order (PLAN.md has the slices):

1. core: 1.14 schema (XMP fields, AFRelationship names), `detectBimPdf()`, declaration writer, refuse rule, fixtures.
2. bimpdf-site: spec pages generated from `vendor/core`, ns pages, llms.txt, licences, hosted runners.
3. bimpdf-site: vendored validator + `examples/` + veraPDF job.
4. pdf-cli: `/Subtype` fix, declaration in `package`, validator rules, vendor 1.13 + 1.14, release.
5. bim-cli: pin the new pdf-cli; docs link. revit-cli/autocad-cli pin bumps.
6. PMT: export regenerate/keep, `/NM`, `/<PFX>_PMT`, detection via core.
7. addin: header 1.7, declaration, VP/Measure, `/NM`, `/Desc`; release after step 5.
8. drafter regression check; blender-cli [nice].
9. Publication: history, visibility flip, prefix registration (owner).

## Moving parts

| Part                                          | General or format-specific | Why needed                                       | Layer     |
| --------------------------------------------- | -------------------------- | ------------------------------------------------ | --------- |
| XMP label + extension schema                  | general (PDF/A practice)   | the one declaration (D5)                         | file      |
| `/Extensions /<PFX>`                          | general (ISO 32000)        | D4/D5                                            | file      |
| AFRelationship `/Data` + `/Desc`              | general (AF)               | D5                                               | file      |
| `detectBimPdf()` + declaration writer in core | specific                   | one implementation for TS readers and PMT export | library   |
| VP/Measure writer in addin                    | general construct          | scales in viewers (D4)                           | producer  |
| `conformance` in validators                   | specific                   | readers know what to rely on                     | validator |
| vendored validator, veraPDF job               | general                    | D1 public validator; archival claim              | site CI   |

## Glossary

- AF: Associated File (ISO 32000-2 14.13); AFRelationship is its role key.
- Annex E prefix: a 4-character registered developer prefix for second-class PDF names.
- Conformance: the level a file declares, `core` or `drawing`.
- Sidecar: a JSON attachment defined by the bim-pdf schema; `elements.json` is the anchor.

## Changelog

- v2 (2026-11-20): folded REVIEW-pressure and REVIEW-simplify (FOLD-v1.md).
