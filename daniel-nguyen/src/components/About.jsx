import Section, { Reveal } from './ui/Section'
import GlassCard from './ui/GlassCard'
import { stats } from '../data/content'

export default function About() {
  return (
    <Section
      id="about"
      fileLabel="about.jsx"
      lineNo="02"
      title="Two ways of thinking, one way of building"
      description="I'm a Computer Science + Business student at UC Riverside who builds where engineering and execution meet. I write the code, but I also scope the requirements, manage the timeline, and talk to the stakeholders who depend on the outcome."
    >
      <div className="grid grid-cols-1 gap-px border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <div className="h-full bg-base-900 p-5">
              <p className="text-lg font-semibold text-amber">{stat.value}</p>
              <p className="mt-2 text-xs text-ink-300">{stat.label}</p>
              <p className="mt-1 text-[11px] text-ink-700">{stat.hint}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <GlassCard className="p-6 sm:p-7" hoverLift={false}>
          <p className="text-balance text-sm leading-relaxed text-ink-300">
            <span className="text-ink-700">/** </span>
            My technical background means I can sit in a sprint review and actually
            understand the tradeoffs engineers are making. My business background means
            I can turn that understanding into a roadmap, a status report, or a pitch
            that a non-technical stakeholder will act on. I've used that combination
            on an aerospace program team, inside an early-stage startup, and across a
            handful of self-directed software projects — and I'm looking for an
            internship where I can keep doing both.
            <span className="text-ink-700"> */</span>
          </p>
        </GlassCard>
      </Reveal>
    </Section>
  )
}
