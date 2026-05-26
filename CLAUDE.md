# RHC Site Services — Full Project Brief

Portable toilet and site equipment rental company headquartered in Portland, OR. Business model is a middleman — RHC connects clients with local service providers. Rafa (Rafael Hernandez) is the owner. Built by Enrique Piedra Orta and Bryan Josue Piedra Orta (Be-Techplus).

## Tech Stack
TypeScript / React / Vite / Tailwind / react-router-dom / react-helmet-async

## Design System
Primary reference: `src/rhc-design.css` — CSS from the Claude Design / Stitch handoff. Single source of truth for all visual decisions. `design.md` at project root contains the original design tokens and brand rationale.

Read `design.md` at the start of any session involving copy, design tokens, or visual decisions.

Key tokens:
- Primary: #1d2b3e (slate grey)
- Secondary: #a73a00 (burnt orange), bright: #fd651e
- Surface: #f9f9ff (soft cream)
- Fonts: Archivo Narrow (headlines), Public Sans (body), JetBrains Mono (labels/mono)

## Business Context
- RHC is a MIDDLEMAN. Never say "we own the fleet," "our inventory," or "no middlemen." Never reveal the middleman model but never claim direct ownership either.
- **How Rafa's model works operationally:** Rafa has no fixed inventory and no standing contracts with specific providers. When a lead comes in asking for a service, Rafa finds a local provider who can fulfill it, gets their price based on the lead's specific context (location, size, duration, etc.), quotes the lead slightly higher, and keeps the difference. He never commits to a provider until there is a confirmed lead.
- **What this means for service page specs:** Specs on service pages (sizes, weight limits, rental periods, prohibited items, etc.) reflect what the Oregon/Washington market standardly offers, NOT what RHC specifically stocks or guarantees. When new service pages require specs, research the regional market standard — do not wait on Rafa to confirm "what he offers" because the answer is always "whatever the market provides."
- **Spec copy framing rule:** Never write "we offer X sizes" or "our weight limit is Y." Always frame as "standard sizes available in the Portland metro area include..." or "providers in the Pacific Northwest typically allow up to X tons." This is accurate regardless of which provider Rafa ends up using on any given lead.
- HQ: Portland, OR (Portland is the `is-hq` city in city grids)
- Phone: 503-607-7412
- Email for forms: Enrique has this — connect to Formspree before launch (TODO in LeadForm.tsx)
- No pricing on site for most services. Exception: Restroom Trailers shows starting range ($900–$1,200 for 2-stall weekend event)
- Primary CTA is always the lead form. Phone number ONLY at the very bottom of the page (final CTA section). Never in the hero.

## Pages Build Status

### Core Pages
- Homepage `/` ✓ BUILT
- Portable Toilets `/portable-toilets` ✓ BUILT
- Restroom Trailers `/restroom-trailers` ✓ BUILT
- Temporary Fencing `/temporary-fencing` ✓ BUILT
- Shower Trailers `/shower-trailers` ✓ BUILT
- Storage Containers `/storage-containers` ✓ BUILT
- Roll-Off Dumpsters `/roll-off-dumpsters` — TODO (placeholder exists)
- About Us `/about-us` — TODO (placeholder exists)
- Contact Us `/contact-us` — TODO (placeholder exists)
- FAQ `/faq` — TODO (placeholder exists)

### Location Pages (all placeholders exist, none fully built)
Bend, OR: `/porta-potty-rental-bend-or`, `/restroom-trailer-rental-bend-or`, `/temporary-fencing-rental-bend-or`
Portland, OR: `/porta-potty-rental-portland-or`, `/restroom-trailer-rental-portland-or`, `/temporary-fencing-rental-portland-or`
Seattle, WA: `/restroom-trailer-rental-seattle-wa`, `/temporary-fencing-rental-seattle-wa`

## Service Areas (8 cities)
Salem OR | Portland OR (HQ) | Eugene OR | Bend OR | Gresham OR | Tacoma WA | Vancouver WA | Seattle WA

## COPY RULES — Never Break These

