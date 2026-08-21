import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../seo/schema'
import LeadForm from '../../components/LeadForm'
import heroImg from '../../assets/restroom-trailers/luxury_restroom_hero.webp'
import restroom2StallImg from '../../assets/restroom-trailers/2stall_portable.webp'
import restroom4StallImg from '../../assets/restroom-trailers/4stall_portable.webp'
import restroom6StallImg from '../../assets/restroom-trailers/restroom-trailer1.webp'
import restroom10StallImg from '../../assets/restroom-trailers/restroom-trailer2.webp'

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

const trailerTiers = [
  {
    num: '01 / 2–3 Stall',
    name: '2-Stall and 3-Stall Configurations',
    bestFor: 'Up to 150 guests (2-stall) · Winery weddings, private outdoor events, estate receptions',
    description: 'The entry-level luxury configuration for intimate Oregon and Washington outdoor events. Standard 2-stall configurations accommodate up to 150 guests for events running 4 to 6 hours. Climate-controlled, porcelain flushing toilets, running hot and cold water, vanity mirrors, and interior lighting. For guest counts between the 2-stall and 4-stall ranges, a 3-stall configuration is available. Note your headcount and duration on the form.',
    specs: [
      { label: 'Exterior (L × W × H)', value: "12' long (15' w/ tongue) × 6' wide (9' w/ stairs) × 10'6\" high" },
      { label: 'Freshwater tank', value: '105–125 gal (or connect to a garden hose for unlimited supply)' },
      { label: 'Wastewater tank', value: '250–300 gallons' },
      { label: 'Use capacity', value: '800–900 flushes before pump-out' },
      { label: 'Power required', value: 'One dedicated 110V / 20-amp circuit' },
    ],
    extraSpecs: undefined as undefined | { label: string; items: { label: string; value: string }[] },
    image: restroom2StallImg,
    w: 2048,
    h: 2048,
  },
  {
    num: '02 / 4–5 Stall',
    name: '4-Stall and 5-Stall Configurations',
    bestFor: 'Up to 300 guests (4-stall) · Estate weddings, large outdoor festivals, commercial remodels',
    description: 'The workhorse configuration for large outdoor events across Oregon and Washington. Standard 4-stall configurations accommodate up to 300 guests. Same interior amenities as the 2-stall with expanded tank capacity for higher guest counts and longer event durations. A 5-stall configuration is available for guest counts between the 4-stall and 6-stall range.',
    specs: [
      { label: 'Exterior (L × W × H)', value: "14'6\" long (19' w/ tongue) × 6'5\" wide (9'5\" w/ stairs) × 11'3\" high" },
      { label: 'Freshwater tank', value: '200 gallons' },
      { label: 'Wastewater tank', value: '400–450 gallons' },
      { label: 'Use capacity', value: '1,200–1,400 flushes before pump-out' },
      { label: 'Power required', value: '2–3 dedicated 110V / 20-amp circuits' },
    ],
    extraSpecs: undefined as undefined | { label: string; items: { label: string; value: string }[] },
    image: restroom4StallImg,
    w: 1800,
    h: 982,
  },
  {
    num: '03 / 6–8 Stall',
    name: '6-Stall, 7-Stall, and 8-Stall Configurations',
    bestFor: '~350 guests (6-stall) to ~500 guests (8-stall) · Large festivals, outdoor concerts, multi-day events',
    description: 'High-capacity configurations for major outdoor events with extended runtimes. Standard 6-stall configurations in the Pacific Northwest typically accommodate approximately 350 guests for events lasting up to 10 hours. A 7-stall configuration is available for guest counts between those two anchors. Primary specs below reflect standard 6-stall configurations; 8-stall anchor specs are listed separately.',
    specs: [
      { label: 'Exterior (L × W × H)', value: "16'–22' long (includes tongue) × 8'6\" wide (12' w/ stairs) × 11'6\" high" },
      { label: 'Freshwater tank', value: '~200 gallons' },
      { label: 'Wastewater tank', value: '450–550 gallons' },
      { label: 'Use capacity', value: '1,500–2,000 flushes before pump-out' },
      { label: 'Power required', value: '2–3 dedicated 110V / 20-amp circuits' },
    ],
    extraSpecs: {
      label: '8-Stall Anchor Specs',
      items: [
        { label: 'Wastewater tank', value: '750–1,000 gallons' },
        { label: 'Use capacity', value: '2,500–3,500 flushes before pump-out' },
        { label: 'Power required', value: '2–3 dedicated 110V / 20-amp circuits (dual A/C)' },
      ],
    },
    image: restroom6StallImg,
    w: 1140,
    h: 1140,
  },
  {
    num: '04 / 9–10 Stall',
    name: '9-Stall and 10-Stall Configurations',
    bestFor: 'Up to ~700 guests (10-stall) · Major festivals, large corporate events, multi-day productions',
    description: 'Maximum-capacity configurations for large-scale Pacific Northwest events. Standard 10-stall configurations in the Pacific Northwest typically accommodate approximately 700 guests for events running 6 to 8 hours. A 9-stall configuration is available for guest counts between the 8-stall and 10-stall range. At this scale, RHC reviews your site footprint, power access, and event timeline before confirming the configuration.',
    specs: [
      { label: 'Exterior (L × W × H)', value: "24'–28' long (up to 32' w/ tongue) × 8'6\" wide (12'6\" w/ stairs) × 11'10\" high" },
      { label: 'Freshwater tank', value: '200–250 gallons' },
      { label: 'Wastewater tank', value: '850–1,150 gallons' },
      { label: 'Use capacity', value: '3,000–4,000+ flushes before pump-out' },
      { label: 'Power required', value: '2–3 dedicated 110V / 20-amp circuits' },
    ],
    extraSpecs: undefined as undefined | { label: string; items: { label: string; value: string }[] },
    image: restroom10StallImg,
    w: 1024,
    h: 1024,
  },
]

