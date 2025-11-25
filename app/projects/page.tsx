import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Calculator,
  Users,
  Code,
  TestTube,
  Calendar,
  CheckCircle,
  Database,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "JALASHOKUDO",
      subtitle: "Japanese Food Website",
      description:
        "Designed and tested the chef's profile page to ensure mobile responsiveness and proper functionality. Performed cross-browser testing to validate design consistency and bug-free performance.",
      longDescription:
        "A comprehensive Japanese food website where I was responsible for developing and testing the chef's profile pages. The project involved creating responsive designs that work seamlessly across different devices and browsers. I implemented manual functional testing procedures and communicated directly with the client to refine design expectations and deliver a professional final product.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      status: "Live",
      liveUrl: "jalashokudo.com",
      features: [
        "Responsive chef profile pages",
        "Cross-browser compatibility",
        "Mobile-first design approach",
        "Client communication and feedback integration",
        "Manual functional testing across devices",
      ],
      role: "Junior Developer & QA Tester",
      duration: "3 months",
      icon: Globe,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: 2,
      title: "PathWise",
      subtitle: "Career Guidance Mobile App",
      description:
        "Mobile app for career path guidance featuring CV builder, quizzes, and goal tracking. Focused on usability and user experience to help users navigate their career journey effectively.",
      longDescription:
        "PathWise is a comprehensive mobile application designed to guide users through their career development journey. The app includes features such as an interactive CV builder, career assessment quizzes, and goal tracking functionality. I focused heavily on user experience design and usability testing to ensure the app provides meaningful value to users seeking career guidance.",
      technologies: ["Mobile App", "UX/UI Design", "User Research"],
      category: "Mobile Development",
      status: "Completed",
      githubUrl: "https://github.com/Shyni97/PathWise",
      features: [
        "Interactive CV builder with templates",
        "Career assessment quizzes and personality tests",
        "Goal setting and progress tracking",
        "User-friendly interface design",
        "Career path recommendations",
      ],
      role: "Mobile App Developer & UX Designer",
      duration: "4 months",
      icon: Smartphone,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      id: 3,
      title: "BMI Calculator",
      subtitle: "Interactive Health Tool",
      description:
        "JavaScript-based calculator to compute Body Mass Index. Built a simple interactive tool with validation for accurate results and user-friendly interface.",
      longDescription:
        "A clean and intuitive BMI (Body Mass Index) calculator built with vanilla JavaScript. The application features input validation to ensure accurate calculations, responsive design for various screen sizes, and clear visual feedback for different BMI categories. This project demonstrates my ability to create functional web applications with proper error handling and user experience considerations.",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Web Development",
      status: "Completed",
      liveUrl: "shyni97.github.io/bmi_calculator",
      githubUrl: "https://github.com/Shyni97/bmi_calculator",
      features: [
        "Real-time BMI calculation",
        "Input validation and error handling",
        "BMI category classification",
        "Responsive design",
        "Clean and intuitive interface",
      ],
      role: "Full Stack Developer",
      duration: "2 weeks",
      icon: Calculator,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: 4,
      title: "Tick-Bear",
      subtitle: "Interactive Web Project",
      description:
        "Web-based interactive project using JavaScript. Designed interactive features, tested functionality across devices, and improved responsiveness for better user experience.",
      longDescription:
        "Tick-Bear is an interactive web application that showcases advanced JavaScript functionality and responsive design principles. The project involved creating engaging user interactions, implementing smooth animations, and ensuring cross-device compatibility. I conducted thorough testing across different browsers and devices to guarantee consistent performance and user experience.",
      technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
      category: "Web Development",
      status: "Completed",
      liveUrl: "codepen.io/Shyni-Atapattu/pen/wBaNKyR",
      githubUrl: "https://github.com/Shyni97/tick-bear",
      features: [
        "Interactive JavaScript features",
        "Cross-device compatibility testing",
        "Responsive design implementation",
        "Smooth animations and transitions",
        "Performance optimization",
      ],
      role: "Frontend Developer & QA Tester",
      duration: "6 weeks",
      icon: Code,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      id: 5,
      title: "Portfolio Repository",
      subtitle: "Personal Development Showcase",
      description:
        "Personal repository showcasing projects and practice work. Organized code and versions to highlight learning progress and technical growth throughout my academic journey.",
      longDescription:
        "A comprehensive portfolio repository that serves as a showcase of my technical journey and learning progress. The repository is well-organized with clear documentation, version control best practices, and demonstrates my growth as a developer. It includes various projects, code samples, and practice exercises that highlight my skills in different technologies and programming languages.",
      technologies: ["Git", "GitHub", "Documentation", "Version Control"],
      category: "Development Tools",
      status: "Ongoing",
      githubUrl: "https://github.com/Shyni97/shyni-portfolio",
      features: [
        "Well-organized project structure",
        "Comprehensive documentation",
        "Version control best practices",
        "Learning progress tracking",
        "Code quality improvements over time",
      ],
      role: "Developer & Maintainer",
      duration: "Ongoing",
      icon: Github,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
  id: 6,
  title: "Event Management System",
  subtitle: "University Full-Stack Project",
  description:
    "A university project designed to manage events with service provider and admin functionalities.",
  longDescription:
    "Developed as part of my university coursework, this Event Management System provided end-to-end event handling features. I was responsible for the Service Provider and Admin roles, focusing on user management, event creation, and backend integration. The project emphasized database-driven development, modular design, and team collaboration.",
  technologies: ["React.js", "JavaScript", "MySQL", "PHP", "CSS"],
  category: "University Project",
  status: "Completed",
  features: [
    "Event scheduling and management",
    "Service provider role implementation",
    "Admin dashboard for event oversight",
    "Database-driven user and event data",
  ],
  role: "Service Provider & Admin Developer",
  duration: "2025 – Completed",
  icon: Code,
  color: "text-secondary",
  bgColor: "bg-secondary/10",
},

