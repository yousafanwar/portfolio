import { Link } from 'react-router-dom'
import { SITE } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-main">
        <div className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          <span>{SITE.availability}</span>
        </div>

        <h1 className="hero-title">
          Yousaf <span>Anwar</span> Ali
        </h1>

        <p className="hero-sub">
          <span className="hero-prompt" aria-hidden="true">
            &gt;
          </span>{' '}
          {SITE.role}
        </p>

        <p className="hero-bio">
          Production APIs in Django, NestJS, and PostgreSQL. Notification delivery, reward
          integrity, and real-time game events for a consumer rewards platform with{' '}
          <strong>3.5M+</strong> users. I overlap US Eastern mornings and Central European workdays.
        </p>

        <div className="hero-btns">
          <a href={SITE.resume} className="btn-p" target="_blank" rel="noreferrer">
            Download Resume <span aria-hidden="true">→</span>
          </a>
          <Link to="/contact" className="btn-s">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
