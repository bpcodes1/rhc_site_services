import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const onServicePage = pathname.startsWith('/portable-toilets') ||
    pathname.startsWith('/restroom-trailers') ||
    pathname.startsWith('/temporary-fencing') ||
    pathname.startsWith('/storage-containers') ||
    pathname.startsWith('/shower-trailers') ||
    pathname.startsWith('/roll-off-dumpsters')

  const servicesHref = onServicePage ? '/#services' : '#services'
  const howHref = onServicePage ? '/#how' : '#how'
  const areasHref = onServicePage ? '/#areas' : '#areas'
  const faqHref = onServicePage ? '/#faq' : '#faq'

  return (
    <div className="nav-wrap">
      <div className="container nav">
        <Link to="/" className="brand" aria-label="RHC Site Services home">
          <span className="brand-mark" aria-hidden="true"></span>
          RHC<span style={{ color: 'var(--secondary)' }}>.</span>
          <small>Site Services</small>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <a href={servicesHref} className={onServicePage ? 'is-active' : ''}>Services</a>
          <a href={howHref}>How it Works</a>
          <a href={areasHref}>Service Areas</a>
          <a href={faqHref}>FAQ</a>
          <Link to="/about-us">About</Link>
        </nav>

        <div className="nav-cta">
          <a href="#quote" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '12px' }}>
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  )
}