1. **No em dashes anywhere.** Replace with a comma or rewrite the sentence. No exceptions.
2. **No "dispatch" — use "RHC" instead.** Every instance. Sidebar label "Dispatch Status" → "Availability."
3. **No phone number in the hero.** Phone ONLY in the final CTA section at page bottom.
4. **No phone ghost button in hero lean actions.** Hero has one CTA: "Get a Same-Day Quote →" only.
5. **No "national company" comparisons in hero sections.** The Why RHC section may reference national competitors (they're named as "national corporations with 275+ locations" etc.) but hero and use cases sections do not compare to named or unnamed national companies.
6. **No middleman language.** Never say "we broker," "we're a middleman," or "no middlemen." Never claim fleet ownership either ("our inventory," "our trucks," "we own every unit"). Correct framing: "confirmed clean before it arrives," "delivered and installed by RHC," "one accountable team."
7. **"Or call PNW dispatch"** in final CTA phone label → **"Or call RHC directly"**
8. **No pricing on site** except Restroom Trailers (starting range $900–$1,200 allowed). All other services use "fill out the form" approach with explanation of why no pricing is posted.
9. **Specs must be published** for each service page. No competitor does this. It's the primary Prove It mechanism (Wiebe) and the main ranking differentiator (Kyle Roof).
10. **Dream outcome must be stated** for each audience on service pages (Hormozi). Not the vehicle (fence delivered) but the destination (site is compliant and crew never touched a panel).

## BUILD RULES — Never Break These

- Every page uses `react-helmet-async` with unique `<title>`, `<meta name="description">`, and `<link rel="canonical">`.
- Hero on service pages uses `hero-lean` CSS class, NOT the full homepage hero.
- At a Glance sidebar label: "Availability" (not "Dispatch Status").
- `LeadForm` component accepts `defaultService` prop — pre-selects the relevant service in the dropdown.
- Footer uses `site-footer` className to avoid CSS conflicts with default `footer` element styles.
- Nav marks "Services" as active (`is-active` class) on all service page routes.
- City grid: Portland has `is-hq` class. All cities link to `#quote`.

## Process for Each Remaining Service Page

1. **Research Phase** (Enrique runs):
   - 3 Google searches: generic keyword, construction-specific, event-specific
   - For each: H2s from top 3–5 results, topics covered, specs listed, PAA questions, Related Searches
   - Review mining: 1-star and 5-star from 3 competitor Google listings (raw quotes verbatim)
   - Enrique hands all raw findings to Claude. Claude asks any clarifying questions inline at this stage (pricing approach, specs available, add-ons confirmed, etc.).

2. **Copy Draft** (Claude writes, Enrique reviews):
   - Full copy for all sections before touching any code
   - Enrique approves or requests changes
   - Rewritten sections presented if changes needed
   - Second approval before build

3. **Brutal Framework Analysis** (Claude runs on approved copy — load all 5 profiles from `.claude/expert-profiles/`):
   - Kyle Roof: URL, meta title char count, H1, keyword variants, PAA coverage, specs, LSI terms
   - Wiebe: All 7 sweeps (Clarity, Voice, So What, Prove It, Specificity, Emotion, Zero Risk)
   - Schwartz: Awareness stage, sophistication stage, mechanism, concentration, gradualization
   - Hormozi: Dream outcome, perceived likelihood, time delay, effort, guarantee architecture
   - Christensen: Job to be done, struggling moment, four forces (push/pull/anxiety/habit), circumstance segmentation
   - Present failures ranked by severity. Enrique decides what to fix.

4. **Build** (after Enrique approves all fixes)

## Service Page Structure (apply to all remaining pages)

```
Helmet (meta title, description, canonical)
Breadcrumb
Lean Hero (H1 + subhead + single CTA button + At a Glance sidebar)
Product Types Section (cards with specs — no competitor publishes these)
Sizing Guide Section
Use Cases Section (4 use cases with dream outcome per audience)
Why RHC Section (3 differentiators: delivery accountability, pricing transparency, equipment quality)
Service Areas Section (city grid, 8 cities, Portland is HQ)
FAQ Section (details/summary accordion, first item open by default)
Final CTA Section (form + phone number at bottom)
```

## Expert Profiles
Full JSON profiles stored in `.claude/expert-profiles/`. Load them at the Brutal Framework Analysis step — do not load upfront on non-copy sessions.

- **Kyle Roof** (`kyle-roof.json`) — SEO. Math-based on-page optimization. PAA questions become H2s/FAQ. Specs = unique content.
- **Joanna Wiebe** (`joanna-wiebe.json`) — Conversion copy. 7 Sweeps: Clarity, Voice, So What, Prove It, Specificity, Emotion, Zero Risk. VoC from reviews goes directly into copy verbatim.
- **Eugene Schwartz** (`eugene-schwartz.json`) — Persuasion architecture. Awareness stages, market sophistication, Concentration technique (destroy alternatives), Gradualization (build belief before claiming).
- **Alex Hormozi** (`alex-hormozi.json`) — Offer engineering. Value Equation: Dream Outcome × Perceived Likelihood / Time Delay × Effort. Dream outcome = destination not vehicle.
- **Clayton Christensen** (`clayton-christensen.json`) — Differentiation. Jobs to Be Done, Four Forces of Progress (push/pull/anxiety/habit), circumstance segmentation, struggling moment lens.

## Key Decisions Made (do not re-litigate unless Enrique raises them)
- **Oregon Portable Toilets LLC (Rafa's dad)** — logo trust bar on site. Pending Rafa's approval. Hold.
- **Custom printed windscreens** — excluded. Not every provider carries it.
- **Crowd control barricades** — excluded from fencing page. Keep fencing focused.
- **Post-driven AND panel fencing** — both included since RHC as middleman can source either.
- **Shower Trailers** — separate service from Restroom Trailers. Has its own page.
- **Blog** — dropped for now. Launching focused, add later.
- **react-helmet-async** — installed, HelmetProvider wraps app in main.tsx.

## Rafa's Requirements
- No pricing on site (except Restroom Trailers starting range)
- Phone number is LAST RESORT — bottom of page only
- Primary CTA is always the form
- Site covers 6 services: Portable Toilets, Restroom Trailers, Temporary Fencing, Storage Containers, Shower Trailers, Roll-Off Dumpsters
- Targeting Oregon cities + a few Washington cities. Expanding to nationwide later.
- Photos: 50/50 client-provided and stock. Use `placeholder` div with `ph-tag` until real photos arrive.

## Pricing Decisions by Service
| Service | Pricing Approach |
|---|---|
| Portable Toilets | Form only — no starting range |
| Restroom Trailers | Starting range allowed: $900–$1,200 for 2-stall weekend |
| Temporary Fencing | Form only — no starting range |
| Shower Trailers | TBD — ask Enrique |
| Storage Containers | TBD — ask Enrique |
| Roll-Off Dumpsters | TBD — ask Enrique |

## Writing Voice (for any client-facing copy outside the website)
See `/Users/enriquep/ai-fundamentals/module-outputs/module-06-writing/Self-writing-profile.json` and `self-writing-skill.md` for Enrique's personal writing voice (used for sales scripts and outreach, not website copy).
