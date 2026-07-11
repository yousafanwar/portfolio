import { SKILLS } from '../data'

export default function About() {
  return (
    <div id="about-view">
      <div className="proj-detail-hero">
            <div className="proj-detail-grid"></div>
            <div className="proj-detail-glow"></div>
            <div className="proj-detail-inner">
              <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Lahore, Pakistan · Open to Remote</div>
              <h1 className="proj-detail-title">Yousaf<span>Anwar</span><br />Ali</h1>
              <p className="proj-detail-tagline">Backend-focused full-stack developer with 4 years of production experience
                building scalable, distributed systems across SaaS platforms, workforce management, and social media
                integrations.</p>
              <div className="proj-detail-tags">
                <span className="ptag">Django</span>
                <span className="ptag">NestJS</span>
                <span className="ptag">Node.js</span>
                <span className="ptag">PostgreSQL</span>
                <span className="ptag">Redis</span>
                <span className="ptag">Microservices</span>
              </div>
              <div className="proj-detail-actions" style={{ gap: '1rem' }}>
                <a href="https://github.com/yousafanwar" target="_blank" className="btn-p"
                  style={{ fontSize: '.75rem', padding: '.6rem 1.4rem' }}>GitHub</a>
                <a href="https://www.linkedin.com/in/yousaf-anwar-ali-341195301/" target="_blank" className="btn-s"
                  style={{ fontSize: '.75rem', padding: '.6rem 1.4rem' }}>LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="proj-detail-body">


            <div style={{ maxWidth: '760px', marginBottom: '4rem' }}>
              <div className="pd-section-lbl">Bio</div>
              <h3 className="pd-section-title">Who I Am</h3>
              <p className="pd-text" style={{ marginTop: '1rem' }}>I specialise in Django, NestJS, and Node.js, with hands-on experience shipping backends that serve millions of real users. My work spans RESTful API design, microservices architecture, real-time systems, task queues, caching, and database optimisation.</p>
              <p className="pd-text" style={{ marginTop: '.9rem' }}>On the frontend I'm comfortable with React, Next.js, and Vue.js when the project needs it. I'm equally at home working independently or in cross-functional agile teams.</p>
              <p className="pd-text" style={{ marginTop: '.9rem' }}>Currently working as Backend Developer at Omnisoft, Lahore — building and optimising production systems used at scale.</p>
            </div>


            <div style={{ marginBottom: '4rem' }}>
              <div className="pd-section-lbl">Skills</div>
              <h3 className="pd-section-title" style={{ marginBottom: '1.5rem' }}>What I Work With</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--faint)' }}>
                {SKILLS.map((skill) => (
                  <div
                    key={skill.cat}
                    style={{
                      background: 'var(--bg)',
                      padding: '1.2rem 1.5rem',
                      display: 'grid',
                      gridTemplateColumns: '220px 1fr',
                      gap: '1rem',
                      alignItems: 'start',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Space Mono',monospace",
                        fontSize: '.58rem',
                        color: 'var(--lime)',
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        paddingTop: '.15rem',
                      }}
                    >
                      {skill.cat}
                    </div>
                    <div style={{ fontSize: '.85rem', color: 'var(--muted-dim)', lineHeight: 1.8 }}>
                      {skill.items.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div style={{ marginBottom: '4rem' }}>
              <div className="pd-section-lbl">Experience</div>
              <h3 className="pd-section-title" style={{ marginBottom: '1.5rem' }}>Work History</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--faint)' }}>

                <div style={{ background: 'var(--bg)', padding: '1.8rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>Backend Developer</div>
                      <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.65rem', color: 'var(--lime)', marginTop: '.3rem', letterSpacing: '.05em' }}>Omnisoft · Lahore</div>
                    </div>
                    <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.62rem', color: 'var(--label)', letterSpacing: '.05em', whiteSpace: 'nowrap' }}>Nov 2025 — Present</div>
                  </div>
                  <p style={{ fontSize: '.83rem', color: 'var(--muted-dim)', lineHeight: 1.7, marginTop: '.9rem' }}>Building and optimising scalable backend services for production platforms serving millions of users. Work includes real-time systems, notification infrastructure, game integrations, and accounting SaaS backends.</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.9rem' }}>
                    <span className="ptag" style={{ fontSize: '.62rem' }}>Django</span><span className="ptag" style={{ fontSize: '.62rem' }}>NestJS</span><span className="ptag" style={{ fontSize: '.62rem' }}>Node.js</span><span className="ptag" style={{ fontSize: '.62rem' }}>PostgreSQL</span><span className="ptag" style={{ fontSize: '.62rem' }}>Redis</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg)', padding: '1.8rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>Full Stack Web Developer</div>
                      <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.65rem', color: 'var(--lime)', marginTop: '.3rem', letterSpacing: '.05em' }}>Freelance · Lahore</div>
                    </div>
                    <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.62rem', color: 'var(--label)', letterSpacing: '.05em', whiteSpace: 'nowrap' }}>Jun 2024 — Nov 2025</div>
                  </div>
                  <p style={{ fontSize: '.83rem', color: 'var(--muted-dim)', lineHeight: 1.7, marginTop: '.9rem' }}>Contributed to SocialOneHub, a SaaS social media management platform — integrating Pexels API, Facebook/Instagram Graph API insights, infinite scrolling, and subscription-based access control.</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.9rem' }}>
                    <span className="ptag" style={{ fontSize: '.62rem' }}>TypeScript</span><span className="ptag" style={{ fontSize: '.62rem' }}>React</span><span className="ptag" style={{ fontSize: '.62rem' }}>Next.js</span><span className="ptag" style={{ fontSize: '.62rem' }}>Node.js</span><span className="ptag" style={{ fontSize: '.62rem' }}>PostgreSQL</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg)', padding: '1.8rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>Full Stack Web Developer</div>
                      <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.65rem', color: 'var(--lime)', marginTop: '.3rem', letterSpacing: '.05em' }}>MB Services · Dubai</div>
                    </div>
                    <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.62rem', color: 'var(--label)', letterSpacing: '.05em', whiteSpace: 'nowrap' }}>Sep 2022 — Jun 2024</div>
                  </div>
                  <p style={{ fontSize: '.83rem', color: 'var(--muted-dim)', lineHeight: 1.7, marginTop: '.9rem' }}>Built RecruitMe from scratch — a US-based SaaS workforce management system with 15+ microservices, serving 5k+ workers and 50+ businesses. Increased agency revenue by up to 30%.</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.9rem' }}>
                    <span className="ptag" style={{ fontSize: '.62rem' }}>Node.js</span><span className="ptag" style={{ fontSize: '.62rem' }}>Vue.js</span><span className="ptag" style={{ fontSize: '.62rem' }}>PostgreSQL</span><span className="ptag" style={{ fontSize: '.62rem' }}>Microservices</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg)', padding: '1.8rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>Front End Developer</div>
                      <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.65rem', color: 'var(--lime)', marginTop: '.3rem', letterSpacing: '.05em' }}>Amerald (Pvt.) Ltd · Karachi</div>
                    </div>
                    <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.62rem', color: 'var(--label)', letterSpacing: '.05em', whiteSpace: 'nowrap' }}>Feb 2022 — Jul 2022</div>
                  </div>
                  <p style={{ fontSize: '.83rem', color: 'var(--muted-dim)', lineHeight: 1.7, marginTop: '.9rem' }}>Built responsive, user-friendly interfaces using React.js, Vue.js, and Materialize CSS, collaborating with cross-functional teams to deliver polished web applications.</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.9rem' }}>
                    <span className="ptag" style={{ fontSize: '.62rem' }}>JavaScript</span><span className="ptag" style={{ fontSize: '.62rem' }}>React.js</span><span className="ptag" style={{ fontSize: '.62rem' }}>Vue.js</span><span className="ptag" style={{ fontSize: '.62rem' }}>Bootstrap</span>
                  </div>
                </div>

              </div>
            </div>


            <div style={{ marginBottom: '4rem' }}>
              <div className="pd-section-lbl">Education</div>
              <h3 className="pd-section-title" style={{ marginBottom: '1.5rem' }}>Academic Background</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--faint)' }}>

                <div style={{ background: 'var(--bg)', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '.5rem' }}>
                  <div>
                    <div style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--text)' }}>Apprenticeship in Aircraft Maintenance Engineering</div>
                    <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.63rem', color: 'var(--lime)', marginTop: '.3rem' }}>AMETI · 2010 — 2014</div>
                  </div>
                </div>

                <div style={{ background: 'var(--bg)', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '.5rem' }}>
                  <div>
                    <div style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--text)' }}>Higher Secondary School (FSc — Pre Engineering)</div>
                    <div style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.63rem', color: 'var(--lime)', marginTop: '.3rem' }}>Punjab Group of Colleges</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
    </div>
  )
}
