import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../seo/schema'
import LeadForm from '../../components/LeadForm'
import showerTrailerDeployedImg from '../../assets/shower-trailers/shower-trailer3.webp'
import showerTrailerLargeImg from '../../assets/shower-trailers/shower-trailer1.webp'
import shower2Img from '../../assets/shower-trailers/shower2.webp'
import shower4Img from '../../assets/shower-trailers/shower4.webp'
import shower6Img from '../../assets/shower-trailers/shower6.webp'

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

const units = [
  {
    num: '01',
    title: '2-Stall Shower Trailer',
    image: shower2Img,
    w: 1200,
    h: 1200,
    tag: 'Best for small VIP event camping, emergency rapid response, and small remodel sites.',
    specs: [
      { label: 'Fresh Water', value: '125-150 gal (unlimited with garden hose hookup)' },
      { label: 'Grey Water', value: '250-300 gal (roughly 20-25 showers before pumping)' },
      { label: 'Propane', value: 'Dual 30-40 lb tanks' },
      { label: 'Box Length', value: "14' (requires 18'-20' total clearance)" },
      { label: 'Width', value: "8'6\" road width (10'-11' with stairs deployed)" },
      { label: 'Height', value: "10'6\"-11' including rooftop AC" },
      { label: 'Shore Power', value: '1-2 dedicated 110V/20-amp circuits' },
    ],
  },
  {
    num: '02',
    title: '3-Stall Shower Trailer',
    image: showerTrailerDeployedImg,
    w: 1200,
    h: 1200,
    tag: 'The standard choice for mid-sized outdoor weddings, agriculture camps, and smaller disaster deployments.',
    specs: [
      { label: 'Fresh Water', value: '125-150 gal (unlimited with garden hose hookup)' },
      { label: 'Grey Water', value: '300-380 gal (roughly 30-35 showers before pumping)' },
      { label: 'Propane', value: 'Dual 30-40 lb tanks' },
      { label: 'Box Length', value: "16' (requires 20' total clearance)" },
      { label: 'Width', value: "8'6\" road width (11'-12' with stairs deployed)" },
      { label: 'Height', value: "10'6\"-11' including rooftop AC" },
      { label: 'Shore Power', value: '2 dedicated 110V/20-amp circuits' },
    ],
  },
  {
    num: '03',
    title: '4-Stall Shower Trailer',
    image: shower4Img,
    w: 1200,
    h: 655,
    tag: 'The most versatile configuration for mid-size construction crews, weekend festivals, and multi-day events.',
    specs: [
      { label: 'Fresh Water', value: '150-200 gal (unlimited with garden hose hookup)' },
      { label: 'Grey Water', value: '480-580 gal (roughly 35-45 showers before pumping)' },
      { label: 'Propane', value: 'Dual 40 lb tanks' },
      { label: 'Box Length', value: "15'-18' (requires 20'-22' total clearance)" },
      { label: 'Width', value: "8'6\" road width (10'-12' with stairs deployed)" },
      { label: 'Height', value: "11'6\"-12'6\" including rooftop AC" },
      { label: 'Shore Power', value: '3-4 dedicated 110V/20-amp circuits or 30/50-amp RV hookup' },
      { label: 'Off-Grid Generator', value: 'Minimum 7,500W-10,000W continuous' },
    ],
  },
  {
    num: '04',
    title: '6-Stall Shower Trailer',
    image: shower6Img,
    w: 1200,
    h: 895,
    tag: 'The heavy-duty workhorse for commercial construction, large multi-day festivals, and high-volume workforce housing.',
    specs: [
      { label: 'Fresh Water', value: '200-300 gal (unlimited with garden hose hookup)' },
      { label: 'Grey Water', value: '600-900 gal (roughly 60-80 showers before pumping)' },
      { label: 'Propane', value: 'Dual or quad 40 lb tanks' },
      { label: 'Box Length', value: "24' (requires 28' total clearance)" },
      { label: 'Width', value: "8'6\" road width (12' with stairs deployed)" },
      { label: 'Height', value: "11'6\" including rooftop AC" },
      { label: 'Shore Power', value: '2-3 dedicated 110V/20-amp circuits or single 50-amp RV hookup' },
    ],
  },
  {
    num: '05',
    title: '8-Stall Shower Trailer',
    image: showerTrailerLargeImg,
    w: 1250,
    h: 1250,
    tag: 'Built for FEMA and wildfire camps, military training deployments, and festivals with 10,000 or more guests.',
    specs: [
      { label: 'Fresh Water', value: '200-300 gal (unlimited with garden hose hookup)' },
      { label: 'Grey Water', value: '950-1,200 gal (roughly 90-110 showers before pumping)' },
      { label: 'Propane', value: 'Quad 40 lb tanks' },
      { label: 'Box Length', value: "28' (requires 32'-34' total clearance)" },
      { label: 'Width', value: "8'6\" road width (12' with stairs deployed)" },
      { label: 'Height', value: "11'6\"-12' including dual rooftop AC units" },
      { label: 'Shore Power', value: '3-4 dedicated 110V/20-amp circuits' },
    ],
  },
]

