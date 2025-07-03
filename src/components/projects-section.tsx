//disables eslint for this file
/* eslint-disable */
"use client"

import * as React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye, Star, Code, Zap, Users, TrendingUp, Award, X, Play, Calendar, Tag } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Project data with enhanced information
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, full-stack e-commerce solution with advanced features",
    longDescription: "Built a comprehensive e-commerce platform with React, Next.js, and Node.js. Features include user authentication, payment processing, inventory management, and real-time analytics. Implemented responsive design and optimized for performance.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/pratiksenjaliya/ecommerce-platform",
    featured: true,
    status: "Live",
    year: "2023",
    category: "Full-Stack",
    stats: [
      { label: "Users", value: "10K+", color: "cyber-blue" },
      { label: "Performance", value: "95%", color: "quantum-green" },
      { label: "Uptime", value: "99.9%", color: "neon-purple" }
    ],
    color: "cyber-blue"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription: "Developed a collaborative task management application with real-time synchronization, drag-and-drop functionality, and team collaboration features. Built with React, TypeScript, and Socket.io for real-time communication.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/pratiksenjaliya/task-manager",
    featured: true,
    status: "Live",
    year: "2023",
    category: "Frontend",
    stats: [
      { label: "Teams", value: "500+", color: "neon-purple" },
      { label: "Tasks", value: "50K+", color: "electric-cyan" },
      { label: "Rating", value: "4.8/5", color: "quantum-green" }
    ],
    color: "neon-purple"
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and analytics platform",
    longDescription: "Created a comprehensive analytics dashboard with interactive charts, real-time data updates, and customizable reports. Integrated with multiple data sources and APIs for comprehensive business intelligence.",
    image: "/api/placeholder/600/400",
    tags: ["Angular", "D3.js", "Python", "FastAPI", "Redis"],
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/pratiksenjaliya/analytics-dashboard",
    featured: false,
    status: "Live",
    year: "2022",
    category: "Frontend",
    stats: [
      { label: "Data Points", value: "1M+", color: "electric-cyan" },
      { label: "Load Time", value: "<2s", color: "quantum-green" },
      { label: "Accuracy", value: "99%", color: "cyber-blue" }
    ],
    color: "electric-cyan"
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "AI-powered content creation and optimization tool",
    longDescription: "Built an AI-powered content generation platform that helps users create, edit, and optimize content using machine learning models. Features include text generation, SEO optimization, and content analysis.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Next.js", "OpenAI API", "Python", "TensorFlow"],
    liveUrl: "https://ai-content-demo.com",
    githubUrl: "https://github.com/pratiksenjaliya/ai-content-generator",
    featured: true,
    status: "Beta",
    year: "2023",
    category: "AI/ML",
    stats: [
      { label: "Content Generated", value: "100K+", color: "quantum-green" },
      { label: "Users", value: "5K+", color: "cyber-blue" },
      { label: "Accuracy", value: "94%", color: "neon-purple" }
    ],
    color: "quantum-green"
  }
]

const categories = ["All", "Full-Stack", "Frontend", "AI/ML", "Mobile"]

export function ProjectsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section ref={ref} id="projects" className="section relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-neon-purple/5 to-electric-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-quantum-green/5 to-neural-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-16 bg-gradient-to-b from-neon-purple/20 to-transparent"
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
            Featured <span className="bg-gradient-to-r from-cyber-blue via-neon-purple to-electric-cyan bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A collection of projects showcasing my skills in modern web development and innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`futuristic-badge transition-all duration-300 ${
                selectedCategory === category
                  ? "text-cyber-blue border-cyber-blue/50 bg-cyber-blue/10"
                  : "text-secondary border-border hover:text-cyber-blue hover:border-cyber-blue/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`futuristic-card group hover:border-${project.color}/40 transition-all duration-500 cursor-pointer relative overflow-hidden`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-${project.color}/5 via-transparent to-${project.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Status */}
                  <div className={`absolute top-4 left-4 futuristic-status-badge text-${project.color} bg-${project.color}/10 border-${project.color}/30`}>
                    {project.status}
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-quantum-green to-electric-cyan rounded-full p-2">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <div className="futuristic-button p-2">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-xl font-bold text-primary group-hover:text-${project.color} transition-colors`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-tertiary text-sm">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.stats.map((stat, idx) => (
                      <div key={stat.label} className="text-center">
                        <div className={`text-sm font-bold text-${stat.color}`}>{stat.value}</div>
                        <div className="text-xs text-tertiary">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`futuristic-badge text-xs text-${project.color} border-${project.color}/30`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="futuristic-badge text-xs text-tertiary border-border">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 futuristic-button text-xs bg-gradient-to-r from-${project.color} to-${project.color}-hover`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="futuristic-button text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="futuristic-card-elevated max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 futuristic-button p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-2">{selectedProject.title}</h3>
                      <p className="text-secondary leading-relaxed">{selectedProject.longDescription}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {selectedProject.stats.map((stat) => (
                        <div key={stat.label} className="futuristic-card text-center">
                          <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                          <div className="text-sm text-tertiary">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`futuristic-badge text-${selectedProject.color} border-${selectedProject.color}/30`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="futuristic-button"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Project
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="futuristic-button"
                      >
                        <Github className="w-4 h-4" />
                        View Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 