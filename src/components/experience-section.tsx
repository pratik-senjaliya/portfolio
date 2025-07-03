"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Calendar, MapPin, Code, Users, Sparkles, FileSearch } from "lucide-react"

const experiences = [
  {
    company: "LinearLoop",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    location: "Remote",
    type: "Full-time",
    description: "Leading frontend development initiatives and mentoring junior developers while building scalable React applications.",
    highlights: [
      "Led frontend architecture decisions for 5+ enterprise applications",
      "Mentored a team of 3 junior developers on React best practices",
      "Implemented AI-assisted development workflows reducing development time by 30%",
      "Built responsive dashboards using React, Next.js, and TypeScript"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AI Tools"],
    icon: Building2,
    gradient: "from-blue-600 to-blue-500"
  },
  {
    company: "SoluteLabs",
    role: "Software Engineer",
    period: "2021 - 2022",
    location: "Ahmedabad, India",
    type: "Full-time",
    description: "Developed full-stack web applications with a focus on frontend excellence and cross-platform compatibility.",
    highlights: [
      "Developed 10+ client projects using React, Angular, and Vue.js",
      "Collaborated with backend teams using Node.js and Python APIs",
      "Implemented responsive designs improving mobile user engagement by 40%",
      "Participated in code reviews and maintained high code quality standards"
    ],
    technologies: ["React", "Angular", "Vue.js", "Python", "Django", "PostgreSQL"],
    icon: Code,
    gradient: "from-green-600 to-green-500"
  },
  {
    company: "Reolo",
    role: "R&D Engineer",
    period: "2020 - 2021",
    location: "Surat, India",
    type: "Full-time",
    description: "Focused on research and development of innovative web solutions, exploring new technologies and frameworks.",
    highlights: [
      "Researched emerging frontend technologies and frameworks",
      "Prototyped 8+ proof-of-concept applications",
      "Experimented with AI/ML integration in web applications",
      "Contributed to technical documentation and knowledge sharing"
    ],
    technologies: ["JavaScript", "React", "Node.js", "Python", "Machine Learning", "Docker"],
    icon: FileSearch,
    gradient: "from-purple-600 to-purple-500"
  }
]

export function ExperienceSection() {
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      id="experience" 
      className="py-16 lg:py-24 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900/50 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-4 heading-gradient"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My journey through different companies, roles, and technologies that shaped my expertise
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            return (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: 15 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: 15 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 80 
                }}
              >
                <motion.div
                  className="professional-card p-6 lg:p-8 relative overflow-hidden group"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                        <motion.div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${experience.gradient} flex items-center justify-center flex-shrink-0 shadow-soft`}
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-professional transition-colors duration-300">
                            {experience.role}
                          </h3>
                          <div className="flex items-center space-x-2 text-professional font-semibold mt-1">
                            <Building2 className="w-4 h-4" />
                            <span>{experience.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col lg:text-right space-y-1">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-start space-x-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-blue-200/20 dark:border-gray-700/20 rounded-md text-xs font-medium text-professional shadow-soft"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/20 dark:border-blue-800/20 shadow-soft backdrop-blur-sm">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-professional">
              4+ Years • 3 Companies • 50+ Projects • Frontend & Full-Stack
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 