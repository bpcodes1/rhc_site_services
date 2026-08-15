# SEO Baseline: RHC Site Services (researched 2026-07-24)

Purpose: independent baseline of 2025-2026 SEO best practice, scoped to this
site (local lead-gen, service-area business, new domain, client-side React SPA).
Use it to audit any SEO framework (e.g., Kyle Roof) by marking each item below
as: COVERED / PARTIAL / MISSING in that framework.

Sources: all three pillars come from fresh web research (Google Search Central,
Vercel/MERJ JS-rendering study, Cloudflare Pages docs, Whitespark 2026 Local
Search Ranking Factors, Sterling Sky field tests, Zyppy, Rankability,
BrightLocal, Search Engine Journal/Land), cross-checked against hands-on
verification of this site done 2026-07-24.

Status keys: [DONE] on this site already. [TODO] open action. [RAFA] needs Rafa.

## Pillar 1: Technical SEO (researched)

Already right on this site:
- [DONE] Unique title, description, canonical per page; canonicals on the apex
  domain sitewide; sitemap.xml (19 canonical URLs) and robots.txt live (robots
  allows /assets/, required for Google to render a JS site).
- [DONE] http -> https 301. 404 page with noindex (the accepted SPA fallback).
- [DONE] Zero third-party scripts (the top INP killer on small sites); keep it so.

