import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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

export default function Section({ id, fileLabel, lineNo, title, description, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 ${className}`}>
      {(fileLabel || title) && (
        <div className="mb-12">
          {fileLabel && (
            <Reveal>
              <div className="flex items-center gap-3 text-xs text-ink-700">
                <span className="accent-text">{lineNo}</span>
                <span>{fileLabel}</span>
                <span className="h-px flex-1 bg-white/8" />
              </div>
            </Reveal>
          )}
          {title && (
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink-100 sm:text-3xl">
                <span className="text-ink-700">// </span>
                {title}
              </h2>
            </Reveal>
          )}
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-xl text-balance text-sm leading-relaxed text-ink-500">
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
