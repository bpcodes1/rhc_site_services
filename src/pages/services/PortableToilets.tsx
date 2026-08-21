import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../seo/schema'
import LeadForm from '../../components/LeadForm'
import heroImg from '../../assets/portable-toilets/portable_hero.webp'
import portaPottyImg from '../../assets/portable-toilets/porta-potty1.webp'
import adaPortableImg from '../../assets/portable-toilets/ada_portable.webp'

const cities = [
  { name: 'Salem', state: 'OR', hq: false },
  { name: 'Portland', state: 'OR', hq: false },
  { name: 'Eugene', state: 'OR', hq: false },
  { name: 'Bend', state: 'OR', hq: false },
  { name: 'Gresham', state: 'OR', hq: false },
  { name: 'Tacoma', state: 'WA', hq: false },
  { name: 'Vancouver', state: 'WA', hq: false },
  { name: 'Seattle', state: 'WA', hq: false },
]

const faqs = [
  {
    q: 'How much does a portable toilet rental cost in Portland?',
    a: "Honest answer: it depends on four variables: delivery location, number of units, service frequency, and rental duration. We don't post a generic number because doing so would force us to either pad it to cover edge cases or under-quote and bill the difference later. Both are exactly what we built RHC to avoid. Submit the form and we'll have a hard quote back to you the same day.",
  },
  {
    q: 'How many portable toilets do I need?',
    a: 'For construction sites, OSHA 1926.51 sets the legal minimum: one toilet facility for 20 or fewer workers, then one toilet seat and one urinal per 40 workers up to 199. Oregon adopts the same numbers. RHC plans at one unit per 20 workers instead, because that minimum assumes a separate urinal that standard portable units do not have, and because a queue at 7am costs more than a second unit. Service at least once every 7 days either way. For events: one unit per 50 guests for events under 4 hours. Add 15–25% capacity if alcohol is served or the event runs longer than 4 hours.',
  },
  {
    q: 'Do I need a permit to place a porta potty in Portland?',
    a: "Private property, driveway, yard, active job site: no permit required. Placement on a public street or sidewalk requires a PBOT permit. We'll flag this when we confirm your quote so it's not a surprise on delivery day.",
  },
  {
    q: 'How often does a portable toilet need to be serviced on a construction site?',
    a: "OSHA requires service at least once every 7 days for single-shift operation. High-use sites, two-shift operations, or sites with more than 20 workers per unit need more frequent service. Tell us your crew size and we'll build the right cadence into your quote.",
  },
  {
    q: 'Where does the waste from portable toilets in Oregon go?',
    a: "Licensed waste haulers transport it to certified wastewater treatment facilities regulated by Oregon DEQ. Not landfills.",
  },
  {
    q: "What's the difference between a standard and an ADA-compliant unit?",
    a: 'ADA units have a larger footprint, interior grab bars, anti-slip flooring, and a wheelchair-accessible entrance. Required for any public event or job site where workers or guests with mobility limitations are present.',
  },
  {
    q: 'Do portable toilets have lights inside?',
    a: 'Standard units use a translucent roof panel for daylight visibility. For nighttime events or early-morning construction sites, ask about units with interior lighting when you request a quote.',
  },
]

const schema = graph([
  business,
  service({
    name: 'Portable Toilet Rentals',
    description:
      'Hard delivery windows, no surprise fees, and inspected units: portable toilet and porta potty rentals for construction sites and events across Oregon and Washington.',
    path: '/portable-toilets',
    serviceType: 'Portable toilet rental',
  }),
  breadcrumb([{ name: 'Portable Toilet Rentals' }]),
  faqPage(faqs),
])