Actions, ranked by impact:
1. [DONE 2026-07-27] 301 www -> apex via Cloudflare Redirect Rule ("Redirect
   from WWW to root" template, preserve query string). Verified: www root and
   deep paths 301 to matching apex URLs, query strings preserved.
2. [DONE 2026-07-27] Prerendered all 17 routes + real 404s. NOTE: vite-react-ssg
   (the original pick) is NOT usable, it imports react-router-dom/server.js,
   a subpath React Router 7 removed; its README now redirects v7 users
   elsewhere. Puppeteer-based prerendering is also out: Cloudflare Pages build
   images lack Chromium's shared libraries and forbid apt/root. Replacement is
   a 60-line prerender.mjs plus src/entry-server.tsx that renders each route to
   a string in plain Node (React 19 hoists head tags, react-helmet-async v3 is
   a passthrough), needing no browser and no framework migration.
   Google renders JS reliably (100% in
   the Vercel/MERJ study) but a new zero-backlink domain gets slow, patchy CSR
   indexing (documented case: 20 of 198 SPA pages indexed after 6 months), and
   social/AI crawlers never run JS, so link previews and AI-search visibility
   only work with static HTML. After prerendering: remove the catch-all
   _redirects rule and ship 404.html so unknown URLs return real HTTP 404s.
3. [DONE 2026-07-28/29] Google Search Console Domain property verified by DNS
   TXT, sitemap submitted (Success, 19 URLs), Request Indexing done for every
   URL. Keep monitoring Page Indexing for "Crawled - currently not indexed".
4. [DONE 2026-07-27] GitHub Pages duplicate unpublished (Bryan). pages.dev did
   NOT send noindex by default (verified by curl); fixed via host-scoped rule in
   public/_headers (X-Robots-Tag: noindex on rhc-site-services.pages.dev only).
5. [DONE 2026-08-14] Schema on all 19 pages, all from src/seo/schema.ts.
   BreadcrumbList on every page below the homepage, one canonical LocalBusiness
   node with areaServed (8 cities), Service on the 5 service and 9 location
   pages. Resolved the two open questions in this item's original wording:
   - NAP now carries NO postal address, because the GBP is a service-area
     listing with the address hidden and publishing one would contradict it.
   - FAQPage was ADDED to all 15 pages with FAQs rather than frozen. The
     "stop adding it" advice here conflicted with Pillar 2 item 6 below, which
     is the newer reasoning: rich results are gone but AI answer engines cite
     marked-up Q&A more. Enrique decided in favour of Pillar 2.
   Still open: validate with the Rich Results Test once deployed; it executes
   JS so it doubles as a render check.
6. Speed (CWV 2026 = LCP, CLS, INP; a tie-breaker signal but a conversion win
   now).
   - [DONE 2026-08-14] Self-hosted the three Google Fonts with font-display:
     swap and preload, plus metric-matched fallbacks. This was the whole CLS
     problem: /storage-containers went from 0.2964 (POOR) to 0.0000, and all
     19 routes now measure "good". Details in SEO_STATUS.md.
   - [DONE 2026-08-14] Explicit dimensions on all 26 images. NOTE for future
     audits: this item assumed missing dimensions caused the CLS. Measurement
     showed fonts caused 100% of it and most images were already protected by
     `aspect-ratio` in the CSS. Count defects, but measure effects before
     ranking them.
   - [TODO] Route-split the ~800KB bundle with React.lazy. Still open, and now
     the only remaining speed item.

## Pillar 2: On-Page and Content SEO (researched)

Already right on this site:
- [DONE] URL pattern /porta-potty-rental-bend-or is exactly current best practice.
- [DONE] Published specs = the "helpful content" depth Google rewards.
- [DONE] City permit/venue guides = the #1 signal separating real location pages
  from doorway pages (near-duplicate city pages lost 60-80% traffic post-2024).
- [DONE] Per-page FAQs mined from People Also Ask.
- [DONE] Word-count padding avoided (word count confirmed a non-factor).

Actions, ranked by impact:
1. [TODO] E-E-A-T proof: close About Us TODOs (Rafa photo, job-site photo,
   client story, testimonial); embed verbatim Google review excerpts on service
   and city pages as they come in. Reviews are ~20% of local ranking weight.
2. [TODO] First-100-words rule: open each page by directly answering who/what/
   where. Directly-answering openings are 2.3x more likely to be cited by AI
   Overviews, which now front 80%+ of local service queries.
   **The 80% figure is not holding up on measurement.** In the 2026-08-15 AI
   visibility baseline, Google generated an AI Overview for 2 of 4 commercial
   local queries: yes for fencing Bend and porta potty Salem, NO for porta
   potty Portland and restroom trailer Seattle. Sample of four is too small to
   replace the number, big enough to stop quoting 80% as established. The
   underlying action is unaffected: directly answering the question is good for
   AI engines and humans either way. See AI_VISIBILITY_BASELINE.md.
3. [TODO] Internal-link cluster: each service hub links to its 3 city pages;
   each city page links back to its service hub, to sibling cities (same
   service), and to same-city pages (other services). Use varied commercial
   anchors ("restroom trailer rental in Seattle"), not "click here".
4. [TODO] "What changes the price" section on every form-only pricing page.
   Satisfies cost-intent queries and AI Overviews without violating the
   no-pricing rule.
5. [DONE 2026-08-15] Title audit: 51-60 chars, keyword + city front-loaded,
   brand last, aligned with H1 (Google rewrote ~76% of titles in 2025;
   alignment prevents it). Six titles rewritten; see SEO_STATUS.md.
   Two corrections to this item's own wording, both found while executing it:
   - **Google truncates by PIXEL WIDTH (~600px desktop), not character count.**
     51-60 chars is only a proxy. Verified directly on 2026-08-15 by measuring
     every title at Arial 20px: all 19 land between 306px and 559px, so all
     fit. Measure pixels when a title is borderline; the old 82-char homepage
     title was ~750px and was certainly being cut.
   - The ~76% figure is carried from the original 2026-07-24 research and has
     NOT been independently re-verified since. Treat it as directional. The
     underlying title-tag research traces to Zyppy, which is Cyrus Shepard's
     company, so it is the same source as Audit 2 rather than a second opinion.
6. [KEEP] FAQPage schema. Google removed FAQ rich results for most sites
   (May 2026) but FAQ-marked pages are cited more in AI Overviews.
7. [TODO] Question-format H2s and direct first-sentence answers in FAQs.
8. [TODO] Real photos: prioritize on city pages and heroes; descriptive file
   names (porta-potty-rental-portland-jobsite.webp) and specific alt text.
9. [RULE] City page expansion cap: stay under ~15-20 total city pages, built
   one at a time with real local research (permits, venues), 500+ words of
   genuinely unique copy each. Volume of thin pages is the doorway trigger.

## Pillar 3: Local and Off-Page SEO (researched)

Strategic truth: the Google Maps pack is winnable ONLY near the verified
address (Salem-Portland-Vancouver corridor). Seattle, Tacoma, Bend, Eugene are
organic-results plays that ride on the city landing pages. Proximity is ~55% of
pack ranking; listed service areas do not extend ranking radius (Sterling Sky,
8,186-business study). Never create fake GBPs in distant cities.

Actions, ranked by impact:
1. [STAGED 2026-08-07, needs Rafa's video verification] Google Business Profile.
   Manager access obtained; website field, description, categories, service
   areas, ~17 services, and attributes are all edited but invisible until Rafa
   records the verification video. Full detail in SEO_STATUS.md. Original note:
   verify at a REAL address (P.O.
   Boxes are not accepted; verify at a real location then hide it), primary
   category "Portable toilet supplier", fill the Services section exhaustively
   (a tested ranking mover), add secondary categories, set hours, list the 8
   cities as service areas (cosmetic but correct). Skip Google Q&A (removed)
   and treat Posts as free ad space, not ranking fuel.
2. [RAFA] Domain consolidation, when old-domain access is recovered: page-level
   301s from rhcsiteservices.com to matching new pages (NOT everything to the
   homepage), Search Console Change of Address, point GBP website field at
   rhcsiteservice.com, keep redirects live permanently. A domain 301 passes
   ~90%+ of 4 years of accumulated signal into this zero-backlink domain.
3. [RAFA] Review engine: same text/email review link to every customer after
   delivery. Never gate, never script wording, never quota (2026 enforcement
   crackdown; FTC penalties). Respond to every review. Aim for a steady drip
   (2-4/month); recency is now a top-5 pack factor. No AggregateRating schema
   for RHC's own reviews on its own site (ineligible since 2019; risk only).
4. [TODO] One clean citation pass with identical NAP (RHC Site Services /
   503-607-7412 / rhcsiteservice.com): Google, Bing Places, Apple Business
   Connect, Yelp, BBB, Facebook, Nextdoor, Data Axle, Foursquare, PSAI
   (industry). ~20 clean citations beat 100 messy ones; skip bulk packages.
5. [TODO] First 10-15 links: chambers of commerce (Portland/Salem), sponsor
   events RHC serves (races, fairs, festivals; sponsor pages link out and
   double as lead gen), PSAI membership, supplier/partner links, and (pending
   Rafa approval) Oregon Portable Toilets LLC. Point city-relevant links at
   the Seattle/Bend pages; links are what rank pages beyond pack radius.
6. [TODO] Monthly 1-hour tracking routine: GBP Performance (calls, clicks,
   queries), GSC clicks/impressions per city page, form submissions by service
   and city (form is live via Web3Forms), review count + days-since-last,
   free geo-grid scan (Local Falcon/GMBapi free tiers). Log in one sheet.

## Top Priorities Across All Pillars

Written 2026-07-24, when this was a 17-page site with nothing done. Kept as the
original ranking; the live queue is in SEO_STATUS.md and the site is 19 pages.

1. [DONE 2026-07-27] 301 www -> apex redirect in Cloudflare.
2. Google Business Profile fixed and fully populated. STAGED 2026-08-07; every
   edit is invisible until Rafa records the video verification.
3. [DONE 2026-07-28/29] Google Search Console Domain property + sitemap +
   Request Indexing. Note: the 2 legal pages, created later on 2026-08-06,
   have still never had indexing requested.
4. [DONE 2026-07-27] Prerender every route, then serve real 404s. Done with a
   custom prerender.mjs, NOT vite-react-ssg, which item 2 above proves unusable.
5. Review drip started and About Us E-E-A-T TODOs closed. Both need Rafa.
6. Internal-link cluster wired + first-100-words page openings.
7. Domain consolidation via page-level 301s when old-domain access is recovered.

## Known Corrections vs. Research Output

- Research agents assumed the lead form was unwired; it is live (Web3Forms to
  info@rhcsiteservices.com, tested 2026-07).
- "Formspree" references in older docs are obsolete.