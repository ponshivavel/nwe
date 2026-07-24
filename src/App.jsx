import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import AnimatedCursor from './components/AnimatedCursor'
import LoadingScreen from './components/LoadingScreen'
import { useTheme } from './hooks/useTheme'

const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Experience = lazy(() => import('./sections/Experience'))
const Projects = lazy(() => import('./sections/Projects'))
const Certifications = lazy(() => import('./sections/Certifications'))
const Achievements = lazy(() => import('./sections/Achievements'))
const GitHubStats = lazy(() => import('./sections/GitHubStats'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./sections/Footer'))
const NotFound = lazy(() => import('./sections/NotFound'))

function ScrollToTopOnNav() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageFallback() {
  return <div className="flex min-h-screen items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-500/30 border-t-brand-500" />
  </div>
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <GitHubStats />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.title = 'PONSHIVAVEL S K'
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content =
      'PONSHIVAVEL — Java Full Stack Developer and Data Science enthusiast specializing in React, Spring Boot, and machine learning.'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <AnimatedCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTopOnNav />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
    </BrowserRouter>
  )
}
