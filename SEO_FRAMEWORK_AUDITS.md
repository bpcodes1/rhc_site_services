# SEO Framework Audits

Each SEO framework Enrique brings gets audited against SEO_BASELINE.md (the
independent research baseline) and logged here. Verdicts: COVERED (framework
handles it), PARTIAL (framework touches it but research adds more), MISSING
(framework silent; baseline is the only source). Each audit also records what
the framework ADDS beyond the baseline, and any conflicts between the two.
The map of MISSING items across all audited frameworks = what we must execute
from the baseline alone.

Enrique holds a vault of frameworks (SEO, sales, audience growth, persuasive
copy, code review, deep research) from a community group, pasteable on request
at any moment. SEO items are queued below with triage status.

**Record provenance for every framework audited from here on**: who authored
it, where it came from, and the date Enrique pasted it. The first two audits
predate this rule and only carry the author's name. Without provenance we
cannot weigh a framework's authority, tell whether two frameworks share a
source (Shepard and the baseline both trace to Zyppy, which is his own
company), or judge how stale its claims are.

## The gap both audited frameworks share

Roof and Shepard independently mark the SAME area MISSING, and it is exactly
where the measured bottleneck now sits:

| | Roof | Shepard |
|---|---|---|
| Google Business Profile / map pack / proximity | MISSING | MISSING |
| Link building tactics | MISSING by admission | partial, brand anchors only |

As of 2026-08-15 the site is 17 of 19 indexed and technically clean, sitting at
average position 21.5 with zero backlinks. That is an authority problem, and
neither audited framework addresses how to fix it. **A framework on local SEO,
GBP, citations, or link building is therefore the highest-value one to audit
next**, ahead of everything in the queue below.

## Asset inventory (catalogued 2026-08-15)

Enrique's full SEO vault, by name. Recorded so neither of us forgets an asset
exists at the moment it becomes relevant. **A catalogue is not a plan**: the
trigger for pasting one is "we have hit the problem this solves", never "we
have an asset we have not used yet". The community's GEO-first advice was
already OVERRIDDEN once for exactly this reason (queue item 6 below).

NOT all of these are expert frameworks; the vault mixes frameworks, CLIs, MCP
servers, and how-to guides. Triage below is from NAMES ONLY except where noted,
so treat it as a rough sort, not a verdict. A title reveals topic, not quality
or risk: some local SEO material in circulation teaches tactics that get GBP
listings suspended, which is not visible from a name.

Observation worth keeping: **8 of 23 assets target AI search** (GEO/AEO). That
reflects where the industry's attention is, not where this site's bottleneck
is. As of 2026-08-15 the bottleneck is authority, not AI citation.

### Want now (address a gap we have actually hit)

| Asset | Type | Why now |
|---|---|---|
| Google Search Console MCP | MCP, free | Replaces Enrique screenshotting GSC and Claude reading images. 25k row pulls, regex filters, owned data only |
| DataForSEO MCP | MCP, pay-as-you-go | Fixes a gap hit on 2026-08-15: keyword volume was UNVERIFIABLE, so the porta potty vs portable toilet question could not be settled. Also gives backlink data |
| Ahrefs MCP | MCP, needs subscription | Strongest option for the authority bottleneck IF Enrique already pays for Ahrefs. UNCONFIRMED |
| Bill Slawski | Expert JSON | May fill the hole Roof and Shepard share. Patent-derived work often covers local and entity mechanics practitioner frameworks skip. SCOPE UNCONFIRMED |

### Trigger-gated (recorded with the condition, not just "later")

| Asset | Paste when |
|---|---|
| AEO Answer Gap Loop / Answer Engine Gap Loop | ~90 days of GSC data, approx 2026-10-26. (Possibly the same asset listed twice; unconfirmed) |
| GEO content optimizer / GEO AI search optimization | After pages hold real positions. Phase 2 rationale: AI-citation work lands better on pages that already rank |
| SEO + GEO audit loop | Same gate as above |
| AI Search Citation Monitor | Same gate as above |
| botsee CLI (brand visibility across LLMs) | Arguably NOW, to establish a baseline. Cannot measure AI visibility improving without a start point, same logic as the timeline anchor in SEO_STATUS.md |
| ~~Is It Agent Ready CLI~~ | **NOT FOR THIS SITE. Triaged wrongly from the name, corrected 2026-08-20.** It does not validate structured data or AI-search readiness. It checks whether an AI agent can programmatically TRANSACT with a site: 7 Protocol Discovery checks (MCP Server Card, WebMCP, Agent Skills, API Catalog, OAuth discovery, OAuth Protected Resource, Auth.md/ARD) and 4 Commerce checks (x402, MPP, UCP, ACP). RHC has no API, no login, and takes no payment online, so 11 of its 19 checks are structurally inapplicable and would all report red. The 3 that do apply were run by hand instead, see below. A free web scanner at isitagentready.com needs no install if anyone wants to see it anyway |
| surgegraph CLI (AEO audits/rewrites) | With the rest of the AEO batch |
| Programmatic Page Quality Gate | If city pages expand past 9, against the ~15-20 cap |
| Humblytics marketing/CRO skills | When there is traffic to convert. At 15 impressions, no |
| Voice of Customer Mine | Next copy pass. The 5-step page process already does review mining by hand |
| Source Paper Digest | UNKNOWN, name is not self-explanatory. Ask before triaging |
| How to put SEO research on autopilot with AI agents | Process guide. Revisit if research volume justifies orchestration |

