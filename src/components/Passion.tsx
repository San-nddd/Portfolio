import { motion } from 'framer-motion'
import { Camera, HeartHandshake } from 'lucide-react'
import { useI18n } from '../i18n'
import { staggerContainer, staggerItem, viewport } from '../lib/motion'
import { useConvexCard } from '../lib/useConvexCard'
import { ConvexCarousel } from './ConvexCarousel'

type LocalizedPassion = ReturnType<typeof useI18n>['data']['passions'][number]

function PassionCard({
  item,
  register,
  windowHalf,
  photoLabel,
  hobbyLabel,
}: {
  item: LocalizedPassion
  register: (fn: () => void) => () => void
  windowHalf: number
  photoLabel: string
  hobbyLabel: string
}) {
  const { containerRef, style } = useConvexCard(register, windowHalf)
  const isHobby = item.category === 'Hobbies'

  return (
    <div className="w-[260px] shrink-0 sm:w-[300px]">
      <motion.article
        ref={containerRef}
        style={style}
        className="group relative overflow-hidden rounded-2xl border border-[var(--muted)]/15 theme-transition hover:border-[#6C63FF]/40"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#6C63FF]/40 to-transparent">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <span
            className={`absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-black ${
              isHobby ? 'bg-white/90' : 'bg-[#6C63FF] text-white'
            }`}
          >
            {isHobby ? <HeartHandshake className="h-3 w-3" /> : <Camera className="h-3 w-3" />}
            {item.category === 'Hobbies' ? hobbyLabel : photoLabel}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <h3 className="font-display text-xl font-bold">{item.title}</h3>
            <p className="mt-1 text-sm text-white/80">{item.description}</p>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export function Passion() {
  const { locale, data } = useI18n()

  return (
    <section id="passion" className="section-pad overflow-hidden px-6">
      <div className="site-container">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <motion.div variants={staggerItem}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6C63FF]">
              {locale.passion.kicker}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
              {locale.passion.title}
            </h2>
          </motion.div>
          <motion.p variants={staggerItem} className="max-w-sm text-[var(--muted)]">
            {locale.passion.desc}
          </motion.p>
        </motion.div>
      </div>

      <ConvexCarousel
        ariaLabel={locale.passion.aria}
        hintText={locale.passion.hint}
      >
        {(register, windowHalf) =>
          [...data.passions, ...data.passions].map((item, i) => (
            <PassionCard
              key={`${item.id}-${i}`}
              item={item}
              register={register}
              windowHalf={windowHalf}
              photoLabel={locale.passion.photo}
              hobbyLabel={locale.passion.hobby}
            />
          ))
        }
      </ConvexCarousel>
    </section>
  )
}
