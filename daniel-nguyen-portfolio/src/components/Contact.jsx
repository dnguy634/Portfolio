import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight, Phone } from 'lucide-react'
import Section, { Reveal } from './ui/Section'
import GlassCard from './ui/GlassCard'
import { profile } from '../data/content'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:+1${profile.phone.replace(/\D/g, '')}`, icon: Phone },
  { label: 'LinkedIn', value: '/in/daniel-nguyen-a495b720b', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', value: '/dnguy634', href: profile.github, icon: Github },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's build something"
      description="Open to Program Management, Product Management, and software internships — and always happy to talk shop about products, systems, or aerospace projects."
    >
      <Reveal>
        <GlassCard className="overflow-hidden p-8 sm:p-10" hoverLift={false}>
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink-100">
                Have a role in mind?
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                I'm quick to respond and always up for a conversation about
                program management, product, or software opportunities.
              </p>
            </div>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-ink-100 px-6 py-3 text-sm font-semibold text-base-950"
            >
              <Mail size={16} /> Email Me
            </motion.a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.label === 'Email' ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-3">
                  <channel.icon size={16} className="text-signal-cyan" />
                  <div>
                    <p className="text-xs text-ink-700">{channel.label}</p>
                    <p className="text-sm text-ink-300">{channel.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-ink-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-300"
                />
              </a>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  )
}
