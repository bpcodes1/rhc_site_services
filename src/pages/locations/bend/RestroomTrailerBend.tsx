import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../../seo/schema'
import LeadForm from '../../../components/LeadForm'
import heroImg from '../../../assets/cities/bend/bend_hero.webp'
import trailer2StallImg from '../../../assets/restroom-trailers/2stall_portable.webp'
import trailer4StallImg from '../../../assets/restroom-trailers/4stall_portable.webp'
import trailerLargeImg from '../../../assets/restroom-trailers/restroom-trailer1.webp'
import trailerXLImg from '../../../assets/restroom-trailers/restroom-trailer2.webp'

const bookingGuide = [
  {
    label: 'Peak season runs May through October. Book early.',
    body: "Bend's outdoor event calendar is dense between Memorial Day and mid-October. Restroom trailer availability in Central Oregon is limited, and this window fills 2 to 4 weeks out during the summer months. If your event falls between June and October, submit a quote request the moment your venue and date are confirmed, not when you start finalizing other details. Wait too long and the dates you need will not be available.",
    status: 'check',
  },
  {
    label: 'Power is required. Most venues have it. Remote ones do not.',
    body: 'A 2-stall trailer requires one dedicated 110V / 20-amp circuit. A 4-stall requires two to three circuits. Many Central Oregon outdoor event venues, ranch properties, and unimproved sites do not have an accessible power source nearby. A trailer without power means no climate control, no interior lighting, and no flushing. If your venue lacks a dedicated circuit, note it on the quote form. RHC provides a generator and includes it in your quote.',
    status: 'required',
  },
  {
    label: 'Terrain and access matter for outdoor placements.',
    body: "The delivery truck needs clearance to back in before setup, and the trailer needs reasonably level ground. Many Bend-area ranch properties, vineyard event spaces, and High Desert sites have soft, uneven, or unprepared terrain. A driver who arrives to find the site inaccessible either cannot complete delivery or risks damaging your venue's turf. Note your surface conditions and site access on the form and RHC will confirm the placement approach before delivery day.",
    status: 'check',
  },
  {
    label: 'Large events in Deschutes County may require a permit.',
    body: 'Events held on unincorporated Deschutes County property with 100 or more attendees typically require a Special Event Permit through the county. The permit review includes a sanitation check, and a compliant restroom trailer satisfies that requirement. Events that proceed without a required permit are subject to shutdown mid-event. For private land events under 100 guests, no permit is required. Note your headcount and property type on the form and RHC will flag what applies before the truck rolls.',
    status: 'check',
  },
]

const trailerOptions = [
  {
    num: '01',
    name: '2-Stall and 3-Stall Configurations',
    bestFor: 'Up to 150 guests (2-stall) · Ranch weddings, vineyard receptions, and private outdoor events',
    body: 'The standard choice for Bend-area ranch weddings and vineyard receptions. Standard 2-stall configurations accommodate up to 150 guests for events running 4 to 6 hours. Climate-controlled, porcelain flush, running hot and cold water, and vanity mirrors. For guest counts between the 2-stall and 4-stall ranges, a 3-stall configuration is available.',
    image: trailer2StallImg,
    w: 2048,
    h: 2048,
  },
  {
    num: '02',
    name: '4-Stall and 5-Stall Configurations',
    bestFor: '150–300 guests · Festivals, estate weddings, and corporate retreats',
    body: 'The right configuration for larger receptions, High Desert festivals, and corporate events at Central Oregon resort properties. Standard 4-stall configurations accommodate up to 300 guests. Same interior amenities as the 2-stall with expanded tank capacity for higher guest counts and longer event durations. A 5-stall configuration is available for guest counts between the 4-stall and 6-stall range.',
    image: trailer4StallImg,
    w: 1800,
    h: 982,
  },
  {
    num: '03',
    name: '6-Stall, 7-Stall, and 8-Stall Configurations',
    bestFor: '~350 guests (6-stall) to ~500 guests (8-stall) · Large Central Oregon festivals and multi-day productions',
    body: 'High-capacity configurations for major Bend-area outdoor events with extended runtimes. Standard 6-stall configurations accommodate approximately 350 guests for events lasting up to 10 hours. Standard 8-stall configurations accommodate approximately 500 guests for events running 6 to 7 hours. A 7-stall configuration is available for guest counts between those two anchors.',
    image: trailerLargeImg,
    w: 1140,
    h: 1140,
  },
  {
    num: '04',
    name: '9-Stall and 10-Stall Configurations',
    bestFor: 'Up to ~700 guests (10-stall) · Major festivals, large corporate outdoor events, multi-day productions',
    body: 'Maximum-capacity configurations for large-scale Central Oregon events. Standard 10-stall configurations accommodate approximately 700 guests for events running 6 to 8 hours. A 9-stall configuration is available for guest counts between the 8-stall and 10-stall range. RHC reviews your site footprint, power access, and event timeline before confirming the configuration.',
    image: trailerXLImg,
    w: 1024,
    h: 1024,
  },
]

