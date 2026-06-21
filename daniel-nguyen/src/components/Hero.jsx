import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/content'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const codeLines = [
  { n: 1, content: <span className="text-ink-700">// index.jsx</span> },
  { n: 2, content: <span className="text-ink-700">{'\u00A0'}</span> },
  {
    n: 3,
    content: (
      <span>
        <span className="text-amber">const</span> <span className="text-ink-100">student</span> = {'{'}
      </span>
    ),
  },
  {
    n: 4,
    content: (
      <span className="pl-4">
        name: <span className="text-amber">'{profile.name}'</span>,
      </span>
    ),
  },
  {
    n: 5,
    content: (
      <span className="pl-4">
        focus: <span className="text-amber">'CS + Business'</span>,
      </span>
    ),
  },
  {
    n: 6,
    content: (
      <span className="pl-4">
        interests: [<span className="text-amber">'Program Mgmt'</span>, <span className="text-amber">'Product'</span>, <span className="text-amber">'Software'</span>],
      </span>
    ),
  },
  {
    n: 7,
    content: (
      <span className="pl-4">
        status: <span className="text-amber">'open_to_internships'</span>,
      </span>
    ),
  },
  { n: 8, content: <span>{'}'}</span> },
]

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center px-6 pb-20 pt-28 sm:px-10 lg:pt-24">
      <motion.div initial="hidden" animate="visible" variants={container} className="mx-auto w-full max-w-3xl">
        <motion.div variants={item} className="mb-6 flex items-center gap-2 text-xs text-ink-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
          available_for_internships.flag = true
        </motion.div>

        <div className="panel rounded-sm">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="ml-2 text-xs text-ink-700">index.jsx</span>
          </div>
          <div className="px-5 py-6 font-mono text-sm leading-relaxed sm:text-[15px]">
            {codeLines.map((line, i) => (
              <motion.div key={line.n} variants={item} className="flex gap-4">
                <span className="w-5 select-none text-right text-ink-700">{line.n}</span>
                <span className="text-ink-300">{line.content}</span>
              </motion.div>
            ))}
            <motion.div variants={item} className="flex gap-4">
              <span className="w-5 select-none text-right text-ink-700">9</span>
              <span className="caret" />
            </motion.div>
          </div>
        </div>

        <motion.p variants={item} className="mt-8 max-w-xl text-balance text-sm leading-relaxed text-ink-500">
          {profile.subtitle}. I work at the intersection of technical execution and
          business thinking — turning ambiguous problems into shipped products and
          well-run programs.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <motion.a
            href="#projects"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 border border-amber/40 bg-amber/10 px-5 py-2.5 text-sm text-amber transition-colors hover:bg-amber/15"
          >
            View Projects
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.97 }}
            className="panel panel-hover inline-flex items-center gap-2 px-5 py-2.5 text-sm text-ink-100"
          >
            <Mail size={14} />
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
