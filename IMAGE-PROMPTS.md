# Image generation record

All edits used the **built-in ImageGen tool**, with `transparent_background: true`. Original source photos come from Safa’s official website. Product geometry and branding were requested to remain unchanged; enhanced artwork should receive brand review before public launch.

## Hero bottle

Original: `../public/images/hs2-rhs.jpg`, downloaded from https://safawaterqa.com/wp-content/uploads/2021/12/hs2-rhs.jpg.

Final assets: `public/images/bottle-360.webp`, `public/images/bottle-640.webp`, `public/images/bottle-900.webp`.

Exact prompt:

> Use case: background-extraction. Asset type: high-resolution isolated product photo for the premium Safa Water Qatar website. Edit target: the attached real Safa product catalogue photograph. Extract ONLY the single upright full 5-gallon Safa water bottle in the foreground at lower right, immediately left of the rightmost bottle. Show this bottle alone upright centered, fully visible, on actual transparent alpha background, with 8% padding. Preserve its exact cylindrical transparent pale blue plastic shape, curved shoulders, ribbing, white tamper-sealed cap, water contents, and ORIGINAL white label with the Safa logo in blue with multicolored orange turquoise swoosh. Preserve the existing label text and logo; do not replace it or make a new brand. Improve resolution and clarity and clean edge quality with premium soft studio lighting; avoid fabricated product claims or extra words. It should read as a realistic full sealed 5-gallon Safa water bottle, not an upside down bottle and not a small drink bottle. No other products, no scene, no pedestal, no floor, no watermark. Return tall composition.

## Equipment cutouts

| Original official image | Final local asset |
| --- | --- |
| `../public/images/product01.png` | `public/images/pot.webp` |
| `../public/images/product02.png` | `public/images/pump.webp` |
| `../public/images/product03.png` | `public/images/cradle.webp` |
| `../public/images/product04.png` | `public/images/tabletop.webp` |
| `../public/images/product05.png` | `public/images/standing.webp` |
| `../public/images/product06.png` | `public/images/cup-holder.webp` |

Each edit used its own original photo as the single edit target. Exact prompt for all six:

> Use case: background-extraction. Edit target: the attached REAL Safa Water product photo. Remove ONLY the flat cyan background and isolate the EXACT entire product arrangement on true transparent alpha. Preserve every visible object, bottle, accessory, tap, stand, logo, label, colour, orientation, proportions and material. Improve pixel resolution and clean edge quality as premium accurate catalogue photography, without adding or redesigning components. Fully visible product, centred in a square 1024x1024 composition with 12% clear padding. Do not crop any part. Keep the actual equipment appearance and original Safa branding unchanged. No backdrop, no coloured aura, no floor, no shadow backdrop, no extra objects, no new text, no watermark.

Source PNGs and full-resolution enhanced outputs are retained. The final web images are resized/compressed to WebP; `../research/enhanced-assets.json` records the full source/output paths. Fleet, facility, app and logo imagery are actual Safa assets and were not generated.

Responsive size variants (`bottle-480.webp` and equipment `*-320.webp`) are encoded from these master WebP assets. They preserve the same artwork and transparency.

