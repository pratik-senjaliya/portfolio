"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Calendar, MapPin, ExternalLink, Users, Code, TrendingUp, Award, ChevronRight, Briefcase, Target } from "lucide-react"

const experiences = [
  {
    company: "LinearLoop",
    role: "Senior Software Engineer",
    duration: "Jan 2023 - Present",
    location: "Remote",
    logo: "/api/placeholder/50/50",
    website: "https://linearloop.io",
    type: "Full-time",
    description: "Leading frontend development initiatives and mentoring junior developers in a fast-growing startup environment.",
    achievements: [
      "Led development of 5+ high-impact web applications using React and Next.js",
      "Mentored a team of 4 junior developers, improving code quality by 40%",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Architected scalable frontend solutions serving 10K+ daily active users"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    highlights: [
      { label: "Team Leadership", value: "4 developers", color: "cyber-blue" },
      { label: "Code Quality", value: "+40%", color: "quantum-green" },
      { label: "Performance", value: "+60%", color: "neon-purple" }
    ],
    color: "cyber-blue"
  },
  {
    company: "SoluteLabs",
    role: "Software Engineer",
    duration: "Jun 2022 - Dec 2022",
    location: "Ahmedabad, India",
    logo: "/api/placeholder/50/50",
    website: "https://solutelabs.com",
    type: "Full-time",
    description: "Developed robust web applications and collaborated with cross-functional teams to deliver exceptional user experiences.",
    achievements: [
      "Built 3 production-ready web applications with React and Angular",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Optimized application performance resulting in 35% faster load times",
      "Integrated third-party APIs and services for enhanced functionality"
    ],
    technologies: ["React", "Angular", "JavaScript", "Python", "MongoDB", "Express.js"],
    highlights: [
      { label: "Projects Delivered", value: "3", color: "neon-purple" },
      { label: "Performance Boost", value: "+35%", color: "quantum-green" },
      { label: "Client Satisfaction", value: "100%", color: "electric-cyan" }
    ],
    color: "neon-purple"
  },
  {
    company: "Reolo",
    role: "Frontend Developer",
    duration: "Mar 2021 - May 2022",
    location: "Surat, India",
    logo: "/api/placeholder/50/50",
    website: "https://reolo.in",
    type: "Full-time",
    description: "Started my professional journey focusing on frontend development and learning modern web technologies.",
    achievements: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript",
      "Learned and implemented React.js for dynamic user interfaces",
      "Worked on e-commerce platform serving 1000+ customers",
      "Gained experience in agile development and version control"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Git"],
    highlights: [
      { label: "Growth Rate", value: "300%", color: "electric-cyan" },
      { label: "User Base", value: "1K+", color: "quantum-green" },
      { label: "Skills Learned", value: "6+", color: "neural-orange" }
    ],
    color: "electric-cyan"
  }
]

const stats = [
  { label: "Years Experience", value: "4+", color: "cyber-blue", icon: Calendar },
  { label: "Companies", value: "3", color: "neon-purple", icon: Building2 },
  { label: "Projects Delivered", value: "100+", color: "electric-cyan", icon: Code },
  { label: "Team Members Mentored", value: "10+", color: "quantum-green", icon: Users }
]

export function ExperienceSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="experience" className="section relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyber-blue/5 to-neon-purple/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-electric-cyan/5 to-quantum-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-16 bg-gradient-to-b from-cyber-blue/20 to-transparent"
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-2 h-20 bg-gradient-to-b from-neon-purple/20 to-transparent"
          animate={{ scaleY: [1, 1.6, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
            Professional <span className="bg-gradient-to-r from-cyber-blue via-neon-purple to-electric-cyan bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            My career progression through innovative companies, building impactful solutions and growing as a developer
          </p>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`futuristic-card text-center group hover:border-${stat.color}/40 transition-all duration-300`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r from-${stat.color} to-${stat.color}-hover rounded-lg flex items-center justify-center mx-auto mb-4 shadow-futuristic`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-2xl font-bold text-${stat.color} mb-2 group-hover:scale-105 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-sm text-tertiary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className={`futuristic-card-elevated group hover:border-${exp.color}/40 transition-all duration-500 relative overflow-hidden`}
            >
              {/* Animated background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${exp.color}/5 via-transparent to-${exp.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className={`w-16 h-16 bg-gradient-to-r from-${exp.color} to-${exp.color}-hover rounded-xl flex items-center justify-center shadow-futuristic flex-shrink-0`}>
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-2xl font-bold text-primary group-hover:text-${exp.color} transition-colors`}>
                          {exp.company}
                        </h3>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-1 text-tertiary hover:text-${exp.color} transition-colors`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className={`text-lg font-semibold text-${exp.color} mb-1`}>{exp.role}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-tertiary">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className={`futuristic-badge text-${exp.color} border-${exp.color}/30`}>
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3">
                    {exp.highlights.map((highlight) => (
                      <div
                        key={highlight.label}
                        className={`futuristic-card text-center px-3 py-2 hover:border-${highlight.color}/40 transition-all duration-300`}
                      >
                        <div className={`text-lg font-bold text-${highlight.color} leading-none`}>
                          {highlight.value}
                        </div>
                        <div className="text-xs text-tertiary">{highlight.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary mb-6 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                    <Target className={`w-5 h-5 text-${exp.color}`} />
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyber-blue/5 transition-colors"
                      >
                        <div className={`w-6 h-6 bg-gradient-to-r from-${exp.color} to-${exp.color}-hover rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-secondary text-sm leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                    <Code className={`w-5 h-5 text-${exp.color}`} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + idx * 0.05 }}
                        className={`futuristic-badge text-${exp.color} border-${exp.color}/30 hover:bg-${exp.color}/10 transition-colors`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Growth Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 futuristic-card-elevated text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-neon-purple/5 to-electric-cyan/5 opacity-50" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-cyber-blue mr-4" />
              <h3 className="text-2xl font-bold text-primary">
                Career <span className="text-cyber-blue">Progression</span>
              </h3>
              <TrendingUp className="w-8 h-8 text-neon-purple ml-4" />
            </div>
            <p className="text-lg text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              From a junior frontend developer to a senior software engineer, my journey has been about 
              continuous learning, taking on bigger challenges, and contributing to meaningful projects 
              that impact thousands of users worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="futuristic-card text-center group hover:border-cyber-blue/40 transition-all duration-300">
                <Briefcase className="w-8 h-8 text-cyber-blue mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Professional Growth</h4>
                <p className="text-sm text-tertiary">From developer to team lead</p>
              </div>
              <div className="futuristic-card text-center group hover:border-neon-purple/40 transition-all duration-300">
                <Code className="w-8 h-8 text-neon-purple mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Technical Excellence</h4>
                <p className="text-sm text-tertiary">Mastered modern tech stack</p>
              </div>
              <div className="futuristic-card text-center group hover:border-electric-cyan/40 transition-all duration-300">
                <Users className="w-8 h-8 text-electric-cyan mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Leadership Skills</h4>
                <p className="text-sm text-tertiary">Mentoring and team building</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 