# Citation pass (queue task 9)

Working document and tracker for task 9 in SEO_STATUS.md. Research done
2026-08-22. Submissions are Enrique's; update the tracker table as each one
goes live. When a listing RHC controls is live, add its URL to `sameAs` in
`src/seo/schema.ts` (that is the task 6 revisit, not rework).

A citation is any third-party page that lists the business name, phone and
website (and address where one is published). Search engines and AI engines
cross-check those against the Google listing; matching copies build trust,
conflicting copies spend it.

## 0. Lock this before the first submission: the NAP

The site publishes no postal address, and that stays. But almost every
directory requires one to create a listing, so the citation pass needs a
decision the site never had to make.

| Field | Use exactly | Source |
|---|---|---|
| Name | `RHC Site Services` | GBP, schema.ts. Never "RHC Site Services LLC" in the name field |
| Legal name (only where a separate field exists, BBB, D&B) | `RHC Site Services LLC` | Legal pages, Oregon registration |
| Phone | `503-607-7412` | GBP, schema.ts. Directories reformat; the digits are what matter |
| Website | `https://rhcsiteservice.com/` | Never the old domain. https, trailing slash is fine |
| Email | `info@rhcsiteservices.com` | Old-domain email is correct, leave it |
| Hours | Mon to Sun, 7:00 AM to 6:00 PM | Rafa, 2026-08-14 |
| Address | `8792 Portland Rd NE, Brooks, OR 97305`, service-area, hidden where allowed. **LOCKED 2026-08-22** | Rafa gave Enrique this address; it is the one on the Google listing |
| Service areas | Portland, Salem, Eugene, Bend, Gresham (OR); Vancouver, Tacoma, Seattle (WA). State-level Oregon and Washington where a platform takes states | schema.ts AREA_SERVED |
| Primary category | Portable toilet supplier (or the platform's nearest, e.g. Yelp "Portable Toilet Services", BBB "Portable Toilet", YP "Portable Toilets") | GBP primary |
| Secondary categories | Container supplier, Fence contractor, Equipment rental agency, where the platform has them and they do not misdescribe | GBP, set 2026-08-07 |
| Owner / contact | Rafael Hernandez | schema.ts |
| Year established | leave blank | Same reasoning as GBP: RHC's own start date is not confidently known |
| Payment methods | leave blank | Rafa item 4, unanswered |
| Social | `https://www.facebook.com/RHCSiteServices/` | schema.ts sameAs |

**DECIDED 2026-08-22 by Enrique: 8792 Portland Rd NE, Brooks, OR 97305, entered
as a service-area business with the address hidden wherever the platform
allows. Submit the directly-controlled platforms and the vertical directories
now (the 14). HOLD the four syndicators (Data Axle, Foursquare, YP/Thryv, D&B)
until Enrique has confirmed with Rafa that Brooks is the long-term address.**

**This puts no address on the website.** Citations live on other companies'
sites. `src/seo/schema.ts` carries no address and keeps carrying none; the
only site change that follows from this pass is adding live profile URLs to
`sameAs`, which are links, not an address. Nothing on the site waits on the
Rafa confirmation.

Why Brooks and not the PO Box:

- It is the address the Google listing is verified at, and matching Google is
  the whole point of a citation. Rafa supplied it himself (2026-08-15 note).
- The PO Box (9088, Brooks) is what the legal pages print, but Yelp and Apple
  reject PO Boxes for a business location, and a PO Box citation would not
  match Google anyway.
- It is already public. `portablerestroom.net` scraped the Google listing and
  displays the street address in full (see section 3). "Hidden" is a
  courtesy Google extends; scrapers do not.

**Why the four are held:** the Salem vs Gresham question in SEO_STATUS.md is
open. If Rafa later moves the verified address to Gresham, every citation has
to be edited, and the four that SYNDICATE would have pushed the Brooks address
to downstream sites nobody can edit directly. The 14 are all editable in one
place each. Release the four when Rafa confirms; if he moves the address
instead, edit the 14 and then submit the four with the new one.

Never use an address Rafa has not confirmed. Never invent one.

## 1. Listing description, checked against the frameworks

Directories have their own search and their own snippet; the description is
read by a person comparing ten near-identical listings, Solution Aware, in a
Stage 3-4 market. The same rules task 5 and task 7 settled apply: mechanism
first, category second, one outcome, RHC named at most twice.

**Standard (864 characters, Yelp and the directories; REVISED 2026-08-26).**
Enrique rewrote the opening for the Yelp submission and his version replaced
the original: it leads with the one differentiator no single-line competitor
can copy (one call, one accountable team, five equipment lines) and names the
two hiring moments. Ran through the frameworks 2026-08-26 and it beats the
original on Schwartz (fresher mechanism in a saturated market) and
Christensen (struggling moment named, not implied). Brand density exactly at
Wiebe's cap. The ending stays softened to "you get a quote" until Rafa
answers the same-day question.

> Most sites need more than one rental: porta potties, temporary fencing, and
> a storage container on a job site, or a restroom trailer and event fencing
> for a wedding or festival. One call to RHC Site Services covers all of it,
> with one accountable team instead of a separate vendor for each line. Every
> unit is confirmed clean before it arrives, delivered inside a hard delivery
> window, and installed by RHC, with no surprise fees. We rent portable
> toilets (porta potties), restroom trailers, shower trailers, temporary
> fencing, and storage containers to construction sites, events, and
> commercial properties across Oregon and Washington, including Portland,
> Salem, Eugene, Bend, Gresham, Vancouver, Tacoma, and Seattle. Founder
> Rafael Hernandez has worked Pacific Northwest job sites since 2016. Tell us
> the site, the dates, and the headcount, and you get a quote.

**Capped (724 characters, for the 750-cap fields: Google, Bing, Apple).**
Same text minus the two scenario examples in sentence one:

> Most sites need more than one rental. One call to RHC Site Services covers
> all of it, with one accountable team instead of a separate vendor for each
> line. Every unit is confirmed clean before it arrives, delivered inside a
> hard delivery window, and installed by RHC, with no surprise fees. We rent
> portable toilets (porta potties), restroom trailers, shower trailers,
> temporary fencing, and storage containers to construction sites, events,
> and commercial properties across Oregon and Washington, including Portland,
> Salem, Eugene, Bend, Gresham, Vancouver, Tacoma, and Seattle. Founder
> Rafael Hernandez has worked Pacific Northwest job sites since 2016. Tell us
> the site, the dates, and the headcount, and you get a quote.

**Short (231 characters, for Facebook "about", Nextdoor, any 250-char field):**

> Confirmed clean before it arrives, delivered and installed by RHC, no
> surprise fees. Portable toilet, restroom trailer, shower trailer, temporary
> fencing, and storage container rentals across Oregon and Washington.
> Same-day quotes.

What was checked, so it is not re-derived:

- **Wiebe, So What:** sentence one is what the reader gets (clean, on time,
  no surprise on the invoice), not what RHC has. **Prove It:** no superiority
  language ("best", "trusted", "#1"); "since 2016" is the one biographical
  claim and About Us supports it. **Brand density:** RHC twice, "us" once.
- **Schwartz:** Solution Aware reader, so the mechanism leads and the category
  follows; the plain category claim ("we rent porta potties") is exactly what
  every competitor writes and is penalised at Stage 3+. "No surprise fees on
  the invoice" carries the VoC finding from the fencing research (invoice
  mismatch, ghosted before delivery).
