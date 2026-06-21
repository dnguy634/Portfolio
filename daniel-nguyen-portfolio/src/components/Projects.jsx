import Section, { Reveal } from './ui/Section'
import ProjectCard from './ui/ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects worth a closer look"
      description="A mix of product builds and systems-level coursework — some shipped for real users, some built to understand how things work under the hood."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
