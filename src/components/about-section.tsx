"use client"

import * as React from "react"
import { motion, useInView, useTransform, useSpring } from "framer-motion"
import { Code, TrendingUp, Brain, Globe, Server, Coffee, Users, Zap, Terminal, Layers, Sparkles, ChevronRight } from "lucide-react"

const stats = [
  { number: "4+", label: "Years Experience", icon: Code, color: "from-blue-600 to-blue-500" },
  { number: "50+", label: "Projects Delivered", icon: TrendingUp, color: "from-green-600 to-green-500" },
  { number: "15+", label: "Technologies", icon: Globe, color: "from-purple-600 to-purple-500" },
  { number: "3", label: "Companies", icon: Users, color: "from-orange-600 to-orange-500" },
]

const highlights = [
  {
    title: "Frontend Development Expert",
    description: "Specialized in React, Next.js, and Angular with 4+ years of hands-on experience building scalable, performant web applications",
    icon: Code,
    gradient: "from-blue-600 to-blue-500",
    technologies: ["React 18+", "Next.js 15", "Angular 17+", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Language-Agnostic Full-Stack",
    description: "Versatile backend development with Node.js, Python, and database technologies. Comfortable adapting to different tech stacks",
    icon: Server,
    gradient: "from-green-600 to-green-500",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "AI-Enhanced Workflow",
    description: "Leveraging AI tools like Cursor IDE, GitHub Copilot, and Windsurf to accelerate development and maintain high code quality",
    icon: Brain,
    gradient: "from-purple-600 to-purple-500",
    technologies: ["Cursor IDE", "GitHub Copilot", "Windsurf", "AI Debugging", "Smart Code Gen"],
  },
]

const skillCategories = [
  "React & Next.js", "Angular", "TypeScript", "Node.js", "Python", "AI Tools"
]

const floatingElements = [
  { icon: Terminal, x: "10%", y: "20%", delay: 0 },
  { icon: Layers, x: "90%", y: "30%", delay: 0.5 },
  { icon: Sparkles, x: "15%", y: "80%", delay: 1 },
  { icon: Globe, x: "85%", y: "70%", delay: 1.5 },
  { icon: Zap, x: "50%", y: "10%", delay: 2 },
]

export function AboutSection() {
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    if (ref.current) {
      ref.current.addEventListener('mousemove', handleMouseMove)
      return () => {
        ref.current?.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [mouseX, mouseY])

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden bg-mesh-gradient" ref={ref}>
      {/* Advanced Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/50 dark:from-slate-950/20 dark:via-blue-950/10 dark:to-purple-950/20" />
        
        {/* Dynamic Floating Orbs */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-floating-orb"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
              } 0%, transparent 70%)`,
              width: `${150 + i * 40}px`,
              height: `${150 + i * 40}px`,
              left: `${5 + i * 20}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          />
        ))}

        {/* Interactive Mouse Parallax */}
        <motion.div
          className="absolute pointer-events-none z-10"
          style={{
            x: useTransform(mouseX, [0, 1], ["-20px", "20px"]),
            y: useTransform(mouseY, [0, 1], ["-20px", "20px"]),
          }}
        >
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl" />
        </motion.div>

        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => {
          const Icon = element.icon
          return (
            <motion.div
              key={index}
              className="absolute text-blue-500/20 hover:text-blue-500/40 transition-all duration-500"
              style={{
                left: element.x,
                top: element.y,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                y: [0, -15, 0],
              } : { opacity: 0, scale: 0, rotate: -180 }}
              transition={{
                delay: element.delay,
                duration: 1,
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          )
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header with Layered Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="gradient-border-thick p-2 inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-bold text-professional uppercase tracking-widest">
              About Me
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6 text-layered text-innovation"
            data-text="Building Digital Excellence"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            Building Digital Excellence
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Crafting innovative solutions with modern technologies and AI-enhanced workflows
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* About Text with Gradient Border */}
            <motion.div
              className="gradient-border p-8 pattern-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
                <p>
                  Hi, I&apos;m <span className="text-professional font-semibold thick-underline">Pratik Senjaliya</span>, 
                  a dedicated <span className="text-professional font-semibold">Frontend Developer</span> with over 4 years of experience 
                  crafting exceptional user experiences. I specialize in modern JavaScript frameworks including 
                  <span className="text-professional font-semibold"> React, Next.js, and Angular</span>, 
                  building scalable applications with TypeScript and cutting-edge frontend technologies.
                </p>

                <p>
                  What sets me apart is my <span className="text-professional font-semibold thick-underline">language-agnostic approach</span> – 
                  I&apos;m equally comfortable working with backend technologies like Node.js, Python, and various database systems. 
                  This full-stack versatility allows me to understand the complete application architecture and 
                  deliver more cohesive, efficient solutions.
                </p>

                <p>
                  I&apos;ve gained valuable experience working as a <span className="text-professional font-semibold">Senior Software Engineer at LinearLoop</span>, 
                  <span className="text-professional font-semibold"> Software Engineer at SoluteLabs</span>, and in 
                  <span className="text-professional font-semibold"> R&D roles at Reolo</span>. This diverse experience has 
                  sharpened my problem-solving skills and adaptability across different domains and team structures.
                </p>
              </div>
            </motion.div>

            {/* Skills Categories with Animation */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {skillCategories.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass-card p-3 text-center text-sm font-medium text-professional floating-shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Grid with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="dimension-card glass-card p-8 text-center pattern-shadow"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ 
                    delay: 0.6 + index * 0.1, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 5,
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} p-4 shadow-floating`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold text-innovation mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Highlights Section with Advanced Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <motion.h3
            className="text-3xl lg:text-4xl font-bold text-center mb-16 text-innovation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Core Expertise
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  className="dimension-card group"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.8, type: "spring" }}
                  whileHover={{ y: -10 }}
                >
                  <div className="gradient-border-thick p-8 h-full pattern-shadow">
                    {/* Icon with Gradient Background */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${highlight.gradient} p-4 mb-6 shadow-floating`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h4 className="text-xl font-bold mb-4 thick-underline text-innovation">
                      {highlight.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {highlight.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2">
                      {highlight.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="glass-card px-3 py-1 text-xs font-medium text-professional"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 1.2 + index * 0.2 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Hover Effect Arrow */}
                    <motion.div
                      className="flex items-center mt-6 text-professional font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 5 }}
                    >
                      <span>Explore More</span>
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action with Enhanced Design */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.div
            className="gradient-border-thick p-8 max-w-4xl mx-auto pattern-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h4
              className="text-2xl lg:text-3xl font-bold mb-4 text-innovation"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.8 }}
            >
              Ready to Build Something Amazing?
            </motion.h4>
            
            <motion.p
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2 }}
            >
              Let&apos;s collaborate and bring your ideas to life with modern technologies and innovative solutions.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.2 }}
            >
              {[
                "Frontend Excellence",
                "Full-Stack Capabilities", 
                "AI-Enhanced Workflow",
                "Professional Experience"
              ].map((feature, index) => (
                <motion.span
                  key={feature}
                  className="glass-card px-4 py-2 text-sm font-medium text-professional floating-shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 2.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 