import { Helmet } from 'react-helmet-async'
import heroImg from '../../../assets/cities/seattle/seattle_hero.webp'

export default function TemporaryFencingSeattle() {
  return (
    <main id="main">
      <Helmet>
        <title>Temporary Fencing Rental Seattle, WA | RHC Site Services</title>
        <meta name="description" content="Temporary fencing for Seattle construction sites and events. Panel and post-driven options. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservices.com/temporary-fencing-rental-seattle-wa" />
      </Helmet>
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Temporary Fencing · Seattle, WA</span>
              </div>
              <h1 className="h-xl">Temporary Fencing Rental in <span className="underline accent">Seattle, WA</span></h1>
              <p className="hero-lean-sub body-lg">OSHA-compliant panel and post-driven fencing for Seattle job sites and events. Hard delivery windows.</p>
              <div className="hero-lean-actions">
                <a href="#quote" className="btn btn-primary">Get a Same-Day Quote →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
