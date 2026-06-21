import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hoverLift = true, ...props }) {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -3 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`panel panel-hover rounded-sm transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
