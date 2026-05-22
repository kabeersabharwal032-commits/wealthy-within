"""Generate Wealthy Within PWA icons (192x192 and 512x512).

Design:
- Background: deep dark purple #07050f
- Faint (8-12% opacity) meditation lotus silhouette + coin/infinity symbol behind W
- Subtle golden aurora glow around the W
- Center: bold golden W monogram in double-stroke style
  (an outer thicker W with an inner narrower W slightly offset)
- Premium, spiritual, minimal feel

Run: python3 scripts/make_icons.py
"""
from PIL import Image, ImageDraw, ImageFilter
import math
import os

# ---------- Palette ----------
BG = (7, 5, 15)                # #07050f
GOLD_TOP = (245, 208, 138)     # #f5d08a
GOLD_MID = (201, 145, 61)      # #c9913d
GOLD_DEEP = (122, 85, 32)      # #7a5520
GOLD_INNER = (255, 232, 175)   # highlight for inner W
VIOLET = (124, 92, 191)        # aurora violet
ROSE = (196, 104, 122)         # aurora rose


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def add_glow(img, center_xy, radius_frac, color, intensity, blur_frac=0.10):
    """Composite a soft radial color glow onto img."""
    size = img.size[0]
    cx, cy = center_xy
    r = size * radius_frac
    glow = Image.new('L', (size, size), 0)
    gd = ImageDraw.Draw(glow)
    steps = 60
    for i in range(steps, 0, -1):
        rr = r * (i / steps)
        a = int(intensity * (i / steps) ** 2)
        gd.ellipse((cx - rr, cy - rr, cx + rr, cy + rr), fill=a)
    glow = glow.filter(ImageFilter.GaussianBlur(size * blur_frac))
    color_layer = Image.new('RGB', (size, size), color)
    return Image.composite(color_layer, img, glow)


def w_polyline(size, scale=1.0, dx=0.0, dy=0.0):
    """Return the 5 control points of the W monogram, optionally scaled
    around the W's visual center and offset by (dx, dy) in pixels.
    """
    cx, cy = size * 0.50, size * 0.52
    base = [
        (size * 0.24, size * 0.34),   # top-left
        (size * 0.345, size * 0.70),  # bottom-left valley
        (size * 0.50, size * 0.50),   # center peak
        (size * 0.655, size * 0.70),  # bottom-right valley
        (size * 0.76, size * 0.34),   # top-right
    ]
    return [
        (cx + (x - cx) * scale + dx, cy + (y - cy) * scale + dy)
        for (x, y) in base
    ]


def draw_w_mask(size, points, stroke_w):
    """Render a W stroke into a single-channel mask image."""
    mask = Image.new('L', (size, size), 0)
    md = ImageDraw.Draw(mask)
    md.line(points, fill=255, width=stroke_w, joint='curve')
    r = stroke_w / 2
    for p in points:
        md.ellipse((p[0] - r, p[1] - r, p[0] + r, p[1] + r), fill=255)
    return mask


def gold_gradient(size, top_y, bot_y):
    """Vertical gold gradient image used to fill the W."""
    grad = Image.new('RGB', (size, size), GOLD_MID)
    gd = ImageDraw.Draw(grad)
    span = max(1.0, bot_y - top_y)
    for y in range(size):
        t = max(0.0, min(1.0, (y - top_y) / span))
        if t < 0.5:
            c = lerp(GOLD_TOP, GOLD_MID, t / 0.5)
        else:
            c = lerp(GOLD_MID, GOLD_DEEP, (t - 0.5) / 0.5)
        gd.line([(0, y), (size, y)], fill=c)
    return grad


# ---------- Background motifs (very faint) ----------

def draw_lotus(size, opacity):
    """Centered meditation lotus silhouette as a faint golden overlay.
    `opacity` 0..255 controls overall strength (kept very low: ~20-30 = ~8-12%).
    """
    layer = Image.new('L', (size, size), 0)
    d = ImageDraw.Draw(layer)
    cx = size * 0.50
    cy = size * 0.78  # sit in lower half, behind/under the W

    # Petals: ellipses rotated around the center.
    # We approximate rotation by drawing on a small canvas, rotating, pasting.
    petal_long = size * 0.30
    petal_short = size * 0.085

    def stamp_petal(angle_deg):
        pad = int(petal_long * 1.2)
        canvas = Image.new('L', (pad * 2, pad * 2), 0)
        cd = ImageDraw.Draw(canvas)
        # Petal pointing UP from canvas center.
        ccx, ccy = pad, pad
        cd.ellipse(
            (ccx - petal_short, ccy - petal_long,
             ccx + petal_short, ccy),
            fill=255,
        )
        rotated = canvas.rotate(angle_deg, resample=Image.BICUBIC)
        # Paste so its center sits at lotus center (cx, cy)
        layer.paste(rotated, (int(cx - pad), int(cy - pad)), rotated)

    # 7 petals fanning upward (-90 deg = up)
    for ang in (-90, -60, -30, 0, 30, 60, 90):
        # we want them fanning UPWARD from base, so rotate so 0=up
        stamp_petal(ang)

    # Soft base line under the lotus (water/horizon hint)
    base_w = int(size * 0.42)
    base_h = max(2, int(size * 0.012))
    bx0 = int(cx - base_w / 2)
    by0 = int(cy + size * 0.005)
    d.rounded_rectangle(
        (bx0, by0, bx0 + base_w, by0 + base_h),
        radius=base_h // 2,
        fill=255,
    )

    # Light blur for silhouette feel, then scale opacity down.
    layer = layer.filter(ImageFilter.GaussianBlur(size * 0.006))
    layer = layer.point(lambda v: int(v * (opacity / 255.0)))
    return layer


