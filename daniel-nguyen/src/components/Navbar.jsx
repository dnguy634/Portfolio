import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileCode2, Folder, ChevronRight } from 'lucide-react'

const files = [
  { href: '#hero', label: 'index.jsx', depth: 0 },
  { href: '#about', label: 'about.jsx', depth: 0 },
  { href: '#experience', label: 'experience.log', depth: 0 },
  { href: '#projects', label: 'projects/', depth: 0, isFolder: true },
  { href: '#skills', label: 'skills.json', depth: 0 },
  { href: '#contact', label: 'contact.sh', depth: 0 },
]

export default function Navbar() {
  const [active, setActive] = useState('#hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = files.map((f) => document.querySelector(f.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Desktop file-tree sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-white/8 bg-base-950 lg:flex">
        <div className="flex items-center gap-2 border-b border-white/8 px-5 py-5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="text-xs text-ink-300">~/daniel-nguyen</span>
        </div>

        <nav className="flex-1 px-3 py-4">
          <div className="mb-2 flex items-center gap-1.5 px-2 text-xs text-ink-700">
            <Folder size={13} />
            <span>portfolio</span>
          </div>
          {files.map((file) => {
            const isActive = active === file.href
            return (
              <a
                key={file.href}
                href={file.href}
                className={`group flex items-center gap-2 rounded-sm px-2 py-1.5 pl-6 text-[13px] transition-colors ${
                  isActive ? 'bg-amber/10 text-amber' : 'text-ink-300 hover:bg-white/5 hover:text-ink-100'
                }`}
              >
                {file.isFolder ? (
                  <ChevronRight size={12} className={isActive ? 'text-amber' : 'text-ink-700'} />
                ) : (
                  <FileCode2 size={12} className={isActive ? 'text-amber' : 'text-ink-700'} />
                )}
                {file.label}
                {isActive && <span className="ml-auto h-1 w-1 rounded-full bg-amber" />}
              </a>
            )
          })}
        </nav>

        <div className="border-t border-white/8 px-5 py-4 text-[11px] text-ink-700">
          <p>node v22.17.0</p>
          <p className="mt-1">build: passing<span className="caret" /></p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/8 bg-base-950/95 px-5 py-4 lg:hidden">
        <a href="#hero" className="flex items-center gap-2 text-sm text-ink-100">
          <span className="h-2 w-2 rounded-full bg-amber" />
          ~/daniel-nguyen
        </a>
        <button onClick={() => setOpen((v) => !v)} className="text-ink-100" aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[57px] z-50 overflow-hidden border-b border-white/8 bg-base-950 lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-3">
              {files.map((file) => (
                <a
                  key={file.href}
                  href={file.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-sm px-3 py-2.5 text-sm text-ink-300 hover:bg-white/5 hover:text-amber"
                >
                  {file.isFolder ? <ChevronRight size={13} /> : <FileCode2 size={13} />}
                  {file.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
