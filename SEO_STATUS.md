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
| 2026-08-20 | 1 click, 19 impressions, position 22.4 | Day 23. First-100-words rewrite shipped |

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
Update this file whenever a task moves. Last updated 2026-08-22.

### Reading at day 23 (2026-08-20)

1 click, 19 impressions, position 22.4. **The impression rate is exactly flat:**
0.83/day at day 18, 0.83/day at day 23. Position moving 21.5 to 22.4 is noise at
this volume, not a decline. Nothing shipped on 08-14/15 had time to register;
the data ends 08-18.

The finding worth acting on: **15 of 19 pages drew zero impressions.** The
homepage carries 14 of the 19. Only four pages have been shown at all.

Of the four queries GSC will display, three are narrow and specific, and each
maps to real content, verified in the source:

| Query | Clicks | Maps to |
|---|---|---|
| portable toilet cleaning service | **1** | homepage |
| wac 246-215 | 0 | Seattle porta potty page's King County handwashing section |
| event barricade rental portland | 0 | Portland fencing page's barricade section |
| rhtc | 0 | brand typo |

**That table accounts for 4 of 19 impressions.** The other 15 are suppressed by
Google as too rare to display, so we are reading 21% of the picture. Do not
treat the visible four as the whole.

This is the same result the AI visibility run gave on 08-15, now showing up in
ordinary Google: the narrow regulation-and-permit content is the only non-brand
thing surfacing. Not the sales copy.

## PHASE 0: one item left, and it is Rafa (as of 2026-08-15)

One open item. It does not block Phase 1 work; do not stall the queue waiting on
it.

- ~~Task 4 has a hole.~~ **CLOSED 2026-08-15.** Enrique requested indexing for
  `/privacy-policy` and `/terms-of-service`, which were created 2026-08-06 and
  had been missed by the original 2026-07-28/29 pass. All 19 URLs have now had
  indexing requested. Watch Page Indexing over the next week or two: it read 17
  indexed / 3 "page with redirect" on 2026-08-15. **CONFIRMED 2026-08-21 via
  the URL Inspection API**: those 3 are the http, http-www and https-www
  variants, all returning "Page with redirect". Working as designed, nothing
  to fix. See the Indexing > Pages section below.
- **Task 6 (GBP) is staged, not live.** Rafa has still not recorded the video
  verification as of 2026-08-15. Every profile edit stays invisible until he
  does. This is now the ONLY thing standing between the site and a finished
  Phase 0. He is working 16-hour days on wildfire response; this is a scheduling
  reality, not neglect.

Agreed approach: finish what needs nobody, leave the Rafa-gated item open, and
keep moving. Phase 0 stays open in this file until it is closed so it does not
silently get treated as complete.

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

## START HERE: current work queue (reordered 2026-08-15 on measured evidence)

Work top down. The original order was set 2026-08-13 from an audit; it has been
reordered twice since, both times because measurement contradicted an
assumption. Reasoning for every completed item is in the result sections below.

### Done

| # | Task | Result |
|---|------|--------|
| 1 | Structured data on all 19 pages | DONE 2026-08-14. One @graph per page, all from src/seo/schema.ts |
| 2 | Explicit width/height on all images | DONE 2026-08-14. Insurance, not the CLS fix; see the result section |
| 3 | Self-host fonts | DONE 2026-08-14. This WAS the CLS fix: 0.2964 to 0.0000 sitewide |
| 4 | Title audit | DONE 2026-08-15. Six titles, not nineteen |
| -- | Remove unverified Portland HQ claim | DONE 2026-08-15. Copy, map pin, hq badges, schema |
| -- | Correct false OSHA one-per-20 claim | DONE 2026-08-15. Seven pages plus the project rule |
| -- | AI visibility baseline, 8 queries x 3 engines | DONE 2026-08-15. See AI_VISIBILITY_BASELINE.md |
| 5 | First-100-words direct answers | DONE 2026-08-20. 17 pages, verified live. See the result section |
| 6 | Entity fixes: Person markup, sameAs | DONE 2026-08-20. Verified live on all 19. See the result section |
| 7 | Rewrite 11 meta descriptions over 160 chars | DONE 2026-08-20. 0 of 19 now over. See the result section |
| -- | Replace the placeholder favicon | DONE 2026-08-20. RHC's own R on brand navy, measured legible at 16px |
| 8 | Contextual in-body internal links | DONE 2026-08-21. 9 hub-to-city links, verified live. See the result section |
| -- | Search Console MCP | DONE 2026-08-21. Settled the redirect question; found /terms-of-service uncrawled |

### Next, in order

