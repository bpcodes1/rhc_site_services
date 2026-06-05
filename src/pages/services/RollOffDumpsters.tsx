import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LeadForm from '../../components/LeadForm'
import rolloff10ydImg from '../../assets/storage-containers/container_10ft.webp'
import rolloff15ydImg from '../../assets/storage-containers/container_15ft.webp'
import rolloff20ydImg from '../../assets/roll-off-dumpsters/rolloff_bins.webp'
import rolloff30ydImg from '../../assets/storage-containers/container_30ft.webp'
import rolloff40ydImg from '../../assets/storage-containers/container_40ft.webp'

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

const sizes = [
  {
    num: '01',
    title: '10-Yard Roll-Off',
    image: rolloff10ydImg,
    tag: 'The only size rated for heavy fill: concrete, dirt, brick, and asphalt.',
    specs: [
      { label: 'Dimensions', value: "~14' L × 7.5' W × 3.5' H" },
      { label: 'Capacity', value: '4 pickup truck loads / ~60 large kitchen bags' },
      { label: 'Heavy Fill', value: 'Yes. The only size rated for concrete, dirt, brick, and asphalt. Larger containers filled with dense material exceed the truck\'s haul capacity and cannot be transported.' },
      { label: 'Best For', value: 'Single-room demolition, bathroom tear-outs, small yard debris, concrete and dirt disposal' },
    ],
  },
  {
    num: '02',
    title: '15-Yard Roll-Off',
    image: rolloff15ydImg,
    tag: 'Standard kitchen demos, carpet removal from a full floor, and minor roofing projects.',
    specs: [
      { label: 'Dimensions', value: "~16' L × 7.5' W × 4.5' H" },
      { label: 'Capacity', value: '6 pickup truck loads / ~90 large kitchen bags' },
      { label: 'Heavy Fill', value: 'No. General mixed debris only.' },
      { label: 'Best For', value: 'Standard kitchen demo (cabinets, countertops, tile), full-floor carpet removal, minor roofing projects' },
    ],
  },
  {
    num: '03',
    title: '20-Yard Roll-Off',
    image: rolloff20ydImg,
    tag: 'Multi-room renovations, master bath gut-remodels, standard roof tear-offs, and garage cleanouts.',
    specs: [
      { label: 'Dimensions', value: "~16' L × 8' W × 4.5' H" },
      { label: 'Capacity', value: '8 pickup truck loads / ~120 large kitchen bags' },
      { label: 'Heavy Fill', value: 'No. General mixed debris only.' },
      { label: 'Best For', value: 'Multi-room renovations, master bath gut-remodel, standard roof tear-offs, garage cleanouts' },
    ],
  },
  {
    num: '04',
    title: '30-Yard Roll-Off',
    image: rolloff30ydImg,
    tag: 'Full home remodels, large commercial renovations, and multi-room drywall tear-outs.',
    specs: [
      { label: 'Dimensions', value: "~22' L × 8' W × 6' H" },
      { label: 'Capacity', value: '12 pickup truck loads / ~180 large kitchen bags' },
      { label: 'Heavy Fill', value: 'No. General mixed debris only. No concrete, dirt, or asphalt.' },
      { label: 'Best For', value: 'Full home remodels, large commercial renovations, multi-room drywall tear-outs, siding replacement' },
    ],
  },
  {
    num: '05',
    title: '40-Yard Roll-Off',
    image: rolloff40ydImg,
    tag: 'New construction waste, whole-house demolition, major framing projects, and large estate cleanouts.',
    specs: [
      { label: 'Dimensions', value: "~22' L × 8' W × 8' H" },
      { label: 'Capacity', value: '16 pickup truck loads / ~240 large kitchen bags' },
      { label: 'Heavy Fill', value: 'No. Bulk lightweight debris only. Framing, insulation, and drywall. No heavy fill.' },
      { label: 'Best For', value: 'New construction waste, whole-house demolition, large framing projects, major estate cleanouts' },
    ],
  },
]

