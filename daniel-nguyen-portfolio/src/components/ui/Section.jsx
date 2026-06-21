import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ ...variants.visible.transition, delay }}
    >
      {children}
    </MotionTag>
  )
}

export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-8 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-14 max-w-2xl">
          {eyebrow && (
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-cyan/80">
                {eyebrow}
              </span>
            </Reveal>
          )}
          {title && (
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
                {title}
              </h2>
            </Reveal>
          )}
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-4 text-balance text-base leading-relaxed text-ink-500">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
