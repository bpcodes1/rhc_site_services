import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../../seo/schema'
import LeadForm from '../../../components/LeadForm'
import heroImg from '../../../assets/cities/portland/portland_hero.webp'
import fencePanelsImg from '../../../assets/temporary-fencing/fence.webp'
import chainFencingImg from '../../../assets/temporary-fencing/chain_fencing.webp'
import barricadeImg from '../../../assets/temporary-fencing/fence2.webp'

const permitRules = [
  {
    label: 'Fence stays on private property: no permit required.',
    body: 'A temporary fence placed entirely within your property line, job site, or private lot does not require a standalone permit. This covers most residential remodels, parking lot perimeters, and multifamily renovation zones. No application, no fees, no waiting period. Oregon OSHA perimeter security standards still apply on any site where unauthorized entry poses a safety hazard.',
    status: 'clear',
  },
  {
    label: 'Fence extends onto a public sidewalk, parking lane, or travel lane: PBOT TSUP required.',
    body: 'Any temporary fence that enters the public right-of-way requires a Temporary Street Use Permit (TSUP) from the Portland Bureau of Transportation. This is common on tight urban builds in the Pearl District, Old Town, and along dense downtown corridors. PBOT typically issues permits within 5 to 10 business days. Fees are calculated by square footage of fenced right-of-way per week, with higher rates in metered zones like downtown Portland. An insurance processing fee is added to the permit cost. Note your site footprint on the quote form and RHC will flag whether a TSUP applies before installation day.',
    status: 'required',
  },
  {
    label: 'Events on Portland Parks land: Portland Parks & Recreation Special Event Permit required.',
    body: 'Temporary fencing placed within Portland Parks jurisdiction, including Tom McCall Waterfront Park and other city parks, requires a Special Event Permit from Portland Parks & Recreation. Timeline and fees vary by event size and park location. Apply through Portland Parks & Recreation before scheduling your fence delivery. Submit your event location on the quote form and RHC will flag what applies.',
    status: 'required',
  },
  {
    label: 'HOA and private residential communities: check your CC&Rs first.',
    body: 'Portland metro HOA communities typically limit temporary fencing to 30 to 90 days under their CC&Rs. Some require screening from street view. Most standard renovation timelines fall within the permitted window. Confirm with your HOA board before booking. If your project timeline is tight against the CC&R limit, note it on the form.',
    status: 'check',
  },
]

const fenceTypes = [
  {
    num: '01',
    name: 'Panel Fencing (Freestanding)',
    specs: '12.5 ft W x 6.5 ft H · 80 lb concrete bases',
    body: 'Steel panels on weighted bases with no ground penetration. The standard for Portland events, paved urban job sites, and any location where surface damage is not permitted. Fully portable and reconfigurable as your perimeter shifts. Panels install and remove cleanly on concrete, asphalt, and manicured venue lawns. Available with privacy windscreens and sponsor banner attachment points.',
    image: fencePanelsImg,
  },
  {
    num: '02',
    name: 'Post-Driven Chain Link',
    specs: '6 ft standard · 8 ft available for high-security sites',
    body: 'Posts driven directly into soil or asphalt for maximum structural stability. The right system for long-duration Portland construction sites where security is the priority. More resistant to sustained lateral load than panel fencing on bases. Barbed wire top rail available for high-security urban sites. Not suitable for paved or hardscaped surfaces.',
    image: chainFencingImg,
  },
  {
    num: '03',
    name: 'Pedestrian Barricades',
    specs: 'Water-filled · stackable · interlocking',
    body: 'Crowd control and traffic channeling for Portland events and roadwork sites. Interlocking configuration holds position in PNW wind conditions. Used alone for low-level perimeters or as a secondary barrier inside a panel or chain link fence line.',
    image: barricadeImg,
  },
]

