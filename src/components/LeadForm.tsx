import { useState } from 'react'

interface LeadFormProps {
  id?: string
  variant?: 'hero' | 'final'
  defaultService?: string
}

export default function LeadForm({ id, variant = 'hero', defaultService = '' }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Connect to Formspree before launch — replace form action with https://formspree.io/f/{id}
    setSubmitted(true)
  }

  const buttonText = variant === 'final' ? 'Get My Free Quote →' : 'Send Me a Same-Day Quote →'
  const formClass = variant === 'final' ? 'lead-form lead-form--final' : 'lead-form'

  return (
    <aside className={formClass} id={id} aria-label="Request a quote">
      <div className="lead-form-header">
        <div>
          <div className="h-md" style={{ marginBottom: '6px' }}>See Pricing for Your Project Location</div>
          <div className="mono" style={{ textTransform: 'none', letterSpacing: '.04em' }}>
            Same-day quote, reviewed by our PNW dispatch team.
          </div>
        </div>
        <span className="badge">Dispatch Open</span>
      </div>

      {submitted ? (
        <div style={{ padding: '24px 0', textAlign: 'center' }}>
          <p className="h-md" style={{ marginBottom: '8px' }}>Sent — dispatch will reply today.</p>
          <p className="mono">No obligation. We'll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor={`${id}-name`}>Name</label>
            <input id={`${id}-name`} type="text" placeholder="Jordan Reyes" required />
          </div>
          <div className="field">
            <label htmlFor={`${id}-email`}>Email Address</label>
            <input id={`${id}-email`} type="email" placeholder="you@company.com" required />
          </div>
          <div className="field">
            <label htmlFor={`${id}-phone`}>Phone Number</label>
            <input id={`${id}-phone`} type="tel" placeholder="(503) 607-7412" required />
          </div>
          <div className="field">
            <label htmlFor={`${id}-service`}>What does your site need?</label>
            <select id={`${id}-service`} required defaultValue={defaultService}>
              <option value="" disabled>Choose equipment…</option>
              <option value="Complete site bundle (Toilets, Fencing, Dumpsters, etc.)">Complete site bundle (Toilets, Fencing, Dumpsters, etc.)</option>
              <option value="Standard, Deluxe, or ADA Portable Toilets">Standard, Deluxe, or ADA Portable Toilets</option>
              <option value="High-End Luxury Restroom or Shower Trailers">High-End Luxury Restroom or Shower Trailers</option>
              <option value="Temporary Fencing (Panel Stands or Driven Posts)">Temporary Fencing (Panel Stands or Driven Posts)</option>
              <option value="10ft Steel Storage Container">10ft Steel Storage Container</option>
              <option value="20ft or 40ft Steel Storage Containers">20ft or 40ft Steel Storage Containers</option>
              <option value="Roll-Off Dumpsters (Construction Debris / Cleanouts)">Roll-Off Dumpsters (Construction Debris / Cleanouts)</option>
            </select>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor={`${id}-zip`}>Project ZIP / City</label>
              <input id={`${id}-zip`} type="text" placeholder="97201 / Portland" required />
            </div>
            <div className="field">
              <label htmlFor={`${id}-date`}>Delivery Date</label>
              <input id={`${id}-date`} type="date" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor={`${id}-notes`}>
              Notes{' '}
              <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: 'var(--outline)' }}>
                (access restrictions, mud conditions, etc.)
              </span>
            </label>
            <textarea id={`${id}-notes`} rows={2} placeholder="e.g. 2 portable toilets, chain-link fencing, 4-stall shower trailer, 20yd dumpster…" />
          </div>
          <button type="submit" className="btn btn-primary">{buttonText}</button>
          <p className="lead-fine">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="1"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Triggers an immediate review by our local PNW dispatch team. No obligation.
          </p>
        </form>
      )}
    </aside>
  )
}
