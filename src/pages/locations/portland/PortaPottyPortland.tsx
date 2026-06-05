import { Helmet } from 'react-helmet-async'
import heroImg from '../../../assets/cities/portland/portland_hero.webp'

export default function PortaPottyPortland() {
  return (
    <main id="main">
      <Helmet>
        <title>Porta Potty Rental Portland, OR | RHC Site Services</title>
        <meta name="description" content="Portable toilet rentals for Portland job sites and events. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservices.com/porta-potty-rental-portland-or" />
      </Helmet>
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Portable Sanitation · Portland, OR</span>
              </div>
              <h1 className="h-xl">Porta Potty Rental in <span className="underline accent">Portland, OR</span></h1>
              <p className="hero-lean-sub body-lg">Same-day quotes for Portland construction sites and events. Hard delivery windows, no surprise fees.</p>
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
