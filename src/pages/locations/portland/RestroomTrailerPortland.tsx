import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../../seo/schema'
import LeadForm from '../../../components/LeadForm'
import heroImg from '../../../assets/cities/portland/portland_hero.webp'
import trailer2StallImg from '../../../assets/restroom-trailers/2stall_portable.webp'
import trailer4StallImg from '../../../assets/restroom-trailers/4stall_portable.webp'
import trailerLargeImg from '../../../assets/restroom-trailers/restroom-trailer1.webp'
import trailerXLImg from '../../../assets/restroom-trailers/restroom-trailer2.webp'

const venueGuide = [
  {
    label: 'Power is required. Most Portland venues have it. Outdoor and rural properties often do not.',
    body: 'A 2-stall trailer requires one dedicated 110V / 20-amp circuit. A 4-stall requires two to three. Urban event spaces in the Pearl District, established hotel outdoor venues, and dedicated wedding properties typically have accessible power nearby. Backyard events, Sauvie Island sites, and Willamette Valley winery properties vary significantly. A trailer without power means no climate control, no interior lighting, and no flushing. Note your venue\'s power situation on the form and RHC will confirm the approach, including generator provision if needed, before delivery.',
    status: 'required',
  },
  {
    label: 'Winery properties, ranch estates, and rural venue access require advance planning.',
    body: 'Many winery properties, ranch estates, and Columbia River Gorge event sites have soft terrain, gravel access roads, or gates that need to be open before the delivery truck arrives. The driver needs clearance to back in and the trailer needs reasonably level ground. Note your surface and access conditions on the form and RHC will confirm the placement approach before delivery day.',
    status: 'check',
  },
  {
    label: 'Events at Portland Parks facilities require a permit.',
    body: 'Events held at Tom McCall Waterfront Park, Washington Park, and other Portland Parks and Recreation facilities require a Special Event Permit that includes a sanitation plan. A compliant restroom trailer satisfies that requirement. Events that proceed without a required permit are subject to shutdown. Note your venue type on the form and RHC will flag what applies before the truck rolls.',
    status: 'required',
  },
  {
    label: 'Large events on Multnomah County property may require a county permit.',
    body: 'Events held on county-owned land outside Portland city limits with 100 or more attendees typically require a Special Event Permit through Multnomah County. The county review includes a sanitation check, and a compliant trailer satisfies that requirement. For private property events under 100 guests, no permit is required. Note your headcount and property type on the form.',
    status: 'check',
  },
]

const trailerOptions = [
  {
    num: '01',
    name: '2-Stall and 3-Stall Configurations',
    bestFor: 'Up to 150 guests (2-stall) · Backyard weddings, winery receptions, and private outdoor events',
    body: 'The standard entry point for Portland backyard weddings and Willamette Valley winery and vineyard receptions. Standard 2-stall configurations accommodate up to 150 guests for events running 4 to 6 hours. Climate-controlled, porcelain flush, running hot and cold water, and vanity mirrors. For guest counts between the 2-stall and 4-stall ranges, a 3-stall configuration is available.',
    image: trailer2StallImg,
    w: 2048,
    h: 2048,
  },
  {
    num: '02',
    name: '4-Stall and 5-Stall Configurations',
    bestFor: '150–300 guests · Outdoor festivals, estate weddings, and multi-day events',
    body: 'Right for larger Willamette Valley receptions, Portland Waterfront events, and gatherings at outdoor venues. Standard 4-stall configurations accommodate up to 300 guests. Same interior amenities as the 2-stall with expanded tank capacity for higher guest counts and longer event durations. A 5-stall configuration is available for guest counts between the 4-stall and 6-stall range.',
    image: trailer4StallImg,
    w: 1800,
    h: 982,
  },
  {
    num: '03',
    name: '6-Stall, 7-Stall, and 8-Stall Configurations',
    bestFor: '~350 guests (6-stall) to ~500 guests (8-stall) · Large Portland festivals, Waterfront events, multi-day productions',
    body: 'High-capacity configurations for major Portland outdoor events with extended runtimes. Standard 6-stall configurations accommodate approximately 350 guests for events lasting up to 10 hours. Standard 8-stall configurations accommodate approximately 500 guests for events running 6 to 7 hours. A 7-stall configuration is available for guest counts between those two anchors.',
    image: trailerLargeImg,
    w: 1140,
    h: 1140,
  },
  {
    num: '04',
    name: '9-Stall and 10-Stall Configurations',
    bestFor: 'Up to ~700 guests (10-stall) · Major Portland festivals, large corporate outdoor events, multi-day productions',
    body: 'Maximum-capacity configurations for large-scale Portland events. Standard 10-stall configurations accommodate approximately 700 guests for events running 6 to 8 hours. A 9-stall configuration is available for guest counts between the 8-stall and 10-stall range. RHC reviews your site footprint, power access, and event timeline before confirming the configuration.',
    image: trailerXLImg,
    w: 1024,
    h: 1024,
  },
]

