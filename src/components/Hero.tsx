import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'
import { useI18n } from '../i18n'
import { EASE } from '../lib/motion'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const [value, setValue] = useState(0)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (inView) {
      motionValue.set(target)
      const unsub = spring.on('change', (latest) => setValue(Math.round(latest)))
      return unsub
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target])

  return (
    <motion.span ref={ref}>
      {value}
      {suffix}
    </motion.span>
  )
}

export function Hero({ start }: { start: boolean }) {
  const { locale, data } = useI18n()
  const headlineLines = locale.hero.headline
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28 pb-24"
    >
      
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-x-0 top-[14%] z-10 flex w-full select-none overflow-hidden"
        aria-hidden
      >
        <motion.div
          className="flex w-max shrink-0"
          animate={{ x: ['0%', '-25%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 60 }}
        >
          {[...Array(4)].map((_, dup) => (
            <span
              key={dup}
              aria-hidden
              className="text-outline whitespace-nowrap font-display text-[24vw] font-extrabold leading-none tracking-tight"
            >
              {data.lastName}&nbsp;—&nbsp;{data.skills.map((s) => s.name).join(' • ')}&nbsp;—&nbsp;
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ---------------- LAYER 2 (z-20): Portrait + corner stats ---------------- */}
      <motion.div
        className="relative z-20 w-full max-w-[15rem] sm:max-w-xs"
        initial={{ y: 120, opacity: 0 }}
        animate={start ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
      >
        {/* Soft glow behind the portrait */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(108,99,255,0.55), transparent 65%)',
          }}
        />
        <motion.div
          className="relative mx-auto w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 82% 78% at 50% 45%, black 60%, transparent 98%)',
            maskImage:
              'radial-gradient(ellipse 82% 78% at 50% 45%, black 60%, transparent 98%)',
          }}
          animate={{ y: [0, -14, 0], rotate: [0, 1.2, 0], scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        >
          {/* TODO: REPLACE PORTRAIT PHOTO HERE. Use a transparent PNG/WEBP. */}
          <img
            src={data.portrait}
            alt={locale.hero.portraitAlt}
            className="relative z-10 w-full"
            draggable={false}
          />
        </motion.div>

        {/* Water surface shadow — ripples like a floating object on water */}
        <motion.div
          aria-hidden
          className="absolute -bottom-7 left-1/2 h-7 w-[68%] -translate-x-1/2 rounded-[100%] bg-[var(--fg)]/15 blur-xl"
          animate={{
            scaleX: [1, 1.12, 1],
            scaleY: [1, 0.7, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />

        {/* Stats anchored to the bottom corners (desktop only to avoid overlap) */}
        <div className="pointer-events-none absolute -left-24 bottom-14 z-20 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={start ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="rounded-2xl border border-[var(--muted)]/20 bg-[var(--bg)]/90 px-5 py-4 backdrop-blur theme-transition"
          >
            <span className="font-display text-3xl font-bold text-[#6C63FF]">
              <Counter target={data.stats.projectsCount} suffix="+" />
            </span>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
              {locale.hero.projects}
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute -right-24 bottom-10 z-20 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={start ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="rounded-2xl border border-[var(--muted)]/20 bg-[var(--bg)]/90 px-5 py-4 backdrop-blur theme-transition"
          >
            <span className="font-display text-3xl font-bold text-[#6C63FF]">
              <Counter target={data.stats.yearsExperience} suffix="" />
            </span>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
              {locale.hero.years}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ---------------- LAYER 3 (z-30): Foreground editorial headline ---------------- */}
      <motion.div
        className="relative z-30 mt-[-2.5rem] w-full max-w-5xl px-6 text-center sm:mt-[-3rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={start ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          {headlineLines.map((line, lineIdx) => (
            <span key={`line-${lineIdx}`} className="block">
              {lineIdx > 0 && <br className="hidden" />}
              {line.map((word, i) => {
                const global = headlineLines
                  .slice(0, lineIdx)
                  .reduce((acc, l) => acc + l.length, 0) + i
                return (
                  <span
                    key={`w-${lineIdx}-${i}`}
                    className="inline-block overflow-hidden align-top"
                  >
                    <motion.span
                      className={`inline-block ${
                        word === 'Ahsan' ? 'text-[#6C63FF]' : 'text-[var(--fg)]'
                      }`}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={start ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.5, ease: EASE, delay: 1.1 + global * 0.05 }}
                    >
                      {word}
                    </motion.span>
                    {'\u00A0'}
                  </span>
                )
              })}
            </span>
          ))}
        </h1>
      </motion.div>

      {/* ---------------- Scroll cue ---------------- */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-40 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <div className="h-12 w-px bg-[var(--muted)]/40" />
      </motion.div>
    </section>
  )
}