| # | Task | Needs from Enrique | Why here |
|---|------|--------------------|----------|
| 9 | Citation pass, ~20 submissions | **IN PROGRESS 2026-08-22.** Research done, address locked (Brooks), tracker in CITATIONS.md. He submits 14 now; 4 syndicators held until Rafa confirms the address is long-term | The authority bottleneck. Measured: RHC has 1 referring domain against 49 to 631 for the five local competitors |
| 10 | Handwashing stations on the Portable Toilets page | nothing | GBP advertises it; the site never mentions it. Seattle and Portland pages establish the requirement and never offer the solution |
| 11 | Mobile UX pass on all 19 pages | nothing | Shepard: raters evaluate 100% on mobile. Never performed |
| 12 | Code-split the ~800 KB bundle | nothing | Last open speed item |
| 13 | Per-page social preview (og/twitter) tags | nothing | LAST by Enrique's call. Real but not a ranking factor |

### Decisions parked, with their trigger

- **Salem location pages.** Evidence supports building them next among city
  pages: RHC surfaced only for the Salem query, every machine-readable address
  points to Brooks (a Salem ZIP), the pin is 8 mi from Salem against 35 from
  Portland so it is the only city where the map pack is reachable, and
  salem_hero.webp already sits unused in the repo. PARKED 2026-08-15 by Enrique:
  the ChatGPT mention traces to the Google listing, which still points at the
  OLD website, so the picture changes once the listing is verified and updated.
  Revisit after GBP verification.
- **"Portland, OR" in the About Us and Contact Us titles and eyebrows.** Left
  deliberately when the HQ claim was removed. They read as market served rather
  than headquarters, and rewriting them would redo the title work twice since
  both would fall under the 51-char target. Revisit when Rafa answers where he
  actually operates.

### Task 9 progress (2026-08-22): research done, submissions with Enrique

Full detail, the NAP block, the checked description, the evidence tables and
the tracker are in **CITATIONS.md**. What belongs here is what changed the
picture:

- **RHC has essentially zero citations to clean up.** The old domain's 38
  referring domains are category scrapers that link to every competitor too;
  remove them and one scraped Maps listing remains. Four years of the old site
  produced no real listings, so this pass is creation, not cleanup.
- **Consequence for "Waiting on Rafa" item 1:** the old-domain 301 carries
  almost no LINK equity. It stays first for entity continuity and because the
  Google listing points there, but stop reading "four years of accumulated
  signal" as backlinks. Measured, not inferred.
- **The authority gap is closable at the bottom.** Willy Make It ranks in
  Portland on 49 referring domains; Oregon Portable Toilets on 58. Honey
  Bucket's 631 is not the target.
- **The link data added a vertical set the baseline did not have:**
  portapottyrentalguide.com (all 5 competitors), portapottymatch.com (4 of
  5), pottydirectory.com, The Blue Book ProView, plus the Thryv network
  (yellowpages / dexknows / superpages) which 4 to 5 of 5 sit in.
- **PSAI dropped from the citation list.** Its member directory is behind a
  login, so it is not a public citation. Paid membership is a separate
  credibility decision for Rafa.
- **A decision the site never had to make, and it is made:** directories
  require an address. Enrique locked the GBP-verified 8792 Portland Rd NE,
  Brooks (Rafa gave it to him) as a hidden service-area address, 2026-08-22.
  14 directly-controlled listings go in now; the four syndicating aggregators
  (Data Axle, Foursquare, YP/Thryv, D&B) are HELD until he confirms with Rafa
  that Brooks is long-term. **This changes nothing on the website**, which
  stays address-free; see CITATIONS.md section 0.
- **The scraped listing on portablerestroom.net** shows what every scraper
  currently says about RHC: old domain, "open 24 hours", the keyword-stuffed
  description, and the Brooks street address in full. It is the preview of
  why the GBP verification matters beyond Google.
- Yelp, BBB, Facebook, Apple, Bing and Nextdoor do not appear in ANY
  competitor's backlink data, and the search results show the competitors
  are on them. Backlink indexes do not see those platforms' outbound links.
  Do not read their absence as evidence against them.

### Keyword volume measured (2026-08-22): the porta potty vs portable toilet question

Google Ads search volume, Oregon and Washington, 73 keywords, $0.18. The
question had been open since the 2026-08-15 title audit.

**Google treats "porta potty rental", "portable toilet rental", "portable
restroom rental" and "porta john rental" as ONE keyword group.** All four
return identical numbers: 2,400/month Oregon, 2,900 Washington, the same CPC
($11.45). That is Google Ads' documented close-variant grouping, and it means
the rental-phrase question has no answer because Google does not see a
difference. Titles do not split traffic by choosing one or the other. **No
rewrite is warranted.**

