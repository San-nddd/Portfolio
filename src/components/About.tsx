import { motion } from 'framer-motion'
import { personalInfo, traits } from '../data'
import { staggerContainer, staggerItem, viewport } from '../lib/motion'
import { Journey } from './Journey'

export function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="site-container">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-3xl"
        >
          <motion.p variants={staggerItem} className="font-mono text-xs uppercase tracking-[0.3em] text-[#6C63FF]">
            About Me
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl"
          >
            A bit about who I am
          </motion.h2>
        </motion.div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <motion.div
            variants={staggerContainer(0.05, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {personalInfo.bio.split(/(?<=\.)\s/).map((sentence, i) => {
              const isKey = /intersection|intention|love to use/.test(sentence)
              return (
                <motion.p
                  key={i}
                  variants={staggerItem}
                  className="mb-5 text-lg leading-relaxed text-[var(--muted)]"
                >
                  {isKey ? (
                    <>
                      {sentence.split(' ').map((word, j) => (
                        <motion.span
                          key={j}
                          className="inline-block bg-gradient-to-r from-[#6C63FF] to-[#8B84FF] bg-[length:0%_40%] bg-left-bottom bg-no-repeat px-0.5 text-[var(--fg)]"
                          whileInView={{ backgroundSize: '100% 40%' }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.02, duration: 0.6 }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </>
                  ) : (
                    <>{sentence}</>
                  )}
                </motion.p>
              )
            })}
          </motion.div>

          {/* Trait badges with physics spring */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.05, 0.3)}
          >
            <motion.p
              variants={staggerItem}
              className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]"
            >
              — Traits I bring to every project
            </motion.p>
            <div className="flex flex-wrap items-start gap-4">
              {traits.map((trait) => (
                <motion.span
                  key={trait.label}
                  variants={staggerItem}
                  drag
                  dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
                  dragElastic={0.6}
                  dragSnapToOrigin
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileDrag={{ scale: 1.14, zIndex: 30 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="cursor-grab select-none rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 px-5 py-2.5 font-medium text-[var(--fg)] transition-colors hover:border-[#6C63FF] hover:bg-[#6C63FF]/20 active:cursor-grabbing"
                >
                  {trait.label}
                </motion.span>
              ))}
            </div>
            <motion.p
              variants={staggerItem}
              className="mt-6 font-mono text-xs uppercase tracking-widest text-[var(--muted)]"
            >
              ↕ Try dragging the badges around
            </motion.p>
          </motion.div>
        </div>

        <Journey />
      </div>
    </section>
  )
}
