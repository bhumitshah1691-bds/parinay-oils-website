'use client'
import { useEffect } from 'react'

type LenisLike = { raf: (time: number) => void; destroy: () => void }

/**
 * Home-only progressive enhancement. The page renders fully without it.
 * - Scroll reveals for content below the fold
 * - Parallax on [data-parallax] media
 * - Smooth scrolling (Lenis)
 * - Show/hide for the floating quote button
 * Motion features are skipped entirely for prefers-reduced-motion users.
 */
export default function HomeEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-home]')
    if (!root) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    const saveData = Boolean(conn?.saveData)

    let io: IntersectionObserver | undefined
    if (!reduce) {
      root.dataset.motion = 'on'
      // Clip reveals are watched through their parent: a fully clipped element never "intersects".
      const targets = new Map<Element, HTMLElement>()
      io = new IntersectionObserver(
        entries =>
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            const el = targets.get(entry.target)
            if (el) el.dataset.state = 'in'
            io?.unobserve(entry.target)
          }),
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      )
      // Only hide what the visitor has not seen yet, so nothing on screen flickers.
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.92) return
        const watch = el.dataset.reveal === 'clip' && el.parentElement ? el.parentElement : el
        el.dataset.state = 'pending'
        targets.set(watch, el)
        io?.observe(watch)
      })
    }

    const parallax = reduce ? [] : Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'))
    const cta = root.querySelector<HTMLElement>('[data-sticky-cta]')
    const hero = root.querySelector<HTMLElement>('[data-hero]')
    const end = root.querySelector<HTMLElement>('[data-cta-end]')

    let ticking = false
    const update = () => {
      ticking = false
      const vh = window.innerHeight
      parallax.forEach(el => {
        const box = el.parentElement?.getBoundingClientRect()
        if (!box || box.bottom < -100 || box.top > vh + 100) return
        const speed = parseFloat(el.dataset.parallax || '0.1')
        const offset = (box.top + box.height / 2 - vh / 2) * -speed
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      })
      if (cta && hero) {
        const pastHero = hero.getBoundingClientRect().bottom < vh * 0.3
        const beforeEnd = !end || end.getBoundingClientRect().top > vh * 0.85
        cta.dataset.visible = pastHero && beforeEnd ? 'true' : 'false'
      }
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    let lenis: LenisLike | undefined
    let rafId = 0
    let cancelled = false
    const html = document.documentElement
    if (!reduce && !saveData) {
      import('@studio-freight/lenis').then(({ default: Lenis }) => {
        if (cancelled) return
        // Lenis owns smooth scrolling here; the global CSS smooth-scroll would fight it.
        html.style.scrollBehavior = 'auto'
        const instance: LenisLike = new Lenis({ duration: 1.1, smoothWheel: true })
        lenis = instance
        const loop = (time: number) => {
          instance.raf(time)
          rafId = requestAnimationFrame(loop)
        }
        rafId = requestAnimationFrame(loop)
      })
    }

    return () => {
      cancelled = true
      io?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafId)
      lenis?.destroy()
      html.style.scrollBehavior = ''
      delete root.dataset.motion
    }
  }, [])

  return null
}
