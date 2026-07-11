import { Link } from 'react-router-dom'

export default function UnityGames() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Professional Project — Omnisoft / Mira
                  Network</div>
                <h1 className="proj-detail-title">Unity<span>Games</span><br />Backend</h1>
                <p className="proj-detail-tagline">A standalone NestJS service built to integrate Unity games into Mira Network.
                  Handles player lifecycle, event-based scoring with global and per-event stats, auto winner calculation, and
                  top-10 leaderboards — all consumed directly by Unity clients over REST.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">NestJS</span>
                  <span className="ptag">TypeScript</span>
                  <span className="ptag">Prisma</span>
                  <span className="ptag">PostgreSQL</span>
                  <span className="ptag">Swagger</span>
                  <span className="ptag">Jest</span>
                </div>
                <div className="proj-detail-actions">
                  <div className="coming-soon-badge">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <rect x="1" y="2.5" width="6" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M2.5 2.5V2a1.5 1.5 0 013 0v.5" stroke="currentColor" strokeWidth="1.1"
                        strokeLinecap="round" />
                    </svg>
                    Proprietary — Omnisoft
                  </div>
                </div>
              </div>
            </div>


            <div className="stat-row" style={{ margin: 0 }}>
              <div className="stat-cell">
                <div className="stat-n">6</div>
                <div className="stat-l">DB Tables / Prisma</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">10</div>
                <div className="stat-l">API Endpoints</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">E2E</div>
                <div className="stat-l">+ Unit Test Suite</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is this service?</h3>
                  <p className="pd-text">As part of Mira Network, the platform integrated Unity-built games to give users another
                    way to earn ADT rewards. I designed and built a dedicated NestJS backend to handle everything the games
                    needed — player registration, score tracking, event management, and leaderboards.</p>
                  <p className="pd-text">Unity clients talk to this service directly over REST. On game start, a single <code
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.78rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>getOrCreateUser</code>
                    call returns everything the client needs: the player record, active event, and current standings. On game
                    end, one <code
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.78rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>updateUserScore</code>
                    call handles the rest.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Key Features</div>
                    <ul className="feature-list">
                      <li>Smart event priority — non-default active events take precedence over the always-on default event,
                        so tournaments override regular gameplay automatically</li>
                      <li>Dual score tracking — highest score and total score maintained at both event level and globally
                        across all games per user</li>
                      <li>Auto winner calculation — marking an event COMPLETED triggers a query for top 10 players, formats
                        ranked results, and stores them as JSON on the event record</li>
                      <li>Protection mechanisms — cannot delete games with active events, cannot delete default or active
                        events, duplicate game names prevented</li>
                      <li>When a game is created, a default ACTIVE event is auto-provisioned so players can always play from
                        day one</li>
                      <li>CORS pre-configured for Unity and WebGL clients</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Architecture</div>
                  <h3 className="pd-section-title">How It's Structured</h3>
                  <p className="pd-text">Six focused NestJS modules, each owning its own controller, service, and Prisma queries.
                    A global PrismaModule is injected across the app without re-importing — keeping modules lean.</p>
                  <p className="pd-text">The database schema has 6 tables with explicit relationships: users, games, events,
                    users_games (global scores), game_events, and event_scores (per-event stats). Prisma handles all
                    migrations and generates a fully-typed client.</p>


                  <div
                    style={{ marginTop: '2rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.4rem', textTransform: 'uppercase' }}>
                      Database Schema</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--lime)', flexShrink: 0, marginTop: '3px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>users <span
                              style={{ color: 'var(--lime)', fontFamily: '\'Space Mono\',monospace', fontSize: '.62rem' }}>+ games</span>
                          </div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Player accounts · Game definitions ·
                            UUID primary keys</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>events <span
                              style={{ color: 'var(--muted-dim)', fontFamily: '\'Space Mono\',monospace', fontSize: '.62rem' }}>[ ACTIVE | COMPLETED |
                              CANCELLED ]</span></div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Tournaments + default event · winners
                            JSON · status enum</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>users_games</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Global highest + total score per user
                            per game · lastPlayed</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>event_scores</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Per-event highest + total score ·
                            source of leaderboard queries</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid #222', flexShrink: 0, marginTop: '3px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>game_events</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Join table · many-to-many game ↔ event
                            relationships</div>
                        </div>
                      </div>
                    </div>
                  </div>

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
                        <div className="tech-item-name">Jest</div>
                        <div className="tech-item-role">Unit Tests</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Supertest</div>
                        <div className="tech-item-role">E2E Tests</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Swagger</div>
                        <div className="tech-item-role">API Docs</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">class-validator</div>
                        <div className="tech-item-role">DTO Validation</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
                <div className="pd-section-lbl">Unity Integration</div>
                <h3 className="pd-section-title" style={{ marginBottom: '2rem' }}>Client Flow</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1.5px', background: 'var(--faint)' }}>
                  <div style={{ background: 'var(--bg)', padding: '1.6rem', textAlign: 'center' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '1.4rem', color: 'rgba(200,245,66,.55)', fontWeight: 700, marginBottom: '.6rem' }}>
                      01</div>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.58rem', color: 'var(--lime)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
                      Game Start</div>
                    <p style={{ fontSize: '.78rem', color: 'var(--muted-dim)', lineHeight: 1.6 }}>Call <code
                        style={{ fontFamily: '\'Space Mono\',monospace', color: 'var(--lime)', fontSize: '.7rem' }}>getOrCreateUser</code> —
                      returns player, active event, and current stats in one shot</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '1.6rem', textAlign: 'center' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '1.4rem', color: 'rgba(200,245,66,.55)', fontWeight: 700, marginBottom: '.6rem' }}>
                      02</div>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.58rem', color: 'var(--lime)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
                      Store IDs</div>
                    <p style={{ fontSize: '.78rem', color: 'var(--muted-dim)', lineHeight: 1.6 }}>Cache <code
                        style={{ fontFamily: '\'Space Mono\',monospace', color: 'var(--lime)', fontSize: '.7rem' }}>gameId</code>, <code
                        style={{ fontFamily: '\'Space Mono\',monospace', color: 'var(--lime)', fontSize: '.7rem' }}>eventId</code>, <code
                        style={{ fontFamily: '\'Space Mono\',monospace', color: 'var(--lime)', fontSize: '.7rem' }}>userId</code> locally in
                      the Unity session</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '1.6rem', textAlign: 'center' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '1.4rem', color: 'rgba(200,245,66,.55)', fontWeight: 700, marginBottom: '.6rem' }}>
                      03</div>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.58rem', color: 'var(--lime)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
                      Game End</div>
                    <p style={{ fontSize: '.78rem', color: 'var(--muted-dim)', lineHeight: 1.6 }}>POST <code
                        style={{ fontFamily: '\'Space Mono\',monospace', color: 'var(--lime)', fontSize: '.7rem' }}>updateUserScore</code>
                      with stored IDs and final score</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '1.6rem', textAlign: 'center' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '1.4rem', color: 'rgba(200,245,66,.55)', fontWeight: 700, marginBottom: '.6rem' }}>
                      04</div>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.58rem', color: 'var(--lime)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
                      Leaderboard</div>
                    <p style={{ fontSize: '.78rem', color: 'var(--muted-dim)', lineHeight: 1.6 }}>Fetch top 10 via <code
                        style={{ fontFamily: '\'Space Mono\',monospace', color: 'var(--lime)', fontSize: '.7rem' }}>leaderboard</code>
                      endpoint and display in-game</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '1.6rem', textAlign: 'center' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '1.4rem', color: 'rgba(200,245,66,.55)', fontWeight: 700, marginBottom: '.6rem' }}>
                      05</div>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.58rem', color: 'var(--lime)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
                      Refresh</div>
                    <p style={{ fontSize: '.78rem', color: 'var(--muted-dim)', lineHeight: 1.6 }}>Poll leaderboard periodically during active
                      gameplay to keep rankings live</p>
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
                  Proprietary — Omnisoft
                </div>
              </div>
            </div>
    </>
  )
}
