import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../../seo/schema'
import LeadForm from '../../../components/LeadForm'
import heroImg from '../../../assets/cities/bend/bend_hero.webp'
import portaPottyImg from '../../../assets/portable-toilets/porta-potty1.webp'
import adaPortableImg from '../../../assets/portable-toilets/ada_portable.webp'

const permitRules = [
  {
    label: 'Private property: no permit required.',
    body: "A unit placed on your own driveway, yard, or active job site does not require a standalone permit from the City of Bend. For construction projects, sanitation placement is covered under the site's primary Building Permit issued by the Bend Permit Center.",
    status: 'clear',
  },
  {
    label: 'Public street or sidewalk: permit required.',
    body: 'Any unit placed in a public parking lane, alleyway, or sidewalk requires a Right-of-Way Permit or Street Use Permit from the City of Bend Community Development Department. Applications go through the Bend Online Permit Center or in person at City Hall, 710 NW Wall St. A unit placed without authorization is subject to immediate removal by the city and a municipal code violation fine. On a construction timeline, that disruption costs more than the permit.',
    status: 'required',
  },
  {
    label: 'HOA communities: check before you book.',
    body: 'Bend has a high concentration of HOA neighborhoods. Most require portable units to be screened from street view and removed within 14 to 30 days, even if the city has no objection. Verify your HOA bylaws before confirming a delivery date.',
    status: 'check',
  },
  {
    label: 'Unincorporated Deschutes County events.',
    body: 'Festivals, outdoor gatherings, and mass events held outside Bend city limits fall under Deschutes County Code 8.16. The county reviews toilet-to-attendee ratios and ADA unit requirements as part of the Special Event Permit application. Your unit count needs to be ready before you apply.',
    status: 'check',
  },
  {
    label: 'Oregon state law on all rentals.',
    body: "Under OAR 340-071-0330, every portable toilet placed in Oregon must be serviced by a state-licensed sewage disposal contractor, and that contractor's name must be displayed on the exterior of the unit. This is how you verify your rental is legally compliant from day one.",
    status: 'check',
  },
]

const units = [
  {
    num: '01',
    name: 'Standard Portable Toilet',
    body: 'Single-occupancy, ventilated, with hand sanitizer and a high-capacity tank built for daily construction use. The go-to for OSHA-compliant sanitation on Central Oregon job sites.',
    image: portaPottyImg,
    w: 1195,
    h: 896,
  },
  {
    num: '02',
    name: 'ADA-Compliant Unit',
    body: 'Larger footprint, interior grab bars, anti-slip flooring, and full wheelchair access. Required for any public event or job site where workers or guests with mobility limitations are present. Deschutes County Special Event Permit applications include a review of ADA unit ratios.',
    image: adaPortableImg,
    w: 1200,
    h: 896,
  },
]

