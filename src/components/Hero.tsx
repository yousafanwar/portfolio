import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>
        <div className="eyebrow">
          <span className="eyebrow-line"></span>Available for Freelance
        </div>
        <h1>
          Yousaf
          <br />
          <span>Anwar</span> Ali
        </h1>
        <p className="hero-sub">Backend-Focused Full Stack Developer</p>
        <p className="hero-bio">
          4+ years building secure, scalable backend systems for real-world SaaS products. From microservices to
          production APIs — I make backends that don&apos;t break.
        </p>
        <div className="hero-btns">
          <Link to="/contact" className="btn-p">
            Let&apos;s Work Together
          </Link>
          <Link to="/projects" className="btn-s">
            View Projects
          </Link>
        </div>
      </div>
      <div className="hero-badge">
        <div className="badge-num">4+</div>
        <div className="badge-lbl">Years Experience</div>
      </div>
    </section>
  )
}
