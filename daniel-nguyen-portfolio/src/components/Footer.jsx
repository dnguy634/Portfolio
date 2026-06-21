import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-700 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, and Framer Motion.</p>
        <p className="font-mono">{profile.location}</p>
      </div>
    </footer>
  )
}
