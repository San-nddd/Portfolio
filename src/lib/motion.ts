import type { Variants } from 'framer-motion'

export const EASE = [0.76, 0, 0.24, 1] as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 90, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
}

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay, ease: EASE },
  },
})

// Each item reveals once when the section enters the viewport — and reveals
// again every time the user scrolls back to it (viewport uses once: false).
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE },
  },
}

// once: false — reveals replay on every re-entry as the user moves between
// sections, but do NOT keep pulsing while a section stays on screen.
export const viewport = { once: false, amount: 0.2 } as const
