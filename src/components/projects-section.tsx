//disables eslint for this file
/* eslint-disable */
"use client";

import * as React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Star,
  Code,
  Zap,
  Users,
  TrendingUp,
  Award,
  X,
  Play,
  Calendar,
  Tag,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Project data with enhanced information
const projects = [
  {
    id: 1,
    title: "KUKUFM Platform",
    description:
      "Comprehensive CMS portal, web application, and admin dashboard for audio streaming platform",
    longDescription:
      "Built comprehensive CMS portal, web application, and admin dashboard for audio streaming platform. Developed scalable architecture to handle thousands of concurrent users, implemented content management system for audio uploads, and created intuitive admin dashboard for platform management.",
    image: "/api/placeholder/600/400",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "CMS",
      "Audio Streaming",
      "Admin Dashboard",
    ],
    liveUrl: "https://kukufm.com",
    githubUrl: "#",
    featured: true,
    status: "Live",
    year: "2023",
    category: "Full-Stack",
    stats: [
      { label: "Users", value: "100K+", color: "cyber-blue" },
      { label: "Audio Content", value: "10K+", color: "quantum-green" },
      { label: "Uptime", value: "99.9%", color: "neon-purple" },
    ],
    color: "cyber-blue",
  },
  {
    id: 2,
    title: "Jupiter Health Portal",
    description:
      "Patient portal featuring complex assessment workflows and interactive quiz modules",
    longDescription:
      "Led development of patient portal featuring complex assessment workflows and interactive quiz modules. Implemented secure patient data management, real-time assessment scoring, and comprehensive reporting dashboard for healthcare providers.",
    image: "/api/placeholder/600/400",
    tags: [
      "React",
      "TypeScript",
      "Healthcare",
      "Assessment",
      "Quiz System",
      "Patient Portal",
    ],
    liveUrl: "https://jupiter.health",
    githubUrl: "#",
    featured: true,
    status: "Live",
    year: "2023",
    category: "Frontend",
    stats: [
      { label: "Patients", value: "50K+", color: "neon-purple" },
      { label: "Assessments", value: "100K+", color: "electric-cyan" },
      { label: "Security", value: "HIPAA", color: "quantum-green" },
    ],
    color: "neon-purple",
  },
  {
    id: 3,
    title: "Vimaan AI Integration",
    description:
      "Angular-based SSO authentication and Java Spring Boot backend services",
    longDescription:
      "Implemented Angular-based SSO authentication and contributed to Java Spring Boot backend services. Developed secure authentication flows, integrated with enterprise identity providers, and optimized backend API performance.",
    image: "/api/placeholder/600/400",
    tags: [
      "Angular",
      "Java Spring Boot",
      "SSO",
      "Authentication",
      "Backend",
      "Enterprise",
    ],
    liveUrl: "https://vimaan.ai",
    githubUrl: "#",
    featured: false,
    status: "Live",
    year: "2022",
    category: "Full-Stack",
    stats: [
      { label: "Enterprise Users", value: "1K+", color: "electric-cyan" },
      { label: "SSO Integration", value: "Success", color: "quantum-green" },
      { label: "Security", value: "Enterprise", color: "cyber-blue" },
    ],
    color: "electric-cyan",
  },
  {
    id: 4,
    title: "Vretta Assessment Tools",
    description:
      "Browser extension for softlock functionality in educational assessment platform",
    longDescription:
      "Created browser extension for softlock functionality in educational assessment platform. Developed secure assessment environment, implemented anti-cheating measures, and created seamless user experience for educational institutions.",
    image: "/api/placeholder/600/400",
    tags: [
      "Browser Extension",
      "JavaScript",
      "Assessment",
      "Education",
      "Security",
      "Anti-Cheating",
    ],
    liveUrl: "https://vretta.com",
    githubUrl: "#",
    featured: false,
    status: "Live",
    year: "2022",
    category: "Frontend",
    stats: [
      { label: "Institutions", value: "100+", color: "quantum-green" },
      { label: "Assessments", value: "500K+", color: "cyber-blue" },
      { label: "Security", value: "High", color: "neon-purple" },
    ],
    color: "quantum-green",
  },
  {
    id: 5,
    title: "AI Development Research",
    description:
      "Exploring generative AI applications, prompt engineering, and automated workflow systems",
    longDescription:
      "Currently exploring generative AI applications, prompt engineering, and automated workflow systems. Researching integration of AI tools into development workflows, creating automation scripts, and developing AI-enhanced development practices.",
    image: "/api/placeholder/600/400",
    tags: [
      "AI",
      "Generative AI",
      "Prompt Engineering",
      "Automation",
      "Research",
      "OpenAI",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    status: "In Progress",
    year: "2024",
    category: "AI/ML",
    stats: [
      { label: "AI Tools", value: "10+", color: "quantum-green" },
      { label: "Automation", value: "80%", color: "cyber-blue" },
      { label: "Efficiency", value: "+150%", color: "neon-purple" },
    ],
    color: "quantum-green",
  },
];

const categories = [
  "All",
  "Full-Stack",
  "Frontend",
  "AI/ML",
  "Healthcare",
  "Education",
];

export function ProjectsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      ref={ref}
      id="projects"
      className="section relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-neon-purple/5 to-electric-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-quantum-green/5 to-neural-orange/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

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
            Featured{" "}
            <span className="bg-gradient-to-r from-cyber-blue via-neon-purple to-electric-cyan bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A collection of projects showcasing my skills in modern web
            development and innovative solutions
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
              <div
                className={`absolute inset-0 bg-gradient-to-r from-${project.color}/5 via-transparent to-${project.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

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
                  <div
                    className={`absolute top-4 left-4 futuristic-status-badge text-${project.color} bg-${project.color}/10 border-${project.color}/30`}
                  >
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
                      <h3
                        className={`text-xl font-bold text-primary group-hover:text-${project.color} transition-colors`}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-tertiary text-sm">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.stats.map((stat, idx) => (
                      <div key={stat.label} className="text-center">
                        <div className={`text-sm font-bold text-${stat.color}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-tertiary">
                          {stat.label}
                        </div>
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
                      <h3 className="text-3xl font-bold text-primary mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-secondary leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {selectedProject.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="futuristic-card text-center"
                        >
                          <div
                            className={`text-2xl font-bold text-${stat.color} mb-1`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-sm text-tertiary">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        Technologies Used
                      </h4>
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
  );
}
