import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, TestTube, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-20 mb-24">
            {/* Professional Photo with Elegant Frame */}
            <div className="relative flex-shrink-0 group">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl w-[300px] h-[380px] shadow-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-900">
                  <Image
                    src="/shyni.jpeg"
                    alt="Shyni Atapattu"
                    width={450}
                    height={570}
                    className="object-cover w-full h-full scale-110 group-hover:scale-[1.15] transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold shadow-sm border border-primary/20 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Available for Internship</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-[1.1] tracking-tight">
                    <span className="text-foreground/90">Hi, I'm</span>{" "}
                    <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      Shyni Atapattu
                    </span>
                  </h1>
                  
                  <p className="text-2xl md:text-3xl text-muted-foreground/80 font-light tracking-wide">
                    Aspiring Full Stack Developer
                  </p>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
                  Dedicated IT undergraduate specializing in web development and UI/UX design. 
                  Passionate about crafting elegant solutions to real-world problems through 
                  clean code and thoughtful architecture.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Button size="lg" className="group text-base px-10 py-7 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl font-semibold" asChild>
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-10 py-7 border-2 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 rounded-xl font-semibold" asChild>
                <a
                  href="/Shyni Resume.pdf"
                  download
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-2">6+ Technologies</div>
                <div className="text-muted-foreground">React.js, Java, PHP, SQL, HTML, CSS</div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold mb-2">QA Skills</div>
                <div className="text-muted-foreground">Manual Testing, Test Cases, Bug Reporting</div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-2">4+ Projects</div>
                <div className="text-muted-foreground">BMI Calculator, Tick-Bear, PathWise, Jalashokudo</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Building Quality Software Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Currently pursuing BSc. (Hons) Information Technology at SLIIT University.
                Skilled in manual testing, web development, and agile methodologies. Strong focus
                on usability, responsiveness, and delivering client-ready products.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/about">Learn More About Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/Shyni97" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold">Currently Available</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Actively seeking internship opportunities in QA Engineering and Web Development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold">Recent Achievement</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Delivered JALASHOKUDO website with full testing, cross-browser validation, and client collaboration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specialized skills that make me an ideal candidate for your team
          </p>

          <div className="grid md:grid-cols-2 gap-8">
           

            <Card className="text-left">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Web Development</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Full-stack web development with HTML, CSS, JavaScript, React.js, PHP, and MySQL. Focused on building
                  responsive and scalable solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "JavaScript", "PHP", "MySQL", "HTML/CSS"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Database & Backend</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Skilled in designing and managing databases with MySQL, MongoDB, and Microsoft SQL Server.
                  Familiar with building backend logic using PHP and Java.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "MongoDB", "SQL Server", "PHP", "Java"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Tools & Methodologies</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Hands-on experience with version control, prototyping tools, and software development methodologies
                  like Agile, Waterfall, and V-Model.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Git/GitHub", "Figma", "VS Code", "XAMPP", "Agile", "Waterfall"].map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

             <Card className="text-left">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <TestTube className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Quality Assurance</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Experienced in manual testing, test case design, bug tracking, SDLC, Agile (Scrum), and documentation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Manual Testing", "Bug Tracking", "Agile/Scrum", "Cross-Browser Testing"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Contribute</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how my skills in UI/UX, web development, and agile methodologies can add value to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link href="/projects">View Projects</Link>
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
