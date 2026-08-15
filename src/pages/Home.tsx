import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { business, faqPage, graph } from '../seo/schema'
import LeadForm from '../components/LeadForm'
import heroImg from '../assets/general/hero.webp'
import portaPottyRow from '../assets/portable-toilets/porta-potty2.webp'
import restroomTrailerImg from '../assets/restroom-trailers/restroom-trailer1.webp'
import fencePerimeterImg from '../assets/temporary-fencing/fence2.webp'
import conexContainerImg from '../assets/storage-containers/conex_container.webp'
import showerSuiteImg from '../assets/shower-trailers/shower-trailer1.webp'
import step01Img from '../assets/general/request.webp'
import step02Img from '../assets/general/scheduling.webp'
import step03Img from '../assets/general/delivery.webp'
import step04Img from '../assets/general/pickup.webp'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const mapCities: { name: string; coords: [number, number]; hq: boolean; anchor: 'start' | 'middle' | 'end'; dx: number; dy: number }[] = [
  { name: 'Seattle',       coords: [-122.3321, 47.6062], hq: false, anchor: 'middle', dx: 0,  dy: -10 },
  { name: 'Tacoma',        coords: [-122.4443, 47.2529], hq: false, anchor: 'start',  dx: 8,  dy: 4   },
  { name: 'Vancouver',     coords: [-122.6615, 45.6387], hq: false, anchor: 'start',  dx: 8,  dy: 4   },
  { name: 'Portland · HQ', coords: [-122.6765, 45.46],   hq: true,  anchor: 'end',   dx: -8, dy: 4   },
  { name: 'Gresham',       coords: [-122.4302, 45.4984], hq: false, anchor: 'start',  dx: 8,  dy: 4   },
  { name: 'Salem',         coords: [-123.0351, 44.9429], hq: false, anchor: 'end',   dx: -8, dy: 4   },
  { name: 'Eugene',        coords: [-123.0868, 44.0521], hq: false, anchor: 'end',   dx: -8, dy: 4   },
  { name: 'Bend',          coords: [-121.3153, 44.0582], hq: false, anchor: 'start',  dx: 8,  dy: 4   },
]

const cityServices: Record<string, { label: string; to: string }[]> = {
  Portland: [
    { label: 'Porta Potty Rental', to: '/porta-potty-rental-portland-or' },
    { label: 'Restroom Trailers', to: '/restroom-trailer-rental-portland-or' },
    { label: 'Temporary Fencing', to: '/temporary-fencing-rental-portland-or' },
  ],
  Bend: [
    { label: 'Porta Potty Rental', to: '/porta-potty-rental-bend-or' },
    { label: 'Restroom Trailers', to: '/restroom-trailer-rental-bend-or' },
    { label: 'Temporary Fencing', to: '/temporary-fencing-rental-bend-or' },
  ],
  Seattle: [
    { label: 'Porta Potty Rental', to: '/porta-potty-rental-seattle-wa' },
    { label: 'Restroom Trailers', to: '/restroom-trailer-rental-seattle-wa' },
    { label: 'Temporary Fencing', to: '/temporary-fencing-rental-seattle-wa' },
  ],
}

const homeCities = [
  { name: 'Salem',     state: 'OR', hq: false },
  { name: 'Portland',  state: 'OR', hq: true  },
  { name: 'Eugene',    state: 'OR', hq: false },
  { name: 'Bend',      state: 'OR', hq: false },
  { name: 'Gresham',   state: 'OR', hq: false },
  { name: 'Tacoma',    state: 'WA', hq: false },
  { name: 'Vancouver', state: 'WA', hq: false },
  { name: 'Seattle',   state: 'WA', hq: false },
]

