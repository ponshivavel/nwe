import { motion } from 'framer-motion'
import { FaMedal, FaTrophy, FaCode, FaGraduationCap } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { achievements } from '../data/content'

const iconMap = {
  medal: FaMedal,
  trophy: FaTrophy,
  code: FaCode,
  graduation: FaGraduationCap,
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Honors"
          subtitle="Recognition and accomplishments that mark my journey."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || FaTrophy
            return (
              <ScrollReveal key={item.title} delay={(i % 4) * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group relative h-full overflow-hidden glass-card p-6"
                >
                  <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-accent-500/10 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20" />
                  <motion.span
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-2xl text-white shadow-glow"
                  >
                    <Icon />
                  </motion.span>
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">
                    {item.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
