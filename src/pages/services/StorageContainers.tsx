import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../seo/schema'
import LeadForm from '../../components/LeadForm'
import heroImg from '../../assets/storage-containers/container_hero.webp'
import container10ftImg from '../../assets/storage-containers/container_10ft.webp'
import container20ftImg from '../../assets/storage-containers/container_20ft.webp'
import container40ftImg from '../../assets/storage-containers/steel_container.webp'

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

const units = [
  {
    num: '01',
    title: '10ft Storage Container',
    image: container10ftImg,
    w: 1024,
    h: 1024,
    tag: 'Best for tight residential driveways, single-room renovations, and small job sites with limited access.',
    specs: [
      { label: 'Exterior', value: "~10'L x 8'W x 8'6\"H" },
      { label: 'Interior', value: "~9'4\"L x 7'7\"W x 7'9\"H" },
      { label: 'Floor Area', value: '~75 sq ft' },
      { label: 'Construction', value: 'Corten steel, corrugated walls and roof' },
      { label: 'Floor', value: 'Marine-grade plywood over steel crossmembers' },
      { label: 'Lock', value: 'Factory-welded steel lockbox + puck lock hasp' },
      { label: 'Forklift Pockets', value: 'Yes' },
      { label: 'Grade', value: 'WWT standard, One Trip available on request' },
    ],
  },
  {
    num: '02',
    title: '20ft Storage Container',
    image: container20ftImg,
    w: 2048,
    h: 2048,
    tag: 'The standard choice for construction tool storage, 3-4 room home moves, and full kitchen or living room renovation projects.',
    specs: [
      { label: 'Exterior', value: "~20'L x 8'W x 8'6\"H" },
      { label: 'Interior', value: "~19'3\"–19'4\"L x 7'7\"–7'8\"W x 7'9\"–7'10\"H" },
      { label: 'Floor Area', value: '~160 sq ft, ~1,100 cu ft' },
      { label: 'Max Payload', value: '~47,000–48,000 lbs' },
      { label: 'Construction', value: 'Corten steel, corrugated walls and roof' },
      { label: 'Floor', value: 'Marine-grade plywood over steel crossmembers' },
      { label: 'Lock', value: 'Factory-welded steel lockbox + puck lock hasp' },
      { label: 'Forklift Pockets', value: 'Yes' },
      { label: 'Door', value: "Standard end door (~7'6\"W x 7'5\"H typical), tunnel box available on request" },
      { label: 'Grade', value: 'WWT standard, One Trip available on request' },
    ],
  },
  {
    num: '03',
    title: '40ft Storage Container',
    image: container40ftImg,
    w: 900,
    h: 900,
    tag: 'The heavy-duty option for large commercial sites, full-household relocations, and multi-trade job sites storing materials for the duration of a build.',
    specs: [
      { label: 'Exterior', value: "~40'L x 8'W x 8'6\"H standard, or 9'6\"H high cube" },
      { label: 'Interior', value: "~39'4\"–39'5\"L x 7'7\"–7'8\"W x 7'9\"–7'10\"H" },
      { label: 'Floor Area', value: '~320 sq ft, ~2,300 cu ft' },
      { label: 'Max Payload', value: '~59,000–61,000 lbs' },
      { label: 'Construction', value: 'Corten steel, corrugated walls and roof' },
      { label: 'Floor', value: 'Marine-grade plywood over steel crossmembers' },
      { label: 'Lock', value: 'Factory-welded steel lockbox + puck lock hasp' },
      { label: 'Forklift Pockets', value: 'Yes' },
      { label: 'Door', value: 'Standard end door, tunnel box available on request' },
      { label: 'Grade', value: 'WWT standard, high cube available on request' },
    ],
  },
]

const sizingGuide = [
  { useCase: 'Tight residential driveway, 1-2 rooms', size: '10ft', notes: 'Fits standard driveways with lower clearance requirements' },
  { useCase: '3-4 room renovation or move', size: '20ft', notes: 'Most popular. Sits flush in a standard two-car driveway' },
  { useCase: 'Full-household move or large remodel', size: '20ft or 40ft', notes: 'Depends on room count and furniture volume' },
  { useCase: 'Small job site, single trade', size: '10ft or 20ft', notes: '20ft handles most tool and material volumes' },
  { useCase: 'Large commercial or multi-trade site', size: '40ft', notes: "Forklift accessible, stores a full site's worth of materials" },
  { useCase: 'Seasonal or commercial overflow', size: '20ft or 40ft', notes: 'Month-to-month billing, keep it as long as the project runs' },
]

