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

### Run 1 — 2026-08-15, informational queries

**RHC cited zero times, by any engine, on all four.** The prediction that
informational queries were "where a site with strong content can win first" was
wrong as stated. The data explains why, and points at a real opening.

| Query | Google AIO cited | ChatGPT cited | Gemini cited |
|---|---|---|---|
| 5. 100-person site unit count | United Rentals, Zebra Dumpsters, National Rent A Fence | **OSHA.gov only** | Luxury Restroom Trailer Rentals (GA), American On-Site |
| 6. Portland street permit | Portland.gov, Floods Royal Flush, ASAP Marketplace | **Portland.gov only** | **Portland.gov only** |
| 7. WA handwashing at food trucks | Seattle.gov, Washington.gov | **WA State Legislature only** | Washington.gov, Ozark River |
| 8. OSHA toilets per worker | OSHA.gov, **ZTERS**, Cotton Logistics | **OSHA.gov only** | OSHA.gov, **ZTERS**, Rent-A-John |

Three findings that change the plan:

1. **ChatGPT cited ONLY government sources, all four queries, no exceptions.**
   For regulatory questions it goes to primary sources. No portable toilet,
   restroom trailer or sink company appeared in any ChatGPT answer. We cannot
   out-rank OSHA.gov for "what does OSHA require", and should stop expecting to.
2. **Google AI Overviews and Gemini DO cite commercial pages**, on three of four
   each. So the channel exists, just not in ChatGPT.
3. **None of the cited companies are local.** Georgia, North Carolina,
   national. Informational queries are not geographic, which makes this **the
   one channel where RHC's zero-authority problem does not gate us**. A broker
   in Georgia gets cited for a generic OSHA question; so could one in Oregon.

**Study ZTERS.** Cited by both Google and Gemini on query 8 via a dedicated
resource page, `zters.com/blog/osha-rules-for-construction-portable-toilets`,
and it appeared in the commercial run too. It is a national BROKER with the same
model as RHC: no fleet, no yard. It is the closest thing to proof that this
model can earn citations. Rent-A-John (porta potties, dumpsters, restroom
trailers, fencing, not Oregon-based) is a second example.

### What this run actually bought: a false claim on seven pages

Running query 8 exposed that the site stated **"OSHA 1926.51 requires one
toilet facility per 20 workers"** on seven pages. All three engines answered
with the real tiers, citing OSHA.gov. Verified against the primary source: the
regulation is tiered (20 or fewer = 1 facility; 20-199 = one seat AND one
urinal per 40; 200+ = per 50) and Oregon adopts it verbatim via OAR
437-003-0020. Corrected 2026-08-15; see the commit and .claude/rules/pages.md.

That is the strategic point, not a side note. Slawski's knowledge-based trust
checks factual accuracy against benchmarks, and here the benchmark is OSHA.gov,
which every engine reads directly. **A page that contradicts OSHA.gov will
never be cited beside it.** Being accurate is the precondition for competing at
all on the highest-value informational query in this industry.

### Next run: not before 2026-09-19

**The first-100-words rewrite SHIPPED 2026-08-20**, on all 17 in-scope pages,
verified live. That is the clock anchor. LLM answers lag site changes
considerably, so a re-run before 30 days measures nothing and burns the
comparability of the baseline.

Re-run all 8 queries verbatim, same engines, same recording format.

Two things to watch specifically:

1. **Query 8 (OSHA toilets per worker).** The page now agrees with the
   regulation instead of contradicting it, corrected 2026-08-15. Slawski's
   knowledge-based trust check compares against a benchmark, and here the
   benchmark is OSHA.gov, which every engine reads directly. A page that
   contradicts OSHA.gov will never be cited beside it. This is the query where
   accuracy was the precondition, so it is the cleanest test of whether the fix
   bought anything.
2. **Whether ANY engine now names what RHC rents and where.** Before this
   rewrite, no page stated it in a liftable sentence. ChatGPT's one existing
   mention described RHC using "flushable", a word that appears nowhere on the
   site, so the description was assembled from the old domain and directory
   data rather than from us. If a future description starts matching our actual
   wording, that is attribution moving to this site, and it is the single
   clearest signal this work did anything.

Do not re-run early because something feels stalled. An undated or
early-repeated result is worse than no result: it makes the next honest
comparison impossible.
