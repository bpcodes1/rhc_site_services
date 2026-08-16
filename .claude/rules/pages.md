---
globs: ["src/pages/**/*.tsx"]
---
# Page Rules

All pages:
- Helmet (react-helmet-async) with unique title, meta description, and canonical
  link: https://rhcsiteservice.com/{route}.
- Register a new page in THREE places or it will not ship correctly:
  1. the `<Routes>` tree in src/AppRoutes.tsx (NOT App.tsx, which now only wraps
     BrowserRouter around AppRoutes),
  2. the ROUTES array in prerender.mjs, or the page never gets prerendered and
     crawlers see an empty shell,
  3. public/sitemap.xml.
- Contact Us stays out of the Header nav; it lives in the Footer "Company" column.
- Footer uses the site-footer className.
- Nav marks Services active (is-active) on every service route.

Service pages (src/pages/services/):
- Hero uses hero-lean with one CTA only: "Get a Same-Day Quote →" linking to
  #quote. No phone, no ghost button, no national-company comparisons in the hero
  or use cases sections. The Why RHC section may name national corporations.
- Section order: Breadcrumb, Lean Hero with At a Glance sidebar ("Availability"
  label), Product Types (cards with published specs), Sizing Guide, Use Cases
  (state the dream outcome per audience), Why RHC (3 differentiators), Service
  Areas (8-city grid), FAQ (details/summary accordion, first item open), Final
  CTA (form plus phone).

Location pages (src/pages/locations/):
- Shorter than service pages. Copy the structure of the matching built city page
  (e.g., src/pages/locations/portland/PortaPottyPortland.tsx).
- OSHA sanitation ratio: state the LEGAL MINIMUM and RHC's planning number
  separately. They are not the same, and conflating them put a false claim on
  seven pages until 2026-08-15.
  - The law (29 CFR 1926.51(c), adopted by Oregon via OAR 437-003-0020) is
    TIERED, not a flat ratio: 20 or fewer workers = 1 toilet facility;
    20 to 199 = one toilet seat AND one urinal per 40 workers; 200+ = per 50.
  - RHC PLANS at one unit per 20 workers. Say so as RHC's recommendation, never
    as what OSHA requires. The justification is real and worth stating: the
    legal minimum counts a urinal separately and standard portable units do not
    have one.
  - Washington is stricter and separate: WAC 296-155-140, tiered by crew size.
    That table is already published on the Seattle page.
  - Never write "OSHA requires one unit per 20 workers." It does not. The error
    came from reading the table's first row, "20 or fewer employees = 1", as a
    ratio. Verify against osha.gov before restating any regulation.