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
      fileLabel="experience.log"
      lineNo="03"
      title="Where I've built and coordinated"
      description="From aerospace project proposals  to product testing to early-stage startups, the work changes — the role doesn't: understand the problem, then ship something worth building."
    >
      <div ref={ref} className="relative">
        <div className="absolute left-[5px] top-2 h-full w-px bg-white/10" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[5px] top-2 w-px bg-amber"
        />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <div key={job.company} className="relative pl-8">
              <Reveal delay={i * 0.05}>
                <span className="absolute left-0 top-1.5 h-[11px] w-[11px] border border-amber bg-base-900" />
              </Reveal>

              <Reveal delay={i * 0.05 + 0.05}>
                <GlassCard className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-ink-100">{job.role}</h3>
                      <p className="text-sm text-amber">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-ink-700">{job.period}</p>
                      <p className="mt-1 flex items-center justify-end gap-1 text-xs text-ink-700">
                        <MapPin size={11} /> {job.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-balance text-sm leading-relaxed text-ink-300">
                    {job.summary}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-500">
                        <span className="mt-1.5 text-amber">›</span>
                        {b.includes('Pikkit') ? (
                          <span>
                            {b.split('Pikkit')[0]}
                            <a
                              href="https://links.pikkit.com/user/dwinning"
                              target="_blank"
                              rel="noreferrer"
                              className="text-amber underline-offset-2 hover:underline"
                            >
                              Pikkit
                            </a>
                            {b.split('Pikkit')[1]}
                          </span>
                        ) : (
                          b
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="border border-white/10 px-2.5 py-1 text-[11px] text-ink-500">
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
