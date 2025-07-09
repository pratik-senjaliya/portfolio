//disables eslint for this file
/* eslint-disable */
"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Coffee, Globe, Heart, Code, Users, Target, Lightbulb, Rocket, Shield, Sparkles, Zap } from "lucide-react"

const qualities = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "Breaking down complex challenges into elegant solutions",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and methodologies",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Detail Oriented",
    description: "Ensuring quality and precision in every deliverable",
    gradient: "from-orange-500 to-red-500"
  }
]

const interests = [
  {
    icon: Coffee,
    title: "Coffee Enthusiast",
    description: "Fuel for coding sessions",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contributing to community",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Globe,
    title: "Travel & Culture",
    description: "Exploring new perspectives",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Always growing & improving",
    gradient: "from-emerald-500 to-green-500"
  }
]

const achievements = [
  { number: "4+", label: "Years", sublabel: "Professional Experience", progress: 90 },
  { number: "50+", label: "Projects", sublabel: "Successfully Delivered", progress: 95 },
  { number: "2", label: "Awards", sublabel: "Recognized Excellence", progress: 98 },
  { number: "15+", label: "Technologies", sublabel: "Expertise Areas", progress: 88 }
]

export function AboutSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="about" className="section relative overflow-hidden bg-gradient-to-b from-background to-muted/10">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">About </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Passionate frontend developer with a journey spanning multiple companies and cutting-edge technologies
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.h3 
                className="text-3xl font-bold mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                My <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Journey</span>
              </motion.h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over <span className="text-blue-600 dark:text-blue-400 font-bold">4 years of proven experience</span> in software development, I've had the privilege of 
                  working with amazing teams at <span className="text-purple-600 dark:text-purple-400 font-bold">LinearLoop Pvt. Ltd.</span> and <span className="text-emerald-600 dark:text-emerald-400 font-bold">Solute TechnoLabs LLP</span>. My journey has been 
                  about leading development teams and creating scalable enterprise applications that drive business success.
                </p>
                <p>
                  I specialize in <span className="text-blue-600 dark:text-blue-400 font-bold">modern frontend technologies</span> like React, Next.js, and Angular, with 
                  expanding technical exposure to backend technologies via <span className="text-purple-600 dark:text-purple-400 font-bold">AI-enhanced tools</span>. My approach combines 
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">technical expertise</span> with <span className="text-pink-600 dark:text-pink-400 font-bold">team leadership</span> and innovative problem-solving.
                </p>
                <p>
                  Currently exploring <span className="text-pink-600 dark:text-pink-400 font-bold">generative AI applications</span>, prompt engineering, and automated workflow systems. 
                  Passionate about leveraging AI tools to enhance development workflows and deliver high-quality solutions consistently ahead of schedule.
                </p>
              </div>
            </div>

            {/* Professional Stats */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-8">
                Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative p-6 bg-card/80 border border-border/50 rounded-2xl hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative text-center space-y-2">
                      <div className="text-3xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-semibold text-foreground">{achievement.label}</div>
                      <div className="text-xs text-muted-foreground">{achievement.sublabel}</div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4 w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${achievement.progress}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 1 + index * 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Qualities & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Key Qualities */}
            <div>
              <h4 className="text-2xl font-bold mb-8">
                What I <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Bring</span>
              </h4>
              <div className="grid gap-6">
                {qualities.map((quality, index) => (
                  <motion.div
                    key={quality.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-start gap-4 p-6 bg-card/60 border border-border/50 rounded-xl hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className={`bg-gradient-to-r ${quality.gradient} p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0`}>
                      <quality.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {quality.title}
                      </h5>
                      <p className="text-muted-foreground leading-relaxed">{quality.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div>
              <h4 className="text-2xl font-bold mb-8">
                Awards & <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Recognition</span>
              </h4>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="group flex items-start gap-4 p-6 bg-card/60 border border-border/50 rounded-xl hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      Deadline Dhamaka Award
                    </h5>
                    <p className="text-sm text-muted-foreground mb-1">2024 • LinearLoop Pvt. Ltd.</p>
                    <p className="text-muted-foreground leading-relaxed">Recognized for exceptional project delivery and deadline management, consistently delivering complex projects ahead of schedule.</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="group flex items-start gap-4 p-6 bg-card/60 border border-border/50 rounded-xl hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      Team Player Award
                    </h5>
                    <p className="text-sm text-muted-foreground mb-1">2023 • Solute TechnoLabs LLP</p>
                    <p className="text-muted-foreground leading-relaxed">Recognized for exceptional collaboration and support, being a valuable team member who contributes to team success.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Personal Interests */}
            <div>
              <h4 className="text-2xl font-bold mb-8">
                Beyond <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Code</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group p-4 bg-card/60 border border-border/50 rounded-xl hover:bg-muted/50 transition-all duration-300 text-center backdrop-blur-sm"
                  >
                    <div className={`bg-gradient-to-r ${interest.gradient} p-3 rounded-xl mx-auto mb-3 w-fit shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <interest.icon className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                      {interest.title}
                    </h5>
                    <p className="text-xs text-muted-foreground">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24"
        >
          <div className="relative max-w-4xl mx-auto p-8 bg-gradient-to-r from-card/80 to-card/60 border border-border/50 rounded-3xl backdrop-blur-sm overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
            </div>
            
            <div className="relative text-center">
              <div className="flex items-center justify-center mb-8">
                <Sparkles className="w-8 h-8 text-blue-500 mr-4" />
                <h3 className="text-3xl font-bold">
                  My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Philosophy</span>
                </h3>
                <Sparkles className="w-8 h-8 text-purple-500 ml-4" />
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-muted-foreground italic leading-relaxed mb-8 max-w-3xl mx-auto">
                "Every line of code is an opportunity to create something beautiful, functional, and meaningful. 
                I believe in building not just applications, but experiences that make people's lives better."
              </blockquote>
              
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Clean Code</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                  <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">User First</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full">
                  <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">Passion Driven</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 