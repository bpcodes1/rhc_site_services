import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumb, business, faqPage, graph, service } from '../../../seo/schema'
import LeadForm from '../../../components/LeadForm'
import heroImg from '../../../assets/cities/seattle/seattle_hero.webp'
import portaPottyImg from '../../../assets/portable-toilets/porta-potty1.webp'
import adaPortableImg from '../../../assets/portable-toilets/ada_portable.webp'
import highRiseImg from '../../../assets/portable-toilets/porta-potty2.webp'

const permitRules = [
  {
    label: 'Unit on private property: no permit required.',
    body: 'A portable toilet placed entirely on your own job site, driveway, or private lot does not require a standalone city permit. Most residential remodels and commercial construction sites with private staging areas fall here. Washington L&I sanitation standards under WAC 296-155-140 still apply on any active construction site regardless of permit status.',
    status: 'clear',
  },
  {
    label: 'Unit in a public parking lane or sidewalk: SDOT Street Use Permit required.',
    body: 'Any portable toilet placed in a public parking lane or sidewalk requires a permit from the Seattle Department of Transportation. SDOT classifies portable toilet placements under its ROW Maintenance – Simple Review category, the same classification as dumpsters and storage containers. Apply through the Seattle Services Portal under "Permits – Street Use." Processing takes 3 to 5 business days. Fees include an hourly plan review charge plus an Occupation/Use Fee based on the square footage of public space blocked multiplied by rental duration. If your placement is in a metered parking zone in Downtown Seattle or Capitol Hill, SDOT adds a Lost Paid Parking fee to the permit cost. Note your placement location on the quote form and RHC will flag whether a permit applies before delivery day.',
    status: 'required',
  },
  {
    label: 'Events on Seattle Parks property: Special Event Permit required.',
    body: 'Any event at a City of Seattle park, including Gas Works Park, Cal Anderson Park, or Seattle Center grounds, requires a Special Event Permit from the Seattle Special Events Committee. Sanitation plans, unit count, and placement are reviewed as part of the application. The committee requires a minimum of 5% ADA-accessible units at all permitted events, with a minimum of one ADA unit regardless of total count. Submit your event location on the quote form and RHC will flag what applies before you apply.',
    status: 'required',
  },
  {
    label: 'Seattle All-Gender law (SMC 14.07.010): applies to all event units.',
    body: 'Under Seattle Municipal Code 14.07.010, all single-occupant restrooms at public events and places of public accommodation must be designated all-gender. Units with traditional "Men" and "Women" signage are not compliant. Enforcement is handled by the Seattle Office for Civil Rights. Event planners who book gendered units are exposing their organization to an enforcement action. RHC delivers gender-neutral units as standard. Market-standard portable units ship with universal iconography, no special order required. This applies to your entire unit order.',
    status: 'check',
  },
  {
    label: 'Events with food service: King County heated handwashing required.',
    body: 'Under King County Board of Health guidelines enforcing WAC 246-215, events with food trucks, catering booths, or any food service must provide handwashing sinks with hot and cold running water within 200 feet of food service areas. Standard hand sanitizer and cold-water dispensers do not satisfy this requirement. A full restroom trailer is not required. A heated standalone handwashing station paired with standard portable units satisfies the code. Note whether your event includes food service on the form and RHC will confirm the right configuration.',
    status: 'required',
  },
  {
    label: 'Washington waste hauler licensing: enforced by King County.',
    body: 'In Washington, liquid waste hauling is regulated at the county level. For Seattle jobs, your pumping contractor must hold a King County Liquid Waste Hauler Permit issued by Public Health – Seattle & King County and be authorized by the King County Industrial Waste Program to discharge at county treatment facilities. This is how you verify your vendor is legally authorized to service your site before the first pump-out date.',
    status: 'check',
  },
]