### Not for this site (with the reason, so it is not re-litigated)

| Asset | Why not |
|---|---|
| SEO Content Pipeline | Content scaling. 19 hand-built pages, no-blog decision, and scaled templated content is the documented doorway trigger |
| SEO Article Generator | Same. Already queue item 5, LATER/minor |
| Content Brief Backlog Loop | Same category |
| Competitor Content Watch Loop | Monitoring for a content operation this site does not run |
| Organic Social | Out of scope for the SEO plan |

## Framework Queue (triaged 2026-07-25)

1. Cyrus Shepard expert framework: AUDITED 2026-07-25 (see Audit 2 below).
2. Core GEO playbook + GEO Content Optimizer: GATE LIFTED 2026-07-27.
   Covers the AI Overviews MISSING row. Execution was gated on prerendering,
   which is now done: all 19 routes ship real static HTML, so AI crawlers can
   read the site. This is ready to audit and execute whenever Enrique pastes it. Treat the
   +30-40% visibility claims as directional (lab-derived), not guarantees.
3. AEO Answer-Gap Desk: LATER (~90 days after GSC exists). Monitoring loop
   that requires Search Console data plus paid tools (DataForSEO, Firecrawl);
   nothing to monitor until the site has impressions.
4. OpenClaw SEO Autoblog: NOT NOW, likely NOT FOR THIS SITE. Conflicts with
   project decisions (blog dropped for launch) and with research: scaled
   templated AI content is the exact pattern that triggers doorway/scaled-
   content classification. Publishing targets (WordPress/Ghost) do not match
   this React static site. Revisit only if a quality-controlled blog is
   deliberately reintroduced at Phase 2+.
5. SEO Article Generator: LATER, minor. Possible drafting aid for the 5
   remaining city pages, but the existing 5-step page process (research,
   review mining, Brutal Framework Analysis) already exceeds it.
6. Community "where to start" advice (GEO audit first): OVERRIDDEN for this
   site. That sequence assumes an indexed content library. RHC is not in
   Google's index yet; Phase 0 foundations (www redirect, GSC, GBP, trust
   pages, prerendering) come first, then GEO.

---

## Audit 1: Kyle Roof (audited 2026-07-24)

Core thesis: ranking is math; match the term counts and placements of pages
Google already ranks. Eight frameworks: Page Type Matching, Correlation Math,
Top 4 Placement Ladder, Compound SEO (authority tiers), Virtual Silo,
E-E-A-T Signals, Over/Under Optimization Diagnostic, Avalanche Theory.

### Coverage vs. baseline

| Baseline item | Verdict | Notes |
|---|---|---|
| Keyword in URL / title / H1 / body | COVERED+ | Top 4 Ladder goes deeper: competitor-derived term counts, 3 term types, weighted sections |
| Title best practices | COVERED | Meta title as #1 on-page signal |
| PAA questions as H2s/FAQs | COVERED | Avalanche semantic architecture |
| Internal linking | COVERED w/ conflict | Virtual Silo is more prescriptive; see conflict 1 |
| Image alt, bold, headings | COVERED | Group B/C placements |
| Word count myths | COVERED | Math, not length |
| Trust pages, NAP citations, E-E-A-T schema | COVERED | Adds urgency to footer legal-pages TODO: machine-readable Trust signals, half-day job |
| Location-page uniqueness / doorway risk | PARTIAL | Roof's "doorway" = transaction funneling (RHC safe: form transacts on-site); city-page uniqueness bar and ~15-20 page cap are research-only |
| Reviews | PARTIAL | UGC moderation only; reviews as ~20% of local weight, recency, 2026 compliance rules are research-only |
| Site speed / CWV | PARTIAL | "Fix slow loading"; no INP/LCP specifics, fonts, code-splitting |
| GSC setup mechanics | PARTIAL | Framework depends on GSC but no Domain property / sitemap / Request Indexing how-to |
| JS rendering / prerendering | MISSING | Bag-of-words assumes Google can read the page; CSR blindness is the framework's biggest gap for this site |
| Google Business Profile / map pack / proximity | MISSING | Entire local-pack layer absent (framework admits organic-search-only bias) |
| www duplicate, domain consolidation 301s | MISSING | Adjacent to "site health" but never specified |
| AI Overviews / first-100-words citation | MISSING | Framework lists AI/NLP evolution as its own limitation |
| Link building tactics | MISSING by admission | "Votes but not systematically tested" |

