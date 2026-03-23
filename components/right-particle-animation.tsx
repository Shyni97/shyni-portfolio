"use client"

import { useEffect, useRef } from "react"

interface Circle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
  strokeWidth: number
  gradientOffset: number
  gradientSpeed: number
}

export function RightParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const circles: Circle[] = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient circles of different sizes
    const createCircles = () => {
      const sizes = [
        { radius: 280, count: 2, strokeWidth: 3 },    // Extra Large
        { radius: 200, count: 2, strokeWidth: 2.5 },  // Large
        { radius: 140, count: 2, strokeWidth: 2 }     // Medium
      ]

      sizes.forEach(({ radius, count, strokeWidth }) => {
        for (let i = 0; i < count; i++) {
          circles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: radius,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.4 + 0.5, // Increased: 0.5 to 0.9
            strokeWidth: strokeWidth,
            gradientOffset: Math.random() * Math.PI * 2,
            gradientSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1)
          })
        }
      })
    }

    createCircles()

    console.log(`Created ${circles.length} circles`)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circles.forEach((circle) => {
        // Update position
        circle.x += circle.vx
        circle.y += circle.vy

        // Wrap around boundaries
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius

        // Update gradient rotation
        circle.gradientOffset += circle.gradientSpeed

        // Create gradient for stroke
        const gradient = ctx.createLinearGradient(
          circle.x + Math.cos(circle.gradientOffset) * circle.radius,
          circle.y + Math.sin(circle.gradientOffset) * circle.radius,
          circle.x - Math.cos(circle.gradientOffset) * circle.radius,
          circle.y - Math.sin(circle.gradientOffset) * circle.radius
        )

        gradient.addColorStop(0, `rgba(0, 212, 255, ${circle.opacity})`)
        gradient.addColorStop(0.5, `rgba(100, 200, 255, ${circle.opacity * 0.8})`)
        gradient.addColorStop(1, `rgba(0, 212, 255, ${circle.opacity})`)

        // Draw circle outline
        ctx.save()
        ctx.strokeStyle = gradient
        ctx.lineWidth = circle.strokeWidth
        ctx.globalAlpha = circle.opacity
        
        // Enhanced glow effect
        ctx.shadowBlur = 20
        ctx.shadowColor = `rgba(0, 212, 255, ${circle.opacity * 0.8})`
        
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.stroke()
        
        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 right-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
