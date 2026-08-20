import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../../seo/schema'
import LeadForm from '../../../components/LeadForm'
import heroImg from '../../../assets/cities/seattle/seattle_hero.webp'
import fencePanelsImg from '../../../assets/temporary-fencing/fence.webp'
import chainFencingImg from '../../../assets/temporary-fencing/chain_fencing.webp'

const permitRules = [
  {
    label: 'Fence stays on private property: no permit required.',
    body: 'A temporary fence placed entirely within your property line, job site, or private lot with no sidewalk, alley, or ROW contact does not require a city permit. This covers interior job sites, private event venues, and residential projects set back from the street. WA L&I DOSH site safety standards still apply on any active construction site.',
    status: 'clear',
  },
  {
    label: 'Fence in or over public right-of-way: SDOT Street Use Permit required.',
    body: 'Any fencing that occupies or overhangs public right-of-way, including sidewalks, parking lanes, and alleys, requires a Street Use Permit from the Seattle Department of Transportation. Processing runs 3 to 5 business days through the Seattle Services Portal. Downtown and Capitol Hill metered zones may incur a Lost Paid Parking (LPP) fee. RHC reviews your site address at booking and flags ROW contact before delivery is scheduled, not after.',
    status: 'required',
  },
  {
    label: 'Events at Seattle Parks facilities: Special Event Permit required.',
    body: 'Fencing at Gas Works Park, Cal Anderson, Seattle Center, Myrtle Edwards Park, or any Seattle Parks and Recreation facility requires a Special Event Permit from Seattle Parks and Recreation. Fencing footprint and anchor method are reviewed as part of the application. RHC confirms Seattle Parks permit status before scheduling delivery to any public venue.',
    status: 'required',
  },
  {
    label: 'Construction sites in Washington State: WA L&I DOSH compliance required.',
    body: "Washington State's Division of Occupational Safety and Health (DOSH), administered by WA L&I, governs construction site safety fencing standards under WAC 296-155. Panels sourced for Seattle construction sites meet DOSH requirements. Non-compliant fencing is citable and a DOSH inspection trigger. RHC confirms your panel and installation configuration meets WA L&I standards at the time of quote.",
    status: 'required',
  },
  {
    label: 'Projects outside Seattle city limits: King County rules apply.',
    body: 'For projects in unincorporated King County outside Seattle city limits, permit requirements are governed by King County rather than SDOT. RHC confirms your project jurisdiction at the time of quote and identifies the correct permitting authority before delivery is scheduled.',
    status: 'check',
  },
]

const fenceTypes = [
  {
    num: '01',
    name: 'Panel Fencing (Freestanding)',
    specs: '12.5 ft W × 6.5 ft H · 80 lb rubber bases · water-filled base upgrade available',
    body: 'Steel panels on weighted bases with no ground penetration. Standard for Seattle events, paved urban job sites, and any site where surface damage is not permitted. Fully portable and reconfigurable as your perimeter shifts. Standard 80 lb rubber bases handle most applications. For Puget Sound waterfront sites, exposed ridgelines, and high-traffic event footprints, water-filled base upgrade is available. Once filled, each base weighs approximately 600 lbs. Available with privacy windscreens.',
    image: fencePanelsImg,
    w: 1250,
    h: 1250,
  },
  {
    num: '02',
    name: 'Post-Driven Chain Link',
    specs: '6 ft standard · 8 ft available for high-security sites',
    body: 'Posts driven directly into soil or asphalt for maximum structural stability. The right system for long-duration Seattle construction sites where wind resistance and security are the priority. More resistant to sustained lateral load than panel fencing on bases. Best for Puget Sound waterfront sites, sloped terrain, and long-term commercial construction in SoDo, South Lake Union, and Capitol Hill.',
    image: chainFencingImg,
    w: 900,
    h: 900,
  },
]

