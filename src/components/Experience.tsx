import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="home-container">
        <div className="reveal">
          <div className="sec-label">
            <span className="eyebrow-line" />
            Career Timeline
          </div>
          <h2 className="sec-title">Experience &amp; Key Projects</h2>
        </div>

        <div className="exp-timeline">
          {EXPERIENCE.map((job, i) => (
            <article
              key={`${job.company}-${job.period}`}
              className="exp-card reveal"
              style={{ transitionDelay: `${0.08 + i * 0.08}s` }}
            >
              <header className="exp-card-head">
                <div>
                  <h3 className="exp-role">
                    {job.role}{' '}
                    <span className="exp-company">— {job.company}</span>
                  </h3>
                  <p className="exp-meta">
                    {job.location} · {job.period}
                  </p>
                </div>
              </header>

              <div className="exp-projects">
                {job.projects.map((project) => (
                  <div key={project.name} className="exp-project">
                    <h4 className="exp-project-name">{project.name}</h4>
                    <p className="exp-project-summary">{project.summary}</p>
                    <div className="exp-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
