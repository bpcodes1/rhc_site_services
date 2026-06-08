import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LeadForm from '../../components/LeadForm'
import heroImg from '../../assets/restroom-trailers/luxury_restroom_hero.webp'
import restroomTrailerADAImg from '../../assets/restroom-trailers/restroom-trailer2.webp'
import restroom2StallImg from '../../assets/restroom-trailers/2stall_portable.webp'
import restroom4StallImg from '../../assets/restroom-trailers/4stall_portable.webp'

const cities = [
  { name: 'Salem', state: 'OR', hq: false },
  { name: 'Portland', state: 'OR', hq: true },
  { name: 'Eugene', state: 'OR', hq: false },
  { name: 'Bend', state: 'OR', hq: false },
  { name: 'Gresham', state: 'OR', hq: false },
  { name: 'Tacoma', state: 'WA', hq: false },
  { name: 'Vancouver', state: 'WA', hq: false },
  { name: 'Seattle', state: 'WA', hq: false },
]

const trailers = [
  {
    num: '01 / 2-Stall',
    name: '2-Stall Luxury Restroom Trailer',
    bestFor: 'Up to 150 guests · Small winery weddings, VIP sections, corporate retreats',
    description: 'Your bread-and-butter unit for intimate outdoor events. Climate-controlled, porcelain flushing toilets, running hot and cold water, vanity mirrors, and interior lighting.',
    specs: [
      { label: 'Exterior (L × W × H)', value: "12' long (15' w/ tongue) × 6' wide (9' w/ stairs) × 10'6\" high" },
      { label: 'Freshwater tank', value: '105–125 gal (or connect to a garden hose for unlimited supply)' },
      { label: 'Wastewater tank', value: '250–300 gallons' },
      { label: 'Use capacity', value: '800–900 flushes before pump-out' },
      { label: 'Power required', value: 'One dedicated 110V / 20-amp circuit' },
    ],
    dark: false,
    photo: 'Photo · 2-Stall Luxury Restroom Trailer',
    image: restroom2StallImg,
  },
  {
    num: '02 / 4-Stall',
    name: '4-Stall Luxury Restroom Trailer',
    bestFor: 'Up to 300 guests · Mid-size festivals, estate weddings, commercial remodels',
    description: 'The workhorse for large outdoor events. Same luxury amenities as the 2-stall with expanded capacity for higher guest counts and longer event durations.',
    specs: [
      { label: 'Exterior (L × W × H)', value: "14'6\" long (19' w/ tongue) × 6'5\" wide (9'5\" w/ stairs) × 11'3\" high" },
      { label: 'Freshwater tank', value: '200 gallons' },
      { label: 'Wastewater tank', value: '400–450 gallons' },
      { label: 'Use capacity', value: '1,200–1,400 flushes before pump-out' },
      { label: 'Power required', value: '2–3 dedicated 110V / 20-amp circuits' },
    ],
    dark: true,
    photo: 'Photo · 4-Stall Luxury Restroom Trailer',
    image: restroom4StallImg,
  },
  {
    num: '03 / ADA + 2',
    name: 'ADA + 2-Stall Restroom Trailer',
    bestFor: 'Any event requiring ADA accessibility',
    description: 'The ramp deployment width is the spec event planners get wrong more than any other. Read the deployed dimensions below before confirming placement with your venue coordinator.',
    specs: [
      { label: 'Road width', value: "8'5\" (expands to 19' wide with ADA ramp fully deployed)" },
      { label: 'Exterior (L × H)', value: "19' long (24' w/ tongue) × 10'10\" high" },
      { label: 'Freshwater tank', value: '105–200 gallons' },
      { label: 'Wastewater tank', value: '300–330 gallons' },
      { label: 'Use capacity', value: '750–900 flushes before pump-out' },
      { label: 'Power required', value: 'Two dedicated 110V / 20-amp circuits minimum' },
      { label: 'ADA features', value: "36\" entry door, 60\" interior turning radius, compliant grab bars, lowering suspension or compliant ramp" },
    ],
    dark: false,
    photo: 'Photo · ADA + 2-Stall Restroom Trailer',
    image: restroomTrailerADAImg,
  },
]

