# SEO Execution Status

Living tracker. SEO_BASELINE.md is the research reference (what to do and why).
This file is the state of play (what is done, what is next, who is blocking).
Update this file whenever a task moves. Last updated 2026-08-07.

## Phase 0: Foundations

| # | Task | Status | Blocked on |
|---|------|--------|-----------|
| 1 | 301 www to apex redirect | DONE 2026-07-27 | |
| 2 | Google Search Console Domain property + sitemap | DONE 2026-07-28 | |
| 3 | Prerender 17 routes + real 404s | DONE 2026-07-27 | |
| 4 | Request Indexing for all 17 URLs | DONE 2026-07-29 (11 on 7-28, 6 on 7-29) | |
| 5 | Trust and legal pages | DONE 2026-08-06 | |
| 6 | Google Business Profile | STAGED 2026-08-07, all edits pending | Rafa (video verification) |

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

### GBP access granted 2026-08-07

Enrique holds **Manager** access via the Request Access flow at
business.google.com/add (relationship "Agency", agency name Be-Techplus,
requesting account enriquepiedra2005@gmail.com). Owner account is
rh...@gmail.com, almost certainly rhcportabletoilets@gmail.com. Rafa approved
within a day once the request was accompanied by a short text explaining it.

Facts the request screen revealed:
- The listing is verified at a REAL street address, **8792 Portland Rd NE,
  Brooks, OR 97305**, not the PO Box. No guideline violation to fix.
  Same road and ZIP as Oregon Portable Toilets (10255 Portland Rd NE, Salem
  97305) but a different street number.
- The listing already has **1 review, rated 5.0**. Chase this down: if it is a
  genuine RHC customer it is the first real testimonial available and belongs in
  one of the 47 empty TESTIMONIAL SLOT positions.

Manager access covers categories, services, service areas, hours, description,
photos, posts, and review replies. It does NOT cover changing the verified
address, which still needs Rafa and triggers re-verification.

**Business location is already correct**: set to "No location; deliveries and
home services only", so it is a service-area business with the address hidden
from the public. The address visible in the manager view is not public. Nothing
to fix here; an earlier note in this file worried about it unnecessarily.

### GBP work completed 2026-08-07 (ALL PENDING VERIFICATION)

Every edit below is saved but NOT public. The banner reads "Google requires
additional info to verify that you manage this business. Your edits will be
visible after you're verified." Everything publishes the moment Rafa completes
video verification. Do not redo this work; it is staged and waiting.

1. **Website field**: was pointing at the OLD domain. Changed to
   `https://rhcsiteservice.com/` (https, not http). This was the single
   highest-impact fix on the listing.
