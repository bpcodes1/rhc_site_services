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
              <li><Link to="/roll-off-dumpsters">Roll-Off Dumpsters</Link></li>
            </ul>
          </div>

          <div>
            <h4>Locations</h4>
            <ul>
              <li><a href="#">Portland, OR (HQ)</a></li>
              <li><a href="#">Salem, OR</a></li>
              <li><a href="#">Bend, OR</a></li>
              <li><a href="#">Seattle, WA</a></li>
              <li><a href="#">Nationwide Coverage</a></li>
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
