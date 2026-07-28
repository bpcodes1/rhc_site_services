import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LeadForm from '../../../components/LeadForm'
import heroImg from '../../../assets/cities/bend/bend_hero.webp'
import fencePanelsImg from '../../../assets/temporary-fencing/fence.webp'
import chainFencingImg from '../../../assets/temporary-fencing/chain_fencing.webp'
import barricadeImg from '../../../assets/temporary-fencing/fence2.webp'

const permitRules = [
  {
    label: 'Active job site on private property: no standalone fence permit required.',
    body: "A temporary fence placed entirely within your parcel during an active construction project does not require a separate permit from the City of Bend. Perimeter fencing is addressed under the site's primary Building Permit issued through the Bend Permit Center. What the fence does need to meet is Oregon OSHA's perimeter security standard, with 6 feet as the accepted minimum height for sites where unauthorized entry poses a safety hazard. Every fence system arranged through RHC meets that standard.",
    status: 'clear',
  },
  {
    label: 'Fence encroaching on a public sidewalk or street: permit required.',
    body: 'Any temporary fence that occupies public right-of-way, including a sidewalk, parking lane, or alley, requires a Right-of-Way Encroachment Permit from the City of Bend Community Development Department. Applications go through the Bend Online Permit Center or in person at City Hall, 710 NW Wall St. A fence placed in public right-of-way without authorization is subject to immediate removal and a municipal code violation. Note your placement boundaries on the quote form and RHC will flag whether this applies before delivery.',
    status: 'required',
  },
  {
    label: 'Bend HOA communities: check before you book.',
    body: 'Bend has a high concentration of HOA neighborhoods. Most CC&Rs restrict temporary structures including fencing and require removal within 30 to 90 days regardless of the project timeline. Some require the fence to be screened from street view. Verify your HOA bylaws before confirming a delivery date.',
    status: 'check',
  },
  {
    label: 'Event fencing on City of Bend public land or parks: permit required.',
    body: 'Temporary fencing placed on City of Bend public property, parks, or plazas as part of an event requires a Special Event Permit through the City of Bend Parks and Recreation Department. The application includes a site plan showing the fence layout. Events that proceed without a required permit are subject to shutdown. Submit your event location on the quote form and RHC will flag what applies.',
    status: 'required',
  },
  {
    label: 'Events in unincorporated Deschutes County: county permit may apply.',
    body: 'Outdoor events held on rural or unincorporated Deschutes County property may require a Special Event Permit through the county depending on size and nature. The permit review can include a site plan and perimeter fencing layout. Note your property type and headcount on the form and RHC will flag what applies before the truck rolls.',
    status: 'check',
  },
]

const fenceTypes = [
  {
    num: '01',
    name: 'Panel Fencing (Freestanding)',
    body: 'Steel panels on weighted bases. No ground penetration required, fully portable, and reconfigurable without tools. The right system for events, short-term construction perimeters, and any site where ground disturbance is not permitted. Panels install and remove cleanly with no surface damage. Add windscreens for site screening or event aesthetics.',
    image: fencePanelsImg,
  },
  {
    num: '02',
    name: 'Post-Driven Chain Link',
    body: 'Posts driven into the ground for maximum structural stability. The right system for long-duration construction sites, high-traffic perimeters, and locations where the High Desert wind is a persistent factor. More resistant to lateral load than panel fencing on bases. Requires ground penetration, so not suitable for paved or hardscaped surfaces.',
    image: chainFencingImg,
  },
  {
    num: '03',
    name: 'Barricades',
    body: 'Pedestrian crowd control and traffic direction for events, construction zones, and public right-of-way work. Lightweight, stackable, and configurable. Used alone for low-level perimeters or as a secondary barrier inside a panel or chain link fence line.',
    image: barricadeImg,
  },
]