// Lifted out of the JSX verbatim so the FAQ section and the FAQPage markup
// below can never say different things. Every other page already works this way.
const homeFaqs = [
  {
    q: 'How fast can you actually deliver?',
    a: "Standard turnaround is 48 hours from confirmed booking to on-site. In our core Pacific Northwest service areas (Salem, Portland, Bend, Seattle) we routinely book next-day. Same-day deliveries are case-by-case and confirmed only after RHC has verified the route. We will never promise a window we can't hit.",
  },
  {
    q: 'Why is there no pricing on your website?',
    a: 'Because rental price depends on five variables most calculators ignore: ZIP, service frequency, duration, road access for our drivers, and any local permitting. Posting a generic price online would force us to either pad it (so we can absorb edge cases) or under-promise and bill the difference later. Both are the kind of behavior we built RHC to avoid. A hard quote in one business hour is better than a fake number in one click.',
  },
  {
    q: 'If something goes wrong on delivery day, who do I actually call?',
    a: 'RHC. One number, one invoice, one person who already knows your site. Before delivery day you get three things in writing: what is arriving, exactly where it goes, and the window it arrives in. If any of that is wrong, you call RHC and RHC fixes it. You will not get a ticket number, and you will not be asked to sort out whose fault it was. Rafa has worked on Pacific Northwest job sites since 2016, and every job runs to the same standard, whether it is one unit on a driveway or a full site package.',
  },
  {
    q: 'Do you service residential remodels, or only commercial?',
    a: "Both. A single porta potty for a 6-month backyard ADU build and a 10-stall restroom trailer for a 5,000-guest festival both go through the same RHC team and the same operational standard. Smaller doesn't mean lower priority, it means a faster phone call.",
  },
  {
    q: "What's included in a rental, and what isn't?",
    a: 'Quote includes: delivery, equipment, scheduled servicing or swap-outs at the cadence you choose, and haul-back. Quote excludes: city or county permits (we\'ll tell you if you need one), and any damage outside normal wear. There are no "environmental fees," fuel surcharges, or back-end add-ons. If it\'s not on the quote, you won\'t see it on the invoice.',
  },
  {
    q: 'Can I extend my rental mid-job?',
    a: "Yes. One call or one email to RHC and we extend at the same daily, weekly, or monthly rate on your original quote. We won't surprise-rate you because your project ran two weeks long.",
  },
]

