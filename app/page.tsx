import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, TestTube, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Available for Internship
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
              Hi, I'm <span className="text-primary">Shyni</span>
              <br />
              <span className="text-secondary">Full Stack Developer</span> & UI/UX Engineer
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
              Dedicated and motivated IT undergraduate with hands-on experience in web development, UI/UX,
              and collaborative projects. Passionate about solving real-world problems and building scalable
              software solutions with a strong foundation in front-end/back-end development and databases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="group text-lg px-8 py-6" asChild>
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
                <a
                  href="/Shyni-cv.pdf"
                  download
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
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
