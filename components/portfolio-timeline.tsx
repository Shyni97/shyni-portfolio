'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

interface TimelineItem {
  id: number
  period: string
  title: string
  description: string
  side: 'left' | 'right'
  category: 'education' | 'project' | 'skill' | 'achievement' | 'entrepreneurship'
  tags?: string[]
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    period: '2005-2022',
    title: 'OKI International School',
    description: 'Cambridge O/L (English Medium- 1B, 3C & 1D) - 2019. Edexcel A/L (English Medium- 1B, 2C) - 2022.',
    side: 'right',
    category: 'education',
    tags: ['Cambridge O/L', 'Edexcel A/L'],
  },
  {
    id: 3,
    period: 'Oct 2023-Present',
    title: 'BSc(Hons) Information Technology',
    description: 'SLIIT University - Specializing in Information Technology. Cumulative GPA: 2.65.',
    side: 'left',
    category: 'education',
    tags: ['IT', 'SLIIT', 'Computer Science'],
  },
  {
    id: 4,
    period: 'Sep 2024-Apr 2025',
    title: 'Junior Developer - JALASHOKUDO',
    description: 'Developed and maintained web applications using JavaScript and PHP frameworks. Designed and tested the chef\'s profile page for mobile responsiveness.',
    side: 'right',
    category: 'achievement',
    tags: ['JavaScript', 'PHP', 'Agile', 'Web Development'],
  },
  {
    id: 5,
    period: 'Aug 2025-Present',
    title: 'IGV B2B Team Member',
    description: 'Supporting partner coordination and stakeholder communication. Collaborated with cross-functional teams, strengthening teamwork and leadership skills.',
    side: 'left',
    category: 'achievement',
    tags: ['Leadership', 'Team Collaboration', 'Communication'],
  },
  {
    id: 6,
    period: 'Jan-Feb 2026',
    title: 'Co-Facilitator - Summer Induction 26.27',
    description: 'Assisted in planning and conducting induction sessions, developing strong communication and time management abilities in a team-driven environment.',
    side: 'right',
    category: 'achievement',
    tags: ['Leadership', 'Planning', 'Training'],
  },
  {
    id: 7,
    period: 'Jan 2026-Present',
    title: 'Software Engineer Intern - Gills International',
    description: 'Designed UI layouts and prototypes using Figma based on project requirements. Developed website features from scratch using modern web technologies.',
    side: 'left',
    category: 'achievement',
    tags: ['Figma', 'UI/UX', 'Modern Web Tech'],
  },
  {
    id: 8,
    period: 'Jan 2026-Present',
    title: 'Co-Founder - InfiCode Solutions',
    description: 'Designed and developed complete web solutions from scratch. Successfully completed and delivered first client project, coordinating tasks and managing milestones.',
    side: 'right',
    category: 'entrepreneurship',
    tags: ['Full-Stack', 'Figma', 'Project Management', 'Business'],
  },
]

function getCategoryColor(category: TimelineItem['category']) {
  switch (category) {
    case 'education':
      return { bg: 'rgba(0, 184, 230, 0.1)', border: 'rgba(0, 184, 230, 0.3)', text: '#00b8e6' }
    case 'project':
      return { bg: 'rgba(255, 102, 153, 0.1)', border: 'rgba(255, 102, 153, 0.3)', text: '#ff6699' }
    case 'skill':
      return { bg: 'rgba(153, 102, 255, 0.1)', border: 'rgba(153, 102, 255, 0.3)', text: '#9966ff' }
    case 'achievement':
      return { bg: 'rgba(102, 255, 153, 0.1)', border: 'rgba(102, 255, 153, 0.3)', text: '#66ff99' }
    case 'entrepreneurship':
      return { bg: 'rgba(255, 215, 0, 0.1)', border: 'rgba(255, 215, 0, 0.3)', text: '#FFD700' }
  }
}