const faqs = [
  {
    q: 'Do I need a PBOT permit for temporary fencing in Portland?',
    a: 'If your fence stays entirely on private property, no permit is required. The moment your perimeter extends onto a public sidewalk, parking lane, or travel lane, you need a Temporary Street Use Permit (TSUP) from the Portland Bureau of Transportation. PBOT typically issues permits within 5 to 10 business days. Fees vary based on the square footage of fenced right-of-way per week and whether your site is in a metered zone like downtown Portland or the Pearl District. Note your site footprint on the quote form and RHC will flag whether a TSUP applies before installation.',
  },
  {
    q: 'How much does it cost to rent temporary fencing in Portland, OR?',
    a: 'Construction sites are quoted by the linear foot on a monthly billing cycle. Pricing varies by fence type, total perimeter footage, and any add-ons such as gates, windscreens, or barbed wire top rail. Events are quoted as a flat rate for the full rental period, inclusive of delivery, installation, and removal. Submit the form and RHC will have a detailed quote back to you the same day.',
  },
  {
    q: 'How quickly can temporary fencing be delivered in Portland?',
    a: 'For standard jobs with advance notice, RHC confirms a hard delivery window at booking. For urgent construction site requests or event setups within 72 hours, call RHC directly rather than using the form. We will tell you honestly what we can deliver and when.',
  },
  {
    q: 'What is the difference between panel fencing and post-driven chain link?',
    a: 'Panel fencing sits on weighted concrete bases with no ground penetration. Moveable as your perimeter shifts and leaves no surface damage. Right for Portland events and paved urban job sites. Post-driven chain link drives posts directly into soil or asphalt, the most stable option for long-term construction sites where maximum security is required. Not suitable for paved or hardscaped surfaces. Tell us your site conditions and timeline on the form and RHC will confirm which system fits.',
  },
  {
    q: 'How do you stabilize temporary fencing on a Portland job site or event?',
    a: 'Standard freestanding panels sit on 80 lb low-profile concrete bases, sufficient for most job sites and fair-weather events. For high-wind conditions, which are a factor in fall and winter at Waterfront venues and along the Columbia River Gorge, RHC adds sandbag ballast. If you are attaching privacy windscreens or sponsor banners, ballast is added automatically since full windscreens act as a sail under load. Specify your site conditions at booking.',
  },
  {
    q: 'My general contractor already has a fence vendor. Should I still get a quote from RHC?',
    a: "A GC's vendor relationship comes from familiarity, not necessarily Portland permit knowledge or price transparency. Two things are worth confirming before committing to any vendor: whether the price in your quote is the price on your final invoice, and whether they flag PBOT Temporary Street Use Permit requirements for your site footprint before delivery day. If yes to both, book with confidence. If you are not sure, a comparison quote from RHC takes two minutes and costs nothing.",
  },
  {
    q: 'Can temporary fencing damage pavement or grass at a Portland event venue?',
    a: 'No. Freestanding panel fencing uses flat rubber or low-profile concrete bases that rest on the surface with no stakes, no drilling, and no ruts. The right option for manicured venue lawns, finished concrete, and asphalt at Portland Parks venues and private event spaces.',
  },
  {
    q: 'How far in advance should I book fencing for a Portland summer event?',
    a: "At least 3 to 4 weeks for June through September events. Portland's outdoor event season is compressed and fence inventory moves fast. If your event is within the next two weeks, call RHC directly rather than using the form.",
  },
  {
    q: 'We manage multiple properties in Portland. Can RHC handle recurring deployments?',
    a: 'Yes. Property managers with ongoing renovation schedules can coordinate recurring bookings through RHC. One contact, confirmed windows for each property, consistent invoicing. Reach out through the form or call RHC directly to set up a deployment schedule.',
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
    name: 'Temporary Fencing Rental in Portland, OR',
    description:
      'Panel fencing and post-driven chain link for Portland construction sites, events, and multifamily properties. PBOT permit guidance, published specs, same-day quotes.',
    path: '/temporary-fencing-rental-portland-or',
    serviceType: 'Temporary fence rental',
    areaServed: ['Portland, OR'],
  }),
  breadcrumb([{ name: 'Temporary Fencing', path: '/temporary-fencing' }, { name: 'Portland, OR' }]),
  faqPage(faqs),
])

