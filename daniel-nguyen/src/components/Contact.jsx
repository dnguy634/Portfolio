import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight, Phone } from 'lucide-react'
import Section, { Reveal } from './ui/Section'
import GlassCard from './ui/GlassCard'
import { profile } from '../data/content'

const channels = [
  { label: 'email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'phone', value: profile.phone, href: `tel:+1${profile.phone.replace(/\D/g, '')}`, icon: Phone },
  { label: 'linkedin', value: '/in/daniel-nguyen-a495b720b', href: profile.linkedin, icon: Linkedin },
  { label: 'github', value: '/dnguy634', href: profile.github, icon: Github },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      fileLabel="contact.sh"
      lineNo="06"
      title={
        <>
          Let's build something worth <span className="text-amber">shipping</span>.
        </>
      }
      description="I'm looking for program management, product, and software internships — and I'm always up to talk products, ideas, or pickup basketball."
    >
      <Reveal>
        <GlassCard className="overflow-hidden" hoverLift={false}>
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="ml-2 text-xs text-ink-700">contact.sh</span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-ink-300">
                  <span className="text-amber">$</span> echo "Have a role in mind?"
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                  I'm quick to respond and always up for a conversation about
                  program management, product, or software opportunities.
                </p>
              </div>
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex flex-shrink-0 items-center gap-2 border border-amber/40 bg-amber/10 px-5 py-2.5 text-sm text-amber"
              >
                <Mail size={14} /> Email Me
              </motion.a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.label === 'email' || channel.label === 'phone' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-white/8 px-3.5 py-3 transition-colors hover:border-amber/35"
                >
                  <div className="flex items-center gap-2.5">
                    <channel.icon size={14} className="text-amber" />
                    <div>
                      <p className="text-[10px] text-ink-700">{channel.label}:</p>
                      <p className="text-xs text-ink-300">{channel.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={12}
                    className="text-ink-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                  />
                </a>
              ))}
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  )
}
