// Single source of truth for every JSON-LD block on the site.
//
// Why this file exists: name, phone, and service areas used to be typed out
// separately on About Us and Contact Us, which had already produced two
// LocalBusiness blocks disagreeing about the address. Google matches the
// Business Profile to the site by exact string, so any drift costs the local
// ranking signal. Everything now derives from the constants below.
//
// Deliberately NO postal address. RHC is a service-area business and its
// Google listing is set to "No location; deliveries and home services only",
// so the address is hidden there. Publishing one here would contradict the
// listing. areaServed carries the location signal instead.
//
// Deliberately NO aggregateRating. Google has disallowed self-serving review
// markup since 2019, and RHC has zero verified reviews regardless.

export const SITE = 'https://rhcsiteservice.com'

// Stable node ids so a page's Service can point at the business without
// repeating it.
export const BUSINESS_ID = `${SITE}/#business`
export const PERSON_ID = `${SITE}/#rafa`

export const NAP = {
  name: 'RHC Site Services',
  telephone: '+15036077412',
  email: 'info@rhcsiteservices.com',
} as const

export const AREA_SERVED = [
  'Portland, OR',
  'Salem, OR',
  'Eugene, OR',
  'Bend, OR',
  'Gresham, OR',
  'Vancouver, WA',
  'Tacoma, WA',
  'Seattle, WA',
]

// Confirmed by Rafa 2026-08-14: 7am to 6pm, seven days.
const HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '07:00',
    closes: '18:00',
  },
]

// The stable Google Maps identifier for the listing, not a share link. The URL
// previously used here carried session parameters (entry=ttu, g_ep=...) that
// are generated per-share and are not a durable identifier for the entity.
// The CID is the listing's permanent id, decoded from the hex in that URL
// (0x49107ebcd4c6f6fe).
const GOOGLE_MAPS_URL = 'https://maps.google.com/?cid=5264847313884870398'

// Rafa expanded from a bare inline name into an addressable node. Slawski's
// entity work is the reason: a name with no @id and no links is a string, not
// an entity, and nothing connects the person to the business or to the page
// that describes him.
//
// Deliberately NO jobTitle: "founder" is what the site already claims and the
// About Us page supports. Owner vs founder is unconfirmed and guessing it would
// publish an invented fact about a client.
// Deliberately NO sameAs and NO image: Rafa has no confirmed public profile
// (confirmed by Enrique 2026-08-20) and his photo is still an open About Us
// TODO. Add both when they exist; an empty array is worse than the absent key.
const founder = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Rafael Hernandez',
  url: `${SITE}/about-us`,
  worksFor: { '@id': BUSINESS_ID },
  // Grounded in what the About Us page actually states: he worked inside his
  // father's portable sanitation business and has been on Pacific Northwest
  // job sites since 2016.
  knowsAbout: [
    'Portable sanitation',
    'Portable toilet rental',
    'Restroom trailer rental',
    'Temporary fencing',
    'Construction site logistics',
  ],
}

// The one canonical LocalBusiness block. Every page emits this identical node,
// so there is no second definition anywhere to drift out of sync.
export const business = {
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: NAP.name,
  url: `${SITE}/`,
  telephone: NAP.telephone,
  email: NAP.email,
  description:
    'Portable toilet, restroom trailer, shower trailer, temporary fencing, and storage container rentals delivered across Oregon and Washington.',
  // Already the og:image sitewide, 1200x630, and the only representative
  // photo the site publishes. No `logo` key: there is no logo file in this
  // repo, and public/favicon.svg is an unrelated purple mark that appears
  // nowhere in the brand palette. Pointing `logo` at it would be worse than
  // omitting it.
  image: `${SITE}/preview.webp`,
  // Reinforces the link between this site and the Google listing, using the
  // same permanent id as sameAs rather than a second, different URL.
  hasMap: GOOGLE_MAPS_URL,
  // 2016 attaches to Rafa's work history, never to the brand, so there is no
  // foundingDate here. See SEO_STATUS.md "Person vs brand".
  founder,
  areaServed: AREA_SERVED,
  openingHoursSpecification: HOURS,
  // Only profiles confirmed to exist and to be controlled by RHC. Enrique
  // confirmed 2026-08-20 that these two are the only ones. This list should
  // grow after the citation pass (queue task 9) creates real listings; adding
  // speculative URLs now would point the entity at pages that do not exist.
  sameAs: [GOOGLE_MAPS_URL, 'https://www.facebook.com/RHCSiteServices/'],
}

type Crumb = { name: string; path?: string }

/** Trail always starts at Home; pass only the steps after it. */
export function breadcrumb(trail: Crumb[]) {
  const items = [{ name: 'Home', path: '/' }, ...trail]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      // The final crumb is the current page, so it carries no item URL.
      ...(crumb.path ? { item: `${SITE}${crumb.path === '/' ? '/' : crumb.path}` } : {}),
    })),
  }
}

/**
 * No price, no priceRange, no offers with amounts: pricing is form-only
 * sitewide and the one published range lives in a FAQ answer, not in markup.
 */
export function service(opts: {
  name: string
  description: string
  path: string
  serviceType: string
  areaServed?: string[]
}) {
  return {
    '@type': 'Service',
    '@id': `${SITE}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { '@id': BUSINESS_ID },
    areaServed: opts.areaServed ?? AREA_SERVED,
    url: `${SITE}${opts.path}`,
  }
}

/**
 * Kept even though Google retired FAQ rich results for most sites in May 2026:
 * marked-up question and answer pairs are cited more often by AI answer
 * engines, which now front most local service queries.
 */
export function faqPage(faqs: readonly { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export function webPage(opts: { name: string; description: string; path: string }) {
  return {
    '@type': 'WebPage',
    '@id': `${SITE}${opts.path}#webpage`,
    name: opts.name,
    description: opts.description,
    url: `${SITE}${opts.path}`,
    isPartOf: { '@id': BUSINESS_ID },
  }
}

/**
 * Wraps nodes into one @graph so each page ships a single script tag instead
 * of three, and so @id references resolve within the page.
 */
export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}