const faqs = [
  {
    q: 'How much does a restroom trailer rental cost in Portland?',
    a: 'Pricing depends on five things: trailer configuration (stall count, from 2 to 10), event duration, delivery distance within Portland or the Willamette Valley, whether a generator is needed, and whether mid-event servicing is required. No single number covers those variables accurately without either padding your quote or coming in low and adding costs at billing. What RHC does is put together an all-in quote for your specific event within 24 hours. Submit your trailer size, guest count, date, and location on the form and you get a confirmed number back the same day. Delivery, setup, and post-event pump-out included.',
  },
  {
    q: 'Do restroom trailers require power and water hookups?',
    a: 'Power yes, external water depends. A 2-stall requires one dedicated 110V / 20-amp circuit. A 4-stall requires two to three depending on whether both climate units run simultaneously. The onboard freshwater tank handles a standard 4-to-6 hour event without an external water hookup. If your venue lacks accessible power, which is common at Willamette Valley winery and vineyard properties, Sauvie Island sites, and rural outdoor venues, note it on the form. RHC provides a generator and includes it in your quote.',
  },
  {
    q: 'Where can a restroom trailer be parked in Portland?',
    a: 'On private property, no standalone permit is required for placement on a residential property, private event site, or active job site. For events in Portland Parks facilities including Tom McCall Waterfront Park and Washington Park, a Special Event Permit from Portland Parks and Recreation is required and includes a sanitation review. For placement in a public parking lane, alley, or sidewalk, a PBOT Right-of-Way Use Permit is required. Note your placement location on the form and RHC will flag what applies before the truck rolls.',
  },
  {
    q: 'How many guests can a restroom trailer handle?',
    a: 'It depends on stall count and event duration. Confirmed anchors: a 2-stall handles up to 150 guests for a standard 4-to-6 hour event. A 4-stall handles up to 300 guests. A 6-stall handles approximately 350 guests for events lasting up to 10 hours. An 8-stall handles approximately 500 guests for events running 6 to 7 hours. A 10-stall handles approximately 700 guests for events running 6 to 8 hours. Every stall count from 2 to 10 is available. For events with an open bar or extended runtimes, move up one stall count. Note your total headcount and event duration on the form and RHC will confirm the right configuration.',
  },
  {
    q: 'Are luxury restroom trailers ADA compliant?',
    a: 'ADA configurations are available on every stall count from 2 to 10. Standard ADA restroom trailers in the Pacific Northwest typically require up to 19 feet of ramp clearance. Confirm your site clearance with RHC at booking, as this is the requirement most coordinators underestimate. ADA access is required at any Portland event where it is a condition of the venue permit or Portland Parks Special Event Permit. Note your accessibility requirements on the form and RHC will confirm the right unit.',
  },
  {
    q: 'How far does RHC deliver restroom trailers from Portland?',
    a: 'RHC delivers throughout the Portland metro and Willamette Valley: Portland, Beaverton, Hillsboro, Lake Oswego, Tigard, Gresham, Sauvie Island, Vancouver WA, and winery and vineyard properties throughout the Willamette Valley wine country. For events beyond the standard delivery radius, note your address on the form. Delivery distance is factored into your all-in quote.',
  },
  {
    q: 'How far in advance should I book a restroom trailer for a Portland event?',
    a: 'At least 72 hours for standard availability. Portland outdoor events between May and September, including winery weddings, Waterfront gatherings, and large private parties, book 2 to 3 weeks out during that window. Submit a quote request the moment your venue and date are confirmed. Waiting until a few weeks before a summer event is the most common reason requests cannot be fulfilled.',
  },
  {
    q: 'My event coordinator already has a restroom trailer vendor she works with. Should I still get a quote from RHC?',
    a: "A coordinator's recommendation carries real weight. They have experience with that vendor's reliability and that is worth something. Two things are worth confirming before you book with anyone: whether the price in your quote is the price on your final invoice, and whether you get a confirmed delivery window or a four-hour range. If yes to both, book with confidence. If you are not sure, a comparison quote from RHC takes two minutes and costs nothing. Confirmed specs, locked price, and a hard arrival window are in every RHC quote. You can compare before your date is locked.",
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
    name: 'Restroom Trailer Rental in Portland, OR',
    description:
      'Luxury restroom trailer rentals for Portland outdoor events and Willamette Valley venues. Confirmed arrival windows, locked pricing, and same-day quotes from RHC.',
    path: '/restroom-trailer-rental-portland-or',
    serviceType: 'Restroom trailer rental',
    areaServed: ['Portland, OR'],
  }),
  breadcrumb([{ name: 'Restroom Trailers', path: '/restroom-trailers' }, { name: 'Portland, OR' }]),
  faqPage(faqs),
])

