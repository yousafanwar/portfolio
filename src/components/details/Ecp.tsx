import { Link } from 'react-router-dom'

export default function Ecp() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Professional Project — Client / ECP Bird
                  Buzz</div>
                <h1 className="proj-detail-title">Bird<span>Buzz</span><br />Store</h1>
                <p className="proj-detail-tagline">A full-stack e-commerce platform for bird supplies — product catalog,
                  filtering, cart, checkout, and JWT-authenticated accounts. Built as a monorepo with NestJS on the backend
                  and Next.js on the frontend, live at aytraders.com.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">NestJS</span>
                  <span className="ptag">Next.js</span>
                  <span className="ptag">TypeScript</span>
                  <span className="ptag">PostgreSQL</span>
                  <span className="ptag">Tailwind CSS</span>
                  <span className="ptag">Cloudinary</span>
                  <span className="ptag">JWT</span>
                </div>
                <div className="proj-detail-actions">
                  <a href="https://aytraders.com/" target="_blank" rel="noopener noreferrer" className="btn-p">Live Demo ↗</a>
                  <div className="coming-soon-badge">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <rect x="1" y="2.5" width="6" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M2.5 2.5V2a1.5 1.5 0 013 0v.5" stroke="currentColor" strokeWidth="1.1"
                        strokeLinecap="round" />
                    </svg>
                    Private — Client Project
                  </div>
                </div>
              </div>
            </div>


            <div className="stat-row" style={{ margin: 0 }}>
              <div className="stat-cell">
                <div className="stat-n">2</div>
                <div className="stat-l">Services (Monorepo)</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">Live</div>
                <div className="stat-l">Production Deployed</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">Full</div>
                <div className="stat-l">Auth + Cart + Orders</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is ECP Bird Buzz?</h3>
                  <p className="pd-text">ECP is a full-stack e-commerce application for bird products — from feed to accessories.
                    It covers the complete shopping journey: browsing a product catalog with filters, adding items to cart,
                    authenticating, and placing orders.</p>
                  <p className="pd-text">The project is structured as a monorepo with two services: a NestJS backend that handles
                    auth, products, cart, orders, and payment flows; and a Next.js (App Router) storefront that consumes the
                    API and renders a fast, SEO-friendly UI.</p>
                  <p className="pd-text">Product images are managed through Cloudinary, giving the storefront optimized delivery
                    and transformation out of the box. The storefront is live at aytraders.com.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Features</div>
                    <ul className="feature-list">
                      <li>Product catalog with category filtering and search</li>
                      <li>Shopping cart — add, update quantity, remove items</li>
                      <li>JWT-based authentication with access + refresh token flow</li>
                      <li>Order management and payment flow handling</li>
                      <li>Cloudinary image uploads with CDN delivery</li>
                      <li>Next.js App Router for SSR and fast page loads</li>
                      <li>Fully responsive Tailwind CSS storefront UI</li>
                      <li>PostgreSQL with NestJS typed ORM layer</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Architecture</div>
                  <h3 className="pd-section-title">Monorepo Structure</h3>
                  <p className="pd-text">Backend and frontend live side-by-side in a single repo, keeping shared types and
                    deployment config in one place. Each service is independently runnable in development and independently
                    deployable in production.</p>
                  <p className="pd-text">The NestJS backend exposes a REST API that the Next.js frontend consumes via <code
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.78rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>NEXT_PUBLIC_API_URL</code>.
                    In local dev the Next.js server proxies requests; in production the frontend hits the deployed backend URL
                    directly.</p>


                  <div
                    style={{ marginTop: '1.8rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>
                      Monorepo Layout</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--lime)', flexShrink: 0, marginTop: '2px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>backend_service <span
                              style={{ color: 'var(--label)', fontFamily: '\'Space Mono\',monospace', fontSize: '.65rem' }}>:5000</span></div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>NestJS · Auth · Products · Cart ·
                            Orders · Payment</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '2px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>frontend_service <span
                              style={{ color: 'var(--label)', fontFamily: '\'Space Mono\',monospace', fontSize: '.65rem' }}>:3000</span></div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Next.js App Router · React · Tailwind ·
                            Cloudinary</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid #222', flexShrink: 0, marginTop: '2px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>PostgreSQL</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Hosted DB · SSL connection string via
                            env</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">NestJS</div>
                        <div className="tech-item-role">Backend API</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Next.js</div>
                        <div className="tech-item-role">Frontend</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">TypeScript</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">PostgreSQL</div>
                        <div className="tech-item-role">Database</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Tailwind</div>
                        <div className="tech-item-role">Styling</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Cloudinary</div>
                        <div className="tech-item-role">Images / CDN</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">JWT</div>
                        <div className="tech-item-role">Auth Tokens</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Vercel</div>
                        <div className="tech-item-role">Deployment</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="live-banner">
              <div>
                <div className="live-banner-label">Live Storefront</div>
                <div className="live-banner-url">aytraders.com</div>
                <div className="live-banner-sub">E-commerce · Full catalog · Auth + cart + orders</div>
              </div>
              <a href="https://aytraders.com/" target="_blank" rel="noopener noreferrer" className="btn-p"
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
                  Private Repo
                </div>
                <a href="https://aytraders.com/" target="_blank" rel="noopener noreferrer" className="btn-p">Live Demo ↗</a>
              </div>
            </div>
    </>
  )
}
