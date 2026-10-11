import { METRICS } from '../../data/content'

function MetricItem({ value, label }) {
  return (
    <div className="metric-item flex flex-col items-center">
      <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
        {value}
      </span>
      <span className="mt-2 text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400 sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export default function ImpactMetrics() {
  return (
    <div className="metrics-row mt-10 flex flex-col items-center gap-6 sm:mt-12 sm:flex-row sm:gap-10 md:gap-14">
      {METRICS.map((metric) => (
        <MetricItem
          key={metric.label}
          value={metric.value}
          label={metric.label}
        />
      ))}
    </div>
  )
}
