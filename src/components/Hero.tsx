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
          4+ years shipping secure, scalable systems in Django, NestJS, Next.js, and Node.js —
          backends that hold up under load and serve <strong>3.5M+</strong> users in production.
        </p>

        <div className="hero-btns">
          <Link to="/contact" className="btn-p">
            Get In Touch <span aria-hidden="true">→</span>
          </Link>
          <a
            href={SITE.github}
            className="btn-s"
            target="_blank"
            rel="noreferrer"
          >
            View Resume / GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