### What the framework ADDS beyond the baseline

1. Authority tiers + Compound SEO: sequencing logic. Zero-tier domain should
   accumulate within-tier long-tail rankings before expecting head terms;
   more keywords ranked = fewer backlinks needed. The baseline had no
   ordering principle.
2. Correlation math: derive exact term counts/placements per keyword from
   currently-ranking pages, instead of generic best-practice ranges. The
   operational method for auditing the 17 existing pages.
3. Over/under-optimization diagnostic: decision tree for "page scores well
   but does not rank" (check section-level term overuse before blaming
   authority/links).
4. E-E-A-T as a threshold-triggered back-end check with cliff-drop
   consequences and 6+ month recovery; signals must be bot-readable (schema,
   trust pages, Person/Organization markup).

### Conflicts between framework and baseline (resolve explicitly)

1. Silo discipline vs. hub-and-spoke: Roof forbids cross-category internal
   links (one supporting page serves one target); local-SEO research
   recommends city pages cross-linking to siblings and to other services in
   the same city. Read: Roof's rule targets blog-supporting-money-page
   structures; RHC's city pages are all money pages, so hub-and-spoke fits
   better. DECISION PENDING with Enrique.
2. Bag-of-words vs. AI Overviews: keep the math AND the first-100-words
   extractable-answer structure; compatible in practice.

### Prerequisite red flag raised by this framework

Authority tier is unmeasurable until Google Search Console exists and has
~3 months of click data. GSC setup is therefore the prerequisite for every
tier-based decision. Until data exists: treat the domain as tier zero and
follow Avalanche (within-tier accumulation) as the default strategy.

---

## Audit 2: Cyrus Shepard (audited 2026-07-25)

Core thesis: Google's ML classifies sites into winner/loser buckets using
brand legitimacy, demonstrated experience, content effort, and user
satisfaction, not keyword completeness. Seven frameworks: Reverse-Engineering
Outliers, E-E-A-T + Content Effort, Page Quality Scorecard, Three Clicks,
Brand Authority Insulation, Internal Linking Architecture, Show Your Work /
Reduce the User's Work. Note: Shepard runs Zyppy, whose title-tag studies the
baseline already cites, shared source, so overlaps are expected.

### Coverage vs. baseline

