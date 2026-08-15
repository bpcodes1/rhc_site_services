# SEO Execution Status

## Timeline: when this started, so progress can be judged against elapsed time

Dates verified from git history, not memory. Update the "days elapsed" column
by counting from 2026-07-28, the day measurement actually began.

| Date | Milestone | Why it is the anchor |
|---|---|---|
| 2026-05-19 | Repo created, site build began | Site age, not SEO age |
| 2026-07-24 | SEO work started (baseline research) | **SEO age** counts from here |
| 2026-07-27 | Prerendering shipped | The day the site became readable to crawlers |
| 2026-07-28 | GSC verified, sitemap submitted | **Measurement age** counts from here |
| 2026-07-28/29 | Indexing requested, 17 URLs | |
| 2026-08-06 | First GSC data: 0 clicks, 5 impressions | |
| 2026-08-15 | 1 click, 15 impressions, 17 of 19 indexed | Day 18 of measurement |

**Read Search Console's date filter carefully.** Its default is "28 days",
which is a REPORTING WINDOW, not our project age. On 2026-08-15 that window
reached back to ~July 18, before the property existed, so a third of it was
structurally empty. Quoting "15 impressions over 28 days" overstates the
elapsed time and understates the rate. The honest phrasing is "15 impressions
in the 18 days since the property started collecting."

### Scorecard at day 18 of measurement

- **Indexing: ahead of schedule.** 17 of 19 pages indexed in 18 days. The
  baseline's documented failure case for a client-rendered React site is 20 of
  198 pages indexed after SIX MONTHS. Prerendering is the reason.
- **Rankings: as expected.** Position 21.5 is what a domain with zero backlinks
  looks like. Nothing is broken.
- **Traffic: nothing yet, also as expected.** 15 impressions, 1 click.
- Realistic horizon for a new local domain is 3-6 months, and the two biggest
  levers (old-domain 301s, GBP verification) are both still unstarted.



Living tracker. SEO_BASELINE.md is the research reference (what to do and why).
This file is the state of play (what is done, what is next, who is blocking).
Update this file whenever a task moves. Last updated 2026-08-14.

## PHASE 0 IS NOT FINISHED (as of 2026-08-14)

Two open items. Neither blocks Phase 1 work; do not stall the queue waiting on
them.

- **Task 4 has a hole.** Indexing was requested for all URLs on 2026-07-28/29,
  but `/privacy-policy` and `/terms-of-service` were created 2026-08-06, after
  the fact, and have **never had indexing requested**. They are in the sitemap
  so Google will find them eventually. Two minutes in GSC closes this.
- **Task 6 (GBP) is staged, not live.** Rafa has still not recorded the video
  verification as of 2026-08-14. Every profile edit stays invisible until he
  does. He is working 16-hour days on wildfire response; this is a scheduling
  reality, not neglect.

Agreed approach: finish what needs nobody, leave the Rafa-gated items open, and
keep moving. Phase 0 stays open in this file until both are closed so it does
not silently get treated as complete.

## The one Google review is FAKE, and PLANTED. (provenance confirmed 2026-08-15)

The listing's single 5-star review, by "Muhammad Lhsan", was **written by Rafa's
previous web designer**, the same person who built the old rhcsiteservices.com
WordPress site and ran his SEO before Enrique. Enrique confirmed this
2026-08-15. The designer planted it to help the listing rank and win jobs. Rafa
was unhappy with that work, saw no leads from it, and hired Enrique to rebuild
the site and take over SEO.