const faqs = [
  {
    q: 'How much does it cost to rent temporary fencing in Bend, OR?',
    a: 'The number depends on four things: fence type (panel or post-driven), linear footage, rental duration, and delivery location within Central Oregon. A short-term event perimeter in Bend is priced differently than a multi-month construction site in unincorporated Deschutes County. We do not post a number because it would either pad your quote to cover every edge case or underquote and add costs later. Fill out the form with your location, footage estimate, and dates and RHC will have a confirmed quote back to you the same day.',
  },
  {
    q: 'Do I need a permit for temporary fencing in Bend?',
    a: 'For fencing placed entirely on private property during an active construction project: no standalone permit is required. For any fence that occupies public right-of-way including a sidewalk, alley, or parking lane: a Right-of-Way Encroachment Permit is required from the City of Bend Community Development Department. For event fencing on City of Bend public land or parks: a Special Event Permit is required. Note your placement details on the quote form and RHC will identify what applies before delivery.',
  },
  {
    q: 'My general contractor already has a temporary fence company they work with. Should I still get a quote from RHC?',
    a: "A GC's vendor relationship comes from familiarity, not necessarily price transparency or Bend-specific permit knowledge. Two things are worth confirming before committing to any vendor: whether the price in your quote is the price on your final invoice, and whether they can flag Right-of-Way Encroachment requirements for your Bend placement before delivery day. If yes to both, book with confidence. If you are not sure, a comparison quote from RHC takes two minutes and costs nothing. The locked pricing, reachable contact, and permit guidance are in every RHC quote. You can compare before your project starts.",
  },
  {
    q: 'What is the difference between panel fencing and post-driven chain link?',
    a: 'Panel fencing uses steel panels on weighted bases. No ground penetration, fully portable, and leaves no surface damage. Right for events, short-term construction perimeters, and any site where you cannot disturb the ground. Post-driven chain link drives posts directly into the soil for structural stability. Better for long-duration sites and locations with persistent wind. Not suitable for paved or hardscaped surfaces. Tell us your site conditions and timeline on the form and RHC will confirm which system fits.',
  },
  {
    q: 'How high should a construction fence be in Oregon?',
    a: 'Oregon OSHA perimeter security standards call for a fence sufficient to prevent unauthorized access, with 6 feet as the accepted minimum for sites where unauthorized entry poses a safety hazard. Panel and post-driven systems arranged through RHC meet that standard. If your project has specific height requirements from a building inspector or general contractor, note them on the form.',
  },
  {
    q: 'How do I keep a temporary fence from blowing over in Bend?',
    a: "Central Oregon's High Desert wind is a real consideration for panel fencing on freestanding bases. Three things address it: properly weighted bases on every panel, removing or rolling up windscreens during high-wind conditions since full windscreens act as a sail under load, and switching to post-driven chain link for long-duration sites where wind is persistent. If your site has significant wind exposure, note it on the quote form and RHC will specify the right system for your conditions.",
  },
  {
    q: 'Do I need a windscreen on my construction fence?',
    a: 'No. Windscreens are optional in Oregon. They are added for site screening, blocking the view of construction activity from neighboring properties or the street, or for dust and debris containment. Some HOA communities and city right-of-way projects require them. If your project has a visibility or containment requirement, note it on the form.',
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

export default function TemporaryFencingBend() {
  return (
    <main id="main">
      <Helmet>
        <title>Temporary Fencing Rental in Bend, OR | RHC Site Services</title>
        <meta name="description" content="Panel and post-driven temporary fencing for Bend job sites and events. Hard arrival windows, permit guidance included, locked pricing. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservice.com/temporary-fencing-rental-bend-or" />
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/temporary-fencing">Temporary Fencing</Link>
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
                <span className="eyebrow">Temporary Fencing · Bend, OR &amp; Central Oregon</span>
              </div>
              <h1 className="h-xl">
                Temporary Fencing Rental in <span className="underline accent">Bend, OR</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Nearly every 1-star fence review in Central Oregon says the same thing: the invoice did not match the quote, and the vendor went silent after booking. RHC locks your price from approval to final invoice and reviews Bend permit requirements before the truck rolls.
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
                <div className="meta-label">Fence Types</div>
                <div className="meta-value">Panel · Post-Driven · Barricades</div>
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
              <h2 className="h-lg">Do you need a permit to place temporary fencing in Bend, OR?</h2>
            </div>
            <p>The answer depends on where the fence is going and how long it will be there. Below is the full breakdown for construction sites, public right-of-way placements, and events in Bend and Deschutes County.</p>
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
            Note your placement location on the quote form. RHC will identify any permit requirements specific to your situation before delivery day.
          </p>
        </div>
      </section>

      {/* FENCE TYPES */}
      <section id="fence-types" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Fence Types</div>
              <h2 className="h-lg">Panel fencing and post-driven chain link for Bend job sites and events.</h2>
            </div>
            <p>Two primary systems cover the full range of Central Oregon construction sites and events. The right choice depends on your surface conditions, rental duration, and whether the fence needs to hold up to sustained High Desert wind.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
            {fenceTypes.map((type) => (
              <div
                key={type.num}
                style={{
                  background: 'var(--surface)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--outline-variant)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={type.image} alt={type.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '20px', alignItems: 'start', padding: '24px' }}>
                  <div className="mono" style={{ color: 'var(--secondary)', paddingTop: '2px' }}>{type.num}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '18px', fontWeight: 600, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                      {type.name}
                    </h3>
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.65', color: 'var(--on-surface-variant)' }}>
                      {type.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Add-ons available: windscreens and privacy screens · vehicle and pedestrian access gates
          </p>
          <p style={{ marginTop: '12px', fontSize: '14px', textAlign: 'center' }}>
            <Link to="/temporary-fencing#fence-types" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
              See full specs and configurations on the main Temporary Fencing page →
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
              <h2 className="h-lg">Built for Bend construction sites, High Desert events, and Central Oregon remodels.</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Construction &amp; Job Sites</div>
              <h3>Site Compliant. Inspection Cleared. Crew Never Left the Property.</h3>
              <p>
                Central Oregon's construction market runs hard. Multi-unit residential builds, commercial development along Highway 97, and infrastructure work across Deschutes County mean active sites that need a compliant perimeter from mobilization day, not as an afterthought when an inspection is a week out.
              </p>
              <p style={{ marginTop: '12px' }}>
                Oregon OSHA perimeter security standards require a fence sufficient to prevent unauthorized access on any site where entry poses a safety hazard. A six-foot panel or post-driven fence installed before the first crew arrives satisfies that requirement. Delivered on a confirmed arrival window so the perimeter is in place before your crew, not something being sorted during the first day of work.
              </p>
              <p style={{ marginTop: '12px' }}>
                By inspection day, the fence is in, the site is compliant, and your crew has not lost a single hour managing a delivery problem.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your site passed the inspection. The fence was there before your crew arrived on day one.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Outdoor Events</div>
              <h3>The Perimeter Held. Nobody on Your Team Touched It Once.</h3>
              <p>
                Bend's outdoor events calendar runs from late spring through October. Festivals, vineyard gatherings, High Desert concerts, and private functions draw crowds that need defined perimeters, controlled entry points, and clear sight lines for event staff.
              </p>
              <p style={{ marginTop: '12px' }}>
                A fence configured for traffic flow before gates open, maintained through a full event day, and removed inside your venue window without leaving marks on the surface. If your event also needs portable toilets or temporary sanitation, one call to RHC covers both. You do not manage a second vendor for the same event.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The perimeter held from gates-open to last guest out. Not a single incident report. You never thought about the fence.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Residential Remodels &amp; ADU Builds</div>
              <h3>The Neighbors Stayed Out. The Project Ran Clean.</h3>
              <p>
                A six-month remodel or ADU build in a Bend HOA neighborhood does not need to become a neighbor relations problem. A correctly placed temporary fence defines the work zone, keeps foot traffic out of the construction area, and satisfies most HOA requirements for site containment.
              </p>
              <p style={{ marginTop: '12px' }}>
                One fence, positioned where it does not block site access, and removed cleanly when the project closes. RHC serves Bend and all surrounding Central Oregon communities including Redmond, Sisters, La Pine, Sunriver, and Prineville.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The neighbors stayed out. The HOA had no complaint. The project ran clean from start to finish.
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
              <h2 className="h-lg">Why contractors and event organizers in Bend use RHC instead of whoever ranks first.</h2>
            </div>
            <p>
              The two complaints that appear in nearly every 1-star temporary fence review in Central Oregon are the same: the final bill did not match the quote, and the vendor became unreachable after the initial call. Most vendors in this market have never heard of a Bend Right-of-Way requirement either, so the permit situation lands on the client. We built RHC around all three of those failures.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Every Booking Confirmed. Every Delivery on a Hard Window.</h3>
              <p>
                A construction timeline in Central Oregon does not have slack for a vendor who goes quiet between the quote and delivery day. RHC confirms every booking before the truck is scheduled, gives you a hard arrival window, and if anything changes before delivery, you hear from RHC before that window, not after you have been waiting on site. That is not a goal. It is how every rental is managed.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 01" paragraph about confirmed bookings and hard delivery windows
                  Intended review theme: vendor followed through / confirmed before delivery / showed up on time
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
                No fuel surcharges added at pickup. No damage fees on the back-end invoice for normal wear. The number you approve on day one is the number on your final bill. The only variable after that is rental duration if your project runs longer than quoted, and that conversation happens before pickup, not after.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 02" paragraph about the price you approve being the price you pay
                  Intended review theme: invoice matched the quote exactly / no surprise charges / would book again
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Permit Knowledge Before Delivery Day</h3>
              <p>
                No competitor in this market publishes permit requirements for Bend fence placements. Most vendors hand you the fence and leave the permit question to you. RHC flags Right-of-Way requirements, HOA restrictions, and event permit conditions before the truck rolls. The permit situation is resolved before delivery day, not the morning of.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 03" paragraph about permit knowledge before delivery day
                  Intended review theme: flagged the permit before delivery / handled the complexity / no surprises on site
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
              <h2 className="h-lg">Questions about temporary fencing rentals in Bend, OR.</h2>
            </div>
            <p>Everything you need before you book. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
                Ready to get temporary fencing<br />on your Bend site?
              </h2>
              <p>Submit your project details and RHC will come back with a confirmed quote the same day. Panel or post-driven, events or construction, Bend city limits or anywhere in Central Oregon. Permit questions answered before the truck rolls. No surprise charges on the back end.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Fast response.</span>
              </div>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "No commitment. Fast response." final-trigger block in the Get Started section
                  Intended review theme: easy booking / quote came back same day / fence arrived on time / would use RHC again
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
              defaultService="Temporary Fencing (Panel Stands or Driven Posts)"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
