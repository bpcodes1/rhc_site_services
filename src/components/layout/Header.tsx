import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const locations = [
  {
    city: 'Portland', state: 'OR',
    links: [
      { label: 'Porta Potty Rental', to: '/porta-potty-rental-portland-or' },
      { label: 'Restroom Trailers', to: '/restroom-trailer-rental-portland-or' },
      { label: 'Temporary Fencing', to: '/temporary-fencing-rental-portland-or' },
    ],
  },
  {
    city: 'Bend', state: 'OR',
    links: [
      { label: 'Porta Potty Rental', to: '/porta-potty-rental-bend-or' },
      { label: 'Restroom Trailers', to: '/restroom-trailer-rental-bend-or' },
      { label: 'Temporary Fencing', to: '/temporary-fencing-rental-bend-or' },
    ],
  },
  {
    city: 'Seattle', state: 'WA',
    links: [
      { label: 'Porta Potty Rental', to: '/porta-potty-rental-seattle-wa' },
      { label: 'Restroom Trailers', to: '/restroom-trailer-rental-seattle-wa' },
      { label: 'Temporary Fencing', to: '/temporary-fencing-rental-seattle-wa' },
    ],
  },
]

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openCity, setOpenCity] = useState<string | null>(null)

  const onServicePage = pathname.startsWith('/portable-toilets') ||
    pathname.startsWith('/restroom-trailers') ||
    pathname.startsWith('/temporary-fencing') ||
    pathname.startsWith('/storage-containers') ||
    pathname.startsWith('/shower-trailers') ||
    pathname.startsWith('/roll-off-dumpsters')

  const servicesHref = onServicePage ? '/#services' : '#services'
  const howHref     = onServicePage ? '/#how'      : '#how'
  const areasHref   = onServicePage ? '/#areas'    : '#areas'
  const faqHref     = onServicePage ? '/#faq'      : '#faq'

  const closeMenu = () => { setMenuOpen(false); setOpenCity(null) }

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <div className="nav-wrap">
        <div className="container nav">
          <Link to="/" className="brand" aria-label="RHC Site Services home">
            <span className="brand-mark" aria-hidden="true"></span>
            RHC<span style={{ color: 'var(--secondary)' }}>.</span>
            <small>Site Services</small>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {/* Service Areas dropdown */}
            <div className="nav-dropdown-wrap">
              <a href={areasHref} className="nav-dropdown-trigger">
                Service Areas
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <div className="nav-dropdown" role="menu">
                <div className="nav-dropdown-inner">
                  {locations.map(loc => (
                    <div key={loc.city} className="nav-dropdown-col">
                      <div className="nav-dropdown-city">
                        {loc.city}, <span style={{ color: 'var(--secondary)' }}>{loc.state}</span>
                      </div>
                      {loc.links.map(link => (
                        <Link key={link.to} to={link.to} className="nav-dropdown-link" role="menuitem">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a href={servicesHref} className={onServicePage ? 'is-active' : ''}>Services</a>
            <a href={howHref}>How it Works</a>
            <a href={faqHref}>FAQ</a>
            <Link to="/about-us">About</Link>
          </nav>

          <div className="nav-cta">
            <a href="#quote" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '12px' }}>
              Get a Quote
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mob-menu${menuOpen ? ' mob-menu--open' : ''}`} aria-hidden={!menuOpen}>
        {/* Top bar: logo + close */}
        <div className="mob-menu-top">
          <Link to="/" className="brand" onClick={closeMenu} aria-label="RHC Site Services home">
            <span className="brand-mark" aria-hidden="true"></span>
            RHC<span style={{ color: 'var(--secondary)' }}>.</span>
            <small>Site Services</small>
          </Link>
          <button className="mob-menu-close" onClick={closeMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="mob-menu-nav" aria-label="Mobile primary">
          <a href={servicesHref} onClick={closeMenu}>Services</a>
          <a href={howHref} onClick={closeMenu}>How it Works</a>
          <a href={areasHref} onClick={closeMenu}>Service Areas</a>
          <a href={faqHref} onClick={closeMenu}>FAQ</a>
          <Link to="/about-us" onClick={closeMenu}>About</Link>
        </nav>

        {/* Locations accordion */}
        <div className="mob-menu-section">
          <div className="mob-menu-section-label">Locations</div>
          {locations.map(loc => (
            <div key={loc.city} className="mob-loc">
              <button
                className="mob-loc-city"
                onClick={() => setOpenCity(openCity === loc.city ? null : loc.city)}
                aria-expanded={openCity === loc.city}
              >
                <span>{loc.city}, <span style={{ color: 'var(--secondary)' }}>{loc.state}</span></span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  style={{ transform: openCity === loc.city ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease', flexShrink: 0 }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openCity === loc.city && (
                <div className="mob-loc-links">
                  {loc.links.map(link => (
                    <Link key={link.to} to={link.to} onClick={closeMenu}>{link.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mob-menu-cta">
          <a href="#quote" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={closeMenu}>
            Get a Same-Day Quote →
          </a>
        </div>
      </div>
    </>
  )
}
