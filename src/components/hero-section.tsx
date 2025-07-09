"use client"

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink, Briefcase, Code2, Users, Star, MapPin, Sparkles, Zap, Rocket } from 'lucide-react'
import { downloadCV } from '@/lib/cv-generator'

const stats = [
  { value: "4+", label: "Years", sublabel: "Experience", icon: Briefcase, color: "from-blue-500 to-cyan-500" },
  { value: "50+", label: "Projects", sublabel: "Delivered", icon: Code2, color: "from-purple-500 to-pink-500" },
  { value: "15+", label: "Tech", sublabel: "Stack", icon: Star, color: "from-orange-500 to-red-500" },
  { value: "2", label: "Awards", sublabel: "Received", icon: Users, color: "from-green-500 to-emerald-500" },
]

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/pratiksenjaliya", 
    icon: Github,
    username: "@pratiksenjaliya",
    gradient: "from-gray-600 to-gray-800"
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/pratik-senjaliya-732535149", 
    icon: Linkedin,
    username: "Pratik Senjaliya",
    gradient: "from-blue-600 to-blue-800"
  },
]

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Angular", icon: "🅰️" },
  { name: "Vue.js", icon: "💚" },
]

export function HeroSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleDownloadCV = () => {
    downloadCV()
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-24 pb-16"
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-32 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-52 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -10, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Gradient Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Status Badge - Fixed positioning issue */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12 relative z-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/50 dark:border-green-800/30 rounded-full backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-green-700 dark:text-green-400 text-sm font-semibold">Available for new opportunities</span>
              <div className="flex items-center gap-1 text-green-600 dark:text-green-500">
                <MapPin className="w-3 h-3" />
                <span className="text-sm font-medium">India</span>
              </div>
            </div>
          </motion.div>

          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            {/* Greeting */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span 
                className="block text-foreground mb-3"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi, I&rsquo;m
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-extrabold"
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Pratik Senjaliya
              </motion.span>
            </motion.h1>
            
            {/* Role & Description */}
            <motion.div 
              className="space-y-6 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mb-4">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Frontend Developer • Language-Agnostic Developer • AI-Enhanced Development
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Results-driven Frontend Developer with 4+ years of proven experience building scalable web applications and leading development teams. Language-agnostic approach enables quick adaptation to new technologies and backend integrations. Passionate about leveraging{" "}
                <span className="text-blue-600 dark:text-blue-400 font-bold">AI tools</span> to enhance development workflows and deliver{" "}
                <span className="text-purple-600 dark:text-purple-400 font-bold">high-quality solutions</span> ahead of deadlines.
              </p>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-10"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center gap-2 px-4 py-2 bg-card/80 border border-border/50 rounded-full hover:bg-muted/50 transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-md"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.button 
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Download className="w-5 h-5" />
              Download CV
              <motion.div
                className="flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button 
              onClick={handleViewProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-border bg-card/50 rounded-xl font-semibold hover:bg-muted/80 transition-all duration-300 backdrop-blur-sm"
            >
              <Rocket className="w-5 h-5" />
              View Projects
              <motion.div
                className="flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button 
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-muted-foreground/20 rounded-xl font-semibold hover:border-muted-foreground/40 hover:bg-muted/30 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Let&rsquo;s Connect
              <motion.div
                className="flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`group flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${link.gradient} text-white rounded-xl hover:shadow-lg hover:shadow-current/25 transition-all duration-300`}
              >
                <link.icon className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm font-bold">{link.name}</div>
                  <div className="text-xs opacity-90">{link.username}</div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 bg-card/80 border border-border/50 rounded-2xl hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative flex flex-col items-center text-center space-y-3">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="font-semibold">{stat.label}</div>
                    <div className="text-xs">{stat.sublabel}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-3xl mx-auto relative"
          >
            <div className="relative p-8 bg-card/60 border border-border/50 rounded-2xl backdrop-blur-sm">
              <div className="absolute top-4 left-6 text-4xl text-primary/20">
                <Sparkles className="w-8 h-8" />
              </div>
              <blockquote className="text-xl lg:text-2xl text-muted-foreground italic text-center leading-relaxed">
                &quot;Code is poetry, design is art, and user experience is the story that brings them together.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-2 mt-6">
                <Zap className="w-4 h-4 text-primary" />
                <p className="text-sm text-muted-foreground font-semibold">My Development Philosophy</p>
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div className="absolute bottom-4 right-6 text-4xl text-primary/20 rotate-180">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 