import { NavLink, Link } from 'react-router-dom'

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
] as const

export default function Nav() {
  return (
    <nav id="main-nav">
      <Link to="/" className="logo">
        YOUSAF.DEV
      </Link>
      <ul className="nav-links" id="nav-main-links">
        {LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
