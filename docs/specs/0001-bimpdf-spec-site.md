---
id: 0001
title: bimpdf.com as the home of the bim-pdf open format spec
status: draft
approved:
appetite:
version: v1
reason:
---

# bimpdf.com as the home of the bim-pdf open format spec

Retrospective draft written at sdlc-docs onboarding from AGENTS.md and the project roadmap (wiki `projects/roadmap--bim-pdf.md`). Not approved: the owner has not signed this spec, so the approval fields stay empty.

## TL;DR

- bimpdf.com is a static site that hosts the bim-pdf open format spec, the schemas and the free Revit add-in download.
- Published schema bytes are a contract: pdf-cli checks them byte for byte, and the deploy job polls every schema hash and `/version.json`.
- `vendor/` holds byte copies of the core schemas (from pdfmarkuptool) and the ui-kit, locked by `vendor/SHA256SUMS`.
- Per the roadmap (2026-10-30), brand positioning is moving to ".bim.pdf": a normal PDF with a sidecar, with the add-in as one way to make one.
- Deployed as the Cloudflare Worker `bim-pdf-worker` on push to main.

## What you need to decide now

<!-- Empty by design: this spec is a draft. -->

## Decided

- D1: Vendored files are never hand-edited; `node scripts/vendor-sums.mjs --check` gates them in CI.
- D2: A schema change reaches the site only through the `core-sync.yml` pin PR from pdfmarkuptool.
- D3: Site copy claims only shipped add-in features (roadmap, 2026-10-30).

## Acceptance criteria

- AC1 [must] WHEN the site deploys THE SYSTEM SHALL serve every `https://bimpdf.com/schema/*` file with bytes identical to `vendor/core`.
- AC2 [must] WHEN a file under `vendor/` changes without a matching `vendor/SHA256SUMS` update THE SYSTEM SHALL fail CI.
- AC3 [nice] WHEN the hero copy is rewritten THE SYSTEM SHALL describe a .bim.pdf as a normal PDF with a sidecar. TODO: owner has not signed the copy; roadmap marks brand brief as draft.

## Build order (hints -- the slicing worker defines the scopes)

| #   | Slice hint                                         | ACs     | Done when |
| --- | -------------------------------------------------- | ------- | --------- |
| 1   | TODO: take open rows from the roadmap for the site | AC1-AC3 | TODO      |

## Risks / Out

- Out: format-logic changes; the schema is owned upstream in pdfmarkuptool.
- Risk: a deploy that changes any published schema byte breaks pdf-cli consumers.