const faqs = [
  {
    q: 'How much does it cost to rent a storage container?',
    a: 'Storage container rental pricing depends on the container size (10ft, 20ft, or 40ft), the rental duration, and the delivery distance to your site. There is no standard published rate because a 20ft container delivered nearby for a short renovation costs differently than a 40ft container held on a commercial site for several months. Fill out the form with your container size, delivery location, and estimated rental length. RHC comes back with a specific quote that includes the monthly rental rate, delivery fee, and pickup fee with no additional charges added after.',
  },
  {
    q: 'Do I need a permit to place a storage container on my property in Oregon?',
    a: "If the container sits entirely on private property, including a residential driveway or commercial lot, most Oregon municipalities do not require a permit for temporary storage. If your driveway is short and the container needs to sit on a public street, in a parking lane, or blocking a sidewalk, check with your local city transportation department before delivery. Portland's Bureau of Transportation (PBOT) requires a Street Use permit for any encroachment on public Right-of-Way. If your property has an HOA, check their bylaws as well. Note your placement situation on the quote form and RHC will flag any known requirements for your delivery area.",
  },
  {
    q: 'How much clearance does the delivery truck need?',
    a: 'Clearance depends on the container size and the delivery truck configuration. For a 20ft container, the truck typically requires 60-80 feet of straight-line clearance, roughly 10 feet of width, and 14-16 feet of vertical clearance for overhead lines or branches. Exact requirements vary by provider and are confirmed at booking. Note any access restrictions on the quote form: tight alleys, low tree canopy, soft ground after rain, or gates with width limits.',
  },
  {
    q: 'Are storage containers waterproof?',
    a: "Yes. RHC sources shipping containers to Wind and Water Tight (WWT) standard. WWT containers have intact Corten steel roofs and walls, functioning rubber door gaskets, and marine-grade plywood floors elevated on steel crossmembers to keep contents off the ground. Unlike moving pods built on steel frames with wood or fiberglass panels, solid Corten steel does not absorb moisture, rot, or warp. In Oregon's wet winters, WWT is not a marketing claim. It is the specification that keeps your furniture, tools, and materials dry.",
  },
  {
    q: 'What is the difference between a shipping container and a moving pod?',
    a: 'Two main differences: material and security. Moving pods (national brands like PODS and similar) are typically built on steel frames with fiberglass or wood panel walls. They are designed for light residential loads. RHC provides solid Corten steel ISO shipping containers, the same construction standard used in international cargo freight. Walls, roof, and floor are all steel. The door locks via a factory-welded lockbox that fully encloses the shackle, making it resistant to bolt cutters. For job sites, renovation projects with contractor equipment on-site, or anything sitting outside in Oregon weather for more than a few days, the material difference is significant.',
  },
  {
    q: 'Can a storage container sit on dirt or gravel?',
    a: "Yes. Corten steel containers are designed for outdoor placement and sit on steel corner posts. However, placing a unit on soft, rain-soaked dirt or wet Oregon clay can cause uneven settling over time, which makes doors harder to open and close. For best results, have wood blocking ready before delivery: 2x4s or railroad ties placed under the four corner posts to distribute the weight and keep the container level through winter ground conditions. Your provider will confirm what surface preparation is recommended for your specific site.",
  },
  {
    q: 'How do you prevent theft from a storage container on a job site?',
    a: 'Standard padlocks expose the shackle, which can be cut with bolt cutters in seconds. RHC containers are equipped with factory-welded steel lockboxes that fully enclose the shackle, eliminating that attack angle. For maximum job site security, add a heavy-duty puck lock inside the lockbox. Puck locks have no exposed shackle to grab. The combination of factory lockbox and puck lock is the industry standard for commercial job site containers.',
  },
  {
    q: 'Is there a minimum rental period?',
    a: 'No. RHC bills on a 28-day cycle with no minimum. You keep the container for as long as your project requires. For construction projects, the container stays through the active build phase and comes off-site when the tools are packed. For moves and renovations, there is no 24-hour return clock. When the project is done, one call to RHC and the container is picked up within 48-72 hours, confirmed at scheduling.',
  },
  {
    q: 'Will my belongings shift or get damaged during pickup and transport?',
    a: 'Some movement during transport is normal. To minimize it: pack heavy items low and against the walls, fill vertical gaps with soft goods or moving blankets so items brace against each other, and use straps to secure large furniture pieces. Most units include internal anchor points for tie-down use, confirmed at booking. Do not stack boxes higher than they sit stable. Anything that shifts during loading will shift during transport.',
  },
  {
    q: 'Can the delivery truck damage my driveway?',
    a: 'It can, if the container is placed without surface protection. Steel corner posts concentrate the weight on a small footprint. On concrete or asphalt driveways, that concentrated load can scratch or crack the surface over time. Before delivery, have wood blocking ready and place it under the four corner posts. This distributes the load and protects the surface. Let your provider know about your driveway material when you book. They will confirm what preparation is recommended for your surface type.',
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
    name: 'Storage Container Rentals',
    description:
      'Steel shipping container rentals across Oregon and Washington. 10ft, 20ft, and 40ft storage containers for construction, moving, and renovation. No hidden fees. Same-day quote.',
    path: '/storage-containers',
    serviceType: 'Storage container rental',
  }),
  breadcrumb([{ name: 'Storage Container Rentals' }]),
  faqPage(faqs),
])

