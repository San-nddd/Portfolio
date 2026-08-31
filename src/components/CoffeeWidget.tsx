import { motion } from 'framer-motion'
import { HandCoins } from 'lucide-react'
import { useI18n } from '../i18n'

export function CoffeeWidget() {
  const { locale, data } = useI18n()
  return (
    <motion.a
      href={data.coffee}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-[#3B82F6]/40 bg-[var(--bg)]/90 px-4 py-3 shadow-xl backdrop-blur theme-transition hover:border-[#3B82F6]"
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
        <HandCoins className="h-5 w-5 text-[#3B82F6]" />
      </motion.span>
      <span className="hidden text-sm font-medium sm:block">{locale.coffee}</span>
    </motion.a>
  )
}
