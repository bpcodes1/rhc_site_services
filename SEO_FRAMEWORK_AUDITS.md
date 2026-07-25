# SEO Framework Audits

Each SEO framework Enrique brings gets audited against SEO_BASELINE.md (the
independent research baseline) and logged here. Verdicts: COVERED (framework
handles it), PARTIAL (framework touches it but research adds more), MISSING
(framework silent; baseline is the only source). Each audit also records what
the framework ADDS beyond the baseline, and any conflicts between the two.
The map of MISSING items across all audited frameworks = what we must execute
from the baseline alone.

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