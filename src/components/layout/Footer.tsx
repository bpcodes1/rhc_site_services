import { useState } from 'react'
import { Link } from 'react-router-dom'

const cities = [
  {
    label: 'Portland, OR',
    links: [
      { label: 'Porta Potty Rental', to: '/porta-potty-rental-portland-or' },
      { label: 'Restroom Trailers', to: '/restroom-trailer-rental-portland-or' },
      { label: 'Temporary Fencing', to: '/temporary-fencing-rental-portland-or' },
    ],
  },
  {
    label: 'Bend, OR',
    links: [
      { label: 'Porta Potty Rental', to: '/porta-potty-rental-bend-or' },
      { label: 'Restroom Trailers', to: '/restroom-trailer-rental-bend-or' },
      { label: 'Temporary Fencing', to: '/temporary-fencing-rental-bend-or' },
    ],
  },
  {
    label: 'Seattle, WA',
    links: [
      { label: 'Porta Potty Rental', to: '/porta-potty-rental-seattle-wa' },
      { label: 'Restroom Trailers', to: '/restroom-trailer-rental-seattle-wa' },
      { label: 'Temporary Fencing', to: '/temporary-fencing-rental-seattle-wa' },
    ],
  },
]

const services = [
  { label: 'Portable Toilets', to: '/portable-toilets' },
  { label: 'Restroom Trailers', to: '/restroom-trailers' },
  { label: 'Shower Trailers', to: '/shower-trailers' },
  { label: 'Temporary Fencing', to: '/temporary-fencing' },
  { label: 'Storage Containers', to: '/storage-containers' },
]

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease', flexShrink: 0 }}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function Footer() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [openCity, setOpenCity] = useState<string | null>(null)

  const toggle = (label: string) =>
    setOpenCity(prev => (prev === label ? null : label))

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link to="/" className="brand">
              <span className="brand-mark" aria-hidden="true"></span>
              <span className="brand-text">
                <span className="brand-name">RHC<span className="brand-dot">.</span></span>
                <small>Site Services</small>
              </span>
            </Link>
            <p>Headquartered in Portland, Oregon. Dispatching portable toilets, restroom and shower trailers, fencing, and storage containers across the Pacific Northwest.</p>
          </div>

          <div>
            <h4>Services</h4>
            <div className="foot-locations">
              <div className="foot-loc">
                <button
                  className="foot-loc-btn"
                  onClick={() => setServicesOpen(p => !p)}
                  aria-expanded={servicesOpen}
                >
                  <span>All Services</span>
                  <Chevron open={servicesOpen} />
                </button>
                {servicesOpen && (
                  <div className="foot-loc-links">
                    {services.map(s => (
                      <Link key={s.to} to={s.to}>{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h4>Locations</h4>
            <div className="foot-locations">
              {cities.map(city => (
                <div key={city.label} className="foot-loc">
                  <button
                    className="foot-loc-btn"
                    onClick={() => toggle(city.label)}
                    aria-expanded={openCity === city.label}
                  >
                    <span>{city.label}</span>
                    <Chevron open={openCity === city.label} />
                  </button>
                  {openCity === city.label && (
                    <div className="foot-loc-links">
                      {city.links.map(link => (
                        <Link key={link.to} to={link.to}>{link.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
              <li><a href="#quote">Get a Quote</a></li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <div>© 2026 RHC Site Services · Portland, OR</div>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