At the bare-noun level Google does separate them, and **"porta potty" beats
"portable toilet" about 1.8 to 1**: 1,300 vs 720 in Oregon, 2,400 vs 1,300 in
Washington. "Porta potty" is the word people use; "portable toilet" is the
word companies use. Mild support for "porta potty" in user-facing copy where
it reads naturally. A finding, not a title change.

**"Honey bucket" is a generic term in this market**: 720/month Oregon, 2,400
Washington, equal to "porta potty" in Washington. Mostly navigational (the
company), CPC $2.70. Nothing to do with it except know it when reading
competitor data.

**Where the volume actually is**, Oregon per month: unqualified rental phrase
2,400; "near me" 590; cost/price phrasing 480 ("porta potty rental cost",
"prices" and "portable toilet rental cost" are also merged); city-qualified
terms 40 to 110 each (Portland 110, Salem 50, Bend 50, Eugene 40; in
Washington Seattle 70, Vancouver 40, Tacoma 30; Gresham returns no data).
Three consequences:

- **The unqualified and "near me" queries are map-pack queries.** That is
  ~3,000/month in Oregon that the Google listing answers and the website
  mostly does not. It is the measured reason the GBP verification is the
  biggest lever left, and why proximity (Salem reachable, Portland 35 mi)
  matters so much.
- **City pages target tens of searches a month each.** 40 to 110 is the
  ceiling for a city page, and it is expected; they are organic plays
  because the map pack is out of reach there. Do not read low impressions on
  a city page as failure.
- **Cost queries are 20% of the head term** (480 vs 2,400). Evidence for
  Pillar 2 item 4, the "what changes the price" sections, which satisfy cost
  intent without publishing prices.

Other services, Oregon / Washington: storage container rental 140 / 210 (CPC
$23, the most expensive click on the site), restroom trailer rental 70 / 140,
temporary fence(ing) rental 40 / 50 (merged), shower trailer rental 20 / 20,
handwashing station rental 10 / 10. Task 10 stands on GBP consistency, not
volume.

**Seasonality:** "porta potty rental" in Oregon peaked at 3,600 in October
2025 and bottomed at 1,300 in February 2026, a 2.8x swing. August to October
is the high season. Read GSC month over month against that curve, not flat.

Caveat: Google Ads volumes are rounded buckets (10, 20, 30, 40, 50, 70, 90,
110, 140, 170, 210, 260, 320, 390, 480, 590, 720, 880, 1,000, 1,300, 1,600,
1,900, 2,400, 2,900, 3,600), so "50 vs 40" is not a real difference. The
1.8x is.

### Task 8 result (2026-08-21): the link graph only ran one direction

All 9 city pages linked UP to their service hub. **Not one of the 5 hubs linked
down to any city page.** The 8-city grid on each hub looks like it would, but
every tag points at `#quote` on the same page.

**Scope was cut deliberately. Do not re-litigate it without new evidence.** The
baseline calls for three link types; Roof and Slawski agree on only one:

| Link type | Roof (Virtual Silo) | Slawski (Reasonable Surfer) | Built? |
|---|---|---|---|
| Hub to its 3 city pages | endorses, completes the circuit | endorses, high click probability | **YES, 9 links** |
| City to sibling cities | endorses, within-silo sequential | **penalises**, a Bend searcher never clicks Seattle | no |
| City to same-city other services | **forbids**, cross-category dilution | mildly positive | no |

The two frameworks contradict each other in OPPOSITE directions on the two
that were cut, and both are the lower-value types. When evidence splits that
sharply, build only the agreed set.

The city grid was left pointing at `#quote` rather than repointed. Only 3 of
the 8 cities have pages, so a mixed grid would behave unpredictably, and prose
is what Reasonable Surfer actually rewards. Prose also allows real anchor text:
**all 9 anchors are distinct**, each carries the keyword or a variation plus a
city, and each describes what is genuinely on the target page. Three identical
anchors per page would be the visible-optimisation pattern Shepard ties to the
losing bucket.

**The CSS fix is the important half, and it is the lesson.** The global reset
sets `a { color: inherit; text-decoration: none }`, so the new links rendered
**invisible**: same colour as body text, no underline. The build passed. The
markup checks passed. Only the screenshot caught it.

That is not cosmetic. Contextual links beat nav links **only because they get
clicked**, so a link that does not look clickable fails the exact framework
that justified the task. They now use the site's existing convention,
`var(--secondary)` at weight 600, plus an underline. Measured 5.84:1 against
the block background (passes AA); colour alone against body text is 1.44:1,
under the 3:1 that colour-only cues require, so **the underline is
load-bearing, not decorative.** Scoped to `.area-foot p a`, which matches only
these nine.

### AI crawler access CONFIRMED unblocked (2026-08-20)

