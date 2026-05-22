"""Generate Wealthy Within PWA icons (192x192 and 512x512).
Design: dark purple bg #07050f, golden gradient W monogram, subtle aurora glow.
Run: python3 scripts/make_icons.py
"""
from PIL import Image, ImageDraw, ImageFilter
import os

BG = (7, 5, 15)
GOLD_TOP = (245, 208, 138)     # f5d08a
GOLD_MID = (201, 145, 61)      # c9913d
GOLD_DEEP = (122, 85, 32)      # 7a5520
VIOLET = (124, 92, 191)        # 7c5cbf
ROSE = (196, 104, 122)         # c4687a


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def add_glow(img, center_xy, radius_frac, color, intensity, blur_frac=0.10):
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


def make_icon(size: int, out_path: str):
    img = Image.new('RGB', (size, size), BG)

    # Aurora-style glows (matching app's home screen aesthetic)
    img = add_glow(img, (size * 0.50, size * 0.50), 0.50, GOLD_MID, 110, 0.10)
    img = add_glow(img, (size * 0.20, size * 0.18), 0.45, VIOLET, 70, 0.12)
    img = add_glow(img, (size * 0.85, size * 0.88), 0.45, ROSE, 55, 0.12)

    # Outer gold ring + thinner inner ring
    ring = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    m1 = size * 0.07
    rd.ellipse((m1, m1, size - m1, size - m1),
               outline=(201, 145, 61, 90), width=max(1, int(size * 0.005)))
    m2 = size * 0.085
    rd.ellipse((m2, m2, size - m2, size - m2),
               outline=(245, 208, 138, 40), width=max(1, int(size * 0.003)))
    img.paste(ring, (0, 0), ring)

    # W monogram mask
    mask = Image.new('L', (size, size), 0)
    md = ImageDraw.Draw(mask)
    top_y = size * 0.34
    bot_y = size * 0.70
    mid_y = size * 0.50
    p1 = (size * 0.24, top_y)
    p2 = (size * 0.345, bot_y)
    p3 = (size * 0.50, mid_y)
    p4 = (size * 0.655, bot_y)
    p5 = (size * 0.76, top_y)
    pts = [p1, p2, p3, p4, p5]
    stroke_w = int(size * 0.085)
    md.line(pts, fill=255, width=stroke_w, joint='curve')
    cap_r = stroke_w / 2
    for p in [p1, p5, p2, p4]:
        md.ellipse((p[0] - cap_r, p[1] - cap_r, p[0] + cap_r, p[1] + cap_r), fill=255)

    # Soft gold glow behind W
    w_halo = mask.filter(ImageFilter.GaussianBlur(size * 0.025))
    w_halo_dim = w_halo.point(lambda v: int(v * 0.55))
    halo_color = Image.new('RGB', (size, size), GOLD_TOP)
    img = Image.composite(halo_color, img, w_halo_dim)

    # Vertical gradient for W
    grad = Image.new('RGB', (size, size), GOLD_MID)
    gd2 = ImageDraw.Draw(grad)
    g_top_y = top_y - stroke_w / 2
    g_bot_y = bot_y + stroke_w / 2
    span = max(1, g_bot_y - g_top_y)
    for y in range(size):
        t = max(0.0, min(1.0, (y - g_top_y) / span))
        if t < 0.5:
            c = lerp(GOLD_TOP, GOLD_MID, t / 0.5)
        else:
            c = lerp(GOLD_MID, GOLD_DEEP, (t - 0.5) / 0.5)
        gd2.line([(0, y), (size, y)], fill=c)
    img = Image.composite(grad, img, mask)

    # Sparkle highlights at outer W tips
    sparkle = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    sd = ImageDraw.Draw(sparkle)
    sr = size * 0.012
    for tip in [p1, p5]:
        sd.ellipse((tip[0] - sr, tip[1] - sr, tip[0] + sr, tip[1] + sr),
                   fill=(255, 248, 220, 220))
    sparkle = sparkle.filter(ImageFilter.GaussianBlur(size * 0.008))
    img.paste(sparkle, (0, 0), sparkle)

    img.save(out_path, 'PNG', optimize=True)
    print(f'wrote {out_path} ({size}x{size})')


if __name__ == '__main__':
    out_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    make_icon(192, os.path.join(out_dir, 'icon-192.png'))
    make_icon(512, os.path.join(out_dir, 'icon-512.png'))
