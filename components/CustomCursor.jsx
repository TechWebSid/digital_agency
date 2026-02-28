"use client"

import React, { useEffect, useRef } from "react"

export default function MinimalistRainbowCursor() {
  const cursorRefs = useRef([])
  const mouse = useRef({ x: 0, y: 0 })
  const circles = useRef([])

  // Configuration
  const amount = 12 // Fewer circles for a cleaner, minimalist look
  const colors = [
    "#818cf8", "#a78bfa", "#c084fc", "#e879f9", 
    "#f472b6", "#fb7185", "#38bdf8", "#818cf8"
  ]

  useEffect(() => {
    // Initialize circle positions and setup refs
    circles.current = Array.from({ length: amount }, () => ({
      x: 0,
      y: 0,
    }))

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const animate = () => {
      let { x, y } = mouse.current

      circles.current.forEach((circle, index) => {
        const ref = cursorRefs.current[index]
        if (!ref) return

        // Smoothly follow the circle in front (the "Minimalist Smooth" magic)
        circle.x += (x - circle.x) * 0.25
        circle.y += (y - circle.y) * 0.25

        ref.style.transform = `translate(${circle.x}px, ${circle.y}px)`
        
        // Update x and y for the next circle in the chain
        x = circle.x
        y = circle.y
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {Array.from({ length: amount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (cursorRefs.current[i] = el)}
          className="fixed top-0 left-0 rounded-full"
          style={{
            // Sizes get smaller for a sleek tapered tail
            width: `${24 - i * 1.5}px`,
            height: `${24 - i * 1.5}px`,
            backgroundColor: colors[i % colors.length],
            opacity: (amount - i) / amount * 0.6, // Fades out at the end
            filter: "blur(4px)",
            marginLeft: "-12px",
            marginTop: "-12px",
            transition: "opacity 0.3s ease",
            mixBlendMode: "screen"
          }}
        />
      ))}
    </div>
  )
}