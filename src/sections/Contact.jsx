import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { personal } from '../data/content'

const items = [
  { icon: <FiMail />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <FiPhone />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: personal.linkedin, href: personal.linkedin },
  { icon: <FaGithub />, label: 'GitHub', value: personal.github, href: personal.github },
  { icon: <FiMapPin />, label: 'Location', value: personal.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have an opportunity or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={(i % 2) * 0.1}>
              <motion.a
                href={item.href || undefined}
                target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ y: -6 }}
                className={`flex items-center gap-4 glass-card p-5 ${item.href ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-xl text-white shadow-glow">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--text-soft)]">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <a href={`mailto:${personal.email}`} className="btn-primary">
              <FiSend /> Send an Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