const units = [
  {
    num: '01',
    name: 'Standard Portable Toilet',
    body: "Single-occupancy, ventilated, with hand sanitizer and a high-capacity tank built for daily construction use. The baseline unit for WA L&I-compliant sanitation on Seattle job sites. Under WAC 296-155-140, one unit covers up to 10 workers. A crew of 11 to 25 requires 2 units. Washington's threshold is stricter than Oregon's, and most estimators quote the wrong table. Standard units are all-gender compliant as delivered.",
    image: portaPottyImg,
    w: 1195,
    h: 896,
  },
  {
    num: '02',
    name: 'ADA-Compliant Unit',
    body: 'Wider footprint, interior grab bars, anti-slip flooring, and full wheelchair access. Required by the Seattle Special Events Committee at all permitted events: minimum 5% of total units, minimum one unit. Required on any job site with workers or visitors with mobility limitations under ADA and WA L&I standards. Not optional.',
    image: adaPortableImg,
    w: 1200,
    h: 896,
  },
  {
    num: '03',
    name: 'High-Rise / Crane-Liftable Unit',
    body: 'Reinforced structure, crane-lift rated, and designed to fit a standard freight elevator footprint. South Lake Union, Belltown, and downtown Seattle commercial high-rise construction requires units that reach active floors by crane or freight elevator. Standard units cannot access upper floors on high-rise projects. When your site is above grade, this is the unit that gets there.',
    image: highRiseImg,
    w: 1800,
    h: 847,
  },
]

const waTable = [
  { crew: '1 to 10 workers',  oregon: '1 unit',   wa: '1 unit',   highlight: false },
  { crew: '11 to 25 workers', oregon: '1 unit',   wa: '2 units',  highlight: true  },
  { crew: '26 to 40 workers', oregon: '2 units',  wa: '3 units',  highlight: true  },
  { crew: '41 to 60 workers', oregon: '3 units',  wa: '4 units',  highlight: true  },
  { crew: '61 to 80 workers', oregon: '4 units',  wa: '5 units',  highlight: true  },
  { crew: 'Over 80 workers',  oregon: '1 per 20', wa: '1 per 20', highlight: false },
]

