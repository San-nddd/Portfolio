import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCheck,
  Code2,
  GraduationCap,
  Library,
  MapPin,
  Rocket,
  School,
  Sparkles,
} from 'lucide-react'
import { education, type Education } from '../data'
import { EASE, staggerContainer, staggerItem, viewport } from '../lib/motion'

type IconProps = { className?: string }

const levelIcon: Record<Education['level'], ComponentType<IconProps>> = {
  sd: School,
  mts: Library,
  smk: Code2,
  university: GraduationCap,
}

const statusMeta: Record<
  Education['status'],
  { label: string; icon: ComponentType<IconProps>; chipClass: string }
> = {
  completed: {
    label: 'Lulus',
    icon: CheckCheck,
    chipClass: 'border-[var(--muted)]/25 text-[var(--muted)]',
  },
  current: {
    label: 'Sedang Berjalan',
    icon: Rocket,
    chipClass: 'border-[#6C63FF]/50 bg-[#6C63FF]/10 text-[#6C63FF]',
  },
  plan: {
    label: 'Rencana',
    icon: Sparkles,
    chipClass: 'border-dashed border-[#6C63FF]/40 text-[#6C63FF]',
  },
}

function TimelineItem({ item }: { item: Education }) {
  const LevelIcon = levelIcon[item.level]
  const StatusIcon = statusMeta[item.status].icon
  const isCurrent = item.status === 'current'
  const isPlan = item.status === 'plan'

  return (
    <li className="relative flex items-start gap-5 md:gap-7">
      {/* Node with icon */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: 45, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
          className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-[2.5px] bg-[var(--bg)] text-[var(--muted)] theme-transition ${
            isCurrent
              ? 'border-[#6C63FF] text-[#6C63FF] shadow-[0_0_24px_rgba(108,99,255,0.45)]'
              : isPlan
                ? 'border-dashed border-[#6C63FF]/50 text-[#6C63FF]/80'
                : 'border-[var(--muted)]/30'
          }`}
        >
          <LevelIcon className="h-5 w-5" />
          {isCurrent && (
            <motion.span
              className="absolute inset-0 rounded-2xl bg-[#6C63FF]/35"
              animate={{ scale: [1, 1.45], opacity: [0.7, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
            />
          )}
        </motion.div>
      </div>

      {/* Card */}
      <motion.article
        initial={{ opacity: 0, x: 80, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: EASE }}
        whileHover={{ y: -4 }}
        className="group relative mb-8 w-full rounded-2xl border border-[var(--muted)]/15 bg-[var(--bg)] p-6 theme-transition hover:border-[#6C63FF]/40 hover:shadow-[0_0_36px_rgba(108,99,255,0.18)] md:mb-10 md:p-7"
      >
        {/* Top accent line on hover */}
        <span
          className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-[#6C63FF] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60 ${
            isCurrent || isPlan ? 'opacity-40' : ''
          }`}
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest ${statusMeta[item.status].chipClass}`}
          >
            <StatusIcon className="h-3 w-3" />
            {statusMeta[item.status].label}
          </span>
          <span className="font-mono text-xs font-semibold tracking-widest text-[#6C63FF]">
            {item.period}
          </span>
        </div>

        <h3 className="mt-4 font-display text-xl font-bold tracking-tight md:text-2xl">
          {item.school}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
          <MapPin className="h-3.5 w-3.5 text-[#6C63FF]" />
          {item.location}
        </p>
        <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">
          {item.description}
        </p>
      </motion.article>
    </li>
  )
}

export function Journey() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(0.1, 0.1)}
      className="mt-20 border-t border-[var(--muted)]/15 pt-14 md:mt-24"
    >
      <motion.div variants={staggerItem} className="mb-12">
        <motion.p
          variants={staggerItem}
          className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#6C63FF]"
        >
          <span className="inline-block h-px w-8 bg-[#6C63FF]" />
          My Journey
        </motion.p>
        <motion.h3
          variants={staggerItem}
          className="font-display text-3xl font-bold tracking-tight md:text-5xl"
        >
          Education <span className="text-[#6C63FF]">timeline</span>
        </motion.h3>
        <motion.p variants={staggerItem} className="mt-4 max-w-xl text-[var(--muted)]">
          Dari bangku sekolah dasar hingga target kuliah — setiap langkah kecil
          membentuk cara saya berpikir dan berkarya.
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Animated timeline spine */}
        <motion.span
          aria-hidden
          className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#6C63FF] via-[#6C63FF]/45 to-[var(--muted)]/10"
          style={{ originY: 0 }}
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.4, ease: EASE }}
        />

        <ol className="relative">
          {education.map((item) => (
            <TimelineItem key={item.school} item={item} />
          ))}
        </ol>
      </div>
    </motion.div>
  )
}