//disables eslint for this file
/* eslint-disable */
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
  Terminal,
  Wrench,
  Star,
  TrendingUp,
  Award,
  Monitor,
  Cpu,
  Lightbulb
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
    title: "Frontend Mastery",
    icon: Code,
    color: "cyber-blue",
    description: "Modern frontend frameworks and libraries",
    skills: [
      { name: "React", level: 95, color: "cyber-blue" },
      { name: "Next.js", level: 92, color: "neon-purple" },
      { name: "Angular", level: 88, color: "electric-cyan" },
      { name: "TypeScript", level: 90, color: "quantum-green" },
      { name: "JavaScript", level: 95, color: "neural-orange" },
      { name: "HTML/CSS", level: 98, color: "cyber-blue" }
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "neon-purple",
    description: "Server-side technologies and data management",
    skills: [
      { name: "Node.js", level: 85, color: "quantum-green" },
      { name: "Python", level: 80, color: "neon-purple" },
      { name: "PostgreSQL", level: 82, color: "cyber-blue" },
      { name: "MongoDB", level: 78, color: "electric-cyan" },
      { name: "Redis", level: 75, color: "neural-orange" },
      { name: "REST APIs", level: 90, color: "quantum-green" }
    ]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "quantum-green",
    description: "Essential tools for modern development workflow",
    skills: [
      { name: "Git", level: 95, color: "cyber-blue" },
      { name: "Docker", level: 80, color: "electric-cyan" },
      { name: "AWS", level: 75, color: "neural-orange" },
      { name: "Webpack", level: 85, color: "neon-purple" },
      { name: "Jest/Testing", level: 88, color: "quantum-green" },
      { name: "CI/CD", level: 82, color: "cyber-blue" }
    ]
  },
  {
    title: "Design & UX",
    icon: Palette,
    color: "electric-cyan",
    description: "User interface and experience design",
    skills: [
      { name: "Figma", level: 85, color: "neon-purple" },
      { name: "UI/UX Design", level: 82, color: "electric-cyan" },
      { name: "Responsive Design", level: 95, color: "cyber-blue" },
      { name: "Accessibility", level: 88, color: "quantum-green" },
      { name: "Design Systems", level: 90, color: "neural-orange" },
      { name: "Prototyping", level: 80, color: "electric-cyan" }
    ]
  }
]

const certifications = [
  { name: "React Professional", issuer: "Meta", year: "2023", color: "cyber-blue" },
  { name: "Next.js Certified", issuer: "Vercel", year: "2023", color: "neon-purple" },
  { name: "Angular Expert", issuer: "Google", year: "2022", color: "electric-cyan" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2022", color: "quantum-green" }
]

const aiTools = [
  { 
    name: "Cursor IDE", 
    description: "AI-powered development environment",
    icon: Cpu,
    color: "cyber-blue"
  },
  { 
    name: "GitHub Copilot", 
    description: "AI pair programming assistant",
    icon: Bot,
    color: "neon-purple"
  },
  { 
    name: "Claude AI", 
    description: "Advanced reasoning and coding assistance",
    icon: Brain,
    color: "electric-cyan"
  },
  { 
    name: "Custom AI Tools", 
    description: "Building AI-enhanced workflows",
    icon: Lightbulb,
    color: "quantum-green"
  }
]

export function SkillsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="skills" className="section relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-quantum-green/5 to-neural-orange/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-electric-cyan/5 to-cyber-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <motion.div
          className="absolute top-1/2 left-1/3 w-2 h-24 bg-gradient-to-b from-cyber-blue/20 to-transparent"
          animate={{ scaleY: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
            Skills & <span className="bg-gradient-to-r from-cyber-blue via-neon-purple to-electric-cyan bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </motion.div>

        {/* Frontend Specialization Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="futuristic-card-elevated text-center mb-16 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-neon-purple/5 to-electric-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-futuristic">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Frontend <span className="text-cyber-blue">Specialization</span>
            </h3>
            <p className="text-lg text-secondary mb-6">
              Specialized in React ecosystem with extensive experience in Next.js and Angular frameworks
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="futuristic-badge text-cyber-blue border-cyber-blue/30">React Expert</span>
              <span className="futuristic-badge text-neon-purple border-neon-purple/30">Next.js Pro</span>
              <span className="futuristic-badge text-electric-cyan border-electric-cyan/30">Angular Developer</span>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              className={`futuristic-card group hover:border-${category.color}/40 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r from-${category.color} to-${category.color}-hover rounded-lg shadow-futuristic`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold text-primary group-hover:text-${category.color} transition-colors`}>
                    {category.title}
                  </h3>
                  <p className="text-sm text-tertiary">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium text-secondary group-hover:text-${skill.color} transition-colors`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-semibold text-${skill.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="futuristic-progress-bar">
                      <motion.div
                        className={`futuristic-progress-fill bg-gradient-to-r from-${skill.color} to-${skill.color}-hover`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Professional <span className="text-cyber-blue">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className={`futuristic-card text-center group hover:border-${cert.color}/40 transition-all duration-300`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r from-${cert.color} to-${cert.color}-hover rounded-lg flex items-center justify-center mx-auto mb-4 shadow-futuristic`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className={`font-bold text-primary group-hover:text-${cert.color} transition-colors mb-2`}>
                  {cert.name}
                </h4>
                <p className="text-sm text-secondary mb-1">{cert.issuer}</p>
                <p className="text-xs text-tertiary">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI-Enhanced Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="futuristic-card-elevated relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-neon-purple/5 opacity-50" />
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-futuristic">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                AI-Enhanced <span className="text-cyber-blue">Workflow</span>
              </h3>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Leveraging cutting-edge AI tools to enhance productivity and code quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className={`futuristic-card text-center group hover:border-${tool.color}/40 transition-all duration-300`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r from-${tool.color} to-${tool.color}-hover rounded-lg flex items-center justify-center mx-auto mb-4 shadow-futuristic`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`font-bold text-primary group-hover:text-${tool.color} transition-colors mb-2`}>
                    {tool.name}
                  </h4>
                  <p className="text-sm text-tertiary">{tool.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-secondary italic">
                "Embracing AI as a collaborative partner to deliver exceptional results faster and more efficiently"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 