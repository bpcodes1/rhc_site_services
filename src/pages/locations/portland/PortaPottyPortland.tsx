import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LeadForm from '../../../components/LeadForm'
import heroImg from '../../../assets/cities/portland/portland_hero.webp'

const permitRules = [
  {
    label: 'Private property: no permit required.',
    body: "Placing a unit on your own driveway, yard, or active job site does not require a standalone permit from the City of Portland. For construction projects, sanitation placement is covered under the site's primary building permit issued through the Bureau of Development Services (BDS). The unit goes where your site plan designates.",
    status: 'clear',
  },
  {
    label: 'Public street or sidewalk: PBOT permit required.',
    body: 'Any unit placed in a public parking lane, alleyway, or sidewalk requires a Right-of-Way Use Permit from the Portland Bureau of Transportation (PBOT). A unit placed in the public right-of-way without authorization is subject to immediate removal and a code violation notice. On a construction timeline, that disruption costs more than the permit. Note your placement location on the quote form and RHC will flag this before the truck rolls.',
    status: 'required',
  },
  {
    label: 'HOA communities: check before you book.',
    body: "Portland's inner eastside, westside, and suburban neighborhoods have a high concentration of HOA communities. Most require portable units to be screened from street view and removed within a defined window, even when the city has no objection. Verify your HOA rules before confirming a delivery date.",
    status: 'check',
  },
  {
    label: 'Events outside Portland city limits: Multnomah County permit may apply.',
    body: 'Festivals, markets, and gatherings held on county-owned land or in unincorporated Multnomah County outside Portland city limits may require a Special Event Permit from Multnomah County. The county reviews sanitation plans as part of that application. Your unit count needs to be confirmed before you apply.',
    status: 'check',
  },
  {
    label: 'Oregon state law on all rentals.',
    body: "Under OAR 340-071-0330, every portable toilet placed in Oregon must be serviced by a state-licensed sewage disposal contractor, and that contractor's name must be displayed on the exterior of the unit. This is how you verify legal compliance before your rental starts, without making a single call.",
    status: 'check',
  },
]

const units = [
  {
    num: '01',
    name: 'Standard Portable Toilet',
    body: 'Single-occupancy, ventilated, with hand sanitizer and a high-capacity tank built for daily construction use. The go-to for OSHA-compliant sanitation on Portland job sites, from multi-family residential builds in outer SE and NE to commercial work across the metro.',
  },
  {
    num: '02',
    name: 'Deluxe Portable Toilet',
    body: 'Everything in the standard unit plus a fresh-water hand-wash station with soap. Right for client-facing job sites, residential remodels where the homeowner is present, and events where guests expect more than the minimum.',
  },
  {
    num: '03',
    name: 'ADA-Compliant Unit',
    body: 'Larger footprint, interior grab bars, anti-slip flooring, and full wheelchair access. Required for any public event in Portland or job site where workers or guests with mobility limitations are present. Oregon OSHA and ADA compliance require this. Not optional.',
  },
  {
    num: '04',
    name: 'High-Rise Portable Toilet',
    body: 'Half-height units designed to fit standard freight elevators for downtown Portland and Pearl District commercial construction. Full-size units cannot access upper floors on active high-rise projects. When your site is above grade, this is the unit that gets there. The floor super does not stop work to solve a sanitation problem. The project stays on schedule.',
  },
]

