import { motion } from 'framer-motion'
import { personalInfo } from '../data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--muted)]/15 px-6 py-12">
      <div className="site-container flex flex-col items-center justify-between gap-4 md:flex-row">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm font-bold"
        >
          {personalInfo.name}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[var(--muted)]"
        >
          © {year} {personalInfo.name}. Built with React, Tailwind & Framer
          Motion.
        </motion.p>
        <motion.a
          href="#top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="font-mono text-xs text-[#6C63FF] hover:underline"
        >
          Back to top ↑
        </motion.a>
      </div>
    </footer>
  )
}
