export default function ScrollHint() {
  return (
    <div className="scroll-hint absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
      <div className="flex h-10 w-6 justify-center rounded-full border border-neutral-700 pt-2">
        <div className="scroll-dot h-2 w-2 rounded-full bg-cyan-300" />
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
        Scroll to drive
      </span>
      <svg
        className="scroll-chevron h-4 w-4 text-neutral-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  )
}
