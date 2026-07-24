import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="Selected projects showcasing full-stack engineering and data science work."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group glass-card overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-[var(--text-soft)]"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-accent-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost text-sm"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
