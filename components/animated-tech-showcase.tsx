"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

interface CodeBlock {
  id: number
  code: string
  x: number
  y: number
  delay: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

export function AnimatedTechShowcase() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const codeBlocks: CodeBlock[] = [
    { id: 1, code: "const dev = {}", x: -10, y: 10, delay: 0 },
    { id: 2, code: "function() {}", x: 85, y: 15, delay: 0.2 },
    { id: 3, code: "<Component />", x: -5, y: 70, delay: 0.4 },
    { id: 4, code: "npm install", x: 90, y: 75, delay: 0.6 },
    { id: 5, code: "git commit", x: 40, y: -5, delay: 0.8 },
    { id: 6, code: "async await", x: 45, y: 95, delay: 1.0 },
  ]

  useEffect(() => {
    setMounted(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 400
    canvas.height = 450

    const particles: Particle[] = []
    const particleCount = 50

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(0, 212, 255, 0.03)")
      gradient.addColorStop(0.5, "rgba(138, 43, 226, 0.03)")
      gradient.addColorStop(1, "rgba(255, 20, 147, 0.03)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        const alpha = 0.6 + Math.sin(frame * 0.02 + i) * 0.4
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Connect nearby particles
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) {
            const alpha = (1 - distance / 80) * 0.3
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Particle Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Main Content */}
      <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[380px] lg:w-[400px] lg:h-[450px] mx-auto">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            animation: "grid-move 20s linear infinite"
          }}></div>
        </div>

        {/* Floating Code Blocks */}
        {codeBlocks.map((block) => (
          <div
            key={block.id}
            className={`
              absolute px-3 py-1.5 text-xs font-mono
              bg-gradient-to-r from-primary/20 to-purple-500/20
              border border-primary/40 rounded-lg
              backdrop-blur-sm
              transition-all duration-700
              hover:scale-110 hover:border-primary/60
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{
              left: `${block.x}%`,
              top: `${block.y}%`,
              transitionDelay: `${block.delay}s`,
              animation: `float-random ${3 + block.id}s ease-in-out infinite`,
              animationDelay: `${block.delay}s`
            }}
          >
            <span className="text-primary/80">{block.code}</span>
          </div>
        ))}

        {/* Central Holographic Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[290px] md:w-[260px] md:h-[310px] lg:w-[280px] lg:h-[330px]">
          {/* Rotating Border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-40 animate-spin-slow"></div>
            <div className="absolute inset-[2px] bg-[#0a0f1a] rounded-2xl"></div>
          </div>

          {/* Glass Container */}
          <div className="absolute inset-[2px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent border border-primary/30">
            {/* Profile Image */}
            <div className="absolute inset-4 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 mix-blend-overlay z-10"></div>
              <Image
                src="/shyni.jpeg"
                alt="Shyni Atapattu"
                fill
                className="object-cover"
                priority
              />
              
              {/* Scan Lines */}
              <div className="absolute inset-0 z-20 opacity-30" style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.1) 2px, rgba(0, 212, 255, 0.1) 4px)",
                animation: "scan 8s linear infinite"
              }}></div>

              {/* Glitch Overlay */}
              <div className="absolute inset-0 z-20 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300" style={{
                animation: "glitch 3s infinite"
              }}></div>
            </div>

            {/* Corner Tech Details */}
            <div className="absolute top-2 left-2 text-[8px] md:text-[9px] font-mono text-primary/70 z-30">
              ID: SE_2026
            </div>
            <div className="absolute top-2 right-2 text-[8px] md:text-[9px] font-mono text-primary/70 z-30">
              ACTIVE
            </div>
            <div className="absolute bottom-2 left-2 flex gap-1 z-30">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>

        {/* Tech Stack Indicators */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="glass px-3 py-1 rounded-full border border-primary/30 backdrop-blur-xl">
            <span className="text-[10px] font-mono text-primary">React</span>
          </div>
          <div className="glass px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-xl">
            <span className="text-[10px] font-mono text-purple-400">Node</span>
          </div>
          <div className="glass px-3 py-1 rounded-full border border-pink-500/30 backdrop-blur-xl">
            <span className="text-[10px] font-mono text-pink-400">TS</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute -top-8 right-0 glass px-4 py-2 rounded-xl border-2 border-primary/40 shadow-2xl shadow-primary/30 backdrop-blur-xl animate-pulse-slow">
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="text-xs font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  )
}
