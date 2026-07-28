import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LeadForm from '../components/LeadForm'

import aboutImg from '../assets/general/about-jobsite.jpg'

const cities = [
  { name: 'Salem',     state: 'OR', hq: false },
  { name: 'Portland',  state: 'OR', hq: true  },
  { name: 'Eugene',    state: 'OR', hq: false },
  { name: 'Bend',      state: 'OR', hq: false },
  { name: 'Gresham',   state: 'OR', hq: false },
  { name: 'Tacoma',    state: 'WA', hq: false },
  { name: 'Vancouver', state: 'WA', hq: false },
  { name: 'Seattle',   state: 'WA', hq: false },
]

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RHC Site Services',
  description:
    'Portable toilet, restroom trailer, temporary fencing, shower trailer, and storage container rentals across Oregon and Washington. Based in Portland, OR.',
  url: 'https://rhcsiteservice.com/',
  telephone: '+15036077412',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'PO Box 9088',
    addressLocality: 'Brooks',
    addressRegion: 'OR',
    postalCode: '97305',
    addressCountry: 'US',
  },
  founder: { '@type': 'Person', name: 'Rafael Hernandez' },
  foundingDate: '2016',
  areaServed: [
    'Portland, OR', 'Salem, OR', 'Eugene, OR', 'Bend, OR',
    'Gresham, OR', 'Vancouver, WA', 'Tacoma, WA', 'Seattle, WA',
  ],
  sameAs: [
    'https://www.google.com/maps/place/RHC+Site+Services/@45.0449079,-122.9588222,17z/data=!3m1!4b1!4m6!3m5!1s0x54955723f4080829:0x49107ebcd4c6f6fe!8m2!3d45.0449041!4d-122.9562473!16s%2Fg%2F11s4_f91yz?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D',
    'https://www.facebook.com/RHCSiteServices/',
  ],
}

