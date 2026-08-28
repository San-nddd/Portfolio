import { lazy, Suspense, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Preloader } from './components/Preloader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkGallery } from './components/WorkGallery'
import { Capabilities } from './components/Capabilities'
import { About } from './components/About'
import { Passion } from './components/Passion'
import { Contact } from './components/Contact'
import { CoffeeWidget } from './components/CoffeeWidget'
import { Footer } from './components/Footer'

// 3D Matrix Earth backdrop — heavy (~1MB three.js) so it is lazy-loaded after
// first paint and pinned BEHIND all content (z-0, pointer-events-none).
const MatrixEarth = lazy(() =>
  import('./three/MatrixEarth').then((m) => ({ default: m.MatrixEarth })),
)

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="theme-transition min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* 3D Matrix Earth — fixed backdrop, below ALL content (z-0) */}
      <Suspense fallback={null}>
        <MatrixEarth />
      </Suspense>

      <AnimatePresence>{loading && <Preloader onComplete={() => setLoading(false)} />}</AnimatePresence>

      <Navbar />
      <main className="relative z-10">
        <Hero start={!loading} />
        <WorkGallery />
        <Capabilities />
        <About />
        <Passion />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <CoffeeWidget />
    </div>
  )
}
