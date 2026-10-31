import { SKILLS } from '../data'

const ICONS: Record<string, string> = {
  'Languages & Frameworks': '⟨/⟩',
  'Backend & Architecture': '⬡',
  'AI & Automation': '◎',
  'Task Queues & Messaging': '⇄',
  'Database & Data Layer': '▣',
  'Real-time, Security & DevOps': '⚙',
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="home-container">
        <div className="reveal">
          <div className="sec-label">
            <span className="eyebrow-line" />
            Technical Proficiency
          </div>
          <h2 className="sec-title">Skills &amp; Technology Stack</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <article
              key={skill.cat}
              className="skill-card reveal"
              style={{ transitionDelay: `${0.06 + i * 0.05}s` }}
            >
              <header className="skill-card-head">
                <span className="skill-card-icon" aria-hidden="true">
                  {ICONS[skill.cat] ?? '•'}
                </span>
                <h3 className="skill-card-title">{skill.cat}</h3>
              </header>
              <div className="skill-pills">
                {skill.items.map((item) => {
                  const isAccent = skill.accent?.includes(item)
                  return (
                    <span key={item} className={`tech-badge${isAccent ? ' accent' : ''}`}>
                      {item}
                    </span>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
