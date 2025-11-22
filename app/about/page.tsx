import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import {
  GraduationCap,
  Award,
  Users,
  Target,
  Code,
  TestTube,
  Database,
  Globe,
  Download,
  Calendar,
  MapPin,
  FolderKanban,
  Languages,
  Heart,
  Zap,
  Terminal,
  Cpu,
  Layers,
  Rocket,
  GitBranch,
  Monitor,
  Smartphone,
  Server,
  Bug,
  CheckCircle2,
  Code2,
  Braces,
  GitCommit,
  Sparkles,
  TrendingUp,
  Shield,
  FileCode,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Header - Developer Focused */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-3xl -z-10"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 py-8">
              {/* Professional Photo */}
              <div className="flex-shrink-0 overflow-hidden rounded-lg w-[240px] h-[320px]">
                <Image
                  src="/shyni.jpeg"
                  alt="Shyni Atapattu"
                  width={360}
                  height={480}
                  className="object-cover w-full h-full scale-110 shadow-lg"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                      Shyni Atapattu
                    </span>
                  </h1>
                  <div className="font-mono text-base md:text-lg lg:text-xl text-muted-foreground">
                    <span className="text-primary">&lt;</span>
                    <span className="text-secondary">dev</span>
                    <span className="text-primary">&gt;</span>
                    <span className="px-2">Building scalable, user-centric solutions with clean code & comprehensive testing</span>
                    <span className="text-primary">&lt;/</span>
                    <span className="text-secondary">dev</span>
                    <span className="text-primary">&gt;</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-mono">
                    <Code2 className="h-3 w-3 mr-1" />
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-mono">
                    <Braces className="h-3 w-3 mr-1" />
                    React/Next.js
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-mono">
                    <Database className="h-3 w-3 mr-1" />
                    Full-Stack
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-mono">
                    <Shield className="h-3 w-3 mr-1" />
                    QA Specialist
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
                  <Button asChild size="lg" className="gap-2 font-semibold">
                    <a href="/Shyni-cv.pdf" download>
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2 font-semibold border-primary/50 hover:bg-primary/10">
                    <a href="https://github.com/Shyni97" target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-4 w-4" />
                      View GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics - Developer Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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

          {/* Professional Summary */}
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
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline" className="font-mono text-xs">React.js</Badge>
                    <Badge variant="outline" className="font-mono text-xs">Next.js</Badge>
                    <Badge variant="outline" className="font-mono text-xs">TypeScript</Badge>
                    <Badge variant="outline" className="font-mono text-xs">Node.js</Badge>
                    <Badge variant="outline" className="font-mono text-xs">REST APIs</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-secondary" />
                    Quality Assurance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Experienced in <span className="text-secondary font-semibold">manual and functional testing</span>, test case design, 
                    and bug tracking. Strong understanding of Agile/Scrum methodologies. Skilled in cross-browser/cross-platform testing, 
                    ensuring robust, production-ready applications with comprehensive quality standards.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline" className="font-mono text-xs">Manual Testing</Badge>
                    <Badge variant="outline" className="font-mono text-xs">Agile/Scrum</Badge>
                    <Badge variant="outline" className="font-mono text-xs">Jira</Badge>
                    <Badge variant="outline" className="font-mono text-xs">Postman</Badge>
                    <Badge variant="outline" className="font-mono text-xs">Git</Badge>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-primary/20">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Core Competencies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span>UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>API Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span>Test Automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Version Control (Git)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>CI/CD Pipelines</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span>Agile Methodologies</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Timeline */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Education & Certifications
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="relative border-l-2 border-primary pl-8 pb-8">
                <div className="absolute -left-3.5 top-0 w-7 h-7 bg-gradient-to-br from-primary to-primary/50 rounded-full border-4 border-background shadow-lg"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg">BSc. (Hons) Information Technology</h3>
                    <p className="text-primary font-semibold">SLIIT University</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0 gap-1 font-mono">
                    <Calendar className="h-3 w-3" />
                    Oct 2023 – Present
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  Comprehensive IT degree focusing on software engineering, web technologies, and quality assurance
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="font-mono">GPA: 2.78</Badge>
                  <Badge variant="outline" className="font-mono">Full-Stack Dev</Badge>
                  <Badge variant="outline" className="font-mono">Software Engineering</Badge>
                  <Badge variant="outline" className="font-mono">Database Systems</Badge>
                  <Badge variant="outline" className="font-mono">OOP</Badge>
                </div>
              </div>

              <div className="relative border-l-2 border-muted pl-8 pb-8">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-muted rounded-full border-4 border-background"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-bold">ICASL Business School – Short Course</h3>
                    <p className="text-muted-foreground">Creative Value Through Finance</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 gap-1 font-mono text-xs">
                    <Calendar className="h-3 w-3" />
                    Sept - Oct 2022
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Business process optimization and financial efficiency strategies
                </p>
              </div>

              <div className="relative border-l-2 border-muted pl-8">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-muted rounded-full border-4 border-background"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Edexcel A/L & Cambridge O/L</h3>
                    <p className="text-muted-foreground">OKI International School</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 gap-1 font-mono text-xs">
                    <Calendar className="h-3 w-3" />
                    2005 – 2022
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="secondary" className="font-mono text-xs">A/L: 1B, 3C, 1D</Badge>
                  <Badge variant="secondary" className="font-mono text-xs">O/L: 1B, 2C</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills - Modern Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Frontend & Development */}
              <Card className="border-primary/30 hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Monitor className="h-5 w-5 text-primary" />
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-3 gap-2">
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">React.js</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Next.js</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">TypeScript</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">JavaScript</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">HTML5</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">CSS3</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Tailwind</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Shadcn/ui</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Figma</Badge>
                  </div>
                  <div className="pt-2 space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">React/Next.js</span>
                        <span className="text-xs text-primary font-mono">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">TypeScript/JavaScript</span>
                        <span className="text-xs text-primary font-mono">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">UI/UX Design</span>
                        <span className="text-xs text-primary font-mono">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Backend & Database */}
              <Card className="border-secondary/30 hover:shadow-2xl hover:border-secondary/50 transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-secondary/10 to-transparent">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Server className="h-5 w-5 text-secondary" />
                    Backend & Database
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-3 gap-2">
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">Node.js</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">PHP</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">Java</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">MySQL</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">MongoDB</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">REST APIs</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">Express.js</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">Firebase</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">Postman</Badge>
                  </div>
                  <div className="pt-2 space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">Java</span>
                        <span className="text-xs text-secondary font-mono">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">PHP & MySQL</span>
                        <span className="text-xs text-secondary font-mono">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">REST API Design</span>
                        <span className="text-xs text-secondary font-mono">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* QA & Testing */}
              <Card className="border-primary/30 hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Bug className="h-5 w-5 text-primary" />
                    QA & Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-3 gap-2">
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Manual Testing</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Functional</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Regression</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">UAT</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Test Cases</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Bug Tracking</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Jira</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Postman</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-primary/10 transition-colors">Agile/Scrum</Badge>
                  </div>
                  <div className="pt-2 space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">Manual Testing</span>
                        <span className="text-xs text-primary font-mono">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">Test Case Design</span>
                        <span className="text-xs text-primary font-mono">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">Agile Methodologies</span>
                        <span className="text-xs text-primary font-mono">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* DevOps & Tools */}
              <Card className="border-secondary/30 hover:shadow-2xl hover:border-secondary/50 transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-secondary/10 to-transparent">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Cpu className="h-5 w-5 text-secondary" />
                    DevOps & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-3 gap-2">
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">Git</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">GitHub</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">GitLab</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">VS Code</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">IntelliJ</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">Vercel</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">npm/yarn</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">Docker</Badge>
                    <Badge variant="outline" className="justify-center py-2 font-mono hover:bg-secondary/10 transition-colors">CI/CD</Badge>
                  </div>
                  <div className="pt-2 space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">Git & Version Control</span>
                        <span className="text-xs text-secondary font-mono">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">Development Tools</span>
                        <span className="text-xs text-secondary font-mono">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium font-mono">CI/CD Basics</span>
                        <span className="text-xs text-secondary font-mono">70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Projects & Experience */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <FolderKanban className="h-5 w-5 text-primary" />
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="group border-l-2 border-primary pl-4 hover:border-secondary transition-all duration-300 hover:bg-primary/5 p-3 rounded-r-lg">
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-primary" />
                    Event Management System
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">Full-stack web application for event coordination with role-based access</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge variant="secondary" className="text-xs font-mono">React</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">MySQL</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">Express</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Code2 className="h-3 w-3" />
                    Role: Service Provider & Admin Module Development
                  </p>
                </div>

                <div className="group border-l-2 border-primary pl-4 hover:border-secondary transition-all duration-300 hover:bg-primary/5 p-3 rounded-r-lg">
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-primary" />
                    Café POS System
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">Point of sale management system with inventory tracking</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge variant="secondary" className="text-xs font-mono">Java</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">MySQL</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">JavaFX</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">MVC</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Code2 className="h-3 w-3" />
                    Role: Supplier Management & Database Design
                  </p>
                </div>

                <div className="group border-l-2 border-primary pl-4 hover:border-secondary transition-all duration-300 hover:bg-primary/5 p-3 rounded-r-lg">
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    Jalashokudo Website
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">Responsive chef profile page with mobile optimization & client collaboration</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge variant="secondary" className="text-xs font-mono">HTML5</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">CSS3</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">JavaScript</Badge>
                    <Badge variant="secondary" className="text-xs font-mono">QA</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Bug className="h-3 w-3" />
                    Comprehensive QA testing & client delivery
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-secondary/10 to-transparent">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Award className="h-5 w-5 text-secondary" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-transparent hover:from-secondary/20 hover:to-secondary/10 transition-all border border-secondary/20">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">AIESEC SLIIT - Active Member</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Leadership development & collaborative project management
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Leadership</Badge>
                      <Badge variant="outline" className="text-xs">Teamwork</Badge>
                      <Badge variant="outline" className="text-xs">Communication</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-transparent hover:from-primary/20 hover:to-primary/10 transition-all border border-primary/20">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Portfolio Development</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Built interactive applications to strengthen full-stack expertise
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs font-mono">BMI Calculator</Badge>
                      <Badge variant="outline" className="text-xs font-mono">Tick-Bear Game</Badge>
                      <Badge variant="outline" className="text-xs font-mono">PathWise App</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-transparent hover:from-secondary/20 hover:to-secondary/10 transition-all border border-secondary/20">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Quality Assurance Excellence</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Cross-browser testing, mobile validation & bug reporting
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Manual Testing</Badge>
                      <Badge variant="outline" className="text-xs">Functional QA</Badge>
                      <Badge variant="outline" className="text-xs">UAT</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills & Achievements */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {["Communication", "Self-Motivation", "Problem-solving", "Teamwork", "Adaptability"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Active Member of AIESEC SLIIT</p>
                      <p className="text-sm text-muted-foreground">
                        Contributed to projects and events that enhanced leadership, communication, and teamwork skills.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Jalashokudo Website</p>
                      <p className="text-sm text-muted-foreground">
                        Designed and tested chef’s profile page, performed mobile responsiveness testing,
                        and collaborated with client to deliver final product.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Portfolio Projects</p>
                      <p className="text-sm text-muted-foreground">
                        Built BMI Calculator, Tick-Bear game, and PathWise career app to strengthen coding
                        and UI/UX skills.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Languages & Hobbies */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
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

          {/* Contact Info */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-background to-secondary/10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Let's Build Something Together
                </span>
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-2">
                Open to full-time opportunities, freelance projects, and collaborations
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <div className="p-2 bg-gradient-to-br from-primary to-primary/50 rounded-lg shadow">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">Ja Ela, Sri Lanka</p>
                    <p className="text-xs text-muted-foreground mt-1">Available for remote work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <div className="p-2 bg-gradient-to-br from-primary to-primary/50 rounded-lg shadow">
                    <GitBranch className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">GitHub</p>
                    <a href="https://github.com/Shyni97" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-mono">
                      @Shyni97
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">View my repositories</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <div className="p-2 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg shadow">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/in/shyni592" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-mono">
                      /in/shyni592
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Let's connect professionally</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
