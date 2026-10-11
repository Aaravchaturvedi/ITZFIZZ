import { gsap } from '../lib/gsap'
import { CAR_SWEEP, DRIVE_SCROLL_TRIGGER } from '../data/content'

/**
 * Initial page-load choreography (time-based, plays once on mount).
 * - Headline fades/slides up over 1.2s with power3.out.
 * - Metric cards stagger in slightly after the headline begins.
 */
export function createIntroTimeline() {
  const intro = gsap.timeline({
    defaults: { ease: 'power3.out' },
  })

  intro
    .fromTo(
      '.hero-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
    )
    .fromTo(
      '.metric-item',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      '-=0.6',
    )
    .fromTo(
      '.hero-sub, .scroll-hint, .car-track',
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.5',
    )

  return intro
}

/**
 * Scroll-driven drive (scrubbed — no autoplay).
 * - Pins the hero so the user scrolls *through* the animation.
 * - Transform-only targets (x / y / scale / scaleX): no layout reflows.
 * - ease "none" on scrubbed tweens prevents velocity jumps.
 */
export function createDriveTimeline() {
  const drive = gsap.timeline({
    scrollTrigger: { ...DRIVE_SCROLL_TRIGGER },
  })

  // The car: far left (off-screen) -> off-screen right.
  drive.fromTo(
    '.car-image',
    { x: CAR_SWEEP.fromX },
    { x: CAR_SWEEP.toX, ease: 'none', duration: 1 },
    0,
  )

  // Cinematic support moves, locked to the same scrub position.
  drive.to(
    '.hero-headline',
    { y: -90, scale: 0.94, opacity: 0.25, ease: 'none', duration: 1 },
    0,
  )
  drive.to(
    '.metrics-row',
    { y: -50, opacity: 0, ease: 'none', duration: 0.6 },
    0,
  )
  drive.fromTo(
    '.speed-line',
    { scaleX: 0 },
    { scaleX: 1, ease: 'none', duration: 1, stagger: 0.05 },
    0,
  )
  drive.fromTo(
    '.drive-progress',
    { scaleX: 0 },
    { scaleX: 1, ease: 'none', duration: 1 },
    0,
  )

  return drive
}
