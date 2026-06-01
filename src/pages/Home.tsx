import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LeadForm from '../components/LeadForm'
import portaPottyRow from '../assets/porta-potty2.webp'
import restroomTrailerImg from '../assets/restroom-trailer1.webp'
import fencePerimeterImg from '../assets/fence2.webp'
import conexContainerImg from '../assets/conex_container.webp'
import rollOffOnPlanksImg from '../assets/dumpster.webp'
import step01Img from '../assets/request.webp'
import step02Img from '../assets/scheduling.webp'
import step03Img from '../assets/delivery.webp'
import step04Img from '../assets/pickup.webp'

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

const testimonials = [
  {
    quote: "We had a tight mobilization window on a mixed-use project in SE Portland. I've been burned by delivery delays before, so I asked for a hard arrival window and a backup contact. Got both. Equipment was staged exactly where our site manager marked it. First vendor in three years who didn't need a second call.",
    name: 'Tom C.',
    role: 'Project Superintendent · Commercial Site Mobilization · Portland, OR',
  },
  {
    quote: "We run outdoor events at a property in the Willamette Valley and the trailer situation is always what I'm most stressed about. Last July we had 200 guests and nobody complained once — which is the highest compliment I can give. The units were immaculate, the service was quiet, and the generator didn't make a sound all night.",
    name: 'Kristen M.',
    role: 'Event Coordinator · Estate & Winery Events · Salem, OR',
  },
  {
    quote: "We've used RHC on two jobs — a ground-up commercial build in Gresham and a site remediation in Tacoma. Both times the quote matched the invoice exactly. No environmental compliance fee tacked on the back end, no fuel surcharge I didn't approve. That's rarer than it should be in this industry.",
    name: 'Mike A.',
    role: 'Senior Estimator · Civil Infrastructure · Portland, OR',
  },
]

