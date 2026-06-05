import { Helmet } from 'react-helmet-async'
import heroImg from '../../../assets/cities/portland/portland_hero.webp'

export default function TemporaryFencingPortland() {
  return (
    <main id="main">
      <Helmet>
        <title>Temporary Fencing Rental Portland, OR | RHC Site Services</title>
        <meta name="description" content="Temporary fencing for Portland construction sites and events. Panel and post-driven options. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservices.com/temporary-fencing-rental-portland-or" />
      </Helmet>
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Temporary Fencing · Portland, OR</span>
              </div>
              <h1 className="h-xl">Temporary Fencing Rental in <span className="underline accent">Portland, OR</span></h1>
              <p className="hero-lean-sub body-lg">OSHA-compliant panel and post-driven fencing for Portland job sites and events. Hard delivery windows.</p>
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
