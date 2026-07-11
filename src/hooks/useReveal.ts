import { useEffect, useRef, type DependencyList, type RefObject } from 'react'

/**
 * Fade-in for `.reveal` elements after route changes.
 */
export function useReveal(deps: DependencyList = []): RefObject<HTMLDivElement | null> {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const showAll = () => {
      root.querySelectorAll('.reveal').forEach((el) => el.classList.add('show'))
    }

    // Wait for layout scroll-to-top + paint, then reveal everything on the page.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(showAll)
    })
    const t = window.setTimeout(showAll, 50)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return rootRef
}