export default function PortableToilets() {
  return (
    <main id="main">
      <Helmet>
        <title>Portable Toilet Rentals in Oregon &amp; Washington | RHC</title>
        <meta name="description" content="Clean, inspected units on a hard arrival window. Porta potty and portable toilet rentals for construction sites and events across Oregon and Washington." />
        <link rel="canonical" href="https://rhcsiteservice.com/portable-toilets" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Portable Toilet Rentals</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid hero-lean-grid--split">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Portable Sanitation · Oregon &amp; Washington</span>
              </div>
              <h1 className="h-xl">
                Portable Toilet Rentals in <span className="underline accent">Oregon &amp; Washington</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Clean, inspected units delivered on a hard arrival window. RHC Site Services rents porta potties and portable toilets to construction sites, job sites, and events across Oregon and Washington.
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
                <div className="meta-value">Standard · ADA</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Portland → Seattle &amp; the PNW</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Lead Time</div>
                <div className="meta-value">48 hrs · next-day in core areas</div>
              </div>
            </aside>

            <div className="hero-lean-actions">
              <a href="#quote" className="btn btn-primary btn--pulse">Get a Same-Day Quote →</a>
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

      {/* UNIT TYPES */}
      <section id="unit-types">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Unit Types</div>
              <h2 className="h-lg">Standard and ADA: What's the right unit for your site?</h2>
            </div>
            <p>Three unit classes cover almost every construction site and event scenario in Oregon and Washington. Pick by use case, or call RHC and we'll spec it for you in under five minutes.</p>
          </div>

          <div className="units">
            <article className="unit">
              <div className="unit-photo">
                <img src={portaPottyImg} width={1195} height={896} alt="Standard portable toilet" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="unit-body">
                <div className="mono-num">01 / Standard</div>
                <h3>Standard Portable Toilet</h3>
                <p>The go-to unit for construction sites and active job sites. Single-occupancy, ventilated, with hand sanitizer and high-capacity tank for heavy daily use. OSHA-compliant: your site passes inspection and your crew always has a working sanitation option.</p>
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--outline-variant)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Dimensions', value: '44" W × 48" D × 90" H' },
                    { label: 'Tank Capacity', value: '60–70 gal (approx. 150 uses per service)' },
                    { label: 'Hand Sanitizer', value: 'Dispenser included, standard' },
                    { label: 'Ventilation', value: 'Roof vent + translucent roof panel' },
                    { label: 'Occupancy', value: 'Single-occupancy' },
                    { label: 'OSHA Rating', value: '1 unit per 10 workers, serviced weekly' },
                  ].map(spec => (
                    <div key={spec.label} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>{spec.label}</span>
                      <span style={{ fontSize: '13px', color: 'var(--on-surface)', lineHeight: '1.5' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="unit">
              <div className="unit-photo">
                <img src={adaPortableImg} width={1200} height={896} alt="ADA-compliant accessible portable toilet" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block', background: '#f9f9ff' }} />
              </div>
              <div className="unit-body">
                <div className="mono-num">02 / ADA</div>
                <h3>ADA-Compliant Portable Toilet</h3>
                <p>Larger footprint, interior grab bars, anti-slip flooring, and full wheelchair accessibility. Required, not optional, for any public event or job site where workers or guests with mobility limitations are present. Don't wait until an inspector flags it.</p>
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--outline-variant)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Dimensions', value: '60" W × 60" D × 90" H' },
                    { label: 'Interior Turning Radius', value: '60" clearance (full wheelchair access)' },
                    { label: 'Door Opening', value: '32" clear width, outswing' },
                    { label: 'Grab Bars', value: 'Rear wall + lateral side wall' },
                    { label: 'Floor', value: 'Anti-slip textured surface' },
                    { label: 'Compliance', value: 'ADA Title II & Title III compliant' },
                  ].map(spec => (
                    <div key={spec.label} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>{spec.label}</span>
                      <span style={{ fontSize: '13px', color: 'var(--on-surface)', lineHeight: '1.5' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SIZING GUIDE */}
      <section id="sizing-guide" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Sizing Guide</div>
              <h2 className="h-lg">How many portable toilets does your site actually need?</h2>
            </div>
            <p>The two variables that determine unit count are headcount and duration. Use the tables below as a starting point, then tell us your specifics in the quote form and we'll confirm the right number for your exact situation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>

            <div>
              <p className="mono" style={{ marginBottom: '20px', color: 'var(--secondary)' }}>For Construction Sites · OSHA Standard</p>
              <div className="table-scroll"><table className="sizing-table">
                <thead>
                  <tr>
                    <th>Crew Size</th>
                    <th>Minimum Units</th>
                    <th>Service Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1–10 workers</td>
                    <td>1 unit</td>
                    <td>Once per week</td>
                  </tr>
                  <tr>
                    <td>11–20 workers</td>
                    <td>2 units</td>
                    <td>Once per week</td>
                  </tr>
                  <tr>
                    <td>21–30 workers</td>
                    <td>3 units</td>
                    <td>Once per week</td>
                  </tr>
                  <tr>
                    <td>Two-shift operation</td>
                    <td>Add 50% capacity</td>
                    <td>Twice per week</td>
                  </tr>
                </tbody>
              </table></div>
            </div>

            <div>
              <p className="mono" style={{ marginBottom: '20px', color: 'var(--secondary)' }}>For Events · General Guidelines</p>
              <div className="table-scroll"><table className="sizing-table">
                <thead>
                  <tr>
                    <th>Guest Count</th>
                    <th>Under 4 Hours</th>
                    <th>Full Day</th>
                    <th>Alcohol Served</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>50 guests</td>
                    <td>1 unit</td>
                    <td>2 units</td>
                    <td>2–3 units</td>
                  </tr>
                  <tr>
                    <td>100 guests</td>
                    <td>2 units</td>
                    <td>3–4 units</td>
                    <td>4–5 units</td>
                  </tr>
                  <tr>
                    <td>200 guests</td>
                    <td>4 units</td>
                    <td>6–7 units</td>
                    <td>8–10 units</td>
                  </tr>
                  <tr>
                    <td>500 guests</td>
                    <td>10 units</td>
                    <td>14–16 units</td>
                    <td>18–22 units</td>
                  </tr>
                </tbody>
              </table></div>
            </div>

          </div>

          <p style={{ marginTop: '32px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Not sure? Tell us your headcount, event duration, and whether alcohol is served in the quote form and we'll give you a specific recommendation.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">03 / Use Cases</div>
              <h2 className="h-lg">Built for construction sites, outdoor events, and residential remodels.</h2>
            </div>
            <p>From a single unit on a residential remodel to a 40-unit fleet for a large-scale commercial mobilization, the same operational standard applies across every job.</p>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Construction</div>
              <h3>Construction &amp; Job Sites</h3>
              <p>OSHA 1926.51 sets the legal floor at one toilet seat and one urinal per 40 workers. RHC quotes at one unit per 20, since standard units carry no separate urinal. We deliver to active job sites, position units exactly where your site manager marks them, and service on the schedule your crew needs, including through winter mud season on the I-5 corridor.</p>
            </div>
            <div className="use-case">
              <div className="use-num">02 / Events</div>
              <h3>Outdoor Events &amp; Festivals</h3>
              <p>Weddings, festivals, vineyard events, community gatherings. Delivered on time, positioned for guest flow, and serviced during multi-day events so nothing becomes a problem mid-reception.</p>
            </div>
            <div className="use-case">
              <div className="use-num">03 / Residential</div>
              <h3>Residential Remodels &amp; ADU Builds</h3>
              <p>A six-month bathroom remodel doesn't need to mean six months of inconvenience for your crew. One unit, positioned where it doesn't block access, serviced weekly.</p>
            </div>
            <div className="use-case">
              <div className="use-num">04 / Emergency</div>
              <h3>Last-Minute &amp; Emergency Needs</h3>
              <p>When another vendor fails to deliver and you need units fast, call RHC directly. We'll tell you honestly what we can do and when, and if we can make it work, we will. Don't fill out the form, call.</p>
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
              <h2 className="h-lg">What sets RHC apart from every other portable toilet company in the PNW.</h2>
            </div>
            <p>The most common complaint in portable toilet rental reviews reads the same every time: zero communication, promised a call back and never got one, unit showed up three days late with no explanation. We built RHC to fix those three failures.</p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Hard Arrival Windows</h3>
              <p>When you call for an ETA and hear "one cannot be provided," your crew sits idle and your schedule bleeds. We give you a hard arrival window. If something changes on our end, you hear from us, not the other way around.</p>
            </div>
            <div className="why-item">
              <div className="why-num">02</div>
              <h3>The Price You Approve is the Price You Pay</h3>
              <p>No environmental compliance fees added on the back end. No fuel surcharges you didn't approve. The number you agree to on day one is the number on your invoice when the job is done.</p>
            </div>
            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Confirmed Clean Before It Arrives</h3>
              <p>Units don't get skipped service loops when it rains. Every unit is verified before delivery and serviced on the schedule we committed to.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="service-area">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">05 / Coverage</div>
              <h2 className="h-lg">Where we deliver portable toilets.</h2>
            </div>
            <p>We deliver across Oregon and Washington. Standard turnaround is 48 hours. Next-day available in our core service areas.</p>
          </div>

          <div className="city-tags">
            {cities.map((city) => (
              <a key={city.name} href="#quote" className={`city-tag${city.hq ? ' is-hq' : ''}`}>
                <span className="city-name">{city.name}</span>
                <span className="city-state">{city.state}{city.hq ? ' · HQ' : ''}</span>
              </a>
            ))}
          </div>

          <div className="area-foot" style={{ marginTop: '24px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--secondary)', letterSpacing: '.08em', textTransform: 'uppercase', flexShrink: 0 }}>i</div>
            <p>Portland, Bend, and Seattle each set their own permit rules and unit counts. RHC publishes a full guide for each: <Link to="/porta-potty-rental-portland-or">porta potty rental in Portland</Link>, <Link to="/porta-potty-rental-bend-or">portable toilets for Bend job sites</Link>, and <Link to="/porta-potty-rental-seattle-wa">Seattle porta potty permit rules</Link>.</p>
          </div>

          <div className="area-foot" style={{ marginTop: '24px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--secondary)', letterSpacing: '.08em', textTransform: 'uppercase', flexShrink: 0 }}>i</div>
            <p><strong>Don't see your city listed?</strong> Fill out the form. We're actively expanding and may still be able to serve your location.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">06 / FAQ</div>
              <h2 className="h-lg">Questions we get about portable toilet rentals.</h2>
            </div>
            <p>Everything you need to know before a job starts. Need something not here? Drop it in the quote form or call RHC. A person will answer.</p>
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
              <div className="eyebrow" style={{ color: 'var(--secondary-fixed-dim)' }}>07 / Get Started</div>
              <h2 className="h-lg" style={{ marginTop: '24px' }}>
                Ready to get a porta potty<br />on your site?
              </h2>
              <p>Submit your request and RHC will get back to you the same day with a hard quote. No surprise fees, no waiting days for a callback.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Fast response.</span>
              </div>

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
              defaultService="Standard or ADA Portable Toilets"
            />
          </div>
        </div>
      </section>

    </main>
  )
}
