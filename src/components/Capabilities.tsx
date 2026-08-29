import type { ComponentType } from 'react'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiLaravel,
  SiPhp,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiFigma,
  SiGit,
  SiGithub,
  SiOpencode,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { useI18n } from '../i18n'
import { staggerContainer, staggerItem, viewport } from '../lib/motion'

type IconProps = { className?: string }

const iconDefs: Record<string, ComponentType<IconProps>> = {
  react: SiReact,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  laravel: SiLaravel,
  php: SiPhp,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  mysql: SiMysql,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
  opencode: SiOpencode,
  api: TbApi,
}

const TILE_INTERVAL = 900

function TechTile({
  icon,
  label,
  active,
  onEnter,
  onLeave,
}: {
  icon: string
  label: string
  active: boolean
  onEnter?: () => void
  onLeave?: () => void
}) {
  const Icon = iconDefs[icon] || ((p: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><rect x="4" y="4" width="16" height="16" rx="2"/></svg>)
  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      animate={{ y: active ? -7 : 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 14 }}
      className="group relative flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-[var(--muted)]/15 bg-[var(--bg)] theme-transition hover:border-[#6C63FF]/50"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-1"
      >
        <Icon
          className={`h-7 w-7 transition-all duration-300 ${
            active
              ? 'scale-110 text-[#6C63FF] drop-shadow-[0_0_10px_rgba(108,99,255,0.7)]'
              : 'text-[var(--muted)] group-hover:scale-110 group-hover:text-[#6C63FF]'
          }`}
        />
        <span className="font-mono text-[9px] uppercase tracking-wide text-[var(--muted)] opacity-100">
          {label}
        </span>
      </motion.div>
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-xl"
        animate={{ boxShadow: active ? '0 0 28px rgba(108,99,255,0.45)' : '0 0 0px rgba(108,99,255,0)' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export function Capabilities() {
  const { locale, data } = useI18n()
  const gridRef = useRef<HTMLDivElement>(null)
  const inView = useInView(gridRef, { once: true, margin: '-15% 0px -15% 0px' })
  const [activeIdx, setActiveIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!inView || paused) return
    const t = window.setInterval(
      () => setActiveIdx((prev) => (prev + 1) % data.skills.length),
      TILE_INTERVAL
    )
    return () => window.clearInterval(t)
  }, [inView, paused, data.skills.length])

  return (
    <section id="capabilities" className="section-pad px-6">
      <div className="site-container grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
        {/* Left: tech stack grid */}
        <div>
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={staggerItem}
              className="font-mono text-xs uppercase tracking-[0.3em] text-[#6C63FF]"
            >
              {locale.capabilities.kicker}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl"
            >
              {locale.capabilities.title}
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-4 max-w-md text-[var(--muted)]">
              {locale.capabilities.desc}
            </motion.p>
          </motion.div>

          <motion.div
            ref={gridRef}
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-10 grid grid-cols-4 gap-3 sm:grid-cols-6"
          >
            {data.skills.map((skill, i) => (
              <TechTile
                key={skill.name}
                icon={skill.icon}
                label={skill.name}
                active={activeIdx === i}
                onEnter={() => setPaused(true)}
                onLeave={() => setPaused(false)}
              />
            ))}
          </motion.div>
        </div>

        {/* Right: numbered service cards */}
        <div>
          <motion.p
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[#6C63FF]"
          >
            {locale.capabilities.what}
          </motion.p>
          <div className="mt-8 space-y-4">
            {data.services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group rounded-2xl border border-[var(--muted)]/15 p-6 theme-transition hover:border-[#6C63FF]/40 hover:bg-[#6C63FF]/5"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-[#6C63FF]">{service.num}</span>
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="mt-3 pl-10 text-[var(--muted)]">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 pl-10">
                  {service.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 px-3 py-1 font-mono text-xs text-[#6C63FF]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}