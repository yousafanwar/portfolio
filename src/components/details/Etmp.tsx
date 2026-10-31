import { Link } from 'react-router-dom'

export default function Etmp() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Full-Stack Project — ETMP</div>
                <h1 className="proj-detail-title">Enterprise<br /><span>Task Management</span><br />Platform</h1>
                <p className="proj-detail-tagline">Production-style task system end to end: Clean Architecture ASP.NET Core API,
                  React 19 SPA, skills-aware auto-assignment, JWT + HttpOnly refresh rotation, AI feedback→task intake
                  (Gemini or OpenAI), and WhatsApp Cloud API as a second intake channel — with Docker Compose and GitHub Actions deploy.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">ASP.NET Core</span>
                  <span className="ptag">.NET 10</span>
                  <span className="ptag">EF Core</span>
                  <span className="ptag">SQL Server</span>
                  <span className="ptag">React 19</span>
                  <span className="ptag">TypeScript</span>
                  <span className="ptag">Vite 8</span>
                  <span className="ptag">JWT</span>
                  <span className="ptag">Gemini / OpenAI</span>
                  <span className="ptag">WhatsApp</span>
                  <span className="ptag">Docker</span>
                  <span className="ptag">GitHub Actions</span>
                </div>
                <div className="proj-detail-actions">
                  <a href="https://projectmanagementfrontend.omnisoft.info" target="_blank" rel="noopener noreferrer" className="btn-p">Live
                    Demo ↗</a>
                  <a href="https://github.com/yousafanwar/EnterpriseTaskManagement" target="_blank" rel="noopener noreferrer"
                    className="btn-s">Backend GitHub</a>
                  <a href="https://github.com/yousafanwar/etmp_frontend" target="_blank" rel="noopener noreferrer"
                    className="btn-s">Frontend GitHub</a>
                </div>
              </div>
            </div>


            <div className="stat-row" style={{ margin: 0 }}>
              <div className="stat-cell">
                <div className="stat-n">6</div>
                <div className="stat-l">Clean Architecture Projects</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">AI</div>
                <div className="stat-l">Feedback → Task Intake</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">CI/CD</div>
                <div className="stat-l">Build · Test · Push · Deploy</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is ETMP?</h3>
                  <p className="pd-text">ETMP is a full-stack enterprise task management product I built as a public portfolio
                    system — not a toy CRUD demo. Teams manage projects and members, move work through a domain-enforced
                    Pending → InProgress → Completed lifecycle, discuss via comments, and keep an audit trail on every task.</p>
                  <p className="pd-text">The differentiator is intake: free-text feedback (and optional images) becomes a structured
                    task via Gemini or OpenAI, then a skill-overlap policy picks the best project member. The same workflow is
                    exposed over Meta WhatsApp Cloud API — menu → project picker → feedback/image → AI create — with signed
                    webhooks and idempotent message handling.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Engineering Highlights</div>
                    <ul className="feature-list">
                      <li>Clean Architecture solution: API, Application, Domain, Infrastructure, Persistence, Tests — Domain has zero NuGet deps</li>
                      <li>Rich domain model on <code style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.75rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>TaskItem</code> — private setters; Start/Complete throw if assignee or status rules are violated</li>
                      <li>JWT access + hashed refresh tokens in HttpOnly cookie (<code style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.75rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>Secure</code>, <code style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.75rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>SameSite=Strict</code>) with rotation</li>
                      <li>AI workflow: magic-byte image validation → Cloudinary upload → provider analysis → skill filter → assignee policy → history; orphaned images deleted on failure</li>
                      <li>WhatsApp: HMAC signature verify, interactive list pagination, 60-min sessions, <code style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.75rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>ProcessedWhatsAppMessage</code> idempotency, system bot user for audit</li>
                      <li>Feature flags with fail-fast startup when AI/WhatsApp credentials or <code style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.75rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>AI/agent.md</code> are missing</li>
                      <li>xUnit coverage on AI JSON parse, skill ID validation, and assignment policy; GitHub Actions restore/build/test → Docker Hub → SSH compose deploy</li>
                    </ul>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Frontend</div>
                    <h3 className="pd-section-title" style={{ marginTop: '.6rem' }}>React SPA That Matches the API</h3>
                    <p className="pd-text">React 19 + TypeScript + Vite 8 + React Router 7. Shared HTTP client with a single-flight
                      refresh mutex on 401, FormData multipart for AI analyze, and AbortController cleanup on unmount.</p>
                    <p className="pd-text" style={{ marginTop: '.9rem' }}>Create Task doubles as “ETMP Copilot”: describe an objective
                      (+ image) to auto-draft title, description, required skills, and assignee — or fill structured fields
                      manually. Dashboard, projects, tasks, team, and settings sit behind an auth layout with JWT claims + profile hydration.</p>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Architecture</div>
                  <h3 className="pd-section-title">How It's Structured</h3>
                  <p className="pd-text">Dependency flow is strict: <strong style={{ color: 'var(--muted)', fontWeight: 600 }}>API → Infrastructure / Persistence → Application → Domain</strong>.
                    Controllers stay thin; Application owns workflows (AI analyze-and-create, WhatsApp inbound); Infrastructure swaps Gemini/OpenAI/Cloudinary/WhatsApp behind interfaces; Persistence is EF Core + repositories.</p>
                  <div
                    style={{ marginTop: '2rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.4rem', textTransform: 'uppercase' }}>
                      Solution Layout</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--lime)', flexShrink: 0, marginTop: '3px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>API</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Controllers · Swagger · JWT · CORS · Feature registration · agent.md</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Application</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Services · DTOs · Policies · AI workflow · WhatsApp handler</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Domain</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Entities &amp; enums — encapsulated TaskItem lifecycle, skills graph, WhatsApp sessions</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Infrastructure</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Gemini / OpenAI · Cloudinary · WhatsApp Graph · Disabled* null objects</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid #222', flexShrink: 0, marginTop: '3px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Persistence + Tests</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>EF Core DbContext · repos · migrations · xUnit policy/parser tests</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">ASP.NET Core</div>
                        <div className="tech-item-role">API</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">.NET 10</div>
                        <div className="tech-item-role">Runtime</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">EF Core</div>
                        <div className="tech-item-role">ORM</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">SQL Server</div>
                        <div className="tech-item-role">Database</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">React 19</div>
                        <div className="tech-item-role">SPA</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">TypeScript</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Vite 8</div>
                        <div className="tech-item-role">Build</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">JWT + BCrypt</div>
                        <div className="tech-item-role">Auth</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Gemini / OpenAI</div>
                        <div className="tech-item-role">AI Intake</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Cloudinary</div>
                        <div className="tech-item-role">Images</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">WhatsApp API</div>
                        <div className="tech-item-role">Messaging</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">xUnit</div>
                        <div className="tech-item-role">Tests</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Docker</div>
                        <div className="tech-item-role">Containers</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">GitHub Actions</div>
                        <div className="tech-item-role">CI/CD</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
                <div className="pd-section-lbl">Highlights</div>
                <h3 className="pd-section-title" style={{ marginBottom: '2rem' }}>What Makes It Distinct</h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5px', background: 'var(--faint)' }}>
                  <div style={{ background: 'var(--bg)', padding: '2rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem' }}>
                      Assignment Policy</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7 }}>Pure policy class picks members by skill overlap, then lowest user id — unit-tested without touching the database.</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '2rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem' }}>
                      Null-Object Providers</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7 }}>Disabled AI, image storage, and WhatsApp clients keep DI stable when feature flags are off — no null checks scattered through call sites.</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '2rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem' }}>
                      Auth Refresh</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7 }}>Single shared refresh promise prevents concurrent token refreshes; failed refresh clears the session and redirects to login.</p>
                  </div>
                </div>

                <div style={{ background: 'var(--faint)', marginTop: '1.5px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5px' }}>
                  <div style={{ background: 'var(--bg)', padding: '2rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem' }}>
                      WhatsApp Reliability</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7 }}>Webhook retries are safe: processed message IDs are persisted before relying on Meta’s delivery guarantees. Interactive lists paginate when projects exceed Graph API row limits.</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '2rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem' }}>
                      Ship Pipeline</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7 }}>On push to <code style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.72rem', color: 'var(--lime)' }}>master</code>: restore → build → test → push <code style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.72rem', color: 'var(--lime)' }}>yousaf007/etmp-api</code> (:latest + :sha) → SCP compose → pull &amp; up on the server.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="detail-bottom">
              <Link to="/projects" className="btn-s">← Back to Projects</Link>
              <div className="detail-bottom-actions">
                <a href="https://github.com/yousafanwar/EnterpriseTaskManagement" target="_blank" rel="noopener noreferrer"
                  className="btn-s">Backend</a>
                <a href="https://github.com/yousafanwar/etmp_frontend" target="_blank" rel="noopener noreferrer"
                  className="btn-s">Frontend</a>
                <a href="https://projectmanagementfrontend.omnisoft.info" target="_blank" rel="noopener noreferrer" className="btn-p">Live
                  Demo ↗</a>
              </div>
            </div>
    </>
  )
}
