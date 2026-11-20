Standards gate: `node .standards/check.mjs`; rules in `.standards/RULES.md`.

# bimpdf

Static spec site for bimpdf.com, deployed as the Cloudflare Worker `bim-pdf-worker` (assets only). Split from pdf-bim (`apps/bimpdf-site`, history kept via git filter-repo).

- Build: `npm ci && npm run build` (`gen-version.mjs` writes `version.json`, copies `vendor/core` schemas to `schema/` and `design/vendor/broadsheet/<KIT_VERSION>` css and `design/tokens.css` (as `spot.css`) to `kit/`). Test: `npm test`.
- `vendor/` holds byte copies, locked by `vendor/SHA256SUMS` (`node scripts/vendor-sums.mjs --check`; CI runs it). Never hand-edit it.
  - `vendor/validator/validate.bundle.mjs` = core's built validator (ajv inlined), made by `scripts/build-validator.mjs` from a built `packages/core`; `vendor/validator/UPSTREAM` names the commit. core-sync does NOT refresh it: after a core pin bump, rebuild it, relock, and run `npm test` (a test compares its schema with `vendor/core`).
  - `validator/` = the public validator (`node validator/bimpdf-validate.mjs <file>`, a small PDF reader plus core's checks). `examples/` = synthetic 1.14 files from `scripts/gen-examples.mjs` (a test fails when they differ from the generator); `scripts/verapdf-check.mjs` runs veraPDF PDF/A-3b on the archival example (`scripts/install-verapdf.sh` installs the pinned release; `VERAPDF=<dir> npm test` runs it locally).
  - `vendor/core` = `packages/core` schema + review contracts + vectors from the pdfmarkuptool repo (formerly pdf-bim); `vendor/core/UPSTREAM` names the commit. `.github/workflows/core-sync.yml` (daily + dispatch, secret `PMT_READ_TOKEN`) refreshes it via `scripts/core-sync.mjs` and opens a pin PR.
  - `design/vendor/broadsheet/<v>` = Broadsheet from `ui.bimisland.com/kit/<v>/` with its own `SHA256SUMS` (`node design/vendor.mjs <v>`, run by hand after a Broadsheet release; the ui-kit lint checks the sums). A bump changes `KIT_VERSION` in `gen-version.mjs`, `design/pack.json` and the two tests. `design/tokens.css` holds only bimpdf's own `--ui-color-spot`.
- Published schema bytes are a contract (pdf-cli checks them byte for byte): the deploy job polls every `https://bimpdf.com/schema/*` hash and `/version.json`.
- Deploy: `ci.yml` deploy job, `workflow_dispatch` with `deploy=true` on main (push-deploy on main since the pdf-bim strip PR, PLAN S6). Rollback: `npx wrangler rollback`.
- CI runs on GitHub-hosted runners (`ubuntu-latest`) only; `core-sync.yml` is dispatch-only and never runs on `pull_request`.
- `ui/` = worker `bimpdf-ui` (ui.bimpdf.com): the generated brand-set page (Broadsheet 1.0.0 + the bimpdf spot, from `design/`) built by `.standards/ui-kit/ui-gen.mjs`; `.github/workflows/ui.yml` (ubuntu-latest) dry-runs it on PRs and deploys on main. The custom domain is attached once by the coordinator (see `ui/README.md`).
