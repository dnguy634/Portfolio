import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/content'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const statusLines = [
  { label: 'role', value: 'Program Management · Product · Software' },
  { label: 'stack', value: 'React · Flask · Supabase · C++ · SQL' },
  { label: 'status', value: 'Open to Summer 2026 internships' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center px-6 pt-32 pb-20 sm:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-cyan/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-cyan" />
          </span>
          <span className="font-mono text-xs text-ink-300">Available for Summer 2026 internships</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-100 sm:text-6xl lg:text-7xl"
        >
          <span className="block">{profile.name}</span>
          <span className="gradient-text mt-2 block">{profile.role}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-500">
          {profile.subtitle}. I work at the intersection of technical execution and
          business thinking — turning ambiguous problems into shipped products and
          well-run programs.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-full bg-ink-100 px-6 py-3 text-sm font-semibold text-base-950 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-colors"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink-100 transition-colors hover:bg-white/10"
          >
            <Mail size={16} />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Signature element: live system-status readout */}
        <motion.div
          variants={item}
          className="glass mt-16 max-w-md rounded-2xl px-5 py-4 font-mono text-xs leading-relaxed text-ink-300 shadow-card"
        >
          <div className="mb-3 flex items-center gap-2 text-ink-700">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-ink-700">~/jayden-trieu</span>
          </div>
          {statusLines.map((line, i) => (
            <div key={line.label} className="flex gap-2">
              <span className="text-signal-cyan">{line.label}:</span>
              <span className="text-ink-300">{line.value}</span>
            </div>
          ))}
          <div className="mt-1 flex items-center gap-2">
            <span className="text-signal-indigo">$</span>
            <span className="h-3.5 w-1.5 animate-blink bg-ink-300" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
