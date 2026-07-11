import { Link } from 'react-router-dom'

export default function SterlingGrey() {
  return (
    <>
      <div className="proj-detail-hero">
              <div className="proj-detail-grid"></div>
              <div className="proj-detail-glow"></div>
              <div className="proj-detail-inner">
                <div className="proj-detail-eyebrow"><span className="eyebrow-line"></span>Professional Project — Omnisoft / Sterling
                  Grey</div>
                <h1 className="proj-detail-title">Sterling<span>Grey</span><br />Backend</h1>
                <p className="proj-detail-tagline">Backend for a professional accounting and invoicing SaaS. Multi-company
                  support, Stripe Connect for direct payments into user accounts, three-tier subscription plans with usage
                  quota tracking, PDF invoice generation, SSO, and soft-delete account management.</p>
                <div className="proj-detail-tags">
                  <span className="ptag">Node.js</span>
                  <span className="ptag">TypeScript</span>
                  <span className="ptag">DynamoDB</span>
                  <span className="ptag">Stripe Connect</span>
                  <span className="ptag">Stripe Subscriptions</span>
                  <span className="ptag">JWT</span>
                  <span className="ptag">AWS SES</span>
                  <span className="ptag">Swagger</span>
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
                <div className="stat-n">3</div>
                <div className="stat-l">Stripe Webhook Types</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">9</div>
                <div className="stat-l">DynamoDB Tables</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">90d</div>
                <div className="stat-l">Account Recovery Window</div>
              </div>
            </div>

            <div className="proj-detail-body">
              <div className="pd-grid">


                <div>
                  <div className="pd-section-lbl">Overview</div>
                  <h3 className="pd-section-title">What is Sterling Grey?</h3>
                  <p className="pd-text">Sterling Grey is an accounting and invoicing SaaS targeting freelancers and small
                    businesses. The backend handles everything from invoice creation and PDF generation to collecting payments
                    directly into users' own Stripe accounts via Stripe Connect — no platform intermediary.</p>
                  <p className="pd-text">The subscription system uses three tiers (Basic, Standard, Premium) with
                    per-billing-cycle usage quotas on invoices and receipts. Quotas reset automatically when Stripe triggers a
                    new billing cycle via webhook, keeping the usage data always in sync with the payment reality.</p>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Key Features</div>
                    <ul className="feature-list">
                      <li>Stripe Connect integration — payment links on invoices route funds directly to the user's own Stripe
                        account, with automatic link generation on invoice creation when a Connect account is active</li>
                      <li>Three-tier subscription plans with monthly usage quotas; quota cycle is synchronized to the Stripe
                        billing period, not the calendar month</li>
                      <li>Multi-company support — a single user account can manage multiple company profiles, each with their
                        own contacts, invoices, and receipts</li>
                      <li>OTP email verification, Google and Apple SSO, password reset, and bcrypt-hashed credentials</li>
                      <li>Soft-delete account flow with a 90-day recovery window — accounts can be restored by re-registering
                        within the window before permanent deletion runs</li>
                      <li>PDF invoice generation with multiple templates, shareable payment links, and full payment status
                        tracking</li>
                    </ul>
                  </div>
                </div>


                <div>
                  <div className="pd-section-lbl">Architecture</div>
                  <h3 className="pd-section-title">How It's Structured</h3>
                  <p className="pd-text">Express + TypeScript with a clean controller → service → model separation. AWS DynamoDB
                    is the primary store — all 9 tables are provisioned automatically on server start, keeping deployment
                    straightforward.</p>
                  <p className="pd-text">Three separate Stripe webhook handlers (subscriptions, payments, Connect) each verify
                    their own signing secret and process events idempotently. The Stripe CLI is used in development to forward
                    all three webhook streams locally.</p>


                  <div
                    style={{ marginTop: '2rem', border: '1px solid var(--border)', padding: '1.6rem', background: 'rgba(255,255,255,.015)' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--label)', letterSpacing: '.15em', marginBottom: '1.4rem', textTransform: 'uppercase' }}>
                      Payment Flow</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--lime)', flexShrink: 0, marginTop: '3px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>User creates invoice</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>System checks Stripe Connect account
                            status</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Payment link auto-generated</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Stripe Checkout link created and
                            attached to invoice</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid rgba(200,245,66,.4)', flexShrink: 0, marginTop: '3px' }}>
                        </div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Customer pays</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Funds transfer directly to user's
                            Stripe Connect account</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', border: '1px solid #222', flexShrink: 0, marginTop: '3px' }}></div>
                        <div>
                          <div style={{ fontSize: '.8rem', color: 'var(--muted)', fontWeight: 600 }}>Webhook confirms payment</div>
                          <div style={{ fontSize: '.72rem', color: 'var(--muted-dim)', marginTop: '.2rem' }}>Invoice marked paid · payment record
                            stored in DynamoDB</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <div className="pd-section-lbl">Tech Stack</div>
                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-item-name">Node.js</div>
                        <div className="tech-item-role">Runtime</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">TypeScript</div>
                        <div className="tech-item-role">Language</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Express</div>
                        <div className="tech-item-role">Framework</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">DynamoDB</div>
                        <div className="tech-item-role">Database</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Stripe Connect</div>
                        <div className="tech-item-role">Payments</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Stripe Billing</div>
                        <div className="tech-item-role">Subscriptions</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">AWS SES</div>
                        <div className="tech-item-role">Email</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">JWT + bcrypt</div>
                        <div className="tech-item-role">Auth</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Swagger</div>
                        <div className="tech-item-role">API Docs</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-item-name">Redis</div>
                        <div className="tech-item-role">Caching</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
                <div className="pd-section-lbl">Database</div>
                <h3 className="pd-section-title" style={{ marginBottom: '2rem' }}>DynamoDB Table Design</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5px', background: 'var(--faint)' }}>
                  <div style={{ background: 'var(--bg)', padding: '1.6rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
                      Core</div>
                    <div style={{ fontSize: '.82rem', color: 'var(--muted-dim)', lineHeight: 2 }}>
                      sterling_users<br />sterling_companies<br />sterling_contacts</div>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '1.6rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
                      Billing</div>
                    <div style={{ fontSize: '.82rem', color: 'var(--muted-dim)', lineHeight: 2 }}>
                      sterling_invoices<br />sterling_invoice_items<br />sterling_invoice_payments<br />sterling_receipts</div>
                  </div>
                  <div style={{ background: 'var(--bg)', padding: '1.6rem' }}>
                    <div
                      style={{ fontFamily: '\'Space Mono\',monospace', fontSize: '.6rem', color: 'var(--lime)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
                      Auth + Subscriptions</div>
                    <div style={{ fontSize: '.82rem', color: 'var(--muted-dim)', lineHeight: 2 }}>
                      sterling_otp_verifications<br />sterling_subscription_history</div>
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
