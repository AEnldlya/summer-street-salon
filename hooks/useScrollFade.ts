import { useEffect, useRef, useState } from 'react'

export function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState<'up' | 'down'>('down')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const currentScrollY = window.scrollY
      const wasScrollingDown = currentScrollY > lastScrollY.current
      
      setDirection(wasScrollingDown ? 'down' : 'up')
      lastScrollY.current = currentScrollY

      const rect = ref.current.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0
      
      setIsVisible(isInView)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { ref, isVisible, direction }
}
