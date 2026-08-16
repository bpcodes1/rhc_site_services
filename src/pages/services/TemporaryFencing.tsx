import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../seo/schema'
import LeadForm from '../../components/LeadForm'
import heroImg from '../../assets/temporary-fencing/fencing_hero.webp'
import fencePanelsImg from '../../assets/temporary-fencing/fence.webp'
import chainFencingImg from '../../assets/temporary-fencing/chain_fencing.webp'

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
    q: 'How much does it cost to rent temporary fencing in Oregon?',
    a: 'For construction sites: quoted by the linear foot on a monthly billing cycle. Pricing varies by fence type, total perimeter footage, and any add-ons such as barbed wire, windscreens, or gates. For events: quoted as a flat rate for the full rental period, fully inclusive of delivery, installation, and removal. Pricing depends on total linear footage and delivery distance. Submit the form and we will have a detailed quote back to you the same day.',
  },
  {
    q: 'Does OSHA require temporary fencing around construction sites?',
    a: 'Yes, under most circumstances. OSHA standards require a secured perimeter on sites with open excavations, public exposure, and heavy equipment operations. Oregon building codes add additional requirements depending on project type and proximity to public foot traffic. A secured perimeter is both a compliance requirement and direct liability protection for your business.',
  },
  {
    q: 'How tall should a temporary construction fence be?',
    a: 'Standard construction site fencing in Oregon is 6 feet, sufficient for most OSHA and local code requirements. For urban job sites in Portland or Seattle where overnight equipment theft is a consistent concern, 8-foot post-driven security fencing with barbed wire top rail is the right call. Tell us your site location and we will confirm the right height at booking.',
  },
  {
    q: 'What is the difference between panel fencing and post-driven chain link?',
    a: 'Panel fencing sits on weighted bases with no ground penetration, moveable as your perimeter shifts, and is the standard for events and paved urban sites. Post-driven chain link involves driving posts directly into soil or asphalt, the most stable and weather-resistant option for long-term construction sites where maximum security is required.',
  },
  {
    q: 'Do I need a permit for a temporary fence in Oregon?',
    a: 'If the fence stays entirely on private property including your job site, driveway, or private lot, no permit is generally required. If your perimeter extends onto a public sidewalk, street, or Right-of-Way, which is common on tight urban builds in Portland and Salem, a PBOT or municipal Street Use permit is required before installation. Let us know your site situation when you book and we will flag it.',
  },
  {
    q: 'How do you keep temporary fence panels from falling over?',
    a: 'Standard panels sit on 80 lb low-profile concrete blocks or heavy-duty rubber bases. For high-wind environments including fall and winter deployments on the Oregon Coast or along the Columbia River Gorge, and for any installation with privacy windscreens attached, we add sandbag ballast. Specify your site conditions at booking.',
  },
  {
    q: 'Will temporary fencing damage my grass or pavement?',
    a: 'No. Freestanding panel fencing uses flat rubber or low-profile concrete bases that rest on top of the surface with no stakes, no drilling, and no ruts. Suitable for manicured venue lawns, finished concrete, and asphalt without causing permanent damage.',
  },
  {
    q: 'Can I hang banners or sponsor signs on the fencing?',
    a: 'Yes. Panel fencing is a standard surface for sponsor banners, directional signage, and event branding. If you are hanging heavy banners or solid windscreens, let RHC know at booking. We will add sandbag ballast to keep panels stable in PNW wind conditions.',
  },
  {
    q: 'How far in advance should I book fencing for a summer event?',
    a: 'At least 3 to 4 weeks for June through September events. Oregon\'s outdoor event season is compressed and fence inventory moves fast. If your event is within the next two weeks, call RHC directly rather than using the form.',
  },
  {
    q: 'Can you deliver and install fencing on weekends or for emergencies?',
    a: 'Contact RHC directly for weekend and emergency requests. Response time depends on crew availability and we will tell you honestly what we can do and when, not a window we cannot hit.',
  },
]

const schema = graph([
  business,
  service({
    name: 'Temporary Fencing Rentals',
    description:
      'Panel fencing and post-driven chain link for construction sites and events across Oregon and Washington. Published specs, OSHA-compliant panels, same-day quotes.',
    path: '/temporary-fencing',
    serviceType: 'Temporary fence rental',
  }),
  breadcrumb([{ name: 'Temporary Fencing Rentals' }]),
  faqPage(faqs),
])

