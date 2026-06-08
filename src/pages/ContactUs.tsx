import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LeadForm from '../components/LeadForm'

export default function ContactUs() {
  return (
    <main id="main">
      <Helmet>
        <title>Contact RHC Site Services | Portland, OR</title>
        <meta name="description" content="Get in touch with RHC Site Services for same-day quotes on portable toilets, restroom trailers, fencing, shower trailers, and storage containers across Oregon and Washington." />
        <link rel="canonical" href="https://rhcsiteservices.com/contact-us" />
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
          <div style={{ maxWidth: '600px' }}>
            <span className="eyebrow">Contact RHC</span>
            <h1 className="h-xl" style={{ color: 'var(--inverse-on-surface)', marginTop: '12px' }}>
              Get a same-day quote or reach us directly.
            </h1>
            <p style={{ color: 'rgba(236,241,255,.7)', fontSize: '18px', marginTop: '20px', lineHeight: '1.7', maxWidth: '48ch' }}>
              The fastest path to a confirmed quote is the form below. For urgent requests or active job sites, call or email RHC directly.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ background: 'var(--surface-low)', padding: '56px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '680px' }}>

            {/* Phone */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--outline-variant)',
              borderRadius: 'var(--r-xl)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              <div style={{
                width: '44px', height: '44px',
                background: 'rgba(167,58,0,.1)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', marginBottom: '6px' }}>Phone</div>
                <a href="tel:5036077412" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', fontFamily: 'var(--font-head)', display: 'block' }}>
                  (503) 607-7412
                </a>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: '1.65' }}>
                Best for urgent requests and active job sites. Use this for same-day coordination.
              </p>
            </div>

            {/* Email */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--outline-variant)',
              borderRadius: 'var(--r-xl)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              <div style={{
                width: '44px', height: '44px',
                background: 'rgba(167,58,0,.1)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', marginBottom: '6px' }}>Email</div>
                <a href="mailto:Rafaelh@rhcsiteservices.com" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none', fontFamily: 'var(--font-head)', display: 'block', wordBreak: 'break-all' }}>
                  Rafaelh@rhcsiteservices.com
                </a>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: '1.65' }}>
                For quotes, follow-ups, and non-urgent inquiries. Response within one business day.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" style={{ background: 'var(--surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '40px' }}>
              <span className="eyebrow">Get a Quote</span>
              <h2 className="h-lg" style={{ marginTop: '10px' }}>Same-day response on every request.</h2>
              <p style={{ marginTop: '16px', color: 'var(--on-surface-variant)', fontSize: '17px', lineHeight: '1.7' }}>
                Fill out the form and RHC will have a confirmed quote back to you the same day. Delivery window, all-in price, no surprises.
              </p>
            </div>
            <LeadForm id="contact-form" />
          </div>
        </div>
      </section>
    </main>
  )
}
