"""
Generate icon-192.png and icon-512.png from the full Wealthy Within logo card SVG.
"""
import cairosvg
import io
from PIL import Image

SVG_CODE = '''<svg width="680" height="520" viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cardBg" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#1e1040"/>
      <stop offset="100%" stop-color="#0a0714"/>
    </radialGradient>
    <radialGradient id="purpleGlow" cx="50%" cy="38%" r="35%">
      <stop offset="0%" stop-color="#5c1f99" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#0a0714" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldV" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffe97a"/>
      <stop offset="60%" stop-color="#c9973a"/>
      <stop offset="100%" stop-color="#8a5e0a"/>
    </linearGradient>
    <linearGradient id="goldH" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8a5e0a"/>
      <stop offset="40%" stop-color="#ffe97a"/>
      <stop offset="100%" stop-color="#8a5e0a"/>
    </linearGradient>
  </defs>

  <!-- Card Background -->
  <rect x="60" y="20" width="560" height="480" rx="24" fill="url(#cardBg)"/>
  <rect x="60" y="20" width="560" height="480" rx="24" fill="url(#purpleGlow)"/>
  <rect x="60" y="20" width="560" height="480" rx="24" fill="none" stroke="#c9973a" stroke-width="0.7" opacity="0.45"/>
  <rect x="68" y="28" width="544" height="464" rx="20" fill="none" stroke="#c9973a" stroke-width="0.25" opacity="0.18"/>

  <!-- Corner Accents -->
  <g fill="none" stroke="#c9973a" stroke-width="1.4" stroke-linecap="round" opacity="0.55">
    <path d="M86 50 L86 32 L104 32"/>
    <path d="M594 50 L594 32 L576 32"/>
    <path d="M86 470 L86 488 L104 488"/>
    <path d="M594 470 L594 488 L576 488"/>
  </g>

  <!-- Icon Aura Circles -->
  <circle cx="340" cy="196" r="64" fill="none" stroke="#c9973a" stroke-width="0.5" opacity="0.28"/>
  <circle cx="340" cy="196" r="72" fill="none" stroke="#c9973a" stroke-width="0.5" opacity="0.28"/>
  <circle cx="340" cy="196" r="80" fill="none" stroke="#c9973a" stroke-width="0.25" opacity="0.14"/>

  <!-- Crown + Infinity Icon -->
  <g transform="translate(340,196)">
    <line x1="-26" y1="18" x2="-26" y2="-4" stroke="url(#goldV)" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="-26" y1="-4" x2="-13" y2="18" stroke="url(#goldV)" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="-13" y1="18" x2="0" y2="-4" stroke="url(#goldV)" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="0" y1="-4" x2="13" y2="18" stroke="url(#goldV)" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="13" y1="18" x2="26" y2="-4" stroke="url(#goldV)" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="26" y1="-4" x2="26" y2="18" stroke="url(#goldV)" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="-30" y1="20" x2="30" y2="20" stroke="url(#goldH)" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="-30" y="22" width="60" height="6" rx="3" fill="url(#goldV)" opacity="0.9"/>
    <circle cx="-26" cy="-5" r="3" fill="#ffe97a" opacity="0.95"/>
    <circle cx="0" cy="-5" r="3.8" fill="#ffe97a" opacity="1"/>
    <circle cx="26" cy="-5" r="3" fill="#ffe97a" opacity="0.95"/>
    <ellipse cx="-18" cy="44" rx="20" ry="12" fill="none" stroke="url(#goldH)" stroke-width="1.8" stroke-linecap="round"/>
    <ellipse cx="18" cy="44" rx="20" ry="12" fill="none" stroke="url(#goldH)" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="0" cy="44" r="2.5" fill="#ffe97a" opacity="0.95"/>
    <line x1="-3" y1="30" x2="-3" y2="34" stroke="#c9973a" stroke-width="1" opacity="0.5"/>
    <line x1="3" y1="30" x2="3" y2="34" stroke="#c9973a" stroke-width="1" opacity="0.5"/>
  </g>

  <!-- Text: WEALTHY -->
  <text x="340" y="308" text-anchor="middle" font-family="Helvetica Neue, Arial, sans-serif" font-size="13" font-weight="300" letter-spacing="9" fill="#c9973a" opacity="0.7">WEALTHY</text>
  <!-- Text: WITHIN -->
  <text x="340" y="348" text-anchor="middle" font-family="Helvetica Neue, Arial, sans-serif" font-size="36" font-weight="200" letter-spacing="18" fill="#f0e4c0">WITHIN</text>
  <!-- Divider line -->
  <line x1="220" y1="368" x2="460" y2="368" stroke="#c9973a" stroke-width="0.5" opacity="0.3"/>
  <circle cx="340" cy="368" r="2.5" fill="#c9973a" opacity="0.6"/>
  <!-- Tagline -->
  <text x="340" y="394" text-anchor="middle" font-family="Helvetica Neue, Arial, sans-serif" font-size="9" font-weight="300" letter-spacing="5" fill="#7a6030" opacity="0.8">mindset . wealth . freedom</text>
</svg>'''

for size, filename in [(192, '../icon-192.png'), (512, '../icon-512.png')]:
    png_data = cairosvg.svg2png(
        bytestring=SVG_CODE.encode(),
        output_width=size,
        output_height=size
    )
    img = Image.open(io.BytesIO(png_data))
    img.save(filename, 'PNG')
    print(f"Generated {filename} ({size}x{size})")

print("Done!")
