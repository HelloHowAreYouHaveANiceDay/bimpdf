#!/usr/bin/env python3
"""Regenerate apps/bimpdf-site/og-image.png (1200x630) in the amber bim-pdf brand.

Mirrors the palette and copy of index.html's hero section (--paper/--amber/--amber-deep,
the "BIM to PDF" wordmark, the "a standard PDF that keeps the bim data" tagline) so the
social card matches the live site.

Run:
    uv run --with Pillow python apps/bimpdf-site/gen-og-image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).parent
W, H = 1200, 630

PAPER = (251, 246, 236)  # --paper
PAPER_HI = (252, 243, 225)  # top of the site's hero gradient
INK = (42, 32, 21)  # --ink
MUTED = (124, 106, 80)  # --muted
AMBER = (200, 114, 30)  # --amber
AMBER_DEEP = (122, 62, 12)  # --amber-deep

FONTS = Path("C:/Windows/Fonts")


def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)


def draw_tracked_text(draw, xy, text, use_font, fill, tracking=0):
    """Draw text with extra letter-spacing (PIL has no native tracking support)."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=use_font, fill=fill)
        w = draw.textlength(ch, font=use_font)
        x += w + tracking
    return x


def tracked_text_width(draw, text, use_font, tracking=0):
    if not text:
        return 0
    total = sum(draw.textlength(ch, font=use_font) for ch in text)
    return total + tracking * (len(text) - 1)


def main():
    img = Image.new("RGB", (W, H), PAPER)
    draw = ImageDraw.Draw(img)

    # Subtle warm vertical gradient (top lighter -> paper), same feel as the site's hero.
    for y in range(H):
        t = y / H
        r = round(PAPER_HI[0] + (PAPER[0] - PAPER_HI[0]) * t)
        g = round(PAPER_HI[1] + (PAPER[1] - PAPER_HI[1]) * t)
        b = round(PAPER_HI[2] + (PAPER[2] - PAPER_HI[2]) * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # The site icon (logo.png = the b1 tile rendered at 256 from logo.svg), scaled to 320, plus a soft warm shadow
    # (approximates the site's `filter:drop-shadow(0 10px 18px rgba(122,62,12,.28))`).
    logo = Image.open(HERE / "logo.png").convert("RGBA")
    logo_size = 320
    logo_big = logo.resize((logo_size, logo_size), Image.LANCZOS)
    logo_x, logo_y = 100, (H - logo_size) // 2

    # the shadow gets a margin to blur into: the tile fills its whole square, so an unpadded blur is cut square
    pad = 48
    shadow_alpha = Image.new("L", (logo_size + 2 * pad, logo_size + 2 * pad), 0)
    shadow_alpha.paste(logo_big.split()[3].point(lambda a: int(a * 0.4)), (pad, pad))
    shadow = Image.new("RGBA", shadow_alpha.size, (*AMBER_DEEP, 0))
    shadow.putalpha(shadow_alpha)
    shadow = shadow.filter(ImageFilter.GaussianBlur(16))
    img.paste(shadow, (logo_x + 8 - pad, logo_y + 20 - pad), shadow)
    img.paste(logo_big, (logo_x, logo_y), logo_big)

    # Text lockup to the right of the logo.
    text_x = logo_x + logo_size + 80
    text_w = W - text_x - 84

    f_eyebrow = font("consolab.ttf", 24)
    f_h1 = font("segoeuib.ttf", 96)
    f_tagline = font("consolab.ttf", 28)
    f_url = font("consolab.ttf", 24)

    eyebrow = "OPEN FORMAT \u00b7 bim-pdf v1.0"
    tracking = 4
    eyebrow_w = tracked_text_width(draw, eyebrow, f_eyebrow, tracking)

    h1 = "BIM to PDF"
    h1_bbox = draw.textbbox((0, 0), h1, font=f_h1)
    h1_w = h1_bbox[2] - h1_bbox[0]
    h1_h = h1_bbox[3] - h1_bbox[1]

    tagline = "a standard PDF that keeps the bim data"
    tagline_bbox = draw.textbbox((0, 0), tagline, font=f_tagline)
    tagline_h = tagline_bbox[3] - tagline_bbox[1]

    url = "bimpdf.com"
    url_bbox = draw.textbbox((0, 0), url, font=f_url)
    url_h = url_bbox[3] - url_bbox[1]

    eyebrow_h = f_eyebrow.getbbox("X")[3]
    gap_eyebrow_h1 = 26
    gap_h1_tagline = 30
    gap_tagline_url = 18

    block_h = eyebrow_h + gap_eyebrow_h1 + h1_h + gap_h1_tagline + tagline_h + gap_tagline_url + url_h
    y = (H - block_h) // 2

    draw_tracked_text(draw, (text_x, y), eyebrow, f_eyebrow, AMBER_DEEP, tracking)
    y += eyebrow_h + gap_eyebrow_h1

    draw.text((text_x, y - h1_bbox[1]), h1, font=f_h1, fill=INK)
    y += h1_h + gap_h1_tagline

    draw.text((text_x, y - tagline_bbox[1]), tagline, font=f_tagline, fill=MUTED)
    y += tagline_h + gap_tagline_url

    draw.text((text_x, y - url_bbox[1]), url, font=f_url, fill=AMBER_DEEP)

    # small 8-bit accent square, echoing the site's h2::before pixel bullet, next to the URL.
    sq = 10
    sq_x = text_x - sq - 12
    sq_y = y - url_bbox[1] + (url_h - sq) // 2
    draw.rectangle([sq_x + 3, sq_y + 3, sq_x + 3 + sq, sq_y + 3 + sq], fill=AMBER_DEEP)
    draw.rectangle([sq_x, sq_y, sq_x + sq, sq_y + sq], fill=AMBER)

    out_path = HERE / "og-image.png"
    img.convert("RGB").save(out_path, "PNG", optimize=True)
    print(f"wrote {out_path} ({img.width}x{img.height})")


if __name__ == "__main__":
    main()
