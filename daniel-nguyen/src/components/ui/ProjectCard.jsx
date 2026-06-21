import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -4, y: px * 5 })
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
      className="group panel panel-hover flex h-full flex-col justify-between rounded-sm"
    >
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#3a3a3a]" />
        <span className="h-2 w-2 rounded-full bg-[#3a3a3a]" />
        <span className="h-2 w-2 rounded-full bg-[#3a3a3a]" />
        <span className="ml-2 text-xs text-ink-700">
          {String(index + 1).padStart(2, '0')}_{project.name.toLowerCase().replace(/\s+/g, '-')}.tsx
        </span>
        <div className="ml-auto flex gap-3 opacity-50 transition-opacity group-hover:opacity-100">
          <a href={project.links.code} aria-label={`${project.name} code`} className="text-ink-500 hover:text-amber">
            <Github size={14} />
          </a>
          <a href={project.links.live} aria-label={`${project.name} live link`} className="text-ink-500 hover:text-amber">
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="flex-1 px-5 py-5">
        <h3 className="text-lg font-semibold text-ink-100">{project.name}</h3>
        <p className="mt-1 text-sm text-amber">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.metrics.map((m) => (
            <li key={m} className="flex items-center gap-2 text-xs text-ink-700">
              <span className="text-amber">›</span>
              {m}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-white/8 px-5 py-4">
        {project.tags.map((tag) => (
          <span key={tag} className="border border-white/10 px-2.5 py-1 text-[11px] text-ink-500">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
