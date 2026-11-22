import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import HomeContact from '../components/HomeContact'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [location.hash])

  return (
    <div className="home">
      <Hero />
      <Stats />
      <Skills />
      <Experience />
      <HomeContact />
    </div>
  )
}
