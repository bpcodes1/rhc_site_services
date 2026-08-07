# RHC Site Services Website

Lead-generation website for RHC Site Services, a portable toilet and site equipment
rental company serving Oregon and Washington from Portland. Every page exists to
drive one action: submitting the lead form.

## Critical Rules

1. No em dashes anywhere in site copy. Use a comma or rewrite the sentence.
2. Never write "dispatch". Use "RHC". The At a Glance sidebar label is "Availability".
3. Phone number (503-607-7412) appears only in the final CTA section at the bottom
   of a page. Never in the hero, nav, or body copy.
4. Never claim equipment ownership ("our fleet", "our inventory", "our trucks") and
   never reveal the middleman model ("we broker", "no middlemen"). Correct framing:
   "confirmed clean before it arrives", "delivered and installed by RHC", "one
   accountable team".
5. No pricing on the site, with one exception: Shower Trailers $2,000-$6,000 inside
   that page's FAQ answer only. Every other service is form-only.
6. The site domain is https://rhcsiteservice.com. Never use rhcsiteservices.com
   (old WordPress domain) or bpcodes1.github.io in canonicals, schema, or OG tags.
   Email addresses ending in @rhcsiteservices.com are correct as-is; leave them.
7. Roll-Off Dumpsters and a standalone FAQ page are out of scope. Never add them
   to nav, footer, service lists, or copy.

## Stack

TypeScript, React, Vite, react-router-dom, react-helmet-async, Web3Forms,
Cloudflare Pages hosting, GitHub repo bpcodes1/rhc_site_services, branch enrique.

## Architecture

- src/rhc-design.css is the single source of truth for visuals. design.md holds
  the design tokens. Read design.md before any copy, token, or visual work.
- Before editing anything in src/pages/, read .claude/rules/pages.md.
- Specs on service pages describe the Oregon/Washington market standard, not RHC
  stock. Write "standard sizes in the Portland metro area include...", never "we
  offer X sizes". Research the regional standard; do not wait on Rafa to confirm.
- LeadForm (src/components/LeadForm.tsx) is the primary CTA on every page. Pass
  the defaultService prop. Submissions go via Web3Forms to info@rhcsiteservices.com.
- Service cities: Salem, Portland (HQ), Eugene, Bend, Gresham (OR); Tacoma,
  Vancouver, Seattle (WA). Portland gets the is-hq class. City links go to #quote.
- New page copy follows the 5-step process in DECISIONS.md: research, copy draft,
  approval, Brutal Framework Analysis (.claude/expert-profiles/), build.

## Verification

No test framework. npm run build must pass before every push; CI runs the same
check (.github/workflows/build-check.yml). Preview visual changes with npm run dev.

## Deployment

Pushing to enrique auto-deploys production (Cloudflare Pages). Treat every push as
a production deploy. main is stale; all work happens on enrique. Register new pages
in THREE places: the Routes tree in src/AppRoutes.tsx, the ROUTES array in
prerender.mjs, and public/sitemap.xml. Miss prerender.mjs and the page ships as an
empty shell to crawlers. Keep the catch-all NotFound route last.

Every route is prerendered to static HTML at build time by prerender.mjs plus
src/entry-server.tsx. Read SEO_STATUS.md "Build gotchas" before touching that
pipeline; the flat-file output and the missing title/description in index.html
are both deliberate.

## Status and History

19 live pages: 3 core, 5 service, 9 location, 2 legal. Per-page build history, past
decisions, and launch TODOs live in DECISIONS.md. Do not re-litigate decisions
recorded there unless Enrique raises them.

For any SEO work, read SEO_STATUS.md first: it is the living tracker of what is
done, what is next, who is blocking, decisions already locked, and build gotchas.
Then SEO_BASELINE.md (research reference and priorities) and
SEO_FRAMEWORK_AUDITS.md (framework audit map and queue). SEO_GLOSSARY.md holds
plain-English term explanations for Enrique.

Never publish a testimonial, review, statistic, or date that is not verified.
The site had fabricated testimonials and false founding claims removed on
2026-07-27; see SEO_STATUS.md. Empty proof beats invented proof.

## Working With Enrique

- Explain new technical concepts in plain English at a 5th-grade reading
  level; use analogies. Confirm understanding before building on a concept.
- Challenge his reasoning when it is weak and say why. He expects pushback
  and treats it as a feature, never rubber-stamp.
- One question or decision at a time; lock it before moving to the next.
- Zero assumptions: if a fact is not stated or verifiable, ask or verify.
- He and Bryan both push to this repo. Pull before working.

## Reminders

- No em dashes. No "dispatch". Phone only in the final CTA section.
- Never claim ownership; never reveal the middleman model.
- Domain is rhcsiteservice.com. Every push to enrique deploys production.