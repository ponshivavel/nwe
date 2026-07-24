import { motion } from 'framer-motion'
import { FiAward, FiCalendar, FiShield } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified Credentials"
          subtitle="Professional certifications that validate my skills and continuous learning."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={(i % 4) * 0.08}>
              <motion.div
                whileHover={{ y: -8, rotate: -1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative h-full overflow-hidden glass-card p-6"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl transition-all duration-500 group-hover:bg-accent-500/20" />
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                  <FiAward />
                </span>
                <h3 className="font-display text-base font-semibold leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-soft)]">{cert.issuer}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-[var(--text-soft)]">
                  <span className="flex items-center gap-1">
                    <FiCalendar /> {cert.year}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <FiShield /> {cert.credentialId}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
