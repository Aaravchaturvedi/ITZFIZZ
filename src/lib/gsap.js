import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Single registration point — importing this module guarantees the
// plugin is registered exactly once for the whole app.
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
