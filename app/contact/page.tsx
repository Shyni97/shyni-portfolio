"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Clock, MessageSquare, User, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
      // Your EmailJS IDs
      const serviceID = "service_ho97i3m"
      const templateID = "template_lhay5mn"
      const publicKey = "yhkZy8pGufC563sLH" // replace with your actual public key

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              I’m actively seeking internship opportunities in QA Engineering and Web Development.
              Let’s collaborate to build scalable solutions and ensure quality software delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
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
                      <p className="text-sm text-muted-foreground">15/3 St. Annes Lane, Weligampitiya, Ja Ela</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="https://github.com/Shyni97" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub Profile
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="https://www.linkedin.com/in/shyni592" target="_blank">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Status</span>
                      <span
                        className="text-sm font-medium px-2 py-1 rounded-md border"
                        style={{
                          backgroundColor: "#dcfce7",
                          color: "#166534",
                          borderColor: "#bbf7d0",
                        }}
                      >
                        Available for Internship
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Response Time</span>
                      <span className="text-sm font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Preferred Contact</span>
                      <span className="text-sm font-medium">Email</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
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
                      <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I’ll respond as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What would you like to discuss?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about the internship opportunity, project idea, or collaboration..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
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

          {/* Why Contact Me */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Why Work With Me?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Continuous Learner</h3>
                  <p className="text-sm text-muted-foreground">
                    Always improving my skills in web development, testing, and software engineering to deliver better results.
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Quality Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced in testing, debugging, and ensuring responsive, user-friendly interfaces.
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Collaborative</h3>
                  <p className="text-sm text-muted-foreground">
                    Skilled at working in teams and communicating with clients to achieve the best results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Let’s Build Something Great</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I’d love to hear about your project, internship opportunity, or collaboration ideas.
              Together we can create meaningful and impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:Shyniatapattu592@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me Directly
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="tel:+94773003819">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
