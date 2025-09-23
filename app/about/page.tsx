import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Dedicated and motivated IT undergraduate specializing in UI/UX and full-stack web development, 
              driven to solve real-world problems and deliver innovative, scalable software solutions with a 
              strong focus on user experience and quality.

            </p>
            <div className="mt-6">
              <Button asChild>
                <a href="/Shyni-cv.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Professional Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Proficient in full-stack development with solid expertise in front-end and back-end technologies,
                manual and functional testing, and agile methodologies. Strong foundation in databases, version
                control, and object-oriented programming, ensuring robust and scalable solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Skilled at designing and developing responsive, user-centric web applications, performing
                cross-browser and cross-platform testing, and collaborating effectively with teams and clients to
                deliver high-quality, production-ready software.
              </p>

            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-semibold">BSc. (Hons) Information Technology</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Oct 2023 – Present
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">SLIIT University</p>
                <p className="text-sm text-muted-foreground">Specializing in Information Technology</p>
                <Badge variant="secondary" className="mt-2">
                  Cumulative GPA: 2.78
                </Badge>
              </div>

              <div className="border-l-2 border-muted pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-semibold">ICASL Business School – Short Course</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Sept 2022 - Oct 2022
                  </div>
                </div>
                <p className="text-muted-foreground">Creative Value Through Finance</p>
                <p className="text-sm text-muted-foreground">
                  Focused on business process optimization and financial efficiency
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-semibold">Edexcel A/L & Cambridge O/L</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    2005 – 2022
                  </div>
                </div>
                <p className="text-muted-foreground">OKI International School</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">A/L: 1B, 3C, 1D</Badge>
                  <Badge variant="outline">O/L: 1B, 2C</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-5 w-5 text-secondary" />
                  QA & Testing Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Manual Testing</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Test Case Design</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Bug Reporting</span>
                    <span className="text-sm text-muted-foreground">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Agile (Scrum)</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Programming Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">JavaScript</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Java</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">React.js</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">PHP</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* University Projects */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderKanban className="h-5 w-5 text-primary" />
                University Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Event Management System</p>
                  <p className="text-sm text-muted-foreground">Role: Service Provider & Admin</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Café POS System</p>
                  <p className="text-sm text-muted-foreground">Role: Supplier Management</p>
                </div>
              </div>
            </CardContent>
          </Card>

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
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="outline">English – Fluent</Badge>
                <Badge variant="outline">Sinhala – Native</Badge>
                <Badge variant="outline">Hindi – Basic</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-secondary" />
                  Hobbies & Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {["Music", "UI Design Mockups", "Gym", "Badminton", "Movies"].map((hobby) => (
                    <div key={hobby} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">{hobby}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">15/3 St. Annes Lane, Weligampitiya, Ja Ela</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/Shyni97</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/shyni592</p>
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
