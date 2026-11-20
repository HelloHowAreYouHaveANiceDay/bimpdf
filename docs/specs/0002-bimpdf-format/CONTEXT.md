# CONTEXT: .bim.pdf public format spec (design pass)

Thread: Slack #everbeach, thread 1795140892.774669 (owner libo, 2026-11-19). This file wins over card bodies.

## Owner asks (verbatim)

- "does bimpdf format fulfill the ethos of pdf?" -> gaps: file size (3D default on), closed/unlicensed spec, PDF/A unverified.
- "lets get the spec public ready"
- "recs for license. public repo. lets publish"
- "bimpdf.com and the repo should match. we split the repos remember?"
- "let's look at prior art for filetype standards like this."
- "do a broad web search on the built in metadata. even better if it's a natural way to have agents and readers tell how to read bimpdf"
- "what would be the most pdf natural way to extend the format?"
- "do a thorough scan of bimcli and pdfmarkuptool and wherever else we use bimpdf to see the splash radius of this. then produce a spec based on our sdlc"

## Decisions (owner)

1. License: CC-BY-4.0 for spec text; Apache-2.0 for schemas, reference types, validator.
2. Public home: the EXISTING repo HelloHowAreYouHaveANiceDay/bimpdf-site (private today, local the bimpdf-site checkout). bimpdf.com and the repo match: spec, schemas, examples, validator live there and deploy to bimpdf.com (/spec, /schema). No new repo. Monorepo (pdfmarkuptool) stays private.
3. Publish approved; overrides admin's 2026-10-30 stealth stance for the spec. Before going public: full-history audit of bimpdf-site (secrets, private paths, AGENTS.md/CLAUDE.md, .standards, ci/, docs/, scripts/); closed-source add-in binaries in downloads/ may stay as free downloads, stated plainly. Fresh-history push if history can't be cleaned safely.
4. Direction (owner-led, to be designed, not yet decided in detail): PDF-native first. Use PDF constructs viewers already honour (Measure/Viewport for scales, PageLabels, Outlines, OCGs, Tagged PDF/marked content + per-object AF/Metadata, annotations /NM, ISO/TS 32007 glTF), sidecars only where PDF has no home, each linked to the object it describes; new keys under a registered developer prefix (ISO 32000 Annex E) + catalog /Extensions.
5. Self-declaration / discovery, layered cheapest first: visible notice (shipped) -> XMP label in a bimpdf namespace whose URI resolves to the spec (format version, profile, attachment list, spec URL, how-to-read hint, PDF/A extension-schema description) -> /Extensions entry -> AFRelationship + /Desc on every attachment -> README-agent.md -> bimpdf.com/llms.txt. Today's XMP (add-in PdfBimPacker.cs: pdfbim:version=2 + generator under http://pdfbim.com/ns/1.0/; pdf-cli injectPdfbimXMP) must stay readable.

6. (2026-11-20) Tagged PDF + per-object AF and ISO/TS 32007 3D stay out of 1.14, but get spike S13: "add it. Include 3d too so we can think about the format cohesively". S13 delivers one cohesive 1.15 format model and gates nothing in 1.14.

## Known facts (tot, 2026-11-19)

- Format code source of truth: monorepo pdfmarkuptool `packages/core` (types, schema, DESIGN.md). No standalone spec; bimpdf.com/spec 404. Schemas public at bimpdf.com/schema/bim-pdf-1.X.schema.json (11 versions) via bimpdf-site gen-version.mjs. Format ~1.10.
- Producers/consumers known: bim-pdf-addin (private, C#, Revit), pdf-cli (Go, `bim pdf` verbs, bim.pack/validate), bim-cli + drivers (revit-cli, blender-cli...), pdfmarkuptool app + packages (bake, canvas, renderer, markup, diff), apps/pdfv, sheetbench, bimpdf-site. Find the rest.
- 3D default on -> 809 MB (DIM-2085). PDF/A-3 never validated.
- Wiki: wiki: project--bim-pdf.md, roadmap--bim-pdf, brand--bimpdf, spec--bimpdf-layers, spec--bimpdf-3d-gltf, spec--bim-pdf-exporter, concept--pdf-bim-package.
- SDLC: spec of record = `docs/specs/NNNN-slug.md` in the repo owning the shared artifact (here bimpdf-site), front matter id/title/status/approved/appetite, Decided / Acceptance criteria (AC1.. tagged [must]/[nice]) / Out are binding; How-it-works guidance. Contracts between own components are VERSIONED with pin + refuse on mismatch. Process: a local path and SKILL.md.

## Files in this folder

- AUDIT.md (card A): splash radius.
- PRIOR-ART.md (card B): prior art + metadata/discovery + PDF-native mapping research.
- SPEC-DRAFT.md + REVIEW-pressure.md + REVIEW-simplify.md + PLAN.md (card C).

## Card C result (2026-11-20)

- SPEC-DRAFT.md v2 (folded), REVIEW-pressure.md, REVIEW-simplify.md, FOLD-v1.md, PLAN.md written. Spec id 0002 (0001 exists in bimpdf-site).
- Facts found: addin 3D already off by default (AppSettings.cs:15); all repos private incl. pdf-cli; bimpdf-site CI self-hosted by default; history has no secret hits but personal emails/local paths.
