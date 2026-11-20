"""Render an exported sheet to PNG (+ a crop of the title strip) and assert the media box the layout names.

    python test/render.py <exported.pdf> <sheet.<property>.json>
"""
import json
import sys

import pypdf
import pypdfium2 as pdfium

pdf, layout = sys.argv[1], json.load(open(sys.argv[2], encoding="utf-8"))
want_w, want_h = layout["sheet"]["media_box_pt"]
box = pypdf.PdfReader(pdf).pages[0].mediabox
w, h = float(box.width), float(box.height)
assert abs(w - want_w) < 1 and abs(h - want_h) < 1, f"media box {w} x {h}, expected {want_w} x {want_h}"
im = pdfium.PdfDocument(pdf)[0].render(scale=1.2).to_pil()
png = pdf[:-4] + ".png"
im.save(png)
sheet_w = layout["sheet"]["size_in"][0]
left = int(im.width * (layout["strip"]["x0"] - 0.25) / sheet_w)
im.crop((left, 0, im.width, im.height)).save(pdf[:-4] + "-strip.png")
print(json.dumps({"ok": True, "media_box_pt": [w, h], "png": png, "strip_png": pdf[:-4] + "-strip.png"}))
