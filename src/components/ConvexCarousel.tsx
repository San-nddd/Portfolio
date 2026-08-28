import { useCallback, useEffect, useRef, useState, type PointerEvent as RPointerEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { EASE, viewport } from '../lib/motion'

interface ConvexCarouselProps {
  children: (register: (fn: () => void) => () => void, windowHalf: number) => ReactNode
  hintText?: string
  ariaLabel?: string
  className?: string
}

/**
 * Horizontal, infinitely-looping carousel with a convex "fabric pull" effect.
 *
 * Render the same content twice (or more) as direct flex children and this
 * track will wrap seamlessly at the halfway point while cards are reprojected
 * so the centre card faces the viewer and edges angle away like a cylinder.
 */
export function ConvexCarousel({
  children,
  hintText = '← Drag to explore →',
  ariaLabel,
  className = '',
}: ConvexCarouselProps) {
  const updatersRef = useRef<Array<() => void>>([])
  const rafRef = useRef(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ startX: number; scrollLeft: number; active: boolean }>({
    startX: 0,
    scrollLeft: 0,
    active: false,
  })
  const [isDragging, setIsDragging] = useState(false)
  const [windowHalf, setWindowHalf] = useState(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
  )

  const startDrag = useCallback((e: RPointerEvent<HTMLDivElement>) => {
    // Let touch / pen use native smooth scrolling; only mouse grabs the fabric.
    if (e.pointerType !== 'mouse') return
    const el = trackRef.current
    if (!el) return
    dragRef.current = { startX: e.clientX, scrollLeft: el.scrollLeft, active: true }
    setIsDragging(true)
  }, [])

  const onDrag = useCallback((e: RPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    const d = dragRef.current
    if (!el || !d.active) return
    const dx = e.clientX - d.startX
    el.scrollLeft = d.scrollLeft - dx
  }, [])

  const endDrag = useCallback(() => {
    dragRef.current.active = false
    setIsDragging(false)
  }, [])

  const register = useCallback((updateFn: () => void) => {
    updatersRef.current.push(updateFn)
    return () => {
      updatersRef.current = updatersRef.current.filter((f) => f !== updateFn)
    }
  }, [])

  const runProjection = useCallback(() => {
    updatersRef.current.forEach((fn) => fn())
  }, [])

  // Reproject on scroll, then wrap seamlessly by jumping one content-width.
  const handleScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(runProjection)

    if (el.scrollWidth > 0) {
      const half = el.scrollWidth / 2
      if (el.scrollLeft >= half) el.scrollLeft -= half
      else if (el.scrollLeft <= 0) el.scrollLeft += half
    }
  }, [runProjection])

  // Re-project whenever the viewport changes size.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const onResize = () => setWindowHalf(window.innerWidth / 2)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Start in the middle of the duplicated content so it can loop both ways.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollLeft = el.scrollWidth / 2
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(runProjection)
    return () => cancelAnimationFrame(rafRef.current)
  }, [runProjection])

  useEffect(() => {
    runProjection()
  }, [windowHalf, runProjection])

  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.9, ease: EASE }}
      className={`relative w-full ${className}`}
      style={{ perspective: 1000 }}
    >
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        onScroll={handleScroll}
        onPointerDown={startDrag}
        onPointerMove={onDrag}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        // Keep the loop-jump instant even though <html> has smooth scrolling.
        style={{ scrollBehavior: 'auto' }}
        className={`no-scrollbar flex w-full touch-pan-x select-none gap-6 overflow-x-auto px-6 pt-8 pb-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {children(register, windowHalf)}
      </div>
      <p className="site-container mt-2 text-center font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
        {hintText}
      </p>
    </motion.div>
  )
}