Checked because the shared rules in `../CLAUDE.md` warn that "Cloudflare
prepends a managed block that disallows AI crawlers. Check the dashboard, not
the repo." **On this site it does not.** The live robots.txt is byte-identical
to `public/robots.txt`: `User-agent: * / Allow: /` plus the sitemap line.

robots.txt is only permission, and Cloudflare can also block bots at the
network layer where robots.txt shows nothing. So each crawler was fetched
directly against `/porta-potty-rental-seattle-wa`:

GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended,
meta-externalagent and Googlebot **all returned HTTP 200 with an identical
53,035 bytes**. Nothing blocked, nothing served a degraded or truncated
version.

This matters for the 2026-09-19 AI re-run: a flat result there will mean the
content did not earn a citation, NOT that the crawlers never saw the site.
That ambiguity is now removed. Re-check this if the AI re-run comes back
completely flat, since Cloudflare bot settings can change without a deploy.

**`/llms.txt` returns 404.** Deliberately not added. Adoption is real but no
major provider has confirmed using it, and Google has said it does not. It is
cheap and harmless, so it is a fine low-priority experiment, but it should
never be logged as a fix or expected to move anything.

### Task 7 result (2026-08-20): 0 of 19 descriptions over 160, was 11

**Roof settles the premise, and it is the part worth not re-deriving.** His
profile lists the weighted page sections and then states plainly: *"Meta
description and meta keyword do not index."* The field carries **zero ranking
weight**. It is a click-through play and nothing else.

That matters because the first draft of this task was WRONG, and the instinct
that produced it is the obvious one. Those drafts front-loaded product keywords
in every description. The sole reason to front-load keywords is ranking, and
Roof says there is no ranking here. Enrique caught it by asking whether the
rewrites had actually been run past the frameworks. They had not.

Three more frameworks convicted the same structure:

- **Wiebe.** Her Supporting Frameworks name front-loading explicitly, and the
  So What sweep asks whether a line gives what the reader GETS or what we HAVE.
  Product list first, differentiator last, and **truncation cuts from the end**:
  the only persuasive part sat exactly where it gets cut.
- **Schwartz.** Someone scanning a results page is Solution or Product Aware,
  comparing ten near-identical snippets. Stage 3-4 sophistication, where the
  rule is to penalise an old claim phrased plainly. "Porta potty rentals for
  construction sites and events" is what every competitor writes.
- **Hormozi.** "No outcome communicated at all. Only product/service
  description. The offer is a listing, not an offer."

**Every description now leads with the mechanism and follows with the category.**
This is the same conclusion task 5 reached by a different route, which is some
evidence the principle is real rather than fitted to one case.

The homepage was the only one where truncation damaged MEANING rather than
clipping a tail: it ended "Hard delivery windows. No surprise", with "fees" cut.

Two things deliberately not done:

- **`Service.description` in the schema still holds the old text** on the pages
  that duplicated it. Meta description and Service.description are different
  fields with different jobs, and only the meta tag was approved for change. If
  they should match, that is a separate decision.
- **"OSHA-compliant panels"** is gone from the fencing description but **still
  in that page's body**. OSHA does not certify fence panels; there is no such
  product attribute. This is weaker than the 1-per-20 error, which stated a
  wrong number as law, but it is the same family. Left open, not folded in
  silently. "OSHA-compliant sanitation" on the porta potty pages IS defensible,
  since 1926.51 does set job-site sanitation requirements.

**Calibration, so this is not over-read later:** Google truncates by PIXEL
WIDTH, roughly 920px desktop and 680px mobile, not by character count, and it
rewrites descriptions most of the time regardless. 160 is a proxy. Worth doing
because it is cheap and permanent, not because it moves rankings.

### Task 6 result (2026-08-20): Rafa is an entity, and the Google link is stable

**The Google Maps `sameAs` was a SHARE link, not an identifier.** It carried
`entry=ttu` and `g_ep=EgoyMDI2MDYwMy4x...`, parameters generated per share that
say nothing durable about the listing. Replaced with the CID form,
`https://maps.google.com/?cid=5264847313884870398`, decoded from the hex
embedded in that same URL (`0x49107ebcd4c6f6fe`). Verified it resolves.
`hasMap` now points at that same permanent id rather than introducing a second
different URL for one listing.

**`founder` was a bare inline name.** A name with no `@id` and no links is a
string, not an entity: nothing connected Rafa to the business or to the page
describing him. He is now an addressable node with `@id`, a `url` pointing at
About Us, and `worksFor` referencing the business. It stays INLINE inside
`business` rather than becoming a separate graph node, which is why it shipped
to all 19 pages with zero per-page edits. Do not "improve" this by lifting it
into its own node; that would mean editing every page and gains nothing.

`knowsAbout` is grounded in what About Us actually states. Not invented
expertise.

