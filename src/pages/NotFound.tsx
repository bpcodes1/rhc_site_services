import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | RHC Site Services</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="hero-lean">
        <div className="container">
          <div className="hero-lean-grid">
            <div className="hero-lean-text">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">404 · Page Not Found</span>
              </div>
              <h1 className="h-xl">That page doesn't exist, but the equipment you need does.</h1>
              <p className="hero-lean-sub body-lg">
                The link you followed is broken or the page has moved. Head back to the homepage, or jump straight to the service you were looking for: portable toilets, restroom trailers, temporary fencing, shower trailers, or storage containers.
              </p>
              <div className="hero-lean-actions">
                <Link to="/" className="btn btn-primary">Back to the Homepage →</Link>
                <Link to="/contact-us" className="btn btn-ghost">Contact RHC</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}