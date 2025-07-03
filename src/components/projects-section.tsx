"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, Filter, X, Brain, Bot, Code, Zap, Globe, Palette, Server } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Interactive E-Commerce Platform",
    description: "Modern e-commerce solution with advanced React patterns, beautiful animations, and seamless user experience. Built with Next.js, TypeScript, and enhanced with AI development tools.",
    longDescription: "A comprehensive e-commerce platform showcasing modern frontend development practices. Features advanced React patterns, smooth animations, responsive design, and optimal performance. Developed efficiently using AI-assisted tools like Cursor and Copilot.",
    image: "/api/placeholder/600/400",
    category: "Frontend",
    status: "Live",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe", "AI-Enhanced"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    highlights: [
      "Advanced React patterns and state management",
      "Smooth animations and microinteractions",
      "Responsive design with mobile-first approach",
      "Optimized performance and accessibility",
      "AI-assisted development for faster delivery"
    ]
  },
  {
    id: 2,
    title: "React Dashboard with Real-time Analytics",
    description: "Feature-rich admin dashboard with complex data visualizations, real-time updates, and intuitive user interface. Built with modern React ecosystem and component libraries.",
    longDescription: "A sophisticated dashboard application demonstrating advanced frontend skills including complex state management, data visualization, real-time updates, and user experience design. Enhanced development workflow with AI tools.",
    image: "/api/placeholder/600/400",
    category: "Frontend",
    status: "Completed",
    tags: ["React", "TypeScript", "Chart.js", "Socket.io", "Material-UI", "Redux Toolkit"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    highlights: [
      "Complex data visualization with Chart.js",
      "Real-time updates with WebSocket integration",
      "Advanced filtering and search functionality",
      "Responsive design for all screen sizes",
      "Comprehensive testing with Jest and RTL"
    ]
  },
  {
    id: 3,
    title: "SaaS Landing Page with Animations",
    description: "High-converting SaaS landing page with stunning animations, interactive elements, and pixel-perfect design. Showcases advanced CSS and animation techniques.",
    longDescription: "A beautifully crafted landing page that demonstrates expertise in modern CSS, animations, and user experience design. Features scroll-triggered animations, interactive elements, and conversion-optimized layout.",
    image: "/api/placeholder/600/400",
    category: "Frontend",
    status: "Live",
    tags: ["Next.js", "React", "Framer Motion", "GSAP", "Tailwind CSS", "Optimization"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    highlights: [
      "Scroll-triggered animations with Framer Motion",
      "Custom CSS animations and transitions",
      "Conversion-optimized design and layout",
      "Perfect Lighthouse performance scores",
      "SEO optimized with structured data"
    ]
  },
  {
    id: 4,
    title: "Full-Stack Social Media App",
    description: "Complete social media application with React frontend and Node.js backend. Features real-time messaging, file uploads, and complex user interactions.",
    longDescription: "A full-featured social media platform demonstrating both frontend and backend development skills. Built with modern technologies and language-agnostic backend approach.",
    image: "/api/placeholder/600/400",
    category: "Full Stack",
    status: "In Development",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "GraphQL", "AWS S3", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    highlights: [
      "Real-time messaging and notifications",
      "File upload and media management",
      "Complex user interactions and feeds",
      "JWT authentication and authorization",
      "Scalable backend architecture"
    ]
  },
  {
    id: 5,
    title: "Portfolio Website Generator",
    description: "React-based portfolio generator tool that helps developers create beautiful portfolios quickly. Features template system and customization options.",
    longDescription: "A developer tool that demonstrates component architecture and design system principles. Built to help other developers create professional portfolios with ease.",
    image: "/api/placeholder/600/400",
    category: "Frontend",
    status: "Completed",
    tags: ["React", "TypeScript", "Design System", "Component Library", "Storybook"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    highlights: [
      "Modular component architecture",
      "Customizable design system",
      "Template generation system",
      "Interactive preview functionality",
      "Export to various formats"
    ]
  },
  {
    id: 6,
    title: "Progressive Web App for Productivity",
    description: "Task management PWA with offline functionality, push notifications, and native-like experience. Demonstrates modern web app capabilities.",
    longDescription: "A productivity-focused PWA showcasing modern web technologies including service workers, offline functionality, and native app features. Language-agnostic backend with Python APIs.",
    image: "/api/placeholder/600/400",
    category: "Full Stack",
    status: "Live",
    tags: ["React", "PWA", "Service Workers", "Python", "FastAPI", "SQLite", "Push Notifications"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    highlights: [
      "Offline functionality with service workers",
      "Push notifications and background sync",
      "Native app-like experience",
      "Cross-platform compatibility",
      "Efficient data synchronization"
    ]
  }
]

const categories = ["All", "Frontend", "Full Stack"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const filteredProjects = projects.filter(
    project => selectedCategory === "All" || project.category === selectedCategory
  )

  const featuredProjects = filteredProjects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <motion.div
          className="absolute top-1/3 right-1/4 w-1 h-20 bg-gradient-to-b from-blue-500/20 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-1 h-20 bg-gradient-to-b from-purple-500/20 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Frontend-focused development projects showcasing modern web technologies and efficient AI-enhanced workflows
          </motion.p>
        </motion.div>

        {/* Development Focus Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="gradient-border-thick p-6 backdrop-blur-sm pattern-shadow">
            <div className="flex items-center justify-center space-x-8 text-center flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium thick-underline">React • Next.js • Angular</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium thick-underline">Full-Stack Capable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium thick-underline">AI-Enhanced Development</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center space-x-4 mb-12"
        >
          <Filter className="w-5 h-5 text-muted-foreground" />
          <div className="flex space-x-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-card/50 border border-border/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/20"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative bg-card/50 border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-500 backdrop-blur-sm overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative z-10">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center backdrop-blur-sm">
                    <Code className="w-12 h-12 text-blue-500/50" />
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
                      project.status === "Live" 
                        ? "bg-green-500/20 text-green-600 border border-green-500/20"
                        : project.status === "Completed"
                        ? "bg-blue-500/20 text-blue-600 border border-blue-500/20"
                        : "bg-orange-500/20 text-orange-600 border border-orange-500/20"
                    )}>
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-xs rounded border border-blue-500/20 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded backdrop-blur-sm">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      View Details
                    </motion.button>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-card/50 border border-border/50 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-card/50 border border-border/50 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 text-foreground font-semibold rounded-lg hover:from-blue-500/20 hover:via-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card/95 border border-border/50 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-blue-500/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <motion.a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </span>
                </motion.a>
                <motion.a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-card/50 border border-border/50 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/20 transition-all duration-300 text-center backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />
                    View Source
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
} 