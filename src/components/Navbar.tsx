import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun, Download, Menu, X, Languages } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useI18n } from '../i18n'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { locale, data, lang, toggleLang } = useI18n()
  const navItems = locale.nav
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(
    () => window.location.hash.replace('#', '') || navItems[0].id
  )
  const activeSectionRef = useRef(activeSection)
  activeSectionRef.current = activeSection

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view, not just the
  // last clicked link. Runs on scroll/resize, rAF-throttled.
  useEffect(() => {
    let raf = 0
    const ids = navItems.map((l) => l.id)
    const updateSpy = () => {
      const offset = 128
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      if (activeSectionRef.current !== current) {
        activeSectionRef.current = current
        setActiveSection(current)
      }
    }
    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updateSpy)
    }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    updateSpy()
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(raf)
    }
  }, [navItems])

  useEffect(() => {
    const onHashChange = () =>
      setActiveSection(window.location.hash.replace('#', ''))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Native hash navigation relies on CSS `scroll-behavior: smooth`, but Chrome
  // cancels that smooth scroll whenever the mobile dropdown is still open /
  // animating out — the hash changes but the page never scrolls. So on mobile
  // we close the menu first, then scroll to the target via JS.
  const scrollToId = (id: string) => {
    const delay = mobileOpen ? 380 : 0
    setMobileOpen(false)
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, delay)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Scrolled background — kept on a pointer-events-none layer so the
          backdrop-blur never intercepts taps on iOS Safari. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
          scrolled
            ? 'bg-[var(--bg)]/80 shadow-sm backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      />

      <nav className="site-container relative z-10 flex items-center justify-between py-4">
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('top')
          }}
          className="flex touch-manipulation items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={data.logo}
            alt={`${data.name} logo`}
            className="h-9 w-9 object-contain"
            draggable={false}
          />
        </motion.a>

        {/* Center links */}
        <div className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
              >
                {active && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            onClick={toggleLang}
            aria-label={locale.ui.toggleLang}
            className="flex h-10 touch-manipulation items-center gap-1.5 rounded-full border border-[var(--muted)]/25 px-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-[#3B82F6]/50"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <Languages className="h-4 w-4" />
            {lang === 'en' ? 'ID' : 'EN'}
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            aria-label={locale.ui.toggleTheme}
            className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-[var(--muted)]/25 transition-colors hover:border-[#3B82F6]/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 180, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </motion.div>
          </motion.button>

          <motion.a
            href={data.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden touch-manipulation items-center gap-2 rounded-full bg-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/25 transition-colors hover:bg-[#2563EB] sm:flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download className="h-4 w-4" /> {locale.ui.resume}
          </motion.a>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={locale.ui.toggleMenu}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-[var(--muted)]/25 transition-colors hover:border-[#3B82F6]/50 md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile dropdown navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 overflow-hidden border-t border-[var(--muted)]/10 bg-[var(--bg)]/95 md:hidden"
          >
            <div className="site-container flex flex-col gap-1 py-4">
              {navItems.map((item, i) => {
                const active = activeSection === item.id
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId(item.id)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className={`flex touch-manipulation items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      active
                        ? 'border border-[#3B82F6]/40 bg-[#3B82F6]/10 text-[#3B82F6]'
                        : 'text-[var(--fg)] hover:bg-[var(--muted)]/5'
                    }`}
                  >
                    {item.label}
                    <span className="font-mono text-[10px] text-[var(--muted)]">
                      0{i + 1}
                    </span>
                  </motion.a>
                )
              })}
              <motion.a
                href={data.resume}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 flex touch-manipulation items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/25 sm:hidden"
              >
                <Download className="h-4 w-4" /> {locale.ui.resume}
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
