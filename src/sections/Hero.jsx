import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import Particles from '../components/Particles'
import { personal, roles } from '../data/content'

function useTyping(words, speed = 90, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((n) => n + 1)
    } else {
      t = setTimeout(() => {
        setText((prev) =>
          deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTyping(roles)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:40px_40px] dark:bg-grid-dark" />
      <div className="absolute inset-0 -z-10">
        <Particles count={36} />
      </div>
      <div className="absolute -top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="section-pad mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="chip w-fit"
          >
            <span className="h-2 w-2 rounded-full bg-accent-500" /> Available for opportunities
          </motion.span>

          <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="shimmer-text">{personal.name}</span>
          </h1>

          <div className="flex items-center gap-2 font-mono text-lg text-[var(--text-soft)] sm:text-2xl">
            <span className="text-brand-500">&gt;</span>
            <span>{typed}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block h-6 w-0.5 bg-accent-500 sm:h-7"
            />
          </div>

          <p className="max-w-xl text-base text-[var(--text-soft)] sm:text-lg">
            {personal.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
<a href={personal.resumeUrl} className="btn-primary">
              <FaDownload /> Download Resume
            </a>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-ghost"
            >
              <FiMail /> Contact Me
            </button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {[
              { href: personal.github, icon: <FaGithub />, label: 'GitHub' },
              { href: personal.linkedin, icon: <FaLinkedin />, label: 'LinkedIn' },
              { href: personal.leetcode, icon: <SiLeetcode />, label: 'LeetCode' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-xl transition-colors hover:text-brand-500"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500 via-accent-500 to-brand-500 p-1.5 blur-[2px] opacity-70"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border-2 border-dashed border-brand-500/40"
            />
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-4 overflow-hidden rounded-full glass-card shadow-glow"
            >
<img
                src="/images/ponshivavelproff.png"
                alt="Profile"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[var(--text-soft)] p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-[var(--text-soft)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
