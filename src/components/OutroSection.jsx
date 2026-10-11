import { scrollToTop } from '../lib/scroll'

function CodeChip({ children }) {
  return (
    <code className="rounded bg-neutral-900 px-1.5 py-0.5 text-cyan-300">
      {children}
    </code>
  )
}

export default function OutroSection() {
  const handleReplay = (event) => {
    event.preventDefault()
    scrollToTop()
  }

  return (
    <section className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center bg-neutral-950 px-6 py-24 text-center">
      <h2 className="text-2xl font-bold uppercase tracking-[0.3em] sm:text-3xl">
        You made it past the drive
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
        The hero above is pinned with GSAP ScrollTrigger and scrubbed 1:1 to
        your scroll position. The car travels from <CodeChip>-300px</CodeChip>{' '}
        to <CodeChip>120vw</CodeChip> with{' '}
        <CodeChip>ease: &quot;none&quot;</CodeChip> and{' '}
        <CodeChip>scrub: 1</CodeChip> — no scroll listeners, transforms only.
      </p>
      <a
        href="#top"
        onClick={handleReplay}
        className="mt-8 rounded-full border border-neutral-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300 transition hover:border-cyan-400 hover:text-cyan-300"
      >
        Replay the drive
      </a>
      <footer className="mt-16 text-[11px] uppercase tracking-[0.3em] text-neutral-600">
        Itzfizz Digital &mdash; Internship Assignment
      </footer>
    </section>
  )
}
