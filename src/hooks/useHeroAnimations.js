import { useGSAP } from '@gsap/react'
import {
  createDriveTimeline,
  createIntroTimeline,
} from '../animations/heroAnimations'

/**
 * Owns the GSAP React lifecycle for the hero.
 * Must be called with a scope ref that *contains* `.hero-container`
 * (the pin trigger resolves inside this scope).
 * Timeline + ScrollTrigger cleanup is handled automatically by useGSAP.
 */
export function useHeroAnimations(scopeRef) {
  useGSAP(
    () => {
      createIntroTimeline()
      createDriveTimeline()
    },
    { scope: scopeRef },
  )
}
