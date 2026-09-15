# Capex waitlist redesign

## Global Constraints

- Next.js/React site. Use `@formspree/react` with form ID `xzezpzjk` and visible submission state.
- Collect required Name, E-mail, Phone number, Profession. Send corresponding named fields to Formspree.
- Use supplied logo and exact palette: `#222831`, `#31363F`, `#76ABAE`, `#EEEEEE`.
- Compact landing page. Mountain backdrop and bold typography inspired by supplied Guardbase reference; original execution.
- Copy reflects supplied content and development status accurately: active development, statutory check engine live in testing, pilots beginning November 2026. Never claim product is generally available or replaces CA judgment.
- Mobile responsive, semantic and accessible. No unnecessary dependencies beyond Formspree React.

## Task 1: Build waitlist landing page

Replace current `app/page.tsx` and `app/globals.css`; update `app/layout.tsx` metadata and fonts if useful; add a small client form component and supplied logo asset under `public/`. Use supplied copy to make one concise hero, one process/capabilities section, one responsibility statement, pilot/waitlist section, footer. Form must submit through `@formspree/react` ID `xzezpzjk`, include four required fields and handle Formspree errors and success. Use logo variant best suited to dark backdrop. Run `npm run build` and `npx tsc --noEmit`; verify no old demo CTA remains. Self-review.

## Task 2: Use supplied peak photograph in screenshot-inspired hero

After Task 1 fixes and review, use `/Users/adinayak18/Downloads/vecteezy_ai-generated-majestic-mountain-peak-snowcapped-and-serene_40721757.jpg` as the hero background. Use supplied Guardbase screenshot as composition reference: full-width mountain, strong dark-blue treatment using exact palette, extremely large white headline over image, restrained small metadata labels. Keep original CApex logo, audit claim, and prominent waitlist CTA. Optimize image for web, keep text legible and mobile crop intentional. Own only `app/page.tsx`, `app/globals.css`, and photo asset under `public/`. Do not alter Formspree form component or dependency. Verify build, typecheck, browser visual at desktop and mobile. Self-review.

## Task 3: Simplify hero and rebalance page

Make hero fill visible viewport using dynamic viewport units with a practical minimum fallback. Hero content must contain only oversized `CAPEX` and tagline `The audit does itself. The CA still decides.` while header remains. Move prior hero eyebrow, development/testing copy, detailed audit proposition, CTAs, and status note into a new section immediately below hero. Move statutory check engine card into left side of Our Principle section. Fix low-contrast `review layer` heading in waitlist section. Audit and correct excessive, cramped, or inconsistent vertical spacing at desktop, tablet, and mobile sizes. Preserve supplied image, exact palette, logo, Formspree form, semantic headings, and accessible focus/contrast. Verify build, typecheck, no overflow, and browser visuals at desktop/tablet/mobile.

## Task 4: Convert overview into 50/50 split panels

Replace the overview immediately below hero with two equal-width side-by-side visual components. Left panel carries eyebrow and heading; right panel carries explanatory copy, testing status, and both actions directly below: `Join the pilot waitlist` and `See how it works`. Give both halves clear component boundaries and balanced heights while keeping the existing palette and editorial style. Stack cleanly on mobile with actions easy to tap and no overflow. Do not change hero, workflow, principle, waitlist form, or page copy beyond layout-driven line-break adjustments. Verify build, typecheck, diff check, and responsive layout.

## Task 5 — Align hero and pair overview with workflow
- Optically align the hero tagline with the CAPEX wordmark.
- Place the CA overview and workflow as equal adjacent desktop components; stack on mobile.
- Center the pilot CTA contents and preserve accessible hit size.
- Verify build, types, diff, and browser layout.
