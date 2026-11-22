import { Link } from 'react-router-dom'
import { PROJECTS } from '../data'
import type { Project } from '../types'

function formatIndex(i: number) {
  return String(i + 1).padStart(2, '0')
}

function linkLabel(url: string) {
  return url.includes('play.google.com') ? 'Google Play' : 'Live Demo'
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const highlight = new Set(p.highlightTags ?? (p.tags[0] ? [p.tags[0]] : []))

  return (
    <article
      className="proj-card reveal"
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      {p.detail && (
        <Link
          to={`/projects/${p.detail}`}
          className="proj-card-hit"
          aria-label={`View details for ${p.name}`}
        />
      )}

      <div className="proj-card-top">
        <span className="proj-idx">{formatIndex(index)}</span>
        <span className="proj-category">{p.category}</span>
      </div>

      <h2 className="proj-name">{p.name}</h2>
      <p className="proj-desc">{p.desc}</p>

      <div className="proj-tags">
        {p.tags.map((t) => (
          <span key={t} className={highlight.has(t) ? 'ptag ptag-primary' : 'ptag ptag-muted'}>
            {t}
          </span>
        ))}
      </div>

      <div className="proj-links">
        <div className="proj-links-left">
          {p.repo && (
            <a className="plink" href={p.repo} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {p.repo && p.link && <span className="plink-sep" aria-hidden="true" />}
          {p.link && (
            <a className="plink" href={p.link} target="_blank" rel="noopener noreferrer">
              {linkLabel(p.link)}
            </a>
          )}
          {!p.repo && !p.link && !p.detail && (
            <span className="plink" style={{ cursor: 'default' }}>
              Professional Project
            </span>
          )}
        </div>

        {p.detail && (
          <span className="plink-detail" aria-hidden="true">
            View Details
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
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-grid" aria-hidden="true" />
        <div className="projects-hero-inner reveal">
          <div className="sec-label">
            <span className="eyebrow-line" />
            Work — Production &amp; Distributed Systems
          </div>
          <h1 className="projects-title">Selected Projects</h1>
          <p className="projects-lead">
            Production backends, distributed microservices, and full-stack applications — from
            multi-tenant SaaS to high-throughput real-time systems.
          </p>
        </div>
      </div>

      <div className="proj-grid" id="pgrid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="projects-cta reveal">
        <div className="projects-cta-copy">
          <div className="sec-label">
            <span className="eyebrow-line" />
            Architecture Standards
          </div>
          <h2 className="projects-cta-title">
            Need scalable microservices or high-throughput APIs?
          </h2>
          <p className="projects-cta-text">
            Clean Architecture, event-driven design, and CI/CD that hold up under real production
            load.
          </p>
        </div>
        <Link to="/contact" className="btn-p projects-cta-btn">
          Discuss Architecture →
        </Link>
      </div>
    </section>
  )
}