export default function StorageContainers() {
  return (
    <main id="main">
      <Helmet>
        <title>Storage Container Rentals in Oregon &amp; Washington | RHC</title>
        <meta name="description" content="Steel shipping container rentals across Oregon and Washington. 10ft, 20ft, and 40ft storage containers for construction, moving, and renovation. No hidden fees. Same-day quote." />
        <link rel="canonical" href="https://rhcsiteservice.com/storage-containers" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Storage Container Rentals</span>
          </nav>
        </div>
      </div>

      {/* LEAN HERO */}
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid hero-lean-grid--split">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Storage Container Rentals · Oregon &amp; Washington</span>
              </div>
              <h1 className="h-xl">
                Storage Container Rentals in <span className="underline accent">Oregon &amp; Washington</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Solid Corten steel, watertight doors, confirmed clean before delivery. One transparent quote with no fuel surcharges or billing surprises. Construction, moving, and renovation rentals across Oregon and Washington.
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
                <div className="meta-label">Container Sizes</div>
                <div className="meta-value">10ft, 20ft, and 40ft</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Construction</div>
                <div className="meta-value">Corten steel, WWT standard</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Floor</div>
                <div className="meta-value">Marine-grade plywood</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Lock</div>
                <div className="meta-value">Factory lockbox + puck lock hasp</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Billing Cycle</div>
                <div className="meta-value">28-day, month-to-month</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Minimum Rental</div>
                <div className="meta-value">None</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Lead Time</div>
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

      {/* CONTAINER SIZES */}
      <section id="configurations">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">01 / Container Sizes</div>
              <h2 className="h-lg">10ft, 20ft, and 40ft. Specs Published. Which Size Fits Your Site?</h2>
            </div>
            <p>Storage container and shipping container companies in Oregon and Washington will tell you they have the right size. They will not tell you the door opening dimensions, the floor material, or whether the container grade is WWT or just as-is. RHC publishes the specs so your foreman, moving coordinator, or contractor can plan the site before the delivery truck arrives, not after.</p>
          </div>

          <p style={{ marginBottom: '32px', fontSize: '13px', color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            All specs below are typical ranges. Units are sourced regionally and exact specifications are confirmed at booking. All RHC storage containers are sourced to Wind and Water Tight (WWT) standard as the baseline.
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
                  <div className="mono-num">{unit.num} / {unit.title.replace(' Storage Container', '')}</div>
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
              <h2 className="h-lg">Not Sure Which Container Size You Need? Start Here.</h2>
            </div>
            <p>Two variables determine the right size: what you are storing and how long it needs to stay. Use the table below as a starting point, then note your specifics on the quote form and RHC confirms the right size for your situation.</p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--outline-variant)' }}>
                  {['Use Case', 'Recommended Size', 'Notes'].map((col) => (
                    <th key={col} style={{ textAlign: 'left', padding: '10px 12px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', fontWeight: 400 }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizingGuide.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                    <td style={{ padding: '12px', color: 'var(--on-surface)' }}>{row.useCase}</td>
                    <td style={{ padding: '12px', color: 'var(--on-surface)', fontWeight: 600 }}>{row.size}</td>
                    <td style={{ padding: '12px', color: 'var(--on-surface-variant)' }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--on-surface-variant)' }}>
            Not sure? Fill out the form and note your square footage, room count, or job site scope. RHC comes back with a specific recommendation.
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
              <h3>Your Materials Are Locked. Your Site Stays Productive.</h3>
              <p>A job site without secure on-site storage runs on theft anxiety. Tools left in trucks, materials staged on open ground, and a lock that can be cut in seconds. That problem ends the morning before a key trade shows up and half the supplies are gone.</p>
              <p style={{ marginTop: '12px' }}>RHC delivers solid Corten steel containers with factory-welded lockboxes that fully enclose the shackle. A standard padlock is exposed to bolt cutters. The lockbox eliminates that angle of attack entirely. Add a puck lock and there is no shackle to grab.</p>
              <p style={{ marginTop: '12px' }}>Container placed exactly where your site plan requires. Delivery confirmed before the truck rolls. Pickup on a 28-day billing cycle so the box stays as long as the build phase requires and comes off-site when the tools are packed.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Your GC shows up Monday morning and every tool is exactly where it was locked on Friday. Nothing missing, nothing delayed.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 20ft for single-trade sites. 40ft for multi-trade commercial builds.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Home Renovation</div>
              <h3>Your Contractor Can Work Through Every Room. On Schedule.</h3>
              <p>Renovations stall when furniture has nowhere to go. The contractor needs to gut the kitchen, but the dining table cannot move to the living room because the living room is already staged for painting. Everything stops. The timeline slips. You pay for a contractor who is waiting on you.</p>
              <p style={{ marginTop: '12px' }}>A storage container in the driveway clears the equation. Furniture goes out before the first demo wall comes down. Drywall dust, paint fumes, and sawdust stay away from upholstered furniture entirely. The contractor works through every room in sequence because no room is storing what belongs in the previous one.</p>
              <p style={{ marginTop: '12px' }}>RHC units are sourced to WWT standard. Rubber door gaskets keep construction dust, moisture, and pests out. Marine-grade plywood floors keep your belongings off the ground. Month-to-month billing means the container stays as long as the contractor takes, without you paying for it after the job is done.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The contractor finishes on schedule because they could work through every room without rearranging furniture between stages.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 20ft handles most full-home renovation projects.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Moving and Relocation</div>
              <h3>Pack on Your Timeline. Not the Rental Company's.</h3>
              <p>A moving truck gives you 24 hours and a mileage clock. You load it twice: once into the truck, once from the truck into the storage unit. Then you load it again when you are ready to move in. Three loads, two of which are entirely avoidable.</p>
              <p style={{ marginTop: '12px' }}>A storage container at your front door eliminates the double-load. Pack room by room over days or weeks. When you are ready, the container moves with everything in it. Nothing gets unpacked, restacked, and repacked.</p>
              <p style={{ marginTop: '12px' }}>Pack heavy items low and against the walls. Fill vertical gaps with soft goods so items brace against each other during transport. Most units include internal anchor points for securing larger pieces, confirmed at booking. RHC bills on a 28-day cycle. No 24-hour clock. No per-mile charge. No call asking when the truck is coming back.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                The family moved at their own pace, packed room by room over three weeks, and nothing was rushed or broken.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 20ft for 3-4 room moves. 40ft for full-household relocations.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">04 / Business and Commercial Storage</div>
              <h3>Inventory On-Site. No 20-Minute Drive Every Time Someone Needs a Box.</h3>
              <p>An off-site storage unit requires a key, a drive, and someone who has to leave the property to get there. For seasonal inventory, overflow stock, or equipment between projects, that drive happens every time anyone needs something. Multiply it across every employee, every week, and the cost is not the storage unit. It is the hours.</p>
              <p style={{ marginTop: '12px' }}>A container on your lot eliminates the trip. Inventory is accessible during business hours without a separate errand. Seasonal overflow stays organized in one location. Month-to-month billing means the container is gone when you do not need it, not locked into a lease that outlasts the project.</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Inventory is on-site and accessible without anyone leaving the property to retrieve it.
              </p>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--on-surface-variant)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Recommended: 20ft for most commercial overflow. 40ft for high-volume seasonal storage or multi-location staging.
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
              <h2 className="h-lg">Why RHC for Storage Container Rentals</h2>
            </div>
            <p>The dominant players in portable storage are national companies with hundreds of locations. When something goes wrong, you call a 1-800 number and wait for someone who does not know your job site, your driveway, or your delivery window. RHC operates differently.</p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>The Price You Are Quoted Is the Price You Pay</h3>
              <p>The most common complaint across national portable storage companies is not late delivery. It is billing. Quoted one number, charged another. Fuel surcharges added without disclosure. Extra months billed without notice. Deposits held against fees buried in the fine print and never mentioned on the call.</p>
              <p style={{ marginTop: '12px' }}>Before any delivery is confirmed, you receive a written quote with three line items: the 28-day rental rate, the flat delivery fee, and the flat pickup fee. You approve that number. Nothing is added after. If your project runs long and you need another 28-day cycle, that is confirmed with you before the billing period rolls, not discovered afterward on a statement.</p>
              {/* TESTIMONIAL PLACEHOLDER — 5-star Google review referencing transparent pricing or no hidden fees */}
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 01" paragraph about the written quote with three line items (The Price You Are Quoted Is the Price You Pay)
                  Intended review theme: transparent pricing / no hidden fees
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>Delivery Happens When It Is Scheduled</h3>
              <p>The second most common complaint from national providers: the container did not show up. Reserved weeks in advance, called multiple times, eventually told the driver simply did not complete the delivery. Moving day is not negotiable. Job site start dates are not negotiable.</p>
              <p style={{ marginTop: '12px' }}>The delivery window on your confirmation is set before it is sent. Not a twelve-hour range. Not a "sometime that day." A committed window that RHC is accountable to. If anything changes before your scheduled delivery, you hear from RHC before your window closes, not after you have been waiting. Pickup works the same way: one call, container off-site within 48-72 hours, confirmed before you hang up.</p>
              {/* TESTIMONIAL PLACEHOLDER — 5-star Google review referencing on-time delivery or reliable communication */}
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 02" paragraph about committed delivery windows (Delivery Happens When It Is Scheduled)
                  Intended review theme: on-time delivery / reliable communication
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>The Container Arrives Ready to Use</h3>
              <p>Every regional competitor will tell you their containers are clean and their doors work. Most cannot tell you the condition of the specific unit until it comes off the truck. The most common job site complaint in container rentals: the box arrived beat up, the puck lock enclosure was not in place, and the doors were hard to open and close.</p>
              <p style={{ marginTop: '12px' }}>RHC sources containers to WWT standard. Doors function. The lockbox is in place. The unit arrives ready to load, not ready to argue about.</p>
              {/* TESTIMONIAL PLACEHOLDER — 5-star Google review referencing container condition on arrival */}
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 03" paragraph about container condition on arrival (The Container Arrives Ready to Use)
                  Intended review theme: container condition on arrival
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
              <h2 className="h-lg">Storage Container Rentals Across Oregon and Washington</h2>
            </div>
            <p>Based in Portland, RHC delivers and services storage containers across Oregon and Washington. Same-day quotes, units typically coordinated within 24-48 hours of confirmed booking.</p>
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
              <h2 className="h-lg">Questions About Storage Container Rentals</h2>
            </div>
            <p>Everything contractors, homeowners, and business owners ask before booking. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
              <p>Fill out the form and RHC comes back with a real quote for your job site, move, or renovation. Container size, delivery fee, and pickup cost all included in the first response. No hidden charges added after.</p>

              {/* TESTIMONIAL PLACEHOLDER — 5-star Google review referencing smooth delivery, communication, or overall experience */}
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the final CTA intro paragraph about filling out the form and getting a real quote
                  Intended review theme: smooth delivery / communication / overall experience
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

            <div>
              <LeadForm
                id="quote"
                variant="final"
                defaultService=""
              />
              <div className="final-trigger" style={{ marginTop: '12px' }}>
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>Flat quote: rental, delivery, and pickup included. No changes after approval. No minimums. No contracts.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
