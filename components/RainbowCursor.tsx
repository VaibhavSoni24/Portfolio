'use client'

import { useEffect, useRef } from 'react'

// Number of trail dots
const TRAIL_LENGTH = 18

export default function RainbowCursor() {
  const dots = useRef<HTMLDivElement[]>([])
  const mouse = useRef({ x: -200, y: -200 })
  const positions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -200, y: -200 }))
  )
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Hide default cursor globally
    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      // Lead dot snaps to mouse
      positions.current[0].x = mouse.current.x
      positions.current[0].y = mouse.current.y

      // Each subsequent dot follows the one before it (lerp)
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        positions.current[i].x += (positions.current[i - 1].x - positions.current[i].x) * 0.35
        positions.current[i].y += (positions.current[i - 1].y - positions.current[i].y) * 0.35
      }

      // Apply positions & scale
      dots.current.forEach((dot, i) => {
        if (!dot) return
        const { x, y } = positions.current[i]
        const scale = 1 - i / (TRAIL_LENGTH * 1.2) // shrinks towards tail
        dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`
        dot.style.opacity = String(1 - i / TRAIL_LENGTH)
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.style.cursor = ''
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => {
        // Hue shifts across the trail (rainbow spectrum)
        const hue = Math.round((i / TRAIL_LENGTH) * 360)
        const size = i === 0 ? 14 : Math.max(4, 12 - i * 0.5)

        return (
          <div
            key={i}
            ref={el => {
              if (el) dots.current[i] = el
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background:
                i === 0
                  ? `hsl(${hue}, 100%, 65%)`
                  : `hsl(${hue}, 100%, 60%)`,
              boxShadow:
                i === 0
                  ? `0 0 ${size * 2}px hsl(${hue}, 100%, 60%), 0 0 ${size * 4}px hsl(${hue}, 100%, 50%)`
                  : `0 0 ${size}px hsl(${hue}, 100%, 60%)`,
              pointerEvents: 'none',
              willChange: 'transform, opacity',
              transition: 'box-shadow 0.1s',
            }}
          />
        )
      })}
    </div>
  )
}