export default function Home() {
  const [tcIndex, setTcIndex] = useState(0)

  return (
    <main id="main">
      <Helmet>
        <title>Portable Toilet &amp; Site Equipment Rental in Oregon &amp; Washington | RHC Site Services</title>
        <meta name="description" content="Porta potty, restroom trailer, temporary fencing, storage container, shower trailer, and roll-off dumpster rentals across Oregon and Washington. Hard delivery windows. No surprise fees." />
        <link rel="canonical" href="https://rhcsiteservices.com/" />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero" style={{ borderBottom: '1px solid var(--outline-variant)' }}>
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">For GCs, PMs &amp; Event Organizers in Oregon &amp; Washington</span>
              </div>
              <h1 className="h-xl">
                The equipment you ordered. Placed <span className="underline accent">exactly</span> where you need it. On-site before your crew clocks in.
              </h1>
              <p className="hero-sub body-lg">
                Most site service companies ghost your delivery window, skip scheduled pumpings when it rains, and hit you with a surprise "environmental fee" on the final invoice. RHC Site Services dispatches clean, inspection-verified equipment from Seattle to Bend with 100% transparent pricing and guaranteed, on-time mobilization.
              </p>

              <ul className="triggers" role="list">
                <li>
                  <div className="trig-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
                      <path d="M4 7h16M4 12h16M4 17h10" /><circle cx="19" cy="17" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="trig-title">No Broker Lag</div>
                    <div className="trig-body">Every piece of equipment on your site is vetted, inspected, and dispatched from a single point of accountability. No excuse chains.</div>
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
            </div>

            <LeadForm id="quote" variant="hero" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">02 / The Fleet</div>
              <h2 className="h-lg">Stop managing five different sub-contractors just to break ground.</h2>
            </div>
            <p>Chasing down separate vendors for fences, toilets, dumpsters, and storage is a logistical nightmare. When one vendor shows up late, your entire critical path gets derailed while your subcontractors sit around billing you $85/hour for dead time. RHC eliminates the friction. <strong style={{ color: 'var(--on-surface)', fontWeight: 600 }}>One contract, one point of contact, one coordinated drop-off.</strong></p>
          </div>

          <div className="services">
            <Link to="/portable-toilets" className="service">
              <div className="service-photo"><img src={portaPottyRow} alt="Row of portable toilets" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">01 / Sanitation</div>
                <h3>On-Time Portable Sanitation</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>We deliver immaculate, deep-scrubbed Standard, Deluxe, and ADA-compliant units that don't smell like a marketing afterthought.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The PNW Standard</div>
                  <p>Locked down securely against high regional winds and serviced on a strict, unbreakable pump-and-sanitize schedule — even in freezing I-5 winter mud.</p>
                </div>
                <span className="service-link">Spec a Unit <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link to="/restroom-trailers" className="service">
              <div className="service-photo"><img src={restroomTrailerImg} alt="Luxury restroom trailer" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">02 / Event Grade</div>
                <h3>Luxury Restroom &amp; Shower Suites</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>Climate-controlled, multi-stall bathroom and hot-water shower trailers with residential-grade porcelain flushing toilets and running water.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The PNW Standard</div>
                  <p>Built for off-grid weddings and vineyard retreats. Equipped with onboard water tanks and whisper-quiet power generation that won't drown out speeches or music.</p>
                </div>
                <span className="service-link">View Trailers <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link to="/temporary-fencing" className="service">
              <div className="service-photo"><img src={fencePerimeterImg} alt="Chain-link perimeter fencing" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">03 / Perimeter</div>
                <h3>Heavy-Duty Temporary Fencing</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>6×12 industrial-grade perimeter panels. You choose the mounting: heavily weighted standalone bases or post-driven directly into the soil.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The PNW Standard</div>
                  <p>Delivered and installed perfectly straight to ensure strict city compliance and immediate site security from day one.</p>
                </div>
                <span className="service-link">Specify Job <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link to="/storage-containers" className="service">
              <div className="service-photo"><img src={conexContainerImg} alt="40ft steel shipping container on job site" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">04 / Secure Storage</div>
                <h3>Weatherproof Steel Storage Containers</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>All-steel, dry, secure 20ft and 40ft ocean cargo sea-cans fitted with heavy-duty locking mechanisms.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The PNW Standard</div>
                  <p>Keeps expensive tools, dry materials, and heavy equipment protected from torrential Pacific Northwest rain and overnight site theft.</p>
                </div>
                <span className="service-link">Size a Unit <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link to="/roll-off-dumpsters" className="service">
              <div className="service-photo"><img src={rollOffOnPlanksImg} alt="Roll-off dumpster on planks in driveway" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
              <div className="service-body">
                <div className="mono-num">05 / Debris</div>
                <h3>Roll-Off Debris Dumpsters</h3>
                <div className="svc-block">
                  <div className="svc-label">The Reality</div>
                  <p>High-capacity, open-top roll-off bins dropped precisely on planks to protect asphalt or turf from structural damage.</p>
                </div>
                <div className="svc-block svc-block-accent">
                  <div className="svc-label">The PNW Standard</div>
                  <p>Sized perfectly for heavy commercial demolition management or rapid residential estate cleanouts, then hauled away the moment you text us.</p>
                </div>
                <span className="service-link">Pick a Size <span className="arrow">→</span></span>
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
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px', margin: 0 }}>Tell dispatch the full scope of your job. We'll coordinate the drop-off sequence so your fence, toilets, container, and dumpster arrive in the order your crew actually needs them.</p>
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
            <p>Four steps from quote to cleanup. One dispatcher handles the logistics so your crew doesn't have to babysit a vendor.</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-left">
                <div className="step-num">01</div>
                <div className="step-line" aria-hidden="true"></div>
              </div>
              <div className="step-right">
                <h3>Tell us what you need</h3>
                <p>Fill out our short form. Let us know your service, location, and dates — it takes less than 60 seconds.</p>
                <img src={step01Img} alt="Submitting a quote request online" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
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
                <img src={step02Img} alt="Scheduling and confirming equipment delivery" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
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
                <img src={step03Img} alt="Equipment delivered on time to site" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
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
                <img src={step04Img} alt="Equipment picked up and site cleared" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
              </div>
            </div>
          </div>

          <div className="how-cta">
            <a href="#quote" className="btn btn-primary">Start With a Free Quote →</a>
            <span className="how-cta-note">No obligation · Same-day response from PNW dispatch.</span>
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
                  <p>We give you <strong>hard, predictable arrival windows</strong>. If a delay occurs, you're notified immediately — <strong>no ghosting your crew, ever.</strong></p>
                </div>
              </div>
              <div className="lie-pullquote">
                <div className="lie-pullquote-mark" aria-hidden="true">"</div>
                <blockquote>They showed up before my crew did. I asked for a hard arrival window and a backup contact — got both. Equipment was staged exactly where our site manager marked it. First vendor in three years who didn't need a second call.</blockquote>
                <div className="lie-pullquote-tag">Tom C. · Project Superintendent · Portland, OR</div>
              </div>
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
                  <p>They draw you in with a low number, then hit you with surprise line items on the final invoice — mandatory "environmental compliance fees," unvouched fuel surcharges, delivery damage waivers. None of it disclosed upfront.</p>
                </div>
                <div className="lie-col lie-standard">
                  <div className="lie-label"><span className="strike"></span>The RHC Standard</div>
                  <p><strong>The number you approve on day one is the number you pay when the job is done.</strong> No hidden fees. No surprise additions.</p>
                </div>
              </div>
              <div className="lie-pullquote">
                <div className="lie-pullquote-mark" aria-hidden="true">"</div>
                <blockquote>We've used RHC on two jobs now. Both times the quote matched the invoice exactly. No environmental compliance fee added on the back end, no fuel surcharge I didn't approve. That's rarer than it should be in this industry.</blockquote>
                <div className="lie-pullquote-tag">Mike A. · Senior Estimator · Portland, OR</div>
              </div>
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
                  <p>Every unit is <strong>confirmed clean, sanitized, and fully operational</strong> before it arrives on your site — whether it's a standard unit on a commercial remodel or a multi-stall suite for a high-end event.</p>
                </div>
              </div>
              <div className="lie-pullquote">
                <div className="lie-pullquote-mark" aria-hidden="true">"</div>
                <blockquote>We had 200 guests and I genuinely forgot the restrooms were even out there — which is the highest compliment I can give. The units were immaculate, the service was quiet, and the generator didn't make a sound all night.</blockquote>
                <div className="lie-pullquote-tag">Kristen M. · Event Coordinator · Salem, OR</div>
              </div>
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
                <a href="#" className="city-tag"><span className="city-name">Salem</span><span className="city-state">OR</span></a>
                <a href="#" className="city-tag is-hq"><span className="city-name">Portland</span><span className="city-state">OR · HQ</span></a>
                <a href="#" className="city-tag"><span className="city-name">Eugene</span><span className="city-state">OR</span></a>
                <a href="#" className="city-tag"><span className="city-name">Bend</span><span className="city-state">OR</span></a>
                <a href="#" className="city-tag"><span className="city-name">Gresham</span><span className="city-state">OR</span></a>
                <a href="#" className="city-tag"><span className="city-name">Tacoma</span><span className="city-state">WA</span></a>
                <a href="#" className="city-tag"><span className="city-name">Vancouver</span><span className="city-state">WA</span></a>
                <a href="#" className="city-tag"><span className="city-name">Seattle</span><span className="city-state">WA</span></a>
              </div>
              <div className="area-foot">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--secondary)', letterSpacing: '.08em', textTransform: 'uppercase', flexShrink: 0 }}>i</div>
                <p><strong>Don't see your city listed?</strong> Fill out the form — we're actively expanding and may still be able to serve your location.</p>
              </div>
              <a href="#quote" className="btn btn-primary" style={{ marginTop: '24px' }}>Get a Quote for Your Location →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="testimonials" id="reviews">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">06 / Field Reports</div>
              <h2 className="h-lg">Read the real reports from local foremen and event coordinators.</h2>
            </div>
            <p>We don't do vague, polished praise. Here is exactly what our regional PNW clients say when their crew morale, project timeline, or high-stakes event budget is directly on the line.</p>
          </div>

          <div className="tc-carousel">
            <div className="tc-divider" aria-hidden="true" />
            <blockquote className="tc-quote">
              &ldquo;{testimonials[tcIndex].quote}&rdquo;
            </blockquote>
            <div className="tc-author">
              <strong>{testimonials[tcIndex].name}</strong>
              <span>{testimonials[tcIndex].role}</span>
            </div>
            <div className="tc-divider" aria-hidden="true" />
            <div className="tc-nav">
              <button
                className={`tc-arrow${tcIndex === 0 ? ' tc-arrow--off' : ''}`}
                onClick={() => setTcIndex(i => i - 1)}
                disabled={tcIndex === 0}
                aria-label="Previous testimonial"
              >←</button>
              <button
                className={`tc-arrow${tcIndex === testimonials.length - 1 ? ' tc-arrow--off' : ''}`}
                onClick={() => setTcIndex(i => i + 1)}
                disabled={tcIndex === testimonials.length - 1}
                aria-label="Next testimonial"
              >→</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">07 / FAQ</div>
              <h2 className="h-lg">Questions we answer<br />before you have to ask.</h2>
            </div>
            <p>The short version of everything dispatchers get asked at 6:45am on a Monday. Need something not here? Call dispatch or drop it in the quote form — a person will answer.</p>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>
                <span className="faq-num">Q.01</span>
                <span className="faq-q">How fast can you actually deliver?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div className="faq-a">Standard turnaround is 48 hours from confirmed booking to on-site. In our core Pacific Northwest service areas (Salem, Portland, Bend, Seattle) we routinely book next-day. Same-day deliveries are case-by-case and only confirmed once a dispatcher has spoken with a driver — we will never promise a window we can't hit.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="faq-num">Q.02</span>
                <span className="faq-q">Why is there no pricing on your website?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div className="faq-a">Because rental price depends on five variables most calculators ignore: ZIP, service frequency, duration, road access for our drivers, and any local permitting. Posting a generic price online would force us to either pad it (so we can absorb edge cases) or under-promise and bill the difference later. Both are the kind of behavior we built RHC to avoid. A hard quote in one business hour is better than a fake number in one click.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="faq-num">Q.03</span>
                <span className="faq-q">Are you the actual company that delivers, or a broker?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div className="faq-a">Both, depending on the ZIP. In our core markets we deliver directly. Outside those areas we dispatch through a network of pre-vetted local partners — but you stay on one invoice, one phone number, and one accountability standard. If a partner misses, RHC eats the cost and makes it right. That's the difference between a broker and a service company that uses partners.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="faq-num">Q.04</span>
                <span className="faq-q">Do you service residential remodels, or only commercial?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div className="faq-a">Both. A single porta potty for a 6-month backyard ADU build and a 10-stall restroom trailer for a 5,000-guest festival both go through the same dispatcher and the same operational standard. Smaller doesn't mean lower priority — it means a faster phone call.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="faq-num">Q.05</span>
                <span className="faq-q">What's included in a rental — and what isn't?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div className="faq-a">Quote includes: delivery, equipment, scheduled servicing or swap-outs at the cadence you choose, and haul-back. Quote excludes: city or county permits (we'll tell you if you need one), and any damage outside normal wear. There are no "environmental fees," fuel surcharges, or back-end add-ons. If it's not on the quote, you won't see it on the invoice.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="faq-num">Q.06</span>
                <span className="faq-q">Can I extend my rental mid-job?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div className="faq-a">Yes. One call or one email to dispatch and we extend at the same daily/weekly/monthly rate on your original quote. We won't surprise-rate you because your project ran two weeks long.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="final-cta" id="contact">
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
                  <div className="final-phone-label">Or call PNW dispatch</div>
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