const faqs = [
  {
    q: 'How much does it cost to rent a restroom trailer in Bend, OR?',
    a: 'Pricing depends on five things: trailer configuration (stall count from 2 to 10), event duration, delivery distance within Central Oregon, whether a generator is needed, and whether mid-event servicing is required. There is no single number that covers all those variables without either overstating or understating your actual cost. What RHC does is put together an all-in quote for your specific event within 24 hours. Submit your trailer size, headcount, date, and location on the form and you get a confirmed number back the same day. Delivery, setup, and post-event pump-out included.',
  },
  {
    q: 'My wedding coordinator already has a restroom trailer vendor she recommends. Should I still get a quote from RHC?',
    a: "A coordinator's recommendation comes from experience with that vendor's reliability. That is worth something. Two things are worth confirming before you book with anyone: whether they publish exact specs and dimensions before delivery, and whether the price in your quote is the price on your final invoice. If yes to both, book with confidence. If you are not sure, a comparison quote from RHC takes two minutes and costs nothing. The specs, the locked price, and the confirmed arrival window are in every RHC quote. You can compare before your date is locked.",
  },
  {
    q: 'How far in advance should I book a restroom trailer for a Bend event?',
    a: 'At least 72 hours outside of peak season. Between June and October, Central Oregon restroom trailer availability fills 2 to 4 weeks out. If your event falls in that window, submit a quote request the moment your venue and date are confirmed. Waiting until a few weeks before a summer event is the most common reason requests cannot be fulfilled.',
  },
  {
    q: 'Do I need a permit for a restroom trailer event in Bend, OR?',
    a: "For private land events under 100 guests: no permit is required from the city or county. For events in unincorporated Deschutes County with 100 or more attendees: a Special Event Permit through the county includes a sanitation review, and a compliant restroom trailer satisfies that requirement. For commercial placements such as food cart pod lots: the city's permitting process for the lot covers sanitation requirements, and a restroom trailer is a standard compliance path. Note your headcount and property type on the form and RHC will flag what applies.",
  },
  {
    q: 'Does a restroom trailer need power at an outdoor venue?',
    a: 'Yes. A 2-stall requires one dedicated 110V / 20-amp circuit. A 4-stall requires two to three depending on whether both AC units run simultaneously. If your venue does not have accessible power, note it on the form. RHC provides a generator and includes it in the quoted price.',
  },
  {
    q: 'Can a restroom trailer be placed on grass, gravel, or uneven terrain?',
    a: 'Yes, with planning. The trailer needs reasonably level ground and clearance for the delivery truck to back in. Many Central Oregon outdoor venues, ranch properties, and High Desert event sites have soft or uneven terrain. Note your surface conditions on the form and RHC will confirm the placement approach before delivery.',
  },
  {
    q: 'How far does RHC deliver restroom trailers from Bend?',
    a: 'RHC delivers throughout Central Oregon: Bend, Redmond, Sisters, Sunriver, Prineville, La Pine, and Tumalo. For events or placements beyond the standard delivery radius, note your address on the form. Additional distance is factored into your quote.',
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
    name: 'Restroom Trailer Rental in Bend, OR',
    description:
      'Luxury restroom trailer rentals for Bend outdoor events and long-term sites. Hard arrival windows, published specs, and all-in quotes from RHC. Central Oregon coverage.',
    path: '/restroom-trailer-rental-bend-or',
    serviceType: 'Restroom trailer rental',
    areaServed: ['Bend, OR'],
  }),
  breadcrumb([{ name: 'Restroom Trailers', path: '/restroom-trailers' }, { name: 'Bend, OR' }]),
  faqPage(faqs),
])