export default function TemporaryFencing() {
  return (
    <main id="main">
      <Helmet>
        <title>Temporary Fencing Rental in Oregon &amp; Washington | RHC</title>
        <meta name="description" content="Panel fencing and post-driven chain link for construction sites and events across Oregon and Washington. Published specs, OSHA-compliant panels, same-day quotes." />
        <link rel="canonical" href="https://rhcsiteservice.com/temporary-fencing" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Temporary Fencing Rentals</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid hero-lean-grid--split">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Temporary Fencing · Oregon &amp; Washington</span>
              </div>
              <h1 className="h-xl">
                Temporary Fencing Rental in <span className="underline accent">Oregon &amp; Washington</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Panel fencing on weighted bases or post-driven chain link, delivered, installed, and removed by RHC. Same-day quotes. Coordinated within 48 hours of confirmed booking.
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
                <div className="meta-value">Panel (Freestanding) · Post-Driven Chain Link</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Add-Ons</div>
                <div className="meta-value">Windscreens · Barbed Wire · Gates · Sandbags</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Portland → Seattle &amp; the PNW</div>
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

      {/* FENCE TYPES */}
      <section id="fence-types">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Fence Types</div>
              <h2 className="h-lg">Panel fencing vs. post-driven chain link: Which one does your site need?</h2>
            </div>
            <p>The right fence depends on your surface, timeline, and security requirements. Both types are delivered and installed by RHC. Your crew does not touch a panel.</p>
          </div>

          <div className="units">
            <article className="unit">
              <div className="unit-photo">
                <img src={fencePanelsImg} width={1250} height={1250} alt="Freestanding panel fencing" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="unit-body">
                <div className="mono-num">01 / Panel</div>
                <h3>Freestanding Panel Fencing</h3>
                <p style={{ color: 'var(--secondary)', fontSize: '13px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Best for: Events, paved surfaces, short-term construction, shifting perimeters
                </p>
                <p>The industry standard for outdoor events and urban job sites where ground penetration is not allowed. Panels sit on heavy-duty weighted bases with no drilling into finished concrete, asphalt, or turf. Move the perimeter as the project evolves without calling for a reinstall.</p>
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--outline-variant)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Panel sizes (H × W)', value: "8' × 10', 6' × 10', 4' × 10'" },
                    { label: 'Gate sizes', value: "6' × 4', 6' × 6', 6' × 10', 4' × 4', 4' × 10'" },
                    { label: 'Standard base', value: 'Rubber block or 80 lb low-profile concrete block' },
                    { label: 'High-wind option', value: 'Additional sandbag ballast available' },
                  ].map((spec) => (
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
                <img src={chainFencingImg} width={900} height={900} alt="Post-driven chain link temporary fencing" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="unit-body">
                <div className="mono-num">02 / Post-Driven</div>
                <h3>Post-Driven Chain Link</h3>
                <p style={{ color: 'var(--secondary)', fontSize: '13px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Best for: Long-term construction, dirt or grass perimeters, maximum security
                </p>
                <p>Posts are driven directly into soil or asphalt, the most stable and weather-resistant option for permanent construction perimeters. Required when site conditions or local codes call for maximum security, or when the fence needs to withstand heavy equipment contact and PNW winter conditions.</p>
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--outline-variant)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Standard height', value: "6 feet (8-foot available for high-security sites)" },
                    { label: 'Gate widths', value: 'Configured to your equipment access requirements' },
                    { label: 'Security upgrades', value: 'Barbed wire top rail and tension wire available' },
                  ].map((spec) => (
                    <div key={spec.label} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>{spec.label}</span>
                      <span style={{ fontSize: '13px', color: 'var(--on-surface)', lineHeight: '1.5' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <p style={{ marginTop: '24px', fontSize: '13px', color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            Typical specifications shown above. Exact dimensions and configurations confirmed at booking.
          </p>
        </div>
      </section>

      {/* ADD-ONS */}
      <section id="add-ons" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Add-Ons</div>
              <h2 className="h-lg">Add-ons for security, privacy, and wind stability.</h2>
            </div>
            <p>Specify your add-ons at booking so RHC can configure the right setup for your site conditions and security requirements.</p>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Privacy</div>
              <h3>Privacy Windscreens</h3>
              <p>Mesh fabric that attaches to panel fencing to block sightlines on active construction sites and create defined perimeter walls for event sections. If you are adding windscreens, tell RHC at booking. Additional sandbag ballast is required in PNW wind conditions to keep panels stable.</p>
            </div>
            <div className="use-case">
              <div className="use-num">02 / Security</div>
              <h3>Barbed Wire Top Rail</h3>
              <p>Security fencing with barbed wire top rail is standard for urban Portland and Seattle job sites where overnight equipment theft is a real operational cost. Added to post-driven chain link for maximum perimeter security.</p>
            </div>
            <div className="use-case">
              <div className="use-num">03 / Stability</div>
              <h3>Sandbag Ballast</h3>
              <p>Extra ballast for high-wind environments or when heavy windscreens are attached. Standard recommendation for October through March rentals and any coastal or Columbia River Gorge sites.</p>
            </div>
            <div className="use-case">
              <div className="use-num">04 / Access</div>
              <h3>Gates</h3>
              <p>Vehicle access and pedestrian gates in multiple widths. Specify your equipment clearance requirements at booking. Gate width determines what can enter and exit the site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">03 / Use Cases</div>
              <h2 className="h-lg">Built for construction sites, outdoor events, and residential renovations.</h2>
            </div>
            <p>From a single-lot residential remodel to a multi-acre festival perimeter, the same installation standard applies across every job.</p>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Construction</div>
              <h3>Construction &amp; Job Sites</h3>
              <p>OSHA requires a secured perimeter on sites with open excavations, public exposure, and heavy equipment operations. Post-driven chain link for long-term builds. Panel fencing for urban sites where ground penetration is not permitted. Delivered and installed by RHC. Your site is compliant, your perimeter is secure, and your crew never touched a panel.</p>
            </div>
            <div className="use-case">
              <div className="use-num">02 / Events</div>
              <h3>Outdoor Events &amp; Festivals</h3>
              <p>Panel fencing defines beer gardens, VIP sections, stage perimeters, and parking control at outdoor concerts, summer festivals, and estate weddings across Oregon. Rubber and concrete bases mean no ruts, no holes, and no damage claims from the venue after load-out. The fence was up before your first guest arrived and gone before the venue did its walkthrough. Book at least 3 to 4 weeks out for June through September events. Oregon's outdoor event season moves fast and fence inventory goes with it.</p>
            </div>
            <div className="use-case">
              <div className="use-num">03 / Residential</div>
              <h3>Residential Remodels &amp; Renovations</h3>
              <p>Keeping the public and your crew separated during a residential renovation is a liability requirement and a practical call. Panel fencing on a driveway or private lot does not require permits if it stays on private property.</p>
            </div>
            <div className="use-case">
              <div className="use-num">04 / Emergency</div>
              <h3>Emergency Site Security</h3>
              <p>Storm damage, an unexpected security breach, or a last-minute request the day before an event. The longer a site stays unsecured, the greater the liability exposure. Call RHC directly for emergency requests.</p>
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
              <h2 className="h-lg">One accountable team. One invoice. No call center queue.</h2>
            </div>
            <p>The dominant players in fencing rental are national corporations with 275 or more locations. When a panel blows over, a gate arrives at the wrong width, or a delivery is missed, you call a 1-800 number and wait to be transferred to the right regional coordinator.</p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>RHC Answers Directly</h3>
              <p>One number reaches the team handling your job. Not a call center. Not a coordinator two time zones away. If there is a problem, you talk to the person who can fix it.</p>
            </div>
            <div className="why-item">
              <div className="why-num">02</div>
              <h3>One Number Covers Your Whole Site</h3>
              <p>Temporary fencing, portable toilets, storage containers, and shower trailers. One call to RHC coordinates the full drop-off sequence. You do not manage separate vendors for each category.</p>
            </div>
            <div className="why-item">
              <div className="why-num">03</div>
              <h3>The Price You Approve is the Price on Your Invoice</h3>
              <p>No baseline estimate language in your contract. No fuel surcharges or delivery fees added after the fence is already on your site. The number you approve is the number you pay when the job is done.</p>
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
              <h2 className="h-lg">Where we deliver temporary fencing.</h2>
            </div>
            <p>We install and remove temporary fencing across Oregon and Washington. Same-day quotes, installations typically coordinated within 48 hours of confirmed booking.</p>
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
              <h2 className="h-lg">Questions we get about temporary fencing rentals.</h2>
            </div>
            <p>Everything GCs and event coordinators ask before booking. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
                Ready to secure<br />your site or event?
              </h2>
              <p>Submit your project details and we will have a quote back to you the same day, fence type, linear footage estimate, and all-in pricing before you commit to anything.</p>

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
              defaultService="Temporary Fencing (Panel Stands or Driven Posts)"
            />
          </div>
        </div>
      </section>

    </main>
  )
}
