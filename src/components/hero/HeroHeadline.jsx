import {
  HERO_EYEBROW,
  HERO_TITLE_ACCENT,
  HERO_TITLE_LEAD,
} from '../../data/content'

export default function HeroHeadline() {
  return (
    <>
      <p className="hero-sub mb-5 text-[11px] font-semibold uppercase tracking-[0.4em] text-cyan-300/80 sm:text-xs">
        {HERO_EYEBROW}
      </p>

      <h1 className="hero-headline text-4xl font-extrabold uppercase leading-tight tracking-widest sm:text-5xl md:text-6xl lg:text-7xl">
        {HERO_TITLE_LEAD}{' '}
        <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
          {HERO_TITLE_ACCENT}
        </span>
      </h1>
    </>
  )
}
