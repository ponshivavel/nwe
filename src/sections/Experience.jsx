import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          subtitle="Professional internships that shaped my engineering practice."
        />

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-500 via-accent-500 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
          {experience.map((exp, i) => (
            <ScrollReveal
              key={exp.role}
              delay={i * 0.1}
              className={`relative mb-10 flex ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
            >
              <div className="absolute left-4 top-3 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-accent-500 bg-[var(--bg)] sm:left-1/2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent-500/40" />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card ml-10 w-full p-6 sm:ml-0 sm:w-[calc(50%-2.5rem)]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-500">
                    <FiBriefcase />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm font-medium text-accent-500">{exp.company}</p>
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-[var(--text-soft)]">
                  <span className="chip">{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin /> {exp.location}
                  </span>
                </div>
                <ul className="mb-4 list-inside list-disc space-y-1.5 text-sm text-[var(--text-soft)]">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