def draw_coin_infinity(size, opacity):
    """Faint coin (ring) with an infinity symbol inside, placed near the
    upper area, behind the W.
    """
    layer = Image.new('L', (size, size), 0)
    d = ImageDraw.Draw(layer)

    cx = size * 0.50
    cy = size * 0.30  # upper third, behind top of W
    coin_r = size * 0.16
    ring_w = max(2, int(size * 0.012))

    # Coin ring
    d.ellipse(
        (cx - coin_r, cy - coin_r, cx + coin_r, cy + coin_r),
        outline=255, width=ring_w,
    )

    # Infinity symbol = two tangent circles drawn as outlines.
    inf_r = coin_r * 0.42
    inf_w = max(2, int(size * 0.010))
    offset = inf_r * 0.95
    d.ellipse(
        (cx - offset - inf_r, cy - inf_r, cx - offset + inf_r, cy + inf_r),
        outline=255, width=inf_w,
    )
    d.ellipse(
        (cx + offset - inf_r, cy - inf_r, cx + offset + inf_r, cy + inf_r),
        outline=255, width=inf_w,
    )

    layer = layer.filter(ImageFilter.GaussianBlur(size * 0.004))
    layer = layer.point(lambda v: int(v * (opacity / 255.0)))
    return layer


def composite_motif(img, motif_mask, color):
    """Paint a faint gold motif onto img using a luminance mask."""
    color_layer = Image.new('RGB', img.size, color)
    return Image.composite(color_layer, img, motif_mask)


# ---------- Main icon assembly ----------

def make_icon(size: int, out_path: str):
    img = Image.new('RGB', (size, size), BG)

    # Aurora background glows (very soft, premium feel)
    img = add_glow(img, (size * 0.50, size * 0.50), 0.50, GOLD_MID, 95, 0.11)
    img = add_glow(img, (size * 0.20, size * 0.18), 0.45, VIOLET, 70, 0.12)
    img = add_glow(img, (size * 0.85, size * 0.88), 0.45, ROSE, 55, 0.12)

    # Faint lotus + coin/infinity behind the W (8-12% opacity ~= alpha 20-30)
    lotus = draw_lotus(size, opacity=28)        # ~11%
    coin = draw_coin_infinity(size, opacity=22)  # ~9%
    img = composite_motif(img, lotus, GOLD_TOP)
    img = composite_motif(img, coin, GOLD_TOP)

    # Outer gold ring + thinner inner ring (subtle frame)
    ring = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    m1 = size * 0.07
    rd.ellipse(
        (m1, m1, size - m1, size - m1),
        outline=(201, 145, 61, 90),
        width=max(1, int(size * 0.005)),
    )
    m2 = size * 0.085
    rd.ellipse(
        (m2, m2, size - m2, size - m2),
        outline=(245, 208, 138, 40),
        width=max(1, int(size * 0.003)),
    )
    img.paste(ring, (0, 0), ring)

    # ---------- W monogram (double-stroke) ----------
    outer_pts = w_polyline(size, scale=1.0, dx=0.0, dy=0.0)
    outer_stroke = int(size * 0.090)
    outer_mask = draw_w_mask(size, outer_pts, outer_stroke)

    # Subtle golden aurora glow tightly around the W
    w_halo = outer_mask.filter(ImageFilter.GaussianBlur(size * 0.030))
    w_halo = w_halo.point(lambda v: int(v * 0.60))
    img = composite_motif(img, w_halo, GOLD_TOP)

    # Outer W fill: vertical gold gradient
    top_y = min(p[1] for p in outer_pts) - outer_stroke / 2
    bot_y = max(p[1] for p in outer_pts) + outer_stroke / 2
    grad = gold_gradient(size, top_y, bot_y)
    img = Image.composite(grad, img, outer_mask)

    # Inner W: smaller and slightly offset, brighter highlight color.
    # This produces the "W inside W, thoda offset" double-stroke feel.
    inner_pts = w_polyline(
        size,
        scale=0.86,
        dx=size * 0.012,
        dy=size * 0.012,
    )
    inner_stroke = max(2, int(size * 0.022))
    inner_mask = draw_w_mask(size, inner_pts, inner_stroke)

    # Constrain the inner W so it only paints where the outer W is — keeps
    # the double-stroke look strictly inside the monogram.
    inner_mask = ImageChops_multiply(inner_mask, outer_mask)

    inner_color = Image.new('RGB', (size, size), GOLD_INNER)
    img = Image.composite(inner_color, img, inner_mask)

    # Tiny sparkle highlights at outer W tips
    sparkle = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    sd = ImageDraw.Draw(sparkle)
    sr = size * 0.012
    for tip in (outer_pts[0], outer_pts[-1]):
        sd.ellipse(
            (tip[0] - sr, tip[1] - sr, tip[0] + sr, tip[1] + sr),
            fill=(255, 248, 220, 220),
        )
    sparkle = sparkle.filter(ImageFilter.GaussianBlur(size * 0.008))
    img.paste(sparkle, (0, 0), sparkle)

    img.save(out_path, 'PNG', optimize=True)
    print(f'wrote {out_path} ({size}x{size})')


def ImageChops_multiply(a, b):
    """Multiply two L-mode masks (a*b/255). Local helper to avoid import noise."""
    from PIL import ImageChops
    return ImageChops.multiply(a, b)


if __name__ == '__main__':
    out_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    make_icon(192, os.path.join(out_dir, 'icon-192.png'))
    make_icon(512, os.path.join(out_dir, 'icon-512.png'))
