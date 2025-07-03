"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Download, Github, Linkedin, Code, Briefcase, Database, Zap, Sparkles, Terminal, Globe, Cpu, Layers } from "lucide-react"
import { downloadCV } from "@/lib/cv-generator"

const floatingElements = [
  { icon: Code, delay: 0, x: "15%", y: "25%", scale: 1 },
  { icon: Briefcase, delay: 0.3, x: "85%", y: "20%", scale: 0.8 },
  { icon: Database, delay: 0.6, x: "10%", y: "70%", scale: 0.9 },
  { icon: Zap, delay: 0.9, x: "80%", y: "75%", scale: 1.1 },
  { icon: Sparkles, delay: 1.2, x: "50%", y: "15%", scale: 0.7 },
  { icon: Terminal, delay: 1.5, x: "20%", y: "60%", scale: 0.85 },
  { icon: Globe, delay: 1.8, x: "90%", y: "45%", scale: 0.95 },
  { icon: Cpu, delay: 2.1, x: "5%", y: "40%", scale: 0.75 },
]

const techStack = [
  "React", "Next.js", "Angular", "TypeScript", "Node.js", "Python"
]

const companies = [
  { name: "LinearLoop", role: "Sr Software Engineer" },
  { name: "SoluteLabs", role: "Software Engineer" },
  { name: "Reolo", role: "R&D Engineer" },
]

const innovativeStats = [
  { value: "4+", label: "Years Frontend Experience", icon: Code, gradient: "from-blue-600 to-cyan-500" },
  { value: "50+", label: "Projects Delivered", icon: Briefcase, gradient: "from-purple-600 to-pink-500" },
  { value: "3", label: "Companies & Roles", icon: Globe, gradient: "from-green-600 to-emerald-500" },
  { value: "15+", label: "Technologies Mastered", icon: Layers, gradient: "from-orange-600 to-red-500" },
]

export function HeroSection() {
  const containerRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove)
      return () => {
        containerRef.current?.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [mouseX, mouseY])

  const handleDownloadCV = () => {
    downloadCV()
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen bg-mesh-gradient overflow-hidden"
    >
      {/* Advanced Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20" />
        
        {/* Dynamic Floating Orbs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-floating-orb"
            style={{
              background: `linear-gradient(135deg, ${
                i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
              } 0%, transparent 70%)`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${5 + i * 10}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}

        {/* Interactive Mouse Follower */}
        <motion.div
          className="absolute pointer-events-none z-10"
          style={{
            x: useTransform(mouseX, [0, 1], ["-50vw", "50vw"]),
            y: useTransform(mouseY, [0, 1], ["-50vh", "50vh"]),
          }}
        >
          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl" />
        </motion.div>

        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Matrix Rain Effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
            style={{
              height: "100vh",
              left: `${i * 5}%`,
            }}
            animate={{
              y: ["-100vh", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => {
          const Icon = element.icon
          return (
            <motion.div
              key={index}
              className="absolute text-blue-500/30 hover:text-blue-500/60 transition-all duration-500"
              style={{
                left: element.x,
                top: element.y,
                scale: element.scale,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: element.scale,
                rotate: [0, 10, -10, 0],
                y: [0, -20, 0],
              }}
              transition={{
                delay: element.delay,
                duration: 0.8,
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: element.scale * 1.2, 
                rotate: 360,
                transition: { duration: 0.3 }
              }}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          )
        })}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 pt-32 pb-20 px-4"
        style={{ y, opacity }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Hero Text with Layered Effects */}
          <div className="text-center mb-16 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                Welcome to Innovation
              </div>
              
              {/* Layered Title with 3D Effect */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold dimension-card"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
              >
                <span className="block text-layered text-innovation" data-text="Pratik Senjaliya">
                  Pratik Senjaliya
                </span>
              </motion.h1>

              {/* Subtitle with Gradient Border */}
              <motion.div
                className="gradient-border-thick p-6 mx-auto max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
                  <span className="thick-underline text-innovation">
                    Frontend Developer
                  </span>
                  <span className="text-muted-foreground"> & </span>
                  <span className="thick-underline text-innovation">
                    Full-Stack Engineer
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Crafting exceptional digital experiences with{" "}
                  <span className="text-professional font-semibold">React, Next.js, Angular</span>{" "}
                  and language-agnostic backend skills. Powered by{" "}
                  <span className="text-professional font-semibold">AI-enhanced workflows</span>{" "}
                  for accelerated, high-quality development.
                </p>
              </motion.div>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="glass-card px-4 py-2 text-sm font-medium text-professional shadow-floating"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Section with Advanced Effects */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                onClick={handleDownloadCV}
                className="btn-innovative px-8 py-4 text-lg font-semibold flex items-center gap-3 floating-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>

              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/pratiksenjaliya", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/pratik-senjaliya-732535149/", label: "LinkedIn" }
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="depth-card p-3 text-muted-foreground hover:text-professional transition-colors"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 10,
                        boxShadow: "0 20px 40px rgba(37,99,235,0.3)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Experience Stats Grid with 3D Effects */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {innovativeStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="dimension-card glass-card p-6 text-center pattern-shadow"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    delay: 1.3 + index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                >
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.gradient} p-3 shadow-floating`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-innovation mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Company Experience Showcase */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
              Professional Journey
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  className="glass-card p-4 min-w-[200px] floating-shadow"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="font-semibold text-professional">
                    {company.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {company.role}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Available for Opportunities Badge */}
          <motion.div
            className="absolute top-24 right-8 hidden lg:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
          >
            <div className="glass-card px-4 py-2 text-sm font-medium text-professional shadow-floating animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for new opportunities
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-professional rounded-full flex justify-center"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-professional rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 