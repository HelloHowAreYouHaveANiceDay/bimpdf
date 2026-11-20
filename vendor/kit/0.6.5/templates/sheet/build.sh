#!/usr/bin/env bash
# Build the Broadsheet drawing sheet for one property in Revit, then (optionally) issue the test sheet and render it.
#   ./build.sh <revit pid>            title block family (.rfa) + project template (.rte) in out/
#   ./build.sh <revit pid> test       ... plus a test project, sheet A-001 from test/surf-ave.json, PDF + PNG in out/
#   SHEET_PROPERTY=bimcli (default)   which resolved sheet.<property>.json to build
# Pin a Revit you launched yourself (bim revit launch --new --role reader); never one a live loop is using.
# out/ is a build product (gitignored): nothing in it is committed or published.
set -euo pipefail
PID="${1:?usage: build.sh <revit pid> [test]}"
PROP="${SHEET_PROPERTY:-bimcli}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
D="$(cygpath -m "$HERE" 2>/dev/null || echo "$HERE")"   # bim is a native Windows exe: C:/... paths, not /c/...
L="$D/sheet.$PROP.json"
[ -f "$L" ] || { echo "no $L: run \`pnpm --filter @bim-pdf/ui-kit gen\`" >&2; exit 2; }
mkdir -p "$HERE/out"
A="{\"layout\":\"$L\",\"out\":\"$D/out\"}"
res() { python -c "
import json,sys
ok=True
for line in sys.stdin:
    try: j=json.loads(line)
    except Exception: continue
    if 'event' in j: continue
    j.pop('_usage',None); print(json.dumps(j)[:1500])
    r=j.get('result') if isinstance(j.get('result'),dict) else j
    ok = ok and j.get('ok',False) and r.get('ok',True)
sys.exit(0 if ok else 1)"; }

bim revit exec --pid "$PID" --allow-no-doc --no-transaction --file "$D/revit/titleblock.cs" --args-json "$A" 2>&1 | res
bim revit exec --pid "$PID" --allow-no-doc --no-transaction --file "$D/revit/project_template.cs" --args-json "$A" 2>&1 | res
rm -f "$HERE"/out/*.0[0-9][0-9][0-9].rfa "$HERE"/out/*.0[0-9][0-9][0-9].rte   # Revit's numbered backups

if [ "${2:-}" = "test" ]; then
  RTE="$D/out/$(python -c "import json,sys; print(json.load(open(sys.argv[1]))['template_file'])" "$L")"
  RVT="$D/out/test-$PROP-$(date +%H%M%S).rvt"
  bim revit exec --pid "$PID" --allow-no-doc --no-transaction --file "$D/revit/new_project.cs" \
      --args-json "{\"rte\":\"$RTE\",\"rvt\":\"$RVT\"}" 2>&1 | res
  # Keep sample values ASCII: non-ASCII passed through bash into --args-json arrives mangled (README, pitfalls).
  ARGS="$(python -c "import json,sys; print(json.dumps({'layout': sys.argv[1], **json.load(open(sys.argv[2]))}))" "$L" "$D/test/surf-ave.json")"
  bim revit exec --pid "$PID" --file "$D/revit/fill_sheet.cs" --args-json "$ARGS" 2>&1 | res
  bim revit export-sheets --pid "$PID" --sheets A-001 --output "$D/out/test-$PROP-A-001.pdf" 2>&1 | res
  uv run --with pypdfium2 --with pillow --with pypdf python "$D/test/render.py" "$D/out/test-$PROP-A-001.pdf" "$L"
fi