const sizingGuide = [
  { headcount: 'Up to 20', config: '2-Stall', notes: 'Staggered windows' },
  { headcount: '20–40', config: '3-Stall', notes: 'Weddings & small camps' },
  { headcount: '30–60', config: '4-Stall', notes: 'Events & job sites' },
  { headcount: '50–100', config: '6-Stall', notes: 'Large events & construction' },
  { headcount: '100+', config: '8-Stall', notes: 'High-volume & emergency' },
]

const faqs = [
  {
    q: 'Does the shower trailer need to connect to a hot water hookup?',
    a: 'No. Every RHC shower trailer runs an on-demand propane tankless water heater onboard. Guests get hot water from the first stall to the last without the site needing any hot water supply. The only water connection needed is a standard garden hose for cold water in, or the unit runs from its onboard freshwater tank for fully off-grid deployments.',
  },
  {
    q: 'Where does the water go after a shower?',
    a: 'Into a sealed onboard greywater holding tank. Nothing drains onto the ground. Discharging greywater onto a surface violates environmental regulations and damages venue turf or job site conditions. RHC schedules weekly pump-out service as standard. Additional pump-outs are available for high-volume deployments like multi-day festivals or large construction crews.',
  },
  {
    q: 'How much power does the shower trailer require?',
    a: 'Power requirements vary by configuration. Smaller units (2-stall, 3-stall) typically require one to two dedicated 110V/20-amp circuits. The 4-stall requires three to four circuits or a 30/50-amp RV-style hookup. Larger units (6-stall, 8-stall) require two to four circuits or a 50-amp direct hookup depending on the trailer harness. Off-grid generator requirements depend on unit size and are confirmed at booking. For the 4-stall specifically, a minimum 7,500W-10,000W continuous generator handles the surge draw of the AC and water pump starting simultaneously.',
  },
  {
    q: 'How many showers can the trailer handle before pumping?',
    a: 'It depends on the configuration. Roughly 20-25 showers on the 2-stall, 30-35 on the 3-stall, 35-45 on the 4-stall, 60-80 on the 6-stall, and 90-110 on the 8-stall. Connecting to a standard garden hose provides unlimited freshwater, so only the greywater tank limits shower count between pump-outs. RHC schedules weekly pump-outs as standard, with additional service available for high-volume deployments.',
  },
  {
    q: 'What site clearance is needed for shower trailer delivery?',
    a: "Clearance requirements vary by unit. The 2-stall needs 18-20 feet of length and 10-11 feet of width with stairs deployed. The 3-stall needs 20 feet of length and 11-12 feet of width. The 4-stall needs 20-22 feet of length and 10-12 feet of width. The 6-stall needs 28 feet of length and 12 feet of width. The 8-stall needs 32-34 feet of length and 12 feet of width. Confirm site access conditions on the quote form.",
  },
  {
    q: 'Does the shower trailer need to connect to a sewer line?',
    a: 'No. The sealed greywater holding tank eliminates the need for a sewer connection. Weekly pump-out service keeps the tank within capacity for most deployments. Additional pump-out frequency is available for longer projects or higher-volume use.',
  },
  {
    q: 'Will the shower trailer freeze in cold weather?',
    a: 'The onboard propane system and climate-controlled interior protect the unit in standard Pacific Northwest winter conditions. For extreme cold deployments, such as remote high-elevation job sites or extended winter emergency camps, note your site conditions on the quote form and RHC will confirm whether additional precautions are needed.',
  },
  {
    q: 'How much does a shower trailer rental cost?',
    a: 'The starting range is $2,000-$6,000, depending on stall configuration, rental duration, pump-out frequency, and site location. There is no fixed price without knowing your deployment specifics, which is exactly why the form asks for those details. Fill it out and we come back with a real number.',
  },
  {
    q: 'Is there a minimum rental period?',
    a: 'No. You book for the duration you need.',
  },
  {
    q: 'How far in advance do I need to book a shower trailer?',
    a: 'RHC can typically have a unit delivered within 24-48 hours of payment confirmation, depending on availability in your service area. For events with a fixed date, earlier is always better. Availability is limited during peak season.',
  },
  {
    q: 'Do the shower stalls have private changing areas?',
    a: 'Yes. Each stall is fully private with a locking door. Guests enter, change, shower, and exit without sharing the space with anyone.',
  },
  {
    q: 'Can you deliver to remote or off-grid sites?',
    a: "Yes. Every unit runs from its onboard freshwater tank and on-demand propane water heater. For sites without shore power, you will need to provide a generator sized to your unit's requirements, confirmed at booking. RHC can coordinate bulk freshwater delivery to keep the tank topped up throughout your rental.",
  },
]