CORRECTION, recorded so the wrong version does not get re-derived: an earlier
entry here guessed it was "another business of the same name in Texas, reviewed
by mistake", and the 2026-08-15 Slawski audit then classified it as an entity
disambiguation failure. **Both were wrong.** The Texas reference ("If you're in
need of site services in Texas, look no further") is simply a sloppy fake,
probably recycled from a template or another of the designer's clients. There
is no same-named Texas business involved and no entity collision.

Why the provenance matters, beyond accuracy:

- **It is a review procured on the business's behalf, by its own vendor.** That
  is the exact conduct the FTC's Rule on Consumer Reviews and Testimonials
  targets, and it violates Google's conflict-of-interest policy. Rafa did not
  write it and did not want it, but it sits on his listing.
- **The grounds for reporting it are now much stronger.** "Reviewer had a
  conflict of interest, written by a paid vendor" is a named Google policy
  violation. "It mentions Texas" was only circumstantial.
- **Still Rafa's call**, and still takes the listing to zero reviews. But the
  question changed from "is this worth cleaning up" to "is leaving a
  vendor-planted review on the listing an acceptable risk".

It must never be used as a testimonial. RHC has **zero usable reviews**, which
is why the review drip remains the slowest-compounding item on the plan.

ANSWERED 2026-08-15, and it is the good outcome: **Rafa holds the old domain's
logins, they are merely misplaced.** The previous designer does NOT control
rhcsiteservices.com. So domain consolidation stays a "Rafa digs out a password"
task rather than a registrar account-recovery fight with an unhappy former
vendor. That keeps the single highest-value item on the plan (~90% of four
years of accumulated signal) on the easy path. The Zoho MX warning still
stands: info@rhcsiteservices.com receives the lead form, so any migration must
preserve those records or lead notifications silently stop.

## START HERE: agreed work queue (set 2026-08-13)

Enrique approved this order and is willing to do his part on each. Work top
down. Items 1-3 need nobody and can be executed immediately.

This table is the authoritative order. The "Unblocked work" and "Phase 1" lists
further down are the earlier, superseded rankings of the same items; they are
kept for their reasoning, not their order.

| # | Task | Needs from Enrique | Status |
|---|------|--------------------|--------|
| 1 | Structured data on the 17 pages that have none | nothing | DONE 2026-08-14 |
| 2 | Explicit width/height on all images (CLS) | nothing | DONE 2026-08-14 |
| 3 | Self-host fonts (CLS/LCP) | nothing | DONE 2026-08-14 |
| 3b | Code-split the 797 KB bundle | nothing | still open |

### Tasks 2 and 3 result (2026-08-14): CLS is now 0.00 sitewide

Measured before and after with a real mobile viewport (390px, throttled to
slow 3G, cache disabled), because Googlebot crawls this site as a smartphone.

| Page | CLS before | CLS after |
|---|---|---|
| /storage-containers | 0.2964 **POOR** | 0.0000 |
| /shower-trailers | 0.1056 | 0.0000 |
| /portable-toilets | 0.0278 | 0.0087 |
| / | 0.0187 | 0.0000 |

All 19 routes now measure **0.0000**, verified live after deploy, against
Google's 0.1 "good" threshold.

**The 2026-08-13 audit was wrong about the cause, and this matters for how we
read future audits.** It said "23 of 23 sampled img tags have no width or
height. Direct CLS risk." The first half was true and the conclusion did not
follow. Blocking the font stylesheet took CLS to exactly 0.0000 while leaving
every image untouched, which proved fonts caused 100% of it. Most images sit in
containers that already reserve space via `aspect-ratio: 4 / 3`, so they never
shifted. Counting a defect is not the same as measuring its effect.

Images were not a total red herring: the four homepage step images had no
reserving container and did shift once the font problem was fixed. They are
fixed now, and every image carries explicit dimensions as insurance against a
future CSS change removing an `aspect-ratio`.

What was done:

1. **Fonts self-hosted** from /fonts: THREE variable woff2 files, latin subset,
   77 KB total, one per family covering every weight. The render-blocking
   third-party stylesheet and its two preconnects are gone from index.html. Do
   not reintroduce them.
   This shipped wrong the first time and the fix is worth remembering. Google's
   stylesheet lists the same file URL once per requested weight, because these
   are variable fonts. Saving one file per weight produced 9 files of which
   only 3 were unique, so a page using two weights of Public Sans downloaded
   identical bytes twice under two URLs. The tell was that every Archivo Narrow
   file was byte-for-byte 18724 bytes; identical sizes across different weights
   is not a coincidence. Verified after consolidating that the weight axis still
   works rather than assuming: the same string at 400/500/600/700 measures
   575.6/587.0/599.4/611.8px, so the weights are genuinely distinct.
2. **Metric-matched fallbacks** in src/fonts.css. Self-hosting alone only got
   CLS about 60% down, because the fallback still occupied different space than
   the real face. Archivo Narrow is condensed and sets at ~82% of Arial's
   width, which is why headings moved most. Each fallback is Arial re-scaled
   with size-adjust / ascent-override / descent-override so the swap moves
   nothing. Those numbers were measured against 20,000 characters of this
   site's own copy, not estimated; a short sample gives the wrong ratio.
3. **Two files preloaded** (Archivo Narrow, Public Sans), which covers every
   weight of both because they are variable. JetBrains Mono is not preloaded;
   it only sets small labels. Preloading more faces, then halving them again by
   consolidating, is what took the location pages from 0.10-0.24 to 0.0000.
4. **Explicit width/height on all 26 images**, read from the files themselves.
5. **Google Fonts removed from the privacy policy's third-party list**, which
   the baseline flagged as a side benefit. Cloudflare and jsDelivr remain.

Two measurement traps worth remembering, both of which produced confident wrong
answers before being caught:

- Measuring CLS with the HTTP cache enabled reports 0.0000 on genuinely broken
  markup, because images arrive before first paint.
- Chrome's `Page.addScriptToEvaluateOnNewDocument` ADDS a script per call. In a
  loop over URLs it stacks observers, so page N counts every shift N times.
  Inflated readings of 0.28 and 0.46 were artifacts of this, not real.
| 4 | Title audit and rewrites | approval, page by page (copy) | DONE 2026-08-15 |
| 5 | Contextual in-body internal links | anchor-text approval (copy) | |
| 6 | Citation pass | he does the submissions; prep the list for him | |
| 7 | Per-page social preview (og/twitter) tags | nothing | LAST, see below |

Item 7 added 2026-08-14 and deliberately placed last by Enrique. Every page
currently inherits the homepage's Open Graph tags from index.html, so sharing
any page in a text, WhatsApp, LinkedIn or Slack shows the homepage title,
homepage description and a homepage web address. Verified on production the
same day: /porta-potty-rental-seattle-wa has `<title>Porta Potty Rental
Seattle WA</title>` but `og:title` "RHC Site Services" and `og:url` the
homepage. It is a real, documented spec (ogp.me) honoured by Facebook,
LinkedIn, iMessage, WhatsApp, Slack and Discord, but it is NOT a Google
ranking factor and no audited framework lists it as an action. It affects how
shared links look, which is polish, not a ranking mover. Ordered accordingly.

### Task 1 result (2026-08-14)

All 19 pages now emit one `@graph` JSON-LD block, verified present and
parseable in the prerendered HTML, not just in the source. Everything derives
from `src/seo/schema.ts`, which is the single source of truth: the two rival
LocalBusiness blocks on About Us and Contact Us are gone, replaced by one
canonical node every page emits identically.

Decisions locked while building it, both Enrique's:

- **No postal address in any block.** RHC is a service-area business whose GBP
  is set to "No location; deliveries and home services only", so publishing an
  address would contradict the listing. `areaServed` carries the location
  signal instead. This also retires the old NAP conflict, where About Us said
  PO Box 9088, Brooks and Contact Us said Portland.
- **FAQPage markup on all 15 pages that have FAQs.** Google retired FAQ rich
  results for most sites in May 2026, so this buys no SERP real estate. It was
  added anyway because marked-up Q&A pairs are cited more by AI answer engines.
  SEO_BASELINE.md argues both sides (Pillar 1 item 5 says stop adding it,
  Pillar 2 item 6 says keep it); Pillar 2 wins.

Per page: LocalBusiness everywhere, plus Service and BreadcrumbList and
FAQPage on the 5 service and 9 location pages, WebPage and BreadcrumbList on
the 2 legal pages, AboutPage / ContactPage on those two. No `aggregateRating`
anywhere (disallowed for self-serving reviews since 2019, and RHC has none).
No price or `priceRange` anywhere, per the form-only pricing rule.

Three things fixed in passing:

- **The About Us job site photo.** 3.0 MB and 1824px wide, rendering in a box
  about 600px wide, so it shipped ~4x the pixels anyone could see and outweighed
  the entire JS bundle. Now 462 KB at 1200px, an 85% cut. Its container was also
  locked to `height: 500px`, which made the box landscape on desktop and cropped
  the top off a portrait photo while looking fine on mobile, where the collapsed
  column happens to match the photo's shape. The box now takes the photo's own
  1200x1522 ratio, so nothing crops at any width, and the image carries explicit
  width/height, which is the first piece of work-queue task 2.

- **Business hours were wrong on the live site.** Contact Us displayed Mon-Fri
  7am-6pm and promised weekend requests would wait for the next business
  morning. Rafa's confirmed hours are seven days. Copy and schema now both say
  Mon-Sun, 7 a.m.-6 p.m.
- **The homepage FAQ was hardcoded JSX**, unlike every other page. Lifted into
  a `homeFaqs` array so the visible section and the markup cannot drift.
  Rendered output verified byte-identical to before the refactor.

### Site audit measured 2026-08-13 (the numbers behind that order)

- **Structured data: only 2 of 19 pages have any.** About Us and Contact Us
  only. All 5 service pages, all 9 location pages, and the homepage have zero.
  Largest concrete gap on the site. Also note **two separate LocalBusiness
  blocks** exist across those two pages; the baseline calls for one canonical
  block, so consolidate while adding BreadcrumbList.
  CLOSED 2026-08-14, see "Task 1 result" above.
- **Titles: 10 of 19 outside the 51-60 target.** Homepage is 82 characters and
  Google will rewrite it. Service pages run 63-68. The two legal pages are
  short (34, 36) and matter least. The 9 location pages are mostly fine.
- **Internal links: better than assumed.** All 9 city pages are linked from
  every page through the header Service Areas menu, so nothing is orphaned.
  What is missing is contextual in-body links, which carry more weight than
  sitewide nav boilerplate. Real gap, but smaller than the baseline implies.
- **JS bundle: 797 KB in a single chunk**, no code splitting. CSS is 56 KB.
- **Fonts: the Google Fonts stylesheet is render-blocking from a third-party
  domain.** Self-hosting improves LCP and removes Google from the privacy
  policy's third-party list.
- **Images: 23 of 23 sampled img tags have no width or height.** Direct CLS
  risk, and CLS is one of the three Core Web Vitals.
- **Mobile UX pass: never performed.** Googlebot crawls this site as smartphone
  and quality raters evaluate on mobile only (Shepard audit).

### Still to pull from Enrique

Search Console **Performance at 28 days** and **Indexing > Pages**. Last read
2026-08-06: 5 impressions, 0 clicks, position 21.4, and the Pages report was
still "Processing data". By now Pages should show how many of the 19 are
actually indexed, which is the real check-in metric.

### Task 4 result (2026-08-15): six titles, not nineteen

Audited against the 51-60 target by reading the PRERENDERED html, so the audit
covered what Google receives. 10 of 19 were off target, but only 6 were worth
touching, and the cause was one systemic thing rather than 19 separate ones:
`| RHC Site Services` costs 20 characters, a third of the budget, on a brand
with essentially zero search volume (the only brand query in 28 days was
"rhtc", a typo, at 1 impression).

Decision locked by Enrique: short `| RHC` where length is the constraint, full
name kept on the homepage, About and Contact. Applied to the homepage and the
5 service pages only.

| Page | Was | Now |
|---|---|---|
| / | 82 | 60 |
| /portable-toilets | 66 | 52 |
| /restroom-trailers | 63 | 53 |
| /temporary-fencing | 64 | 53 |
| /storage-containers | 68 | 54 |
| /shower-trailers | 65 | 51 |

**The 9 location pages and 2 legal pages were deliberately left alone.** They
already fit at 49-59 WITH the full brand. Switching them to `| RHC` would have
freed 14 characters they do not need and pushed them under target, and filling
that space by stacking synonyms ("Porta Potty & Portable Toilet Rental in
Bend") is the visible optimization Shepard's data ties to the losing bucket.
Rewriting a working title to hit a number is motion, not improvement.

Each service title is now EXACTLY its own H1 plus ` | RHC`. Title/H1 alignment
is the documented defence against Google rewriting a title, and it rewrote ~76%
of them in 2025.

UNVERIFIABLE, stated plainly: whether "porta potty" or "portable toilet" draws
more searches. There is no keyword tool here and GSC has 15 impressions total,
so any volume figure would be invented. The homepage was therefore NOT pointed
at "Porta Potty Rental", on a structural argument instead: /portable-toilets
already targets that idea, and two pages competing for one query splits the
signal. Revisit once GSC has real query data.

STILL OPEN, not part of task 4: **11 of 19 meta descriptions exceed 160
characters** and are being truncated mid-sentence in results. Contact Us is 199.
That is the line under the title in Google, so it does real work on
click-through. Needs Enrique's approval; it is copy.

## Phase 0: Foundations

| # | Task | Status | Blocked on |
|---|------|--------|-----------|
| 1 | 301 www to apex redirect | DONE 2026-07-27 | |
| 2 | Google Search Console Domain property + sitemap | DONE 2026-07-28 | |
| 3 | Prerender 17 routes + real 404s | DONE 2026-07-27 | |
| 4 | Request Indexing | 17 of 19 done 7-28/29; the 2 legal pages never requested | |
| 5 | Trust and legal pages | DONE 2026-08-06 | |
| 6 | Google Business Profile | STAGED 2026-08-07, still not verified as of 8-14 | Rafa (video verification) |

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
- The listing already has **1 review, rated 5.0**. RESOLVED 2026-08-14: it is
  FAKE and unusable, see the section near the top of this file. RHC still has
  zero usable reviews.

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

**The 1 existing Google review was read on 2026-08-14 and is FAKE.** See the
section at the top of this file. It can never be used in a TESTIMONIAL SLOT,
and RHC still has zero usable reviews.

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
3. ANSWERED 2026-08-14: **business hours are 7:00am to 6:00pm, every day.**
   Rafa confirmed. An earlier version of this line said 8:00am to 7:00pm; that
   was a typo, corrected by Enrique the same day. Set 7-6 seven days on the GBP
   (it publishes with everything else once he verifies) and replace the current
   "Open 24 hours". The site now states the same hours in copy and in schema.
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

SUPERSEDED as an ordering by the agreed work queue at the top of this file,
which Enrique approved on 2026-08-13. Kept for the reasoning on each item.
Item 4 (BreadcrumbList schema) is DONE as of 2026-08-14.

The subset of Phase 1 that can proceed while Rafa is unavailable. Ranked.

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

## Phase 1: Authority and On-Page (defined 2026-08-07, reordered 2026-08-13)

Phase 1 had never been defined; only Phase 0 existed. This was built entirely
from items already in SEO_BASELINE.md, not new strategy.

ORDERING SUPERSEDED: Enrique approved the six-item work queue at the top of
this file on 2026-08-13, and that is what to work from. The list below stays as
the full scope of the phase and the reasoning behind each item. Item 6
(BreadcrumbList schema) is DONE as of 2026-08-14.

The logic of the split: Phase 0 made the site technically readable and
trustworthy. It did not give Google a reason to rank it. First GSC data on
2026-08-06 proved that exactly: 5 impressions, 0 clicks, average position 21.4,
a technically perfect site with zero authority. Phase 1 is about earning the
authority, plus the on-page work that converts authority into rankings.

Highest leverage first:

1. **Domain consolidation** (Pillar 3 item 2). Page-level 301s from
   rhcsiteservices.com, Change of Address in GSC, keep redirects permanent.
   Worth ~90% of four years of accumulated signal, more than everything else in
   this phase combined. NEEDS RAFA (Namecheap login). Preserve the Zoho MX
   records or the lead form's email delivery silently breaks.
2. **GBP video verification** (finishes Phase 0 task 6). NEEDS RAFA. Until this
   happens, every profile edit staged on 2026-08-07 stays invisible.
3. **Citation pass** (Pillar 3 item 4). Needs nobody. Agreed as the next task.
4. **Review drip started** (Pillar 3 item 3). NEEDS RAFA. Slowest-compounding
   item on the whole plan, so the start date matters more than the effort.
5. **Internal-link cluster** (Pillar 2 item 3). Needs nobody.
6. **BreadcrumbList schema** (Pillar 1 item 5). Needs nobody.
7. **First-100-words openings** (Pillar 2 item 2). Needs nobody.
8. **Title audit** (Pillar 2 item 5). Needs nobody. Homepage title is ~84 chars.
9. **Speed / CWV** (Pillar 1 item 6). Needs nobody. Self-hosting fonts also
   removes Google Fonts from the privacy policy's third-party list.
10. **Mobile UX pass** (Shepard audit). Needs nobody. Never performed, and
    Googlebot crawls this site as smartphone.
11. **First 10-15 links** (Pillar 3 item 5): chambers of commerce, event
    sponsorships, PSAI membership. Partly needs Rafa.
12. **Monthly tracking routine** (Pillar 3 item 6). Start it during Phase 1 so
    there is a baseline to measure Phase 2 against.

Phase 1 exit condition: a meaningful share of the 19 pages indexed and holding
positions, real reviews accumulating, and the old domain consolidated.

## Phase 2: Expansion and AI Search (SKETCH)

Do not start until Phase 1 has produced real GSC data to steer by.

- **GEO playbook execution** (framework queue item 2). Gate lifted 2026-07-27
  now that prerendering ships; still sequenced after Phase 1 because optimizing
  for AI citation works better on pages that already rank.
- **AEO Answer-Gap Desk** (framework queue item 3). Needs ~90 days of GSC data.
- **"What changes the price" sections** (Pillar 2 item 4).
- **Additional city pages**, one at a time with real local research, staying
  under the ~15-20 total cap (Pillar 2 item 9). Currently 9.
- **Real photos** replacing stock (Pillar 2 item 8). Needs Rafa.
- **Blog**: still out of scope. Revisit only as a deliberate, quality-controlled
  decision, never as scaled AI content.