const faqs = [
  {
    q: 'How much does it cost to rent a porta potty in Bend, OR?',
    a: "The number depends on four things: delivery location within Central Oregon, number of units, service frequency, and rental duration. A single unit on a Bend job site for one week is quoted differently than a four-unit event setup in unincorporated Deschutes County over a weekend. We do not post a generic number because it would either pad your quote to cover every edge case or under-quote and add costs later. Fill out the form with your location and dates and RHC will have a hard quote back to you the same day.",
  },
  {
    q: 'How long can you rent a porta potty in Bend?',
    a: 'Standard rentals in the Central Oregon market run one to four weeks. Extended rentals for long construction projects are available. Long-term placements in Bend HOA communities may be subject to bylaws requiring removal within 14 to 30 days regardless of the rental term. Note your placement details on the quote form.',
  },
  {
    q: 'How much is a portable toilet per day in Central Oregon?',
    a: 'Portable toilet rentals in this market are not priced by the day. You are renting a unit for a minimum period that includes delivery, the rental window, and pickup. Pricing reflects the full rental, not a daily rate. Submit your dates and location and RHC will quote the full cost.',
  },
  {
    q: 'Do I need a permit to place a porta potty in Bend?',
    a: 'For private property: no. Driveway, yard, and job site placements do not require a standalone city permit. For public street or sidewalk placement: yes, a Right-of-Way Permit from the City of Bend Community Development Department is required. For events in unincorporated Deschutes County: a Special Event Permit through the county includes a sanitation review. Note your placement location on the form and RHC will flag what applies.',
  },
  {
    q: 'How many porta potties do I need for a Bend construction site?',
    a: 'OSHA 1926.51 sets the legal minimum at one toilet seat and one urinal per 40 workers for sites of 20 to 199, and Oregon adopts the same numbers. Because standard portable units include no separate urinal, RHC quotes at one unit per 20 workers on a single-shift site, which puts a Bend crew comfortably above the floor rather than exactly on it. Service at minimum once every seven days. Two-shift operations add 50 percent capacity and require twice-weekly service. Tell us your crew size and shift schedule on the form and we will confirm the right unit count.',
  },
  {
    q: 'Is there a portable toilet rental service near me in Bend, OR?',
    a: 'Yes. RHC delivers within Bend city limits and to all surrounding Central Oregon communities including Redmond, Sisters, La Pine, Sunriver, and Prineville. Note your exact address on the quote form and we will confirm delivery for your specific location.',
  },
]

// Kept for the testimonial slots below; uncomment when real reviews are added.
/*
const testimonialStyle = {
  blockquote: {
    margin: '20px 0 0' as const,
    padding: '14px 18px',
    background: 'var(--surface)',
    borderLeft: '3px solid var(--secondary)',
    borderRadius: '0 4px 4px 0',
  },
  text: {
    fontSize: '14px',
    color: 'var(--on-surface)',
    lineHeight: '1.65',
    fontStyle: 'italic' as const,
    margin: 0,
  },
  footer: {
    marginTop: '8px',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--secondary)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  },
}
*/

const schema = graph([
  business,
  service({
    name: 'Porta Potty Rental in Bend, OR',
    description:
      'Portable toilet rentals for Bend job sites and events on a hard arrival window. Local permit guidance included. Same-day quotes from RHC.',
    path: '/porta-potty-rental-bend-or',
    serviceType: 'Portable toilet rental',
    areaServed: ['Bend, OR'],
  }),
  breadcrumb([{ name: 'Portable Toilets', path: '/portable-toilets' }, { name: 'Bend, OR' }]),
  faqPage(faqs),
])

