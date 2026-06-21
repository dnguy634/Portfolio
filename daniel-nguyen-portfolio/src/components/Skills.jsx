import Section, { Reveal } from './ui/Section'
import GlassCard from './ui/GlassCard'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="The toolkit"
      description="Technical fluency on one side, product and program execution on the other."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <GlassCard className="h-full p-6" hoverLift>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-cyan/80">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-300">
                    <span className="h-1 w-1 rounded-full bg-signal-indigo" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