const faqs = [
  {
    q: "What's the difference between a porta potty and a restroom trailer?",
    a: "A standard portable toilet is a single plastic unit with an open waste tank, basic sanitation capacity for worksites and casual outdoor use. A restroom trailer, also called a bathroom trailer, is a climate-controlled, multi-stall unit with porcelain flushing toilets, running hot and cold water, vanity mirrors, and a completely sealed waste system. Guests using a luxury restroom trailer routinely describe it as nicer than most indoor bathrooms they've been in.",
  },
  {
    q: 'How does a restroom trailer actually work?',
    a: "The same way an RV or airplane lavatory does. Freshwater from an onboard holding tank, or a connected garden hose, feeds the faucets and flushing mechanism. Waste flushes into a completely sealed blackwater tank beneath the floor. No exposed waste, no odor. When the event ends, RHC pumps and sanitizes the unit during pickup.",
  },
  {
    q: 'How much does it cost to rent a luxury restroom trailer in Oregon?',
    a: "Pricing depends on five variables: stall count, event duration, delivery distance, whether a generator is needed, and whether mid-event servicing is required. No single number covers those variables accurately without either padding your quote or understating your actual cost. Submit your stall count, guest count, date, and location on the form and RHC will have a confirmed all-in number back to you the same day. Delivery, leveling, setup, and post-event pump-out included.",
  },
  {
    q: 'How many stalls do I need for my event?',
    a: "One stall per 75 guests for a standard 4-to-6 hour event is the rule of thumb. Confirmed anchors: a 2-stall handles up to 150 guests, a 4-stall handles up to 300, a 6-stall handles approximately 350 for events lasting up to 10 hours, an 8-stall handles approximately 500, and a 10-stall handles approximately 700 for events running 6 to 8 hours. If your event runs longer than 6 hours or serves heavy alcohol, move up one stall count or plan for mid-event servicing. Tell us your headcount, event duration, and bar situation in the form and RHC will confirm the right configuration.",
  },
  {
    q: 'Do restroom trailers need a water hookup?',
    a: "A garden hose connection is ideal but not required. All trailers come with onboard freshwater holding tanks. No hookup needed for remote venues. For a standard 4-to-6 hour event, the onboard tank is sufficient without refilling.",
  },
  {
    q: 'Do restroom trailers need electricity?',
    a: "Yes. A 2-stall requires one dedicated 110V / 20-amp circuit. A 4-stall requires two to three. Configurations from 6 stalls and above require two to three circuits, with dual A/C units on 8-stall and larger requiring multiple circuits to run simultaneously. If your venue has no power, RHC provides a quiet generator. Note it in the form and it will be included in your quote.",
  },
  {
    q: 'Do restroom trailers have air conditioning and heat?',
    a: "Yes, all units are fully climate-controlled. Oregon summers can run hot and fall events along the coast run cold and damp. Your guests stay comfortable either way.",
  },
  {
    q: 'Do restroom trailers smell?',
    a: "No. Unlike standard plastic units where waste sits exposed, trailers use sealed flushing mechanisms identical to home toilets, combined with mechanical exhaust ventilation and climate control. When maintained on schedule they remain completely odor-free throughout your event.",
  },
  {
    q: 'Can a restroom trailer be placed on grass or dirt?',
    a: "Yes. The trailer needs relatively level ground. The driver will assess terrain and confirm safe placement before delivery. Mention soft or uneven ground when you book so the approach can be planned without causing turf damage.",
  },
  {
    q: 'Can a restroom trailer fit inside a tent?',
    a: "Generally yes, if the tent is a high-clearance marquee style without a floor and the delivery truck has enough clearance to back in before the walls are secured. The AC unit also needs airflow. A fully enclosed tent without ventilation won't work. Describe your tent setup in the notes field and we'll confirm before booking.",
  },
  {
    q: 'Do I have to clean the trailer before pickup?',
    a: "No. Your rental includes post-event deep cleaning, chemical sanitization, and waste pump-out. You don't touch it. RHC handles everything during the scheduled pickup window.",
  },
  {
    q: 'How far in advance should I book?',
    a: "At least 72 hours to guarantee availability. June through October fills fast. If your event is within the next two weeks, call RHC directly rather than using the form.",
  },
]

