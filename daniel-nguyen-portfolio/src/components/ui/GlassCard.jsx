import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  glow = 'indigo',
  hoverLift = true,
  ...props
}) {
  const glowMap = {
    indigo: 'hover:shadow-glow',
    cyan: 'hover:shadow-glow-cyan',
  }

  return (
    <motion.div
      whileHover={hoverLift ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`glass relative rounded-2xl shadow-card transition-shadow duration-300 ${
        glowMap[glow] || glowMap.indigo
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
