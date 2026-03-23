"use client"

import { useEffect, useRef, useState } from "react"

interface Stat {
  value: string
  label: string
  icon: string
  color: string
}

export function AnimatedAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [counts, setCounts] = useState({
    gpa: 0,
    projects: 0,
    certs: 0,
    techs: 0
  })

  const stats: Stat[] = [
    { value: "3.42", label: "Cumulative GPA", icon: "🎓", color: "#00b8e6" },
    { value: "6+", label: "Projects Completed", icon: "🚀", color: "#a855f7" },
    { value: "3", label: "Certifications Earned", icon: "🏆", color: "#f59e0b" },
    { value: "10+", label: "Technologies Mastered", icon: "⚡", color: "#ec4899" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animated counter effect
  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        gpa: Math.min(3.42, parseFloat((3.42 * progress).toFixed(2))),
        projects: Math.min(6, Math.floor(6 * progress)),
        certs: Math.min(3, Math.floor(3 * progress)),
        techs: Math.min(10, Math.floor(10 * progress))
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts({ gpa: 3.42, projects: 6, certs: 3, techs: 10 })
      }
    }, increment)

    return () => clearInterval(timer)
  }, [inView])

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <h2 className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase relative">
              About Me
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0a1f3d] leading-tight max-w-5xl mx-auto">
            BSc (Hons) in Information Technology undergraduate at SLIIT
          </h3>

          <p className="text-lg md:text-xl text-[#2c4a6b] max-w-4xl mx-auto leading-relaxed">
            With a strong grasp of OOP, database design, and SDLC methodologies. Combining creativity 
            and problem-solving to deliver high-quality code and seamless user experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative group h-full bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}10, transparent)`
                  }}
                ></div>

                {/* Corner glow */}
                <div 
                  className="absolute top-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top left, ${stat.color}, transparent 70%)`
                  }}
                ></div>

                {/* Content */}
                <div className="relative flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div 
                    className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    style={{
                      filter: `drop-shadow(0 4px 20px ${stat.color}50)`
                    }}
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div 
                    className="text-6xl md:text-7xl font-black mb-4"
                    style={{
                      color: stat.color,
                      textShadow: `0 0 30px ${stat.color}30`
                    }}
                  >
                    {i === 0 ? counts.gpa.toFixed(2) :
                     i === 1 ? `${counts.projects}+` :
                     i === 2 ? counts.certs :
                     `${counts.techs}+`}
                  </div>

                  {/* Animated line */}
                  <div className="w-16 h-1 rounded-full mb-4 overflow-hidden bg-gray-100">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        background: stat.color,
                        width: inView ? '100%' : '0%',
                        transitionDelay: `${i * 150 + 300}ms`,
                        boxShadow: `0 0 10px ${stat.color}80`
                      }}
                    ></div>
                  </div>

                  {/* Label */}
                  <p className="text-sm font-bold text-[#4a5f7f] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
