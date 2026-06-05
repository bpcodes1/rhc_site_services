import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LeadForm from '../../../components/LeadForm'

const venueGuide = [
  {
    label: 'Power is required. Urban Seattle venues usually have it. Woodinville and rural Eastside properties often do not.',
    body: "A 2-stall trailer requires one dedicated 110V / 20-amp circuit. A 4-stall requires two to three. South Lake Union event spaces, hotel outdoor terraces in Bellevue, and established venue properties in Seattle typically have accessible power nearby. Woodinville wine country estates, Snohomish County ranch properties, and waterfront sites on the Puget Sound vary significantly. A trailer without power means no climate control, no interior lighting, and no flushing. Note your venue's power situation on the form and RHC will confirm the approach, including generator provision if needed, before delivery day.",
  },
  {
    label: 'Woodinville estates, rural King County properties, and Snohomish County venues require advance planning.',
    body: 'Many Woodinville wine country properties and Snohomish County ranch estates have gravel access roads, soft terrain, or gates that need to be open before the delivery truck arrives. The driver needs clearance to back in and the trailer needs reasonably level ground. Note your surface and access conditions on the form and RHC will confirm the placement approach before delivery day.',
  },
  {
    label: 'Events at Seattle Parks facilities require a Special Event Permit.',
    body: 'Any event at a City of Seattle park, including Gas Works Park, Cal Anderson Park, or Seattle Center grounds, requires a Special Event Permit from the Seattle Special Events Committee with a reviewed sanitation plan. A compliant restroom trailer satisfies that requirement. Events that proceed without a required permit are subject to shutdown. Note your venue type on the form and RHC will flag what applies before the truck rolls.',
  },
  {
    label: "Seattle's All-Gender law (SMC 14.07.010) applies to event restroom units.",
    body: "Under Seattle Municipal Code 14.07.010, all single-occupant restrooms at public events and places of public accommodation must be designated all-gender. Vendors advertising separate men's and women's sections, including configurations with urinals assigned to a men's section, create enforcement exposure under the Seattle Office for Civil Rights. RHC confirms all-gender compliance before delivery. Note your event type on the form.",
  },
  {
    label: 'Events with food service: King County heated handwashing required.',
    body: 'Under King County Board of Health guidelines enforcing WAC 246-215, events with food trucks, catering, or any food service must provide handwashing facilities with hot and cold running water within 200 feet of food service areas. Standard sanitizer dispensers do not satisfy this requirement. A restroom trailer with running water satisfies it. Note whether your event includes food service on the form and RHC will confirm the right configuration.',
  },
]

const trailerTiers = [
  {
    num: '01',
    name: '2-Stall and 3-Stall Configurations',
    bestFor: 'Up to 150 guests (2-stall) · Woodinville intimate weddings, private Eastside outdoor events, small residential receptions',
    body: "The standard entry point for luxury restroom trailer rental in Seattle. Standard 2-stall configurations accommodate up to 150 guests for events running 4 to 6 hours. Climate-controlled, porcelain flush, running hot and cold water, and vanity mirrors. If your guest count or event duration sits between the 2-stall and 4-stall ranges, a 3-stall configuration is available. Note your headcount and event duration on the form and RHC will confirm the right fit. The unit your guests will still be talking about after the wedding.",
  },
  {
    num: '02',
    name: '4-Stall and 5-Stall Configurations',
    bestFor: 'Up to 300 guests (4-stall) · Woodinville estate weddings, Seattle waterfront gatherings, mid-size outdoor events',
    body: 'Right for larger Eastside receptions and standard Seattle outdoor events. Standard 4-stall configurations accommodate up to 300 guests. If your headcount sits between the 4-stall and 6-stall ranges, a 5-stall configuration is available. Same interior finish and climate control as the 2-stall with expanded tank capacity. Getting the stall count wrong on a 250-guest event means a visible line that does not resolve. Getting it right means the trailer ran clean through the full event and nobody mentioned it.',
  },
  {
    num: '03',
    name: '6-Stall, 7-Stall, and 8-Stall Configurations',
    bestFor: '~350 guests (6-stall) to ~500 guests (8-stall) · Gas Works Park festivals, Seattle Center events, large estate receptions',
    body: "The right tier for major Seattle outdoor events with high traffic and extended runtimes. Standard 6-stall configurations in the Pacific Northwest accommodate approximately 350 guests for events lasting up to 10 hours. Standard 8-stall configurations accommodate approximately 500 guests for events running 6 to 7 hours. A 7-stall configuration is available for guest counts between those two anchors. For events with food service, the trailer's running water satisfies King County's heated handwashing requirement at the same time.",
  },
  {
    num: '04',
    name: '9-Stall and 10-Stall Configurations',
    bestFor: 'Up to ~700 guests (10-stall) · Major Seattle festivals, large corporate events, multi-day productions',
    body: 'High-capacity configurations for large-scale Seattle events. Standard 10-stall configurations in the Pacific Northwest accommodate approximately 700 guests for events running 6 to 8 hours. A 9-stall configuration is available for guest counts between the 8-stall and 10-stall range. At this scale, a configuration that is one stall short under full event load is visible to every person in attendance. RHC reviews your site footprint, power access, and event timeline before confirming the configuration. Note all three on the form.',
  },
]

