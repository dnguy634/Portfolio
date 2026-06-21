import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Section, { Reveal } from './ui/Section'
import GlassCard from './ui/GlassCard'
import { experience } from '../data/content'
import { MapPin } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've built and coordinated"
      description="From aerospace program teams to early-stage startups, the work changes, the role doesn't: get a clear picture of the problem, then move it from ambiguous to shipped."
    >
      <div ref={ref} className="relative">
        <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 sm:left-[9px]" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-signal-cyan via-signal-indigo to-transparent sm:left-[9px]"
        />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={job.company} className="relative pl-8 sm:pl-10">
              <Reveal delay={i * 0.05}>
                <span className="absolute left-0 top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-base-900 ring-1 ring-white/15 sm:h-[20px] sm:w-[20px]">
                  <span className="h-2 w-2 rounded-full bg-signal-cyan shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
                </span>
              </Reveal>

              <Reveal delay={i * 0.05 + 0.05}>
                <GlassCard className="p-6 sm:p-7" glow={i % 2 === 0 ? 'indigo' : 'cyan'}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink-100">
                        {job.role}
                      </h3>
                      <p className="text-sm font-medium text-signal-cyan/90">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-ink-500">{job.period}</p>
                      <p className="mt-1 flex items-center justify-end gap-1 text-xs text-ink-700">
                        <MapPin size={12} /> {job.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-balance text-sm leading-relaxed text-ink-300">
                    {job.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-500">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-signal-indigo" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-ink-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