{
  id: 7,
  title: "Cafe POS System",
  subtitle: "University Full-Stack Project",
  description:
    "A point-of-sale system built as a university project, with my focus on supplier management features.",
  longDescription:
    "This Cafe POS System was developed as a group project in my university course. My role concentrated on the Supplier Management module, where I handled supplier data integration, inventory tracking, and purchase history management. The project simulated a real-world POS environment and improved my full-stack development and collaboration skills.",
  technologies: ["React.js", "Node.js", "MySQL", "Express.js"],
  category: "University Project",
  status: "Completed",
  liveUrl: "www.linkedin.com/posts/shyni592_caf%C3%A9pos-web-based-caf%C3%A9-billing-inventory-activity-7398927514254905344-7NlZ",
  features: [
    "Supplier management module",
    "Inventory tracking and updates",
    "POS order processing",
    "Database connectivity with MySQL",
  ],
  role: "Supplier Management Developer",
  duration: "2025 – Completed",
  icon: Database,
  color: "text-primary",
  bgColor: "bg-primary/10",
},

  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A showcase of my technical projects, from web development to mobile applications, demonstrating my skills
              in QA testing and software development.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">3</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Live Website</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Tested</div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Project Info */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 ${project.bgColor} rounded-lg`}>
                          <project.icon className={`h-6 w-6 ${project.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-muted-foreground">{project.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
                        <Badge variant="outline">{project.category}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.role}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <Link href={`https://${project.liveUrl}`} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Features */}
                  <div className="bg-muted/30 p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Used */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TestTube className="h-5 w-5 text-secondary" />
                Skills Demonstrated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "HTML", "CSS", "React.js", "Mobile Development"].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Testing & QA</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Manual Testing", "Cross-browser Testing", "Responsive Testing", "User Testing"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tools & Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "Version Control", "Documentation", "Agile"].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to discuss my projects and explore new opportunities. Let's connect and see how I can
              contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/Shyni97" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  View All Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