// Kept for the testimonial slots below; uncomment when real reviews are added.
/* const testimonialStyle = {
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
} */

const schema = graph([
  business,
  service({
    name: 'Shower Trailer Rentals',
    description:
      '2 to 8-stall shower trailer rentals across Oregon and Washington. Hot water standard on every unit. No minimums. Same-day quote.',
    path: '/shower-trailers',
    serviceType: 'Shower trailer rental',
  }),
  breadcrumb([{ name: 'Shower Trailer Rentals' }]),
  faqPage(faqs),
])

export default function ShowerTrailers() {
  return (
    <main id="main">
      <Helmet>
        <title>Shower Trailer Rentals in Oregon &amp; Washington | RHC</title>
        <meta name="description" content="2 to 8-stall shower trailer rentals across Oregon and Washington. Hot water standard on every unit. No minimums. Same-day quote." />
        <link rel="canonical" href="https://rhcsiteservice.com/shower-trailers" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Shower Trailer Rentals</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean">
        <div className="container">
          <div className="hero-lean-grid hero-lean-grid--split">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Shower Trailer Rentals · Oregon &amp; Washington</span>
              </div>
              <h1 className="h-xl">
                Shower Trailer Rentals in <span className="underline accent">Oregon &amp; Washington</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Your shower problem is solved before the work starts. Hot water, AC, and heat standard on every unit. Five configurations, 2 to 8 stalls. No minimum rental.
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
                <div className="meta-label">Configurations</div>
                <div className="meta-value">2, 3, 4, 6, and 8-stall</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Hot Water</div>
                <div className="meta-value">Standard · On-demand propane tankless</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Climate Control</div>
                <div className="meta-value">AC and heat standard</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Water Source</div>
                <div className="meta-value">Garden hose hookup or onboard tank</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Pump-Out</div>
                <div className="meta-value">Weekly service standard</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Minimum Rental</div>
                <div className="meta-value">None</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Booking Lead Time</div>
                <div className="meta-value">24-48 hrs from payment</div>
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

      {/* UNIT CONFIGURATIONS */}
      <section id="configurations">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Unit Configurations</div>
              <h2 className="h-lg">2 to 8 Stalls, Specs Published. Which Configuration Fits Your Deployment?</h2>
            </div>
            <p>No portable sanitation company in Oregon or Washington publishes the actual specs for their shower trailer configurations. RHC does, because your site superintendent, event coordinator, or logistics manager needs real numbers to plan, not a phone call just to find out if the unit fits the access road.</p>
          </div>

          <p style={{ marginBottom: '32px', fontSize: '13px', color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            All specs below are typical ranges. Units are sourced regionally and exact specifications are confirmed at booking. Hot water and climate control are standard on every configuration.
          </p>

          <div className="units">
            {units.map((unit, i) => (
              <article key={unit.num} className="unit">
                <div className="unit-photo">
                  {unit.image ? (
                    <img src={unit.image} width={unit.w} height={unit.h} alt={unit.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div className={`placeholder${i % 2 !== 0 ? ' dark' : ''}`}>
                      <span className="ph-tag">Photo · {unit.title}</span>
                    </div>
                  )}
                </div>
                <div className="unit-body">
                  <div className="mono-num">{unit.num} / {unit.title.replace(' Shower Trailer', '')}</div>
                  <h3>{unit.title}</h3>
                  <p style={{ color: 'var(--secondary)', fontSize: '13px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {unit.tag}
                  </p>
                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--outline-variant)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {unit.specs.map((spec) => (
                      <div key={spec.label} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>{spec.label}</span>
                        <span style={{ fontSize: '13px', color: 'var(--on-surface)', lineHeight: '1.5' }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIZING GUIDE */}
      <section id="sizing-guide" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Sizing Guide</div>
              <h2 className="h-lg">Not Sure Which Shower Trailer Size You Need? Start Here.</h2>
            </div>
            <p>The two variables that determine the right stall count are headcount and deployment length. Use the table below as a starting point, then note your specifics on the quote form and RHC confirms the right configuration for your exact situation.</p>
          </div>

          <table className="sizing-table">
            <thead>
              <tr>
                {['Headcount', 'Config', 'Notes'].map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizingGuide.map((row, i) => (
                <tr key={i}>
                  <td>{row.headcount}</td>
                  <td>{row.config}</td>
                  <td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--on-surface-variant)' }}>
            For multi-day events or job sites without a water hookup, bulk freshwater delivery is available. Note your site conditions on the quote form.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">03 / Use Cases</div>
              <h2 className="h-lg">What Job Are You Hiring This For?</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Construction</div>
              <h3>Your Crew Stays On-Site. Productivity Stays Up.</h3>
              <p>When your crew drives 20 minutes each way to shower, you lose that time every single day of the build. A shower trailer on-site means workers wake up, clean up, and show up ready. No commute. No reason to leave and not come back.</p>
              <p style={{ marginTop: '12px' }}>RHC delivers configured for job site logistics, placed exactly where your site plan requires, with weekly pump-out service so the tank never becomes your problem mid-project. Shore power hookup or off-grid, we work with what your site has.</p>
              <p style={{ marginTop: '12px' }}>Hot water from day one. Climate controlled. No minimum rental period, so you book for the duration of your project, not a package someone else designed.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your crew shows up Monday morning ready to work because they stayed on-site and had a real shower over the weekend.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 4-stall for crews of 30-60. 6-stall for larger commercial sites.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Outdoor Events</div>
              <h3>Your Guests Talk About the Bathrooms. In a Good Way.</h3>
              <p>Event planners know the rule: guests forget the food, but they remember the bathrooms. A port-a-john situation at a wedding, festival, or outdoor corporate event does not just disappoint. It reflects on the planner who booked it.</p>
              <p style={{ marginTop: '12px' }}>RHC delivers a shower trailer your guests will not believe is mobile. Each stall is private with a locking door, hot water from the first guest to the last, AC and heat standard. The on-demand propane tankless heater means no hunting for a hot water hookup at your venue.</p>
              <p style={{ marginTop: '12px' }}>For multi-day festivals, RHC schedules pump-out routing so the greywater tank never fills before the event ends. Bulk freshwater delivery available for venues without a water hookup. You focus on the event. We handle the logistics before you have to ask.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your guests still talk about the bathrooms after the event is over, because they could not believe it was mobile.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 2-stall or 3-stall for intimate weddings and small retreats. 4-stall to 6-stall for festivals and larger outdoor events.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Emergency Response</div>
              <h3>Basic Dignity Restored. Fast.</h3>
              <p>When people are displaced, whether from wildfire evacuation, flood response, or emergency camp setup, a functioning shower is not a comfort. It is a human necessity. The organizations coordinating relief efforts need equipment that shows up on time, works in field conditions, and does not require a two-day infrastructure setup.</p>
              <p style={{ marginTop: '12px' }}>RHC can have a unit in position within 24-48 hours of booking confirmation. Onboard freshwater tank means no water hookup required at deployment. Bulk freshwater delivery available for remote or off-grid sites. Weekly pump-out standard, with increased frequency available for high-volume deployments.</p>
              <p style={{ marginTop: '12px' }}>One call. One team. Accountable for the full deployment.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Displaced people have a private, warm, functioning shower within 24 hours.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 2-stall or 3-stall for rapid single-site response. 6-stall or 8-stall for FEMA camps and large-scale wildfire deployments.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">04 / Campgrounds &amp; Retreats</div>
              <h3>The Amenity That Brings Guests Back.</h3>
              <p>A campground or retreat without proper shower facilities is not competing against those that have them. It is losing to them. Guests choose based on what the experience promises. Shower facilities are not a luxury for repeat guests. They are the baseline expectation.</p>
              <p style={{ marginTop: '12px' }}>RHC provides seasonal and extended-term shower trailer placements for camps, retreat centers, and outdoor hospitality properties without permanent plumbing infrastructure. No minimum rental period. Weekly service included. The unit arrives clean and stays that way throughout your deployment.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Guests return next season because the facilities were better than they expected.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 3-stall for small retreats and private camps. 4-stall to 6-stall for larger properties with higher seasonal occupancy.
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
              <div className="eyebrow">04 / Why RHC</div>
              <h2 className="h-lg">Why RHC for Shower Trailer Rentals</h2>
            </div>
            <p>Run by Rafa, who has worked in portable sanitation across Oregon and Washington since 2016. The dominant players are national corporations with 275 or more locations. When there is a problem, you call a 1-800 number and wait to be transferred. RHC operates differently.</p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>The Specs Are Published Before You Commit</h3>
              <p>Every regional competitor in Oregon and Washington will tell you their trailers are clean and their delivery is on time. None of them will tell you the greywater tank typically holds 480-580 gallons on a 4-stall unit, or that you need 20-22 feet of total site clearance, or that a 4-stall unit running off-grid requires a minimum 7,500-watt continuous generator. RHC publishes the numbers because surprises on delivery day are not acceptable when your project or event cannot be rescheduled. What you see on this page is what gets confirmed at booking and delivered to your site.</p>
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>One Team. Every Detail. Start to Finish.</h3>
              <p>National corporations with 275 or more locations process your rental through a chain of handoffs. A sales rep, a coordinator, a regional subcontractor, and a delivery driver who has never spoken to anyone on your team. When something is wrong, there is no one accountable. There is a ticket number. RHC coordinates every detail from quote to pickup. If something is off, you reach the same people who booked you.</p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: closing the "why-item 02" paragraph about one accountable team.
                  Intended review theme: long-running service on a remote job site, consistent quality.
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Clean Is Confirmed, Not Assumed</h3>
              <p>The most common complaint in portable sanitation reviews across the Pacific Northwest: the unit arrived in a condition that did not match what was described online. RHC confirms unit condition before delivery so you are not the one discovering the problem on your first deployment day. Weekly pump-out service is standard, not an add-on you negotiate after something goes wrong. You should not have to wonder whether your unit was cleaned. You should know.</p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: closing the "why-item 03" paragraph about confirmed cleanliness.
                  Intended review theme: helpful driver, responsive phone contact, same-day turnaround.
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="service-area">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">05 / Service Areas</div>
              <h2 className="h-lg">Shower Trailer Rentals Across Oregon and Washington</h2>
            </div>
            <p>RHC delivers and services shower trailers across Oregon and Washington. Same-day quotes, units typically coordinated within 24-48 hours of confirmed booking.</p>
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
              <h2 className="h-lg">Questions About Shower Trailer Rentals</h2>
            </div>
            <p>Everything site superintendents, event coordinators, and emergency managers ask before booking. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
                Ready to Book or<br />Just Need a Number?
              </h2>
              <p>Fill out the form and we come back with a real quote for your deployment. No commitment. No phone tag.</p>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: in the final CTA, between the "no phone tag" line and the phone link.
                  Intended review theme: customer service worked around the client's schedule, same-day response.
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
              defaultService="Shower Trailers"
            />
          </div>
        </div>
      </section>

    </main>
  )
}