const faqs = [
  {
    q: 'How much does it cost to rent a porta potty in Seattle?',
    a: 'The number depends on your delivery location within King County, number of units, service frequency, and rental duration. A single unit on a SoDo construction site quotes differently than a multi-unit event setup at Gas Works Park. RHC does not post a generic rate because it would either pad your quote to cover every edge case or come in low and add charges at billing. Submit the form with your site details and RHC will have a confirmed quote back to you the same day.',
  },
  {
    q: 'How many portable toilets do I need on a Seattle construction site?',
    a: "Washington L&I uses a tiered system under WAC 296-155-140 that is stricter than Oregon's standard. The table: 1 to 10 workers = 1 unit. 11 to 25 workers = 2 units. 26 to 40 workers = 3 units. 41 to 60 workers = 4 units. 61 to 80 workers = 5 units. Over 80 workers: 1 additional unit per 20. Tell us your crew size and shift schedule on the form and RHC will confirm the compliant count for your site.",
  },
  {
    q: 'Do I need a permit to place a porta potty on the street in Seattle?',
    a: 'Yes, for any parking lane or sidewalk placement. SDOT classifies portable toilet placements under its ROW Maintenance – Simple Review permit. Apply through the Seattle Services Portal under "Permits – Street Use." Processing takes 3 to 5 business days. If your placement is in a metered zone in Downtown Seattle or Capitol Hill, SDOT adds a Lost Paid Parking fee to the permit cost. Note your placement location on the form and RHC will flag whether a permit applies before delivery day.',
  },
  {
    q: "What is Seattle's all-gender restroom requirement for events?",
    a: 'Under Seattle Municipal Code 14.07.010, all single-occupant restrooms at public events and places of public accommodation must be all-gender. Units with "Men" and "Women" signage are not compliant, and enforcement falls under the Seattle Office for Civil Rights. RHC delivers gender-neutral units as standard. Market-standard units ship with universal iconography, no special order required.',
  },
  {
    q: 'Do I need handwashing stations if my Seattle event has food vendors?',
    a: 'Yes. King County Board of Health requirements under WAC 246-215 mandate hot and cold running water within 200 feet of food service booths at events. Standard hand sanitizer dispensers do not satisfy this requirement. A heated standalone handwashing station paired with standard portable units satisfies the code without requiring a full restroom trailer. Note whether your event includes food service on the form and RHC will confirm the right setup.',
  },
  {
    q: 'How many ADA units does a Seattle event require?',
    a: 'The Seattle Special Events Committee requires a minimum of 5% of all portable units to be ADA-accessible, with a minimum of one ADA unit regardless of total count. Tell us your expected attendance and total unit count on the form and RHC will confirm the ADA-compliant configuration before you submit your permit application.',
  },
  {
    q: 'How much is a portable toilet per day?',
    a: 'Single-day and short-duration event rentals are quoted as a flat rate covering delivery, the rental period, and removal. Multi-day construction rentals run on a monthly cycle with scheduled service included. The rate depends on unit type, delivery location, and service frequency. Submit your dates and location and RHC will have a confirmed quote back the same day.',
  },
  {
    q: 'What can I use instead of a porta potty at a Seattle job site or event?',
    a: 'For short residential projects, some contractors negotiate building access or use holding tanks. For permitted construction sites and Seattle Special Events Committee-permitted events, portable toilets are the standard compliant solution under WA L&I and city requirements. Restroom trailers are an option for high-end events where guests expect climate control and interior finishing. For most Seattle job sites and outdoor events, a portable unit is the right answer.',
  },
  {
    q: 'Where does the waste from a Seattle porta potty rental go?',
    a: 'Licensed waste haulers transport it to King County treatment facilities. Washington regulates liquid waste hauling at the county level. Your pumping contractor must hold a King County Liquid Waste Hauler Permit from Public Health – Seattle & King County. This is how you verify your vendor is legally authorized to service your site before the first pump-out.',
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

const thStyle: React.CSSProperties = {
  padding: '10px 14px',
  textAlign: 'left',
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--on-surface-variant)',
  borderBottom: '2px solid var(--outline-variant)',
}

const schema = graph([
  business,
  service({
    name: 'Porta Potty Rental in Seattle, WA',
    description:
      'Portable toilet rentals for Seattle construction sites and events. WA L&I compliant unit counts, SDOT permit guidance, same-day quotes. Serving King County.',
    path: '/porta-potty-rental-seattle-wa',
    serviceType: 'Portable toilet rental',
    areaServed: ['Seattle, WA'],
  }),
  breadcrumb([{ name: 'Portable Toilets', path: '/portable-toilets' }, { name: 'Seattle, WA' }]),
  faqPage(faqs),
])

export default function PortaPottySeattle() {
  return (
    <main id="main">
      <Helmet>
        <title>Porta Potty Rental Seattle WA | RHC Site Services</title>
        <meta name="description" content="Portable toilet rentals for Seattle construction sites and events. WA L&I compliant unit counts, SDOT permit guidance, same-day quotes. Serving King County." />
        <link rel="canonical" href="https://rhcsiteservice.com/porta-potty-rental-seattle-wa" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/portable-toilets">Portable Toilets</Link>
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
                <span className="eyebrow">Portable Toilet Rental · Seattle, WA &amp; King County</span>
              </div>
              <h1 className="h-xl">
                Porta Potty Rental in <span className="underline accent">Seattle, WA</span>
              </h1>
              <p className="hero-lean-sub body-lg">
                Most vendors quote the Oregon standard on Washington jobs. Washington L&I requires more units per crew, and the difference shows up on inspection day. RHC quotes against the actual Washington table, flags SDOT permit requirements, and confirms every booking with a hard delivery window.
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
                <div className="meta-label">Unit Types</div>
                <div className="meta-value">Standard · Deluxe · ADA · High-Rise/Crane</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">Coverage</div>
                <div className="meta-value">Seattle · Bellevue · Renton · Kirkland · Tacoma · King County</div>
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
              <h2 className="h-lg">Do you need a permit to place a portable toilet in Seattle?</h2>
            </div>
            <p>The answer depends on where the unit is going and what your event involves. Here is the full breakdown for private property, public right-of-way placements, Seattle Parks events, and food service requirements.</p>
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
            Note your placement location and event details on the quote form. RHC will identify what permits and compliance requirements apply before delivery day.
          </p>
        </div>
      </section>

      {/* UNIT TYPES */}
      <section id="unit-types" style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / Available Units</div>
              <h2 className="h-lg">Standard, ADA, and high-rise portable toilet units for Seattle construction sites and events.</h2>
            </div>
            <p>Four unit types cover the full range of Seattle construction sites, downtown high-rises, outdoor events, and residential projects.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            {units.map((unit) => (
              <div
                key={unit.num}
                style={{
                  flex: '1 1 280px',
                  maxWidth: '380px',
                  background: 'var(--surface)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--outline-variant)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={unit.image} width={unit.w} height={unit.h} alt={unit.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '20px', alignItems: 'start', padding: '24px' }}>
                  <div className="mono" style={{ color: 'var(--secondary)', paddingTop: '2px' }}>{unit.num}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '18px', fontWeight: 600, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                      {unit.name}
                    </h3>
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.65', color: 'var(--on-surface-variant)' }}>
                      {unit.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--on-surface-variant)', textAlign: 'center' }}>
            <Link to="/portable-toilets#sizing-guide" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
              See the full sizing guide and compliance tables on the main Portable Toilets page →
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
              <h2 className="h-lg">Built for Seattle portable toilet rental needs: construction sites, outdoor events, and residential projects.</h2>
            </div>
          </div>

          <div className="use-cases">
            <div className="use-case">
              <div className="use-num">01 / Commercial Construction</div>
              <h3>Site Compliant. Washington L&amp;I Unit Count Verified. Crew Walked Onto a Legal Site.</h3>
              <p>
                Seattle's active construction market, South Lake Union's tech campus buildouts, SoDo industrial conversions, and Capitol Hill urban infill all put estimators under pressure to move fast. The problem is that Washington's WAC 296-155-140 sanitation table requires more units per crew than Oregon's standard, and most vendors quote the Oregon table by default. A crew of 25 on an Oregon site needs 1 unit. The same crew on a Seattle site requires 2. A crew of 40 in Oregon needs 2 units. In Washington, it requires 3. An under-toileted site is a WA L&I citation, and inspectors do not give advance notice.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC quotes unit counts against the actual WAC 296-155-140 table, reviews your site footprint for SDOT permit requirements, and delivers on a confirmed window before your crew arrives.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Site cleared WA L&I review. Unit count was right from day one. You never pulled out the compliance table.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">02 / Outdoor Events</div>
              <h3>All-Gender Compliant. ADA Count Met. King County Health Sign-Off Before Your First Guest Arrives.</h3>
              <p>
                Seattle's outdoor event season runs May through September, and the compliance requirements are specific to this market. Gas Works Park, Cal Anderson, and Seattle Center events require a Special Event Permit with a reviewed sanitation plan. SMC 14.07.010 requires all single-occupant restrooms to be all-gender. Units with gendered signage put your permit at risk. If your event serves food, King County health requires hot and cold running water within 200 feet of food service areas, which means pairing standard units with a heated handwashing station.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC delivers gender-neutral units as standard, confirms your ADA unit count against the 5% Seattle event minimum before booking, and includes heated handwashing stations as a standard add-on for food service events. You submit a compliant sanitation plan to the Special Events Committee, not a problem to resolve after the permit is issued.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Sanitation plan approved on first submission. All-gender units, ADA count confirmed, handwashing for food service. Nothing flagged by the committee.
              </p>
            </div>

            <div className="use-case">
              <div className="use-num">03 / Residential Remodels &amp; Multifamily Projects</div>
              <h3>Unit On Site. Service Window Inside Seattle Ordinances. No Calls From the Neighbors.</h3>
              <p>
                Seattle's dense residential neighborhoods create a problem that open-lot suburban markets do not have. Service vehicles that arrive before permitted work hours trigger neighbor complaints and, on repeat offenses, city code enforcement. One Seattle vendor was reported three times over five years for servicing units on residential blocks at 5:30 and 6:00 a.m., before the hours Seattle ordinances allow. On a six-week remodel in Ballard, Fremont, or the Central District, one incident is manageable. A pattern follows your company to the next permit application.
              </p>
              <p style={{ marginTop: '12px' }}>
                RHC schedules service within Seattle's permitted work hours for residential placements. One delivery window confirmed at booking. If anything changes before your window, you hear from RHC first.
              </p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                Unit delivered, serviced on schedule, removed when done. No ordinance complaints. No neighbor escalations.
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
              <h2 className="h-lg">Why Seattle sites and events book porta potty rentals through RHC instead of whoever answers the phone first.</h2>
            </div>
            <p>
              The pattern in nearly every 1-star portable toilet review in Seattle follows the same script: the vendor was reachable at quote time and unreachable for everything after. No compliance guidance, no confirmed delivery window, a unit count that failed a WA L&I inspection because no one checked the actual Washington table. RHC was built around all three of those failures.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h3>Every Booking Confirmed. Every Delivery on a Hard Window.</h3>
              <p>
                Seattle timelines do not have slack for a vendor who disappears between the quote and delivery day. Every RHC booking includes a three-step confirmation: site review, permit flag, and written delivery window. You receive all three before the job is booked. If anything changes before your window, you hear from RHC first, not after you have been waiting.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 01" paragraph about the three-step booking confirmation and written delivery window
                  Intended review theme: vendor confirmed delivery window / arrived on time / no surprises on delivery day
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">02</div>
              <h3>Unit Counts Quoted Against the Actual Washington L&amp;I Table.</h3>
              <p>
                Most vendors in this market quote one unit per 20 workers, which is Oregon's standard. Washington uses a stricter tiered system under WAC 296-155-140. A crew of 12 requires 2 units in Washington. A crew of 30 requires 3. An under-toileted site is a WA L&I citation with no advance warning from the inspector. Every RHC quote for a Seattle construction site is checked against this table before it is sent.
              </p>

              <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: 'var(--surface)' }}>
                      <th style={thStyle}>Crew Size</th>
                      <th style={thStyle}>Oregon (1 per 20)</th>
                      <th style={{ ...thStyle, color: 'var(--secondary)' }}>Washington WAC 296-155-140</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waTable.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          borderTop: '1px solid var(--outline-variant)',
                          background: row.highlight ? 'rgba(167,58,0,0.04)' : 'transparent',
                        }}
                      >
                        <td style={{ padding: '10px 14px', color: 'var(--on-surface)' }}>{row.crew}</td>
                        <td style={{ padding: '10px 14px', color: 'var(--on-surface-variant)' }}>{row.oregon}</td>
                        <td style={{ padding: '10px 14px', fontWeight: row.highlight ? 600 : 400, color: row.highlight ? 'var(--secondary)' : 'var(--on-surface)' }}>{row.wa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--on-surface-variant)' }}>
                Source: WAC 296-155-140 (Washington L&I). Multi-shift sites require proportionally more units under both state standards.
              </p>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the WAC 296-155-140 source note under the unit-count comparison table in "why-item 02"
                  Intended review theme: correct unit count from the start / no WA L&I issues / site stayed in compliance
                  Restore with:
                  <blockquote style={testimonialStyle.blockquote}>
                    <p style={testimonialStyle.text}>REAL REVIEW TEXT HERE</p>
                    <footer style={testimonialStyle.footer}>&#9733;&#9733;&#9733;&#9733;&#9733; · Google Review</footer>
                  </blockquote> */}
            </div>

            <div className="why-item">
              <div className="why-num">03</div>
              <h3>Seattle Compliance Knowledge Built Into Every Quote.</h3>
              <p>
                Most vendors deliver units. They do not know whether your Capitol Hill job site needs an SDOT Street Use Permit before the unit goes in the parking lane, or whether your Gas Works Park event requires all-gender signage under SMC 14.07.010. RHC reviews your site footprint and event details at booking and tells you what applies before delivery day. No permit violations discovered on site. No enforcement notices after the event.
              </p>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "why-item 03" paragraph about Seattle compliance knowledge built into every quote
                  Intended review theme: flagged the SDOT permit / no surprises on delivery day / handled the Seattle compliance details
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
              <h2 className="h-lg">Questions about portable toilet rentals in Seattle, WA.</h2>
            </div>
            <p>Everything you need before you book. Need something not covered here? Drop it in the form or call RHC directly.</p>
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
                Ready to get compliant portable toilets<br />on your Seattle site?
              </h2>
              <p>Submit your project details and RHC will come back with a confirmed quote the same day. Construction or events, standard or ADA, South Lake Union high-rise or Gas Works Park festival. WA L&I unit count reviewed and SDOT permit requirements flagged before the truck rolls.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Quote back the same day.</span>
              </div>

              <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--secondary-fixed-dim)' }}>
                The quote RHC sends is the number on your invoice. No fuel surcharges. No line items added after delivery.
              </p>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "The quote RHC sends is the number on your invoice" paragraph in the Get Started section
                  Intended review theme: easy booking / same-day quote / unit arrived on time / would use RHC again
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
              defaultService="Standard, Deluxe, ADA, or High-Rise Portable Toilets"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
