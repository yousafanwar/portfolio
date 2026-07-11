import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

export default function RootLayout() {
  const location = useLocation()
  const contentRef = useReveal([location.pathname, location.key])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname, location.key])

  return (
    <>
      <Nav />
      <div ref={contentRef} className="page-shell">
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
