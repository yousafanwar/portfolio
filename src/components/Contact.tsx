import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

emailjs.init('ZZeay2F3o_f9K4VIQ')

type FormStatus = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm('portfolio_service', 'template_09hk4nu', e.currentTarget)
      setStatus('sent')
    } catch {
      setStatus('idle')
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: 'rgba(255,255,255,.012)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="reveal">
        <div className="sec-label">
          <span className="eyebrow-line"></span>Contact
        </div>
        <h2 className="sec-title">Let&apos;s Build Something</h2>
      </div>
      <div className="contact-wrap reveal" style={{ transitionDelay: '.12s' }}>
        <div className="c-info">
          <p>
            Open to freelance projects, remote opportunities, and interesting collaborations. Drop a message and I&apos;ll
            get back to you within 24 hours.
          </p>
          <div className="c-item">
            <div className="c-lbl">Email</div>
            <div className="c-val">yousafanwar7777@gmail.com</div>
          </div>
          <div className="c-item">
            <div className="c-lbl">Location</div>
            <div className="c-val">Lahore, Pakistan</div>
          </div>
          <div className="c-item">
            <div className="c-lbl">GitHub</div>
            <div className="c-val">
              <a href="https://github.com/yousafanwar" target="_blank" rel="noreferrer">
                github.com/yousafanwar
              </a>
            </div>
          </div>
          <div className="c-item">
            <div className="c-lbl">LinkedIn</div>
            <div className="c-val">
              <a href="https://www.linkedin.com/in/yousaf-anwar-ali-341195301/" target="_blank" rel="noreferrer">
                linkedin.com/in/yousaf-anwar-ali-341195301
              </a>
            </div>
          </div>
        </div>
        <div id="form-wrap">
          {status === 'sent' ? (
            <div className="success-box">
              <div className="success-icon">✓</div>
              <div className="success-label">Message Sent</div>
              <div className="success-sub">I&apos;ll get back to you soon.</div>
            </div>
          ) : (
            <form className="form" id="cf" onSubmit={handleSubmit}>
              <input className="inp" name="from_name" placeholder="Your Name" required />
              <input className="inp" type="email" name="from_email" placeholder="Email Address" required />
              <textarea className="inp" name="message" placeholder="Tell me about your project..." required />
              <button type="submit" className="btn-p" style={{ alignSelf: 'flex-start' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
