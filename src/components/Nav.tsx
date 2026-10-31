import { useCallback } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { SITE } from '../data'

const SECTION_LINKS = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
] as const

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = useCallback(
    (id: string) => {
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        return
      }
      navigate(`/#${id}`)
    },
    [location.pathname, navigate],
  )

  return (
    <nav id="main-nav">
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="Home">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">YOUSAF.DEV</span>
        </Link>

        <ul className="nav-links">
          {SECTION_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button type="button" className="nav-section-btn" onClick={() => goToSection(id)}>
                {label}
              </button>
            </li>
          ))}
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <a href={`mailto:${SITE.email}`} className="nav-icon" aria-label="Email" title={SITE.email}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
          <a href={SITE.github} className="nav-icon" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.01 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a href={SITE.linkedin} className="nav-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 7.16a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7zM20.25 20h-3.18v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V20H9.88V8.5h3.05v1.57h.04c.42-.8 1.46-1.65 3-1.65 3.21 0 3.8 2.11 3.8 4.86V20z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
