import { useCallback } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { SITE } from '../data'

const SECTION_LINKS = [
  { id: 'work', label: 'Work' },
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
          <a href={SITE.resume} className="nav-icon" target="_blank" rel="noreferrer" aria-label="Resume">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M7 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-10.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5z" />
              <path d="M14 3.5V9h5.5" />
              <path d="M8.5 13h7M8.5 16.5h7" />
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
