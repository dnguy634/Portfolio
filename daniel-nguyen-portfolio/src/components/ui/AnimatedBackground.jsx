import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-900">
      {/* base grid */}
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      {/* top radial glow */}
      <div className="absolute inset-0 bg-radial-fade" />

      {/* floating blobs */}
      <motion.div
        className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-signal-indigo/20 blur-[110px]"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[40%] h-[380px] w-[380px] rounded-full bg-signal-cyan/15 blur-[120px]"
        animate={{ y: [0, 40, 0], x: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[20%] bottom-[-10%] h-[360px] w-[360px] rounded-full bg-signal-violet/15 blur-[120px]"
        animate={{ y: [0, -25, 0], x: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* noise overlay for texture */}
      <div className="absolute inset-0 noise" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-900" />
    </div>
  )
}
