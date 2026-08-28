import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AdaptiveDpr } from '@react-three/drei'
import * as THREE from 'three'
import { animate, type JSAnimation } from 'animejs'
import { earthState } from './earthStore'
import { earthColor } from '../data/config'

const COUNT = 3400
const R = 1.5
const SPREAD = 3.6
const COLOR = earthColor

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))

function useScrollEarth() {
  useEffect(() => {
    let raf = 0
    const runningRef: JSAnimation[] = []

    const compute = () => {
      const vh = window.innerHeight
      const y = window.scrollY
      const work = document.getElementById('work')
      const about = document.getElementById('about')
      const workTop = work ? work.offsetTop : vh * 2
      const aboutTop = about ? about.offsetTop : vh * 4

      const split = clamp((y - (workTop - vh * 0.55)) / (vh * 0.5), 0, 1)
      const reform = clamp((y - (aboutTop - vh * 0.45)) / (vh * 0.6), 0, 1)

      runningRef.forEach((a) => a.pause())
      runningRef.length = 0
      runningRef.push(
        animate(earthState, {
          split,
          reform,
          duration: 750,
          ease: 'outQuart',
        }),
      )
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(compute)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    compute()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
      runningRef.forEach((a) => a.pause())
      runningRef.length = 0
    }
  }, [])
}

function EarthPoints() {
  const group = useRef<THREE.Group>(null)
  const geoRef = useRef<THREE.BufferGeometry>(null)

  const { base, normal, jitter, helix } = useMemo(() => {
    const base = new Float32Array(COUNT * 3)
    const normal = new Float32Array(COUNT * 3)
    const jitter = new Float32Array(COUNT)
    const helix = new Float32Array(COUNT * 3)

    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < COUNT; i++) {
      const t = i / (COUNT - 1)
      const y = 1 - t * 2
      const r = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = golden * i
      const x = Math.cos(theta) * r
      const z = Math.sin(theta) * r

      jitter[i] = Math.random()
      base[i * 3] = x * R
      base[i * 3 + 1] = y * R
      base[i * 3 + 2] = z * R
      normal[i * 3] = x
      normal[i * 3 + 1] = y
      normal[i * 3 + 2] = z
    }

    // Abstract "data visualisation" target — double helix
    for (let i = 0; i < COUNT; i++) {
      const t = i / COUNT
      const strand = i % 2
      const phi = t * Math.PI * 5 + Math.PI * strand
      const rr = 0.62
      const yy = (t - 0.5) * 4.4
      helix[i * 3] = Math.cos(phi) * rr
      helix[i * 3 + 1] = yy
      helix[i * 3 + 2] = Math.sin(phi) * rr
    }

    return { base, normal, jitter, helix }
  }, [])

  const current = useMemo(() => base.slice(), [base])
  const attrRef = useRef<THREE.BufferAttribute>(null)

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05)
    const { split, reform } = earthState
    const k = 1 - Math.exp(-dt * 5.5)

    const attr = attrRef.current
    if (!attr) return
    const arr = attr.array as Float32Array

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3
      const nx = normal[i3]
      const ny = normal[i3 + 1]
      const nz = normal[i3 + 2]

      const frag = (0.25 + jitter[i] * 1.2) * SPREAD * split

      let tx = base[i3] + nx * frag
      let ty = base[i3 + 1] + ny * frag
      let tz = base[i3 + 2] + nz * frag

      const hx = helix[i3]
      const hy = helix[i3 + 1]
      const hz = helix[i3 + 2]
      tx += (hx - tx) * reform
      ty += (hy - ty) * reform
      tz += (hz - tz) * reform

      const cx = current[i3] + (tx - current[i3]) * k
      const cy = current[i3 + 1] + (ty - current[i3 + 1]) * k
      const cz = current[i3 + 2] + (tz - current[i3 + 2]) * k
      current[i3] = cx
      current[i3 + 1] = cy
      current[i3 + 2] = cz

      arr[i3] = cx
      arr[i3 + 1] = cy
      arr[i3 + 2] = cz
    }
    attr.needsUpdate = true

    if (group.current) {
      group.current.rotation.y += dt * 0.16
      group.current.rotation.z =
        0.42 + 0.12 * Math.sin(performance.now() / 4000) - 0.12 * reform
    }
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry ref={geoRef}>
          <bufferAttribute
            ref={attrRef}
            attach="attributes-position"
            args={[current, 3]}
            count={COUNT}
          />
        </bufferGeometry>
        <pointsMaterial
          color={COLOR}
          size={0.02}
          transparent
          opacity={0.9}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export function MatrixEarth() {
  useScrollEarth()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <AdaptiveDpr pixelated />
        <EarthPoints />
      </Canvas>
    </div>
  )
}
