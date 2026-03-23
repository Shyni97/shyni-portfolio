'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Code, Database, Zap } from 'lucide-react'

const certifications = [
  {
    title: "Python for Beginners",
    org: "University Of Moratuwa",
    date: "Dec 2025",
    icon: Code,
    image: "/certificates/python-cert.png" 
  },
  {
    title: "MongoDB Skill - CRUD Operations",
    org: "MongoDB",
    date: "Dec 2025",
    icon: Database,
    image: "/certificates/mongodb-cert.png" 
  },
  {
    title: "Front-End Web Development",
    org: "University Of Moratuwa",
    date: "Jan 2026",
    icon: Zap,
    image: "/certificates/frontend-cert.png" 
  }
]

export default function CertificationsSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
            Certifications & Achievements
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Continuous learning and professional development
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flip-card h-[320px] cursor-pointer perspective-1000"
              onClick={() => toggleFlip(i)}
            >
              <div
                className={`flip-card-inner relative w-full h-full transition-transform duration-700 ${
                  flippedCards.includes(i) ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div
                  className="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#242f3f] border border-primary/20 hover:border-primary/40 transition-all"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <cert.icon className="h-16 w-16 text-primary mb-6" />
                      <h4 className="text-2xl font-bold mb-3 text-white">{cert.title}</h4>
                      <p className="text-gray-400 mb-2 text-lg">{cert.org}</p>
                      <p className="text-sm text-primary font-semibold">{cert.date}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Click to view certificate</p>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="flip-card-back absolute w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#242f3f] border border-primary/40"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="relative w-full h-full p-4">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Click to flip back</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
