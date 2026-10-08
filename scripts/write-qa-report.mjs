import fs from 'node:fs/promises';
const verification=JSON.parse(await fs.readFile('../research/verification.json','utf8'));
const lighthouse=JSON.parse(await fs.readFile('../research/lighthouse-summary.json','utf8'));
const rows=lighthouse.map(({locale,device,scores:s})=>`| ${locale.toUpperCase()} / ${device} | ${s.performance} | ${s.accessibility} | ${s['best-practices']} | ${s.seo} |`).join('\n');
const mobileMet=lighthouse.filter(r=>r.device==='mobile').every(r=>r.scores.performance>=90);
const text=`# Safa Water verification

Recorded ${new Date().toISOString()}. Measurements use the compressed local production export, not the authenticated hosted preview.

## Build and functional checks

- Production Next.js build and TypeScript compilation passed.
- ${verification.routes.length} English/Arabic routes checked for successful responses, one H1, language, title, description, canonical URL, local links and images.
- 108 responsive checks at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 px: ${verification.responsive.length} overflow failures. The homepage carousel was checked after scrolling into view.
- ${verification.errors.length} browser exceptions, ${verification.brokenImages.length} broken images and ${verification.brokenLinks.length} broken local links.
- Eight representative pages tested with axe WCAG 2 A/AA and WCAG 2.1 AA: ${verification.accessibility.reduce((n,a)=>n+a.violations.length,0)} detected violations.
- Mobile menu, keyboard dismissal, product filters, quick-order prefill, six-step order, required fields, Qatar phone validation, review, business draft, FAQ, quality tabs and Arabic ordering passed.
- Additional checks passed for preferred dates, existing customer codes, correction, back navigation and the complete Arabic order with translated email draft. No live order, email or enquiry was sent.
- WebMCP staging passed in a controlled harness. Native browser support was unavailable; ordinary ordering works without it.
- Desktop, mobile and Arabic screenshots inspected. Product variants retain the same enhanced artwork; actual fleet/facility and app imagery is preserved.

## Lighthouse homepage lab scores

| Page | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
${rows}

${mobileMet?'The measured runs meet the requested Lighthouse targets.':'The 90+ mobile performance target was not achieved in these local lab runs. The scores above are the measured results, not an estimate. Further mobile startup optimization and measurement on the final hosting/domain remain appropriate.'}

The checks establish the tested behavior, not a certification of every possible assistive technology or device. Full machine-readable reports and captures are retained in the local parent research folder.

## Operational handoff

The review site is private. Orders and enquiries prepare explicit unsent drafts for Safa’s verified email address, with official form/app fallbacks. Direct submission requires Safa’s authorized backend/OTP integration. Current prices, stock and delivery schedules are not invented. Enhanced product artwork needs brand approval before public launch. Source facts and asset provenance are in SOURCE-AUDIT.md and IMAGE-PROMPTS.md.
`;
await fs.writeFile('QA-REPORT.md',text);
console.log('Saved QA-REPORT.md');
