import { Link } from 'react-router-dom'

const CASES = [
  {
    href: '/projects/mira',
    eyebrow: 'Omnisoft · Nov 2025 — Present',
    title: 'Mirex',
    lede: 'Consumer rewards · 3.5M+ users',
    points: [
      'Replaced per-user FCM token lookups with topic subscriptions, and backfilled existing users before cutover.',
      'Inbox rows are written when the user opens the inbox, so a notification that is never viewed does not create a row.',
      'Reward cooldowns are enforced on the write that grants the reward. A compounding video-ad boost became a linear rate.',
    ],
  },
  {
    href: '/projects/recruitme',
    eyebrow: 'MB Services · Dubai · Sep 2022 — Jun 2024',
    title: 'RecruitMe',
    lede: 'US staffing · 50+ businesses · 5,000+ workers',
    points: [
      'Shipped the first release in eight months on a team of five.',
      'NestJS services on PostgreSQL. Kafka and Redis move work off the request path.',
      'Worker pay is calculated from mobile check-in and check-out instead of manual timesheets.',
    ],
  },
] as const

export default function CaseStudies() {
  return (
    <section id="work" className="case-section">
      <div className="home-container">
        <div className="reveal">
          <div className="sec-label">
            <span className="eyebrow-line" />
            Selected work
          </div>
          <h2 className="sec-title">Production backends</h2>
        </div>

        <div className="case-grid">
          {CASES.map((item, i) => (
            <article
              key={item.href}
              className="case-card reveal"
              style={{ transitionDelay: `${0.06 + i * 0.08}s` }}
            >
              <div className="sec-label case-kicker">
                <span className="eyebrow-line" />
                {item.eyebrow}
              </div>
              <h3 className="case-title">{item.title}</h3>
              <p className="case-lede">{item.lede}</p>
              <ul className="case-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link to={item.href} className="case-link">
                Read the write-up <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
