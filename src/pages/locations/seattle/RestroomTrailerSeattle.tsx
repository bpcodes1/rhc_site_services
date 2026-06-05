import { Helmet } from 'react-helmet-async'
import heroImg from '../../../assets/cities/seattle/seattle_hero.webp'

export default function RestroomTrailerSeattle() {
  return (
    <main id="main">
      <Helmet>
        <title>Restroom Trailer Rental Seattle, WA | RHC Site Services</title>
        <meta name="description" content="Luxury restroom trailer rentals for Seattle events and outdoor venues. Same-day quotes from RHC." />
        <link rel="canonical" href="https://rhcsiteservices.com/restroom-trailer-rental-seattle-wa" />
      </Helmet>
      <section className="hero-lean hero-lean--image" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-lean-grid">
            <div>
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Restroom Trailers · Seattle, WA</span>
              </div>
              <h1 className="h-xl">Restroom Trailer Rental in <span className="underline accent">Seattle, WA</span></h1>
              <p className="hero-lean-sub body-lg">Climate-controlled luxury restroom trailers for Seattle weddings, festivals, and outdoor events.</p>
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
