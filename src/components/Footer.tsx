export default function Footer() {
  return (
    <footer>
      <span className="ft ft-brand">
        <span className="ft-dot" aria-hidden="true" />
        Yousaf Anwar Ali | Backend &amp; Full Stack Engineer
      </span>
      <div className="fl">
        <span className="ft">© {new Date().getFullYear()}</span>
        <a href="https://github.com/yousafanwar" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yousaf-anwar-ali-341195301/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
