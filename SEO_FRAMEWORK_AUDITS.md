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

## Framework Queue (triaged 2026-07-25)

1. Cyrus Shepard expert framework: AUDIT NOW. Expert lens complementary to
   Roof (quality/brand/effort signals vs. math); directly covers Roof's
   E-E-A-T and AI-era gaps. Paste next.
2. Core GEO playbook + GEO Content Optimizer: AUDIT NOW, EXECUTE LATER.
   Covers the AI Overviews MISSING row. Execution is gated on prerendering:
   AI crawlers cannot read this client-side React site yet, so GEO rewrites
   before prerendering would optimize pages AI engines cannot see. Treat the
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

(Next framework audits get appended below.)