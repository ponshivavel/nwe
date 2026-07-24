import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaCodeBranch, FaBook } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { personal } from '../data/content'

function StatCard({ icon, label, value, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -6 }}
        className="glass-card flex flex-col items-center gap-2 p-6 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-xl text-brand-500">
          {icon}
        </span>
        <span className="font-display text-3xl font-bold heading-gradient">{value}</span>
        <span className="text-sm text-[var(--text-soft)]">{label}</span>
      </motion.div>
    </ScrollReveal>
  )
}

export default function GitHubStats() {
  const [stats, setStats] = useState({ repos: 0, stars: 0, followers: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    async function fetchStats() {
      try {
        const res = await fetch(`https://api.github.com/users/${personal.githubUsername}`)
        if (!res.ok) throw new Error('failed')
        const data = await res.json()
        if (active) {
          setStats({
            repos: data.public_repos ?? 0,
            stars: 0,
            followers: data.followers ?? 0,
          })
        }
      } catch {
        if (active) setStats({ repos: 0, stars: 0, followers: 0 })
      } finally {
        if (active) setLoading(false)
      }
    }
    fetchStats()
    return () => {
      active = false
    }
  }, [])

  return (
    <section className="section-pad relative py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="GitHub & LeetCode"
          title="Coding Activity"
          subtitle="A snapshot of my open-source contributions and competitive programming."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<FaBook />}
            label="Public Repositories"
            value={loading ? '—' : stats.repos}
            delay={0}
          />
          <StatCard
            icon={<FaStar />}
            label="GitHub Stars"
            value={loading ? '—' : stats.stars}
            delay={0.1}
          />
          <StatCard
            icon={<FaCodeBranch />}
            label="Followers"
            value={loading ? '—' : stats.followers}
            delay={0.15}
          />
          <StatCard
            icon={<FaCodeBranch />}
            label="LeetCode Solved"
            value="150+"
            delay={0.2}
          />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 overflow-hidden glass-card p-4">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${personal.githubUsername}&theme=react-dark&hide_border=true&area=true`}
              alt="GitHub contribution graph"
              loading="lazy"
              className="w-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