**Three keys are deliberately absent. Do not complete them by guessing:**

- **`jobTitle`.** "Founder" is what the site already claims and About Us
  supports. Owner vs founder is unconfirmed.
- **Person `sameAs` and `image`.** Enrique confirmed 2026-08-20 that Rafa has
  no public profile to link, and his photo is still an open About Us TODO. An
  empty array is worse than an absent key.
- **`logo`.** See the favicon finding below.

**Business `sameAs` stays at two entries because two is what exists**, confirmed
by Enrique 2026-08-20: the Google listing and Facebook. It should grow after the
citation pass (task 9) creates real listings. **Tasks 6 and 9 are the same work
seen twice**; expect to revisit `sameAs` once, after 9, and do not treat that as
rework.

Verified by parsing the JSON-LD on all 19 LIVE pages, not the source.

Cache note, because it produced a false alarm: two pages reported the Person
node missing on the first live check and were fine minutes later. Cloudflare
caches per path, so routes go live at different times. The tell that it was
stale rather than broken: the OLD build's founder had no `@id`, which is
exactly what the check reported.

### The favicon (found and FIXED 2026-08-20)

`public/favicon.svg` was a single path filled `#863bff`, a purple appearing in
no other file on the site. Google renders favicons beside mobile search
results, and this site is crawled as a smartphone, so RHC's only visual in a
mobile result was an unrelated mark.

**The mark is RHC's own R, taken from rhcsiteservices.com**, which is Rafa's
own site. Both assets live there and are worth knowing about:
`wp-content/uploads/2024/09/icon-RHC.png` (the R) and
`wp-content/uploads/2024/03/logo-2.png` (the full lockup, 637x235).

**It could NOT be used as-is, and this is the part to remember.** The mark is
white and silver, built for a dark background. Measured against a white browser
tab it is **1.19:1**, where 3:1 is the floor for a graphic to be perceivable.
Dropping it in unchanged would have traded a wrong-brand icon for a near-blank
white square. On the brand navy it measures 19:1 at 32px. Verified legible at
16px, not assumed.

PNG rather than SVG: the source is raster, so an SVG wrapper adds ~45KB and no
scaling benefit. Sizes are multiples of 48, which is what Google's favicon
guidance asks for. `favicon.svg` was DELETED rather than left in place, because
a stale icon file that is still referenced anywhere wins.

**Still open:** the business node in `src/seo/schema.ts` has `image` but no
`logo`. `logo-2.png` above is the full lockup and could serve, but it has the
same white-on-white problem and would need the same treatment. Not urgent.

### Task 5 result (2026-08-20): 17 pages answer who, what and where up front

**The defect was never the headings.** Breadcrumb, eyebrow and H1 already carried
the keyword and the city on every page. What was missing was a complete SENTENCE
an answer engine could lift whole. Headings give a machine keywords; prose gives
it something to quote.

The clearest case was the Seattle porta potty page. Its 44-word opening paragraph
contained no product noun and no city, and the only place name in it was
"Oregon", on a Seattle page.

**The pattern, settled on Seattle and applied to the other 16:** keep the existing
mechanism or struggling-moment sentence FIRST, then fold "who rents what, where,
for whom" into the sentence that already names RHC. **Answer second, not first.**

That ordering is not a style preference, and it is the part worth not
re-deriving wrongly. Putting the plain answer first failed three of the five
framework profiles:

- **Schwartz:** a visitor searching "porta potty rental seattle wa" is Solution
  Aware. Spending sentence one telling them what a porta potty company does is a
  wasted sentence, and in a Stage 3-4 saturated market a plainly phrased category
  claim is the definition of stale.
- **Hormozi:** "rents portable toilets to construction sites" states the vehicle,
  not the destination. His named red flag is "a listing, not an offer."
- **Christensen:** it segments by category instead of by the struggling moment.
- **Roof** caught a fourth, separate problem: leading with "portable toilets"
  pushed the exact term the URL, title and H1 all target out of the prime body
  position. Not a volume claim, an internal consistency one. We still cannot
  verify whether "porta potty" or "portable toilet" draws more searches.

**Merging the answer into the existing RHC sentence LOWERED brand density rather
than raising it.** Every page now names RHC once in its opening. Several carried
two before. Wiebe's cap is one to two.

About Us and Contact Us needed one further fix, worth recording because it will
recur on any page whose H1 contains the brand: their eyebrow and H1 both already
say "RHC Site Services", so an answer-first sentence stacked the same three words
three times back to back. Both now lead with their original line and carry the
answer second, like every other page.