export default function RestroomTrailerBend() {
  return (
    <main id="main">
      <Helmet>
        <title>Restroom Trailer Rental in Bend, OR | RHC Site Services</title>
        <meta name="description" content="Luxury restroom trailer rentals for Bend outdoor events and long-term sites. Hard arrival windows, published specs, and all-in quotes from RHC. Central Oregon coverage." />
        <link rel="canonical" href="https://rhcsiteservice.com/restroom-trailer-rental-bend-or" />
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
                <span className="eyebrow">Luxury Restroom Trailers · Bend, OR &amp; Central Oregon</span>
              </div>
              <h1 className="h-xl">
                Restroom Trailer Rental in <span className="underline accent">Bend, OR</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Central Oregon's outdoor event season runs May through October. Every year the same failures hit someone: a five-hour delivery window, a trailer that looks nothing like the listing, or an invoice with unexpected charges. RHC Site Services rents restroom trailers for weddings and events across Bend and Central Oregon, and fixes all three. Confirmed arrival time, published specs, locked price.
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
                <div className="meta-value">Bend · Sunriver · Redmond · Sisters · La Pine · Prineville</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Book by</div>
                <div className="meta-value">72 hrs min · June–Oct books 2–4 weeks out</div>
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

      {/* BEFORE YOU BOOK */}
      <section id="before-you-book">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Before You Book</div>
              <h2 className="h-lg">What to confirm before booking a restroom trailer in Bend, OR.</h2>
            </div>
            <p>A restroom trailer rental in Central Oregon involves a few site-specific details that come up at outdoor and remote venues more than anywhere else. Here is what to confirm before delivery day.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {bookingGuide.map((item, i) => (
              <div key={i} className={`permit-rule permit-rule--${item.status}`}>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: 'var(--on-surface)' }}>
                  <strong>{item.label}</strong>{' '}
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Note your event details, site conditions, and any power or access questions on the quote form. RHC will flag anything that needs to be resolved before delivery.
          </p>
        </div>
      </section>

      {/* TRAILER OPTIONS */}
      <section id="trailer-options" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Trailer Options</div>
              <h2 className="h-lg">2-Stall through 10-Stall configurations for Bend events and long-term sites.</h2>
            </div>
            <p>RHC configures restroom trailers from 2 to 10 stalls for Central Oregon events. Every stall count in between is available. ADA configurations exist on all sizes. Exact specs, tank capacities, and power requirements are published on the main Restroom Trailers page.</p>
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
              Standard ADA restroom trailers in the Pacific Northwest typically require up to 19 feet of ramp clearance. Confirm your site clearance with RHC at booking. Required at any event where ADA access is a condition of the venue permit or Deschutes County Special Event Permit.
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
              <h2 className="h-lg">Built for High Desert weddings, outdoor festivals, Central Oregon retreats, and Bend food cart pods.</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Outdoor Weddings</div>
              <h3>Your Guests Noticed the Venue. Nobody Noticed the Restrooms. That Is the Goal.</h3>
              <p>
                That is the measure of a well-executed outdoor wedding: the ceremony, the venue, the food, the people. The restroom situation should be invisible because it was handled before guests arrived.
              </p>
              <p style={{ marginTop: '12px' }}>
                Bend draws couples specifically for its outdoor venues. Ranch properties in Tumalo, forest ceremony sites near Sisters, High Desert event spaces east of town, and vineyards outside Redmond. Most have no on-site indoor facilities or cannot handle a full guest count with what they have. The failure mode is specific: a vendor who delivers in hour five of a four-hour window, or positions the trailer wherever the truck stopped instead of where the coordinator marked.
              </p>
              <p style={{ marginTop: '12px' }}>
                A 2-stall for up to 150 guests or a 4-stall for larger receptions. Positioned before your venue coordinator does the final walkthrough. Operational before the first guest arrives. Removed inside your cleanup window.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your guests noticed the venue, the ceremony, and the food. The restrooms were not a topic. That is exactly right.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Festivals &amp; High Desert Events</div>
              <h3>Six Hours. Open Bar. 250 Guests. The Trailer Handled It.</h3>
              <p>
                That is the measure. End of a long outdoor event, the trailer ran clean through all of it, and nobody on your team touched it between setup and breakdown.
              </p>
              <p style={{ marginTop: '12px' }}>
                Bend's outdoor event calendar runs hard June through October: music events, charity runs, food and beverage festivals, and large private gatherings. A unit that is not staged for traffic flow, or not serviced mid-event when runtime exceeds tank capacity, becomes a problem that is visible to 250 people.
              </p>
              <p style={{ marginTop: '12px' }}>
                A 4-stall staged for traffic flow, serviced mid-event if runtime exceeds tank capacity. And if your event also needs standard portable toilets or temporary fencing, one call to RHC covers all of it. You do not manage a second or third vendor for the same event.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Six hours, an open bar, 250 guests. The trailer handled it. You never thought about it once.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Corporate Retreats &amp; Resort Events</div>
              <h3>The Client Group Arrived to a Venue That Felt Right from the Start.</h3>
              <p>
                That is the benchmark for a corporate event at an outdoor or off-grid Central Oregon property: an environment that communicates the right standard from the moment the client group steps out of the vehicle.
              </p>
              <p style={{ marginTop: '12px' }}>
                Sunriver Resort, Eagle Crest, Black Butte Ranch, and dozens of private retreat properties around Central Oregon host groups that do not miss details. A restroom situation that reads as an afterthought undermines the entire venue context.
              </p>
              <p style={{ marginTop: '12px' }}>
                A climate-controlled trailer positioned at the outdoor event space or venue extension, delivering an interior that matches the setting, maintained clean through a full day of use, and removed cleanly after the event closes.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The client group arrived to a venue that felt right from the start. The restroom situation was never a topic.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">04 / Bend Food Cart Pods &amp; Long-Term Sites</div>
              <h3>The Permit Cleared. The Pod Opened on Schedule.</h3>
              <p>
                That is the only outcome that matters for a food cart pod permitting process: cleared inspection, on-schedule opening, and a restroom situation that satisfies the health department without becoming an ongoing management problem.
              </p>
              <p style={{ marginTop: '12px' }}>
                Bend operates one of the most active food cart pod scenes in Oregon. The city's permitting process for food cart lots requires accessible restroom facilities, and the gap between permitting and permanent construction can run weeks or months. Without compliant facilities on-site, the opening date slips.
              </p>
              <p style={{ marginTop: '12px' }}>
                One trailer on-site handles the permit requirement, the health department review, and the daily customer need in a single placement. RHC coordinates delivery, ongoing service, and removal when your permanent facilities are ready.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The permit cleared. The pod opened on schedule. Two months in, the restroom situation has not come up once.
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
              <h2 className="h-lg">Why event coordinators and property managers in Bend call RHC instead of whoever ranks first.</h2>
            </div>
            <p>
              Every 1-star review of a restroom trailer company in Central Oregon comes down to one of three failures: it arrived late, the price changed before the event, or it was left wherever the driver stopped instead of where the coordinator marked. Those are the three problems RHC was built to prevent.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Confirmed Arrival Windows, Not Four-Hour Guesses</h3>
              <p>
                An outdoor event in Central Oregon does not have slack for a vendor that shows up whenever the truck gets there. RHC gives you a confirmed delivery window. If anything changes before it, you hear from RHC before that window, not after you have been standing at the venue waiting. That is not a goal. It is how every delivery is scheduled.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 01" paragraph about confirmed arrival windows
                  Intended review theme: trailer was on-site before coordinator arrived / hard window honored / smooth day-of coordination
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
                No fuel surcharge added the week before your event. No generator fee that appeared after the fact. Your quote covers delivery, leveling, setup, and post-event pump-out and removal. That number does not change between the day you approve it and the day the final invoice arrives, unless your event duration changes, and that conversation happens before pickup, not after. The quote you approve is the bill you pay.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 02" paragraph about the quote you approve being the bill you pay
                  Intended review theme: invoice matched the quote / no surprise charges / would book for next year
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
                The most common complaint about restroom trailer vendors is that what showed up looked nothing like what was advertised. RHC publishes exact exterior dimensions, tank capacities, ADA ramp deployment widths, and power requirements on the main service page before you fill out a form. What arrives at your venue is what you confirmed when you booked. No interpretation required.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 03" paragraph about exact specs published before you book
                  Intended review theme: trailer matched the listing / no surprises on delivery day / professionally positioned
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
              <h2 className="h-lg">Questions about restroom trailer rentals in Bend, OR.</h2>
            </div>
            <p>The most common questions from Bend event coordinators, wedding planners, and property managers. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
                Ready to lock in your<br />Bend restroom trailer?
              </h2>
              <p>Submit your event details and RHC will have a confirmed quote back to you the same day. Trailer specs, delivery window, and all-in pricing confirmed before you commit to anything. Central Oregon coverage, and peak-season availability goes fast.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Fast response.</span>
              </div>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "No commitment. Fast response." final-trigger block in the Get Started section
                  Intended review theme: easy booking / quote came back same day / trailer was exactly as described / would book again next year
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
