# SEO Execution Status

Living tracker. SEO_BASELINE.md is the research reference (what to do and why).
This file is the state of play (what is done, what is next, who is blocking).
Update this file whenever a task moves. Last updated 2026-08-06.

## Phase 0: Foundations

| # | Task | Status | Blocked on |
|---|------|--------|-----------|
| 1 | 301 www to apex redirect | DONE 2026-07-27 | |
| 2 | Google Search Console Domain property + sitemap | DONE 2026-07-28 | |
| 3 | Prerender 17 routes + real 404s | DONE 2026-07-27 | |
| 4 | Request Indexing for all 17 URLs | DONE 2026-07-29 (11 on 7-28, 6 on 7-29) | |
| 5 | Trust and legal pages | DONE 2026-08-06 | |
| 6 | Google Business Profile | Not started | Rafa (address) |

Extra, discovered mid-Phase 0 and completed: pages.dev duplicate was serving a
full copy of the site with no noindex. Fixed with a host-scoped rule in
public/_headers. Cloudflare does NOT add noindex to pages.dev automatically.

GSC details (task 2, done 2026-07-28): Domain property for rhcsiteservice.com,
verified by DNS TXT via Google's one-click Cloudflare authorization. The TXT
record `google-site-verification=hUOgWBjxP9sSXcGxzfpdiL5zVvJaGjM2_3ZNcl6Qf-M`
must never be deleted or verification and all history are lost. Sitemap
submitted as the FULL url `https://rhcsiteservice.com/sitemap.xml`; a Domain
property rejects the bare `sitemap.xml` that URL-prefix properties accept.
Property currently owned by Enrique's own Google account; add the RHC business
account as an owner once Rafa provides that login.

### Task 4 result

All 17 URLs had indexing requested: 11 on 2026-07-28, the final 6 on 2026-07-29.
Sitemap flipped to Success on 2026-07-28 with 17 discovered pages. The Page
Indexing report was still "Processing data" at that point, which is normal for a
new property; it needs a few days of history before it reports anything.

Baseline observed 2026-07-28: homepage was already indexed with a last crawl of
Jul 27 6:11 PM, hours before the deploy, so Google's stored copy still had the
fabricated testimonials and old copy. Google-selected canonical was "Inspected
URL", meaning Google agrees with our declared canonical. Coverage was patchy:
/temporary-fencing had been crawled but /restroom-trailers was entirely unknown
to Google, the exact CSR indexing symptom prerendering fixes.

Watch over the next 1-2 weeks: Indexing > Pages, for how many of the 17 move to
indexed and whether any land in "Crawled - currently not indexed".

### Task 5 result (2026-08-06)

/privacy-policy and /terms-of-service are live and prerendered. The site is now
19 pages, not 17: update that count anywhere it is assumed. The footer had
promised Privacy, Terms, and Accessibility on every page with all three pointing
at href="#". The Accessibility link was REMOVED rather than pointed at a new
page, because an accessibility statement is a promise about assistive-technology
support that has never been audited here. Add it back only after a real audit.

Confirmed facts used in both pages: legal entity is **RHC SITE SERVICES LLC**,
mailing address PO Box 9088, Brooks, OR 97305, contact info@rhcsiteservices.com,
governing law Oregon. Rafa also uses rhcportabletoilets@gmail.com, which is
probably the account holding the Google Business Profile.

The privacy policy names the three third parties a visitor's browser actually
contacts: Cloudflare, Google Fonts, and jsDelivr (homepage map data). If the
baseline's font self-hosting item is ever done, or the map data is bundled
locally, update that list.

### First real GSC data (2026-08-06, ~10 days after launch)

0 clicks, 5 impressions, 0% CTR, average position 21.4, top query "rhtc" (a
brand typo). Page Indexing report still said "Processing data" after 9 days,
which is slow but not alarming for a property this small. Read: the site is
technically correct and has zero authority. Nothing here indicates a defect in
the prerendering work; it indicates the domain has no reputation yet, which only
the old-domain 301 and real reviews will fix. Both sit with Rafa.

Also verified externally on 2026-08-06: searching "RHC Site Services" surfaces
the OLD domain rhcsiteservices.com, not the new one. The old site also still
advertises roll-off dumpsters and office trailers, which are out of scope per
CLAUDE.md rule 7. This is concrete evidence for the domain-consolidation ask.

