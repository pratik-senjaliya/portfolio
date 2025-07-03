export interface CVData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone?: string
    location: string
    linkedin: string
    github: string
    portfolio: string
  }
  summary: string
  experience: Array<{
    title: string
    company: string
    location: string
    duration: string
    description: string[]
    technologies: string[]
  }>
  skills: {
    frontend: string[]
    aiTools: string[]
    backend: string[]
    tools: string[]
  }
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    highlights: string[]
    liveUrl?: string
    githubUrl?: string
  }>
  education: Array<{
    degree: string
    institution: string
    duration: string
    location: string
  }>
  certifications?: Array<{
    name: string
    issuer: string
    date: string
  }>
}

export const cvData: CVData = {
  personalInfo: {
    name: "Pratik Senjaliya",
    title: "Frontend Developer & Full-Stack Engineer",
    email: "pratiksenjaliya@gmail.com",
    location: "India",
    linkedin: "https://www.linkedin.com/in/pratik-senjaliya-732535149/",
    github: "https://github.com/pratiksenjaliya",
    portfolio: "https://pratiksenjaliya.dev"
  },
  summary: "Results-driven Frontend Developer with 4+ years of experience building high-performance web applications. Expert in React, Next.js, and Angular with language-agnostic full-stack capabilities. Specialized in creating exceptional user experiences with TypeScript and modern development workflows. Currently leveraging AI-enhanced tools like Cursor IDE and GitHub Copilot to accelerate development and maintain high code quality.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "LinearLoop",
      location: "Remote",
      duration: "2022 - Present",
      description: [
        "Led frontend development for multiple high-traffic web applications serving 100K+ users",
        "Architected scalable React and Angular applications with TypeScript and modern state management",
        "Implemented AI-powered development workflows using Cursor IDE and GitHub Copilot, increasing productivity by 40%",
        "Mentored junior developers on React, Angular, and modern frontend best practices",
        "Collaborated with cross-functional teams to deliver pixel-perfect UI implementations",
        "Optimized application performance resulting in 30% faster load times"
      ],
      technologies: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Node.js", "Cursor IDE", "GitHub Copilot"]
    },
    {
      title: "Software Engineer",
      company: "SoluteLabs",
      location: "Ahmedabad, India",
      duration: "2021 - 2022",
      description: [
        "Developed and maintained multiple React and Angular-based web applications",
        "Collaborated with backend teams using Node.js and Python to deliver full-stack solutions",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Worked closely with UI/UX designers to translate designs into functional interfaces",
        "Participated in code reviews and maintained high code quality standards"
      ],
      technologies: ["React", "Angular", "Vue.js", "JavaScript", "TypeScript", "CSS3", "HTML5", "Git", "REST APIs"]
    },
    {
      title: "R&D Engineer",
      company: "Reolo",
      location: "Surat, India", 
      duration: "2020 - 2021",
      description: [
        "Researched and prototyped innovative frontend solutions using React and emerging technologies",
        "Explored integration of AI/ML capabilities into web applications",
        "Contributed to technical documentation and knowledge sharing initiatives",
        "Developed proof-of-concept applications to validate new technological approaches"
      ],
      technologies: ["React", "JavaScript", "Node.js", "Python", "Machine Learning", "Docker"]
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass", "Responsive Design", "Framer Motion"],
    aiTools: ["Cursor IDE", "GitHub Copilot", "Windsurf", "AI Code Generation", "Smart Debugging", "AI-Enhanced Workflows"],
    backend: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "Docker", "Webpack", "Vite", "Figma", "VS Code", "Chrome DevTools", "Postman", "Jest", "Cypress"]
  },
  projects: [
    {
      name: "Modern Portfolio Website",
      description: "Innovative portfolio website built with Next.js, featuring advanced animations, 3D effects, and AI-enhanced development workflow.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Cursor IDE"],
      highlights: [
        "Implemented advanced UI techniques including mesh gradients and 3D effects",
        "Built with AI-assisted development using Cursor IDE for accelerated workflow",
        "Optimized for performance and accessibility with perfect Lighthouse scores",
        "Responsive design with sophisticated animations and micro-interactions"
      ],
      githubUrl: "https://github.com/pratiksenjaliya/portfolio"
    },
    {
      name: "Enterprise Angular Dashboard",
      description: "Comprehensive admin dashboard built with Angular featuring real-time analytics, data visualization, and robust state management.",
      technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Angular Material", "Chart.js"],
      highlights: [
        "Implemented complex state management with NgRx",
        "Real-time data updates with WebSocket integration", 
        "Advanced data visualization with interactive charts",
        "Role-based access control and security implementation"
      ]
    },
    {
      name: "React E-commerce Platform",
      description: "Modern e-commerce solution with advanced React patterns, payment integration, and AI-enhanced development workflow.",
      technologies: ["React", "Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
      highlights: [
        "Advanced React patterns and custom hooks",
        "Seamless payment integration with Stripe",
        "AI-assisted development for rapid feature delivery",
        "Comprehensive testing with Jest and React Testing Library"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      duration: "2016 - 2020",
      location: "India"
    }
  ],
  certifications: [
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023"
    },
    {
      name: "Angular Certified Developer",
      issuer: "Google",
      date: "2023"
    },
    {
      name: "TypeScript Advanced Concepts",
      issuer: "Microsoft",
      date: "2022"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022"
    },
    {
      name: "AI-Enhanced Development Workflows",
      issuer: "Cursor AI",
      date: "2024"
    }
  ]
}