const faqs = [
  {
    q: 'Do I need a permit for a temporary fence in Seattle?',
    a: 'It depends on placement. Fence entirely on private property with no ROW contact: no permit required. Fence in or over public right-of-way, including sidewalks, alleys, and parking lanes: SDOT Street Use Permit required, 3 to 5 business days through the Seattle Services Portal. Downtown and Capitol Hill metered zones may incur a Lost Paid Parking fee. Fencing at Seattle Parks facilities: Special Event Permit required from Seattle Parks and Recreation. RHC reviews your site address at the time of quote and flags the permit requirement before delivery is scheduled.',
  },
  {
    q: 'What is the difference between panel fencing and post-driven chain link?',
    a: 'Panel fencing uses freestanding 12.5 ft × 6.5 ft panels on weighted bases. No ground penetration required. Installs quickly, leaves no surface damage, and is reconfigurable as your perimeter shifts. Best for events, paved job sites, and short-term applications. Post-driven chain link drives posts into soil or asphalt for maximum hold. More secure on sloped terrain, Puget Sound waterfront sites, and long-term construction projects where sustained wind is a factor. RHC can quote both configurations based on your site conditions.',
  },
  {
    q: "Can temporary fencing hold up to Seattle's weather?",
    a: 'Yes, with the right base configuration. Standard 80 lb rubber bases are sufficient for most applications. For Puget Sound waterfront sites, exposed ridgelines, and outdoor events with sustained wind exposure, water-filled base upgrades are available. Once filled, each base weighs approximately 600 lbs. Post-driven chain link is also an option where ground penetration is feasible and provides the most secure hold in high-wind conditions.',
  },
  {
    q: 'Should I use a windscreen on my job site?',
    a: 'Worth adding for two reasons: visual access control and wind load reduction. Standard chain link panels without a windscreen allow significant airflow and limited privacy. A privacy windscreen provides 80 to 90 percent visibility block and reduces wind force through the panel. Common on pedestrian-corridor construction sites in South Lake Union and Capitol Hill, and at outdoor events where visual separation from the public is required. Request it on the quote form and RHC will price it with your configuration.',
  },
  {
    q: 'How much does temporary fencing cost in Seattle?',
    a: 'Pricing depends on linear footage, fence type, base configuration, rental duration, and whether delivery involves a permitted ROW zone. Fill out the form and RHC will have a fixed quote back to you the same day. The number on the quote is the number on your invoice.',
  },
  {
    q: 'Does Home Depot rent temporary fences?',
    a: 'Home Depot sells basic construction barriers in some locations but does not provide delivery, installation, SDOT permit review, or scheduled pickup. For any application requiring confirmed delivery windows, compliant equipment, and site-specific permit review, a dedicated fence rental service is the right option.',
  },
  {
    q: 'My general contractor already has a fence vendor. Why get a quote from RHC?',
    a: 'If your current vendor confirms SDOT permit status before delivery, provides a written installation window, and invoices the quoted number, you are covered. The most common complaint from Seattle contractors is a vendor who was reachable for the quote and unreachable for the installation window. If that has happened on a previous job, it is worth a second quote before the next one.',
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
    name: 'Temporary Fencing Rental in Seattle, WA',
    description:
      'Temporary fencing rental for Seattle job sites, events, and residential renovations. RHC confirms SDOT permit status before every delivery and provides a written installation window. Same-day quote.',
    path: '/temporary-fencing-rental-seattle-wa',
    serviceType: 'Temporary fence rental',
    areaServed: ['Seattle, WA'],
  }),
  breadcrumb([{ name: 'Temporary Fencing', path: '/temporary-fencing' }, { name: 'Seattle, WA' }]),
  faqPage(faqs),
])

