import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
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
  SiOpencode,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { skills, services } from '../data'
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
  opencode: SiOpencode,
  api: TbApi,
}

function TechTile({ icon, label }: { icon: string; label: string }) {
  const Icon = iconDefs[icon] || ((p: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><rect x="4" y="4" width="16" height="16" rx="2"/></svg>)
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group relative flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-[var(--muted)]/15 bg-[var(--bg)] theme-transition hover:border-[#6C63FF]/50"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-1"
      >
        <Icon className="h-7 w-7 text-[var(--muted)] transition-all duration-300 group-hover:scale-110 group-hover:text-[#6C63FF]" />
        <span className="font-mono text-[9px] uppercase tracking-wide text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100">
          {label}
        </span>
      </motion.div>
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-xl"
        whileHover={{ boxShadow: '0 0 28px rgba(108,99,255,0.45)' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export function Capabilities() {
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
              My Toolkit
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl"
            >
              Capabilities
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-4 max-w-md text-[var(--muted)]">
              The technologies I reach for every day to bring ideas to life — hover for a
              closer look.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-10 grid grid-cols-4 gap-3 sm:grid-cols-6"
          >
            {skills.map((skill) => (
              <TechTile key={skill.name} icon={skill.icon} label={skill.name} />
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
            What I Can Do
          </motion.p>
          <div className="mt-8 space-y-4">
            {services.map((service, i) => (
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