## Waiting on Rafa

High priority first. Everything here was blocking as of 2026-07-28.

1. **Old domain access (highest leverage).** rhcsiteservices.com is still live,
   WordPress + Elementor, registrar/DNS/hosting all on Namecheap
   (dns1.namecheaphosting.com), email on Zoho. Need the Namecheap login. Page
   level 301s from it pass roughly 90% of four years of accumulated signal into
   this zero-backlink domain. It has a working sitemap.xml, so old URLs can be
   mapped one to one instead of guessed.
   **WARNING: info@rhcsiteservices.com receives the lead form. Any migration
   must preserve the Zoho MX records or lead notifications silently stop.**
2. **GBP address.** What address is the existing listing verified at, is it set
   as a service area business, and is the address hidden? See the Salem vs
   Gresham decision below.
3. **Review drip.** Text or email every customer a review link after delivery.
   Slowest moving item on the whole plan, so it should start immediately.
   Never gate, never script, never quota.
4. **About Us assets.** Job site photo, photo of Rafa, a real client story.
5. **Verify one fact:** does Rafa's work since 2016 cover Washington, or Oregon
   only? ShowerTrailers.tsx currently says "Oregon and Washington" and that is
   still unconfirmed.

## Open strategic decision: Salem vs Gresham

The existing Google listing pins at 45.0449, -122.9562, which is 2 mi from
Brooks, 8 from Salem, 35 from Portland. Rafa reportedly lives in Gresham.

| Service city | From current pin | From Gresham |
|---|---|---|
| Portland | 35 mi | 12 mi |
| Gresham | 40 mi | 0 mi |
| Vancouver WA | 43 mi | 15 mi |
| Salem | 8 mi | 48 mi |

Proximity is ~55% of map pack ranking and listed service areas do not extend
the radius. Gresham covers three service cities within 15 mi; the current pin
covers one. Gresham looks better, but only if Rafa genuinely operates from
there, and changing the address on a verified listing usually triggers
re-verification. Never invent an address.

Map pack vs organic: Seattle, Tacoma, Bend, and Eugene are unreachable in the
map pack from any Oregon pin. They are won through organic results via the city
landing pages. That is what those pages are for.

## Decisions locked (do not re-litigate)

- **No fabricated proof, ever.** All 41 visible "[Testimonial placeholder]"
  blocks and 6 invented or borrowed testimonials were removed 2026-07-27 and
  replaced with 47 `TESTIMONIAL SLOT` comments recording exact position,
  intended theme, and paste-back markup. Search the codebase for
  `TESTIMONIAL SLOT` to find every one.
- **Oregon Portable Toilets' reviews and job volume can never appear as RHC's.**
  They are genuine for that company and fabricated for RHC. Rafa's personal
  years of experience are usable; his employer's numbers are not.
- **Person vs brand.** Rafa has done this work since 2016. The RHC brand started
  taking its own customers around 2022. Every "2016" on the site must attach to
  Rafa, never to the company. LocalBusiness schema carries no foundingDate.
- **Frameworks in use:** Joanna Wiebe (Seven Sweeps, VoC fidelity, Prove It,
  Zero Risk, Messaging Hierarchy) and Robert Cialdini (seven principles,
  detective / smuggler / bungler). Both pasted in full by Enrique.

## Build gotchas that will bite a future session

- **prerender.mjs must emit FLAT files** (dist/foo.html), never
  dist/foo/index.html. Cloudflare Pages serves foo.html at /foo, but a directory
  answers only at /foo/ and 308-redirects the bare path, which pointed every
  canonical and sitemap URL at a redirecting address. Local builds look
  identical either way; only production exposes it.
- **Adding a page means editing two lists:** the ROUTES array in prerender.mjs
  AND public/sitemap.xml.
- **index.html deliberately has no title or meta description.** Each page sets
  its own and prerendering bakes them in. Adding defaults back creates two of
  each, and the generic one wins.
- **Do not use vite-react-ssg** (imports react-router-dom/server.js, removed in
  React Router 7) and **do not attempt puppeteer in CI** (Cloudflare Pages build
  images lack Chromium's shared libraries and forbid apt/root).

## Next up after Phase 0

GEO playbook (framework queue item 2) was gated on prerendering and is now
unblocked. AEO Answer-Gap Desk stays parked until GSC has ~90 days of data.