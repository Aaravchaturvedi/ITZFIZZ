export const HERO_EYEBROW = 'Itzfizz Digital — Scroll Experience'

export const HERO_TITLE_LEAD = 'W E L C O M E'
export const HERO_TITLE_ACCENT = 'I T Z F I Z Z'

export const METRICS = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50M+', label: 'Users Reached' },
  { value: '120+', label: 'Projects Delivered' },
]

// ScrollTrigger wiring for the pinned drive. `end` controls how much
// scroll distance the drive consumes before the hero unpins.
export const DRIVE_SCROLL_TRIGGER = {
  trigger: '.hero-container',
  start: 'top top',
  end: '+=2000',
  scrub: 1,
  pin: true,
  anticipatePin: 1,
  invalidateOnRefresh: true,
}

// Horizontal sweep of the car: off-screen left -> off-screen right.
export const CAR_SWEEP = {
  fromX: -300,
  toX: '120vw',
}
