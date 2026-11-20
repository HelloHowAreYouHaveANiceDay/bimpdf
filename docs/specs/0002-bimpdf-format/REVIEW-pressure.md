# REVIEW (pressure test) -- SPEC-DRAFT v1 (prereview copy: spec--bimpdf-format.v1-prereview.md)

Reviewer: tot (Opus, same session, by card instruction). Lens: what breaks. Replayed against AUDIT's 13 probed files,
origin/main code (shas in AUDIT), and 2026-11-20 checks recorded below. Owner Decided items D1-D5 are not re-argued;
tension is flagged.

Verified while reviewing (new facts):

- F1 The addin ALREADY defaults 3D off: `AppSettings.cs:15 IncludeModel3d = false`, pinned by
  `tests/Model3dOptInTests.cs:20-32`. CONTEXT's "3D default on" is stale for the addin; the 809 MB file (DIM-2085)
  came from an opt-in export or another path.
- F2 Every repo involved is PRIVATE, including pdf-cli (the only full validator) and pdfmarkuptool (core).
  `gh repo view ... --json visibility`, 2026-11-20. D1/D2 promise an Apache-2.0 validator in bimpdf-site; none exists there.
- F3 bimpdf-site CI defaults to self-hosted (`ci.yml:23,37,53,65,102` `LINUX_RUNS_ON || ["self-hosted","Linux","X64"]`);
  only one job (`:63`) is limited to same-repo PRs.
- F4 bimpdf-site reachable history (filter-repo split from pdf-bim) mentions `a local path`, `a local path`,
  the "live fixture" fixture and personal author emails; no secret-pattern hits (ghp_/xox/sk-/AKIA/private keys).
- F5 pdf-cli writes `/Subtype` as `types.StringLiteral` on the filespec dict (`commands/bim.go:147-148`), confirmed.

## Findings

P1 BLOCKER -- ExtensionLevel contradicts the versioning rule.
Problem: 5.3 sets `ExtensionLevel = major*1000+minor` (1014) but 7.5 says it changes only on a major.
Scenario: 1.15 ships; a writer following 5.3 writes 1015, one following 7.5 writes 1014; validators disagree.
Fix: `ExtensionLevel 1` for all 1.x; the minor lives only in XMP `formatVersion`. One place per fact.

P2 BLOCKER -- the addin's PDF header is 1.6.
Problem: 1.1 requires PDF 1.7 and section 3 requires `/AF`, but the addin outputs `%PDF-1.6` (AUDIT probe).
Scenario: veraPDF and strict validators reject `/AF` in a 1.6 file; AC10/AC16 can never pass on addin output.
Fix: producers MUST write header (or catalog `/Version`) >= 1.7; AC on the addin.

P3 HIGH -- "preserve" makes PMT export carry stale declarations.
Problem: AC21 says PMT export preserves XMP, `/Extensions`, manifest. PMT adds `pmt-*.json` and annotations;
a copied manifest's attachment list and sha256s go stale, and the XMP `producer` lies.
Scenario: PMT re-export of v84 copies `bim-pdf.json` listing 10 files while the PDF now has 13; validator fails
a file PMT just wrote.
Fix: re-export MUST regenerate the declaration from what it writes (same helper as producers), carrying over only
the legacy `pdfbim:*` fields and the source's PageLabels/Outlines.

