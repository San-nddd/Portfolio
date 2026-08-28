import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  onComplete: () => void
}

const EASE = [0.76, 0, 0.24, 1]

export function Preloader({ onComplete }: Props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let value = 0
    const duration = 1800
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-in-out cubic
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2
      value = Math.round(eased * 100)
      setCount(value)
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 350)
      }
    }

    requestAnimationFrame(tick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-paper"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.p
          className="font-mono text-sm tracking-[0.4em] uppercase text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          AHSAN MAHMUD FAUZI YUSRY
        </motion.p>
        <div className="relative flex items-center justify-center">
          <motion.span
            className="font-display text-[9rem] font-bold leading-none md:text-[14rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          >
            {count}
          </motion.span>
          <motion.span
            className="mb-10 font-mono text-2xl text-white/40"
            animate={{ opacity: count === 100 ? 0 : 1 }}
          >
            %
          </motion.span>
        </div>
        <motion.div className="h-px w-56 overflow-hidden bg-white/15 md:w-80">
          <motion.div
            className="h-full bg-white/80"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            style={{ originX: 0 }}
            transition={{ ease: EASE, duration: 0.05 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
