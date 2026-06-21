
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-4xl px-6 py-10 sm:px-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-ink-700 sm:flex-row">
        <p>// {new Date().getFullYear()} Built and Designed by Daniel Nguyen.</p>
        <p>Anaheim, CA</p>
      </div>
    </footer>
  )
}