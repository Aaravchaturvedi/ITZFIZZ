export default function HeroBackdrop() {
  return (
    <>
      {/* Decorative tech grid backdrop */}
      <div
        className="tech-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      {/* Ambient glows (pure decoration) */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[480px] rounded-full bg-fuchsia-600/10 blur-[120px]"
        aria-hidden="true"
      />
    </>
  )
}
