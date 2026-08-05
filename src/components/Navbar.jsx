import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { navLinks, personal } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navLinks.map((n) => n.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 transition-all duration-300 sm:px-8 ${
          scrolled
            ? 'glass mt-3 rounded-full shadow-soft'
            : 'mt-0 rounded-none bg-transparent'
        }`}
        style={{ width: scrolled ? 'calc(100% - 2rem)' : '100%' }}
      >
        <button
          onClick={() => go('home')}
          className="font-display text-lg font-bold heading-gradient"
        >
          PONSHIVAVEL
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-[var(--text)]'
                    : 'text-[var(--text-soft)] hover:text-[var(--text)]'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-500/15 to-accent-500/15 ring-1 ring-brand-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full glass transition-transform hover:scale-110 active:scale-90"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FiSun className="text-amber-400" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FiMoon className="text-brand-600" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-10 w-10 items-center justify-center rounded-full glass transition-transform hover:scale-110 sm:flex"
          >
            <FaGithub />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-10 w-10 items-center justify-center rounded-full glass transition-transform hover:scale-110 sm:flex"
          >
            <FaLinkedin className="text-[#0A66C2]" />
          </a>
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="hidden h-10 w-10 items-center justify-center rounded-full glass transition-transform hover:scale-110 sm:flex"
          >
            <SiLeetcode className="text-[#FFA116]" />
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full glass lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-3 mt-2 overflow-hidden rounded-3xl glass p-4 shadow-soft lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.id
                        ? 'bg-gradient-to-r from-brand-500/15 to-accent-500/15 text-[var(--text)]'
                        : 'text-[var(--text-soft)] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