Verified in the PRERENDERED HTML and then again on the LIVE domain, not in the
source: 19 of 19 routes return 200, and 17 of 17 in-scope pages carry who, what
and where inside the first 100 words of `<main>`. Rendering checked at 375 and
768 with real device metrics (`Emulation.setDeviceMetricsOverride`, not
`--window-size`) on all three page templates and on the largest paragraph
growth: no overflow, no collision, CTA visible at every width.

The two legal pages are deliberately out of scope. A privacy policy does not need
a direct-answer opening. Scope was 17 pages, not 19.

Measurement note for the next AI run: **the first 100 words are counted from the
start of `<main>`, not from the top of the HTML.** The header nav renders twice
(desktop plus mobile drawer) and consumes 89 to 102 words before the H1 on every
page. That looked alarming and is not, because `<main id="main">` ships on every
page and is the standard boundary extractors use. Do not "fix" the nav on this
reasoning.

Two known gaps left open, both flagged and neither acted on:

- **"Most vendors quote the Oregon standard on Washington jobs"** is a quantified
  claim about third parties with no source. It fails Wiebe's Prove It sweep. It
  predates this work, survives unchanged on the Seattle page, and cutting it
  changes the hook itself, so it is a separate copy decision.
- **"Deluxe" is advertised sitewide and described nowhere.** CORRECTED
  2026-08-21: an earlier note here called it a stray word on the Seattle page.
  It is not. It appears in SIX files: the LeadForm dropdown, the homepage, and
  the Bend, Portland and Seattle porta potty pages, including **H2 headings** on
  Bend and Portland, and a Portland FAQ making a specific product claim, that
  "Deluxe units include a built-in fresh-water handwash station."

  **No page has a Deluxe product card.** Standard, ADA and High-Rise each have
  one; Deluxe has none. So this is almost certainly a real tier missing its
  write-up rather than a false claim, which is the opposite of the earlier read.

  **This is the same gap as queue task 10.** Task 10 exists because the Google
  listing advertises handwashing stations the site never mentions. The Portland
  FAQ says Deluxe units carry a built-in handwash station. Writing the Deluxe
  product card and closing the handwashing gap are one job, not two. Confirm the
  spec with Rafa before publishing either.

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

### Task 7 note (added 2026-08-14, deliberately placed LAST)

Item 7 was added 2026-08-14 and deliberately placed last by Enrique. Every page
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

All four screens were read 2026-08-20. Performance is recorded at the top of
this file. The other three:

**Indexing > Pages (data through 08-16): 18 indexed, up from 17.** All 3
not-indexed sit under one reason, "Page with redirect", source Website.

**SETTLED 2026-08-21 via the URL Inspection API, not by guessing.** All three
were inspected directly and every one returns `coverageState: "Page with
redirect"`:

- `http://rhcsiteservice.com/`
- `http://www.rhcsiteservice.com/`
- `https://www.rhcsiteservice.com/`

That is the entire Not Indexed bucket. They are the protocol and host variants
a Domain property also tracks, and it is the www-to-apex redirect working as
designed. **Nothing to fix. Close this permanently.**

Do NOT click "Validate Fix" on that row. "Validation: Not Started" is GSC's
fix-verification workflow, started only after fixing something. An expected
redirect needs no validation, and starting one on a non-problem just creates a
failing validation record.

### /terms-of-service has NEVER been crawled (found 2026-08-21)

The 18-against-19 gap resolved to one specific page. All 19 real URLs were
inspected; 18 return `PASS / Submitted and indexed`. One does not:

**`/terms-of-service` returns `URL is unknown to Google`, last crawl `never`.**

It is not a technical fault. Checked and all identical to /privacy-policy,
which IS indexed:

| | /privacy-policy | /terms-of-service |
|---|---|---|
| In sitemap.xml | yes | yes |
| Live HTTP | 200 | 200 |
| Self-canonical | correct | correct |
| robots meta / X-Robots-Tag | none | none |
| Internal links | 1, sitewide footer | 1, sitewide footer |
| Last crawl | 2026-08-15 | **never** |

Both were requested for indexing on 2026-08-15 per the Phase 0 notes, and
privacy-policy was crawled that same day. The most likely explanation is that
**the indexing request for /terms-of-service never actually submitted.**

ACTION DONE 2026-08-21: Enrique re-requested indexing for that URL. It could
not be done through the API; the Indexing API only covers job postings and
livestreams. **Re-inspect it in about a week.** If it still reads "URL is
unknown to Google", the cause is not a missed request and needs a real
diagnosis.

Worth noting how this was found: the Pages report says "18 indexed" and gives
no way to see WHICH one is missing without clicking through. Per-URL inspection
answered it in about thirty seconds.

**Enhancements > Breadcrumbs (08-18): 0 invalid, 1 valid.** The 0 is the
confirmation that mattered: the BreadcrumbList markup shipped 08-14 parses.
The 1 is low against the 16 pages carrying it, but the chart shows it only
began registering 08-14 to 08-18, so Google is working through them. **Re-check
around 2026-09-10. If it is still 1, that IS a signal.**