- **Hormozi:** an outcome is stated, so it is an offer, not "a listing."
- **Roof:** "portable toilets" and "porta potties" both appear once, since
  directory search matches either and we still cannot verify which draws more.
- **Site rules:** no "dispatch"; no "our fleet / our units / our trucks";
  nothing about brokering; no pricing; no phone in the body; no "based in" or
  "headquartered in"; 2016 attached to Rafa, not the brand; no invented
  reviews, counts, certifications or insurance claims; no em dashes.
- The Google listing keeps the description already staged there 2026-08-07.
  Descriptions do not have to match across directories; NAP does.

## 2. Evidence: what the competitor link data shows (DataForSEO, 2026-08-22)

Five local competitors named by the AI engines in AI_VISIBILITY_BASELINE.md,
referring-domain lists pulled at up to 1,000 rows each, then intersected.
Raw JSON is in the session scratchpad, not the repo; the summary is here.

### The authority gap, in one table

| Domain | Referring domains | Backlinks | Spam score | First seen by the index |
|---|---|---|---|---|
| honeybucket.com | 631 | 2,973 | 17 | 2019 |
| gowithsanican.com (American SaniCan) | 219 | 325 | 14 | 2019 |
| gogreenlatrine.com | 84 | 194 | 27 | 2022 |
| oregonportabletoilets.com | 58 | 90 | 29 | 2022 |
| willymakeit.com | 49 | 64 | 25 | 2019 |
| **rhcsiteservice.com** | **1** (a .ru site) | 3 | 41 | 2026-07-17 |
| rhcsiteservices.com (old domain) | 38 | 39 | 48 | 2023 |

