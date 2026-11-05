const company = {
  name: 'BrightLine Electric',
  phone: '(555) 123-4567',
  email: 'info@brightline-electric.com',
  address: '1200 Main Street, Springfield',
  hours: 'Mon–Fri 7am–6pm · 24/7 Emergency',
}

const services = [
  { icon: '🏠', title: 'Residential Wiring', text: 'New construction, remodels, and rewiring for older homes.' },
  { icon: '🏢', title: 'Commercial Services', text: 'Lighting, power distribution, and maintenance for businesses.' },
  { icon: '⚡', title: 'Panel Upgrades', text: 'Upgrade to 200A service and replace outdated breaker panels.' },
  { icon: '💡', title: 'Lighting Installation', text: 'Recessed, outdoor, landscape, and LED retrofit lighting.' },
  { icon: '🔌', title: 'EV Charger Install', text: 'Level 2 home charging stations installed to code.' },
  { icon: '🚨', title: 'Emergency Repairs', text: 'Outages, sparking outlets, and tripped breakers — day or night.' },
]

const reasons = [
  { stat: '20+', label: 'Years in business' },
  { stat: '5,000+', label: 'Jobs completed' },
  { stat: '4.9★', label: 'Average rating' },
  { stat: '24/7', label: 'Emergency service' },
]

const testimonials = [
  { quote: 'They upgraded our panel in one day and left the place spotless. Highly recommend.', name: 'Sarah M.' },
  { quote: 'Fast response on a Sunday night when our power went out. Fair price, great work.', name: 'David R.' },
  { quote: 'Installed our EV charger and explained everything clearly. Very professional.', name: 'Priya K.' },
]

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo">⚡ {company.name}</a>
          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact" className="btn btn-sm">Get a Quote</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Licensed · Bonded · Insured</p>
          <h1>Reliable electrical work, done right the first time.</h1>
          <p className="lead">
            Residential and commercial electricians serving Springfield and surrounding areas.
            Upfront pricing, clean work, and same-day service available.
          </p>
          <div className="hero-actions">
            <a href={`tel:${company.phone}`} className="btn">Call {company.phone}</a>
            <a href="#contact" className="btn btn-outline">Request a Free Estimate</a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-sub">From a single outlet to a full commercial build-out.</p>
          <div className="grid">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section section-alt">
        <div className="container about">
          <div>
            <h2>Why Choose Us</h2>
            <p>
              Family-owned since 2005, {company.name} has built its reputation on honest
              pricing and quality workmanship. Every job is handled by a licensed master
              electrician and backed by our 2-year workmanship guarantee.
            </p>
            <ul className="checks">
              <li>Free, no-obligation estimates</li>
              <li>Upfront flat-rate pricing</li>
              <li>Code-compliant, permitted work</li>
              <li>2-year workmanship warranty</li>
            </ul>
          </div>
          <div className="stats">
            {reasons.map((r) => (
              <div key={r.label} className="stat">
                <span className="stat-num">{r.stat}</span>
                <span className="stat-label">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section">
        <div className="container">
          <h2>What Customers Say</h2>
          <div className="grid">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="card quote">
                <p>“{t.quote}”</p>
                <cite>— {t.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section cta">
        <div className="container cta-inner">
          <h2>Ready to get started?</h2>
          <p>Call us today or send an email for a free estimate.</p>
          <div className="contact-info">
            <a href={`tel:${company.phone}`}>📞 {company.phone}</a>
            <a href={`mailto:${company.email}`}>✉️ {company.email}</a>
            <span>📍 {company.address}</span>
            <span>🕒 {company.hours}</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          © {year} {company.name}. License #EC-123456. All rights reserved.
        </div>
      </footer>
    </>
  )
}
