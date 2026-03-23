"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowRight, Code, Database, TestTube, Github, Linkedin, Mail, Download, 
  Sparkles, Terminal, Zap, Rocket, Award, Briefcase, GraduationCap, Users,
  Target, Globe, Phone, MapPin, Send, Clock, MessageSquare, User, CheckCircle,
  ExternalLink, Smartphone, Calculator, FolderOpen, Calendar, CheckCircle2,
  Code2, Braces, Shield, FileCode, GitCommit, TrendingUp, GitBranch, Monitor,
  Server, Bug, Languages, Heart, Cpu, Layers
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedTechShowcase } from "@/components/animated-tech-showcase"
import { PortfolioTimeline } from "@/components/portfolio-timeline"
import CertificationsSection from "@/components/certifications-section"
import { useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function SinglePagePortfolio() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Add smooth scrolling CSS
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceID = "service_ho97i3m"
      const templateID = "template_lhay5mn"
      const publicKey = "yhkZy8pGufC563sLH"

      await emailjs.send(serviceID, templateID, formData, publicKey)

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Email send error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Projects data
  const projects = [
    {
      id: 1,
      title: "DW Science",
      subtitle: "Educational Website",
      description: "DW Science is a client educational website developed by Inficode Solutions, designed to support science learning for students in grades 6-11.",
      technologies: ["React", "TypeScript", "Node.js"],
      video: "/dwscienceV.mp4",
      githubUrl: "https://github.com/Shyni97",
      liveUrl: "https://dwscience.com",
      icon: Globe,
      color: "text-blue-500",
    },
    {
      id: 2,
      title: "Event Planning System",
      subtitle: "Event Management",
      description: "Contributed to the design and development of the Event Management System by implementing core service provider and admin modules, focusing on package management, service coordination, and user profile administration to ensure smooth system operations.",
      technologies: ["Java", "CSS", "MySQL"],
      image: "/eventmanagement.jpg",
      githubUrl: "https://github.com/Shyni97",
      icon: Calendar,
      color: "text-orange-500",
    },
    {
      id: 3,
      title: "Cafe Billing POS System",
      subtitle: "MERN Stack",
      description: "Developed and implemented the supplier management module, including dashboards, CRUD operations, supplier profiles, suppliers overview, and PDF reporting.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/cafe-pos.png",
      githubUrl: "https://github.com/Shyni97",
      icon: Database,
      color: "text-purple-500",
    },
    {
      id: 4,
      title: "BMI Calculator",
      subtitle: "JavaScript Project",
      description: "JavaScript-based calculator to compute Body Mass Index. Built a simple interactive tool with validation for accurate results.",
      technologies: ["JavaScript", "HTML", "CSS"],
      video: "/bmicalculator.mp4",
      githubUrl: "https://github.com/Shyni97/bmi-calculator",
      icon: Calculator,
      color: "text-green-500",
    },
    {
      id: 5,
      title: "Tick-Bear",
      subtitle: "Interactive Web Project",
      description: "Web-based interactive project using JavaScript. Designed interactive features, tested functionality across devices.",
      technologies: ["JavaScript", "HTML", "CSS"],
      video: "/tickbear.mp4",
      githubUrl: "https://github.com/Shyni97",
      icon: Code,
      color: "text-cyan-500",
    },
    {
      id: 6,
      title: "PathWise",
      subtitle: "Mobile App Design",
      description: "Mobile app for career path guidance featuring CV builder, quizzes, and goal tracking. Focused on usability and user experience.",
      technologies: ["Figma", "UI/UX Design"],
      video: "/pathwise.mp4",
      githubUrl: "https://github.com/Shyni97",
      icon: Target,
      color: "text-pink-500",
    },
    {
      id: 7,
      title: "Portfolio Repository",
      subtitle: "Next.js",
      description: "Personal repository showcasing projects and practice work. Organized code and versions to highlight learning progress and technical growth.",
      technologies: ["Next.js", "React", "TypeScript"],
      githubUrl: "https://github.com/Shyni97",
      icon: FolderOpen,
      color: "text-primary",
    },
  ]

  function ProjectCard({ project }: { project: typeof projects[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-[#1a2332] border-primary/20 hover:border-primary/50 group h-full flex flex-col">
        {/* Image/Video Section */}
        <div className="relative bg-gradient-to-br from-[#0f1a2f] to-[#1a2332] p-4 sm:p-6 flex items-center justify-center h-52 sm:h-64 overflow-hidden">
          {project.video ? (
            <div className="w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          ) : project.image ? (
            <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <project.icon className={`h-16 w-16 ${project.color}`} />
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <Badge variant="outline" className="text-primary border-primary/30 text-xs mb-3">
              {project.subtitle}
            </Badge>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge 
                  key={tech} 
                  className="bg-primary/10 text-primary border border-primary/20 text-xs px-2 py-1"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs px-2 py-1">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4 border-t border-primary/10">
            {project.liveUrl && (
              <Button 
                size="sm" 
                className="flex-1 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 text-xs font-semibold"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 border-primary/30 text-primary hover:bg-primary/10 text-xs font-semibold"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    )
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      {/* HOME SECTION */}
      <section id="home" className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151d28] via-[#1a2332] to-[#151d28] -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`flex justify-center lg:justify-start order-2 lg:order-1 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <AnimatedTechShowcase />
            </div>

            <div className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-4 sm:space-y-5">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Hello, I'm</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    <span className="text-primary">SHYNI</span>{" "}
                    <span className="text-foreground">ATAPATTU</span>
                  </h1>
                </div>

                <div className="space-y-3">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                    IT Undergraduate & Full Stack Developer
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
                    Motivated Information Technology undergraduate at SLIIT with hands-on experience in 
                    front-end and full-stack development. Passionate about building scalable, user-focused 
                    web applications and contributing to agile software teams.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-2">
                  <Button 
                    size="default" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 text-sm font-semibold rounded-md w-full sm:w-auto"
                    asChild
                  >
                    <a href="#contact">
                      Hire Me
                    </a>
                  </Button>
                  <Button 
                    size="default" 
                    variant="outline" 
                    className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 px-6 py-5 text-sm font-semibold rounded-md w-full sm:w-auto"
                    asChild
                  >
                    <a href="/Shyni Resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 relative">
                  <div className="glass rounded-2xl p-4 sm:p-6 border-2 border-primary/20 shadow-xl hover:border-primary/40 transition-all duration-300 max-w-full sm:max-w-md animate-float-delayed">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-xs text-muted-foreground ml-2 font-mono">terminal</span>
                      </div>
                      
                      <div className="font-mono text-xs space-y-1">
                        <div className="flex gap-2">
                          <span className="text-primary">$</span>
                          <span className="text-foreground">const developer = {'{'}skills, passion, dedication{'}'}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-primary">$</span>
                          <span className="text-foreground">console.log(developer.status)</span>
                        </div>
                        <div className="flex gap-2 text-green-400">
                          <span className="text-primary">{'>'}</span>
                          <span className="animate-pulse">Ready to build amazing things ✨</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-12 sm:mt-16 flex flex-wrap gap-3 justify-center lg:justify-start transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Github, label: "GitHub Profile", href: "https://github.com/Shyni97" },
              { icon: Code, label: "View Projects", href: "#projects" },
              { icon: Briefcase, label: "Work Experience", href: "#about" },
              { icon: Database, label: "Tech Stack", href: "#about" },
              { icon: Terminal, label: "Skills & Tools", href: "#about" }
            ].map((item, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                className="border border-primary/20 hover:border-primary hover:bg-primary/10 rounded-md px-4 text-xs"
                asChild
              >
                <a href={item.href}>
                  <item.icon className="mr-2 h-3 w-3" />
                  {item.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <PortfolioTimeline />

      {/* Skills Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
              Technical Arsenal
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Modern technologies and tools I use to build exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary text-2xl">{"</>"}</div>
                  <h4 className="text-xl font-bold text-slate-900">Frontend</h4>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "React.js", level: 85 },
                    { name: "JavaScript", level: 80 },
                    { name: "HTML/CSS", level: 90 },
                    { name: "Tailwind", level: 85 }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                        <span className="text-sm font-bold text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-purple-600 text-2xl">
                    <Database className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Backend</h4>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "PHP", level: 75 },
                    { name: "Java", level: 70 },
                    { name: "MySQL", level: 80 },
                    { name: "MongoDB", level: 65 }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                        <span className="text-sm font-bold text-purple-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-pink-400 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-pink-600 text-2xl">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Tools</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["Git/GitHub", "VS Code", "Figma", "XAMPP", "Postman", "Chrome DevTools"].map((tool) => (
                    <Badge 
                      key={tool} 
                      variant="secondary"
                      className="bg-gray-100 text-slate-800 font-semibold border border-gray-300 hover:bg-gray-200 px-3 py-1"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-orange-600 text-2xl">
                    <TestTube className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">QA & Methods</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["Manual Testing", "Test Cases", "Bug Tracking", "Agile/Scrum", "Documentation", "SDLC"].map((method) => (
                    <Badge 
                      key={method} 
                      variant="secondary"
                      className="bg-gray-700 text-white font-semibold border-0 hover:bg-gray-800 px-3 py-1"
                    >
                      {method}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              3rd-year Software Engineering student passionate about creating clean, intuitive, and impactful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="text-center border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <FileCode className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1000+</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">Lines of Code</div>
              </CardContent>
            </Card>
            <Card className="text-center border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <GitCommit className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">200+</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">Git Commits</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">10+</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">Projects Deployed</div>
              </CardContent>
            </Card>
            <Card className="text-center border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">99%</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">Test Coverage</div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12 border-primary/30 bg-gradient-to-br from-primary/10 via-background to-secondary/10 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Professional Overview
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    Development Expertise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Specialized in building <span className="text-primary font-semibold">modern web applications</span> using React, Next.js, 
                    and TypeScript. Proficient in creating responsive, accessible interfaces with Tailwind CSS and component libraries. 
                    Backend experience with Node.js, PHP, and database management (MySQL, MongoDB).
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-secondary" />
                    Quality Assurance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Experienced in <span className="text-secondary font-semibold">manual and functional testing</span>, test case design, 
                    and bug tracking. Strong understanding of Agile/Scrum methodologies. Skilled in cross-browser/cross-platform testing, 
                    ensuring robust, production-ready applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { skill: "Communication", icon: "💬" },
                    { skill: "Problem-solving", icon: "🧩" },
                    { skill: "Teamwork", icon: "🤝" },
                    { skill: "Self-Motivation", icon: "🎯" },
                    { skill: "Adaptability", icon: "🔄" },
                    { skill: "Time Management", icon: "⏰" }
                  ].map((item) => (
                    <div key={item.skill} className="flex items-center gap-2 text-sm">
                      <span>{item.icon}</span>
                      <span>{item.skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">English</span>
                    <span className="text-xs text-muted-foreground">Fluent</span>
                  </div>
                  <Progress value={95} className="h-1.5" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Sinhala</span>
                    <span className="text-xs text-muted-foreground">Native</span>
                  </div>
                  <Progress value={100} className="h-1.5" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Hindi</span>
                    <span className="text-xs text-muted-foreground">Basic</span>
                  </div>
                  <Progress value={40} className="h-1.5" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-secondary" />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { hobby: "UI Design", icon: "🎨" },
                    { hobby: "Music", icon: "🎵" },
                    { hobby: "Fitness", icon: "💪" },
                    { hobby: "Badminton", icon: "🏸" },
                    { hobby: "Movies", icon: "🎬" },
                    { hobby: "Tech Trends", icon: "🚀" }
                  ].map((item) => (
                    <div key={item.hobby} className="flex items-center gap-2 text-sm">
                      <span>{item.icon}</span>
                      <span>{item.hobby}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f1620] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                My Work
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of my development work showcasing modern web technologies, 
              clean code practices, and user-centered design principles
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View More Section */}
          <div className="text-center pt-12 border-t border-primary/10">
            <p className="text-gray-400 mb-8 text-lg">
              Want to see more of my work or collaborate on a project?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary px-8 py-6 text-base font-semibold" 
                asChild
              >
                <a href="https://github.com/Shyni97" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View All Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <CertificationsSection />

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm actively seeking internship opportunities in QA Engineering and Web Development.
              Let's collaborate to build scalable solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">Shyniatapattu592@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+94 77 300 3819</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Ja Ela, Sri Lanka</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://github.com/Shyni97" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub Profile
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://www.linkedin.com/in/shyni592" target="_blank">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="p-3 bg-cyan-100 rounded-full w-fit mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-cyan-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll respond as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-100">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="pl-10 bg-[#0f1a2f]/85 border-primary/40 text-slate-100 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-100">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10 bg-[#0f1a2f]/85 border-primary/40 text-slate-100 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-slate-100">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What would you like to discuss?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-[#0f1a2f]/85 border-primary/40 text-slate-100 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-100">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about the internship opportunity, project idea, or collaboration..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="bg-[#0f1a2f]/85 border-primary/40 text-slate-100 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/10 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-primary font-bold text-xl mb-4">Shyni Atapattu</h3>
              <p className="text-sm text-muted-foreground">IT undergraduate passionate about building modern web experiences with clean code and creative solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Web Development</li>
                <li className="text-muted-foreground">Full Stack Apps</li>
                <li className="text-muted-foreground">UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="hover:text-primary" asChild>
                  <Link href="https://github.com/Shyni97" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="ghost" className="hover:text-primary" asChild>
                  <Link href="https://www.linkedin.com/in/shyni592" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="ghost" className="hover:text-primary" asChild>
                  <a href="#contact">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
            <p>© 2026 Shyni Atapattu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
