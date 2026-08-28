import { useCallback, useEffect, useRef } from 'react'
import { useMotionValue } from 'framer-motion'

export function useConvexCard(
  register: (fn: () => void) => () => void,
  windowHalf: number,
) {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const rotateY = useMotionValue(0)
  const scale = useMotionValue(1)
  const zIndex = useMotionValue(0)
  const translateZ = useMotionValue(0)

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    elementRef.current = node
  }, [])

  const update = useCallback(() => {
    const el = elementRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    // Distance of the card centre from the viewport centre, normalised to a
    // fraction of the half-viewport so the curve feels consistent on all screens.
    const offset = rect.left + rect.width / 2 - windowHalf
    const nx = Math.max(-1, Math.min(1, offset / Math.max(1, windowHalf)))

    // Convex / fabric-pull curve: centre card faces the viewer and bulges
    // forward, edge cards rotate away and shrink as if wrapping a cylinder.
    rotateY.set(-nx * 45)

    const depth = Math.abs(nx)
    // Smooth (quadratic-ish) falloff so the middle is clearly prominent.
    scale.set(1 - depth * depth * 0.3)
    zIndex.set(10 + Math.round((1 - depth) * 10))
    // Centre card is pulled toward the viewer for extra "fabric" depth.
    translateZ.set(depth > 0 ? Math.round((1 - depth) * 60) : 90)
  }, [rotateY, scale, zIndex, translateZ, windowHalf])

  // Always refer to the latest closure from within the registered function.
  const latestUpdate = useRef(update)
  latestUpdate.current = update

  // Register this card's projection with the parent so it gets reprojected
  // whenever the carousel scrolls or the viewport changes size.
  useEffect(() => {
    return register(() => latestUpdate.current())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register])

  return {
    containerRef,
    style: { rotateY, scale, zIndex, z: translateZ, transformPerspective: 1000 },
  }
}