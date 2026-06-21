import Section, { Reveal } from './ui/Section'
import GlassCard from './ui/GlassCard'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <Section
      id="skills"
      fileLabel="skills.json"
      lineNo="05"
      title="The toolkit"
      description="Technical fluency on one side, product and program execution on the other."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <GlassCard className="h-full p-5">
              <p className="text-xs text-amber">"{group.title}":</p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-300">
                    <span className="text-ink-700">-</span>
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