export default function RestroomTrailerPortland() {
  return (
    <main id="main">
      <Helmet>
        <title>Restroom Trailer Rental in Portland, OR | RHC Site Services</title>
        <meta name="description" content="Confirmed arrival windows and pricing locked from quote to event day. Luxury restroom trailer rentals for Portland events and Willamette Valley venues." />
        <link rel="canonical" href="https://rhcsiteservice.com/restroom-trailer-rental-portland-or" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/restroom-trailers">Restroom Trailers</Link>
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
                <span className="eyebrow">Luxury Restroom Trailers · Portland, OR &amp; Willamette Valley</span>
              </div>
              <h1 className="h-xl">
                Restroom Trailer Rental in <span className="underline accent">Portland, OR</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                The most common Portland complaint is not the equipment. It is the vendor. Wrong delivery window, changed price, unit that looked nothing like the listing. RHC Site Services rents restroom trailers for weddings and events across Portland: confirmed arrival time, published specs, locked price from quote to event day.
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
                <div className="meta-label">Trailer Types</div>
                <div className="meta-value">2-Stall through 10-Stall · ADA on all configurations</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Portland Metro · Willamette Valley · Sauvie Island · Columbia Gorge · Vancouver WA</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Book by</div>
                <div className="meta-value">72 hrs standard · May–Sept books 2–3 weeks out</div>
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

      {/* PORTLAND VENUE GUIDE */}
      <section id="before-you-book">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Before You Book</div>
              <h2 className="h-lg">What to confirm before booking a restroom trailer at a Portland-area venue.</h2>
            </div>
            <p>Four site details RHC catches before the truck rolls, so you do not have to.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {venueGuide.map((item, i) => (
              <div key={i} className={`permit-rule permit-rule--${item.status}`}>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: 'var(--on-surface)' }}>
                  <strong>{item.label}</strong>{' '}
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Note your venue details, power access, and any site questions on the quote form. RHC will flag anything that needs to be resolved before delivery day.
          </p>
        </div>
      </section>

      {/* TRAILER OPTIONS */}
      <section id="trailer-options" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Trailer Options</div>
              <h2 className="h-lg">2-Stall through 10-Stall configurations for Portland events and long-term sites.</h2>
            </div>
            <p>RHC configures restroom trailers from 2 to 10 stalls for Portland-area events. Every stall count in between is available. ADA configurations exist on all sizes. Exact specs, tank capacities, and power requirements are published on the main Restroom Trailers page.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {trailerOptions.map((option) => (
              <div
                key={option.num}
                style={{
                  background: 'var(--surface)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--outline-variant)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={option.image} width={option.w} height={option.h} alt={option.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '20px', alignItems: 'start', padding: '24px' }}>
                  <div className="mono" style={{ color: 'var(--secondary)', paddingTop: '2px' }}>{option.num}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '18px', fontWeight: 600, margin: '0 0 4px', letterSpacing: '-0.01em' }}>
                      {option.name}
                    </h3>
                    <p style={{ margin: '0 0 10px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {option.bestFor}
                    </p>
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.65', color: 'var(--on-surface-variant)' }}>
                      {option.body}
                    </p>
                  </div>
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
              Standard ADA restroom trailers in the Pacific Northwest typically require up to 19 feet of ramp clearance. Confirm your site clearance with RHC at booking. Required at any event where ADA access is a condition of the venue permit or Portland Parks Special Event Permit.
            </p>
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)', textAlign: 'center' }}>
            <Link to="/restroom-trailers#trailer-types" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
              See full specs, exact footprints, and tank capacities on the main Restroom Trailers page →
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
              <h2 className="h-lg">Built for Willamette Valley weddings, Portland outdoor events, and food cart pods.</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Wine Country &amp; Outdoor Weddings</div>
              <h3>Your Guests Noticed the Venue, the Ceremony, the Food. The Bathrooms Came Up Once, When a Guest Complimented Them.</h3>
              <p>
                That is the measure of a well-executed outdoor wedding: the venue, the ceremony, the food, the people. The restroom situation was handled before the first guest arrived.
              </p>
              <p style={{ marginTop: '12px' }}>
                Portland draws couples to outdoor venues precisely because of what those venues look like. Winery and vineyard estates in the Willamette Valley, private properties on Sauvie Island, Columbia River Gorge ceremony sites, and backyard events across the metro. Most have no indoor facilities that handle a full guest count. The failure mode is specific: a vendor who arrives in hour five of a four-hour window, or positions the trailer wherever the truck stopped instead of where the coordinator marked.
              </p>
              <p style={{ marginTop: '12px' }}>
                A 2-stall for up to 150 guests or a 4-stall for larger receptions. Positioned before your venue coordinator does the final walkthrough. Operational before the first guest arrives. Removed inside your cleanup window.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your guests noticed the venue, the ceremony, the food. The bathrooms came up once, when a guest complimented them. That is exactly right.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Portland Outdoor Festivals &amp; Waterfront Events</div>
              <h3>Six Hours. Open Bar. 200 Guests. The Trailer Ran Clean Through All of It.</h3>
              <p>
                That is the measure. End of a long outdoor event, the trailer handled it, and nobody on your team thought about it once between setup and breakdown.
              </p>
              <p style={{ marginTop: '12px' }}>
                Portland's outdoor event calendar runs through every season. Waterfront gatherings, Washington Park events, neighborhood festivals, charity runs, and large private outdoor parties draw guests with expectations. A unit that is not staged for traffic flow, or not serviced mid-event when runtime exceeds tank capacity, becomes a problem visible to every person in attendance.
              </p>
              <p style={{ marginTop: '12px' }}>
                A 4-stall staged for traffic flow, serviced mid-event if runtime warrants it. If your event also needs portable toilets or temporary fencing, one call to RHC covers all of it. You do not manage a second or third vendor for the same event.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Six hours, open bar, 200 guests. The trailer ran clean through all of it. You never thought about it once.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Portland Food Cart Pods &amp; Long-Term Sites</div>
              <h3>The Permit Cleared. The Pod Opened on Schedule.</h3>
              <p>
                That is the only outcome that matters in a food cart pod permitting process: cleared inspection, on-schedule opening, and a restroom situation that satisfies the health department without becoming an ongoing management problem.
              </p>
              <p style={{ marginTop: '12px' }}>
                Portland operates one of the most active food cart pod scenes in the country. The city's permitting process for food cart lots requires accessible restroom facilities, and the gap between permitting and permanent construction can run weeks or months. Without compliant facilities on-site, the opening date slips.
              </p>
              <p style={{ marginTop: '12px' }}>
                One trailer on-site handles the permit requirement, the health department review, and the daily customer need in a single placement. RHC coordinates delivery, ongoing service, and removal when permanent facilities are ready.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The permit cleared. The pod opened on schedule. Three months in, the restroom situation has not come up once.
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
              <h2 className="h-lg">Why Portland event coordinators and venue managers call RHC instead of whoever ranks first.</h2>
            </div>
            <p>
              Every complaint about restroom trailer vendors in Portland comes down to one of three failures: it arrived late, the price changed before the event, or it looked nothing like what was advertised. Those are the three problems RHC was built to prevent.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Confirmed Arrival Windows, Not Four-Hour Guesses</h3>
              <p>
                A winery reception in the Willamette Valley or a backyard wedding in Portland does not have slack for a vendor that shows up whenever the truck gets there. RHC gives you a confirmed delivery window, positioned before your venue coordinator does the final walkthrough. If anything changes before it, you hear from RHC before that window, not after you have been standing at the venue waiting.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 01" paragraph about confirmed arrival windows
                  Intended review theme: arrived on time / positioned exactly where we marked / coordinator never had to think about it / smooth from start to finish
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>The Quote You Approve Is the Bill You Pay</h3>
              <p>
                No fuel surcharge added the week before your event. No generator fee that appeared after the fact. Your quote covers delivery, leveling, setup, and post-event pump-out and removal. That number does not change between the day you approve it and the day the final invoice arrives, unless your event duration changes, and that conversation happens before pickup, not after. The most straightforward rental you will handle all event season.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 02" paragraph about the quote you approve being the bill you pay
                  Intended review theme: invoice matched the quote exactly / no surprise charges / easiest vendor to work with
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Exact Specs Published Before You Book</h3>
              <p>
                The most common complaint about restroom trailer vendors is that what showed up looked nothing like what was advertised. RHC publishes exact exterior dimensions, tank capacities, ADA ramp deployment widths, and power requirements on the main service page before you fill out a form. What arrives at your venue is what you confirmed when you booked. Clean, air-conditioned, stocked, and ready before the first guest arrives. Not something you usually say about portable restrooms.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 03" paragraph about exact specs published before you book
                  Intended review theme: unit matched the listing / clean and air conditioned / guests noticed and complimented / would book again
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
              <h2 className="h-lg">Questions about restroom trailer rentals in Portland, OR.</h2>
            </div>
            <p>The most common questions from Portland event coordinators, wedding planners, and property managers. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
                Ready to lock in your<br />Portland restroom trailer?
              </h2>
              <p>Submit your event details and RHC responds the same day with a confirmed quote, not a callback that leads to another callback. Trailer specs, confirmed delivery window, and all-in pricing before you commit to anything. Portland metro and Willamette Valley coverage.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Fast response.</span>
              </div>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "No commitment. Fast response." final-trigger block in the Get Started section
                  Intended review theme: easy booking / quote came back same day / trailer was clean and exactly as described / guests loved it / would book again
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
              defaultService="High-End Luxury Restroom or Shower Trailers"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