const faqs = [
  {
    q: "What's the difference between a porta potty and a restroom trailer?",
    a: "A standard portable toilet is a single plastic unit with an open waste tank — basic sanitation capacity for worksites and casual outdoor use. A restroom trailer — also called a bathroom trailer — is a climate-controlled, multi-stall unit with porcelain flushing toilets, running hot and cold water, vanity mirrors, and a completely sealed waste system. Guests using a luxury restroom trailer routinely describe it as nicer than most indoor bathrooms they've been in.",
  },
  {
    q: 'How does a restroom trailer actually work?',
    a: "The same way an RV or airplane lavatory does. Freshwater from an onboard holding tank — or a connected garden hose — feeds the faucets and flushing mechanism. Waste flushes into a completely sealed blackwater tank beneath the floor. No exposed waste, no odor. When the event ends, our team pumps and sanitizes the unit during pickup.",
  },
  {
    q: 'How much does it cost to rent a luxury restroom trailer in Oregon?',
    a: "Weekend event rentals for a 2-stall trailer typically start around $900 to $1,200. A 4-stall unit or ADA trailer starts higher depending on stall count, delivery distance, and whether a generator is needed. Your quote includes delivery, leveling, setup, and post-event pump-out and removal — no hidden fees on the back end.",
  },
  {
    q: 'How many stalls do I need for my event?',
    a: "One stall per 75 guests for a standard 4-to-6 hour event. A 2-stall handles up to 150 guests. A 4-stall handles up to 300. If your event runs longer than 6 hours or serves heavy alcohol, move up one size or plan for mid-event servicing. Tell us your headcount and event details in the form and we'll recommend the right configuration.",
  },
  {
    q: 'Do restroom trailers need a water hookup?',
    a: "A garden hose connection is ideal but not required. All trailers come with onboard freshwater holding tanks — no hookup needed for remote venues. For a standard 4-to-6 hour event, the onboard tank is sufficient without refilling.",
  },
  {
    q: 'Do restroom trailers need electricity?',
    a: "Yes. A 2-stall requires one dedicated 110V / 20-amp circuit. A 4-stall requires two to three depending on whether both AC units are running simultaneously. If your venue has no power, we provide a quiet generator. Note it in the form and we'll include it in your quote.",
  },
  {
    q: 'Do restroom trailers have air conditioning and heat?',
    a: "Yes — all units are fully climate-controlled. Oregon summers can run hot and fall events along the coast run cold and damp. Your guests stay comfortable either way.",
  },
  {
    q: 'Do restroom trailers smell?',
    a: "No. Unlike standard plastic units where waste sits exposed, trailers use sealed flushing mechanisms identical to home toilets, combined with mechanical exhaust ventilation and climate control. When maintained on schedule they remain completely odor-free throughout your event.",
  },
  {
    q: 'Can a restroom trailer be placed on grass or dirt?',
    a: "Yes. The trailer needs relatively level ground. Our drivers will assess your terrain and confirm safe placement before delivery — mention soft or uneven ground when you book so we can plan the approach without causing turf damage.",
  },
  {
    q: 'Can a restroom trailer fit inside a tent?',
    a: "Generally yes, if the tent is a high-clearance marquee style without a floor and the delivery truck has enough clearance to back in before the walls are secured. The AC unit also needs airflow — a fully enclosed tent without ventilation won't work. Describe your tent setup in the notes field and we'll confirm before booking.",
  },
  {
    q: 'Do I have to clean the trailer before pickup?',
    a: "No. Your rental includes post-event deep cleaning, chemical sanitization, and waste pump-out. You don't touch it. We handle everything during the scheduled pickup window.",
  },
  {
    q: 'How far in advance should I book?',
    a: "At least 72 hours to guarantee availability. June through October fills fast — if your event is within the next two weeks, call RHC directly rather than using the form.",
  },
]

