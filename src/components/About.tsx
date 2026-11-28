import { EXPERIENCE, SITE, SKILLS } from '../data'

export default function About() {
  return (
    <div id="about-view">
      <div className="proj-detail-hero">
        <div className="proj-detail-grid"></div>
        <div className="proj-detail-glow"></div>
        <div className="proj-detail-inner">
          <div className="proj-detail-eyebrow">
            <span className="eyebrow-line"></span>Lahore, Pakistan · UTC+5 · Remote contracts
          </div>
          <h1 className="proj-detail-title">
            Yousaf<span>Anwar</span>
            <br />
            Ali
          </h1>
          <p className="proj-detail-tagline">
            Backend engineer with 4+ years shipping production APIs in Django, NestJS, and PostgreSQL.
            Current work is notification delivery, reward integrity, and real-time game events for a
            consumer rewards platform with 3.5M+ users.
          </p>
          <div className="proj-detail-tags">
            <span className="ptag">Django</span>
            <span className="ptag">NestJS</span>
            <span className="ptag">PostgreSQL</span>
            <span className="ptag">Redis</span>
            <span className="ptag">BullMQ</span>
          </div>
          <div className="proj-detail-actions" style={{ gap: '1rem' }}>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-p"
              style={{ fontSize: '.75rem', padding: '.6rem 1.4rem' }}
            >
              Download Resume
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-s"
              style={{ fontSize: '.75rem', padding: '.6rem 1.4rem' }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="proj-detail-body">
        <div style={{ maxWidth: '760px', marginBottom: '4rem' }}>
          <div className="pd-section-lbl">Bio</div>
          <h3 className="pd-section-title">Who I Am</h3>
          <p className="pd-text" style={{ marginTop: '1rem' }}>
            I work on production APIs. At Omnisoft that means FCM topic delivery, lazy notification
            inboxes, staff permissions, and reward caps on the write path for 3.5M+ users, plus a
            NestJS and BullMQ bridge that keeps Unity leaderboards off the score-submit path.
          </p>
          <p className="pd-text" style={{ marginTop: '.9rem' }}>
            Before that I built NestJS services for RecruitMe, a US staffing product used by 50+
            businesses and 5,000+ workers. Pay is calculated from mobile check-in and check-out.
            Kafka and Redis move that work off the request path.
          </p>
          <p className="pd-text" style={{ marginTop: '.9rem' }}>
            I overlap US Eastern mornings and Central European workdays from Lahore. React and
            Next.js when a project needs a client. First software role in 2022, after aircraft
            maintenance.
          </p>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <div className="pd-section-lbl">Skills</div>
          <h3 className="pd-section-title" style={{ marginBottom: '1.5rem' }}>
            What I Work With
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--faint)' }}>
            {SKILLS.map((skill) => (
              <div key={skill.cat} className="about-skill-row">
                <div className="about-skill-cat">{skill.cat}</div>
                <div style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.8 }}>
                  {skill.items.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <div className="pd-section-lbl">Experience</div>
          <h3 className="pd-section-title" style={{ marginBottom: '1.5rem' }}>
            Work History
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--faint)' }}>
            {EXPERIENCE.map((job) => (
              <div key={`${job.company}-${job.period}`} style={{ background: 'var(--bg)', padding: '1.8rem 2rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>{job.role}</div>
                    <div
                      style={{
                        fontFamily: "'Space Mono',monospace",
                        fontSize: '.65rem',
                        color: 'var(--lime)',
                        marginTop: '.3rem',
                        letterSpacing: '.05em',
                      }}
                    >
                      {job.company} · {job.location}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Mono',monospace",
                      fontSize: '.62rem',
                      color: 'var(--label)',
                      letterSpacing: '.05em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {job.period}
                  </div>
                </div>
                {job.projects.map((project) => (
                  <p
                    key={project.name}
                    style={{ fontSize: '.83rem', color: 'var(--muted-dim)', lineHeight: 1.7, marginTop: '.9rem' }}
                  >
                    <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{project.name}.</strong>{' '}
                    {project.summary}
                  </p>
                ))}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.9rem' }}>
                  {[...new Set(job.projects.flatMap((project) => project.tags))].map((tag) => (
                    <span key={tag} className="ptag" style={{ fontSize: '.62rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <div className="pd-section-lbl">Education</div>
          <h3 className="pd-section-title" style={{ marginBottom: '1.5rem' }}>
            Earlier career and school
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--faint)' }}>
            <div style={{ background: 'var(--bg)', padding: '1.5rem 2rem' }}>
              <div style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--text)' }}>
                Aircraft maintenance
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '.63rem', color: 'var(--lime)', marginTop: '.3rem' }}>
                2014 — 2019 · Left the field in 2019. First software role in 2022.
              </div>
            </div>
            <div style={{ background: 'var(--bg)', padding: '1.5rem 2rem' }}>
              <div style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--text)' }}>
                Apprenticeship in Aircraft Maintenance Engineering
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '.63rem', color: 'var(--lime)', marginTop: '.3rem' }}>
                AMETI · 2010 — 2014
              </div>
            </div>
            <div style={{ background: 'var(--bg)', padding: '1.5rem 2rem' }}>
              <div style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--text)' }}>
                Higher Secondary School (FSc — Pre Engineering)
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '.63rem', color: 'var(--lime)', marginTop: '.3rem' }}>
                Punjab Group of Colleges · 2008 — 2010
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
