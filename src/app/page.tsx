import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Github, Linkedin, Mail, Heart, Code, Palette } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      {/* Page Sections */}
      <div className="space-y-section">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      
      {/* Enhanced Footer */}
      <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container relative z-10 py-16">
          <div className="text-center space-y-8">
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://github.com/pratiksenjaliya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-card/50 border border-border/50 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/pratik-senjaliya-732535149" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-card/50 border border-border/50 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
              </a>
              <a 
                href="mailto:pratiksenjaliya1999@gmail.com"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-card/50 border border-border/50 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-green-600 transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Email</span>
              </a>
            </div>
            
            {/* Copyright & Tech Stack */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span>© 2024 Pratik Senjaliya. Crafted with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>using</span>
              </div>
              
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Next.js</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
                  <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full">
                  <Palette className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">Tailwind CSS</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground italic">
                Designed for the future, built for today ✨
              </p>
            </div>
            
            {/* Quote */}
            <div className="max-w-md mx-auto p-4 bg-card/30 border border-border/30 rounded-2xl backdrop-blur-sm">
              <p className="text-sm text-muted-foreground italic">
                &ldquo;Every line of code is a step towards turning imagination into reality&rdquo;
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