// The homepage carries the canonical business node; every other page emits the
// identical one from the same constant.
const schema = graph([business, faqPage(homeFaqs)])

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  return (
    <main id="main">
      <Helmet>
        <title>Portable Toilet &amp; Site Equipment Rental in Oregon &amp; Washington | RHC Site Services</title>
        <meta name="description" content="Porta potty, restroom trailer, shower trailer, temporary fencing, and storage container rentals across Oregon and Washington. Hard delivery windows. No surprise fees." />
        <link rel="canonical" href="https://rhcsiteservice.com/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── HERO + STAT STRIP (fills full viewport below nav) ───────────── */}
      <div className="hero-viewport">
      <section className="hero hero--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow-row">
              <span className="eyebrow">For GCs, PMs &amp; Event Organizers in Oregon &amp; Washington</span>
            </div>
            <h1 className="h-xl">
              The equipment you ordered. Placed <span className="underline accent">exactly</span> where you need it. On-site before your crew clocks in.
            </h1>
            <p className="hero-sub body-lg">
              Most site service companies ghost your delivery window, skip scheduled pumpings when it rains, and hit you with a surprise "environmental fee" on the final invoice. RHC Site Services delivers clean, inspection-verified equipment from Seattle to Bend with 100% transparent pricing and guaranteed, on-time mobilization.
            </p>

            <ul className="triggers" role="list">
              <li>
                <div className="trig-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
                    <path d="M4 7h16M4 12h16M4 17h10" /><circle cx="19" cy="17" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="trig-title">One Point of Contact</div>
                  <div className="trig-body">Every piece of equipment on your site is vetted, inspected, and delivered by one accountable team. No excuse chains.</div>
                </div>
              </li>
              <li>
                <div className="trig-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
                    <circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <div>
                  <div className="trig-title">Same-Day Response</div>
                  <div className="trig-body">Guaranteed quote in your inbox before 5:00 PM today.</div>
                </div>
              </li>
              <li>
                <div className="trig-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
                    <rect x="4" y="4" width="16" height="16" /><path d="M8 9h8M8 13h8M8 17h5" />
                  </svg>
                </div>
                <div>
                  <div className="trig-title">Zero Surprise Fees</div>
                  <div className="trig-body">The price on your quote is the exact number on your invoice.</div>
                </div>
              </li>
            </ul>
          </div>{/* end hero-text */}

          <div className="hero-form-card">
            <p className="hero-form-heading">Get a Same-Day Quote</p>
            <p className="hero-form-sub">Tell us your service, location, and dates. We respond the same business day.</p>
            <LeadForm id="quote-hero" variant="hero" />
          </div>
          </div>{/* end hero-grid */}
        </div>
      </section>

      {/* ── STAT STRIP ───────────────────────────────────────────────────── */}
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

      </div>{/* end hero-viewport */}

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / The Fleet</div>
              <h2 className="h-lg">Stop managing five different sub-contractors just to break ground.</h2>
            </div>
            <p>Chasing down separate vendors for fences, toilets, trailers, and storage is a logistical nightmare. When one vendor shows up late, your entire critical path gets derailed while your subcontractors sit around billing you $85/hour for dead time. RHC eliminates the friction. <strong style={{ color: 'var(--on-surface)', fontWeight: 600 }}>One contract, one point of contact, one coordinated drop-off.</strong></p>
          </div>

          <div className="services">
            <Link to="/portable-toilets" className="service">
              <div className="service-photo"><img src={portaPottyRow} width={1800} height={847} alt="Row of portable toilets" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">01 / Sanitation</div>
                <h3>On-Time Portable Sanitation</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>We deliver immaculate, deep-scrubbed Standard, Deluxe, and ADA-compliant units that don't smell like a marketing afterthought.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The RHC Standard</div>
                  <p>Locked down securely against high regional winds and serviced on a strict, unbreakable pump-and-sanitize schedule, even in freezing I-5 winter mud.</p>
                </div>
                <span className="service-link">Spec a Unit <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link to="/restroom-trailers" className="service">
              <div className="service-photo"><img src={restroomTrailerImg} width={1140} height={1140} alt="Luxury restroom trailer" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">02 / Event Grade</div>
                <h3>Luxury Restroom &amp; Shower Suites</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>Climate-controlled, multi-stall bathroom and hot-water shower trailers with residential-grade porcelain flushing toilets and running water.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The RHC Standard</div>
                  <p>Built for off-grid weddings and vineyard retreats. Equipped with onboard water tanks and whisper-quiet power generation that won't drown out speeches or music.</p>
                </div>
                <span className="service-link">View Trailers <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link to="/temporary-fencing" className="service">
              <div className="service-photo"><img src={fencePerimeterImg} width={500} height={500} alt="Chain-link perimeter fencing" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">03 / Perimeter</div>
                <h3>Heavy-Duty Temporary Fencing</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>6×12 industrial-grade perimeter panels. You choose the mounting: heavily weighted standalone bases or post-driven directly into the soil.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The RHC Standard</div>
                  <p>Delivered and installed perfectly straight to ensure strict city compliance and immediate site security from day one.</p>
                </div>
                <span className="service-link">Specify Job <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link to="/storage-containers" className="service">
              <div className="service-photo"><img src={conexContainerImg} width={800} height={800} alt="40ft steel shipping container on job site" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">04 / Secure Storage</div>
                <h3>Weatherproof Steel Storage Containers</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>All-steel, dry, secure 20ft and 40ft ocean cargo sea-cans fitted with heavy-duty locking mechanisms.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The RHC Standard</div>
                  <p>Keeps expensive tools, dry materials, and heavy equipment protected from torrential Pacific Northwest rain and overnight site theft.</p>
                </div>
                <span className="service-link">Size a Unit <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link to="/shower-trailers" className="service">
              <div className="service-photo"><img src={showerSuiteImg} width={1250} height={1250} alt="Luxury shower trailer deployed at outdoor event" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">05 / Shower</div>
                <h3>Luxury Shower Suites</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>Hot-water shower trailers with private stalls, climate control, and onboard water tanks built for multi-day outdoor events and remote job sites.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The RHC Standard</div>
                  <p>Reliable hot water and solid water pressure in any Pacific Northwest condition, from Cascade foothills to coastal festival grounds.</p>
                </div>
                <span className="service-link">View Shower Suites <span className="arrow">→</span></span>
              </div>
            </Link>

            <a href="#quote" className="service service-cta">
              <div className="service-photo">
                <div className="placeholder cta-placeholder">
                  <div className="cta-mark" aria-hidden="true">+</div>
                  <span className="ph-tag">Coordinated Drop · 5 Categories</span>
                </div>
              </div>
              <div className="service-body">
                <div className="mono-num">06 / Bundle</div>
                <h3>Need everything on one truck schedule?</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px', margin: 0 }}>Tell RHC the full scope of your job. We'll coordinate the drop-off sequence so your fence, toilets, and containers arrive in the order your crew actually needs them.</p>
                <span className="service-link" style={{ color: 'var(--secondary)' }}>Request a Bundle Quote <span className="arrow">→</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how" className="how">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">03 / Method</div>
              <h2 className="h-lg">Getting equipment on site is <span className="accent">simpler</span> than you think.</h2>
            </div>
            <p>Four steps from quote to cleanup. One RHC contact handles the logistics so your crew doesn't have to babysit a vendor.</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-left">
                <div className="step-num">01</div>
                <div className="step-line" aria-hidden="true"></div>
              </div>
              <div className="step-right">
                <h3>Tell us what you need</h3>
                <p>Fill out our short form. Let us know your service, location, and dates. It takes less than 60 seconds.</p>
                <img src={step01Img} width={1200} height={1200} alt="Submitting a quote request online" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
              </div>
            </div>
            <div className="step">
              <div className="step-left">
                <div className="step-num">02</div>
                <div className="step-line" aria-hidden="true"></div>
              </div>
              <div className="step-right">
                <h3>We confirm &amp; schedule everything</h3>
                <p>Our team reviews your request, confirms equipment availability for your location and dates, and handles all the logistics so you don't have to.</p>
                <img src={step02Img} width={1200} height={1200} alt="Scheduling and confirming equipment delivery" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
              </div>
            </div>
            <div className="step">
              <div className="step-left">
                <div className="step-num">03</div>
                <div className="step-line" aria-hidden="true"></div>
              </div>
              <div className="step-right">
                <h3>Equipment delivered on time</h3>
                <p>Your equipment shows up when and where it needs to be. No chasing, no follow-up calls, no last-minute surprises.</p>
                <img src={step03Img} width={900} height={900} alt="Equipment delivered on time to site" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
              </div>
            </div>
            <div className="step">
              <div className="step-left">
                <div className="step-num">04</div>
                <div className="step-line" aria-hidden="true"></div>
              </div>
              <div className="step-right">
                <h3>We handle the pickup</h3>
                <p>When your rental period ends, our team comes back to remove the equipment and leave your site clean. You don't lift a finger.</p>
                <img src={step04Img} width={1200} height={654} alt="Equipment picked up and site cleared" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
              </div>
            </div>
          </div>

          <div className="how-cta">
            <a href="#quote" className="btn btn-primary">Start With a Free Quote →</a>
            <span className="how-cta-note">No obligation · Same-day response from RHC.</span>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE RHC ───────────────────────────────────────────────── */}
      <section id="why" className="why">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">04 / The Standard</div>
              <h2 className="h-lg">The 3 industry lies<br />we refuse to tell you.</h2>
            </div>
            <p>If you've rented site equipment before, you already know how this goes. Most operators take your deposit, promise you the world, and deliver a masterclass in poor communication the second a dark cloud rolls over the I-5 corridor. RHC Site Services exists to fix the three failures that define this industry.</p>
          </div>

          <div className="lies">
            <article className="lie">
              <header className="lie-head">
                <div className="lie-num">01</div>
                <div className="lie-quote">
                  <div className="lie-label"><span className="strike"></span>The Industry Lie</div>
                  <blockquote>"We'll be there sometime between 7:00 AM and 5:00 PM."</blockquote>
                </div>
              </header>
              <div className="lie-grid">
                <div className="lie-col">
                  <div className="lie-label muted"><span className="strike"></span>What most operators do</div>
                  <p>They leave your project manager completely blind on delivery windows. Your crew is on the clock, heavy equipment is idling, and you're bleeding labor costs while a truck shows up six hours late with zero communication from the front office.</p>
                </div>
                <div className="lie-col lie-standard">
                  <div className="lie-label"><span className="strike"></span>The RHC Standard</div>
                  <p>We give you <strong>hard, predictable arrival windows</strong>. If a delay occurs, you're notified immediately. <strong>No ghosting your crew, ever.</strong></p>
                </div>
              </div>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: closing the "01 / delivery windows" lie-vs-standard block.
                  Intended review theme: hard arrival window honored, equipment staged where marked, no second call needed.
                  Restore with:
                  <div className="lie-pullquote">
                    <div className="lie-pullquote-mark" aria-hidden="true">"</div>
                    <blockquote>REAL REVIEW TEXT HERE</blockquote>
                    <div className="lie-pullquote-tag">NAME · ROLE · CITY</div>
                  </div> */}
            </article>

            <article className="lie">
              <header className="lie-head">
                <div className="lie-num">02</div>
                <div className="lie-quote">
                  <div className="lie-label"><span className="strike"></span>The Industry Lie</div>
                  <blockquote>"The price on the initial quote was just a baseline estimate."</blockquote>
                </div>
              </header>
              <div className="lie-grid">
                <div className="lie-col">
                  <div className="lie-label muted"><span className="strike"></span>What most operators do</div>
                  <p>They draw you in with a low number, then hit you with surprise line items on the final invoice: mandatory "environmental compliance fees," unvouched fuel surcharges, delivery damage waivers. None of it disclosed upfront.</p>
                </div>
                <div className="lie-col lie-standard">
                  <div className="lie-label"><span className="strike"></span>The RHC Standard</div>
                  <p><strong>The number you approve on day one is the number you pay when the job is done.</strong> No hidden fees. No surprise additions.</p>
                </div>
              </div>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: closing the "02 / quote matches invoice" lie-vs-standard block.
                  Intended review theme: quoted number matched the final invoice, no back-end fees or surcharges.
                  Restore with:
                  <div className="lie-pullquote">
                    <div className="lie-pullquote-mark" aria-hidden="true">"</div>
                    <blockquote>REAL REVIEW TEXT HERE</blockquote>
                    <div className="lie-pullquote-tag">NAME · ROLE · CITY</div>
                  </div> */}
            </article>

            <article className="lie" style={{ borderBottom: 0 }}>
              <header className="lie-head">
                <div className="lie-num">03</div>
                <div className="lie-quote">
                  <div className="lie-label"><span className="strike"></span>The Industry Lie</div>
                  <blockquote>"It's a temporary toilet on a dirt lot, it's supposed to smell."</blockquote>
                </div>
              </header>
              <div className="lie-grid">
                <div className="lie-col">
                  <div className="lie-label muted"><span className="strike"></span>What most operators do</div>
                  <p>They skip service loops when it rains, or deliver "luxury event trailers" with broken water pumps, dead AC units, and generators that blow a circuit breaker halfway through a winery reception.</p>
                </div>
                <div className="lie-col lie-standard">
                  <div className="lie-label"><span className="strike"></span>The RHC Standard</div>
                  <p>Every unit is <strong>confirmed clean, sanitized, and fully operational</strong> before it arrives on your site, whether it's a standard unit on a commercial remodel or a multi-stall suite for a high-end event.</p>
                </div>
              </div>
              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: closing the "03 / unit cleanliness" lie-vs-standard block.
                  Intended review theme: units arrived immaculate, service was unobtrusive, event ran without a restroom complaint.
                  Restore with:
                  <div className="lie-pullquote">
                    <div className="lie-pullquote-mark" aria-hidden="true">"</div>
                    <blockquote>REAL REVIEW TEXT HERE</blockquote>
                    <div className="lie-pullquote-tag">NAME · ROLE · CITY</div>
                  </div> */}
            </article>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────────────────── */}
      <section id="areas">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">05 / Coverage</div>
              <h2 className="h-lg">Serving Oregon<br />and Washington.</h2>
            </div>
            <p>Based in Portland, we deliver site services to construction sites, events, and projects across the Pacific Northwest.</p>
          </div>

          <div className="areas">
            <div className="map-card">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [-120.5, 45.5], scale: 2800 }}
                width={600}
                height={450}
                style={{ width: '100%', height: '100%' }}
                aria-hidden="true"
              >
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(17,28,45,.06)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="600" height="450" fill="#f0f3ff" />
                <rect width="600" height="450" fill="url(#map-grid)" />

                <Geographies geography={GEO_URL}>
                  {({ geographies }: { geographies: any[] }) =>
                    geographies
                      .filter((geo: any) => ['06', '16', '30', '32', '41', '53'].includes(String(geo.id)))
                      .map((geo: any) => {
                        const isPrimary = geo.id === '41' || geo.id === '53'
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={isPrimary ? 'rgba(17,28,45,.07)' : 'rgba(17,28,45,.03)'}
                            stroke={isPrimary ? 'rgba(17,28,45,.2)' : 'rgba(17,28,45,.1)'}
                            strokeWidth={1}
                            style={{ outline: 'none' }}
                          />
                        )
                      })
                  }
                </Geographies>

                {mapCities.map(city => (
                  <Marker key={city.name} coordinates={city.coords}>
                    <circle
                      r={city.hq ? 6 : 4}
                      fill={city.hq ? '#fd651e' : '#1d2b3e'}
                      stroke="#f9f9ff"
                      strokeWidth={2}
                    />
                    <text
                      textAnchor={city.anchor}
                      dx={city.dx}
                      dy={city.dy}
                      fontFamily="JetBrains Mono, monospace"
                      fontSize={9}
                      fill={city.hq ? '#a73a00' : 'rgba(17,28,45,.75)'}
                      letterSpacing="0.05em"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      {city.name}
                    </text>
                  </Marker>
                ))}

                <text x="10" y="442" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(17,28,45,.35)" letterSpacing="1">RHC SERVICE AREA</text>
              </ComposableMap>
            </div>

            <div>
              <div className="city-tags">
                {homeCities.map(city => {
                  const hasServices = !!cityServices[city.name]
                  const isSelected = selectedCity === city.name
                  const cls = `city-tag${city.hq ? ' is-hq' : ''}${isSelected ? ' is-selected' : ''}`
                  const label = city.hq ? `${city.state} · HQ` : city.state
                  return hasServices ? (
                    <button
                      key={city.name}
                      className={cls}
                      onClick={() => setSelectedCity(isSelected ? null : city.name)}
                      aria-expanded={isSelected}
                    >
                      <span className="city-name">{city.name}</span>
                      <span className="city-state">{label}</span>
                    </button>
                  ) : (
                    <a key={city.name} href="#quote" className={cls}>
                      <span className="city-name">{city.name}</span>
                      <span className="city-state">{label}</span>
                    </a>
                  )
                })}
              </div>

              {selectedCity && cityServices[selectedCity] && (
                <div className="city-services-panel">
                  <div className="city-services-header">
                    <span className="city-services-title">{selectedCity} Services</span>
                    <button className="city-services-close" onClick={() => setSelectedCity(null)} aria-label="Close">✕</button>
                  </div>
                  <div className="city-services-links">
                    {cityServices[selectedCity].map(link => (
                      <Link key={link.to} to={link.to} className="city-service-link">
                        {link.label} <span className="arrow">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div className="area-foot">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--secondary)', letterSpacing: '.08em', textTransform: 'uppercase', flexShrink: 0 }}>i</div>
                <p><strong>Don't see your city listed?</strong> Fill out the form. We're actively expanding and may still be able to serve your location.</p>
              </div>
              <a href="#quote" className="btn btn-primary" style={{ marginTop: '24px' }}>Get a Quote for Your Location →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06 SLOT: currently empty ──────────────────────────────
          Position: between "05 / Coverage" (the service-area map) and
          "07 / FAQ". This is the homepage's social-proof slot. In the
          messaging hierarchy it answers "am I alone in caring, or do others
          like me use this?", so whatever fills it has to answer that.

          What was here: a section titled "06 / Field Reports" holding a
          3-quote carousel with prev/next arrows. Removed 2026-07-27 because
          the three quotes were fabricated, invented customers with invented
          names and job titles, which is not something to restore.

          Refill options, in order of preference:
          1. Real customer reviews once Rafa's review drip produces them.
             Restore the carousel markup below and the `testimonials` array
             (quote / name / role) plus `const [tcIndex, setTcIndex] =
             useState(0)` and the `useState` import, all removed with it.
          2. Interim: Rafa's verified track record (years in the trade,
             delivery volume, job sites served). Answers the same hierarchy
             question through volume rather than quotes. Needs real numbers
             from Rafa; do not invent any.

          Carousel markup to restore:
          <section className="testimonials" id="reviews">
            <div className="container">
              <div className="section-head">
                <div className="head-lead">
                  <div className="eyebrow">06 / Field Reports</div>
                  <h2 className="h-lg">HEADLINE</h2>
                </div>
                <p>INTRO</p>
              </div>
              <div className="tc-carousel">
                <div className="tc-divider" aria-hidden="true" />
                <blockquote className="tc-quote">&ldquo;{testimonials[tcIndex].quote}&rdquo;</blockquote>
                <div className="tc-author">
                  <strong>{testimonials[tcIndex].name}</strong>
                  <span>{testimonials[tcIndex].role}</span>
                </div>
                <div className="tc-divider" aria-hidden="true" />
                <div className="tc-nav">
                  <button className={`tc-arrow${tcIndex === 0 ? ' tc-arrow--off' : ''}`} onClick={() => setTcIndex(i => i - 1)} disabled={tcIndex === 0} aria-label="Previous testimonial">←</button>
                  <button className={`tc-arrow${tcIndex === testimonials.length - 1 ? ' tc-arrow--off' : ''}`} onClick={() => setTcIndex(i => i + 1)} disabled={tcIndex === testimonials.length - 1} aria-label="Next testimonial">→</button>
                </div>
              </div>
            </div>
          </section>

          Nothing links to #reviews, so the anchor can stay retired until
          this slot is refilled. The .testimonials and .tc-* styles are
          untouched in src/rhc-design.css. ────────────────────────────── */}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">07 / FAQ</div>
              <h2 className="h-lg">Questions we answer<br />before you have to ask.</h2>
            </div>
            <p>The short version of everything RHC gets asked at 6:45am on a Monday. Need something not here? Drop it in the quote form and a person will answer.</p>
          </div>

          <div className="faq-list">
            {homeFaqs.map((faq, i) => (
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

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="final-cta" id="quote">
        <div className="stripe" aria-hidden="true"></div>
        <div className="container">
          <div className="final-cta-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--secondary-fixed-dim)' }}>08 / Get Started</div>
              <h2 className="h-lg" style={{ marginTop: '24px' }}>Ready to get<br />equipment on site?</h2>
              <p>Submit your request and we'll get back to you the same day.</p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Fast response.</span>
              </div>

              <a href="tel:+15036077412" className="final-phone">
                <div>
                  <div className="final-phone-label">Or call RHC</div>
                  <div className="final-phone-num">503&#8209;607&#8209;7412</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </a>
            </div>

            <LeadForm id="quote-final" variant="final" />
          </div>
        </div>
      </section>

    </main>
  )
}
