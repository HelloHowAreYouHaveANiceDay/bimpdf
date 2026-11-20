# ui.bimpdf.com

The generated design page of bimpdf's brand set (Broadsheet 1.0.0 + the bimpdf spot, from `design/`). Built by the
ui-kit profile's `ui-gen.mjs`; it is NOT a Storybook (the app has no component library). Spec: standards `docs/ui-kit.md`
section 6.

```
cd ui && npx wrangler deploy --dry-run        # [build] runs ui-gen + stamp.mjs; CI runs this on a PR
```

Worker `bimpdf-ui` (static assets, `workers_dev = true`). `.github/workflows/ui.yml` dry-runs the page on PRs and
deploys it on pushes to main that touch `design/**`, `ui/**` or `.standards/ui-kit/**`, then checks `version.json`.

Broadsheet is vendored in `design/vendor/broadsheet/1.0.0` (`node design/vendor.mjs <version>`, run by hand after a
Broadsheet release); `design/tokens.css` holds only this tool's `--ui-color-spot`.

## One-time: attach the custom domain (coordinator / Zone:Edit token, after the first deploy)

```
curl -X PUT "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/workers/domains" \
  -H "Authorization: Bearer $CF_TOKEN" -H "Content-Type: application/json" \
  --data '{"hostname":"ui.bimpdf.com","service":"bimpdf-ui","zone_id":"<bimpdf.com zone id>","environment":"production","override_existing_origin":true}'
```