2. **Description**: replaced. The previous one was keyword-stuffed spam
   ("Construction portable toilets/ construction porta potties Salem, Portland,
   Hillsboro, Gresham." repeated five ways). GBP descriptions are NOT a ranking
   factor and keyword stuffing violates Google's content policy, so the old one
   carried suspension risk for zero gain. New copy is human-readable, follows
   the site's rules, and attributes 2016 to Rafa rather than the brand.
3. **Categories**: primary "Portable toilet supplier" was already correct.
   Added "Container supplier", "Fence contractor", "Equipment rental agency".
   Enrique verified via Maps that businesses doing only restroom/shower trailers
   use "Portable toilet supplier" as primary, so no separate category exists for
   those. Good method: competitor-derived, not guessed.
4. **Service areas**: added Seattle, Tacoma, and Vancouver WA, which were all
   missing despite the site marketing them. Existing 16 Oregon cities kept as-is
   (that list includes Medford and Grants Pass, ~250 mi away; whether Rafa truly
   serves them is his call, and service areas do not extend ranking radius).
5. **Services**: ~17 custom services added, grouped by category. Google offers no
   predefined services for this category, so all are custom. Written from actual
   site content, no invented offerings, and deliberately NOT keyword-stuffed.
6. **Attributes**: "Latino-owned" added under From the business (accurate).
   Languages served set to English and Spanish. Service options offered only
   language selection for this category.
7. **Decided against**: Payments and Crowd left empty (unknown / irrelevant).
   Opening date left empty, since RHC's real start date is not confidently known
   and guessing it would repeat the foundingDate mistake.

**Handwashing Station Rental was added** after Enrique overrode an earlier
recommendation to leave it out. His reasoning was sound and accepted: RHC is a
middleman, and any supplier fulfilling a porta potty order stocks handwashing
stations, so it is a real capability. This is a business-capability judgment,
categorically different from fabricating proof.
CONSEQUENCE, NOT YET DONE: the GBP now advertises a service the website never
mentions across all 19 pages. The Seattle page explains King County's hot and
cold running water rule for food service, and the Portland page covers the
Oregon OSHA requirement, so the site establishes the requirement and never
offers the solution. Add handwashing stations to the Portable Toilets page to
close that loop.

**Still unread: the 1 existing Google review (5.0).** Reading is not editing so
it should work without verification. If it is a genuine RHC customer it is the
first real testimonial available and belongs in a TESTIMONIAL SLOT.

Rafa context as of 2026-08-07: working 16-hour days on Pacific Northwest
wildfire response. Responsive to short, single-ask messages; do not batch
requests or ask for anything requiring sustained attention right now.

## Waiting on Rafa

High priority first. Old domain access is DEFERRED by agreement 2026-08-07 until
Rafa's workload eases; it is still the highest-value item when he is available.

1. **Old domain access (highest leverage, deferred by agreement).** rhcsiteservices.com is still live,
   WordPress + Elementor, registrar/DNS/hosting all on Namecheap
   (dns1.namecheaphosting.com), email on Zoho. Need the Namecheap login. Page
   level 301s from it pass roughly 90% of four years of accumulated signal into
   this zero-backlink domain. It has a working sitemap.xml, so old URLs can be
   mapped one to one instead of guessed.
   **WARNING: info@rhcsiteservices.com receives the lead form. Any migration
   must preserve the Zoho MX records or lead notifications silently stop.**
2. **GBP video verification. THIS IS NOW THE TOP GBP BLOCKER.** All of the
   2026-08-07 profile work is staged and invisible until Rafa records it.
   Google asks for a short video walking the location showing equipment and any
   signage, done from his phone at the yard. Two minutes of his time, and it is
   not a desk task, which suits his current schedule. Unverified listings also
   rank worse and cannot properly reply to reviews.
3. **Business hours.** Currently "Open 24 hours" and unverified. Enrique
   suggested copying Oregon Portable Toilets' hours; rejected, because those
   describe a different business and inferring them repeats the pattern of
   filling fields with plausible unverified data. One-line question: "What hours
   do you want on your Google listing? When can people actually reach you?"
4. **Payment methods accepted**, for the GBP Payments attribute.
5. **Does he offer handwashing stations directly?** Already listed on GBP on the
   reasoning above, but worth confirming, and it determines the site copy.
6. **Review drip.** Text or email every customer a review link after delivery.
   Slowest moving item on the whole plan, so it should start immediately.
   Never gate, never script, never quota.
7. **About Us assets.** Job site photo, photo of Rafa, a real client story.
8. **Verify one fact:** does Rafa's work since 2016 cover Washington, or Oregon
   only? ShowerTrailers.tsx currently says "Oregon and Washington" and that is
   still unconfirmed.
9. **Salem vs Gresham address decision** (see below). Not urgent, but it decides
   which city RHC can reach in the map pack. Needs a real conversation, so it
   waits until his workload eases.

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

## Unblocked work, needs nobody

Ranked. All of this can proceed while Rafa is unavailable.

1. **Citation pass** (baseline Pillar 3 item 4). Identical NAP across Bing
   Places, Apple Business Connect, Yelp, BBB, Facebook, Nextdoor, Data Axle,
   Foursquare, PSAI. ~20 clean citations beat 100 messy ones; skip bulk
   submission services. NAP to use exactly: RHC Site Services /
   503-607-7412 / https://rhcsiteservice.com. Agreed as the next task.
2. **Handwashing stations on the Portable Toilets page** (see GBP section).
3. **Internal-link cluster** (Pillar 2 item 3). Service hubs link to their three
   city pages; city pages link back to the hub, to sibling cities, and to
   same-city pages for other services.
4. **BreadcrumbList schema** on service and location pages (Pillar 1 item 5).
5. **First-100-words openings** (Pillar 2 item 2), answering who/what/where
   immediately, which is what AI Overviews cite.
6. **Speed** (Pillar 1 item 6): self-host the three Google Fonts, route-split
   the bundle, set explicit image dimensions. Note self-hosting fonts would also
   remove Google Fonts from the privacy policy's third-party list.
7. **Title audit** (Pillar 2 item 5): 51-60 chars, keyword and city front
   loaded. The homepage title is currently ~84 chars and Google will rewrite it.
8. **Mobile UX pass** (Shepard audit): Googlebot crawls this site as smartphone
   and quality raters evaluate 100% on mobile. Never performed.

## Next up after Phase 0

GEO playbook (framework queue item 2) was gated on prerendering and is now
unblocked. AEO Answer-Gap Desk stays parked until GSC has ~90 days of data.