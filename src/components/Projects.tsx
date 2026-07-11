import { Link } from 'react-router-dom'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div style={{ padding: '0 6% 3.5rem' }} className="reveal">
        <div className="sec-label">
          <span className="eyebrow-line"></span>Work
        </div>
        <h2 className="sec-title">Selected Projects</h2>
      </div>
      <div className="proj-grid" id="pgrid">
        {PROJECTS.map((p, i) => {
          const card = (
            <>
              <div className="proj-idx">0{i + 1}</div>
              <div className="proj-name">{p.name}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t} className="ptag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-links">
                {p.repo && (
                  <a
                    className="plink"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub →
                  </a>
                )}
                {p.link && (
                  <a
                    className="plink"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo →
                  </a>
                )}
                {p.detail && (
                  <span className="plink-detail">
                    View Details{' '}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5h6M5 2l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
                {!p.repo && !p.link && !p.detail && (
                  <span className="plink" style={{ cursor: 'default', color: 'var(--label)' }}>
                    Professional Project
                  </span>
                )}
              </div>
            </>
          )

          if (p.detail) {
            return (
              <Link
                key={p.id}
                to={`/projects/${p.detail}`}
                className="proj-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {card}
              </Link>
            )
          }

          return (
            <div key={p.id} className="proj-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              {card}
            </div>
          )
        })}
      </div>
    </section>
  )
}
