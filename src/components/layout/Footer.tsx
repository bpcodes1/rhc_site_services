import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link to="/" className="brand">
              <span className="brand-mark" aria-hidden="true"></span>
              RHC<span style={{ color: 'var(--secondary)' }}>.</span>
              <small>Site Services</small>
            </Link>
            <p>Headquartered in Portland, Oregon. Dispatching portable toilets, restroom &amp; shower trailers, fencing, storage, and dumpsters across the Pacific Northwest.</p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/portable-toilets">Portable Toilets</Link></li>
              <li><Link to="/restroom-trailers">Restroom Trailers</Link></li>
              <li><Link to="/shower-trailers">Shower Trailers</Link></li>
              <li><Link to="/temporary-fencing">Temporary Fencing</Link></li>
              <li><Link to="/storage-containers">Storage Containers</Link></li>
            </ul>
          </div>

          <div>
            <h4>Locations</h4>
            <ul>
              <li style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--outline)', marginTop: '4px', marginBottom: '2px' }}>Portland, OR</li>
              <li><Link to="/porta-potty-rental-portland-or">Porta Potty</Link></li>
              <li><Link to="/restroom-trailer-rental-portland-or">Restroom Trailers</Link></li>
              <li><Link to="/temporary-fencing-rental-portland-or">Temporary Fencing</Link></li>
              <li style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--outline)', marginTop: '8px', marginBottom: '2px' }}>Bend, OR</li>
              <li><Link to="/porta-potty-rental-bend-or">Porta Potty</Link></li>
              <li><Link to="/restroom-trailer-rental-bend-or">Restroom Trailers</Link></li>
              <li><Link to="/temporary-fencing-rental-bend-or">Temporary Fencing</Link></li>
              <li style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--outline)', marginTop: '8px', marginBottom: '2px' }}>Seattle, WA</li>
              <li><Link to="/porta-potty-rental-seattle-wa">Porta Potty</Link></li>
              <li><Link to="/restroom-trailer-rental-seattle-wa">Restroom Trailers</Link></li>
              <li><Link to="/temporary-fencing-rental-seattle-wa">Temporary Fencing</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
              <li><a href="#faq">FAQ</a></li>
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
