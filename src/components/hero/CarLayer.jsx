import carImg from '../../assets/car.png'

const SPEED_LINES = [
  'h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-cyan-400/60 to-transparent',
  'h-[2px] w-3/4 origin-left rounded-full bg-gradient-to-r from-fuchsia-500/50 to-transparent',
  'h-[2px] w-1/2 origin-left rounded-full bg-gradient-to-r from-sky-400/40 to-transparent',
]

function RoadTrack() {
  return (
    <div className="car-track absolute bottom-[22%] left-0 right-0 z-[5] sm:bottom-[24%]">
      <div className="relative mx-auto h-px w-[92%] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {/* Speed lines stretch with scroll (scaleX = transform-only) */}
      <div className="mx-auto mt-3 flex w-[88%] flex-col gap-2 opacity-60">
        {SPEED_LINES.map((classes) => (
          <div key={classes} className={`speed-line ${classes}`} />
        ))}
      </div>
    </div>
  )
}

export default function CarLayer() {
  return (
    <>
      <RoadTrack />
      {/* Driven entirely by ScrollTrigger (x: -300 -> 120vw) */}
      <img
        src={carImg}
        alt="Sports car driving across the screen on scroll"
        className="car-image absolute bottom-[16%] left-0 z-10 w-[300px] will-change-transform sm:bottom-[18%] sm:w-[420px] md:w-[560px] lg:w-[620px]"
        style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.55))' }}
        draggable={false}
      />
    </>
  )
}
