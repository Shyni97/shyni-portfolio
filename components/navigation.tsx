"use client"

import { Button } from "@/components/ui/button"
import { Home, User, FolderOpen, Mail, Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.substring(1))
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg py-2' 
        : 'bg-background/95 backdrop-blur-sm border-b border-border py-3'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with glow effect */}
          <Link href="/" className="flex shrink-0 items-center hover:opacity-80 transition-all duration-300 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative rounded-xl border border-white/70 bg-white/90 px-2 py-1 shadow-[0_6px_22px_rgba(255,255,255,0.22)] backdrop-blur-sm">
              <Image 
                src="/Shyni Atapattu.png" 
                alt="Shyni Atapattu Logo" 
                width={200} 
                height={50}
                className={`h-10 w-auto sm:h-12 relative transition-transform duration-300 group-hover:scale-105 ${
                  scrolled ? 'sm:h-10' : 'sm:h-12'
                }`}
                priority
              />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.substring(1)
              return (
                <div
                  key={item.href}
                  className="animate-slide-down"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <Button 
                    variant={isActive ? "default" : "ghost"} 
                    size="sm" 
                    asChild 
                    className={`gap-2 transition-all duration-300 hover:scale-105 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary to-secondary shadow-lg' 
                        : 'hover:bg-primary/10'
                    }`}
                  >
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  </Button>
                </div>
              )
            })}
            {/* Sparkle indicator */}
            <div className="ml-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden transition-all duration-300 hover:scale-110 hover:rotate-90" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation with slide animation */}
        {isOpen && (
          <div className="md:hidden mt-3 animate-slide-down">
            <div className="rounded-xl border border-border/80 bg-background/95 backdrop-blur-xl p-3 shadow-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <div
                    key={item.href}
                    className="animate-slide-right"
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      asChild
                      className={`justify-start gap-2 w-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary to-secondary' 
                          : 'hover:translate-x-2'
                      }`}
                    >
                      <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </a>
                    </Button>
                  </div>
                )
              })}
            </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
