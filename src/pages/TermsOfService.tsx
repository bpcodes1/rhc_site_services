import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const EFFECTIVE = 'August 6, 2026'

export default function TermsOfService() {
  return (
    <main id="main">
      <Helmet>
        <title>Terms of Service | RHC Site Services</title>
        <meta
          name="description"
          content="The terms that apply to using the RHC Site Services website, including how quotes work and the limits of the specifications and permit guidance published here."
        />
        <link rel="canonical" href="https://rhcsiteservice.com/terms-of-service" />
      </Helmet>

      <div className="crumbs-wrap">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">Terms of Service</span>
          </nav>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <div className="head-lead">
              <div className="eyebrow">Legal</div>
              <h1 className="h-xl">Terms of Service</h1>
            </div>
          </div>

          <div style={{ maxWidth: '72ch', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p className="body-lg">
              Effective {EFFECTIVE}. These terms apply to your use of this website, operated by RHC
              Site Services LLC. They govern the website itself. The agreement for an actual rental
              is the quote and any rental terms you receive and approve in writing.
            </p>

            <div>
              <h2 className="h-lg">What this website is</h2>
              <p>
                This site describes the equipment RHC rents and lets you request a quote. Nothing
                here is an offer to enter a contract, and submitting the form does not book
                anything. A job is booked when RHC confirms it with you directly.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Quotes</h2>
              <p>
                Any number we give you is based on what you tell us: location, duration, service
                frequency, access, and scope. If those change, the quote can change. We will tell
                you before anything is delivered rather than after it is invoiced. A quote is valid
                for the period stated on it.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Specifications and local requirements</h2>
              <p>
                This site publishes equipment dimensions, capacities, sizing guidance, sanitation
                ratios, and summaries of local permit rules. We publish them because most of our
                competitors will not, and we work to keep them accurate.
              </p>
              <p>
                They are still general information. Regulations change, jurisdictions differ, and
                your specific site may not match the typical case described here. Confirm the actual
                requirements for your project with the relevant authority, and confirm the exact
                specifications of the units assigned to your job with us at booking. Do not treat
                anything on this site as a substitute for a permit review, an inspection, or legal
                or safety advice.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Using the site</h2>
              <p>
                Use it for its purpose. Do not attempt to break, overload, or gain unauthorized
                access to it, scrape it at a scale that degrades it for other visitors, or submit
                false information or other people's contact details through the form.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Content on this site</h2>
              <p>
                The text, layout, and graphics here belong to RHC Site Services LLC. You are welcome
                to read, print, and share pages. You may not republish substantial portions as your
                own.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Links to other sites</h2>
              <p>
                Where we link to a city permit office or an outside resource, we do not control that
                site and are not responsible for its content or accuracy.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Availability and disclaimers</h2>
              <p>
                We aim to keep this site accurate and available, but we do not guarantee that it
                will be uninterrupted, error free, or current at every moment. The site is provided
                as is, without warranties of any kind to the fullest extent the law allows.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, RHC Site Services LLC is not liable for
                indirect or consequential losses arising from your use of this website or from
                reliance on general information published here. Nothing in these terms limits
                liability that cannot be limited by law. This section is about the website;
                liability connected to an actual rental is governed by your rental agreement.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Governing law</h2>
              <p>
                These terms are governed by the laws of the State of Oregon, without regard to its
                conflict of laws rules.
              </p>
            </div>

            <div>
              <h2 className="h-lg">Changes</h2>
              <p>
                We may update these terms. When we do, we will change the effective date above.
                Continuing to use the site after an update means the updated terms apply.
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