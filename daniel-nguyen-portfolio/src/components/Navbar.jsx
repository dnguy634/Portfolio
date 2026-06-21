import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass mx-4 shadow-card sm:mx-auto' : 'mx-4 sm:mx-auto'
        }`}
        style={{ paddingTop: scrolled ? '0.6rem' : '0.4rem', paddingBottom: scrolled ? '0.6rem' : '0.4rem' }}
      >
        <a href="#hero" className="flex items-center gap-2 font-display text-sm font-semibold text-ink-100">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-signal-indigo to-signal-cyan text-xs text-base-950">
            DN
          </span>
          Daniel Nguyen
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-300 transition-colors hover:text-ink-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ink-100 transition-colors hover:bg-white/10 md:block"
        >
          Let's talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-ink-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="glass flex flex-col gap-1 p-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-ink-300 transition-colors hover:bg-white/5 hover:text-ink-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