**Experience > Core Web Vitals (08-18): "not enough usage data", both devices.**
Exactly as predicted. CrUX needs real user traffic and there is none at 1 click
in 23 days. The lab measurement of 0.0000 CLS stands as the only evidence,
which is correct and sufficient. **This will stay empty until traffic exists.
It is not a to-do and should not be chased.**

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

~~UNVERIFIABLE, stated plainly: whether "porta potty" or "portable toilet" draws
more searches.~~ **MEASURED 2026-08-22**, see "Keyword volume measured" above:
Google groups the two rental phrases as one keyword, so the titles were never
splitting anything; at the noun level "porta potty" wins 1.8 to 1. The
structural argument below still holds and no title changes. Original note:
there was no keyword tool here and GSC had 15 impressions total, so the
homepage was NOT pointed at "Porta Potty Rental"; /portable-toilets already
targets that idea, and two pages competing for one query splits the signal.

~~STILL OPEN, not part of task 4: 11 of 19 meta descriptions exceed 160
characters.~~ **CLOSED 2026-08-20 by task 7.** All 19 are now at or under 160.
See the task 7 result section, and note Roof's finding there that meta
descriptions do not index at all.

## Phase 0: Foundations

| # | Task | Status | Blocked on |
|---|------|--------|-----------|
| 1 | 301 www to apex redirect | DONE 2026-07-27 | |
| 2 | Google Search Console Domain property + sitemap | DONE 2026-07-28 | |
| 3 | Prerender 17 routes + real 404s | DONE 2026-07-27 | |
| 4 | Request Indexing | DONE 2026-08-15 (last 2 legal pages requested) | |
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

1. **Old domain access (highest leverage, deferred by agreement).** MEASURED
   2026-08-22: the old domain has 38 referring domains, all but one of them
   category scrapers shared with every competitor, so the 301 passes almost no
   link equity; its value is entity continuity, the Google listing's website
   field, and four years of indexing history. Still first. See CITATIONS.md.
   rhcsiteservices.com is still live,
   WordPress + Elementor, registrar/DNS/hosting all on Namecheap
   (dns1.namecheaphosting.com), email on Zoho. Need the Namecheap login. Page
   level 301s from it pass roughly 90% of four years of accumulated signal into
   this zero-backlink domain. It has a working sitemap.xml, so old URLs can be
   mapped one to one instead of guessed.
   **WARNING: info@rhcsiteservices.com receives the lead form. Any migration
   must preserve the Zoho MX records or lead notifications silently stop.**
2. **GBP video verification. THIS IS NOW THE ONLY THING BLOCKING PHASE 0.** All
   of the 2026-08-07 profile work is staged and invisible until Rafa records it.
   Unverified listings also rank worse and cannot properly reply to reviews.
   Rafa confirmed he will do it once wildfire season tapers off (2026-08-15);
   this is scheduling, not reluctance.

   **RESEARCHED 2026-08-15 so Enrique does not have to look it up again when he
   briefs Rafa.** The worry was that RHC has no warehouse or yard, being a pure
   middleman with no fixed inventory. That is NOT a blocker.

   What Google actually wants from a service-area business with no storefront:
   - Register the address the business is actually worked from, verify there,
     then hide it and set service areas. The listing is ALREADY set to "No
     location; deliveries and home services only", so it stays hidden.
   - Show an **office or admin area even when the business is service-area
     only**, and a **computer or phone screen with invoicing, CRM or the
     business email visible**. Branded vehicle, tools or equipment if any exist.
   - Rafa's verification package therefore exists already: home office, the
     inbox receiving lead-form submissions at info@rhcsiteservices.com,
     whatever he invoices with, and his Oregon business registration.
   - Video: minimum 30 seconds, aim 60-120. Recorded and uploaded from a phone
     through the Business Profile app, not a desktop.

   **The one real risk: the video must match the address on the listing.**
   Google rejects or SUSPENDS profiles where the two disagree. So confirm the
   address is right before he records; a failed attempt is worse than a delayed
   one, and repeated failures raise suspension risk.

   Address provenance, settled 2026-08-15: **Rafa supplied 8792 Portland Rd NE,
   Brooks himself**, on the original sales call. It is not something the
   previous designer invented, so there is no guideline violation to fix and no
   reason to assume the address is wrong. Enrique expects he can verify there.
   Sources: support.google.com/business/answer/14271705,
   gmbapi.com/news/google-business-profile-video-verification-guide/
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

## Search Console MCP (set up 2026-08-21)

