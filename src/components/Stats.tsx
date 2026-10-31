import { STATS } from '../data'

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Key metrics">
      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <article
            key={stat.label}
            className="stat-card reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="stat-card-marker" aria-hidden="true" />
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-detail">{stat.detail}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
