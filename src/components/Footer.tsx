import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export function Footer() {
  const { locale, data } = useI18n()
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
          {data.name}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[var(--muted)]"
        >
          © {year} {data.name}. {locale.footer.built}
        </motion.p>
        <motion.a
          href="#top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="font-mono text-xs text-[#3B82F6] hover:underline"
        >
          {locale.footer.backToTop}
        </motion.a>
      </div>
    </footer>
  )
}