const sizingRows = [
  { debris: 'Concrete, dirt, brick, or asphalt', size: '10-yard only', note: 'Dense materials exceed haul capacity in larger containers. Note this upfront on the quote form.' },
  { debris: 'Single-room demolition or bathroom tear-out', size: '10 or 15-yard', note: 'Depends on volume of fixtures and tile' },
  { debris: 'Standard kitchen demo (cabinets, countertops, flooring)', size: '15-yard', note: 'Most single-kitchen jobs fit a 15-yard' },
  { debris: 'Full kitchen gut or master bath tear-out', size: '20-yard', note: 'Size up if combining two rooms in one rental' },
  { debris: 'Multi-room renovation or full-floor tearout', size: '20 or 30-yard', note: 'Depends on room count and material density' },
  { debris: 'Full home remodel or commercial renovation', size: '30-yard', note: 'Mixed debris only. No heavy fill.' },
  { debris: 'New construction or whole-house demolition', size: '40-yard', note: 'Framing, insulation, drywall only. No heavy fill.' },
]

const faqs = [
  {
    q: 'How much does it cost to rent a roll-off dumpster in Oregon?',
    a: 'For most home renovation and construction projects in Oregon and SW Washington, pricing runs $350 to $850. That range covers delivery, the standard 7 to 10-day rental period, and pickup. The two variables that move the number are container size and debris weight. Heavier loads cost more because the transfer station bills by the ton beyond your included weight allowance. The price in your quote is the price you pay. The only thing that changes it is debris weight beyond your included tonnage, and RHC communicates that before pickup, not after. Fill out the form with your project details and we will come back with a confirmed quote specific to your size, location, and timeline.',
  },
  {
    q: 'What size dumpster do I need for a kitchen or bathroom remodel?',
    a: 'A standard kitchen demo, including cabinets, countertops, tile, and flooring, typically fits a 15-yard container. A full gut-remodel of a master bath or a combined kitchen and bath tearout is better matched to a 20-yard. If you are unsure, size up. The cost difference between a 15 and 20-yard is smaller than the cost of a second delivery because the first one filled before the job was done.',
  },
  {
    q: 'What size dumpster do I need for a construction project?',
    a: 'Standard roof tear-offs fit in a 20-yard. Large commercial renovations and multi-room drywall tearouts are suited to a 30-yard. New construction framing waste and whole-house demolition go in a 40-yard. For any project involving concrete, dirt, brick, or asphalt, use the 10-yard regardless of total project size. Dense materials cannot go in larger containers.',
  },
  {
    q: 'Can I put concrete, dirt, or asphalt in a roll-off dumpster?',
    a: "Yes, but only in a 10-yard container. Dense materials in a 20, 30, or 40-yard container exceed the truck's rated haul capacity. The load cannot be transported safely and will not be picked up until moved to the correct size. If your project involves heavy fill, note it on the quote form so the right container is confirmed before delivery day.",
  },
  {
    q: 'How full can I fill a roll-off dumpster?',
    a: 'Debris must be level with the top rail of the container. The driver covers the load with a canvas tarp for legal transport on Oregon roads. If debris extends above the rim, the driver cannot tarp the container and cannot complete the pickup. That triggers a return trip fee. Load heavy and bulky items first so they settle as you fill.',
  },
  {
    q: 'Do I need a permit for a roll-off dumpster in Portland or Oregon?',
    a: 'If the container sits entirely on private property, such as a driveway or a fenced job site, no permit is required. If the container needs to sit in a public parking lane, on the street, or blocking any portion of a sidewalk, a Street Use or Right-of-Way permit must be obtained from your local city transportation bureau before delivery. In Portland, that is the Portland Bureau of Transportation (PBOT). If your property has an HOA, check their guidelines for container placement before confirming delivery.',
  },
  {
    q: 'Will a roll-off dumpster damage my driveway?',
    a: "A steel container loaded with demolition debris is heavy enough to scratch or crack concrete and asphalt if it sits directly on the surface. Before the driver sets the container down, ask them to place wood planks under the corner posts and wheels. This distributes the weight across a wider surface area and protects the driveway from direct steel contact.",
  },
  {
    q: 'What items are not allowed in a roll-off dumpster in Oregon?',
    a: 'Oregon DEQ prohibits the following from standard roll-off containers: wet paint, tires, asbestos-containing materials, appliances containing Freon (refrigerators, air conditioning units), car batteries, chemical solvents, motor oil, and hazardous waste. Items hidden under demolition debris that are flagged at the transfer station result in the entire load being rejected. Hazardous waste disposal fees and return transport costs are passed back to the renter.',
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

export default function RollOffDumpsters() {
  return (
    <main id="main">
      <Helmet>
        <title>Roll-Off Dumpster Rentals in Oregon &amp; Washington | RHC Site Services</title>
        <meta name="description" content="Roll-off dumpster rentals for renovation, construction, and estate cleanouts across Oregon and Washington. Starting from $350. Same-day quotes available." />
        <link rel="canonical" href="https://rhcsiteservices.com/roll-off-dumpsters" />
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Roll-Off Dumpster Rentals</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean">
        <div className="container">
          <div className="hero-lean-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Roll-Off Dumpster Rentals · Oregon &amp; Washington</span>
              </div>
              <h1 className="h-xl">
                Roll-Off Dumpster Rentals in <span className="underline accent">Oregon &amp; Washington</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                The hardest part of a renovation shouldn't be booking the dumpster. Tell us your project and we'll have the right container on site when demo day starts.
              </p>
              <div className="hero-lean-actions">
                <a href="#quote" className="btn btn-primary">Get a Same-Day Quote →</a>
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
                <div className="meta-label">Sizes</div>
                <div className="meta-value">10, 15, 20, 30, and 40-yard</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Rental Period</div>
                <div className="meta-value">Standard 7–10 days</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Starting From</div>
                <div className="meta-value">$350–$850</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Permits</div>
                <div className="meta-value">Not required for driveway placement</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Service Area</div>
                <div className="meta-value">Oregon and SW Washington</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SIZES AND SPECIFICATIONS */}
      <section id="configurations">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Sizes and Specifications</div>
              <h2 className="h-lg">Five Sizes. Specs Published. Which Container Fits Your Project?</h2>
            </div>
            <p>Roll-off containers, also known as debris boxes or drop boxes across the Pacific Northwest, are available in five standard sizes. Most rental companies list sizes in cubic yards and leave you to figure out what that means. Below are the typical dimensions, capacities, and recommended uses for each container available in the Oregon and SW Washington market. Dimensions and weight limits vary by provider and are confirmed when you request your quote.</p>
          </div>

          <p style={{ marginBottom: '32px', fontSize: '13px', color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            All specs below are typical ranges for the Pacific Northwest market. Exact dimensions are confirmed at booking. Heavy fill guidance applies to all providers in RHC's network.
          </p>

          <div className="units">
            {sizes.map((size, i) => (
              <article key={size.num} className="unit">
                <div className="unit-photo">
                  {size.image ? (
                    <img src={size.image} alt={size.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div className={`placeholder${i % 2 !== 0 ? ' dark' : ''}`}>
                      <span className="ph-tag">Photo · {size.title}</span>
                    </div>
                  )}
                </div>
                <div className="unit-body">
                  <div className="mono-num">{size.num} / {size.title}</div>
                  <h3>{size.title}</h3>
                  <p style={{ color: 'var(--secondary)', fontSize: '13px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {size.tag}
                  </p>
                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--outline-variant)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {size.specs.map((spec) => (
                      <div key={spec.label} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>{spec.label}</span>
                        <span style={{ fontSize: '13px', color: 'var(--on-surface)', lineHeight: '1.5' }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#quote" style={{ display: 'inline-block', marginTop: '20px', fontSize: '13px', fontWeight: 600, color: 'var(--secondary)', letterSpacing: '0.04em' }}>
                    → Get my quote for this size
                  </a>
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
              <h2 className="h-lg">Match Your Material to the Right Container Before Delivery Day.</h2>
            </div>
            <p>The most common mistake in dumpster rentals is undersizing. A second delivery costs more than renting one size larger upfront. Use the table below as a starting point, then describe your project on the quote form and RHC confirms the right container before the truck rolls.</p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--outline-variant)' }}>
                  {['Debris / Project Type', 'Recommended Size', 'Notes'].map((col) => (
                    <th key={col} style={{ textAlign: 'left', padding: '10px 12px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', fontWeight: 400 }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizingRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                    <td style={{ padding: '12px', color: 'var(--on-surface)' }}>{row.debris}</td>
                    <td style={{ padding: '12px', color: 'var(--on-surface)', fontWeight: 600 }}>{row.size}</td>
                    <td style={{ padding: '12px', color: 'var(--on-surface-variant)' }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', marginBottom: '6px' }}>The Fill Rule</p>
              <p style={{ fontSize: '14px', color: 'var(--on-surface)', lineHeight: '1.65' }}>
                Debris must be level with the top rail of the container. The driver covers the load with a canvas tarp to transport it legally on Oregon roads. If debris extends above the rim, the driver cannot tarp the container and cannot complete the pickup. That is a return trip fee. Load heavy and bulky items first so they settle as you fill.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', marginBottom: '10px' }}>Before Delivery Day, Confirm</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  '60 feet of straight clearance for the truck to back in',
                  '23 feet of vertical clearance (check for tree branches and overhead wires before confirming placement)',
                  'Flat, accessible, unobstructed surface for container placement',
                  'For driveway placement: ask the driver to position wood planks under the corner posts and wheels to protect concrete and asphalt from steel contact',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--on-surface)', lineHeight: '1.6' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--secondary)', flexShrink: 0, paddingTop: '3px' }}>{String(i + 1).padStart(2, '0')}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              <h2 className="h-lg">Who Rents Roll-Off Dumpsters Through RHC?</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Home Renovation</div>
              <h3>Demo Day on Saturday. Clean Site on Monday.</h3>
              <p>You have demo day on Saturday. The contractor shows up Monday. Debris needs to be gone before the next crew arrives, and the curb bin that handles a normal week of household trash will not cover a gutted kitchen.</p>
              <p style={{ marginTop: '12px' }}>One container handles the full demolition load. You fill it throughout the weekend. It gets picked up on schedule. The contractor walks into a clean site and the project stays on schedule. You spent the weekend renovating, not making runs to the dump.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The contractor walks in Monday to a clean site. The project stays on schedule.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 15-yard for a single room. 20-yard for multi-room or full gut-remodel.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Construction and Commercial</div>
              <h3>Site Stays Clear. Crew Keeps Moving.</h3>
              <p>An active job site generates debris from day one. When material piles up faster than it moves out, every trade behind the current crew slows down. A site that looks like a landfill at inspection is a site that fails inspection.</p>
              <p style={{ marginTop: '12px' }}>A container on site for the duration of the project keeps debris contained and the crew moving. Material goes in as it comes out. By inspection day, the site is clear, organized, and looks like a professional operation.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Inspection day, the site is clear and looks like a professional operation.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 20-yard for roofing and medium jobs. 30-yard for commercial renovations. 40-yard for new construction.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Estate Cleanouts</div>
              <h3>Property Cleared. Realtor Walks In. Listed on Schedule.</h3>
              <p>A family home with decades of belongings needs to be cleared before the realtor can list it. Two weekends, maybe three, to move furniture, household items, and accumulated debris that has nowhere to go.</p>
              <p style={{ marginTop: '12px' }}>One or two containers placed where you need them, picked up when full. The property gets cleared on your timeline. The realtor walks through a clean house. You handled it without 15 trips to the dump.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Realtor walks through a clean property. Listed on schedule.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 20 or 30-yard depending on volume. Describe the home on the quote form.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">04 / Roofing and Exterior Projects</div>
              <h3>One Container. Crew Loads As They Strip.</h3>
              <p>A full roof tear-off generates more volume than truck beds can absorb. Shingles and underlayment staged across the property slow the crew, create a liability, and extend a one-day job into two.</p>
              <p style={{ marginTop: '12px' }}>One container positioned at the drop point. Crew loads directly as they strip. No wasted trips, no debris left on the lawn overnight, no delays waiting on a haul between the job and the dump.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Crew loads as they strip. Job done in one day. No debris left on the lawn overnight.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 20-yard for standard roof tear-offs. 30-yard for commercial or multi-building jobs.
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
              <h2 className="h-lg">Why Contractors and Homeowners Choose RHC for Dumpster Rentals</h2>
            </div>
            <p>National corporations with large call center operations route dumpster rental requests through automated systems and regional layers before anyone confirms a delivery date. Some customers spend more time trying to reach the right person than they spent planning their actual project. RHC provides one accountable contact from the first call to final pickup.</p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>One Accountable Contact, Start to Finish</h3>
              <p>One conversation gets your size confirmed, your delivery scheduled, and your pickup arranged. The same person who booked you is the same person you call if anything changes. If anything changes on delivery day, you hear from RHC before the window, not after you have been waiting.</p>
              <p style={{ marginTop: '12px' }}>No regional routing. No call center queue. No explaining your job site to a new person every time you call. One contact. One conversation. Container on site.</p>
              {/* TESTIMONIAL PLACEHOLDER — 5-star Google review referencing easy booking or reliable communication */}
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — easy booking / one point of contact / reliable communication]
                </p>
                <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
              </blockquote>
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>The Price You Are Quoted Is the Price You Pay</h3>
              <p>The most common complaint across national dumpster rental companies is not late delivery. It is billing. Quoted one number, charged another. Fuel surcharges added after the fact. Overage fees discovered on the invoice rather than before pickup.</p>
              <p style={{ marginTop: '12px' }}>Your quote covers delivery, the standard rental period, and pickup. The only variable after that is debris weight beyond your included tonnage. If your load is running heavier than expected, RHC communicates that before the driver leaves for pickup, not after the invoice arrives. For most projects in Oregon and SW Washington, the range is $350 to $850 depending on container size, debris weight, and rental duration.</p>
              {/* TESTIMONIAL PLACEHOLDER — 5-star Google review referencing transparent pricing or no hidden fees */}
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — transparent pricing / no hidden fees / no surprise charges]
                </p>
                <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
              </blockquote>
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Container Matched to Your Project Before Delivery</h3>
              <p>You describe what you are demolishing or clearing. RHC confirms the right size before the truck rolls. You are not selecting from a dropdown and hoping the estimate was right. If the scope of your project changes after delivery, we handle the adjustment.</p>
              <p style={{ marginTop: '12px' }}>Heavy fill projects, mixed debris jobs, and estate cleanouts all require different containers. Getting it wrong costs a second delivery. Getting it right starts with a conversation, not a web form with five size options and no guidance.</p>
              {/* TESTIMONIAL PLACEHOLDER — 5-star Google review referencing right container delivered or driver going above and beyond */}
              <blockquote style={testimonialStyle.blockquote}>
                <p style={testimonialStyle.text}>
                  [Testimonial placeholder — right container delivered / helpful guidance on sizing]
                </p>
                <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
              </blockquote>
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
              <h2 className="h-lg">Roll-Off Dumpster Rentals Across Oregon and Washington</h2>
            </div>
            <p>Based in Portland, RHC coordinates roll-off dumpster delivery and pickup across Oregon and SW Washington. Same-day quotes available for all service cities.</p>
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
              <h2 className="h-lg">Questions About Roll-Off Dumpster Rentals</h2>
            </div>
            <p>Everything homeowners, contractors, and property managers ask before booking. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
              <p>Fill out the form and RHC will reach out with a confirmed quote for your project. Container size, delivery fee, and rental period all included in the first response. The price in your quote is the price you pay.</p>

              {/* TESTIMONIAL PLACEHOLDER — 5-star Google review referencing smooth overall experience */}
              <blockquote style={{ margin: '20px 0', padding: '14px 18px', background: 'rgba(255,255,255,0.07)', borderLeft: '3px solid var(--secondary)', borderRadius: '0 4px 4px 0' }}>
                <p style={{ fontSize: '14px', color: 'inherit', lineHeight: '1.65', fontStyle: 'italic', margin: 0 }}>
                  [Testimonial placeholder — smooth overall experience / easy process / would use again]
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

            <div>
              <LeadForm
                id="quote"
                variant="final"
                defaultService="Roll-Off Dumpsters (Construction Debris / Cleanouts)"
              />
              <div className="final-trigger" style={{ marginTop: '12px' }}>
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>Flat quote — delivery, rental period, and pickup included. RHC follows up with a confirmed price specific to your project. No surprise charges added after.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
