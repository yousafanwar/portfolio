import { Link } from 'react-router-dom'

export default function RecruitMe() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Professional Project — MB Services, Dubai
                </div>
                <h1 className="proj-detail-title">Recruit<span>Me</span></h1>
                <p className="proj-detail-tagline">US-based SaaS workforce management system for staffing agencies. 15+
                  microservices built from scratch in 8 months — automated worker scheduling, mobile check-in/out with salary
                  auto-calculation, and a platform that increased agency revenue by up to 30%.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">Node.js</span>
                  <span className="ptag">Vue.js</span>
                  <span className="ptag">PostgreSQL</span>
                  <span className="ptag">Microservices</span>
                  <span className="ptag">Express</span>
                  <span className="ptag">MaterializeCSS</span>
                  <span className="ptag">React</span>
                  <span className="ptag">MongoDB</span>
                </div>
                <div className="proj-detail-actions">
                  <div className="coming-soon-badge">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <rect x="1" y="2.5" width="6" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M2.5 2.5V2a1.5 1.5 0 013 0v.5" stroke="currentColor" strokeWidth="1.1"
                        strokeLinecap="round" />
                    </svg>
                    Proprietary — MB Services
                  </div>
                </div>
              </div>
            </div>


            <div className="stat-row" style={{ margin: 0 }}>
              <div className="stat-cell">
                <div className="stat-n">15+</div>
                <div className="stat-l">Microservices</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">5k+</div>
                <div className="stat-l">Workers on Platform</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">30%</div>
                <div className="stat-l">Revenue Increase</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is RecruitMe?</h3>
                  <p className="pd-text">RecruitMe is a US-based SaaS platform for staffing agencies that manage pools of
                    short-term workers for events. Before the platform, agencies were manually contacting workers individually
                    for available jobs — a process that didn't scale.</p>
                  <p className="pd-text">I worked in an agile team of 5 to build the entire system from scratch, delivering 15+
                    microservices in 8 months. The platform is fully automated — agencies post jobs, workers get notified, and
                    when they check in and out via the mobile app, salaries are calculated automatically based on hours
                    logged.</p>
                  <p className="pd-text">The result was up to a 30% increase in agency revenue by removing the operational
                    bottleneck of manual worker coordination.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Key Features</div>
                    <ul className="feature-list">
                      <li>Automated salary calculation based on mobile app check-in and check-out timestamps — no manual
                        timesheet processing</li>
                      <li>Worker pool management — agencies can post available jobs and workers self-assign, removing
                        individual outreach entirely</li>
                      <li>15+ independent microservices each owning a specific domain, deployed and scaled independently</li>
                      <li>Used by 50+ businesses and 5,000+ workers across the US</li>
                      <li>Built and delivered from scratch in 8 months by an agile team of 5</li>
                      <li>Full-stack — Node.js/Express backend services consumed by a Vue.js web dashboard and a React
                        mobile-companion interface</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Architecture</div>
                  <h3 className="pd-section-title">Microservices at Scale</h3>
                  <p className="pd-text">Each service owns a single domain — auth, workers, jobs, scheduling, notifications,
                    payments, and more — with its own database connection and deployment lifecycle. Services communicate over
                    HTTP with clearly defined contracts, making them independently testable and replaceable.</p>
                  <p className="pd-text">PostgreSQL is the primary store for relational data (jobs, shifts, salaries), with
                    MongoDB used for activity logs and event-driven records where schema flexibility matters.</p>


                  <div
                    style={{ marginTop: '2rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.4rem', textTransform: 'uppercase' }}>
                      Service Domains</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.6rem' }}>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted-dim)', display: 'flex', alignItems: 'center', gap: '.6rem' }}><span
                          style={{ width: '6px', height: '6px', background: 'var(--lime)', flexShrink: 0, display: 'inline-block' }}></span>Auth &
                        Users</div>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted-dim)', display: 'flex', alignItems: 'center', gap: '.6rem' }}><span
                          style={{ width: '6px', height: '6px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, display: 'inline-block' }}></span>Worker
                        Management</div>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted-dim)', display: 'flex', alignItems: 'center', gap: '.6rem' }}><span
                          style={{ width: '6px', height: '6px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, display: 'inline-block' }}></span>Job
                        Posting</div>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted-dim)', display: 'flex', alignItems: 'center', gap: '.6rem' }}><span
                          style={{ width: '6px', height: '6px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, display: 'inline-block' }}></span>Scheduling
                      </div>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted-dim)', display: 'flex', alignItems: 'center', gap: '.6rem' }}><span
                          style={{ width: '6px', height: '6px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, display: 'inline-block' }}></span>Check-in
                        / Check-out</div>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted-dim)', display: 'flex', alignItems: 'center', gap: '.6rem' }}><span
                          style={{ width: '6px', height: '6px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, display: 'inline-block' }}></span>Salary
                        Calculation</div>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted-dim)', display: 'flex', alignItems: 'center', gap: '.6rem' }}><span
                          style={{ width: '6px', height: '6px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, display: 'inline-block' }}></span>Notifications
                      </div>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted-dim)', display: 'flex', alignItems: 'center', gap: '.6rem' }}><span
                          style={{ width: '6px', height: '6px', border: '1px solid #2a2a2a', flexShrink: 0, display: 'inline-block' }}></span>Payments
                        & Payroll</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">Node.js</div>
                        <div className="tech-item-role">Runtime</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Express</div>
                        <div className="tech-item-role">HTTP Layer</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Vue.js</div>
                        <div className="tech-item-role">Dashboard UI</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">React</div>
                        <div className="tech-item-role">Mobile UI</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">PostgreSQL</div>
                        <div className="tech-item-role">Primary DB</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">MongoDB</div>
                        <div className="tech-item-role">Event Logs</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">JavaScript</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">MaterializeCSS</div>
                        <div className="tech-item-role">Styling</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="detail-bottom">
              <Link to="/projects" className="btn-s">← Back to Projects</Link>
              <div className="detail-bottom-actions">
                <div className="coming-soon-badge">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect x="1" y="2.5" width="6" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" />
                    <path d="M2.5 2.5V2a1.5 1.5 0 013 0v.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                  Proprietary — MB Services
                </div>
              </div>
            </div>
    </>
  )
}