export default function RestroomTrailers() {
  return (
    <main id="main">
      <Helmet>
        <title>Restroom Trailer Rental Oregon &amp; Washington | RHC Site Services</title>
        <meta name="description" content="Luxury restroom trailers with published specs, transparent starting pricing, and climate control — delivered on time for weddings, festivals, and outdoor events across Oregon and Washington." />
        <link rel="canonical" href="https://rhcsiteservices.com/restroom-trailers" />
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
                Climate-controlled, porcelain-flushing trailers delivered on time and positioned exactly where your venue marks them. Specs published. Weekend rentals start at $900.
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
                <div className="meta-value">2-Stall · 4-Stall · ADA + 2</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Portland → Seattle &amp; the PNW</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Starting Price</div>
                <div className="meta-value">From $900 (weekend events)</div>
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
              <h2 className="h-lg">2-Stall, 4-Stall, and ADA — What's the right trailer for your event?</h2>
            </div>
            <p>Three bathroom trailer configurations cover almost every event scenario in Oregon and Washington. The right unit depends on your guest count, event duration, and whether ADA access is required. Every trailer is climate-controlled with porcelain flushing toilets, running hot and cold water, vanity mirrors, and interior lighting.</p>
          </div>

          <div className="units">
            {trailers.map((trailer) => (
              <article key={trailer.num} className="unit">
                <div className="unit-photo">
                  {trailer.image ? (
                    <img src={trailer.image} alt={trailer.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div className={`placeholder${trailer.dark ? ' dark' : ''}`}>
                      <span className="ph-tag">{trailer.photo}</span>
                    </div>
                  )}
                </div>
                <div className="unit-body">
                  <div className="mono-num">{trailer.num}</div>
                  <h3>{trailer.name}</h3>
                  <p style={{ color: 'var(--secondary)', fontSize: '13px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {trailer.bestFor}
                  </p>
                  <p>{trailer.description}</p>
                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--outline-variant)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {trailer.specs.map((spec) => (
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
                </div>
              </article>
            ))}
          </div>

          <p style={{ marginTop: '24px', fontSize: '13px', color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            Exact specs are confirmed with RHC at booking. Dimensions vary slightly by unit. We confirm the exact footprint for your venue before delivery.
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
            <p>The rule of thumb: one stall per 75 guests for a standard 4-to-6 hour event. Longer events and open bars change that math. Use this as a starting point — then tell us your specifics in the form and we'll confirm.</p>
          </div>

          <table className="sizing-table">
            <thead>
              <tr>
                <th>Guests</th>
                <th>&lt; 4 hrs</th>
                <th>4–6 hrs</th>
                <th>6+ hrs / Bar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to 100</td>
                <td>2-Stall</td>
                <td>2-Stall</td>
                <td>2-Stall +</td>
              </tr>
              <tr>
                <td>100–150</td>
                <td>2-Stall</td>
                <td>2-Stall</td>
                <td>4-Stall</td>
              </tr>
              <tr>
                <td>150–250</td>
                <td>4-Stall</td>
                <td>4-Stall</td>
                <td>4-Stall +</td>
              </tr>
              <tr>
                <td>250–350</td>
                <td>4-Stall</td>
                <td>4-Stall + ADA</td>
                <td>4-Stall + ADA</td>
              </tr>
              <tr>
                <td>350+</td>
                <td colSpan={3} style={{ textAlign: 'center', fontStyle: 'italic' }}>Contact RHC for a custom spec</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '24px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Not sure? Tell us your guest count, bar situation, and event duration in the form — we'll recommend the right unit before you commit to anything.
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
            <p>From a 2-stall trailer at a Willamette Valley winery to a 4-stall unit at a 300-person festival — the same operational standard applies across every job.</p>
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
              <p>A 4-stall unit for 250 people, staged for traffic flow, serviced mid-event if your run time exceeds tank capacity. And if you need temporary fencing and standard portable toilets for the same event, one call to RHC covers all of it — you don't manage a second or third vendor.</p>
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
              <h2 className="h-lg">The three failures we built RHC to fix — for events.</h2>
            </div>
            <p>Every 1-star review of a restroom trailer company reads the same way. The equipment looked nothing like the website. The price changed after the agreement. The driver left the trailer where the truck stopped, not where the coordinator asked.</p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>We Publish Our Specs</h3>
              <p>Exact exterior dimensions, tank capacities, and power requirements — all listed on this page before you fill out a single form. The most common 1-star review in this industry reads some version of "what showed up looked nothing like what was advertised." We fix that before you book.</p>
            </div>
            <div className="why-item">
              <div className="why-num">02</div>
              <h3>The Price in Your Quote is the Price on Your Invoice</h3>
              <p>No fuel surcharges added the week before your event. No "we lost our delivery contractor so the price went up" calls. The number you approve includes delivery, leveling, setup, and post-event pump-out and removal. That's the number you pay.</p>
            </div>
            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Positioned Where You Mark It — Gone Before Guests Arrive</h3>
              <p>Our drivers will assess your terrain and confirm placement with your coordinator before delivery. Setup happens before your event starts. Removal happens after — no vendor is ever visible during your event.</p>
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
            <p>Based in Portland, we deliver across Oregon and Washington. Standard turnaround is 48 hours — next-day available in our core service areas.</p>
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
            <p><strong>Don't see your city listed?</strong> Fill out the form — we're actively expanding and may still be able to serve your location.</p>
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
              <p>Submit your event details and we'll have a hard quote back to you the same day — trailer specs, delivery window, and all-in pricing confirmed before you sign anything.</p>

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
