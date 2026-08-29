import { motion } from 'framer-motion'
import { Mail, Github, Instagram, ArrowUpRight } from 'lucide-react'
import { SiTiktok } from 'react-icons/si'
import type { ComponentType } from 'react'
import { useI18n } from '../i18n'
import { viewport } from '../lib/motion'

type IconProps = { className?: string }

export function Contact() {
  const { locale, data } = useI18n()

  const contactItems: {
    label: string
    value: string
    href: string
    icon: ComponentType<IconProps>
  }[] = [
    {
      label: 'Email',
      value: data.email,
      href: `mailto:${data.email}`,
      icon: Mail,
    },
    {
      label: 'GitHub',
      value: 'github.com/San-nddd',
      href: 'https://github.com/San-nddd',
      icon: Github,
    },
    {
      label: 'Instagram',
      value: 'instagram.com/san_nddd',
      href: 'https://www.instagram.com/san_nddd?igsi=OHJ4cXI4MmZ3bHJ3',
      icon: Instagram,
    },
    {
      label: 'TikTok',
      value: 'tiktok.com/@publik_codm',
      href: 'https://www.tiktok.com/@publik_codm',
      icon: SiTiktok as ComponentType<IconProps>,
    },
  ]

  return (
    <section id="contact" className="section-pad px-6">
      <div className="site-container max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[#6C63FF]"
        >
          {locale.contact.kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 90, scale: 0.95, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={viewport}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          {locale.contact.line1}
          <br />
          <span className="text-[#6C63FF]">{locale.contact.line2}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-[var(--muted)]"
        >
          {locale.contact.desc}
        </motion.p>

        {/* Giant typography-driven clickable list */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mt-16 max-w-3xl divide-y divide-[var(--muted)]/15 border-y border-[var(--muted)]/15"
        >
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, x: -70, filter: 'blur(4px)' },
                  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } },
                }}
                className="group flex items-center justify-between gap-3 py-6 md:gap-6 md:py-8"
              >
                <div className="flex min-w-0 shrink items-center gap-3 md:gap-6">
                  <Icon className="h-5 w-5 shrink-0 text-[#6C63FF]" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)] md:text-sm">
                    {item.label}
                  </span>
                </div>
                <div className="flex min-w-0 items-center gap-2 md:gap-3">
                  <span className="min-w-0 truncate font-display text-sm font-semibold transition-colors group-hover:text-[#6C63FF] md:text-2xl">
                    {item.value}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6C63FF]" />
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
