import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects, type Project } from '../data'
import { staggerContainer, staggerItem, viewport } from '../lib/motion'
import { useConvexCard } from '../lib/useConvexCard'
import { ConvexCarousel } from './ConvexCarousel'

function ConvexCard({
  project,
  register,
  windowHalf,
}: {
  project: Project
  register: (fn: () => void) => () => void
  windowHalf: number
}) {
  const { containerRef, style } = useConvexCard(register, windowHalf)

  return (
    <div className="w-[260px] shrink-0 sm:w-[300px]">
      <motion.article
        ref={containerRef}
        style={style}
        className="group relative overflow-hidden rounded-2xl border border-[var(--muted)]/15 theme-transition hover:border-[#6C63FF]/40"
      >
        <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-br from-[#6C63FF]/40 to-transparent">
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
              {project.highlight}
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
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6C63FF] text-white hover:bg-[#5a54e0]"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="p-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#6C63FF]">
            {project.category}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold transition-transform duration-300 group-hover:-translate-y-1">
            {project.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--muted)]/20 px-2.5 py-1 font-mono text-[10px] text-[var(--muted)] transition-all duration-300 group-hover:border-[#6C63FF]/50 group-hover:text-[#6C63FF] group-hover:shadow-[0_0_12px_rgba(108,99,255,0.45)]"
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
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6C63FF]">
              Selected Work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Things I've Built
            </h2>
          </motion.div>
          <motion.p variants={staggerItem} className="max-w-sm text-[var(--muted)]">
            A living, convex showcase — drag or scroll and it wraps endlessly.
            Cards in the centre face you; edges angle away like a cylinder.
          </motion.p>
        </motion.div>
      </div>

      <ConvexCarousel
        className="pt-4 md:pt-6"
        ariaLabel="Selected projects carousel"
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