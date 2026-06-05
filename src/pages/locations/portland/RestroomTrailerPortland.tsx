import { Helmet } from 'react-helmet-async'
import heroImg from '../../../assets/cities/portland/portland_hero.webp'

export default function RestroomTrailerPortland() {
  return (
    <main id="main">
      <Helmet>
        <title>Restroom Trailer Rental Portland, OR | RHC Site Services</title>
        <meta name="description" content="Luxury restroom trailer rentals for Portland events and outdoor venues. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservices.com/restroom-trailer-rental-portland-or" />
      </Helmet>
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Restroom Trailers · Portland, OR</span>
              </div>
              <h1 className="h-xl">Restroom Trailer Rental in <span className="underline accent">Portland, OR</span></h1>
              <p className="hero-lean-sub body-lg">Climate-controlled luxury restroom trailers for Portland weddings, festivals, and outdoor events.</p>
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
