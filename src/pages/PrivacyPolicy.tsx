import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const EFFECTIVE = 'August 6, 2026'

export default function PrivacyPolicy() {
  return (
    <main id="main">
      <Helmet>
        <title>Privacy Policy | RHC Site Services</title>
        <meta
          name="description"
          content="How RHC Site Services handles the information you submit through the quote form, who processes it, and how to request a copy or deletion."
        />
        <link rel="canonical" href="https://rhcsiteservice.com/privacy-policy" />
      </Helmet>

      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <div className="head-lead">
              <div className="eyebrow">Legal</div>
              <h1 className="h-xl">Privacy Policy</h1>
            </div>
          </div>

          <div style={{ maxWidth: '72ch', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p className="body-lg">
              Effective {EFFECTIVE}. This policy explains what RHC Site Services LLC collects
              through this website, why, and what you can ask us to do about it. It covers this
              website only.
            </p>

            <div>
              <h2 className="h-lg">What we collect</h2>
              <p>
                We collect only what you type into the quote form: your name, email address, phone
                number, ZIP code or city, the service you need, your requested delivery date, and
                any notes you add. Nothing on this form is required beyond what we need to price and
                schedule your job.
              </p>
              <p>
                We do not run analytics, advertising trackers, or marketing cookies on this site. We
                do not build profiles of visitors, and we do not track you across other websites.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Why we collect it</h2>
              <p>
                To respond to your request with a quote, to schedule and service your rental, and to
                contact you about that job. We do not sell your information, rent it, or share it
                for anyone else's advertising.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Who else handles it</h2>
              <p>
                Running a website means a few other companies touch your data in the process of
                delivering it. These are the only ones involved:
              </p>
              <ul>
                <li>
                  <strong>Web3Forms</strong> receives your form submission and forwards it to our
                  email. They process it in transit and do not use it for their own purposes.
                </li>
                <li>
                  <strong>Cloudflare</strong> hosts and delivers this website. Like any web host,
                  their servers see the IP address of visitors as pages load.
                </li>
                <li>
                  <strong>Google Fonts</strong> serves the typefaces used on these pages, which
                  means Google receives your IP address when a page loads.
                </li>
                <li>
                  <strong>jsDelivr</strong> serves the map graphic on our homepage, which likewise
                  means your IP address reaches that service when the homepage loads.
                </li>
              </ul>
              <p>
                We may also disclose information if the law requires it, which in practice means a
                valid legal request.
              </p>
            </div>

            <div>
              <h2 className="h-lg">How long we keep it</h2>
              <p>
                Quote requests arrive as email and stay in our records while your job is active and
                afterward as an ordinary business record. If you want yours removed sooner, ask and
                we will remove it.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Your choices</h2>
              <p>
                Email us at{' '}
                <a href="mailto:info@rhcsiteservices.com">info@rhcsiteservices.com</a> and we will
                tell you what we hold about you, correct it, or delete it. There is no form to fill
                out and no charge. Depending on where you live you may have these rights by law; we
                extend them to everyone who asks.
              </p>
              <p>
                The simplest control is the form itself. If you would rather not submit anything
                online, the phone number at the bottom of any service page reaches us directly.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Children</h2>
              <p>
                This site is for people arranging equipment rentals for job sites and events. It is
                not directed at children, and we do not knowingly collect information from anyone
                under 13.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Changes</h2>
              <p>
                If we change this policy we will update the effective date above. Material changes
                to how we handle your information will be described here rather than made quietly.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Contact</h2>
              <p>
                RHC Site Services LLC
                <br />
                PO Box 9088, Brooks, OR 97305
                <br />
                <a href="mailto:info@rhcsiteservices.com">info@rhcsiteservices.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}