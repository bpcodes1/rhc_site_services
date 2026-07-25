# SEO Baseline: RHC Site Services (researched 2026-07-24)

Purpose: independent baseline of 2025-2026 SEO best practice, scoped to this
site (local lead-gen, service-area business, new domain, client-side React SPA).
Use it to audit any SEO framework (e.g., Kyle Roof) by marking each item below
as: COVERED / PARTIAL / MISSING in that framework.

Sources: Pillars 2 and 3 come from fresh web research (Google Search Central,
Whitespark 2026 Local Search Ranking Factors, Sterling Sky field tests, Zyppy,
Rankability, BrightLocal, Search Engine Journal/Land). Pillar 1 comes from
hands-on verification of this site done 2026-07-24, not fresh research; re-run
research on it if deeper sourcing is wanted.

Status keys: [DONE] on this site already. [TODO] open action. [RAFA] needs Rafa.

## Pillar 1: Technical SEO (hands-on verified)

- [DONE] Unique title, meta description, canonical per page (react-helmet-async).
- [DONE] Canonicals point to https://rhcsiteservice.com sitewide.
- [DONE] sitemap.xml (17 URLs) and robots.txt live.
- [DONE] 404 page with noindex (SPA serves it with HTTP 200; accepted mitigation).
- [DONE] http -> https 301 redirect.
- [TODO] www serves the site with no redirect. Add a 301 www -> apex redirect
  rule in the Cloudflare dashboard (duplicate-host risk; canonicals mitigate).
- [TODO] Unpublish GitHub Pages duplicate (Bryan).
- [TODO] Google Search Console: create a Domain property (DNS verification via
  Cloudflare), submit sitemap.xml, monitor Page Indexing report monthly.
- [TODO] Validate schema on all pages with Google's Rich Results Test.
- [WATCH] Site is client-side rendered. Google renders JS but with delay, and a
  new zero-authority domain gets limited render budget. If GSC shows pages
  "Crawled - not indexed" for weeks, consider prerendering (vite prerender
  plugin or SSG) so HTML arrives complete. Decide from GSC data, not upfront.
- [WATCH] Single ~830KB JS bundle (~213KB gzipped). Fine for now; route-level
  code splitting is the first fix if Core Web Vitals (LCP/INP) test poorly.
  Test at pagespeed.web.dev once indexed.

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
3. [TODO] Internal-link cluster: each service hub links to its 3 city pages;
   each city page links back to its service hub, to sibling cities (same
   service), and to same-city pages (other services). Use varied commercial
   anchors ("restroom trailer rental in Seattle"), not "click here".
4. [TODO] "What changes the price" section on every form-only pricing page.
   Satisfies cost-intent queries and AI Overviews without violating the
   no-pricing rule.
5. [TODO] Title audit: 51-60 chars, keyword + city front-loaded, brand last,
   aligned with H1 (Google rewrote ~76% of titles in 2025; alignment prevents it).
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
1. [RAFA] Google Business Profile fundamentals: verify at a REAL address (P.O.
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

1. Google Business Profile fixed and fully populated (needs Rafa: real address).
2. Review drip started and About Us E-E-A-T TODOs closed.
3. Google Search Console property + sitemap submitted; watch indexing of the
   17 pages (drives the prerendering decision).
4. Internal-link cluster wired + first-100-words page openings.
5. Domain consolidation via 301s when old-domain access is recovered.

## Known Corrections vs. Research Output

- Research agents assumed the lead form was unwired; it is live (Web3Forms to
  info@rhcsiteservices.com, tested 2026-07).
- "Formspree" references in older docs are obsolete.