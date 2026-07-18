import { useState } from 'react'

interface LeadFormProps {
  id?: string
  variant?: 'hero' | 'final'
  defaultService?: string
}

type FieldName = 'name' | 'email' | 'phone' | 'service' | 'zip' | 'date' | 'notes'

const WEB3FORMS_ACCESS_KEY = 'b9952188-38c8-45e8-aa82-18d3c468bb4f'

const FIELD_LIMITS: Record<FieldName, number> = {
  name: 100,
  email: 254,
  phone: 20,
  service: 120,
  zip: 15,
  date: 10,
  notes: 1000,
}

// Strip CR/LF so a submitted value can't inject extra headers/fields into the outbound email.
function sanitize(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

function validateField(name: FieldName, rawValue: string): string | null {
  const value = sanitize(rawValue)
  const limit = FIELD_LIMITS[name]
  if (value.length > limit) return `Must be under ${limit} characters.`

  switch (name) {
    case 'name':
      if (!value) return 'Name is required.'
      if (value.length < 2) return 'Name is too short.'
      if (!/^[a-zA-ZÀ-ſ\s'.-]+$/.test(value)) return 'Name contains invalid characters.'
      return null
    case 'email':
      if (!value) return 'Email is required.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return 'Enter a valid email address.'
      return null
    case 'phone': {
      if (!value) return 'Phone number is required.'
      if (!/^\d{10}$/.test(value)) return 'Enter a 10-digit phone number.'
      return null
    }
    case 'service':
      if (!value) return 'Please choose a service.'
      return null
    case 'zip':
      if (!value) return 'Project ZIP / city is required.'
      if (!/^[a-zA-Z0-9\s,'./-]+$/.test(value)) return 'Entry contains invalid characters.'
      return null
    case 'date': {
      if (!value) return 'Delivery date is required.'
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const selected = new Date(`${value}T00:00:00`)
      if (Number.isNaN(selected.getTime())) return 'Enter a valid date.'
      if (selected < today) return 'Delivery date cannot be in the past.'
      return null
    }
    case 'notes':
      return null
    default:
      return null
  }
}

export default function LeadForm({ id, variant = 'hero', defaultService = '' }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'submitted' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})

  const clearError = (name: FieldName) => {
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const rawData = new FormData(form)

    // Honeypot: real visitors never populate this hidden field. If it's filled, silently
    // pretend success so the bot moves on, without spending a Web3Forms submission on it.
    if (rawData.get('botcheck')) {
      setStatus('submitted')
      form.reset()
      return
    }

    const fields: FieldName[] = ['name', 'email', 'phone', 'service', 'zip', 'date', 'notes']
    const nextErrors: Partial<Record<FieldName, string>> = {}
    const sanitized: Record<string, string> = {}

    for (const field of fields) {
      const raw = String(rawData.get(field) ?? '')
      const error = validateField(field, raw)
      if (error) nextErrors[field] = error
      sanitized[field] = sanitize(raw)
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    setStatus('sending')

    const formData = new FormData()
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', sanitize(String(rawData.get('subject') ?? '')))
    for (const field of fields) {
      formData.append(field, sanitized[field])
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus('submitted')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const buttonText = variant === 'final' ? 'Get My Free Quote →' : 'Send Me a Same-Day Quote →'
  const formClass = variant === 'final' ? 'lead-form lead-form--final' : 'lead-form'

  const errorStyle = { color: 'var(--secondary, #a73a00)', fontSize: '0.85em', marginTop: '4px' }

  return (
    <aside className={formClass} id={id} aria-label="Request a quote">
      <div className="lead-form-header">
        <div>
          <div className="h-md" style={{ marginBottom: '6px' }}>See Pricing for Your Project Location</div>
          <div className="mono" style={{ textTransform: 'none', letterSpacing: '.04em' }}>
            Same-day quote, reviewed by our RHC team.
          </div>
        </div>
        <span className="badge">Available Today</span>
      </div>

      {status === 'submitted' ? (
        <div style={{ padding: '24px 0', textAlign: 'center' }}>
          <p className="h-md" style={{ marginBottom: '8px' }}>Sent, RHC will reply today.</p>
          <p className="mono">No obligation. We'll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="subject" value={`New Lead: ${defaultService || 'General Inquiry'}`} />
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="field">
            <label htmlFor={`${id}-name`}>Name</label>
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              placeholder="Jordan Reyes"
              maxLength={FIELD_LIMITS.name}
              autoComplete="name"
              onChange={() => clearError('name')}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${id}-name-error` : undefined}
              required
            />
            {errors.name && <p id={`${id}-name-error`} style={errorStyle}>{errors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor={`${id}-email`}>Email Address</label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              placeholder="you@company.com"
              maxLength={FIELD_LIMITS.email}
              autoComplete="email"
              onChange={() => clearError('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${id}-email-error` : undefined}
              required
            />
            {errors.email && <p id={`${id}-email-error`} style={errorStyle}>{errors.email}</p>}
          </div>
          <div className="field">
            <label htmlFor={`${id}-phone`}>Phone Number</label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="5036077412"
              maxLength={10}
              autoComplete="tel-national"
              onInput={(e) => {
                const input = e.currentTarget
                input.value = input.value.replace(/\D/g, '').slice(0, 10)
              }}
              onChange={() => clearError('phone')}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
              required
            />
            {errors.phone && <p id={`${id}-phone-error`} style={errorStyle}>{errors.phone}</p>}
          </div>
          <div className="field">
            <label htmlFor={`${id}-service`}>What does your site need?</label>
            <select
              id={`${id}-service`}
              name="service"
              defaultValue={defaultService}
              onChange={() => clearError('service')}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? `${id}-service-error` : undefined}
              required
            >
              <option value="" disabled>Choose equipment…</option>
              <option value="Complete site bundle (Toilets, Fencing, Storage, etc.)">Complete site bundle (Toilets, Fencing, Storage, etc.)</option>
              <option value="Standard, Deluxe, or ADA Portable Toilets">Standard, Deluxe, or ADA Portable Toilets</option>
              <option value="High-End Luxury Restroom or Shower Trailers">High-End Luxury Restroom or Shower Trailers</option>
              <option value="Temporary Fencing (Panel Stands or Driven Posts)">Temporary Fencing (Panel Stands or Driven Posts)</option>
              <option value="10ft Steel Storage Container">10ft Steel Storage Container</option>
              <option value="20ft or 40ft Steel Storage Containers">20ft or 40ft Steel Storage Containers</option>
            </select>
            {errors.service && <p id={`${id}-service-error`} style={errorStyle}>{errors.service}</p>}
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor={`${id}-zip`}>Project ZIP / City</label>
              <input
                id={`${id}-zip`}
                name="zip"
                type="text"
                placeholder="97201 / Portland"
                maxLength={FIELD_LIMITS.zip}
                autoComplete="postal-code"
                onChange={() => clearError('zip')}
                aria-invalid={!!errors.zip}
                aria-describedby={errors.zip ? `${id}-zip-error` : undefined}
                required
              />
              {errors.zip && <p id={`${id}-zip-error`} style={errorStyle}>{errors.zip}</p>}
            </div>
            <div className="field">
              <label htmlFor={`${id}-date`}>Delivery Date</label>
              <input
                id={`${id}-date`}
                name="date"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                onChange={() => clearError('date')}
                aria-invalid={!!errors.date}
                aria-describedby={errors.date ? `${id}-date-error` : undefined}
                required
              />
              {errors.date && <p id={`${id}-date-error`} style={errorStyle}>{errors.date}</p>}
            </div>
          </div>
          <div className="field">
            <label htmlFor={`${id}-notes`}>
              Notes{' '}
              <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: 'var(--outline)' }}>
                (access restrictions, mud conditions, etc.)
              </span>
            </label>
            <textarea
              id={`${id}-notes`}
              name="notes"
              rows={2}
              maxLength={FIELD_LIMITS.notes}
              placeholder="e.g. 2 portable toilets, chain-link fencing, 4-stall shower trailer, 20ft storage container…"
              onChange={() => clearError('notes')}
              aria-invalid={!!errors.notes}
              aria-describedby={errors.notes ? `${id}-notes-error` : undefined}
            />
            {errors.notes && <p id={`${id}-notes-error`} style={errorStyle}>{errors.notes}</p>}
          </div>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : buttonText}
          </button>
          {status === 'error' && (
            <p className="lead-fine" style={{ color: 'var(--secondary, #a73a00)' }}>
              Something went wrong. Please try again or call us directly.
            </p>
          )}
          <p className="lead-fine">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="1"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Triggers an immediate review by our local RHC team. No obligation.
          </p>
        </form>
      )}
    </aside>
  )
}
