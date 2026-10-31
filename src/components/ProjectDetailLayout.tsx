import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { ProjectDetailContent } from '../types'
import MediaGalleryDialog from './MediaGalleryDialog'

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="coming-soon-badge">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
        <rect x="1" y="2.5" width="6" height="4.5" rx=".5" stroke="currentColor" strokeWidth="1.1" />
        <path
          d="M2.5 2.5V2a1.5 1.5 0 013 0v.5"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </div>
  )
}

export default function ProjectDetailLayout({ detail }: { detail: ProjectDetailContent }) {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const hasMedia = detail.media.length > 0

  const openGallery = (index = 0) => {
    setGalleryIndex(index)
    setGalleryOpen(true)
  }

  return (
    <div className="pd">
      <header className="pd-hero">
        <div className="pd-hero-grid" aria-hidden="true" />
        <div className="pd-hero-inner">
          <Link to="/projects" className="pd-back">
            ← Projects
          </Link>

          <div className="sec-label">
            <span className="eyebrow-line" />
            {detail.eyebrow}
          </div>

          <h1 className="pd-title">
            {detail.title}
            {detail.titleAccent ? <span> {detail.titleAccent}</span> : null}
          </h1>

          <p className="pd-tagline">{detail.tagline}</p>

          <div className="pd-tags">
            {detail.tags.map((t) => (
              <span key={t} className="ptag ptag-muted">
                {t}
              </span>
            ))}
          </div>

          <div className="pd-actions">
            {detail.actions.map((a) => (
              <a
                key={a.href + a.label}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className={a.primary ? 'btn-p' : 'btn-s'}
              >
                {a.label}
              </a>
            ))}
            {hasMedia && (
              <button type="button" className="btn-s pd-gallery-btn" onClick={() => openGallery(0)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
                  <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
                  <path d="M3 16l5-4 4 3 3-2 6 5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                </svg>
                Gallery
              </button>
            )}
            {detail.badge && <Badge>{detail.badge}</Badge>}
          </div>
        </div>
      </header>

      <div className="pd-stats">
        {detail.stats.map((s) => (
          <div key={s.label} className="pd-stat">
            <div className="pd-stat-value">{s.value}</div>
            <div className="pd-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="pd-body">
        <div className="pd-card-grid">
          <article className="pd-card">
            <div className="pd-section-lbl">Overview</div>
            <h2 className="pd-section-title">{detail.overviewTitle}</h2>
            {detail.overview.map((p) => (
              <p key={p.slice(0, 32)} className="pd-text">
                {p}
              </p>
            ))}
          </article>

          <article className="pd-card">
            <div className="pd-section-lbl">{detail.featuresTitle}</div>
            <ul className="feature-list">
              {detail.features.map((f) => (
                <li key={f.slice(0, 40)}>{f}</li>
              ))}
            </ul>
          </article>

          <article className="pd-card">
            <div className="pd-section-lbl">Structure</div>
            <h2 className="pd-section-title">{detail.sideTitle}</h2>
            {detail.sideText.map((p) => (
              <p key={p.slice(0, 32)} className="pd-text">
                {p}
              </p>
            ))}
            {detail.layers && detail.layers.length > 0 && (
              <ul className="pd-layers">
                {detail.layers.map((layer) => (
                  <li key={layer.name} className={layer.accent ? 'is-accent' : undefined}>
                    <span className="pd-layer-dot" aria-hidden="true" />
                    <div>
                      <div className="pd-layer-name">{layer.name}</div>
                      <div className="pd-layer-detail">{layer.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </article>

          <article className="pd-card">
            <div className="pd-section-lbl">Tech Stack</div>
            <div className="tech-stack-grid">
              {detail.tech.map((t) => (
                <div key={t.name} className="tech-item">
                  <div className="tech-item-name">{t.name}</div>
                  <div className="tech-item-role">{t.role}</div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {detail.highlights && detail.highlights.length > 0 && (
          <section className="pd-highlights">
            <div className="pd-section-lbl">Highlights</div>
            <h2 className="pd-section-title">What Stands Out</h2>
            <div className="pd-highlight-grid">
              {detail.highlights.map((h) => (
                <article key={h.title} className="pd-card pd-highlight">
                  <div className="pd-highlight-title">{h.title}</div>
                  <p className="pd-text">{h.text}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {detail.live && (
          <div className="pd-live">
            <div>
              <div className="live-banner-label">{detail.live.label}</div>
              <div className="live-banner-url">{detail.live.url}</div>
              <div className="live-banner-sub">{detail.live.sub}</div>
            </div>
            <a
              href={detail.live.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-p"
            >
              Open Live ↗
            </a>
          </div>
        )}

        {hasMedia && (
          <section className="pd-media-strip">
            <div className="pd-media-strip-head">
              <div>
                <div className="pd-section-lbl">Media</div>
                <h2 className="pd-section-title">Screens &amp; Capture</h2>
              </div>
              <button type="button" className="btn-s" onClick={() => openGallery(0)}>
                Open Gallery →
              </button>
            </div>
            <div className="pd-media-preview">
              {detail.media.slice(0, 4).map((item, i) => (
                <button
                  key={`${item.caption}-${i}`}
                  type="button"
                  className="pd-media-tile"
                  onClick={() => openGallery(i)}
                >
                  {item.type === 'image' ? (
                    <img src={item.thumb ?? item.src} alt={item.caption} loading="lazy" />
                  ) : (
                    <span className="pd-media-tile-embed">▶ {item.caption}</span>
                  )}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      <footer className="detail-bottom">
        <Link to="/projects" className="btn-s">
          ← Back to Projects
        </Link>
        <div className="detail-bottom-actions">
          {detail.actions.map((a) => (
            <a
              key={`bottom-${a.href}-${a.label}`}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className={a.primary ? 'btn-p' : 'btn-s'}
            >
              {a.label}
            </a>
          ))}
          {hasMedia && (
            <button type="button" className="btn-s" onClick={() => openGallery(0)}>
              Gallery
            </button>
          )}
        </div>
      </footer>

      <MediaGalleryDialog
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        title={detail.title}
        media={detail.media}
        initialIndex={galleryIndex}
      />
    </div>
  )
}
