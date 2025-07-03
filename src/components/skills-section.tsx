"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  Smartphone, 
  GitBranch,
  Settings,
  Zap,
  Brain,
  Bot,
  Layers,
  Globe,
  Terminal
} from "lucide-react"
import { 
  IconBrandReact,
  IconBrandNextjs,
  IconBrandAngular,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandGit,
  IconBrandFigma,
  IconBrandDocker,
  IconBrandVscode,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandSass,
  IconBrandFramerMotion,
  IconBrandGraphql,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandFirebase,
  IconBrandAws,
  IconBrandVercel
} from "@tabler/icons-react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95, icon: IconBrandReact },
      { name: "Next.js", level: 92, icon: IconBrandNextjs },
      { name: "Angular", level: 88, icon: IconBrandAngular },
      { name: "TypeScript", level: 90, icon: IconBrandTypescript },
      { name: "JavaScript", level: 95, icon: IconBrandJavascript },
      { name: "Tailwind CSS", level: 88, icon: IconBrandTailwind },
      { name: "Framer Motion", level: 85, icon: IconBrandFramerMotion },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85, icon: IconBrandNodejs },
      { name: "Python", level: 80, icon: IconBrandPython },
      { name: "GraphQL", level: 75, icon: IconBrandGraphql },
      { name: "REST APIs", level: 88, icon: Server },
      { name: "MongoDB", level: 80, icon: IconBrandMongodb },
      { name: "MySQL", level: 75, icon: IconBrandMysql },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Settings,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    skills: [
      { name: "Git", level: 92, icon: IconBrandGit },
      { name: "Docker", level: 75, icon: IconBrandDocker },
      { name: "AWS", level: 70, icon: IconBrandAws },
      { name: "Vercel", level: 90, icon: IconBrandVercel },
      { name: "Figma", level: 85, icon: IconBrandFigma },
      { name: "AI Tools", level: 95, icon: Brain },
    ],
  },
]

const techStack = [
  { name: "React", icon: IconBrandReact, color: "text-blue-500" },
  { name: "Next.js", icon: IconBrandNextjs, color: "text-gray-900 dark:text-white" },
  { name: "Angular", icon: IconBrandAngular, color: "text-red-600" },
  { name: "TypeScript", icon: IconBrandTypescript, color: "text-blue-600" },
  { name: "Tailwind", icon: IconBrandTailwind, color: "text-cyan-500" },
  { name: "Node.js", icon: IconBrandNodejs, color: "text-green-600" },
  { name: "Python", icon: IconBrandPython, color: "text-yellow-500" },
  { name: "GraphQL", icon: IconBrandGraphql, color: "text-pink-500" },
  { name: "MongoDB", icon: IconBrandMongodb, color: "text-green-500" },
]

const frontendSpecialties = [
  {
    name: "Modern React Development",
    description: "Expert in React ecosystem with hooks, context, and modern patterns",
    icon: IconBrandReact,
    skills: ["React 18+", "Next.js 15", "TypeScript", "Server Components", "Suspense"]
  },
  {
    name: "Angular & Enterprise Apps",
    description: "Building robust enterprise applications with Angular framework",
    icon: IconBrandAngular,
    skills: ["Angular 17+", "RxJS", "NgRx", "Angular Material", "Micro-frontends"]
  },
  {
    name: "AI-Enhanced Development",
    description: "Leveraging AI tools for accelerated, high-quality development",
    icon: Brain,
    skills: ["Cursor IDE", "GitHub Copilot", "Windsurf", "AI Code Generation", "Smart Debugging"]
  }
]

export function SkillsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Frontend-focused full-stack developer with language-agnostic backend skills and AI-enhanced workflow
          </motion.p>
        </motion.div>

        {/* Frontend Specialties Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid lg:grid-cols-3 gap-6 mb-16"
        >
          {frontendSpecialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-500 backdrop-blur-sm"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-6 h-6 text-blue-500" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold">{specialty.name}</h3>
                        <p className="text-sm text-muted-foreground">{specialty.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {specialty.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-500/20 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative bg-card/50 border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-500 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <motion.div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center text-white backdrop-blur-sm",
                        category.color
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CategoryIcon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <SkillIcon className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Futuristic Progress Bar */}
                          <div className="relative w-full bg-muted/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1, 
                                delay: 0.9 + categoryIndex * 0.1 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{ x: [-100, 100] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technology Stack
          </h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {techStack.map((tech, index) => {
              const TechIcon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ y: -10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <TechIcon className={cn("w-12 h-12", tech.color)} />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Language Agnostic callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <Globe className="w-6 h-6 text-blue-500" />
            </motion.div>
            <span className="text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Language Agnostic • AI-Enhanced • Frontend Focused
            </span>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <Brain className="w-6 h-6 text-purple-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 