function AnimatedSVGPath() {
  const svgRef = useRef<SVGSVGElement>(null)
  const { scrollYProgress } = useScroll({
    target: svgRef as any,
    offset: ['start center', 'end center'],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <svg
      ref={svgRef}
      className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 overflow-visible"
      viewBox="0 0 2 2000"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 1 0 Q 1 500 1 1000 T 1 2000"
        fill="none"
        stroke="url(#neon-gradient)"
        strokeWidth="2"
        style={{
          pathLength,
          strokeLinecap: 'round',
        }}
      />
      <defs>
        <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00b8e6" />
          <stop offset="25%" stopColor="#0099ff" />
          <stop offset="50%" stopColor="#9966ff" />
          <stop offset="75%" stopColor="#ff6699" />
          <stop offset="100%" stopColor="#66ff99" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const colors = getCategoryColor(item.category)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categoryLabels = {
    education: '< Education />',
    project: '{ Project }',
    skill: '[ Skill ]',
    achievement: '★ Achievement',
    entrepreneurship: '⚡ Entrepreneurship',
  }

  return (
    <motion.div
      ref={cardRef}
      className={`mb-16 flex w-full md:mb-32 ${
        item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-8`}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Card */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{
          opacity: 0,
          x: item.side === 'left' ? -50 : 50,
        }}
        animate={
          isVisible
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: item.side === 'left' ? -50 : 50,
              }
        }
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
      >
        <div className="tech-card tech-card-hover group rounded-xl p-6 sm:p-8">
          {/* Category Badge */}
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: colors.bg,
              borderColor: colors.border,
              borderWidth: '1px',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: colors.text }}
            >
              {categoryLabels[item.category]}
            </span>
          </motion.div>

          {/* Period Label */}
          <span className="text-sm font-mono text-slate-500">{item.period}</span>

          {/* Title */}
          <h3 className="mb-4 mt-2 text-xl font-bold sm:text-2xl">
            <span className="neon-accent">{item.title}</span>
          </h3>

          {/* Description */}
          <p className="mb-6 leading-relaxed text-slate-400">{item.description}</p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <motion.div
                  key={tag}
                  className="code-block rounded px-3 py-1 text-xs font-mono"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.3 }}
                >
                  #{tag}
                </motion.div>
              ))}
            </div>
          )}

          {/* Accent Line */}
          <motion.div
            className="h-0.5 rounded-full"
            style={{ background: colors.text }}
            initial={{ width: 0 }}
            animate={isVisible ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Timeline Dot */}
      <motion.div
        className="relative hidden w-1/2 items-center justify-center md:flex"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          delay: 0.2,
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute h-8 w-8 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.text}20 0%, transparent 70%)`,
          }}
          animate={isVisible ? { scale: [1, 1.5, 1] } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.3,
          }}
        />

        {/* Ping effect */}
        <motion.div
          className="absolute h-6 w-6 rounded-full"
          style={{
            background: colors.text,
            opacity: 0.3,
          }}
          initial={{ scale: 1, opacity: 0.3 }}
          animate={isVisible ? { scale: [1, 2.5], opacity: [0.3, 0] } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.5,
          }}
        />

        {/* Main dot */}
        <motion.div
          className="relative h-5 w-5 rounded-full border-3 border-background"
          style={{
            background: colors.text,
            boxShadow: `0 0 20px ${colors.text}60, inset 0 0 10px ${colors.text}40`,
          }}
          animate={isVisible ? { scale: [1, 1.15, 1] } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export function PortfolioTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 90%'],
  })

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-12 sm:py-20 sm:px-6 lg:px-8"
    >
      {/* Animated background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl"
          style={{
            background: 'rgba(0, 212, 255, 0.08)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 h-80 w-80 rounded-full blur-3xl"
          style={{
            background: 'rgba(153, 102, 255, 0.08)',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              dev.timeline
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="block">My Journey</span>
            <span className="neon-accent">From Student to Developer</span>
          </h1>

          {/* More milestones message */}
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          <AnimatedSVGPath />

          {/* Timeline Items */}
          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* More Milestones Badge */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-6 py-3">
              <span className="text-sm font-medium text-slate-300">
                More milestones coming soon...
              </span>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 p-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-slate-400">BSc(Hons) IT Student | Software Engineer Intern | Co-Founder at InfiCode Solutions</p>
          <p className="font-mono text-sm text-cyan-400">
            {'> Open to opportunities and collaborations'}
          </p>
        </motion.div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 hidden h-32 w-1 rounded-full bg-slate-800/50 lg:block"
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
        }}
      >
        <motion.div
          className="h-full w-full rounded-full bg-gradient-to-b from-cyan-500 to-purple-500"
          style={{ scaleY: scrollYProgress }}
          initial={{ scaleY: 0 }}
        />
      </motion.div>
    </div>
  )
}