const faqs = [
  {
    q: 'How much does it cost to rent a luxury restroom trailer in Seattle?',
    a: 'Pricing depends on five variables: trailer configuration (stall count), event duration, delivery distance within King County or to Woodinville and Snohomish County, whether a generator is needed, and whether mid-event servicing is required. No single number covers those variables accurately without either padding your quote or coming in low and adding costs at billing. RHC puts together an all-in quote for your specific event within 24 hours. Submit your stall count, guest count, date, and location on the form and you get a confirmed number back the same day. Delivery, setup, and post-event pump-out included.',
  },
  {
    q: 'What if my Seattle event site has no water or power?',
    a: 'Power is required. External water is optional for standard event durations. A 2-stall requires one dedicated 110V / 20-amp circuit. A 4-stall requires two to three. The onboard freshwater tank handles a standard 4-to-6 hour event without an external water hookup. If your venue lacks accessible power, which is common at Woodinville wine country estates, Snohomish County ranch properties, and rural Eastside event sites, note it on the form. RHC provides a generator and includes it in your all-in quote.',
  },
  {
    q: "Are restroom trailers heated for Seattle's weather?",
    a: 'Yes. Every luxury restroom trailer includes a climate control system covering both heating and cooling. This matters specifically in Seattle, where outdoor events in spring and fall regularly run in 45-to-55 degree conditions and rain. The climate system runs on the same dedicated circuit as the rest of the trailer. If your venue lacks accessible power, a generator handles all systems. Note your event month and venue power access on the form.',
  },
  {
    q: 'How many guests can a restroom trailer handle?',
    a: 'It depends on stall count and event duration. The confirmed anchors: standard 2-stall configurations accommodate up to 150 guests for events running 4 to 6 hours. Standard 4-stall configurations accommodate up to 300 guests. Standard 6-stall configurations in the Pacific Northwest accommodate approximately 350 guests for events lasting up to 10 hours. Standard 8-stall configurations accommodate approximately 500 guests for events running 6 to 7 hours. Standard 10-stall configurations accommodate approximately 700 guests for events running 6 to 8 hours. Every stall count from 2 to 10 is configurable. Note your total headcount, event duration, and whether you have an open bar on the form. RHC will confirm the right stall count before your quote is finalized.',
  },
  {
    q: 'Are luxury restroom trailers ADA compliant in Seattle?',
    a: 'ADA configurations are available on every stall count from 2 to 10. The ramp deploys to 19 feet wide. Confirm your site has that clearance before booking, as this is the spec most coordinators underestimate. ADA access is required at any Seattle event where it is a condition of the Seattle Special Events Committee permit or your venue contract. Note your accessibility requirements on the form and RHC will confirm the right unit.',
  },
  {
    q: "Do restroom trailers meet Seattle's All-Gender law?",
    a: "Under Seattle Municipal Code 14.07.010, all single-occupant restrooms at public events and places of public accommodation must be designated all-gender. Vendors advertising separate men's and women's sections, including configurations with urinals assigned to a men's section, create enforcement exposure under the Seattle Office for Civil Rights. RHC confirms all-gender compliance before delivery. Note your event type on the form.",
  },
  {
    q: 'How far in advance should I book a restroom trailer for a Seattle event?',
    a: 'At least 72 hours for standard availability. Seattle outdoor events between May and September, including Woodinville wine country weddings, Seattle waterfront gatherings, and large private parties, book 2 to 3 weeks out during that window. Submit a quote request the moment your venue and date are confirmed. Waiting until a few weeks before a summer event is the most common reason requests cannot be fulfilled.',
  },
  {
    q: 'My event coordinator already has a restroom trailer vendor she works with. Should I still get a quote from RHC?',
    a: "A coordinator's recommendation carries real weight. They have experience with that vendor's reliability and that is worth something. Two things are worth confirming before you book with anyone: whether the price in your quote is the price on your final invoice, and whether you get a confirmed delivery window or a call the morning of your event. If yes to both, book with confidence. If you are not sure, a comparison quote from RHC takes two minutes and costs nothing. Confirmed specs, locked price, and a hard arrival window are in every RHC quote. You can compare before your date is locked.",
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

export default function RestroomTrailerSeattle() {
  return (
    <main id="main">
      <Helmet>
        <title>Restroom Trailer Rental Seattle WA | RHC Site Services</title>
        <meta name="description" content="Luxury restroom trailer rentals for Seattle events and King County venues. Confirmed arrival windows, all-gender compliant, generator provision for off-grid sites. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservices.com/restroom-trailer-rental-seattle-wa" />
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/restroom-trailers">Restroom Trailers</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Seattle, WA</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean">
        <div className="container">
          <div className="hero-lean-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Luxury Restroom Trailers · Seattle, WA &amp; King County</span>
              </div>
              <h1 className="h-xl">
                Restroom Trailer Rental in <span className="underline accent">Seattle, WA</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                The best outdoor events in Seattle are the ones where guests remember the venue, the ceremony, and the food. Nobody thought about the bathrooms. Getting there requires a vendor who treats your event as a single accountable job, not a volume transaction with no local follow-through. The most common failure is not the equipment. It is the vendor. Vendors who operate across multiple markets have no incentive to confirm Seattle-specific venue logistics, no reason to lock a price before their own provider confirms a cost, and no local accountability when delivery day comes. A trailer confirmed at booking that never shows up. A quoted price that looks different on the final invoice. RHC runs differently. You get a confirmed arrival window, Seattle venue logistics reviewed before the truck rolls, and a locked price that does not change between approval and event day.
              </p>
              <div className="hero-lean-actions">
                <a href="#quote" className="btn btn-primary">Get My Same-Day Quote →</a>
              </div>
            </div>

            <aside className="hero-lean-meta" aria-label="At a glance">
              <div className="meta-row">
                <div className="meta-label">Availability</div>
                <div className="meta-value">
                  <span className="live-dot" aria-hidden="true"></span>Open · Same-Day Quotes
                </div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Trailer Types</div>
                <div className="meta-value">2-Stall through 10-Stall · ADA on all configurations</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Seattle · Bellevue · Woodinville · Kirkland · Renton · Tacoma · King County</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Book By</div>
                <div className="meta-value">72 hrs standard · May–Sept books 2–3 weeks out</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* VENUE GUIDE */}
      <section id="before-you-book">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Before You Book</div>
              <h2 className="h-lg">What to confirm before booking a restroom trailer at a Seattle-area venue.</h2>
            </div>
            <p>Five site details RHC reviews before the truck rolls, so you do not have to.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {venueGuide.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '18px 22px',
                  background: 'var(--surface-low)',
                  borderLeft: '3px solid var(--secondary)',
                  borderRadius: '0 var(--r-lg) var(--r-lg) 0',
                }}
              >
                <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: 'var(--on-surface)' }}>
                  <strong style={{ color: 'var(--primary)' }}>{item.label}</strong>{' '}
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Note your venue details, power access, and any site questions on the quote form. RHC will identify what permits and compliance requirements apply before delivery day.
          </p>
        </div>
      </section>

      {/* TRAILER OPTIONS */}
      <section id="trailer-options" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Trailer Options</div>
              <h2 className="h-lg">2-Stall through 10-Stall configurations for Seattle events and long-term sites.</h2>
            </div>
            <p>RHC configures restroom trailers from 2 to 10 stalls. Every stall count in between is available. ADA configurations exist on all sizes. The four tiers below anchor around confirmed guest counts. If your event falls between tiers, note your headcount and duration on the form and RHC will confirm the right configuration.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {trailerTiers.map((tier) => (
              <div
                key={tier.num}
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
                <div className="mono" style={{ color: 'var(--secondary)', paddingTop: '2px' }}>{tier.num}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '18px', fontWeight: 600, margin: '0 0 4px', letterSpacing: '-0.01em' }}>
                    {tier.name}
                  </h3>
                  <p style={{ margin: '0 0 10px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {tier.bestFor}
                  </p>
                  <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.65', color: 'var(--on-surface-variant)' }}>
                    {tier.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '20px',
              padding: '18px 22px',
              background: 'var(--surface)',
              borderLeft: '3px solid var(--primary)',
              borderRadius: '0 var(--r-lg) var(--r-lg) 0',
            }}
          >
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: 'var(--on-surface)' }}>
              <strong style={{ color: 'var(--primary)' }}>ADA configurations are available on every stall count from 2 to 10.</strong>{' '}
              The ramp deploys to 19 feet wide. Confirm your site has that clearance before booking. Required at any event where ADA access is a condition of the Seattle Special Events Committee permit or your venue contract.
            </p>
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <Link to="/restroom-trailers#trailer-types" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
              See the full stall-by-stall spec table, exact footprints, and tank capacities on the main Restroom Trailers page →
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
              <h2 className="h-lg">Built for Woodinville weddings, Seattle outdoor events, and commercial renovations.</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Woodinville Wine Country and Outdoor Weddings</div>
              <h3>Your Guests Noticed the Venue, the Vineyard, the Ceremony. The Bathrooms Came Up Once, When a Guest Complimented Them.</h3>
              <p>
                That is the measure of a well-executed outdoor wedding: the venue, the ceremony, the food, the people. The restroom situation was handled before the first guest arrived.
              </p>
              <p style={{ marginTop: '12px' }}>
                Seattle draws couples to outdoor venues for exactly what those venues look like. Woodinville wine country estates, Snohomish County ranch properties, Eastside hilltop venues, and backyard events across the metro. Most have no indoor facilities that handle a full guest count. The failure mode is specific: a vendor who confirms the booking, goes quiet for weeks, and delivers news you cannot use the morning of your event. One event organizer documented it precisely: paid $2,650, trailer never showed, spent an hour on the phone after a full day on site, and still got charged anyway.
              </p>
              <p style={{ marginTop: '12px' }}>
                A 2-stall for up to 150 guests or a 4-stall for larger receptions. Positioned before your venue coordinator does the final walkthrough. Operational before the first guest arrives. Removed inside your cleanup window.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your guests noticed the venue, the vineyard, the ceremony. The bathrooms came up once, when a guest complimented them. That is exactly right.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Seattle Outdoor Festivals and Parks Events</div>
              <h3>All-Gender Compliant. Special Events Committee Sanitation Plan Approved on First Submission. Nothing Flagged.</h3>
              <p>
                That is the outcome. Permit cleared, sanitation plan approved, no compliance issue to resolve after the fact.
              </p>
              <p style={{ marginTop: '12px' }}>
                Seattle's outdoor event season runs May through September and the compliance requirements are specific to this market. Gas Works Park, Cal Anderson, and Seattle Center events require a Special Event Permit with a reviewed sanitation plan. SMC 14.07.010 requires all single-occupant restrooms to be all-gender. Vendors advertising men's and women's split configurations, including those with urinals designated to a men's section, put your permit at risk. A sanitation plan submitted with non-compliant unit specs comes back flagged, and resolving it with a week left before your event is not a situation anyone wants. For Seattle Center-scale events and major outdoor festivals with 300 or more guests, 6-stall through 10-stall configurations are available and sized for extended runtimes.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC reviews your unit configuration for all-gender compliance before the quote is finalized. Your sanitation plan goes to the Special Events Committee with specs that clear review on first submission. If your event includes food service, the trailer's running water satisfies King County's heated handwashing requirement at the same time.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Sanitation plan approved on first submission. Nothing flagged. You spent the week before your event on the things that actually needed your attention.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Commercial Renovation and Long-Term Sites</div>
              <h3>The Inspector Cleared the Site. The Business Stayed Open. The Renovation Finished on Schedule.</h3>
              <p>
                That is the only outcome that matters when a business is operating through a renovation: compliant facilities on-site, health department sign-off, and no inspector-generated delays that push the completion date.
              </p>
              <p style={{ marginTop: '12px' }}>
                Seattle's commercial renovation market runs continuously. South Lake Union build-outs, Capitol Hill multifamily conversions, Eastside retail renovations, and restaurant remodels all create the same problem: the existing facility is offline during construction, but the building must remain accessible to workers and, in many cases, to customers. Without a compliant restroom solution on-site, the health department can slow or stop the work. With the wrong long-term vendor, the second problem replaces the first: scheduled service visits missed, grey water not emptied, fresh water not restocked, and invoices billed for service dates that never happened.
              </p>
              <p style={{ marginTop: '12px' }}>
                One property management team documented exactly this pattern across four Washington locations and more than 30 sites nationwide before they started replacing national vendors with local operators market by market.
              </p>
              <p style={{ marginTop: '12px' }}>
                One trailer on-site handles OSHA sanitation requirements, health department access compliance, and daily worker need in a single placement. RHC coordinates delivery, scheduled service, and removal when permanent facilities are ready. Confirmed service windows at booking. The invoice matches what was quoted.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The inspector cleared the site. The business stayed open through the full renovation. The restroom situation never came up in a project meeting.
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
              <h2 className="h-lg">Why Seattle event coordinators and venue managers call RHC instead of whoever ranks first.</h2>
            </div>
            <p>
              Every complaint about restroom trailer vendors in Seattle follows the same three-part script: confirmed at booking and gone before delivery, service dates missed and invoices that do not match, or equipment that looked nothing like the listing. Those are the three failures RHC was built to prevent.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Confirmed Arrival Window, Not a Call the Morning of Your Event</h3>
              <p>
                A Woodinville reception or a Gas Works Park festival does not have slack for a vendor who disappears between booking and delivery day. Every RHC booking includes a confirmed delivery window before the job is finalized. You know the arrival time when you approve the quote. If anything changes before your window, you hear from RHC first, not after you have spent an hour calling and getting no answer.
              </p>
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — arrived on time / positioned exactly where we marked / coordinator never had to think about it / smooth from start to finish]
                </p>
                <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
              </blockquote>
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>Service Dates Kept. Invoices That Match What Was Agreed.</h3>
              <p>
                For long-term placements, the failure is different from event rentals. Grey water not emptied on the scheduled date. Fresh water not restocked. An invoice billed for service visits that did not happen. The pattern compounds across every week of a multi-month renovation until the property manager is spending more time disputing charges than managing the project. RHC schedules service visits with confirmed windows and invoices exactly what was agreed. Nothing is added after the fact.
              </p>
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — service dates kept every week / invoice matched the quote exactly / no billing disputes / would use again]
                </p>
                <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
              </blockquote>
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>The Specs Published Before You Book Are What Shows Up at Your Venue</h3>
              <p>
                The most common complaint about restroom trailer vendors is that the unit arrived looking nothing like the listing. Immaculate in the photo, a different story on delivery day. RHC publishes exact exterior dimensions, tank capacities, ADA ramp deployment widths, and power requirements on the main Restroom Trailers page before you fill out a form. What arrives at your Seattle venue is what you confirmed when you booked. Climate-controlled, well-stocked, and operational before the first guest arrives.
              </p>
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — unit matched the listing / immaculate and felt brand new / guests complimented it / would book again]
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
              <h2 className="h-lg">Questions about restroom trailer rentals in Seattle, WA.</h2>
            </div>
            <p>The most common questions from Seattle event coordinators, wedding planners, and property managers. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
                Ready to lock in your<br />Seattle restroom trailer?
              </h2>
              <p>Submit your event or project details and RHC responds the same day with a confirmed quote, not a callback that leads to another callback. Trailer specs, confirmed delivery window, and all-in pricing before you commit to anything. King County, Woodinville, Eastside, and greater Seattle coverage.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Fast response.</span>
              </div>

              <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--secondary-fixed-dim)' }}>
                The quote RHC sends is the number on your invoice. No additions after the fact.
              </p>

              <blockquote style={{ margin: '20px 0', padding: '14px 18px', background: 'rgba(255,255,255,0.07)', borderLeft: '3px solid var(--secondary)', borderRadius: '0 4px 4px 0' }}>
                <p style={{ fontSize: '14px', color: 'inherit', lineHeight: '1.65', fontStyle: 'italic', margin: 0 }}>
                  [Testimonial placeholder — easy booking / quote came back same day / trailer was clean and exactly as described / guests loved it / would book again]
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
              defaultService="High-End Luxury Restroom or Shower Trailers"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
