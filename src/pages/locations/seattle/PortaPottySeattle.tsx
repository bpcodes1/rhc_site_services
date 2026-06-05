import { Helmet } from 'react-helmet-async'
import heroImg from '../../../assets/cities/seattle/seattle_hero.webp'

export default function PortaPottySeattle() {
  return (
    <main id="main">
      <Helmet>
        <title>Porta Potty Rental Seattle, WA | RHC Site Services</title>
        <meta name="description" content="Portable toilet rentals for Seattle job sites and events. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservices.com/porta-potty-rental-seattle-wa" />
      </Helmet>
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Portable Sanitation · Seattle, WA</span>
              </div>
              <h1 className="h-xl">Porta Potty Rental in <span className="underline accent">Seattle, WA</span></h1>
              <p className="hero-lean-sub body-lg">Same-day quotes for Seattle construction sites and events. Hard delivery windows, no surprise fees.</p>
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
