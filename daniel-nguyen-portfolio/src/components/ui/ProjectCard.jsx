import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const accentMap = {
  indigo: { ring: 'group-hover:shadow-glow', dot: 'bg-signal-indigo', text: 'text-signal-indigo' },
  cyan: { ring: 'group-hover:shadow-glow-cyan', dot: 'bg-signal-cyan', text: 'text-signal-cyan' },
  violet: { ring: 'group-hover:shadow-glow', dot: 'bg-signal-violet', text: 'text-signal-violet' },
  amber: { ring: 'group-hover:shadow-glow', dot: 'bg-signal-amber', text: 'text-signal-amber' },
}

export default function ProjectCard({ project }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const accent = accentMap[project.accent] || accentMap.indigo

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -8, y: px * 10 })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`group glass relative flex h-full flex-col justify-between rounded-2xl p-7 shadow-card transition-shadow duration-300 ${accent.ring}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
          <div className="flex gap-3 opacity-60 transition-opacity group-hover:opacity-100">
            <a href={project.links.code} aria-label={`${project.name} code`} className="text-ink-500 hover:text-ink-100">
              <Github size={16} />
            </a>
            <a href={project.links.live} aria-label={`${project.name} live link`} className="text-ink-500 hover:text-ink-100">
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold text-ink-100">{project.name}</h3>
        <p className={`mt-1 text-sm font-medium ${accent.text}`}>{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.metrics.map((m) => (
            <li key={m} className="flex items-center gap-2 text-xs text-ink-700">
              <span className="h-1 w-1 rounded-full bg-ink-700" />
              {m}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-ink-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.links.live}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-100 opacity-0 transition-opacity group-hover:opacity-100"
      >
        View Details <ArrowUpRight size={14} />
      </a>
    </motion.div>
  )
}
