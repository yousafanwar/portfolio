import { Link } from 'react-router-dom'

export default function Mira() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Professional Project — Omnisoft / Mira
                  Network</div>
                <h1 className="proj-detail-title">Mira<span>Network</span><br />Backend</h1>
                <p className="proj-detail-tagline">Backend for a real-time cryptocurrency mining and airdrop platform. Django +
                  Celery + Redis — concurrent mining sessions, FCM topic-based push notifications, fraud detection, and
                  airdrop payout management at scale.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">Django</span>
                  <span className="ptag">Python</span>
                  <span className="ptag">PostgreSQL</span>
                  <span className="ptag">Redis</span>
                  <span className="ptag">Celery</span>
                  <span className="ptag">Firebase FCM</span>
                  <span className="ptag">AWS S3</span>
                  <span className="ptag">WebSockets</span>
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
                <div className="stat-n">5min</div>
                <div className="stat-l">Celery Task Cycle</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">FCM</div>
                <div className="stat-l">Topic-Based Notifications</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">R/W</div>
                <div className="stat-l">DB Split Architecture</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is Mira Network?</h3>
                  <p className="pd-text">Mira Network is a cryptocurrency mining and airdrop platform where users mine virtual
                    currency, participate in airdrops, earn referral rewards, and receive real-time push notifications — all
                    managed by a Django backend built for concurrency and scale.</p>
                  <p className="pd-text">I joined as Backend Developer at Omnisoft to build and stabilize the core systems: mining
                    lifecycle management, notification infrastructure, game reward integration, and authentication flows. The
                    platform runs on a read/write split PostgreSQL setup with Redis caching and Celery for all background
                    work.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">My Contributions</div>
                    <ul className="feature-list">
                      <li>Fixed mining duration bug ensuring accurate 24-hour mining cycles, and corrected mining rate
                        calculations that were incorrectly including bonus values</li>
                      <li>Rebuilt FCM notification delivery using topic-based architecture — replaced per-send DB queries
                        (fetch all users → collect tokens → fire individually) with topic subscriptions at registration/login,
                        offloading audience resolution to Firebase entirely. Wrote a backfill job to subscribe all existing
                        users' tokens retroactively</li>
                      <li>Implemented a service-to-service authenticated endpoint for Unity game reward integration — <code
                          style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.75rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>game/update-winners</code>
                      </li>
                      <li>Built user permission model, email verification webhook flow, and a dedicated auth class for
                        staff/admin protected operations — <code
                          style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.75rem', color: 'var(--lime)', background: 'rgba(200,245,66,.06)', padding: '1px 5px' }}>IsAdminOrStaff</code>
                      </li>
                      <li>Improved Celery task reliability by removing offset-based processing and reducing deadlock risk on
                        high-frequency background jobs</li>
                      <li>Added timezone-aware batch notification sending and per-user notification targeting</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Architecture</div>
                  <h3 className="pd-section-title">How It's Structured</h3>
                  <p className="pd-text">The platform runs a Django API backed by a read/write split PostgreSQL setup, Redis for
                    caching and Celery task brokering, and Firebase for both JWT authentication and push notification
                    delivery.</p>
                  <p className="pd-text" style={{ marginTop: '.9rem' }}>All time-sensitive operations — balance updates, miner
                    deactivation, fraud detection — run as Celery beat tasks on 5-minute cycles, keeping the API layer free of
                    blocking work.</p>
                  <div
                    style={{ marginTop: '2rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.4rem', textTransform: 'uppercase' }}>
                      System Architecture</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--lime)', flexShrink: 0, marginTop: '3px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Django API</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>REST endpoints · Firebase JWT auth ·
                            CORS/CSP · Rate limiting</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Celery Workers</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Balance updates · Miner deactivation ·
                            Fraud detection — every 5 min</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Redis</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Celery broker · Response caching ·
                            Session data</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>PostgreSQL (R/W Split)</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Separate read/write connections ·
                            ReadWriteRouter · Production-optimised</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid #222', flexShrink: 0, marginTop: '3px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Firebase (FCM + Auth)</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>JWT auth · Topic-based push
                            notifications · FCM token management</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">Django</div>
                        <div className="tech-item-role">Framework</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Python</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">PostgreSQL</div>
                        <div className="tech-item-role">Database</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Redis</div>
                        <div className="tech-item-role">Cache / Broker</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Celery</div>
                        <div className="tech-item-role">Task Queue</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Firebase</div>
                        <div className="tech-item-role">Auth + FCM</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">AWS S3</div>
                        <div className="tech-item-role">File Storage</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">AWS SES</div>
                        <div className="tech-item-role">Email</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Docker</div>
                        <div className="tech-item-role">Deployment</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Channels</div>
                        <div className="tech-item-role">WebSockets</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
                <div className="pd-section-lbl">Impact</div>
                <h3 className="pd-section-title" style={{ marginBottom: '2rem' }}>What This Work Delivered</h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5px', background: 'var(--faint)' }}>
                  <div style={{ background: 'var(--bg)', padding: '2rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem' }}>
                      Notification Scale</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7 }}>Migrating to FCM topics eliminated per-send
                      database queries, reducing server and DB load dramatically for bulk notification delivery.</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '2rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem' }}>
                      Mining Accuracy</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7 }}>Fixed mining duration and rate calculation bugs
                      that were causing incorrect balance updates — ensuring users receive accurate, consistent rewards.</p>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '2rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem' }}>
                      Game Integration</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7 }}>Designed and shipped a secure service-to-service
                      API allowing Unity game clients to report results and update user ADT balances safely.</p>
                  </div>
                </div>

                <div style={{ background: 'var(--faint)', marginTop: '1.5px', display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{ background: 'var(--bg)', padding: '2rem 3rem', width: 'calc(33.333% + 1px)', borderLeft: '1px solid var(--faint)', borderRight: '1px solid var(--faint)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.7rem', textAlign: 'center' }}>
                      Task Reliability</div>
                    <p style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.7, textAlign: 'center' }}>Removed offset-based Celery query
                      patterns and switched permissions to <code
                        style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.72rem', color: 'var(--lime)' }}>get_or_create</code> —
                      reducing deadlock risk in high-frequency background jobs.</p>
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