const faqs = [
  {
    q: 'How much does it cost to rent a porta potty in Portland?',
    a: 'The number depends on four things: your delivery location within the Portland metro, number of units, service frequency, and rental duration. A single unit on an East Portland job site quotes differently than a multi-unit setup for a Waterfront event. We do not post a generic number because it would either pad your quote to cover every edge case or come in low and add costs at billing. Submit the form and RHC will have a hard quote back to you the same day.',
  },
  {
    q: 'Do I need a permit to put a porta potty on the street in Portland?',
    a: 'Yes, for any public right-of-way placement. A Right-of-Way Use Permit from the Portland Bureau of Transportation (PBOT) is required before a unit can be placed in a parking lane, sidewalk, or alley. For private property: driveway, yard, and active job site placements do not require a standalone city permit. Note your placement location on the quote form and RHC will flag what applies before delivery day.',
  },
  {
    q: 'What are the OSHA requirements for portable toilets on construction sites in Oregon?',
    a: 'OSHA 1926.51 requires a minimum of one toilet facility per 20 workers on construction sites, serviced at minimum once every seven days. Two-shift operations require proportionally more units and twice-weekly service. Oregon OSHA administers its own enforcement plan, consistent with the federal standard. Tell us your crew size and shift schedule on the form and we will confirm the right unit count for your site.',
  },
  {
    q: 'Are handwashing stations required on Oregon construction sites?',
    a: 'Oregon OSHA requires handwashing facilities on construction sites where workers are exposed to certain substances, and handwashing stations are standard practice on compliant job sites in the Portland market. Deluxe units include a built-in fresh-water handwash station. Standalone handwash stations are available as an add-on to standard units. Note your site type on the form and RHC will confirm what applies.',
  },
  {
    q: 'What is a Portland Loo restroom?',
    a: 'The Portland Loo is a city-owned outdoor public toilet program operated by the City of Portland, with permanent fixtures installed in parks and public spaces around the city. It is not a rental service and has no connection to portable restroom rental companies. If you are looking for a portable restroom rental for a job site, event, or remodel in Portland, you are in the right place.',
  },
  {
    q: 'Where does the waste from a Portland porta potty rental go?',
    a: "Licensed waste haulers transport it to certified wastewater treatment facilities regulated by Oregon DEQ. Not landfills. The contractor's name is displayed on the exterior of every unit. This is how you confirm legal compliance before the rental starts.",
  },
  {
    q: 'How often are portable toilets serviced in Portland?',
    a: 'The minimum standard is once every seven days, which covers single-shift construction sites under OSHA guidelines. High-use sites, two-shift operations, and events require more frequent service, up to multiple times per week for high-traffic placements. Tell us your site type, crew size, or expected guest count on the form and RHC will build the right cadence into your quote.',
  },
  {
    q: 'What are common portable toilet problems in Portland?',
    a: 'The three most common complaints in the Portland-area portable restroom rental market: the unit is not serviced on the agreed schedule, the delivery window is too vague to plan around, and the vendor cannot be reached when something needs to change. These are communication failures, not equipment failures. RHC is one accountable contact from quote to pickup. Service schedules are confirmed in advance, delivery windows are specific, and there is one number to call when anything changes.',
  },
  {
    q: 'Where should a portable toilet be placed on a job site, and how close does the service truck need to get?',
    a: 'Place the unit within easy reach of the work area on a clear, level surface. Service trucks need an unobstructed path to reach the unit. A locked gate or blocked access lane on service day means a missed pump, which is the most common avoidable problem on Portland construction sites. For downtown and high-rise projects, confirm staging area dimensions and elevator access before delivery. Note your site access conditions on the quote form and RHC will flag anything that needs to be coordinated in advance.',
  },
]

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