export function generateCVHTML(data: CVData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.personalInfo.name} - CV</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #0066cc;
        }
        
        .name {
            font-size: 2.5em;
            font-weight: bold;
            color: #0066cc;
            margin-bottom: 5px;
        }
        
        .title {
            font-size: 1.3em;
            color: #666;
            margin-bottom: 15px;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.9em;
        }
        
        .contact-item {
            color: #555;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 1.4em;
            font-weight: bold;
            color: #0066cc;
            margin-bottom: 15px;
            padding-bottom: 5px;
            border-bottom: 2px solid #e0e0e0;
        }
        
        .summary {
            font-size: 1.1em;
            line-height: 1.7;
            text-align: justify;
            color: #444;
        }
        
        .experience-item, .project-item, .education-item {
            margin-bottom: 20px;
            padding-left: 20px;
            border-left: 3px solid #0066cc;
            padding-left: 15px;
        }
        
        .job-title {
            font-size: 1.2em;
            font-weight: bold;
            color: #333;
        }
        
        .company {
            font-size: 1.1em;
            color: #0066cc;
            font-weight: 600;
        }
        
        .duration {
            font-size: 0.9em;
            color: #666;
            font-style: italic;
        }
        
        .description {
            margin-top: 10px;
        }
        
        .description ul {
            margin-left: 20px;
        }
        
        .description li {
            margin-bottom: 5px;
        }
        
        .technologies {
            margin-top: 10px;
            font-size: 0.9em;
        }
        
        .tech-label {
            font-weight: bold;
            color: #0066cc;
        }
        
        .tech-list {
            color: #666;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        
        .skill-category {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #0066cc;
        }
        
        .skill-category h4 {
            color: #0066cc;
            margin-bottom: 10px;
            font-size: 1.1em;
        }
        
        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .skill-item {
            background: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.85em;
            border: 1px solid #e0e0e0;
        }
        
        .project-highlights {
            margin-top: 10px;
        }
        
        .project-highlights ul {
            margin-left: 20px;
        }
        
        @media print {
            body {
                padding: 0;
                margin: 0;
            }
            
            .contact-info {
                font-size: 0.8em;
            }
            
            .section {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${data.personalInfo.name}</div>
        <div class="title">${data.personalInfo.title}</div>
        <div class="contact-info">
            <div class="contact-item">📧 ${data.personalInfo.email}</div>
            <div class="contact-item">📍 ${data.personalInfo.location}</div>
            <div class="contact-item">💼 LinkedIn</div>
            <div class="contact-item">🐙 GitHub</div>
            <div class="contact-item">🌐 Portfolio</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Professional Summary</div>
        <div class="summary">${data.summary}</div>
    </div>

    <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Frontend Development</h4>
                <div class="skill-list">
                    ${data.skills.frontend.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="skill-category">
                <h4>AI Development Tools</h4>
                <div class="skill-list">
                    ${data.skills.aiTools.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="skill-category">
                <h4>Backend & Database</h4>
                <div class="skill-list">
                    ${data.skills.backend.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="skill-category">
                <h4>Tools & Technologies</h4>
                <div class="skill-list">
                    ${data.skills.tools.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Professional Experience</div>
        ${data.experience.map(exp => `
            <div class="experience-item">
                <div class="job-title">${exp.title}</div>
                <div class="company">${exp.company} • ${exp.location}</div>
                <div class="duration">${exp.duration}</div>
                <div class="description">
                    <ul>
                        ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                </div>
                <div class="technologies">
                    <span class="tech-label">Technologies:</span>
                    <span class="tech-list">${exp.technologies.join(', ')}</span>
                </div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <div class="section-title">Featured Projects</div>
        ${data.projects.map(project => `
            <div class="project-item">
                <div class="job-title">${project.name}</div>
                <div class="description">${project.description}</div>
                <div class="project-highlights">
                    <ul>
                        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div>
                <div class="technologies">
                    <span class="tech-label">Technologies:</span>
                    <span class="tech-list">${project.technologies.join(', ')}</span>
                </div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <div class="section-title">Education</div>
        ${data.education.map(edu => `
            <div class="education-item">
                <div class="job-title">${edu.degree}</div>
                <div class="company">${edu.institution} • ${edu.location}</div>
                <div class="duration">${edu.duration}</div>
            </div>
        `).join('')}
    </div>

    ${data.certifications && data.certifications.length > 0 ? `
    <div class="section">
        <div class="section-title">Certifications</div>
        ${data.certifications.map(cert => `
            <div class="education-item">
                <div class="job-title">${cert.name}</div>
                <div class="company">${cert.issuer}</div>
                <div class="duration">${cert.date}</div>
            </div>
        `).join('')}
    </div>
    ` : ''}
</body>
</html>
  `
}

export function downloadCV() {
  const htmlContent = generateCVHTML(cvData)
  
  // Create a blob with the HTML content
  const blob = new Blob([htmlContent], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  
  // Create a temporary link and click it to download
  const link = document.createElement('a')
  link.href = url
  link.download = 'Pratik_Senjaliya_Frontend_Developer_CV.html'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  // Clean up
  URL.revokeObjectURL(url)
  
  // Also show a notification that it can be converted to PDF
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      alert('CV downloaded as HTML! You can open it in your browser and print/save as PDF for job applications.')
    }, 500)
  }
} 