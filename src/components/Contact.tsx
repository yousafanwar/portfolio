import { CONTACT_CHANNELS, SITE } from '../data'
import { CONTACT_ICONS } from './contactIcons'

export default function Contact() {
  return (
    <section id="contact-form" className="page-contact">
      <div className="home-container">
        <div className="reveal">
          <div className="sec-label">
            <span className="eyebrow-line" />
            Contact
          </div>
          <h1 className="sec-title">Remote backend contracts</h1>
          <p className="contact-lead">
            {SITE.location} (UTC+5). I overlap US Eastern mornings and Central European workdays.
            Email is the fastest way to reach me.
          </p>
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
              <div className="contact-card-icon">{CONTACT_ICONS[channel.id]}</div>
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
