import { Link } from 'react-router-dom'

export default function SocialOneHub() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Freelance Project — Lahore</div>
                <h1 className="proj-detail-title">Social<span>One</span>Hub</h1>
                <p className="proj-detail-tagline">SaaS social media management platform supporting Facebook, Instagram,
                  Pinterest, and Twitter. Pexels media search, Graph API insights, subscription-based access control, and a
                  full suite of backend APIs for analytics, scheduling, and social integrations.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">TypeScript</span>
                  <span className="ptag">React</span>
                  <span className="ptag">Next.js</span>
                  <span className="ptag">Node.js</span>
                  <span className="ptag">PostgreSQL</span>
                  <span className="ptag">MUI</span>
                  <span className="ptag">Graph API</span>
                  <span className="ptag">Pexels API</span>
                </div>
                <div className="proj-detail-actions">
                  <div className="coming-soon-badge">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <rect x="1" y="2.5" width="6" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M2.5 2.5V2a1.5 1.5 0 013 0v.5" stroke="currentColor" strokeWidth="1.1"
                        strokeLinecap="round" />
                    </svg>
                    Freelance — Client Project
                  </div>
                </div>
              </div>
            </div>


            <div className="stat-row" style={{ margin: 0 }}>
              <div className="stat-cell">
                <div className="stat-n">+40%</div>
                <div className="stat-l">Media Search Efficiency</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">−25%</div>
                <div className="stat-l">Load Time (Infinite Scroll)</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">4</div>
                <div className="stat-l">Social Platforms</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is SocialOneHub?</h3>
                  <p className="pd-text">SocialOneHub is a SaaS platform that lets businesses manage their social media presence
                    across multiple platforms from a single dashboard. I contributed as a full-stack developer, building and
                    integrating core backend APIs and frontend features throughout the product.</p>
                  <p className="pd-text">The platform currently supports Facebook, Instagram, Pinterest, and Twitter, with
                    LinkedIn and TikTok planned. Access to features is gated by subscription tier, with different capabilities
                    unlocked at each plan level.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">My Contributions</div>
                    <ul className="feature-list">
                      <li>Integrated Pexels API for in-app stock media search, giving users access to a full media library
                        without leaving the dashboard — increased media workflow efficiency by 40%</li>
                      <li>Implemented infinite scrolling on content feeds, replacing paginated loads and reducing perceived
                        load time by 25%</li>
                      <li>Built Facebook and Instagram insights using the Graph API — page analytics, post performance, and
                        audience data surfaced directly in the dashboard</li>
                      <li>Developed Twitter login and post management, including OAuth flow and posting directly from the
                        platform</li>
                      <li>Built subscription-based access control to gate features and content by plan tier</li>
                      <li>Developed core backend APIs for media, analytics, subscriptions, and social integrations</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Integrations</div>
                  <h3 className="pd-section-title">Platform Coverage</h3>
                  <p className="pd-text">Each social platform required its own integration approach — OAuth flows differ, API rate
                    limits vary, and the data models returned by each platform's API are inconsistent. Building a unified
                    dashboard meant normalising all of that into a consistent internal data layer.</p>


                  <div
                    style={{ marginTop: '2rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.4rem', textTransform: 'uppercase' }}>
                      Platform Status</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Facebook</div>
                        <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.1em' }}>
                          LIVE · Graph API + Insights</div>
                      </div>
                      <div style={{ height: '1px', background: 'var(--border)' }}></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Instagram</div>
                        <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.1em' }}>
                          LIVE · Graph API + Insights</div>
                      </div>
                      <div style={{ height: '1px', background: 'var(--border)' }}></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Twitter / X</div>
                        <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.1em' }}>
                          LIVE · OAuth + Post Mgmt</div>
                      </div>
                      <div style={{ height: '1px', background: 'var(--border)' }}></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Pinterest</div>
                        <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.1em' }}>
                          LIVE</div>
                      </div>
                      <div style={{ height: '1px', background: 'var(--border)' }}></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>LinkedIn</div>
                        <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.1em' }}>PLANNED
                        </div>
                      </div>
                      <div style={{ height: '1px', background: 'var(--border)' }}></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>TikTok</div>
                        <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.1em' }}>PLANNED
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">TypeScript</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Next.js</div>
                        <div className="tech-item-role">Frontend</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">React</div>
                        <div className="tech-item-role">UI Layer</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Node.js</div>
                        <div className="tech-item-role">Backend</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">PostgreSQL</div>
                        <div className="tech-item-role">Database</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">MUI</div>
                        <div className="tech-item-role">Components</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Graph API</div>
                        <div className="tech-item-role">FB + IG</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Pexels API</div>
                        <div className="tech-item-role">Media Search</div>
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
                  Freelance — Client Project
                </div>
              </div>
            </div>
    </>
  )
}
