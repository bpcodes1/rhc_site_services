# RHC Site Services: Decisions, History, and TODOs

Reference file. Not loaded automatically. Open when a question about past
decisions, page history, or launch readiness comes up.

## Business Context (full version)

RHC is a middleman. Rafa (Rafael Hernandez, owner) has no fixed inventory and no
standing contracts with providers. When a lead comes in, he finds a local provider
who can fulfill it, gets their price for the lead's specific context, quotes the
lead slightly higher, and keeps the difference. He never commits to a provider
until there is a confirmed lead. This is why service page specs describe the
Oregon/Washington market standard rather than any specific stock, and why copy
never claims ownership or reveals the model. Built by Enrique Piedra Orta and
Bryan Josue Piedra Orta (Be-Techplus). Long-term goal is nationwide service, but
all copy stays Oregon/Washington-scoped to protect local SEO.

## Domain Situation (2026-07-24)

- Live domain: rhcsiteservice.com (no "s"), hosted on Cloudflare Pages.
- Old domain: rhcsiteservices.com (with "s") runs Rafa's 2024 WordPress site.
  Rafa lost access. Domain is registered at Squarespace Domains (likely via an
  old Google Domains account), hosting and email at Namecheap, paid through May
  2027. Plan: recover access, take the WordPress site down, and eventually move
  the new site to the old domain with 301 redirects.
- Email on the old domain still works. Form submissions go to
  info@rhcsiteservices.com (tested and confirmed 2026-07).
- GitHub Pages duplicate at bpcodes1.github.io/rhc_site_services: deploy workflow
  replaced with a build check on 2026-07-24; Bryan (bpcodes1, repo admin) still
  needs to unpublish the existing Pages site in repo Settings > Pages.

## Key Decisions (do not re-litigate unless Enrique raises them)

- FAQ standalone page: DROPPED (2026-06-09). Duplicate of per-page FAQs.
  src/pages/FAQ.tsx and its route still exist; delete when convenient.
- Roll-Off Dumpsters: OUT OF SCOPE (2026-06-09). Page file deleted.
- Restroom Trailers pricing range ($900-$1,200): removed. Range too wide,
  amplifies price anxiety. Do not reinstate without Rafa's approval.
- Contact Us lives in Footer "Company" column only, not the Header nav.
- Blog: dropped for launch. Add later.
- Custom printed windscreens: excluded (not every provider carries them).
- Crowd control barricades: excluded from fencing page.
- Post-driven AND panel fencing: both included (middleman can source either).
- Shower Trailers: separate service and page from Restroom Trailers.
- Oregon Portable Toilets LLC (Rafa's dad) logo trust bar: pending Rafa. Hold.
- Photos: 50/50 client-provided and stock. Use placeholder div with ph-tag until
  real photos arrive.
- 404 page added 2026-07-24 (src/pages/NotFound.tsx, catch-all route, noindex).
- Canonicals/schema fixed to rhcsiteservice.com sitewide 2026-07-24.

## Pricing by Service

| Service | Approach |
|---|---|
| Portable Toilets | Form only |
| Restroom Trailers | Form only (range removed, see above) |
| Temporary Fencing | Form only |
| Shower Trailers | $2,000-$6,000 in FAQ answer only; form-only CTA |
| Storage Containers | Form only |

## Page Build History

- Homepage, Portable Toilets, Restroom Trailers, Temporary Fencing: early builds.
- Shower Trailers 2026-05-24. Storage Containers 2026-05-26 (4 testimonial
  placeholders await Rafa's reviews).
- Bend: Porta Potty 2026-05-27, Restroom Trailer 2026-05-28, Fencing 2026-05-29.
- Portland: Porta Potty 2026-05-30 (High-Rise unit type is Portland-specific),
  Restroom Trailer 2026-05-31, Fencing 2026-05-31.
- Seattle: Porta Potty 2026-06-03 (WA L&I table, SDOT permits), Restroom Trailer
  2026-06-04 (2-10 stall range), Fencing 2026-06-05 (SDOT/Parks/DOSH guide).
- About Us 2026-06-05. Contact Us 2026-06-08. 404 page 2026-07-24.
- Restroom trailer stall-range note: main /restroom-trailers page may still need
  the 2-10 stall update made on the Seattle page (verify before next copy pass).

## New Page Process (5 steps)

1. Research (Enrique): 3 Google searches (generic, construction, event); H2s,
   specs, PAA questions, Related Searches from top results; review mining of
   competitor 1-star and 5-star Google reviews, quotes verbatim.
2. Copy draft (Claude writes, Enrique reviews). Full copy before any code.
3. Brutal Framework Analysis on approved copy. Load all 5 profiles from
   .claude/expert-profiles/: Kyle Roof (SEO/on-page), Joanna Wiebe (7 sweeps),
   Eugene Schwartz (awareness/sophistication), Alex Hormozi (value equation),
   Clayton Christensen (jobs to be done). Present failures ranked by severity.
4. Enrique decides fixes; second approval.
5. Build.

## Launch TODOs

1. Footer legal links (Privacy, Terms, Accessibility) are placeholder "#" links
   in Footer.tsx. Real pages or removal before launch.
2. About Us: job site photo (src/assets/general/about_jobsite.webp), Rafa
   personal photo, client story for section 05, testimonial in final CTA.
   (P.O. Box, Google Maps URL, and Facebook URL: done as of 2026-07.)
3. Google Search Console: register rhcsiteservice.com, submit
   public/sitemap.xml. Not started as of 2026-07-24.
4. Bryan: unpublish GitHub Pages site (see Domain Situation above).
5. Optional cleanup: delete src/pages/FAQ.tsx and its route.
6. Contact page shows Rafaelh@rhcsiteservices.com; Rafa directs inquiries to
   info@rhcsiteservices.com. Confirm with Rafa which address the page should show.

## Other References

- Enrique's personal writing voice (sales scripts and outreach, not website
  copy): /Users/enriquep/ai-fundamentals/module-outputs/module-06-writing/
  Self-writing-profile.json and self-writing-skill.md.