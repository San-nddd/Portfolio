import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { useI18n } from '../i18n'
import { staggerContainer, staggerItem, viewport } from '../lib/motion'
import { useConvexCard } from '../lib/useConvexCard'
import { ConvexCarousel } from './ConvexCarousel'

type LocalizedProject = ReturnType<typeof useI18n>['data']['projects'][number]

function ConvexCard({
  project,
  register,
  windowHalf,
}: {
  project: LocalizedProject
  register: (fn: () => void) => () => void
  windowHalf: number
}) {
  const { containerRef, style } = useConvexCard(register, windowHalf)
  const { locale } = useI18n()

  return (
    <div className="w-[260px] shrink-0 sm:w-[300px]">
      <motion.article
        ref={containerRef}
        style={style}
        className="group relative overflow-hidden rounded-2xl border border-[var(--muted)]/15 theme-transition hover:border-[#3B82F6]/40"
      >
        <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-br from-[#3B82F6]/40 to-transparent">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {project.highlight && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-black">
              {locale.ui.featured}
            </span>
          )}
          <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/80"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} demo`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B82F6] text-white hover:bg-[#2563EB]"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="p-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#3B82F6]">
            {project.category}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold transition-transform duration-300 group-hover:-translate-y-1">
            {project.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--muted)]/20 px-2.5 py-1 font-mono text-[10px] text-[var(--muted)] transition-all duration-300 group-hover:border-[#3B82F6]/50 group-hover:text-[#3B82F6] group-hover:shadow-[0_0_12px_rgba(59,130,246,0.45)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export function WorkGallery() {
  const { locale, data } = useI18n()
  const projects = data.projects

  return (
    <section id="work" className="section-pad overflow-hidden px-6">
      <div className="site-container">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <motion.div variants={staggerItem}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#3B82F6]">
              {locale.work.kicker}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
              {locale.work.title}
            </h2>
          </motion.div>
          <motion.p variants={staggerItem} className="max-w-sm text-[var(--muted)]">
            {locale.work.desc}
          </motion.p>
        </motion.div>
      </div>

      <ConvexCarousel
        className="pt-4 md:pt-6"
        ariaLabel={locale.work.aria}
        hintText={locale.work.hint}
      >
        {(register, windowHalf) =>
          [...projects, ...projects].map((project, i) => (
            <ConvexCard
              key={`${project.id}-${i}`}
              project={project}
              register={register}
              windowHalf={windowHalf}
            />
          ))
        }
      </ConvexCarousel>
    </section>
  )
}