export default function PortaPottyPortland() {
  return (
    <main id="main">
      <Helmet>
        <title>Porta Potty Rental in Portland, OR | RHC Site Services</title>
        <meta name="description" content="Portable toilet rentals for Portland job sites and events on a confirmed delivery window. PBOT permit guidance included. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservices.com/porta-potty-rental-portland-or" />
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/portable-toilets">Portable Toilets</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Portland, OR</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid hero-lean-grid--split">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Portable Sanitation · Portland, OR &amp; Metro Area</span>
              </div>
              <h1 className="h-xl">
                Porta Potty Rental in <span className="underline accent">Portland, OR</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Your crew shows up at 7. The unit was supposed to be there at 8. By 9 you have left three voicemails. In Portland, that is Tuesday. RHC gives you a hard arrival time, PBOT permit guidance before delivery day, and one number that gets answered.
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
                <div className="meta-value">Standard · Deluxe · ADA · High-Rise</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Portland · Gresham · Beaverton · Hillsboro · Lake Oswego · Tigard · Vancouver WA</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Lead Time</div>
                <div className="meta-value">48 hrs standard · next-day in Portland</div>
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
              <div className="eyebrow">01 / Portland Permit Guide</div>
              <h2 className="h-lg">Do you need a permit to place a porta potty in Portland, OR?</h2>
            </div>
            <p>The answer depends on where the unit is going. Here is the full breakdown for portable restroom placement in Portland and Multnomah County.</p>
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
            Note your placement location on the quote form and RHC will flag any permit requirements specific to your situation before delivery day.
          </p>
        </div>
      </section>

      {/* UNIT TYPES */}
      <section id="unit-types" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Available Units</div>
              <h2 className="h-lg">Standard, Deluxe, ADA, and High-Rise units for Portland job sites and events.</h2>
            </div>
            <p>Four unit types cover the full range of Portland construction sites, downtown high-rises, outdoor events, and residential projects.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {units.map((unit) => (
              <div
                key={unit.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: '20px',
                  alignItems: 'start',
                  padding: '24px',
                  background: 'var(--surface)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--outline-variant)',
                }}
              >
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
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
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
              <h2 className="h-lg">Built for Portland construction sites, metro events, and residential remodels.</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Construction &amp; Job Sites</div>
              <h3>Site Compliant. OSHA Checked. Crew on the Floor.</h3>
              <p>
                Portland's construction market runs hard. Multi-family residential development in outer SE and NE, commercial high-rise work downtown, and infrastructure projects across Multnomah County mean active sites that need OSHA-compliant sanitation from mobilization day forward.
              </p>
              <p style={{ marginTop: '12px' }}>
                OSHA 1926.51 requires one unit per 20 workers, serviced at minimum once every seven days. High-rise work downtown adds the constraint of freight elevator access for upper-floor work. Delivered on a confirmed arrival window so your crew is not waiting at the gate. By inspection day, the compliance box is checked and your crew never left the property once to find a restroom.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The site superintendent signed off on OSHA compliance by 8 AM. The crew stayed on the floor and kept moving.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Outdoor Events</div>
              <h3>Your Guests Did Not Notice the Restrooms. That Is the Outcome.</h3>
              <p>
                Portland runs a full outdoor events calendar. Waterfront festivals, Rose City markets, vineyard weddings in the Willamette Valley, and neighborhood gatherings across the metro draw guests with expectations. Event-grade units and construction units are separate equipment categories. When you book outdoor event service through RHC, the units delivered to your venue are specified for event use.
              </p>
              <p style={{ marginTop: '12px' }}>
                Delivered on time, positioned for guest flow, serviced during multi-day events so nothing becomes a problem mid-reception.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your guests did not notice the restrooms. That is the outcome.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Residential Remodels &amp; ADU Builds</div>
              <h3>The Contractor Shows Up Monday to a Site That Is Ready.</h3>
              <p>
                Portland's ADU ordinance changes have driven a wave of backyard cottage builds, basement conversions, and whole-house remodels across every neighborhood. A six-month project does not need to mean six months of crew inconvenience. One unit, positioned where it does not block site access, serviced weekly. RHC delivers throughout Portland and to Gresham, Beaverton, Hillsboro, Lake Oswego, Tigard, and Wilsonville.
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
              <h2 className="h-lg">Why Portland contractors and event planners choose RHC over the first result on Google.</h2>
            </div>
            <p>
              The most common complaint in Portland portable toilet rental reviews is not a dirty unit. It is a vendor who cannot be reached after booking. A delivery window given as a six-hour range. A permit question that nobody answers until the unit is already on the truck. We built RHC around those three failures.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Hard Arrival Windows</h3>
              <p>
                A Portland construction schedule does not have slack for a delivery that shows up whenever the truck gets there. We give you a hard arrival window. If anything changes on our end before delivery, you hear from RHC before the window, not after you have been waiting.
              </p>
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — confirmed delivery time / crew did not wait / hard window was honored]
                </p>
                <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
              </blockquote>
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>The Price You Approve Is the Price You Pay</h3>
              <p>
                No fuel surcharges added at pickup. No environmental compliance fees on the back-end invoice. The number you approve on day one is the number on your final bill. The only variable after that is rental duration if your project runs longer than quoted, and that conversation happens before pickup, not after.
              </p>
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — no surprise charges / invoice matched the quote / no hidden fees]
                </p>
                <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
              </blockquote>
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Oregon-Compliant, Verifiable Before Day One</h3>
              <p>
                Under Oregon law, the name of the licensed sewage disposal contractor must be displayed on the exterior of every unit. Every unit arranged through RHC carries that information visibly. You can confirm legal compliance before your rental starts without making a single call.
              </p>
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — compliant unit / professional setup / would book again]
                </p>
                <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
              </blockquote>
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
              <h2 className="h-lg">Questions about porta potty rentals in Portland, OR.</h2>
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
                Ready to get a porta potty<br />on your Portland site?
              </h2>
              <p>Submit your project details and RHC will come back with a confirmed quote the same day. Portland delivery, metro coverage, PBOT permit guidance included. No surprise charges on the back end.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Fast response.</span>
              </div>

              <blockquote style={{ margin: '20px 0', padding: '14px 18px', background: 'rgba(255,255,255,0.07)', borderLeft: '3px solid var(--secondary)', borderRadius: '0 4px 4px 0' }}>
                <p style={{ fontSize: '14px', color: 'inherit', lineHeight: '1.65', fontStyle: 'italic', margin: 0 }}>
                  [Testimonial placeholder — easy booking / fast quote / smooth overall experience / would use again]
                </p>
                <footer style={{ marginTop: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--secondary-fixed-dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  &#9733;&#9733;&#9733;&#9733;&#9733; · Google Review
                </footer>
              </blockquote>

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
              defaultService="Standard, Deluxe, ADA, or High-Rise Portable Toilets"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
