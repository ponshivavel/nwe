import { motion } from 'framer-motion'
import { FiTarget, FiUser } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section-pad relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A glimpse into my journey, goals, and academic background."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="glass-card h-full p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-500">
                  <FiUser />
                </span>
                <h3 className="font-display text-xl font-semibold">Professional Summary</h3>
              </div>
              <p className="leading-relaxed text-[var(--text-soft)]">{about.summary}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card h-full p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-500">
                  <FiTarget />
                </span>
                <h3 className="font-display text-xl font-semibold">Career Objective</h3>
              </div>
              <p className="leading-relaxed text-[var(--text-soft)]">{about.objective}</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <h3 className="mb-8 text-center font-display text-2xl font-semibold">
            Education Timeline
          </h3>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-500 via-accent-500 to-transparent sm:left-1/2" />
            {about.education.map((edu, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative mb-8">
                <div
                  className={`flex ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  <div className="absolute left-4 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-brand-500 bg-[var(--bg)] sm:left-1/2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/40" />
                  </div>
                  <div className="glass-card ml-10 w-full p-5 sm:ml-0 sm:w-[calc(50%-2rem)]">
                    <span className="chip mb-2">{edu.period}</span>
                    <h4 className="font-display text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-[var(--text-soft)]">{edu.institution}</p>
                    <p className="mt-2 text-sm font-medium text-accent-500">{edu.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
