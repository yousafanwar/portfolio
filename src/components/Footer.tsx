import { SITE } from '../data'

export default function Footer() {
  return (
    <footer>
      <span className="ft ft-brand">
        <span className="ft-dot" aria-hidden="true" />
        Yousaf Anwar Ali | Backend Engineer
      </span>
      <div className="fl">
        <span className="ft">© {new Date().getFullYear()}</span>
        <a href={SITE.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a href={SITE.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