const schema = graph([
  business,
  service({
    name: 'Restroom Trailer Rentals',
    description:
      'Luxury restroom trailers from 2 to 10 stalls: published specs, confirmed delivery windows, and climate control for events across Oregon and Washington. Same-day quotes from RHC.',
    path: '/restroom-trailers',
    serviceType: 'Restroom trailer rental',
  }),
  breadcrumb([{ name: 'Restroom Trailer Rentals' }]),
  faqPage(faqs),
])

export default function RestroomTrailers() {
  return (
    <main id="main">
      <Helmet>
        <title>Restroom Trailer Rentals in Oregon &amp; Washington | RHC</title>
        <meta name="description" content="Published specs, confirmed delivery windows, and climate control. Luxury restroom trailers from 2 to 10 stalls for events across Oregon and Washington." />
        <link rel="canonical" href="https://rhcsiteservice.com/restroom-trailers" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Restroom Trailer Rentals</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid hero-lean-grid--split">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Luxury Restroom Trailers · Oregon &amp; Washington</span>
              </div>
              <h1 className="h-xl">
                Restroom Trailer Rentals in <span className="underline accent">Oregon &amp; Washington</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Climate-controlled, porcelain-flushing trailers delivered on time and positioned exactly where your venue marks them. RHC Site Services rents restroom trailers for weddings, festivals, and corporate events across Oregon and Washington. 2 to 10 stalls. ADA available. Specs published.
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
                <div className="meta-value">Portland → Seattle &amp; the PNW</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Book By</div>
                <div className="meta-value">72 hrs standard · June–Oct books 2–3 weeks out</div>
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

      {/* TRAILER TYPES */}
      <section id="trailer-types">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Trailer Types</div>
              <h2 className="h-lg">2-Stall through 10-Stall: What's the right restroom trailer configuration for your event?</h2>
            </div>
            <p>Every stall count from 2 to 10 is available. ADA configurations exist on all sizes. The four tiers below anchor around confirmed guest counts. If your event falls between tiers, note your headcount and duration on the form and RHC will confirm the right configuration. Every trailer is climate-controlled with porcelain flushing toilets, running hot and cold water, vanity mirrors, and interior lighting.</p>
          </div>

          <div className="units">
            {trailerTiers.map((tier) => (
              <article key={tier.num} className="unit">
                <div className="unit-photo">
                  <img src={tier.image} width={tier.w} height={tier.h} alt={tier.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="unit-body">
                  <div className="mono-num">{tier.num}</div>
                  <h3>{tier.name}</h3>
                  <p style={{ color: 'var(--secondary)', fontSize: '13px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {tier.bestFor}
                  </p>
                  <p>{tier.description}</p>
                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--outline-variant)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {tier.specs.map((spec) => (
                      <div key={spec.label} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>
                          {spec.label}
                        </span>
                        <span style={{ fontSize: '13px', color: 'var(--on-surface)', lineHeight: '1.5' }}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  {tier.extraSpecs && (
                    <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px dashed var(--outline-variant)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '8px' }}>
                        {tier.extraSpecs.label}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {tier.extraSpecs.items.map((item) => (
                          <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>
                              {item.label}
                            </span>
                            <span style={{ fontSize: '13px', color: 'var(--on-surface)', lineHeight: '1.5' }}>
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: '20px',
              padding: '18px 22px',
              background: 'var(--surface-low)',
              borderLeft: '3px solid var(--primary)',
              borderRadius: '0 var(--r-lg) var(--r-lg) 0',
            }}
          >
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: 'var(--on-surface)' }}>
              <strong style={{ color: 'var(--primary)' }}>ADA configurations are available on every stall count from 2 to 10.</strong>{' '}
              Standard ADA restroom trailers in the Pacific Northwest typically require up to 19 feet of ramp clearance. Confirm your site clearance with RHC at booking, as this is the requirement event coordinators most commonly underestimate. ADA units include a 36" entry door, 60" interior turning radius, and compliant grab bars.
            </p>
          </div>

          <p style={{ marginTop: '24px', fontSize: '13px', color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            Specs reflect standard Pacific Northwest configurations. Exact dimensions are confirmed with RHC at booking. We verify the exact footprint for your venue before delivery.
          </p>
        </div>
      </section>

      {/* SIZING GUIDE */}
      <section id="sizing-guide" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Sizing Guide</div>
              <h2 className="h-lg">How many stalls does your event actually need?</h2>
            </div>
            <p>The rule of thumb: one stall per 75 guests for a standard 4-to-6 hour event. Longer events and open bars change that math. Use the confirmed anchors below as your starting point.</p>
          </div>

          <table className="sizing-table">
            <thead>
              <tr>
                <th>Stall Count</th>
                <th>Standard Guest Capacity</th>
                <th>Event Duration Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2-Stall</td>
                <td>Up to 150 guests</td>
                <td>4–6 hours</td>
              </tr>
              <tr>
                <td>4-Stall</td>
                <td>Up to 300 guests</td>
                <td>4–6 hours</td>
              </tr>
              <tr>
                <td>6-Stall</td>
                <td>~350 guests</td>
                <td>Up to 10 hours</td>
              </tr>
              <tr>
                <td>8-Stall</td>
                <td>~500 guests</td>
                <td>6–7 hours</td>
              </tr>
              <tr>
                <td>10-Stall</td>
                <td>~700 guests</td>
                <td>6–8 hours</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '24px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Intermediate stall counts (3, 5, 7, 9) are available for guest counts between these anchors. For events with an open bar or runtimes beyond the ranges above, move up one stall count or note it on the form. RHC will include mid-event servicing in your quote.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">03 / Use Cases</div>
              <h2 className="h-lg">Built for weddings, festivals, and every outdoor event in the Pacific Northwest.</h2>
            </div>
            <p>From a 2-stall trailer at a Willamette Valley winery to a 4-stall unit at a 300-person festival, the same operational standard applies across every job.</p>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Weddings</div>
              <h3>Outdoor Weddings &amp; Estate Events</h3>
              <p>Your guests will talk about the restrooms. That's the standard we work to. Trailers positioned exactly where your coordinator marks them, operational before your first guest arrives, and gone before you lock up the venue. The best sign of a good delivery is that nobody noticed it happened.</p>
            </div>
            <div className="use-case">
              <div className="use-num">02 / Festivals</div>
              <h3>Festivals &amp; Large-Scale Outdoor Events</h3>
              <p>A 4-stall unit for 250 people, staged for traffic flow, serviced mid-event if your run time exceeds tank capacity. And if you need temporary fencing and standard portable toilets for the same event, one call to RHC covers all of it. You don't manage a second or third vendor.</p>
            </div>
            <div className="use-case">
              <div className="use-num">03 / Vineyard</div>
              <h3>Vineyard &amp; Winery Events</h3>
              <p>Off-grid ready. Onboard freshwater tanks mean no water hookup required at remote properties. A quiet generator handles power when the venue doesn't have a dedicated circuit. Trailers level safely on grass and gravel without damaging manicured grounds.</p>
            </div>
            <div className="use-case">
              <div className="use-num">04 / Production</div>
              <h3>Film, TV &amp; Corporate Productions</h3>
              <p>Climate-controlled facilities for cast, crew, or clients. Positioned for production logistics, maintained on schedule, and removed clean. Same operational standard regardless of the use case.</p>
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
              <h2 className="h-lg">The three failures we built RHC to fix, for events.</h2>
            </div>
            <p>Every 1-star review of a restroom trailer company reads the same way. The equipment looked nothing like the website. The price changed after the agreement. The driver left the trailer where the truck stopped, not where the coordinator asked.</p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>We Publish Our Specs</h3>
              <p>Exact exterior dimensions, tank capacities, and power requirements, all listed on this page before you fill out a single form. The most common 1-star review in this industry reads some version of "what showed up looked nothing like what was advertised." We fix that before you book.</p>
            </div>
            <div className="why-item">
              <div className="why-num">02</div>
              <h3>The Price in Your Quote is the Price on Your Invoice</h3>
              <p>No fuel surcharges added the week before your event. No "we lost our delivery contractor so the price went up" calls. The number you approve includes delivery, leveling, setup, and post-event pump-out and removal. That's the number you pay.</p>
            </div>
            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Positioned Where You Mark It, Gone Before Guests Arrive</h3>
              <p>The driver will assess your terrain and confirm placement with your coordinator before delivery. Setup happens before your event starts. Removal happens after. No vendor is ever visible during your event.</p>
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
              <h2 className="h-lg">Where we deliver restroom trailers.</h2>
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
            <p>Venue requirements differ by city. RHC publishes a guide for each market it serves: <Link to="/restroom-trailer-rental-portland-or">restroom trailer rental in Portland</Link>, <Link to="/restroom-trailer-rental-bend-or">event restroom trailers in Bend</Link>, and <Link to="/restroom-trailer-rental-seattle-wa">Seattle restroom trailers and King County code</Link>.</p>
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
              <h2 className="h-lg">Questions we get about restroom trailer rentals.</h2>
            </div>
            <p>Everything event coordinators and wedding planners ask before booking. Need something not here? Drop it in the form or call RHC. A person will answer.</p>
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
                Ready to lock in<br />your restroom trailer?
              </h2>
              <p>Submit your event details and we'll have a hard quote back to you the same day: trailer specs, delivery window, and all-in pricing confirmed before you sign anything.</p>

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
              defaultService="High-End Luxury Restroom or Shower Trailers"
            />
          </div>
        </div>
      </section>

    </main>
  )
}