Willy Make It ranks in Portland with 49 referring domains. The gap to the
bottom of that table is closable; the gap to Honey Bucket is not the target.

### Which sources recur across competitors (the evidence-based list)

Domains linking to 2 or more of the 5, after removing category scrapers:

| Source | Links to | What it is |
|---|---|---|
| portapottyrentalguide.com | **all 5** | Vertical directory, "Submit Rental Company" |
| portablerestroom.net | **all 5**, plus RHC already | Google Maps scraper directory with a claim flow |
| dexknows.com | all 5 | Thryv network, same data as yellowpages.com |
| yellowpages.com | 4 of 5 | Thryv, free basic listing |
| portapottymatch.com | 4 of 5 | Vertical directory, "Add Listing" |
| growthzoneapp.com | 4 of 5 | Chamber and builder-association member directories (Honey Bucket's are Texas chapters). Membership, paid |
| luxuryportapottyrentals.com | 3 of 5 | Restroom-trailer lead-gen directory, "List Your Business" |
| citysquares.com | 3 of 5 | Generic local directory, free |
| mapquest.com | 2 | Claimable listing |
| superpages.com | 2 | Thryv again |
| hbapdx.org | 2 (Honey Bucket, SaniCan) | Home Builders Association of Metro Portland member directory. Paid |
| chamberofcommerce.com | 2 | Private directory despite the name, free basic |
| dandb.com | 2 | Dun & Bradstreet directory, free |
| oregonfestivals.org | 2 | Oregon Festivals and Events Association vendor listing |
| runsignup.com | 2 | Race sponsor pages |
| djcoregon.com, oregonlive.com | 2 | Editorial |

Two readings of that table, both recorded so they are not re-derived wrongly:

1. **The big platforms are absent from the link data and present in reality.**
   Yelp, BBB, Facebook, Nextdoor, Apple and Bing do not appear for any
   competitor, yet the search results that confirmed the competitor domains
   showed SaniCan, Oregon Portable Toilets and Green Latrine on Yelp and Willy
   Make It on BBB. Those platforms render outbound links through redirects or
   JavaScript, so a backlink index does not see them. Absence from the link
   data is not absence of the listing. The standard platforms stay on the
   list on the baseline's authority, not the link data's.
2. **The all-five "directories" that are actually scrapers.** betwinnermirror,
   betulcrime, ggmap.us.com, the URL shorteners and the rest link to every
   competitor AND to the old RHC domain. They are category scrapers, not
   links anyone bought. An earlier read of the old domain's profile in this
   session blamed the previous designer for buying spam links; the
   intersection disproved that. Skip them, and do not disavow them either,
   since every competitor carries the same set.

### What the old domain's profile actually says

rhcsiteservices.com has 38 referring domains. Remove the scrapers above and
**one** remains: portablerestroom.net, a Google Maps scraper. **Four years of
the old domain produced no real citations.** RHC has essentially no existing
listings to claim, which makes this pass creation rather than cleanup, and
it means the planned 301 from the old domain carries almost no LINK equity.
The 301 is still right, for entity continuity and because the Google listing
still points there, but "four years of accumulated signal" should not be read
as backlinks. Noted in SEO_STATUS.md under Waiting on Rafa item 1.

### Corrections to SEO_BASELINE.md Pillar 3 item 4, from checking each target

- **PSAI's member directory is behind a member login**, so it is not a
  public citation. Membership is paid (the only published figure is a $350/yr
  rate for non-US companies). Dropped from the citation list; it is a
  credibility badge for the site at most, and that is Rafa's spend decision.
- **Data Axle Local Listings is free** and syndicates to navigation systems,
  directory assistance and search engines. Confirmed, keep.
- **Foursquare is free** to claim or create, phone verification in 1 to 3
  business days. Confirmed, keep, but it syndicates (see section 0).
- **Apple Business Connect has no "hide address" toggle**; since late 2024 it
  has a service-area option for businesses without a storefront. Use that.

## 3. The scraped listing that already exists

`https://portablerestroom.net/Oregon/RHC-Site-Services-13884870398/`

The id is the tail of RHC's Google CID (5264847313884870398), so this is the
Google listing, scraped. It shows the public Google state as of the scrape,
which is the state the previous designer left: the OLD website, "open 24
hours" rendered as 12:00 AM to 12:00 AM, the keyword-stuffed description
("Construction portable toilets/ construction porta potties Salem, Portland,
Hillsboro, Gresham..."), and the Brooks street address displayed in full.

Claim link: `https://dashboard.portablerestroom.net/claim?listing=13884870398`.
Check whether claiming costs money before doing it; if it does, skip, since it
will re-scrape the corrected Google listing once Rafa verifies.

It is also a preview of what every scraper currently says about RHC, and the
reason the Google verification matters beyond Google.

**A second one, found 2026-08-22 while checking Yelp for a stub:**
`https://botw.org/listing/rhc-site-services/` (Best of the Web). Same scraped
Google data: Brooks street address in full, "open 24 hours", old website, and
the old "leading provider ... across the United States" description. Page sits
behind a Cloudflare challenge so the claim cost could not be read; BOTW has
historically charged for listings. Treat like portablerestroom.net: claim only
if free, otherwise leave it to re-scrape once Rafa verifies.

Yelp itself holds **no** RHC stub as far as search can see (checked 2026-08-22:
no yelp.com result for the name in Oregon; the only "RHC" hits are unrelated
companies in other states). Still search inside biz.yelp.com before adding,
since Yelp's own index is wider than what search engines show.

## 4. Target list and tracker

~19 listings. Tier 1 is the baseline's standard set; Tier 2 is what the link
data added. Tier 3 is recorded for Pillar 3 item 5 (links), not for this pass.
"Verify" is how the platform confirms you control the business; most call or
text the listed phone, which is Rafa's, so batch those into one agreed window
with him rather than asking him seven times.

**Accounts:** create them under an email RHC will own, not a personal one. The
old domain's logins going missing is the exact failure to avoid repeating.
If speed requires the agency email now, record every login in one place and
add Rafa as owner on each platform that supports roles (Bing, Yelp, Apple,
Facebook, Nextdoor) before the engagement ends.

### Tier 1: standard platforms

| # | Platform | Cost | Verify | Syndicates? | Evidence | Status | Live URL | Date |
|---|---|---|---|---|---|---|---|---|
| 1 | Google Business Profile | free | video, Rafa | yes, everywhere | anchor for all of this | STAGED 2026-08-07, pending Rafa | maps.google.com/?cid=5264847313884870398 | |
| 2 | Bing Places for Business | free | import from GBP (try Enrique's manager account first) or phone/email | Bing, Yahoo, DuckDuckGo; Bing's index also feeds AI search | baseline | | | |
| 3 | Apple Business Connect | free | phone/email, sometimes more | Apple Maps, Siri | baseline; service-area option, no hide toggle | | | |
| 4 | Yelp for Business | free (decline ads) | phone call/text | Yelp, and Apple reads Yelp | SaniCan, OPT, Green Latrine all on Yelp | SUBMITTED 2026-08-25, pending moderation. Service area: Salem, Portland, Gresham, Vancouver, Albany (Eugene refused by the diameter cap). Closing line softened to "you get a quote" pending the same-day question. Latinx attribute and Rafa's invite still to do, likely gated until approval | | 2026-08-25 |
| 5 | Facebook page | free | **Rafa must grant admin access; Enrique has none (found 2026-08-25)** | no | exists; FIX fields: website to new domain, hours 7 to 6, service area, category, short description | RAFA-GATED: ask him to add Enrique under Page settings > Page access (full control), better than sharing a password | facebook.com/RHCSiteServices/ | |
| 6 | BBB business profile | free (decline accreditation) | BBB calls | no | Willy Make It has one | | | |
| 7 | Nextdoor Business | free | phone/email | no | baseline; home-renovation and backyard-event demand | | | |
| 8 | LinkedIn company page | free | none | no | optional; B2B construction buyers; no cost | | | |
| 9 | Foursquare | free | phone call, 1 to 3 days | YES | baseline | **HELD** until Rafa confirms the address | | |
| 10 | Data Axle Local Listings | free | email/phone | YES, widely | baseline, confirmed free | **HELD** until Rafa confirms the address | | |
| 11 | Yellow Pages (covers DexKnows, Superpages) | free basic | phone | YES, Thryv network | 4 to 5 of 5 competitors | **HELD** until Rafa confirms the address | | |
| 12 | Dun & Bradstreet (dandb.com) | free | email | YES, B2B data | Honey Bucket, SaniCan | **HELD** until Rafa confirms the address | | |
| 13 | MapQuest | check | | no | Honey Bucket, SaniCan | optional | | |
| 14 | CitySquares, chamberofcommerce.com | free | email | no | 2 to 3 of 5 | optional, lowest value | | |

### Tier 2: vertical directories the link data surfaced

| # | Directory | Cost | Evidence | Status | Live URL | Date |
|---|---|---|---|---|---|---|
| 15 | portapottyrentalguide.com | check ("Submit Rental Company") | all 5 competitors | | | |
| 16 | portapottymatch.com | check ("Add Listing") | 4 of 5 | | | |
| 17 | pottydirectory.com | free basic, "under 2 minutes" | SaniCan | SUBMITTED 2026-08-26, review within 48h. Brooks OR, agency email, 6 services ticked (no VIP, no Holding Tanks), long description | | 2026-08-26 |
| 18 | The Blue Book ProView (thebluebook.com) | free complimentary listing for construction suppliers | SaniCan, Willy Make It have profiles; GCs use it to find vendors | | | |
| 19 | portablerestroom.net | check claim cost | all 5, and RHC already listed with old data | claim and correct, or leave to re-scrape | see section 3 | |
| 20 | luxuryportapottyrentals.com | check; lead-gen model | 3 of 5, highest-ranked vertical | only if free; skip if pay-per-lead | | |

### Tier 3: membership and sponsorship (links, not this pass)

Recorded because the link data pointed at them; they cost money or need
Rafa, so they belong to Pillar 3 item 5:

- HBA of Metro Portland (hbapdx.org): Honey Bucket and SaniCan both have member
  links. Builder audience is RHC's audience.
- Chambers on GrowthZone (Salem, Portland, Gresham): member directories link
  out dofollow. Also a Hispanic chamber is a real candidate since the GBP
  carries the Latino-owned attribute; verify which one and its dues first.
- Oregon Festivals and Events Association (oregonfestivals.org): vendor listing.
- Event sponsorships: runsignup.com race pages, Rose Festival, Tigard Festival
  of Balloons, Portland Adult Soapbox Derby all link to a competitor.

## 5. Traps

- **The public Google listing still shows the old domain and "open 24 hours"**
  until Rafa verifies. New listings will disagree with it on website and hours
  for a while. That is the right direction; do not match the old data.
- **Search before creating.** A few platforms may hold an auto-generated RHC
  listing (Yelp and BBB do this from public records). Claim it rather than
  creating a duplicate; duplicates are the classic NAP failure.
- **No bulk submission services, no Yext-style subscriptions.** Twenty clean
  listings RHC controls beat a hundred rented ones that vanish when the
  subscription stops.
- **Decline every upsell** (Yelp ads, BBB accreditation, YP premium,
  Foursquare's paid verification). The citation is the free part.
- **Logo:** the only usable mark is the R on brand navy (public/favicon PNGs,
  max 144px). Listings want 500px+, and the lockup on the old site is white on
  transparent. Make one proper navy-background logo PNG before starting, or
  listings will carry a blank square.
- **Photos:** use the real About Us job-site photo, not stock.
  **Rafa supplied three more real photos (confirmed by Enrique 2026-08-25):**
  the blue-units-with-handwash-stations shot already in the repo as
  `public/rhc-cover-900x678.jpg` / `src/assets/general/preview.webp`, plus two
  delivery photos currently only in Enrique's Downloads
  (`porta-potty-delivery.png`, a unit at a residential driveway;
  `portable-toilet-delivery.png`, a 3-stall restroom trailer behind the truck).
  All four are cleared for listings. The two delivery photos are copied into
  `client-photos/` in this repo (untracked as of 2026-08-25; committing them
  is fine, they are photos, not context). They are also the seed for the
  Phase 2 real-photos item on the site.

## 6. Run sheet for the 14 (added 2026-08-22)

Work top to bottom. Every form wants the same block from section 0 and the
description from section 1; only the quirks differ. Tick the tracker in
section 4 as each one goes live and paste the live URL.

**Before the first form:**

- **Logo files** are in `public/`: `rhc-logo-1200.png` (square, for logo
  slots), `rhc-logo-720.png` (same, smaller), `rhc-mark-400.png` (the R alone,
  for tiny avatar slots), `rhc-logo-wide-1200x630.png` (banner slots that want
  a logo), `rhc-cover-900x678.jpg` (the site's preview image as JPG, for
  cover slots that reject webp; note `preview.webp` is 900x678, not the
  1200x630 the schema comment claims). Real photo: the About Us job-site photo in
  `src/assets/`.
- **Account email:** use the agency Google account already managing the GBP
  (enriquepiedra2005@gmail.com) so verification emails land somewhere that
  gets read today. Record every login in one place. Add Rafa as owner on
  Bing, Yelp, Apple, Facebook, Nextdoor and LinkedIn before handoff; the
  vertical directories are single-login, so the register IS the handoff.
- **Rafa's invite email on every platform: `rhcportabletoilets@gmail.com`.**
  Confirmed by Enrique 2026-08-25 (Rafa named it as his main one previously;
  it is also the likely GBP owner account). Invite him as a user right after
  each listing verifies, not at handoff, so customer messages reach him.
- **Rafa's phone.** Yelp, Apple, Bing (unless the GBP import skips it), BBB
  and Nextdoor verify by calling or texting 503-607-7412. Agree one 30-minute
  window with him and do those five back to back, so it is one ask, not five.

| Order | Listing | Start at | Quirks |
|---|---|---|---|
| 1 | Facebook page (fix) | facebook.com/RHCSiteServices, Settings > Page info | **CORRECTION 2026-08-25: "already controlled" was wrong.** The page is under Rafa's personal Facebook and Enrique has no access; the earlier note over-read "controlled by RHC" in schema.ts as "controlled by us". Add to the Rafa asks: he adds Enrique under Page settings > Page access with full control (safer than sharing a password; takes him two minutes from his phone). Then the fix itself: website to https://rhcsiteservice.com/, hours 7 to 6 all seven days, category "Portable Toilet Supplier" (nearest), service area instead of street address, short description from section 1, logo `rhc-logo-720.png`, cover `rhc-cover-900x678.jpg` |
| 2 | Bing Places for Business | bingplaces.com | Try "Import from Google" with the agency account. If the staged (unverified) GBP does not import, create manually. Mark "I serve customers at their location" and hide the address. Bing may still ask to verify by phone, email or postcard; pick phone in the Rafa window |
| 3 | Apple Business Connect | businessconnect.apple.com | Sign in with an Apple ID (create one on the agency email if needed). No hide-address toggle: choose the service-area option for businesses without a storefront. Logo square 1:1. Verification is usually a call to the business phone |
| 4 | Yelp for Business | biz.yelp.com/claim | SEARCH FIRST for "RHC Site Services" near Brooks, OR; claim if a stub exists (none visible to search as of 2026-08-22). Decline the ad setup at every step; it will ask three times. **Verified against Yelp's help center 2026-08-22:** categories, up to 3: `Portable Toilet Services` (parent Local Services) primary, `Party Equipment Rentals` (Event Planning & Services) second, leave the third empty; Yelp's Fences & Gates, Self Storage and Trailer Rental all misdescribe. Service Areas live under Business Information > Basic Information > Edit: answer **Yes** to "Do you service your customers at their location", enter cities, and only then does the hide-address option appear. **Yelp caps service areas at 6 cities inside a 100-mile diameter**, so the 8-city list does not fit: enter Salem, Portland, Gresham, Vancouver; try Eugene fifth and drop it if refused. Bend, Seattle and Tacoma cannot be entered (Yelp support can widen it on request; not worth a ticket now). Verification offers email, text or call: the email route wants an address on the website's domain and nobody has one at rhcsiteservice.com, so use **text** to 503-607-7412 if offered (4-digit code, Rafa forwards it), call if not. Add Rafa afterwards under User Management (up to 15 users, all with identical full access). Add the `Latinx-owned` attribute, which matches the GBP |
| 5 | BBB | bbb.org/get-listed | Search first; if absent, "Add A Business". Free profile, NOT accreditation (declines the paid pitch). Legal name field takes `RHC Site Services LLC`; display name stays `RHC Site Services`. BBB calls to verify before publishing |
| 6 | Nextdoor Business | business.nextdoor.com | Service area by ZIPs or cities; phone or email code. Use the short description |
| 7 | LinkedIn company page | linkedin.com/company/setup/new | Needs Enrique's personal LinkedIn as the creating admin. Industry "Construction" or "Facilities Services"; website; tagline from the short description. No verification. Add Rafa as admin later |
| 8 | pottydirectory.com | pottydirectory.com/submit/ | Free basic; skip "featured". Under two minutes |
| 9 | portapottyrentalguide.com | portapottyrentalguide.com/submit-rental-company/ | All 5 competitors are here. Cost not stated; if it asks for money, stop and note the price in the tracker |
| 10 | portapottymatch.com | portapottymatch.com/add-listing/portapottyrental/ | 4 of 5 competitors. Same rule: free or stop |
| 11 | The Blue Book ProView | thebluebook.com, "Get listed" (or construction.com/the-blue-book/proview) | Free complimentary listing for construction suppliers; decline Premier Membership. Category: portable toilets / site services. GCs search this for vendors, so it doubles as lead gen |
| 12 | portablerestroom.net | dashboard.portablerestroom.net/claim?listing=13884870398 | RHC is already listed with the OLD data. Claim only if free; correct website, hours and description. If paid, skip; it re-scrapes Google |
| 13 | luxuryportapottyrentals.com | luxuryportapottyrentals.com/signup/vendor | Lead-gen directory. Free listing only; if it is pay-per-lead or a subscription, skip and note it |
| 14 | MapQuest | mapquest.com, search the business, "Claim it" or "Add your business" | Basic listing is free; premium is via Yext, decline. Lowest value of the 14; skip if it turns into a chore |
| HELD | Foursquare, Data Axle, Yellow Pages, D&B | | Until Rafa confirms Brooks is long-term |

When all 14 are in: list the live URLs here, then the `sameAs` update in
`src/seo/schema.ts` is one commit (RHC-controlled profiles only: Bing, Apple,
Yelp, BBB, Nextdoor, LinkedIn; not the directories).

## 7. Measurement

Before (2026-08-22): rhcsiteservice.com has 1 referring domain, 3 backlinks,
`sameAs` has 2 entries.

After: re-run the DataForSEO backlinks summary (one $0.024 call) 30 and 60
days after the last submission, and update `sameAs` with every RHC-controlled
profile that is live. Citation links are mostly nofollow and will not move
the rank number much; the count of real referring domains is the honest
measure. The ranking effect shows up, if at all, in the GBP and GSC readings
over the following months, and it cannot be separated from the GBP
verification if both land together. Record the dates of both.