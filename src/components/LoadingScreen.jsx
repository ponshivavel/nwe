import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute h-24 w-24 rounded-full border-2 border-brand-500/30 border-t-brand-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute h-16 w-16 rounded-full border-2 border-accent-500/30 border-b-accent-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
        <motion.span
          className="font-display text-2xl font-bold heading-gradient"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          PONSHIVAVAEL
        </motion.span>
      </div>
      <motion.p
        className="mt-8 font-mono text-sm text-[var(--text-soft)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading portfolio...
      </motion.p>
    </motion.div>
  )
}
