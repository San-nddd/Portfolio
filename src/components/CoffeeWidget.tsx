import { motion } from 'framer-motion'
import { HandCoins } from 'lucide-react'
import { coffeeLink } from '../data'

export function CoffeeWidget() {
  return (
    <motion.a
      href={coffeeLink}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-[#6C63FF]/40 bg-[var(--bg)]/90 px-4 py-3 shadow-xl backdrop-blur theme-transition hover:border-[#6C63FF]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="flex text-xl"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <HandCoins className="h-5 w-5 text-[#6C63FF]" />
      </motion.span>
      <span className="hidden text-sm font-medium sm:block">Sawer aku</span>
    </motion.a>
  )
}
