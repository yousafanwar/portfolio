import { Link } from 'react-router-dom'

export default function AuthForge() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Project — 03 / AuthForge API</div>
                <h1 className="proj-detail-title">Auth<span>Forge</span><br />API</h1>
                <p className="proj-detail-tagline">Production-grade authentication API built with NestJS and Prisma. JWT access &
                  refresh tokens, role-based access control, and full test coverage — built to plug into any SaaS.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">NestJS</span>
                  <span className="ptag">TypeScript</span>
                  <span className="ptag">Prisma</span>
                  <span className="ptag">PostgreSQL</span>
                  <span className="ptag">JWT</span>
                  <span className="ptag">RBAC</span>
                </div>
                <div className="proj-detail-actions">
                  <a href="https://auth.aytraders.com/api/docs" target="_blank" rel="noopener noreferrer" className="btn-p">Live
                    Demo ↗</a>
                  <a href="https://github.com/yousafanwar/AuthForge-API" target="_blank" rel="noopener noreferrer"
                    className="btn-s">View on GitHub</a>
                  <button className="btn-s"
                    onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}>Watch Demo</button>
                </div>
              </div>
            </div>


            <div className="stat-row" style={{ margin: 0 }}>
              <div className="stat-cell">
                <div className="stat-n">100%</div>
                <div className="stat-l">Test Coverage</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">3</div>
                <div className="stat-l">Token Strategies</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">RBAC</div>
                <div className="stat-l">Permission System</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is AuthForge?</h3>
                  <p className="pd-text">AuthForge is a production-ready authentication microservice designed to be dropped into
                    any Node.js / NestJS project. It handles all the auth complexity so you can focus on your actual product.
                  </p>
                  <p className="pd-text">Built with security-first principles — short-lived access tokens, rotating refresh
                    tokens, and a full RBAC system that controls what each user role can and can't touch.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Key Features</div>
                    <ul className="feature-list">
                      <li>JWT access tokens with configurable expiry and payload</li>
                      <li>Rotating refresh tokens with invalidation on reuse (RTR strategy)</li>
                      <li>Role-Based Access Control with guard decorators</li>
                      <li>Prisma ORM with PostgreSQL — fully typed database layer</li>
                      <li>E2E and unit tests with Jest — 100% critical path coverage</li>
                      <li>Modular NestJS architecture, easy to extend or integrate</li>
                      <li>Helmet, rate limiting, and input validation baked in</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Technical Decisions</div>
                  <h3 className="pd-section-title">Why These Choices?</h3>
                  <p className="pd-text">NestJS was chosen for its opinionated module system — it forces a clean separation of
                    concerns that scales well as the API grows. The decorator-based guards make RBAC a one-liner at the route
                    level.</p>
                  <p className="pd-text">Prisma over raw SQL or other ORMs because the generated TypeScript client eliminates an
                    entire class of runtime bugs. Schema migrations are version-controlled and repeatable.</p>
                  <p className="pd-text">The refresh token rotation strategy (RTR) detects token theft: if a stolen refresh token
                    is used, the entire token family is invalidated immediately.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">NestJS</div>
                        <div className="tech-item-role">Framework</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">TypeScript</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Prisma</div>
                        <div className="tech-item-role">ORM</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">PostgreSQL</div>
                        <div className="tech-item-role">Database</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">JWT</div>
                        <div className="tech-item-role">Auth Tokens</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Jest</div>
                        <div className="tech-item-role">Testing</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Docker</div>
                        <div className="tech-item-role">Dev Env</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Passport</div>
                        <div className="tech-item-role">Strategies</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="live-banner">
              <div>
                <div className="live-banner-label">Live API Docs</div>
                <div className="live-banner-url">auth.aytraders.com/api/docs</div>
                <div className="live-banner-sub">Swagger UI · Interactive endpoints · Always on</div>
              </div>
              <a href="https://auth.aytraders.com/api/docs" target="_blank" rel="noopener noreferrer" className="btn-p"
                style={{ whiteSpace: 'nowrap' }}>Open Live Demo ↗</a>
            </div>


            <div className="video-section" id="demo-video">
              <div className="video-label">Demo Video</div>
              <div className="video-wrap">
                <iframe src="https://www.loom.com/embed/9d04adce0c3044dea08c59f530ff89bc" frameBorder="0"
                  allowFullScreen></iframe>
              </div>
            </div>

            <div className="detail-bottom">
              <Link to="/projects" className="btn-s">← Back to Projects</Link>
              <div className="detail-bottom-actions">
                <a href="https://github.com/yousafanwar/AuthForge-API" target="_blank" rel="noopener noreferrer"
                  className="btn-s">GitHub</a>
                <a href="https://auth.aytraders.com/api/docs" target="_blank" rel="noopener noreferrer" className="btn-p">Live
                  Demo ↗</a>
              </div>
            </div>
    </>
  )
}
