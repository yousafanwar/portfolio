import { useState } from 'react'
import { SKILLS } from '../data'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills">
      <div className="reveal">
        <div className="sec-label">
          <span className="eyebrow-line"></span>Expertise
        </div>
        <h2 className="sec-title">What I Work With</h2>
      </div>
      <div className="reveal" style={{ transitionDelay: '.1s' }}>
        <div className="skill-tabs" id="stabs">
          {SKILLS.map((s, i) => (
            <button key={s.cat} className={`stab${i === activeTab ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
              {s.cat}
            </button>
          ))}
        </div>
        <div className="skill-pills" id="spills">
          {SKILLS[activeTab].items.map((it, i) => (
            <div key={it} className="pill" style={{ animation: `fadeUp .35s ease ${i * 0.06}s both` }}>
              {it}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
