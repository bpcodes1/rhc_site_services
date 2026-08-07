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
- OSHA sanitation ratio is 1 toilet per 20 workers. Keep it consistent sitewide.