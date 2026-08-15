# AI Visibility Baseline

Purpose: a dated, repeatable record of whether AI answer engines name RHC, and
of **which sources they cite instead**. That second part is the useful half.

Why it exists: the site is technically sound and has no authority (position
21.5, zero backlinks, 15 impressions in the first 18 days). AI answer engines
depend far less on backlinks than blue-link rankings do, so citation may be a
faster route to visibility for this site than climbing the classic results.
Testing that requires a before, and the before has to be taken before the work.

**Run it the same way every time or it is not a baseline.** Same queries, same
engines, same recording format. Paraphrasing a query makes the next run
incomparable.

## Protocol

Engines: **ChatGPT, Perplexity, Google AI Overviews**. (botsee would add Claude
and Grok, and would make this repeatable automatically; it costs $20 minimum
plus ~$7.35 a run, deferred 2026-08-15 until there is something to detect.)

Rules:
- Use a logged-out or incognito window where possible. A personalised session
  reflects the account, not the internet.
- Paste each query verbatim. Do not add "near me", do not add context.
- Record the answer, then record every source, business, or directory named.
- Note the date. LLM answers drift; an undated result is unusable.

## The queries

Deliberately split. Commercial queries measure whether we are a known supplier.
Informational queries test whether the permit and spec content, which is the
genuinely strong part of this site, gets cited. Expect zero on the commercial
set; the informational set is where a small site can realistically win first.

### Commercial intent (expect RHC absent)

1. `porta potty rental portland oregon`
2. `restroom trailer rental for a wedding near seattle`
3. `temporary fencing rental bend oregon`
4. `who delivers portable toilets in salem oregon`

### Informational intent (where this site's content is strongest)

5. `how many porta potties do I need for a 100 person construction site`
6. `do I need a permit to put a porta potty on the street in portland`
7. `washington state requirements for handwashing stations at food truck events`
8. `how many toilets does OSHA require per worker on a job site`

Queries 5 and 8 map to the OSHA 1-per-20 ratio published sitewide. Query 6 maps
to the PBOT permit guide on the Portland pages. Query 7 maps to the WAC 246-215
content on the Seattle pages, which has ALREADY earned a real Google impression
("wac 246-215", 2026-08 Search Console), so it is the most likely first win.

## Recording format

Per query, per engine:

| Field | Notes |
|---|---|
| RHC named? | yes / no |
| rhcsiteservice.com cited? | yes / no |
| Sources cited | every URL or business named, in order |
| Competitors named | any rental company |

## Results

### Run 1 — 2026-08-15 (baseline), commercial queries

Run by Enrique across Google organic, Google AI Overviews, ChatGPT and Gemini.
Sponsored results excluded. Some competitor names are voice-to-text and marked
uncertain in his raw notes; they are recorded here as reported.

**The prediction was wrong.** Claude predicted zero RHC mentions across all four
commercial queries. RHC appeared in ChatGPT for query 4, ranked 6th.

| Query | RHC appears? |
|---|---|
| 1. porta potty rental portland oregon | no (Google, ChatGPT, Gemini) |
| 2. restroom trailer rental for a wedding near seattle | no |
| 3. temporary fencing rental bend oregon | no |
| 4. who delivers portable toilets in salem oregon | **YES, ChatGPT, 6th**. No in Google AI Overview or Gemini |

ChatGPT's description of RHC: *"Based in Brooks and offers portable toilets,
including standard and flushable units, with delivery in the Salem area."*

**Attribution is NOT to this website, and saying otherwise would be a false
win.** Checked against the source the same day:
- "Brooks" appears on the site in exactly TWO places, the Privacy Policy and
  Terms of Service, as PO Box 9088, Brooks, OR 97305.
- **"Flushable" appears nowhere on the site.** That fact came from elsewhere,
  most plausibly the old rhcsiteservices.com WordPress site, which is still
  live and still describing the business, or the Google listing.

So the mention is a blend of our legal pages, the old domain and directory
data. What it proves is that RHC exists as a known entity to ChatGPT. It does
not prove the new site earned it. It also strengthens the domain consolidation
case: the old domain is actively feeding LLM understanding of this business.

### THE STRATEGIC FINDING: machines think RHC is in Brooks, not Portland

RHC surfaced for Salem and nowhere else. The site says otherwise:

| Signal | Says |
|---|---|
| GBP, verified | 8792 Portland Rd NE, Brooks OR 97305 |
| Privacy Policy + Terms | PO Box 9088, Brooks OR 97305 |
| Map pin proximity | 8 mi Salem, 35 mi Portland |
| Site copy, 6 places incl. sitewide footer | "Based in / Headquartered in Portland" |

Positioning copy is not a location signal to a machine. Addresses are. Every
machine-readable address RHC has points at Brooks, which is a Salem ZIP, and
Salem is the one query where RHC appears.

**There is no Salem page on this site.** There are three Seattle pages, which
surface nowhere, and zero Salem pages, which is where RHC already surfaces.
`src/assets/cities/salem/salem_hero.webp` already exists in the repo, so a
Salem page was started and never built. Salem is also the only major service
city where the map pack is winnable at all, since proximity is ~55% of pack
ranking and the verified pin is 8 miles away.

Recommendation, needs Enrique's decision: build the Salem location pages next,
ahead of further Seattle or Bend work. This is evidence-led, not a hunch.

### Cited-source target list (the real prize of run 1)

Who the engines name instead of RHC, by frequency across the four queries:

| Competitor | Where cited | Note |
|---|---|---|
| Honey Bucket | Google organic (PDX), Google AIO + ChatGPT (Salem) | Dominant incumbent |
| American SaniCan | Google organic + ChatGPT (PDX), ChatGPT (Salem) | |
| **Oregon Portable Toilets** | Gemini #1 (PDX), Google AIO + ChatGPT + Gemini (Salem) | **Rafa's father's company.** A link from them has been "pending Rafa approval" since July. AI engines already cite it |
| National Rent A Fence | Google AIO + ChatGPT + Gemini (Bend fencing), Google organic (Seattle trailers) | Dominant in fencing |
| **ZTERS** | Google AIO + Gemini (fencing), Gemini (Salem) | A national BROKER/aggregator, the same model RHC runs. Worth studying how a broker ranks |
| Royal Restrooms | Google organic + ChatGPT + Gemini (Seattle) | Dominant for event restroom trailers |
| Green Latrine | ChatGPT + Gemini (Seattle) | |
| Willie Make-It | Google organic + ChatGPT (PDX) | |

### Correction to SEO_BASELINE.md from measured data

The baseline states AI Overviews "now front 80%+ of local service queries".
Measured here: **Google generated an AI Overview for 2 of 4** commercial
queries (fencing Bend, porta potty Salem) and NOT for porta potty Portland or
restroom trailer Seattle. That is 50% on a sample of four. Too small to replace
the figure, large enough to stop treating 80% as established.

### Run 1, informational queries

PENDING.

### Next run

After the first-100-words rewrite and the entity fixes ship, and no sooner than
30 days, since LLM answers lag site changes considerably.