export default function TemporaryFencingPortland() {
  return (
    <main id="main">
      <Helmet>
        <title>Temporary Fencing Rental Portland OR | RHC Site Services</title>
        <meta name="description" content="Panel fencing and post-driven chain link for Portland construction sites, events, and multifamily properties. PBOT permit guidance, published specs, same-day quotes." />
        <link rel="canonical" href="https://rhcsiteservice.com/temporary-fencing-rental-portland-or" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/temporary-fencing">Temporary Fencing</Link>
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
                <span className="eyebrow">Temporary Fencing · Portland, OR &amp; Metro Area</span>
              </div>
              <h1 className="h-xl">
                Temporary Fencing Rental in <span className="underline accent">Portland, OR</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                A vendor who goes quiet between quote and delivery day puts your permit window or event perimeter at risk. RHC confirms every booking with a hard arrival window, reviews PBOT permit requirements before the truck rolls, and locks the price from quote to final invoice.
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
                <div className="meta-value">Portland · Gresham · Beaverton · Hillsboro · Lake Oswego · Vancouver, WA</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Lead Time</div>
                <div className="meta-value">Confirmed window at booking</div>
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
              <h2 className="h-lg">Do you need a permit for temporary fencing in Portland?</h2>
            </div>
            <p>The answer depends on where the fence is going. Below is the full breakdown for private property, public right-of-way encroachments, Portland Parks events, and HOA communities across the metro.</p>
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
              <h2 className="h-lg">Panel fencing and post-driven chain link for Portland job sites and events.</h2>
            </div>
            <p>Two primary systems cover the full range of Portland construction sites and events. The right choice depends on your surface, rental duration, and site security requirements.</p>
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
                    <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '18px', fontWeight: 600, margin: '0 0 4px', letterSpacing: '-0.01em' }}>
                      {type.name}
                    </h3>
                    <div className="mono" style={{ fontSize: '12px', color: 'var(--secondary)', letterSpacing: '0.04em', marginBottom: '8px' }}>
                      {type.specs}
                    </div>
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.65', color: 'var(--on-surface-variant)' }}>
                      {type.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Add-ons available: privacy windscreens · man gates (4 ft W x 7 ft H) · vehicle gates · barbed wire top rail · sandbag ballast
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
              <h2 className="h-lg">Built for Portland construction sites, outdoor events, and multifamily properties.</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Construction Sites</div>
              <h3>Site Fenced. OSHA Requirements Met. Crew Walked Onto a Secured Perimeter.</h3>
              <p>
                Urban Portland construction is tight. A Pearl District or Old Town job site typically shares a sidewalk, a parking lane, and a pedestrian corridor with foot traffic that does not stop for construction. Sites along the I-405 corridor and in high-density neighborhoods face additional exposure after hours, where an unsecured perimeter is both an OSHA liability and an equipment theft risk.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC delivers panel fencing or post-driven chain link based on your site footprint, flags whether your perimeter requires a PBOT Temporary Street Use Permit, and installs before your crew arrives. Your site is fenced and OSHA requirements are met before the first tool comes off the truck.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Site compliant. Perimeter secured. You never touched a permit application.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Outdoor Events</div>
              <h3>The Footprint Held. Sponsors Had a Clean Surface. Nothing Happened That Was Not Supposed To.</h3>
              <p>
                Portland's outdoor event season runs May through September and the best dates disappear fast. Rose Festival footprint, Waterfront Blues Festival staging, beer garden perimeters on SE Division, crowd control on the East Esplanade. PNW wind picks up in the afternoon and your perimeter needs to hold through a full event day.
              </p>
              <p style={{ marginTop: '12px' }}>
                Freestanding panel fencing installs without damaging grass or pavement, holds in wind conditions with sandbag ballast, and provides a clean surface for sponsor banners and directional signage. Removed inside your venue window with no marks left on the surface. Book at least 3 to 4 weeks out for June through September events.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Event footprint locked. Crowd flowed where you planned. Not a single incident report.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Multifamily Properties &amp; Apartment Complexes</div>
              <h3>Renovation Perimeter Controlled. Residents Separated From the Work Zone. No Complaint Calls.</h3>
              <p>
                Portland's multifamily market has been under continuous renovation pressure for over a decade, from Lloyd District apartment upgrades to inner SE townhome redevelopments. Property managers face a specific problem: keeping residents away from active work zones without creating a liability gap or a resident relations incident.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC confirms a hard delivery window, installs the fence on that window, and removes it when the work is done. One call, one contact, no chasing a vendor who stopped returning calls two weeks into a six-week project.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Perimeter up on day one. Residents separated from the work zone. Project closed clean.
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
              <h2 className="h-lg">Why Portland sites and events book through RHC instead of whoever ranks first.</h2>
            </div>
            <p>
              The pattern in nearly every 1-star temporary fence review in Portland is the same: the vendor was reachable for the quote and unreachable for everything after. No permit guidance. No confirmed window. An invoice at the end that did not match the number approved. RHC was built around all three of those failures.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Every Booking Confirmed. Every Delivery on a Hard Window.</h3>
              <p>
                A Portland timeline does not have slack for a vendor who goes quiet between the quote and delivery day. If your site has a PBOT permit on the line, a no-show does not cost you a day. It costs you the permit window. Every RHC booking runs through a three-step confirmation: site review, permit flag, and written delivery window. You receive all three before the job is booked.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 01" paragraph about the three-step booking confirmation and hard delivery windows
                  Intended review theme: vendor followed through / confirmed before delivery / showed up on time
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>PBOT Permit Knowledge Built Into Every Quote</h3>
              <p>
                Most fence vendors deliver panels. They do not know whether your Pearl District job site needs a Temporary Street Use Permit before the fence touches the sidewalk, and they will not find out until a PBOT inspector stops the work. RHC reviews your site footprint at booking and tells you exactly what applies before installation day. No surprise stop-work notices. No permits flagged the morning of.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 02" paragraph about PBOT permit knowledge built into every quote
                  Intended review theme: flagged the PBOT permit before delivery / no surprises on site / handled the complexity
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Published Specs. Invoices That Match.</h3>
              <p>
                Panel dimensions, base weights, and gate sizes are published before you call. You know what you are getting before you confirm the booking. When the invoice arrives, it matches the quote. No line items added after the fact, no fuel surcharges, no damage fees on normal wear.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 03" paragraph about published specs and invoices that match
                  Intended review theme: invoice matched the quote / no surprise charges / would book again
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
              <h2 className="h-lg">Questions about temporary fencing rentals in Portland, OR.</h2>
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
                Ready to get temporary fencing<br />on your Portland site?
              </h2>
              <p>Submit your project details and RHC will come back with a confirmed quote the same day. Panel or post-driven, events or construction, Portland city limits or anywhere in the metro. Permit requirements flagged before installation day.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Quote back the same day.</span>
              </div>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "No commitment. Quote back the same day." final-trigger block in the Get Started section
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
