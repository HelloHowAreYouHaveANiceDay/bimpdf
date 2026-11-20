# REVIEW (simplification) -- SPEC-DRAFT v1 (prereview copy)

Reviewer: tot (Opus, same session, by card instruction), after REVIEW-pressure. Lens: count moving parts, cut and
merge, smallest spec that works. D1-D5 kept; tension flagged.

Moving parts in v1: 9 discovery/declaration artifacts (notice, XMP label, extension-schema block, `/Extensions`,
custom AFRelationship, manifest file, manifest schema AF, README-agent, llms.txt) + 4 profiles + 1 archival flag +
3 version carriers (XMP, ExtensionLevel, manifest) + 1 drift check + 1 detection helper.

## Findings

S1 CUT -- the separate `bim-pdf.json` manifest (section 4).

- It restates facts other parts already own: version (`elements.json` `"bim-pdf"` field, XMP), attachment list
  (`/EmbeddedFiles` + `/AF`), per-file size and hash (`/Params /Size`, `/CheckSum`), producer (XMP `CreatorTool`).
- It adds a file, a schema, a writer in five producers, a regenerate rule (pressure P3), and a third version carrier.
- D5's ladder does not name a manifest; PRIOR-ART recommended one from the 2025 app note, which fits formats whose
  payload IS one file. Ours already has an anchor: `elements.json`, which every reader keys on today.
- Smallest fix: `elements.json` is the anchor sidecar; its filespec carries AFRelationship `/<PFX>_Elements`
  (custom, per the app note) or plain `/Data`. No new file.

S2 MERGE -- profiles 4 -> 2 + flags.

- `linked` is reserved with no producer: Out. `3d` is not "more drawing"; a `core` file can carry a glb. Make it a
  fact readers see (a `model_*.glb` attachment), not a level.
- Result: `core` and `drawing`, plus `archival: pdfa-3b`. Two levels are enough for "what can a reader rely on".

S3 GENERATE, don't check -- AC6 drift check.

- The spec page states the current version and the sidecar list by hand, then CI checks them against `vendor/core`.
- `gen-version.mjs` already copies vendor schemas at build. Have it render the version, schema links and sidecar
  table into `/spec` from `vendor/core`. No hand copy -> nothing to drift. Keep `vendor-sums --check` (exists).

S4 ONE version carrier -- with pressure P1.

- XMP `formatVersion` is the declaration; sidecar `"bim-pdf"` fields are the data (they already exist);
  `/Extensions` says only "this extension, level 1". Drop the manifest's copy (S1).

S5 ONE detection implementation per language, not a new library surface.

- `detectBimPdf()` in core (TS) plus pdf-cli's Go plus a new public JS validator = three implementations.
- Smallest: core implements it; the public validator in bimpdf-site vendors core's built JS (as the site already
  vendors core's schemas, byte-locked); pdf-cli ports it and runs `examples/` as goldens (its existing pattern,
  `pdf-bim.SOURCE`). That answers pressure P5 without a third codebase.

S6 CUT -- the nested schema AF (4.2) and `/Schema` AFRelationship.

- Only needed for PDF/A-4 (RELAX-NG) which is Out. The XMP extension-schema block covers PDF/A-3.

S7 CUT -- the size-warning config key (9.2).

- No measured incident since 3D became opt-in (pressure F1). Out with "no measured incident".

S8 KEEP but narrow -- `/BIMP_PMT` rename (AC23).

- It is the only private key we write; prefix it once the prefix exists. Reading `/PMT` stays.

S9 MERGE slices.

- revit-cli and autocad-cli need no code of their own: they shell to pdf-cli `package` and only bump a schema pin.
  One slice "driver pin bump" for revit-cli + autocad-cli + bim-cli; blender-cli separately ([nice]).
- Spec site pages + llms.txt + ns pages + licenses = one site slice; examples + validator = second.

S10 KEEP -- README-agent.md and llms.txt.

- Cheap, measured (sheetbench v1.0 notice/README arms found discovery from them). D5 names them.

## Tension with Decided items

- S1 removes a manifest file; D5 does not require one, so no conflict. It does mean the custom AFRelationship
  sits on `elements.json`, which D5 allows ("AFRelationship + /Desc on every attachment").
- D4 lists "Tagged PDF + per-object AF" and "ISO/TS 32007 glTF". Moving `linked` and RichMedia to Out defers them,
  it does not reject them; record as "deferred, D4 direction kept" so a later review does not read it as a reversal.

## Count after cuts

Declaration artifacts 9 -> 7 (no manifest, no schema AF). Profiles 4 -> 2 + 1 flag. Version carriers 3 -> 1
declaration + the existing data fields. New CI checks 2 -> 1 (veraPDF; drift is generated away).

## Verdict

Adopt S1-S7 and S9. Top 5: S1 manifest cut, S5 one implementation vendored, S3 generate the spec facts,
S2 two profiles, S9 slice merges.