export default function AboutUs() {
  return (
    <main id="main">
      <Helmet>
        <title>About RHC Site Services | Portland, OR | Run by Rafa</title>
        <meta
          name="description"
          content="Portable toilet and site equipment rentals run by Rafa out of Portland, on Pacific Northwest job sites since 2016. One accountable contact from quote to pickup."
        />
        <link rel="canonical" href="https://rhcsiteservice.com/about-us" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">About Us</span>
          </nav>
        </div>
      </div>

      {/* PAGE INTRO */}
      <section style={{ background: 'var(--primary)', color: 'var(--inverse-on-surface)', borderBottom: 0 }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--secondary-fixed-dim)', marginBottom: '24px' }}>
            RHC Site Services · Portland, OR
          </div>
          <h1 className="h-xl" style={{ color: 'var(--inverse-on-surface)', maxWidth: '20ch' }}>
            About RHC Site Services
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: 'rgba(236,241,255,.75)',
              maxWidth: '58ch',
              marginTop: '20px',
              lineHeight: '1.6',
            }}
          >
            RHC is run by Rafa, who has worked on Pacific Northwest job sites since 2016,
            long enough to know exactly where things go wrong.
          </p>
        </div>
      </section>

      {/* 01 — WHERE RAFA COMES FROM */}
      <section>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <div className="head-lead">
              <div className="eyebrow">01 / Where Rafa Comes From</div>
              <h2 className="h-lg">Grew Up in This Business. Built RHC to Run It Differently.</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '48px', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="body-lg">
                Rafa was born and raised in Salem, Oregon. Before starting RHC, he worked inside his
                father's portable sanitation business, Oregon Portable Toilets LLC, one of the
                original providers serving the Portland metro and Willamette Valley.
              </p>
              <p className="body-lg">
                That background is not a footnote. It means Rafa understands how this industry works
                at the operational level. What a properly prepped unit looks like. What a real
                delivery window actually requires. Where providers cut corners when no one is watching
                closely.
              </p>
              <p className="body-lg">
                He has been working in this business since before RHC existed. When he started the
                company in 2016, it was not to enter a new industry. It was to fix the part of it he
                kept watching fail.
              </p>
            </div>
            <div style={{ borderRadius: '8px', overflow: 'hidden', height: '500px' }}>
              <img
                src={aboutImg}
                alt="Portable toilets deployed on an Oregon job site"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — WHY HE STARTED IT */}
      <section style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <div className="head-lead">
              <div className="eyebrow">02 / Why He Started It</div>
              <h2 className="h-lg">The Same Three Complaints. Too Many Times.</h2>
            </div>
          </div>
          <div style={{ maxWidth: '72ch', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="body-lg">
              Anyone who has spent enough time in this industry has seen the same complaints repeat
              across enough customer reviews to stop being a coincidence.
            </p>
            <p className="body-lg">
              Delivery windows that stretch across the entire workday, giving customers no real
              arrival time to plan around. Quotes that shift between the initial agreement and the
              invoice. Units that arrive in condition no one would have accepted if they knew what
              to expect.
            </p>
            <p className="body-lg">
              None of these are inevitable. They are what happens when the person who takes the
              order is not the person accountable for what shows up.
            </p>
            <p className="body-lg">
              Rafa started RHC in 2016 to change that. One point of contact handles the job from
              first call to final pickup. That person is accountable for the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — HOW A JOB WORKS */}
      <section>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <div className="head-lead">
              <div className="eyebrow">03 / How a Job Works at RHC</div>
              <h2 className="h-lg">One Contact. Start to Finish.</h2>
            </div>
          </div>
          <div style={{ maxWidth: '72ch', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="body-lg">
              When you submit a quote request, Rafa handles it. He confirms the details, coordinates
              delivery through vetted local crews in each market, and verifies the unit is clean and
              ready before it arrives on site.
            </p>
            <p className="body-lg">
              There is no point in the process where your job gets handed off to someone who does
              not know your original request. The same contact who took your inquiry is the one you
              reach if anything needs to change before, during, or after the rental.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — NON-NEGOTIABLES */}
      <section style={{ background: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <div className="head-lead">
              <div className="eyebrow">04 / What Rafa Stands Behind</div>
              <h2 className="h-lg">Two Things Rafa Has Not Changed Since 2016.</h2>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            <div
              style={{
                background: 'var(--inverse-surface)',
                color: 'var(--inverse-on-surface)',
                borderRadius: '8px',
                padding: '32px',
                borderTop: '3px solid var(--secondary-bright)',
              }}
            >
              <div className="eyebrow" style={{ color: 'var(--secondary-fixed-dim)', marginBottom: '16px' }}>01</div>
              <p className="h-md" style={{ color: 'var(--inverse-on-surface)', marginBottom: '14px' }}>
                On Time. Confirmed Clean. Or Rafa Handles It.
              </p>
              <p style={{ color: 'rgba(236,241,255,.75)', lineHeight: '1.65', fontSize: '16px', margin: 0 }}>
                Every unit is confirmed clean and on-site at the agreed time. If that does not
                happen, Rafa handles it personally. Not through a ticket system. Not after a
                callback queue.
              </p>
            </div>

            <div
              style={{
                background: 'var(--inverse-surface)',
                color: 'var(--inverse-on-surface)',
                borderRadius: '8px',
                padding: '32px',
                borderTop: '3px solid var(--secondary-bright)',
              }}
            >
              <div className="eyebrow" style={{ color: 'var(--secondary-fixed-dim)', marginBottom: '16px' }}>02</div>
              <p className="h-md" style={{ color: 'var(--inverse-on-surface)', marginBottom: '14px' }}>
                You Reach Rafa Directly. Not a 1-800 Number.
              </p>
              <p style={{ color: 'rgba(236,241,255,.75)', lineHeight: '1.65', fontSize: '16px', margin: 0 }}>
                If something comes up mid-job, you reach him directly. The person who took your
                call at the start is the person who answers when it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — SERVICE AREAS */}
      <section style={{ background: 'var(--surface-low)' }} id="service-area">
        <div className="container">
          <div className="section-head">
            <div className="head-lead">
              <div className="eyebrow">05 / Service Areas</div>
              <h2 className="h-lg">Based in Portland. Serving Oregon and Washington.</h2>
            </div>
            <p>
              RHC's primary service areas cover the Portland metro, the Willamette Valley, and the
              broader Pacific Northwest. Same-day quotes available across all listed areas.
            </p>
          </div>

          <div className="city-tags">
            {cities.map((city) => (
              <a key={city.name} href="#quote" className={`city-tag${city.hq ? ' is-hq' : ''}`}>
                <span className="city-name">{city.name}</span>
                <span className="city-state">
                  {city.state}
                  {city.hq ? ' · HQ' : ''}
                </span>
              </a>
            ))}
          </div>

          <div className="area-foot" style={{ marginTop: '24px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--secondary)',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                flexShrink: 0,
              }}
            >
              i
            </div>
            <p>
              <strong>Don't see your city?</strong> Fill out the form anyway. RHC handles requests
              outside these markets regularly and is actively adding new service areas. The worst
              answer you'll get is that we cannot reach you. Most of the time we can.
            </p>
          </div>
        </div>
      </section>

      {/* 07 — FINAL CTA */}
      <section className="final-cta" id="quote">
        <div className="stripe" aria-hidden="true"></div>
        <div className="container">
          <div className="final-cta-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--secondary-fixed-dim)' }}>
                06 / Get Started
              </div>
              <h2 className="h-lg" style={{ marginTop: '24px' }}>
                Ready to work with RHC?
              </h2>
              <p>
                Fill out the form with your project details and Rafa will come back with a confirmed
                quote the same day. No commitment. No phone tag.
              </p>

              <div className="final-trigger">
                <span className="final-trigger-dot" aria-hidden="true"></span>
                <span>No commitment. Quote back the same day.</span>
              </div>

              {/* TESTIMONIAL SLOT (empty until Rafa has real reviews)
                  Position: immediately after the "No commitment. Quote back the same day." final-trigger block in the Get Started section
                  Intended review theme: real review from Rafa's Google listing goes here
                  Restore with:
                  <blockquote
                    style={{
                      margin: '20px 0',
                      padding: '14px 18px',
                      background: 'rgba(255,255,255,0.07)',
                      borderLeft: '3px solid var(--secondary)',
                      borderRadius: '0 4px 4px 0',
                    }}
                  >
                    <p style={{ fontSize: '14px', color: 'inherit', lineHeight: '1.65', fontStyle: 'italic', margin: 0 }}>REAL REVIEW TEXT HERE</p>
                    <footer
                      style={{
                        marginTop: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--secondary-fixed-dim)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      &#9733;&#9733;&#9733;&#9733;&#9733; &middot; Google Review
                    </footer>
                  </blockquote> */}

              <a href="tel:+15036077412" className="final-phone">
                <div>
                  <div className="final-phone-label">Or call RHC directly</div>
                  <div className="final-phone-num">503&#8209;607&#8209;7412</div>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </a>
            </div>

            <LeadForm id="quote" variant="final" />
          </div>
        </div>
      </section>
    </main>
  )
}
