import { useState } from 'react'
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

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="theme-transition min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <AnimatePresence>{loading && <Preloader onComplete={() => setLoading(false)} />}</AnimatePresence>

      <Navbar />
      <main>
        <Hero start={!loading} />
        <WorkGallery />
        <Capabilities />
        <About />
        <Passion />
        <Contact />
      </main>
      <Footer />
      <CoffeeWidget />
    </div>
  )
}
