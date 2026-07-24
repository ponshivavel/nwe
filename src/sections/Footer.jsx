import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiArrowUp } from 'react-icons/fi'
import { personal } from '../data/content'

export default function Footer() {
  return (
    <footer className="section-pad relative border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-display text-lg font-bold heading-gradient"></span>
         
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: personal.github, icon: <FaGithub />, label: 'GitHub' },
            { href: personal.linkedin, icon: <FaLinkedin />, label: 'LinkedIn' },
            { href: personal.leetcode, icon: <SiLeetcode />, label: 'LeetCode' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full glass transition-transform hover:scale-110 hover:text-brand-500"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="flex items-center gap-2 text-sm text-[var(--text-soft)] transition-colors hover:text-brand-500"
        >
          Back to top <FiArrowUp />
        </button>
      </div>
      <p className="mt-6 text-center text-xs text-[var(--text-soft)]">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </footer>
  )
}
