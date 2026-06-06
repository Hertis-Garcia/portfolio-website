import { useRef, useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Adds the 'visible' class once the element enters the viewport,
 * which triggers the reveal CSS transition defined in global.css.
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
