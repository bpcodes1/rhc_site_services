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

### Run 1 — 2026-08-15 (baseline)

PENDING. Enrique to run the 8 queries across the 3 engines.

Expected: zero RHC mentions on all 8. The value of run 1 is not the zero, it is
the **cited-source list**, which becomes a target list for the citation pass
(work queue task 6). If Perplexity answers query 1 by citing three directories,
those three directories are where RHC needs to appear, and that is a
better-evidenced target list than a generic citation checklist.

### Next run

After the first-100-words rewrite and the entity fixes ship, and no sooner than
30 days, since LLM answers lag site changes considerably.
