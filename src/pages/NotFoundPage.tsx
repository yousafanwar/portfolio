import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="not-found-inner">
        <div className="eyebrow">
          <span className="eyebrow-line"></span>Error
        </div>
        <h1 className="not-found-code">404</h1>
        <p className="not-found-text">This page doesn&apos;t exist — or it moved.</p>
        <div className="hero-btns">
          <Link to="/" className="btn-p">
            Back Home
          </Link>
          <Link to="/projects" className="btn-s">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