| Baseline item | Verdict | Notes |
|---|---|---|
| E-E-A-T proof (photos, people, reviews on page) | COVERED+ | Quantifies it: stock images r=-0.403, first-person experience r=+0.383, contact info r=+0.288. Hardens the About Us TODOs |
| Title best practices | COVERED+ | Adds over-optimization signals: 3+ adjectives r=-0.420, numbers r=-0.297, rewrite triggers |
| Internal linking | COVERED+ | Adds 10+ internal links baseline, Selective Link Priority (first text link's anchor is what counts), post-HCU warning against aggressive anchor variety |
| Location-page uniqueness | PARTIAL | "Could anyone create this by researching the internet?" is the exact test city pages must pass; no location-specific mechanics |
| Reviews | PARTIAL | Independent reputation search method; no GBP/compliance mechanics |
| First-100-words / direct answers | PARTIAL | "Reduce the User's Work" says the same thing for humans that GEO research says for AI engines |
| Word count myths | COVERED | contentEffort is ML-assessed labor, explicitly not word count |
| GBP / map pack / proximity | MISSING | Google-organic only, local pack not modeled |
| JS rendering / prerendering | MISSING | |
| www duplicate / domain consolidation / GSC setup | MISSING | |
| AI Overviews / GEO | MISSING | Profile admits AI/LLM discoverability is out of scope |
| CWV specifics / fonts / code-splitting | MISSING | Mobile UX yes; performance mechanics no |

### What the framework ADDS beyond baseline + Roof

1. Quantified on-page UX winner/loser signals: no ads (RHC has zero, its
   biggest protection), original vs stock images, first-person experience
   language, visible contact info, clear mobile logo, no mega menus, no push
   notifications. Additive effects: stacked negatives compound.
2. Brand authority as the #1 update insulator: branded anchor text % from
   unique domains and brand search volume. Reframes future link building:
   prefer brand-name anchors (PR, podcasts, sponsorships) over keyword
   anchors for external links.
3. Three Click framework: earn the SERP click (title/meta with specific
   outcome language, +7% traffic when content delivers), hold engagement,
   satisfy so the user never returns to Google. Meta-description craft was
   absent from baseline and Roof.
4. contentEffort (from the Google API leak): an LLM estimates labor invested.
   Validates the published-specs and permit-guide strategy as machine-visible
   effort.
5. Mobile-only evaluation: quality raters judge 100% on mobile. Action: run a
   mobile UX pass on all 17 pages (logo, contact info, scannability).
6. Date discipline: do not touch dates without substantive updates (winners
   averaged 774 days untouched; fake freshness correlates with losers).

### Conflicts (with Roof and with baseline)

1. Roof's math vs Shepard's anti-SEO: Roof says match competitor term counts;
   Shepard says visible optimization stacking gets penalized. Resolution:
   calibrate to competitor norms (Roof's own over-optimization diagnostic
   agrees) and keep titles/anchors natural, no adjective/number stuffing.
2. Anchor variety: baseline said "varied commercial anchors"; Shepard's
   post-HCU data flipped excessive variety negative. Resolution: moderate,
   natural variation; first text link carries the strategic anchor.
3. Roof's "Lorem Ipsum with correct math outranked content" vs Shepard's
   contentEffort: temporal decay, Shepard's data is post-HCU and newer. For
   RHC both are satisfied anyway (real specs + correct math).

### Red flags for RHC per Shepard's decision rules

1. STRUCTURAL: new domain with ~zero brand authority, the strongest
   winner/loser predictor is the one RHC lacks. Mitigations: GBP + citations
   + branded-anchor links + (pending approval) the Oregon Portable Toilets
   LLC link; Rafa's 2016-founded business history is real, make it visible.
2. Photo plan is 50/50 client/stock: stock images correlate with losers
   (r=-0.403). Bias originals onto heroes and city pages; keep stock only in
   generic decorative slots (reinforces baseline Pillar 2 item 8).
3. Mobile audit never performed; raters evaluate exclusively on mobile.
4. Positive flags worth keeping: zero ads, zero push notifications, service
   business model (lowest vulnerability class), no mega menus.

---

## Audit 3: Bill Slawski (audited 2026-08-15)

Provenance: expert JSON from Enrique's vault, pasted 2026-08-15. Source given
as SEO by the Sea (2005-2022) and Go Fish Digital. Patent-derived, not
empirical. Active period ended 2022.

Core thesis: findability = helping Google understand WHAT content is about
(entities, not keyword strings), WHO the entity behind it is (knowledge graph
presence), and whether it can be TRUSTED, on a crawlable foundation. Eight
frameworks: Knowledge Graph Entity Optimization, Ontology-Based Categorization,
Augmented Query, Phrase-Based Indexing, Reasonable Surfer, Trust Metrics, SEO
Audit Diagnostic Checklist, Patent Analysis Methodology.

### Coverage vs. baseline

| Baseline item | Verdict | Notes |
|---|---|---|
| Schema / structured data | COVERED++ | Reframes it entirely: schema is not for rich results, it tells Google WHICH ENTITY the page is about and links it to the knowledge graph. Deepest treatment of the three audits |
| Internal linking | COVERED+ | Reasonable Surfer weights link value by CLICK PROBABILITY: position, prominence, anchor quality. Independently confirms the 2026-08-13 finding that sitewide nav links are worth far less than contextual in-body links |
| Trust / E-E-A-T | COVERED+ | Adds knowledge-based trust (factual accuracy vs benchmarks) and seed-site distance, mechanisms Shepard does not name |
| PAA questions, attribute coverage | COVERED | Ontology framework: cover the attributes autocomplete and PAA show searchers expect |
| Technical crawlability, canonicals, titles | COVERED | Audit Diagnostic Checklist. Shallower than Zyppy on titles specifically |
| Content depth vs keyword stuffing | COVERED | Phrase-based indexing: natural co-occurring phrase diversity, explicitly not density |
| NAP consistency | COVERED+ | Recast as "Consistency Across Properties": inconsistent entity information REDUCES knowledge graph confidence. Explains the mechanism our NAP rule only asserted |
| **GBP / map pack / proximity** | **MISSING** | Third framework in a row. No local pack tactics anywhere |
| **Link acquisition tactics** | **MISSING** | Reasonable Surfer explains link VALUE, not how to get links |
| Reviews as ranking factor | MISSING | |
| AI Overviews / GEO | MISSING **by self-admission** | "Pre-AI-era frameworks. Predates LLM deployment in search" |
| CWV / speed mechanics | PARTIAL | "Slow page load, penalize". No INP/LCP/CLS specifics |

### What it ADDS beyond baseline + Roof + Shepard

1. **Entities as a first-class concern.** Neither Roof (term counts) nor
   Shepard (quality signals) models entities. Slawski's "things, not strings"
   frame is the missing layer under everything we have done with schema, NAP
   and sameAs, and it explains WHY those matter rather than just asserting it.
2. **Entity disambiguation**, which diagnoses a live problem we had already
   observed but never classified. See the red flag below.
3. **Augmented queries**: Google expands a query using entity attributes it
   knows. No knowledge graph presence means no augmentation, so an unknown
   entity is invisible to a whole class of queries it never gets matched to.
4. **Knowledge-based trust**: factual accuracy checked against benchmarks. This
   converts the no-fabricated-proof rule from an ethics and FTC position into a
   RANKING mechanism, and it retroactively validates publishing verifiable
   specifics (OSHA ratios, WAC codes, PBOT rules) over marketing adjectives.
5. **Patent Confidence Hierarchy**, a general evidence-grading scale: single
   patent = possible, continuation = likely active, 20+ related = strongly
   supported, matches observable behaviour = confirmed. Useful well beyond
   patents; it is the same discipline as the verification rules added to the
   shared CLAUDE.md on 2026-08-14.

### Red flags for RHC under Slawski's decision rules

1. ~~ENTITY DISAMBIGUATION FAILURE~~ **RETRACTED 2026-08-15, one day after
   writing it.** This audit claimed RHC's fake Google review was a live entity
   disambiguation failure, a customer of a same-named Texas business reviewing
   the wrong listing. Enrique corrected it: the review was **planted by Rafa's
   previous web designer**, who also ran his SEO. There is no Texas business
   and no entity collision. The Texas wording is a sloppy fake.
   Worth keeping as a worked example of the failure mode the shared CLAUDE.md
   warns about. A framework supplies a category, the category fits the shape of
   the evidence, and the fit feels like a finding. It was not. Nothing was
   measured and no provenance was checked; the diagnosis was pattern-matching
   dressed as diagnosis. **A framework can tell you what to look for. It cannot
   tell you what happened.**
   Slawski's entity-disambiguation guidance still applies to RHC on its merits
   (thin sameAs, no knowledge panel), just not for this reason.
2. **Thin sameAs.** Two links (Google Maps, Facebook). Slawski treats sameAs as
   the primary mechanism for connecting a page's entity to the knowledge graph.
3. **No author or expertise markup.** The site has `founder: Person Rafael
   Hernandez` inside LocalBusiness and nothing else. His E-A-T rule penalizes
   absent author identification. Rafa's since-2016 experience is real and
   currently machine-invisible.
4. **No knowledge graph presence at all.** RHC triggers no knowledge panel. His
   own limitations section concedes this case: "Emerging entities with no
   knowledge graph presence. Frameworks assume entity establishment is
   achievable." So the framework diagnoses RHC accurately and then admits it is
   weakest exactly here. GBP verification is the single largest lever on it,
   and it is still blocked on Rafa.

### Conflicts

1. **Roof's term counts vs Slawski's phrase diversity.** Roof says match
   competitor term counts; Slawski says meaningful co-occurring phrases arise
   from comprehensive treatment and warns against density without diversity.
   Same shape as the Roof/Shepard conflict already recorded, same resolution:
   calibrate to competitor norms, keep the language natural.
2. **Slawski's date vs our direction.** His frameworks predate LLM search by
   his own admission, and were recorded on the day Enrique decided to lean
   toward AI-citation as the faster route for this site. INFERENCE, flagged as
   ours and not his: entity clarity should matter MORE for AI answer engines,
   not less, because they resolve entities to decide who to cite. Unverified.
   Treat as a hypothesis to test, not a conclusion.

### Verdict

Does NOT fill the local-pack hole, which is now MISSING in all three audited
frameworks and remains the documented gap. What it does supply is the entity
model underneath the local, schema and NAP work already shipped: it explains
the mechanism those rules only asserted.

Note the headline finding of this audit was RETRACTED within a day (see red
flag 1). The framework is still worth having. The retraction is a caution about
how it gets used: its categories are sharp enough to make a wrong diagnosis
feel right.

---

(Next framework audits get appended below.)