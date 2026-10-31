import type { ReactNode } from 'react'
import { CONTACT_CHANNELS } from '../data'

const ICONS: Record<string, ReactNode> = {
  email: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 4.5 5.5a2 2 0 0 1 2-2z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.01 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 7.16a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7zM20.25 20h-3.18v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V20H9.88V8.5h3.05v1.57h.04c.42-.8 1.46-1.65 3-1.65 3.21 0 3.8 2.11 3.8 4.86V20z" />
    </svg>
  ),
}

export default function HomeContact() {
  return (
    <section id="contact" className="home-contact-section">
      <div className="home-container">
        <div className="reveal">
          <div className="sec-label">
            <span className="eyebrow-line" />
            Initiate Contact
          </div>
          <h2 className="sec-title">Let&apos;s build scalable systems together.</h2>
        </div>

        <div className="contact-cards">
          {CONTACT_CHANNELS.map((channel, i) => (
            <a
              key={channel.id}
              href={channel.href}
              className="contact-card reveal"
              style={{ transitionDelay: `${0.06 + i * 0.06}s` }}
              target={channel.id === 'email' ? undefined : '_blank'}
              rel={channel.id === 'email' ? undefined : 'noreferrer'}
            >
              <div className="contact-card-icon">{ICONS[channel.id]}</div>
              <div className="contact-card-label">{channel.label}</div>
              <div className="contact-card-value">{channel.value}</div>
              <div className="contact-card-hint">{channel.hint}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
