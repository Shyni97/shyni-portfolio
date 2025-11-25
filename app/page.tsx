"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, TestTube, Github, Linkedin, Mail, Download, Sparkles, Terminal, Zap, Rocket, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Aspiring Full-Stack Developer"

  useEffect(() => {
    setMounted(true)
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section - Enhanced with animations */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
            {/* Professional Photo with Enhanced Frame */}
            <div className={`relative flex-shrink-0 group transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl w-[280px] h-[360px] md:w-[320px] md:h-[400px] shadow-2xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 bg-card">
                  <Image
                    src="/shyni.jpeg"
                    alt="Shyni Atapattu - Full Stack Developer"
                    width={450}
                    height={570}
                    className="object-cover w-full h-full scale-110 group-hover:scale-[1.15] transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content with Typing Animation */}
            <div className={`flex-1 text-center md:text-left space-y-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-green-500/10 via-primary/10 to-secondary/10 px-5 py-2.5 rounded-full border border-green-500/30 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-primary bg-clip-text text-transparent">
                    Available for Internship
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Name with gradient */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight">
                    <span className="block text-foreground/90 mb-2">Hi, I'm</span>
                    <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-sm">
                      Shyni Atapattu
                    </span>
                  </h1>
                  
                  {/* Typing effect title */}
                  <div className="h-12 flex items-center justify-center md:justify-start">
                    <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-muted-foreground">
                      <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {typedText}
                      </span>
                      <span className="animate-pulse">|</span>
                    </p>
                  </div>
                </div>

                {/* Introduction with code accent */}
                <div className="space-y-3">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                    Dedicated IT undergraduate specializing in <span className="text-primary font-semibold">web development</span> and <span className="text-secondary font-semibold">UI/UX design</span>. 
                    Passionate about crafting elegant solutions to real-world problems.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 font-mono bg-muted/50 px-3 py-1.5 rounded-md">
                    <Terminal className="h-3 w-3 text-primary" />
                    <span>const passion = <span className="text-primary">"problem_solving"</span></span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Button size="lg" className="group text-base px-8 py-6 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 rounded-xl font-semibold relative overflow-hidden" asChild>
                  <Link href="/projects">
                    <span className="relative z-10 flex items-center">
                      View My Work
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group text-base px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary/40 hover:shadow-lg transition-all duration-300 rounded-xl font-semibold" asChild>
                  <a href="/Shyni Resume.pdf" download>
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download CV
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center md:justify-start">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <Link href="https://github.com/Shyni97" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <Link href="https://www.linkedin.com/in/shyni592" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <Link href="/contact" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards - Enhanced */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary/30">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">6+</div>
                <div className="text-sm font-semibold mb-1">Technologies</div>
                <div className="text-xs text-muted-foreground">React.js, Java, PHP, SQL, HTML, CSS</div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-secondary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-secondary/30">
                  <TestTube className="h-7 w-7 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">QA</div>
                <div className="text-sm font-semibold mb-1">Quality Assurance</div>
                <div className="text-xs text-muted-foreground">Testing, Bug Tracking, Documentation</div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-accent/30 bg-gradient-to-br from-card to-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-accent/30">
                  <Database className="h-7 w-7 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">4+</div>
                <div className="text-sm font-semibold mb-1">Projects</div>
                <div className="text-xs text-muted-foreground">Academic & Personal Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills/Technologies Section - Interactive */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern technologies and tools I use to build exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Skill Category Cards */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Frontend</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "React.js", level: 85 },
                    { name: "JavaScript", level: 80 },
                    { name: "HTML/CSS", level: 90 },
                    { name: "Tailwind", level: 85 }
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out rounded-full"
                          style={{ width: mounted ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/50 bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Database className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg">Backend</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "PHP", level: 75 },
                    { name: "Java", level: 70 },
                    { name: "MySQL", level: 80 },
                    { name: "MongoDB", level: 65 }
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-secondary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-1000 ease-out rounded-full"
                          style={{ width: mounted ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Git/GitHub", "VS Code", "Figma", "XAMPP", "Postman", "Chrome DevTools"].map((tool) => (
                    <Badge 
                      key={tool} 
                      variant="outline" 
                      className="text-xs hover:bg-accent/10 hover:border-accent/50 transition-all cursor-default"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <TestTube className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">QA & Methods</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Manual Testing", "Test Cases", "Bug Tracking", "Agile/Scrum", "Documentation", "SDLC"].map((method) => (
                    <Badge 
                      key={method} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
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

      {/* Featured Projects Section - With Hover Effects */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications showcasing problem-solving and technical skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Project 1: CaféPOS */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-500">
                    POS
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 hover:bg-primary">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  CaféPOS - Supplier Management
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Developed complete Supplier Management Module for café Point-of-Sale system, 
                  featuring automated profile generation, advanced search, and real-time inventory tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "JavaScript", "Firebase", "Real-time DB"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="group/btn" asChild>
                    <Link href="/projects">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/Shyni97" target="_blank">
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2: Portfolio */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/50">
              <div className="relative h-48 bg-gradient-to-br from-secondary/20 via-accent/20 to-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-secondary/20 group-hover:scale-110 transition-transform duration-500">
                    <Rocket className="h-20 w-20" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-secondary/90">Live</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  Developer Portfolio
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Modern, responsive portfolio website showcasing skills, projects, and professional journey. 
                  Built with latest web technologies and best practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "React", "TailwindCSS", "TypeScript"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="secondary" className="group/btn" asChild>
                    <Link href="/projects">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/Shyni97/shyni-portfolio" target="_blank">
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3: Placeholder */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 opacity-75 hover:opacity-100">
              <div className="relative h-48 bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-accent/20 group-hover:scale-110 transition-transform duration-500">
                    Coming Soon
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-muted-foreground">
                  More Projects Coming
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Currently working on exciting new projects. Stay tuned for updates on full-stack applications and innovative solutions.
                </p>
                <Button size="sm" variant="outline" disabled>
                  In Development
                </Button>
              </CardContent>
            </Card>

            {/* Project 4: Placeholder */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 opacity-75 hover:opacity-100">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-500">
                    Next Project
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-muted-foreground">
                  Future Innovation
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Exploring new technologies and building solutions that make a difference. Check back soon for the latest project.
                </p>
                <Button size="sm" variant="outline" disabled>
                  Planning Phase
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-8">
            <Award className="h-16 w-16 mx-auto mb-6 text-primary animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm actively seeking internship opportunities where I can contribute, learn, and grow. 
              Let's discuss how my skills in web development and UI/UX design can add value to your team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="group text-lg px-10 py-7 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 rounded-xl font-semibold" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 rounded-xl font-semibold backdrop-blur" asChild>
              <Link href="/projects">
                <Rocket className="mr-2 h-5 w-5" />
                View Projects
              </Link>
            </Button>
          </div>

          {/* Quick Contact Icons */}
          <div className="flex justify-center gap-4">
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-12 w-12 rounded-full hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300 shadow-lg" 
              asChild
            >
              <Link href="https://github.com/Shyni97" target="_blank" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-12 w-12 rounded-full hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300 shadow-lg" 
              asChild
            >
              <Link href="https://www.linkedin.com/in/shyni592" target="_blank" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-12 w-12 rounded-full hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300 shadow-lg" 
              asChild
            >
              <Link href="/contact" aria-label="Contact via Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">© 2024 Shyni Atapattu. All rights reserved.</div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/Shyni97" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://www.linkedin.com/in/shyni592" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