export default function TemporaryFencingSeattle() {
  return (
    <main id="main">
      <Helmet>
        <title>Temporary Fencing Rental in Seattle, WA | RHC Site Services</title>
        <meta
          name="description"
          content="RHC confirms SDOT permit status before every delivery and gives you a written installation window. Temporary fencing for Seattle job sites and events."
        />
        <link rel="canonical" href="https://rhcsiteservice.com/temporary-fencing-rental-seattle-wa" />
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
            <span className="current">Seattle, WA</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid hero-lean-grid--split">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Temporary Fencing · Seattle, WA &amp; King County</span>
              </div>
              <h1 className="h-xl">
                Temporary Fencing Rental in <span className="underline accent">Seattle, WA</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                The fence is up before your crew arrives. The inspector walks the perimeter and keeps moving. In Seattle, that requires confirming SDOT permit status before a delivery is scheduled. Most vendors skip this step. RHC Site Services rents temporary fencing to construction sites and events across Seattle and King County, and makes it the first one.
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
                <div className="meta-value">Panel Freestanding · Post-Driven Chain Link</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Add-ons</div>
                <div className="meta-value">Privacy Windscreens · Water-Filled Bases · Gates</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Seattle · Bellevue · Renton · Redmond · Kirkland · Tacoma · King County</div>
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
              <div className="eyebrow">01 / Seattle Permit Guide</div>
              <h2 className="h-lg">Do you need a permit for temporary fencing in Seattle?</h2>
            </div>
            <p>
              The answer depends on where the fence is going. Below is the full breakdown for private
              property, public right-of-way, Seattle Parks venues, construction sites, and King County
              projects.
            </p>
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
            Note your placement location on the quote form. RHC will identify any SDOT, Seattle Parks,
            or King County permit requirements specific to your site before delivery day.
          </p>
        </div>
      </section>

      {/* FENCE TYPES */}
      <section id="fence-types" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Fence Types</div>
              <h2 className="h-lg">Temporary fence options for Seattle job sites and events.</h2>
            </div>
            <p>
              Two primary systems cover the full range of Seattle construction sites, events, and
              residential applications. The right choice depends on your surface, rental duration, and
              wind exposure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', maxWidth: '640px', margin: '0 auto' }}>
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
                  <img src={type.image} width={type.w} height={type.h} alt={type.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '20px', alignItems: 'start', padding: '24px' }}>
                  <div className="mono" style={{ color: 'var(--secondary)', paddingTop: '2px' }}>
                    {type.num}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-head)',
                        fontSize: '18px',
                        fontWeight: 600,
                        margin: '0 0 4px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {type.name}
                    </h3>
                    <div
                      className="mono"
                      style={{
                        fontSize: '12px',
                        color: 'var(--secondary)',
                        letterSpacing: '0.04em',
                        marginBottom: '8px',
                      }}
                    >
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
            Add-ons available: privacy windscreens · water-filled base upgrade (approx. 600 lbs filled) · man gates (4 ft W × 7 ft H) · vehicle gates
          </p>
          <p style={{ marginTop: '12px', fontSize: '14px', textAlign: 'center' }}>
            <Link to="/temporary-fencing#fence-types" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
              See full specifications and configurations on the main Temporary Fencing page →
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
              <h2 className="h-lg">
                Built for Seattle construction sites, outdoor events, and residential renovations.
              </h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Construction Sites</div>
              <h3>Fence Up. SDOT Permit Confirmed. Inspector Walks Past.</h3>
              <p>
                South Lake Union, SoDo, Capitol Hill. Dense construction corridors in Seattle share
                sidewalks, parking lanes, and pedestrian corridors with foot traffic that does not stop
                for construction. Any perimeter that contacts public right-of-way in these neighborhoods
                requires an SDOT Street Use Permit. Most fence vendors do not check before scheduling
                delivery.
              </p>
              <p style={{ marginTop: '12px' }}>
                The failure pattern is consistent: vendor delivers panels, skips the ROW permit review,
                and the GC finds out when SDOT flags the site. By then, the project is behind schedule
                and the vendor is not answering the phone.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC reviews your site address and project scope before quoting. If your perimeter
                touches public ROW, that triggers an SDOT Street Use Permit review at booking. Panels
                sourced for Seattle construction sites meet DOSH requirements under WAC 296-155. Written
                delivery window confirmed before the crew is on site.
              </p>
              <p
                style={{
                  marginTop: '16px',
                  fontSize: '13px',
                  color: 'var(--secondary)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                }}
              >
                Site compliant. Perimeter secured. SDOT permit confirmed before delivery day.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Outdoor Events</div>
              <h3>Perimeter Standing Before the First Attendee Arrives.</h3>
              <p>
                Gas Works Park, Seattle Center, Myrtle Edwards, waterfront festivals. Every Seattle park
                venue has specific access routes, anchor restrictions, and Special Event Permit
                requirements that determine where fence can go and how it gets installed. Vendors working
                across multiple markets do not track these venue-by-venue details.
              </p>
              <p style={{ marginTop: '12px' }}>
                Event day is a hard deadline. When the vendor does not show or panels arrive two hours
                late, there is no recovery option. Just an open perimeter and a crowd about to walk in.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC confirms Seattle Parks permit status before scheduling, maps the access route for
                the specific venue, and provides a hard installation window. The fence is installed and
                confirmed before your crew opens the gates.
              </p>
              <p
                style={{
                  marginTop: '16px',
                  fontSize: '13px',
                  color: 'var(--secondary)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                }}
              >
                Perimeter locked. Event ran clean. Every gate where it was supposed to be.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Residential Renovations &amp; ADU Builds</div>
              <h3>Clean Perimeter. Neighbors See Order. Nobody Calls.</h3>
              <p>
                Ballard, Fremont, Capitol Hill, Central District. ADU builds, full teardown-rebuilds,
                and major renovation projects in Seattle's densest neighborhoods sit close to the
                sidewalk and closer to the neighbors. An unsecured work zone takes one day to become a
                complaint filed with the city or an HOA notice.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC checks whether your project footprint requires an SDOT permit before quoting. If
                your work zone is near the sidewalk line, that is flagged and handled up front. Fence is
                delivered on a confirmed window and picked up on schedule.
              </p>
              <p
                style={{
                  marginTop: '16px',
                  fontSize: '13px',
                  color: 'var(--secondary)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                }}
              >
                Work zone secured. HOA drove by without stopping. Project closed clean.
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
              <h2 className="h-lg">Why Seattle contractors and event coordinators work with RHC.</h2>
            </div>
            <p>
              The pattern in nearly every temporary fencing complaint in Seattle is the same: vendor
              reachable at quote time, unreachable for the installation window. No permit review. No
              confirmed delivery time. An invoice that did not match the number approved. RHC was built
              around all three of those failures.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Permit Review Before Every Seattle Delivery</h3>
              <p>
                RHC reviews your project address before quoting. If delivery touches public ROW, that
                triggers an SDOT Street Use Permit review at booking. If your event is at a Seattle
                Parks venue, Special Event Permit status is confirmed before the delivery window is set.
                This step happens before scheduling, not after a problem surfaces on installation day.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 01" paragraph about SDOT permit review before every delivery
                  Intended review theme: flagged the SDOT permit before delivery / no surprises on site / handled the complexity
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>Written Delivery Window. Fixed Quote.</h3>
              <p>
                The two complaints that appear most in temporary fencing reviews: the vendor stopped
                responding after the initial call, and the invoice was higher than the quote. RHC
                provides a written delivery window confirmed at booking and a fixed quote. The number on
                the quote is the number on the invoice. No fuel surcharges. No line items added after
                installation.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 02" paragraph about the written delivery window and fixed quote
                  Intended review theme: invoice matched the quote / showed up on time / no surprise charges
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Equipment Matched to Seattle Conditions</h3>
              <p>
                Puget Sound waterfront sites, exposed ridgeline projects in South Lake Union and the
                Hill neighborhoods, and high-traffic event footprints benefit from heavier base
                configurations than a standard rubber-base panel provides. Water-filled base upgrade is
                available for wind-exposed applications. Each base weighs approximately 600 lbs when
                filled. All panels sourced for Seattle construction sites meet WA L&amp;I DOSH standards
                under WAC 296-155.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 03" paragraph about equipment matched to Seattle conditions
                  Intended review theme: equipment was solid / no issues in wind / looked professional on site
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
              <h2 className="h-lg">Questions about temporary fencing rentals in Seattle, WA.</h2>
            </div>
            <p>
              Everything you need before you book. Need something not covered here? Drop it in the form
              or call RHC directly.
            </p>
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
                Ready to get temporary fencing<br />on your Seattle site?
              </h2>
              <p>
                Tell us your site address, estimated linear footage, and rental window. RHC reviews the
                project, flags any SDOT or DOSH requirements, and sends a fixed quote the same day. No
                commitment. The quote is the number on your invoice.
              </p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Quote back the same day.</span>
              </div>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "No commitment. Quote back the same day." final-trigger block in the Get Started section
                  Intended review theme: easy booking / quote came back same day / fence arrived on time / would use RHC again
                  Restore with:
                  <blockquote
                    style={{
                      margin: '20px 0',
                      padding: '14px 18px',
                      background: 'rgba(255,255,255,0.07)',
                      borderLeft: '3px solid var(--secondary)',
                      borderRadius: '0 4px 4px 0',
                    }}
                  >
                    <p style={{ fontSize: '14px', color: 'inherit', lineHeight: '1.65', fontStyle: 'italic', margin: 0 }}>REAL REVIEW TEXT HERE</p>
                    <footer
                      style={{
                        marginTop: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--secondary-fixed-dim)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      &#9733;&#9733;&#9733;&#9733;&#9733; · Google Review
                    </footer>
                  </blockquote> */}

              <a href="tel:+15036077412" className="final-phone">
                <div>
                  <div className="final-phone-label">Or call RHC directly</div>
                  <div className="final-phone-num">503&#8209;607&#8209;7412</div>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
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