P4 HIGH -- refuse-on-unknown + pinned validator = outage in the drafter loop.
Problem: AC20 makes pdf-cli refuse versions it has no schema for. bim-cli pins pdf-cli v0.26.0 (`driver-pins.json`);
drafter validates every addin output through it.
Scenario: addin ships 1.14 before the bim-cli pin moves; every drafter `bim.validate` refuses; issue flow stops.
Fix: a binding release order AC: core 1.14 -> pdf-cli release vendoring 1.14 -> bim-cli pin -> producers write 1.14.
Producers must not write a version the pinned validator lacks (their CI already byte-checks the schema; add a check
against bim-cli's pinned pdf-cli schema list).

P5 HIGH -- the public validator does not exist.
Problem: F2. "Validator" in Publication and AC9/AC10 assume a public tool; pdf-cli is private Go with private deps
(bim-cli replace). Spec text, examples and schemas can be public, but `bim.validate` cannot.
Scenario: a third party reads "validate your file" and finds nothing to run.
Fix: decide-now: ship a small JS validator in bimpdf-site built on core's generated validators (vendored like the
schemas) plus a PDF reader for sections 1/3/5; pdf-cli runs the same `examples/` as goldens. Or say plainly
"no public validator in 1.14" and move it to Out.

P6 HIGH -- public repo on a self-hosted runner.
Problem: F3. Once public, any fork PR runs on the owner's build host.
Fix: AC8 is right; also set "require approval for all outside collaborators" for fork PR workflows and keep
`core-sync.yml` schedule/dispatch-only (its `PMT_READ_TOKEN` must never reach a `pull_request` job).

P7 MEDIUM -- 3D-off is already true; the rule must cover the other path.
Problem: F1. AC15 asks for work that is done. The real risk is pdf-cli `package` attaching every file in a sidecar
dir: a `model_*.glb` left there gets packed whatever the producer default.
Fix: AC15 -> "every producer's default output has no glTF; tested". Keep the size warning (9.2).

P8 MEDIUM -- page-level `/AF` duplicates on copy.
Problem: 3.1 allows page `/AF`. pdf-lib `copyPages` (PMT export) copies page dicts; filespecs referenced from both
page `/AF` and the catalog tree get duplicated, and splice/explode (`page-scoped` in pdf-cli) must now move AFs with pages.
Fix: in 1.14 every sidecar is a catalog AF only; page AF is Out until a page-scoped sidecar needs it.

P9 MEDIUM -- `/NM` "every annotation a producer writes" is ambiguous for Revit.
Problem: the 48/32 annotations in addin files are written by Revit's exporter, not by the addin.
Fix: "every annotation present in the output" -- the addin post-pass stamps `/NM` on Revit's link annotations.

P10 MEDIUM -- OCG default state can break "degrades to a plain PDF".
Problem: an OCG with default OFF hides drawing content in a plain viewer; thumbnails always render default state.
Fix: 1.4 adds: every OCG holding sheet content MUST default ON.

P11 MEDIUM -- VP/Measure agreement is under-specified.
Problem: "agree within 0.1%" with no defined comparison; `Measure /RL /X` number formats carry a conversion factor
chain; scales.json has paper-to-model ratios and viewport bboxes in raw points (centred MediaBox, per pdf-cli AGENTS).
Fix: define: for each scales.json viewport, a `/VP` entry with the same BBox (raw user space, +-1pt) and
`X[0].C` * 72 equal to the model-units-per-inch ratio within 0.1%.

P12 LOW -- detection order "first hit wins" with disagreeing declarations.
Fix: when XMP and `elements.json` versions disagree, readers use `elements.json` (the data) and validators error.

P13 LOW -- encryption ban.
Problem: Bluebeam "secure" re-saves are common in AEC; a reader refusing them is harsh.
Fix: keep MUST NOT for producers; readers MAY try to read an encrypted file.

P14 LOW -- `BIMP` may be taken; prefix strings are hard-coded in four places in the draft.
Fix: write `<PFX>` in the spec until registration; one constant in core.

## Tension with Decided items

- D5 lists "AFRelationship + /Desc on every attachment" as a rung; PRIOR-ART shows pdf.js and Acrobat JS cannot read
  AFRelationship. Not a reason to drop it; `/Desc` + filename carry the rung in practice. No change.

## Verdict

Not ready: two blockers (P1, P2) and a validator promise nobody can keep (P5). All fixable in the text.

Top 5: P4 release order, P5 public validator, P3 regenerate-not-preserve, P2 header 1.7, P1 ExtensionLevel.
