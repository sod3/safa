# Safa Water — Qatar

A complete English/Arabic redesign, built with Next.js 16.3.8, React 19.3, TypeScript, Tailwind CSS 4, CSS/IntersectionObserver animation, React Hook Form and Zod. Next.js and React versions were resolved from the npm registry during implementation.

## Run

```powershell
npm install
npm run dev
```

Open `http://127.0.0.1:3000/en/` or `/ar/`.

```powershell
npm run typecheck
npm run build
```

The build exports the entire site to `out/`. No Node.js server is needed for hosting. The Sites identity and static output directory are in `.openai/hosting.json`.

## Included

- 24 routes per language: homepage, company story, catalogue, seven individual product pages, six-step order planner, home delivery, business enquiries, quality, facility, delivery network, official mobile apps, contact, FAQ, privacy, terms, coupons, referrals and careers.
- Native accessible mobile menu, product filtering/swiping, validated progressive forms, keyboard-accessible process tabs, FAQ accordions, a geographical Qatar map and reduced-motion support.
- True Arabic HTML language/direction, translated navigation and content, CSS logical properties, Arabic font and locale-preserving language switching.
- Self-hosted variable WOFF2 fonts, WebP assets, responsive hero sources and lazy loading below the hero.
- Page titles, descriptions, canonical URLs, English/Arabic hreflang, Open Graph, Twitter metadata, Organisation/LocalBusiness/Product/FAQ/Breadcrumb JSON-LD, sitemap and robots.
- Browser WebMCP enhancement: `stage_safa_order` configures the same visible product and quantity controls. It never submits an order. Unsupported browsers work normally.

## Ordering and enquiries — important

The audited live site uses Contact Form 7 plus an OTP verification plugin, with separate new-customer and existing-customer forms. No authorised checkout API, payment integration, stock feed, delivery scheduler or business inbox integration was supplied.

The new order planner therefore **prepares a request, and never pretends to confirm an order**. Its sixth step provides a complete email draft addressed to the verified `sales@safawaterqa.com`, copyable details and the official existing order-form link. The customer reviews and sends the draft in their own email client. Business/contact forms use the same explicit draft handoff. Test runs never send emails or make live submissions.

To activate direct submission, supply the authorised Safa endpoint and OTP protocol. Add a server/API adapter, verify response codes, rate-limit submissions and validate the complete form server-side before showing a genuine submission receipt. Keep delivery dates provisional until the Safa system confirms them. Keep the existing email/official-form handoff as a fallback.

Accounts, saved addresses, recurring delivery, payment, live vehicle tracking, delivery-time guarantees and unverified WhatsApp channels are not fabricated. Official app links provide the established account route.

## Content verification

See [SOURCE-AUDIT.md](SOURCE-AUDIT.md) for every verified company claim, retained existing feature and outstanding operational confirmation. Phone, email, map coordinates, products and all specifications come from Safa’s official site. Memberships are presented separately from certifications. Certificate validity is not asserted from old certificate imagery.

The privacy/terms pages explain this implementation and link to Safa’s complete official policies. They do not silently rewrite or replace the existing operator’s legal documents.

## Images

The actual logo, fleet/facility photo, app photo and published certification marks come directly from Safa’s site. Product cutouts were enhanced with the built-in ImageGen tool, using real catalogue photos as edit targets. The original product photos are retained in the parent research area. Enhanced labels and equipment details need Safa’s visual approval or replacement by approved studio files before a public brand launch. No AI-generated facility, employee, delivery fleet or customer testimonial is used.

See [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md) for the exact prompts, originals and final asset paths. Company information lives in `lib/content.ts`, components in `components/`, and reusable design tokens in `app/globals.css`.

## Verification

See [QA-REPORT.md](QA-REPORT.md) for measured scores, passed checks and remaining performance work.

`scripts/verify.mjs` checks all exported language routes, page metadata, local links/images, nine viewport widths in both languages, the mobile menu, product filters, order validation/review, business drafts, accordion controls, quality tabs, Arabic checkout and WebMCP in a controlled browser harness. The browser’s native WebMCP implementation may be unavailable; harness success does not claim native browser support.

`scripts/lighthouse.mjs` measures the exported site locally. Detailed verification, Lighthouse reports and visual captures are in the parent `research/` directory. Lighthouse is a lab measurement of the local export; public hosting and network conditions can change the scores.

## Public launch checklist

1. Connect authorised direct-order and business submission services if required.
2. Confirm certificate validity, current price/stock, delivery coverage, opening hours and any WhatsApp number with Safa.
3. Obtain brand approval for enhanced product cutouts and native-speaker review of Arabic commercial/legal wording.
4. Set the final canonical origin in `lib/content.ts` and `public/robots.txt`, rebuild, and configure the operator’s approved domain and legal policies.

The initial hosted review is private. Sharing/access is controlled by Sites; it does not replace Safa’s live domain.


