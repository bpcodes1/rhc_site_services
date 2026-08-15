import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BUSINESS_ID, breadcrumb, business, faqPage, graph } from '../seo/schema'
import LeadForm from '../components/LeadForm'

const faqs = [
  {
    q: 'How quickly will I hear back after submitting the form?',
    a: 'Same day for requests submitted before 3 p.m. Pacific. If you submit in the evening, expect a response first thing the next morning. Every reply comes from Rafa directly, not an automated system.',
  },
  {
    q: 'What information should I have ready before reaching out?',
    a: 'Service type, delivery city or ZIP, date range, and an approximate headcount or project scale. The more specific you are, the more precise the quote. You do not need everything finalized. If you have access restrictions, mud conditions, or permit questions, include those in the notes field.',
  },
  {
    q: 'I have an active rental and something just changed. Who do I reach?',
    a: 'Call the number below directly. Do not use the form for active-job issues. Rafa handles change requests, extensions, and on-site problems personally. If you cannot call, a text works too.',
  },
  {
    q: 'Do you serve cities outside the ones listed on the website?',
    a: 'Fill out the form anyway. RHC regularly handles requests outside the listed markets and is actively adding service areas. The worst answer you will get is that we cannot reach you. Most of the time we can.',
  },
  {
    q: 'Can I request multiple services for a single job site?',
    a: 'Yes. Bundling equipment for a single site is common. Include what you need in the notes field and Rafa will scope the full job in one quote. No need to submit separate requests.',
  },
]

// This page used to define a second LocalBusiness of its own, which disagreed
// with the one on About Us about the address. Both now come from seo/schema.ts.
const schema = graph([
  business,
  {
    '@type': 'ContactPage',
    '@id': 'https://rhcsiteservice.com/contact-us#webpage',
    name: 'Contact RHC Site Services',
    url: 'https://rhcsiteservice.com/contact-us',
    description:
      'Contact RHC Site Services in Portland, OR for same-day quotes on portable toilets, restroom trailers, temporary fencing, shower trailers, and storage containers across Oregon and Washington.',
    mainEntity: { '@id': BUSINESS_ID },
  },
  breadcrumb([{ name: 'Contact Us' }]),
  faqPage(faqs),
])

export default function ContactUs() {
  return (
    <main id="main">
      <Helmet>
        <title>Contact RHC Site Services | Portland, OR | Same-Day Quotes</title>
        <meta
          name="description"
          content="Contact RHC Site Services in Portland, OR. Same-day quotes on portable toilets, restroom trailers, temporary fencing, storage containers, and more across Oregon and Washington. Phone, email, or form."
        />
        <link rel="canonical" href="https://rhcsiteservice.com/contact-us" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* PAGE HEADER */}
      <section style={{ background: 'var(--inverse-surface)', padding: '64px 0 56px' }}>
        <div className="container">
          <div style={{ maxWidth: '640px' }}>
            <div
              className="eyebrow"
              style={{ color: 'rgba(236,241,255,.55)', marginBottom: '20px' }}
            >
              RHC Site Services · Portland, OR
            </div>
            <h1 className="h-xl" style={{ color: 'var(--inverse-on-surface)' }}>
              Contact RHC Site Services
            </h1>
            <p
              style={{
                color: 'rgba(236,241,255,.7)',
                fontSize: '19px',
                marginTop: '20px',
                lineHeight: '1.7',
                maxWidth: '52ch',
              }}
            >
              One person handles every request from first contact to final pickup. Fill out the form
              for a same-day quote, or call RHC directly for urgent and active-job requests.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section style={{ background: 'var(--surface-low)', padding: '56px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              maxWidth: '900px',
            }}
          >
            {/* Phone */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--outline-variant)',
                borderRadius: 'var(--r-xl)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(167,58,0,.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--on-surface-variant)',
                    marginBottom: '6px',
                  }}
                >
                  Phone
                </div>
                <a
                  href="tel:5036077412"
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-head)',
                    display: 'block',
                  }}
                >
                  (503) 607-7412
                </a>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: '1.65' }}>
                Urgent requests and active job sites. Rafa answers directly. Text works too.
              </p>
            </div>

            {/* Email */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--outline-variant)',
                borderRadius: 'var(--r-xl)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(167,58,0,.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--on-surface-variant)',
                    marginBottom: '6px',
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:info@rhcsiteservices.com"
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-head)',
                    display: 'block',
                    wordBreak: 'break-all',
                  }}
                >
                  info@rhcsiteservices.com
                </a>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: '1.65' }}>
                Quotes, follow-ups, and non-urgent inquiries. Response within one business day.
              </p>
            </div>

            {/* Hours */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--outline-variant)',
                borderRadius: 'var(--r-xl)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(167,58,0,.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--on-surface-variant)',
                    marginBottom: '6px',
                  }}
                >
                  Hours
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-head)',
                  }}
                >
                  Mon–Sun, 7 a.m.–6 p.m. PT
                </div>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: '1.65' }}>
                Same-day quotes for forms submitted before 3 p.m. Seven days a week, weekends included.
              </p>
            </div>
          </div>

          {/* NAP line */}
          <div
            style={{
              marginTop: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--on-surface-variant)',
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            RHC Site Services · Portland, OR · Serving Oregon and Washington
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" style={{ background: 'var(--surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ marginBottom: '40px' }}>
              <span className="eyebrow">Request a Quote</span>
              <h2 className="h-lg" style={{ marginTop: '10px' }}>
                Same-day response on every request.
              </h2>
              <p
                style={{
                  marginTop: '16px',
                  color: 'var(--on-surface-variant)',
                  fontSize: '17px',
                  lineHeight: '1.7',
                }}
              >
                Fill out the form with your project details and RHC will come back with a confirmed
                quote the same day. All-in price. Delivery window. No surprises.
              </p>
            </div>
            <LeadForm id="contact-form" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: 'var(--surface-low)', padding: '80px 0' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '48px' }}>
            <div className="head-lead">
              <div className="eyebrow">Before You Reach Out</div>
              <h2 className="h-lg">Common Questions</h2>
            </div>
            <p>Answers to what RHC hears most on a first contact.</p>
          </div>
          <div className="faq-list" style={{ maxWidth: '720px' }}>
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
      <section
        style={{
          background: 'var(--inverse-surface)',
          color: 'var(--inverse-on-surface)',
          padding: '80px 0',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '560px' }}>
            <div className="eyebrow" style={{ color: 'var(--secondary-fixed-dim)' }}>
              Get Started
            </div>
            <h2 className="h-lg" style={{ color: 'var(--inverse-on-surface)', marginTop: '24px' }}>
              Ready to get a quote?
            </h2>
            <p
              style={{
                color: 'rgba(236,241,255,.7)',
                fontSize: '18px',
                lineHeight: '1.7',
                marginTop: '20px',
                maxWidth: '50ch',
              }}
            >
              Use the form above for a same-day quote. For urgent requests or active jobs, call RHC
              directly below.
            </p>
            <a
              href="tel:+15036077412"
              className="final-phone"
              style={{ marginTop: '32px' }}
            >
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
        </div>
      </section>
    </main>
  )
}
