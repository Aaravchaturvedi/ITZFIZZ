export default function ScrollProgress() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-neutral-900">
      {/* scaleX is scrubbed 0 -> 1 by the drive timeline */}
      <div className="drive-progress h-full w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
    </div>
  )
}