export default function PortaPottyBend() {
  return (
    <main id="main">
      <Helmet>
        <title>Porta Potty Rental in Bend, OR | RHC Site Services</title>
        <meta name="description" content="Portable toilet rentals for Bend job sites and events on a hard arrival window. Local permit guidance included. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservice.com/porta-potty-rental-bend-or" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/portable-toilets">Portable Toilets</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Bend, OR</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid hero-lean-grid--split">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Portable Sanitation · Bend, OR &amp; Central Oregon</span>
              </div>
              <h1 className="h-xl">
                Porta Potty Rental in <span className="underline accent">Bend, OR</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                In Central Oregon, the complaint is always the same: a six-hour delivery window that becomes a full-day wait with no call when the truck runs late. RHC Site Services rents porta potties and portable toilets to construction sites and events across Bend and Central Oregon, gives you a confirmed arrival time, and flags permit requirements before delivery day. Your crew stays on schedule.
              </p>
            </div>

            <aside className="hero-lean-meta" aria-label="At a glance">
              <div className="meta-row">
                <div className="meta-label">Availability</div>
                <div className="meta-value">
                  <span className="live-dot" aria-hidden="true"></span>Open · Same-Day Quotes
                </div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Unit Types</div>
                <div className="meta-value">Standard · Deluxe · ADA</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Bend · Redmond · Sisters · La Pine · Sunriver · Prineville</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Lead Time</div>
                <div className="meta-value">48 hrs standard · next-day in Bend</div>
              </div>
            </aside>

            <div className="hero-lean-actions">
              <a href="#quote" className="btn btn-primary btn--pulse">Get My Same-Day Quote →</a>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="stat-strip">
        <div className="container">
          <div className="stat-strip-inner">
            <div className="stat-strip-item">
              <div className="stat-strip-num">48<em>hr</em></div>
              <div className="stat-strip-label">Standard delivery window</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-num">6</div>
              <div className="stat-strip-label">Equipment categories, one contact</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-num">8</div>
              <div className="stat-strip-label">Cities across OR &amp; WA</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-num">$0</div>
              <div className="stat-strip-label">Hidden fees. Ever.</div>
            </div>
          </div>
        </div>
      </div>

      {/* PERMIT GUIDE */}
      <section id="permit-guide">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Bend Permit Guide</div>
              <h2 className="h-lg">Do you need a permit to place a porta potty in Bend, OR?</h2>
            </div>
            <p>The answer depends on where the unit is going. Here is the full breakdown for portable restroom placement in Bend and Deschutes County.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {permitRules.map((rule, i) => (
              <div key={i} className={`permit-rule permit-rule--${rule.status}`}>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: 'var(--on-surface)' }}>
                  <strong>{rule.label}</strong>{' '}
                  {rule.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Note your placement location on the quote form and RHC will flag any permit requirements specific to your situation before the truck rolls.
          </p>
        </div>
      </section>

      {/* UNIT TYPES */}
      <section id="unit-types" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Available Units</div>
              <h2 className="h-lg">Standard, Deluxe, and ADA units for Bend construction sites and events.</h2>
            </div>
            <p>Three unit types cover the full range of Central Oregon job sites, outdoor events, and residential projects.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
            {units.map((unit) => (
              <div
                key={unit.num}
                style={{
                  flex: '1 1 280px',
                  maxWidth: '380px',
                  background: 'var(--surface)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--outline-variant)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={unit.image} width={unit.w} height={unit.h} alt={unit.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '20px', alignItems: 'start', padding: '24px' }}>
                  <div className="mono" style={{ color: 'var(--secondary)', paddingTop: '2px' }}>{unit.num}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '18px', fontWeight: 600, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                      {unit.name}
                    </h3>
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.65', color: 'var(--on-surface-variant)' }}>
                      {unit.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)', textAlign: 'center' }}>
            <Link to="/portable-toilets#sizing-guide" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
              See the full sizing guide and OSHA compliance tables on the main Portable Toilets page →
            </Link>
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">03 / Use Cases</div>
              <h2 className="h-lg">Built for Bend job sites, High Desert events, and Central Oregon remodels.</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Construction &amp; Job Sites</div>
              <h3>Site Compliant. Crew On Site. Inspection Cleared.</h3>
              <p>
                Central Oregon's construction market has been running hard for years. Multi-unit residential builds, resort development along the Cascades, and infrastructure work across Deschutes County mean active sites that need OSHA-compliant sanitation from mobilization day, not as an afterthought.
              </p>
              <p style={{ marginTop: '12px' }}>
                One unit per 20 workers, which sits above the OSHA 1926.51 floor of one seat and one urinal per 40. Serviced at minimum once every seven days. Delivered on a hard arrival window so your crew is not standing around waiting. By inspection day, the box is checked, the site is compliant, and your crew has not left the property once to find a restroom.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your site passes the inspection. Your crew stayed on site and kept moving.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Outdoor Events</div>
              <h3>Your Guests Did Not Notice the Restrooms. That Is the Goal.</h3>
              <p>
                Bend hosts a full outdoor events calendar. Vineyard weddings, High Desert festivals, concerts, and private gatherings draw guests who have expectations. Event-grade units and construction units are separate equipment categories. When you book outdoor event service through RHC, the units delivered to your venue are specified for event use.
              </p>
              <p style={{ marginTop: '12px' }}>
                Delivered on time, positioned for guest flow, serviced during multi-day events so nothing becomes a problem mid-reception.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your guests did not notice the restrooms. That is the goal.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Residential Remodels &amp; ADU Builds</div>
              <h3>Contractor Shows Up Monday to a Site That Is Ready.</h3>
              <p>
                A six-month bathroom renovation or ADU build does not need to mean six months of crew inconvenience. One unit, positioned where it does not block site access, serviced weekly. RHC serves Bend and the surrounding Central Oregon communities including Redmond, Sisters, La Pine, Sunriver, and Prineville.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The contractor showed up Monday to a site that was ready. The project stayed on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RHC */}
      <section id="why-rhc" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">04 / The RHC Standard</div>
              <h2 className="h-lg">Why contractors and event organizers in Bend choose RHC over the first result on Google.</h2>
            </div>
            <p>
              The most common complaint in Central Oregon portable toilet reviews is not a dirty unit. It is a vendor who cannot be reached after booking. A delivery window given as a four-to-six-hour range. A permit question answered with silence. We built RHC around those three failures.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Hard Arrival Windows</h3>
              <p>
                A construction timeline in Central Oregon does not have slack for a delivery that shows up whenever the truck gets there. We give you a hard arrival window. If anything changes on our end before delivery, you hear from RHC before the window, not after you have been waiting.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 01" paragraph about hard arrival windows
                  Intended review theme: confirmed delivery time / crew didn't wait / hard window was honored
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>The Price You Approve Is the Price You Pay</h3>
              <p>
                No fuel surcharges added at pickup. No environmental compliance fees on the back-end invoice. The number you approve on day one is the number on your final bill. The only variable after that is rental duration if your project runs longer than quoted, and that conversation happens before pickup, not after.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 02" paragraph about the price you approve being the price you pay
                  Intended review theme: no surprise charges / invoice matched the quote / no hidden fees
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Oregon-Compliant, Verifiable Before Day One</h3>
              <p>
                Under Oregon law, the name of the licensed sewage disposal contractor must be displayed on the exterior of every unit. Every unit arranged through RHC carries that information visibly. You can confirm legal compliance before your rental starts without making a single call.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 03" paragraph about Oregon licensed sewage disposal contractor display
                  Intended review theme: compliant unit / professional setup / would book again
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">05 / FAQ</div>
              <h2 className="h-lg">Questions about porta potty rentals in Bend, OR.</h2>
            </div>
            <p>Everything you need to know before you book. Need something not covered here? Drop it in the form or call RHC directly.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item" open={i === 0}>
                <summary>
                  <span className="faq-num">Q.{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-q">{faq.q}</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-a">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="contact">
        <div className="stripe" aria-hidden="true"></div>
        <div className="container">
          <div className="final-cta-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--secondary-fixed-dim)' }}>06 / Get Started</div>
              <h2 className="h-lg" style={{ marginTop: '24px' }}>
                Ready to get a porta potty<br />on your Bend site?
              </h2>
              <p>Submit your project details and RHC will come back with a confirmed quote the same day. Bend delivery, Central Oregon coverage, permit guidance included. No surprise charges on the back end.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Fast response.</span>
              </div>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "No commitment. Fast response." final-trigger block in the Get Started section
                  Intended review theme: easy booking / fast quote / smooth overall experience / would use again
                  Restore with:
                  <blockquote style={{ margin: '20px 0', padding: '14px 18px', background: 'rgba(255,255,255,0.07)', borderLeft: '3px solid var(--secondary)', borderRadius: '0 4px 4px 0' }}>
                    <p style={{ fontSize: '14px', color: 'inherit', lineHeight: '1.65', fontStyle: 'italic', margin: 0 }}>REAL REVIEW TEXT HERE</p>
                    <footer style={{ marginTop: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--secondary-fixed-dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      &#9733;&#9733;&#9733;&#9733;&#9733; · Google Review
                    </footer>
                  </blockquote> */}

              <a href="tel:+15036077412" className="final-phone">
                <div>
                  <div className="final-phone-label">Or call RHC directly</div>
                  <div className="final-phone-num">503&#8209;607&#8209;7412</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </a>
            </div>

            <LeadForm
              id="quote"
              variant="final"
              defaultService="Standard, Deluxe, or ADA Portable Toilets"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