Claude can now query Search Console directly instead of Enrique screenshotting
it. Recorded because two details differ from the setup guide that came with the
asset, and both cost a debugging round if re-derived wrongly.

**The server is `AminForou/mcp-gsc`, NOT `ahonn/mcp-server-gsc`.** The asset's
instructions name the ahonn one. It exposes a single tool, `search_analytics`.
AminForou exposes 20 including `inspect_url_enhanced`, `batch_url_inspection`,
`check_indexing_issues` and sitemap tools, which is what settled the redirect
question above. It also has 1,386 stars against 260, an MIT license where the
ahonn repo has none, and a more recent last commit.

**The env vars are `GSC_CREDENTIALS_PATH` and `GSC_SKIP_OAUTH=true`**, not
`GOOGLE_APPLICATION_CREDENTIALS` as the asset's instructions say. Without
`GSC_SKIP_OAUTH` it tries to open a browser login instead of using the service
account.

Config, registered at user scope in `~/.claude.json`:

    gscServer -> /opt/homebrew/bin/uvx mcp-search-console
      GSC_CREDENTIALS_PATH=/Users/enriquep/.config/gsc/credentials.json
      GSC_SKIP_OAUTH=true

Service account `rhc-gsc-reader@rhc-seo-506217.iam.gserviceaccount.com`, granted
**Full** (not Owner) on the property. Full is sufficient for URL Inspection,
which Google's own docs never state; it was confirmed by testing. A Full user
cannot add or remove other users, which is why it was chosen over Owner.

The key lives at `~/.config/gsc/credentials.json`, `600`, folder `700`, outside
every repo. **It is a password. Never commit it, never paste its contents.**

WHAT THIS DOES NOT COVER: the Enhancements reports (Breadcrumbs) and Core Web
Vitals are not in the Search Console API at all. CWV comes from the CrUX API,
a separate service. Those two still need a screenshot.

## DataForSEO MCP (set up 2026-08-21, VERIFIED and in use 2026-08-22)

Registered at user scope as `dataforseo` -> `npx -y dataforseo-mcp-server`, with
`DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD` in `~/.claude.json` (which is
`600`). Enrique ran the register command himself so the API password never
entered a transcript. Account is on the be-techplus.com domain, business tier.

Account verification was completed by Enrique between 08-21 and 08-22; real
endpoints now return `20000`. **Task 9's research plus the keyword pull cost
$0.65 of the $1 trial credit** (6 referring-domain pulls, 6 summaries, 3
backlink lookups, 2 Google Ads volume requests); balance after was **$0.35**.
**Still no reason to fund the $50 until that runs out**; it is the minimum
top-up, not the cost of entry, and credits do not expire.

Prices verified on dataforseo.com 2026-08-22, per request unless noted:
Google organic SERP $0.002 live ($0.0006 queued); Google Maps SERP the same;
Google Ads search volume **$0.09 live** ($0.06 queued), any keyword count;
DataForSEO Labs (ranked keywords, keyword ideas, domain intersection) $0.012
plus $0.00012 per row; Backlinks $0.024 plus $0.000036 per row; Google
Reviews $0.000075 per review.

Real pricing is $0.024 per request plus $0.000036 per row, so a full 1,000-row
pull is about $0.06:

| Pull | Estimated | Actual 2026-08-22 |
|---|---|---|
| Backlink summaries, 5 competitors | $0.12 | $0.12 |
| Referring domain lists, 5 competitors at 1,000 rows | $0.30 | $0.18 (none had 1,000) |
| Keyword volume for the porta potty vs portable toilet question | a few cents | $0.18 (Google Ads live is $0.09 per request; Oregon and Washington) |

Four notes for whoever uses it, two of them learned the hard way on 08-22:

- **There is no way to cap spend in config.** v3 has no ENABLED_MODULES or
  module allowlist. Quote the cost before running anything beyond a trivial
  check.
- **The MCP applies a field filter to responses.** `/v3/appendix/user_data`
  comes back with an empty `items` array through the tool even though the raw
  API returns full account data, and the filter also strips `cost` from every
  task. If a response looks empty but the status is `20000`, suspect the
  filter. **To see the balance or what a call cost, hit the raw API.**
- **Large pulls must not go through the MCP at all.** A 1,000-row referring
  domain list is ~700 KB of JSON per call, straight into the conversation.
  Run those from a script that reads the two env values out of
  `~/.claude.json` into the process and writes JSON to the scratchpad, and
  print only counts and costs. Never print or log the values.
- **Python's urllib fails TLS against api.dataforseo.com on this machine**
  (`CERTIFICATE_VERIFY_FAILED, self-signed certificate in certificate chain`;
  the python.org build does not use the system trust store). Shell out to
  `curl`, which does. Pass the auth header via a `-K` config file, not on the
  command line.

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
