import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tech I Work With"
          subtitle="A curated toolkit of languages, frameworks, and tools I use to build products."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <ScrollReveal key={skill.name} delay={(i % 6) * 0.05}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="tooltip-host group relative flex flex-col items-center gap-3 rounded-3xl glass-card p-5 text-center"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4 + (i % 5),
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--bg-soft)] text-3xl shadow-soft transition-all duration-300 group-hover:shadow-glow"
                    style={{ color: skill.color }}
                  >
                    <Icon />
                  </motion.div>
                  <span className="text-sm font-semibold">{skill.name}</span>
                  <span className="tooltip">{skill.name}</span>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
