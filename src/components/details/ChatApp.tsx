import { Link } from 'react-router-dom'

export default function ChatApp() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Project — 02 / ChatApp 2.0</div>
                <h1 className="proj-detail-title">Chat<span>App</span><br />2.0</h1>
                <p className="proj-detail-tagline">Full-stack real-time messaging with a microservices backbone — auth, user, and
                  chat as independent services, stitched together with Socket.IO and Docker Compose.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">React</span>
                  <span className="ptag">TypeScript</span>
                  <span className="ptag">Node.js</span>
                  <span className="ptag">Socket.IO</span>
                  <span className="ptag">MongoDB</span>
                  <span className="ptag">Docker</span>
                  <span className="ptag">Microservices</span>
                </div>
                <div className="proj-detail-actions">
                  <a href="https://chat.aytraders.com/login" target="_blank" rel="noopener noreferrer" className="btn-p">Live Demo
                    ↗</a>
                  <a href="https://github.com/yousafanwar/ChatApp2.0" target="_blank" rel="noopener noreferrer"
                    className="btn-s">View on GitHub</a>
                </div>
              </div>
            </div>


            <div className="stat-row" style={{ margin: 0 }}>
              <div className="stat-cell">
                <div className="stat-n">3</div>
                <div className="stat-l">Microservices</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">RT</div>
                <div className="stat-l">Real-Time Messaging</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">Docker</div>
                <div className="stat-l">Containerised</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is ChatApp 2.0?</h3>
                  <p className="pd-text">ChatApp 2.0 is a full-stack real-time messaging application built around a microservices
                    architecture. Instead of a single monolithic server, three independent Node.js services handle auth, user
                    management, and chat — each with its own MongoDB database and Docker container.</p>
                  <p className="pd-text">The frontend is a React + TypeScript SPA that connects to the chat service via Socket.IO
                    for live message delivery, while REST calls handle everything else through a Vite proxy in development and
                    a configurable base URL in production.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Features</div>
                    <ul className="feature-list">
                      <li>1:1 real-time messaging and group chat via Socket.IO</li>
                      <li>JWT-based auth with access + refresh token flow</li>
                      <li>Contact management — add, search, and view user profiles</li>
                      <li>Group creation and member management</li>
                      <li>Profile updates — name, email, and avatar</li>
                      <li>Image and video message attachments</li>
                      <li>Protected routes on the frontend with auth middleware</li>
                      <li>One-command spin-up with Docker Compose</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Architecture</div>
                  <h3 className="pd-section-title">How It's Structured</h3>
                  <p className="pd-text">Each service runs in isolation — the auth service owns JWT signing and verification, the
                    user service handles profiles and contacts, and the chat service manages Socket.IO connections and message
                    persistence. Cross-service calls are HTTP (e.g. chat service resolves sender details from user service).
                  </p>
                  <p className="pd-text">This separation means each piece can be scaled, deployed, or swapped independently — a
                    meaningful difference from a monolith, even at this scale.</p>


                  <div
                    style={{ marginTop: '2rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>
                      Service Map</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--lime)', flexShrink: 0 }}></div>
                        <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>Frontend <span
                            style={{ color: 'var(--label)', fontFamily: '\'Space Mono\',monospace', fontSize: '.68rem' }}>:5173</span> — React + Vite
                          + Socket.IO client</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0 }}></div>
                        <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>Chat Service <span
                            style={{ color: 'var(--label)', fontFamily: '\'Space Mono\',monospace', fontSize: '.68rem' }}>:5000</span> — Socket.IO +
                          message APIs</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0 }}></div>
                        <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>User Service <span
                            style={{ color: 'var(--label)', fontFamily: '\'Space Mono\',monospace', fontSize: '.68rem' }}>:5001</span> — profiles,
                          contacts, groups</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0 }}></div>
                        <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>Auth Service <span
                            style={{ color: 'var(--label)', fontFamily: '\'Space Mono\',monospace', fontSize: '.68rem' }}>:5002</span> — register,
                          login, token flow</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid #222', flexShrink: 0 }}></div>
                        <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>MongoDB <span
                            style={{ color: 'var(--label)', fontFamily: '\'Space Mono\',monospace', fontSize: '.68rem' }}>:27017</span> — separate DB
                          per service (Docker network)</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">React</div>
                        <div className="tech-item-role">Frontend</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">TypeScript</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Vite</div>
                        <div className="tech-item-role">Build Tool</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Socket.IO</div>
                        <div className="tech-item-role">Real-Time</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Node.js</div>
                        <div className="tech-item-role">Runtime</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Express</div>
                        <div className="tech-item-role">HTTP Layer</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">MongoDB</div>
                        <div className="tech-item-role">Database</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Docker</div>
                        <div className="tech-item-role">Containers</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">JWT</div>
                        <div className="tech-item-role">Auth Tokens</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Tailwind</div>
                        <div className="tech-item-role">Styling</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="live-banner">
              <div>
                <div className="live-banner-label">Live Application</div>
                <div className="live-banner-url">chat.aytraders.com</div>
                <div className="live-banner-sub">Real-time messaging · Microservices stack · Deployed</div>
              </div>
              <a href="https://chat.aytraders.com/login" target="_blank" rel="noopener noreferrer" className="btn-p"
                style={{ whiteSpace: 'nowrap' }}>Open Live Demo ↗</a>
            </div>

            <div className="detail-bottom">
              <Link to="/projects" className="btn-s">← Back to Projects</Link>
              <div className="detail-bottom-actions">
                <a href="https://github.com/yousafanwar/ChatApp2.0" target="_blank" rel="noopener noreferrer"
                  className="btn-s">GitHub</a>
                <a href="https://chat.aytraders.com/login" target="_blank" rel="noopener noreferrer" className="btn-p">Live Demo
                  ↗</a>
              </div>
            </div>
    </>
  )
}
