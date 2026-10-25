import { Link } from 'react-router-dom'

export default function NookTables() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Professional Project — Client / Nook Tables</div>
                <h1 className="proj-detail-title">Nook<span>Tables</span></h1>
                <p className="proj-detail-tagline">A mobile-first social app for meeting over coffee in Lahore. Open a table,
                  find nearby locals, and join the conversation — real plans with real people, not endless swiping.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">Next.js</span>
                  <span className="ptag">TypeScript</span>
                  <span className="ptag">React</span>
                  <span className="ptag">Mobile Web</span>
                  <span className="ptag">PWA</span>
                </div>
                <div className="proj-detail-actions">
                  <a href="https://nooktables.app/" target="_blank" rel="noopener noreferrer" className="btn-p">Live Demo ↗</a>
                  <div className="coming-soon-badge">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <rect x="1" y="2.5" width="6" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M2.5 2.5V2a1.5 1.5 0 013 0v.5" stroke="currentColor" strokeWidth="1.1"
                        strokeLinecap="round" />
                    </svg>
                    Client Project
                  </div>
                </div>
              </div>
            </div>


            <div className="stat-row" style={{ margin: 0 }}>
              <div className="stat-cell">
                <div className="stat-n">Live</div>
                <div className="stat-l">Production Deployed</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">LHR</div>
                <div className="stat-l">Launch City — Lahore</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">Mobile</div>
                <div className="stat-l">Phone-First Experience</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is NookTables?</h3>
                  <p className="pd-text">NookTables helps people in Lahore share their next coffee. Instead of dating apps or
                    networking events, you open a table — a simple meetup at a café — and nearby people can join the
                    conversation.</p>
                  <p className="pd-text">The product is built as a mobile-first Next.js web app. Desktop visitors get a landing
                    experience with a QR code to open the app on their phone; on mobile, the full experience runs in the
                    browser as an installable web app.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Features</div>
                    <ul className="feature-list">
                      <li>Open a coffee table — set a place and invite others to join</li>
                      <li>Discover nearby tables and join conversations in your area</li>
                      <li>Phone-first flow with QR landing for desktop visitors</li>
                      <li>Installable mobile web experience (PWA-ready meta + theme)</li>
                      <li>Designed around real, local meetups — starting in Lahore</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Product</div>
                  <h3 className="pd-section-title">How It Works</h3>
                  <p className="pd-text">NookTables is built around a simple loop: someone opens a table at a café, people nearby
                    see it, and they join. The web surface is Next.js — a desktop landing that hands off to the mobile app
                    via QR, and a mobile UI meant to feel native on the phone.</p>


                  <div
                    style={{ marginTop: '1.8rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>
                      Experience Flow</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--lime)', flexShrink: 0, marginTop: '2px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Desktop Landing</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Brand, tagline, QR code → open on phone</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '2px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Mobile App</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Find nearby tables · Open a table · Join the conversation</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid #222', flexShrink: 0, marginTop: '2px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>In Person</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Meet over coffee — locals, new faces, real conversation</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">Next.js</div>
                        <div className="tech-item-role">App / Landing</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">React</div>
                        <div className="tech-item-role">UI</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">TypeScript</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Mobile Web</div>
                        <div className="tech-item-role">Primary Surface</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">nginx</div>
                        <div className="tech-item-role">Reverse Proxy</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="live-banner">
              <div>
                <div className="live-banner-label">Live Product</div>
                <div className="live-banner-url">nooktables.app</div>
                <div className="live-banner-sub">Coffee meetups · Lahore · Open a table, join the conversation</div>
              </div>
              <a href="https://nooktables.app/" target="_blank" rel="noopener noreferrer" className="btn-p"
                style={{ whiteSpace: 'nowrap' }}>Open Live Demo ↗</a>
            </div>

            <div className="detail-bottom">
              <Link to="/projects" className="btn-s">← Back to Projects</Link>
              <div className="detail-bottom-actions">
                <div className="coming-soon-badge">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect x="1" y="2.5" width="6" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" />
                    <path d="M2.5 2.5V2a1.5 1.5 0 013 0v.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                  Client Project
                </div>
                <a href="https://nooktables.app/" target="_blank" rel="noopener noreferrer" className="btn-p">Live Demo ↗</a>
              </div>
            </div>
    </>
  )
}
