import { useRef } from 'react'
import { useHeroAnimations } from '../../hooks/useHeroAnimations'
import HeroBackdrop from './HeroBackdrop'
import HeroHeadline from './HeroHeadline'
import ImpactMetrics from './ImpactMetrics'
import CarLayer from './CarLayer'
import ScrollHint from './ScrollHint'
import ScrollProgress from './ScrollProgress'

/**
 * Pinned full-viewport hero. Owns the GSAP scope: `scopeRef` wraps
 * `.hero-container` so the pin trigger resolves inside it.
 */
export default function HeroSection() {
  const scopeRef = useRef(null)
  useHeroAnimations(scopeRef)

  return (
    <div ref={scopeRef}>
      <section className="hero-container relative h-[100vh] overflow-hidden bg-neutral-950">
        <HeroBackdrop />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <HeroHeadline />
          <ImpactMetrics />
        </div>

        <CarLayer />
        <ScrollHint />
        <ScrollProgress />
      </section>
    </div>
  )
}
