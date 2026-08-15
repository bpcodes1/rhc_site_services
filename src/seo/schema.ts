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
  // 2016 attaches to Rafa's work history, never to the brand, so there is no
  // foundingDate here. See SEO_STATUS.md "Person vs brand".
  founder: { '@type': 'Person', name: 'Rafael Hernandez' },
  areaServed: AREA_SERVED,
  openingHoursSpecification: HOURS,
  sameAs: [
    'https://www.google.com/maps/place/RHC+Site+Services/@45.0449079,-122.9588222,17z/data=!3m1!4b1!4m6!3m5!1s0x54955723f4080829:0x49107ebcd4c6f6fe!8m2!3d45.0449041!4d-122.9562473!16s%2Fg%2F11s4_f91yz?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D',
    'https://www.facebook.com/RHCSiteServices/',
  ],
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