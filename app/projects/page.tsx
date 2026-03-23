"use client"

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
  Briefcase,
  Sparkles,
  Eye,
  Info,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { useRef } from "react"

export default function ProjectsPage() {
  const projects = [
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
  image: "/cafe-pos.png",
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
      image: "/jalashokudo.jpg",
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
      video: "/pathwise.mp4",
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
      githubUrl: "github.com/Shyni97/bmi-calculator",
      video: "/bmicalculator.mp4",
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
      video: "/tickbear.mp4",
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
      githubUrl: "github.com/Shyni97",
      image: "/portfolio-repo.png",
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
  image: "/eventmanagement.jpg",
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
  id: 8,
  title: "Manpower Management System",
  subtitle: "Employee Management Solution",
  description:
    "Comprehensive employee management system with features for tracking workforce data, attendance, and performance metrics.",
  longDescription:
    "A robust desktop application built with Java for managing employee data and workforce operations. The system implements complete CRUD operations for employee records, attendance tracking, performance evaluation, and reporting. Features an intuitive user interface for HR personnel to efficiently manage workforce data and generate reports. The MySQL database backend ensures reliable data storage and retrieval with optimized queries for performance.",
  technologies: ["Java", "MySQL", "JDBC", "Swing/JavaFX"],
  category: "Academic Project",
  status: "Upcoming",
  githubUrl: "github.com/Shyni97",
  features: [
    "Complete CRUD operations for employee management",
    "Attendance tracking and monitoring",
    "Performance metrics and evaluation",
    "Report generation and data export",
    "Role-based access control",
    "Search and filter capabilities",
  ],
  role: "Full Stack Developer",
  duration: "Upcoming Project",
  icon: Briefcase,
  color: "text-accent",
  bgColor: "bg-accent/10",
},
{
  id: 9,
  title: "AI Resume Builder",
  subtitle: "Intelligent Resume Creation Tool",
  description:
    "AI-powered resume builder that helps users craft professional, ATS-friendly resumes with smart suggestions and automated formatting.",
  longDescription:
    "An innovative web application that leverages artificial intelligence to assist users in creating professional resumes. The system provides intelligent content suggestions, ATS optimization tips, and automated formatting to help job seekers create impactful resumes. Features include multiple professional templates, real-time preview, PDF export functionality, and AI-powered content recommendations based on job descriptions. The application integrates modern AI APIs to analyze resume content and provide actionable improvement suggestions.",
  technologies: ["React", "API Integration", "AI/ML", "PDF Generation", "TypeScript"],
  category: "Web Application",
  status: "Upcoming",
  githubUrl: "github.com/Shyni97",
  features: [
    "AI-powered content suggestions",
    "Multiple professional templates",
    "ATS optimization recommendations",
    "Real-time preview and editing",
    "PDF export functionality",
    "Job description analysis",
    "Smart formatting and layout",
  ],
  role: "Full Stack Developer",
  duration: "Upcoming Project",
  icon: Sparkles,
  color: "text-purple-600",
  bgColor: "bg-purple-100 dark:bg-purple-950",
},
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
      <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-[#1e3a5f]/20 ${
        project.status === "Upcoming" 
          ? "border-2 border-purple-500 shadow-lg shadow-purple-500/20" 
          : ""
      }`}>
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Media Preview */}
          <div className="relative bg-gradient-to-br from-[#f0f4f8] to-[#e1e8f0] p-6 flex items-center justify-center min-h-[400px]">
            {project.status === "Upcoming" && (
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm animate-pulse">
                  🚀 Coming Soon
                </Badge>
              </div>
            )}
            
            {project.video ? (
              <div className="w-full h-full flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
            ) : project.image ? (
              <div className="relative w-full h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className={`p-8 ${project.bgColor} rounded-2xl`}>
                  <project.icon className={`h-24 w-24 ${project.color}`} />
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Project Details */}
          <div className="p-6 flex flex-col">
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${project.bgColor} rounded-lg`}>
                    <project.icon className={`h-5 w-5 ${project.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a1f3d]">{project.title}</h3>
                    <p className="text-sm text-[#1e3a5f]">{project.subtitle}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <Badge 
                  variant={project.status === "Live" ? "default" : project.status === "Upcoming" ? "default" : "secondary"}
                  className={project.status === "Upcoming" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : ""}
                >
                  {project.status}
                </Badge>
                <Badge variant="outline">{project.category}</Badge>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#2c4a6b] mb-4 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 text-[#0a1f3d]">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Role & Duration */}
            <div className="flex items-center gap-4 text-sm text-[#1e3a5f] mb-4 pb-4 border-b border-[#1e3a5f]/20">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-[#0066cc]" />
                <span className="text-xs">{project.role}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-[#0066cc]" />
                <span className="text-xs">{project.duration}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-4 flex-grow">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm text-[#0a1f3d]">
                <CheckCircle className="h-4 w-4 text-[#0066cc]" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.slice(0, 4).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#2c4a6b] text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-auto pt-4">
              {project.liveUrl && (
                <Button size="sm" className="flex-1">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Live Demo
                </Button>
              )}
              <Button variant="outline" size="sm" className="flex-1">
                <Github className="h-3 w-3 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-[#0a1f3d]">My Projects</h1>
            <p className="text-xl text-[#1e3a5f] max-w-2xl mx-auto text-pretty">
              A showcase of my technical projects, from web development to mobile applications, demonstrating my skills
              in QA testing and software development.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-white border-[#1e3a5f]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#0066cc]">6+</div>
                <div className="text-sm text-[#1e3a5f]">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#1e3a5f]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#0066cc]">10+</div>
                <div className="text-sm text-[#1e3a5f]">Technologies</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#1e3a5f]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#0066cc]">1</div>
                <div className="text-sm text-[#1e3a5f]">Live Website</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#1e3a5f]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#0066cc]">100%</div>
                <div className="text-sm text-[#1e3a5f]">Quality Focused</div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Skills Used */}
          <Card className="mt-12 bg-white border-[#1e3a5f]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#0a1f3d]">
                <TestTube className="h-5 w-5 text-[#0066cc]" />
                Skills Demonstrated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-[#0a1f3d]">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "HTML", "CSS", "React.js", "Mobile Development"].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-[#0a1f3d]">Testing & QA</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Manual Testing", "Cross-browser Testing", "Responsive Testing", "User Testing"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-[#0a1f3d]">Tools & Methods</h4>
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
            <h3 className="text-2xl font-bold mb-4 text-[#0a1f3d]">Interested in My Work?</h3>
            <p className="text-[#1e3a5f] mb-6 max-w-2xl mx-auto">
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
