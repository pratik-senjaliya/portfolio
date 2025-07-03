"use client"

import * as React from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, FolderOpen, Mail, Sparkles, Github, Linkedin } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn, scrollToElement } from "@/lib/utils"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  )
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const section = href.slice(1)
    scrollToElement(section)
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass backdrop-blur-xl border-b border-border/50 shadow-professional"
            : "bg-transparent"
        )}
        style={{ backgroundColor, backdropFilter: backdropBlur }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Professional Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-20 animate-pulse-ring" />
              </div>
              <span className="text-xl font-bold gradient-text">Pratik</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                    "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/30 dark:hover:to-indigo-950/30",
                    "hover:shadow-subtle",
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 shadow-subtle"
                      : "text-muted-foreground hover:text-primary"
                  )}
                  whileHover={{ 
                    y: -1,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <motion.a
                href="https://github.com/pratiksenjaliya"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-2 text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/pratik-senjaliya"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-2 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              
              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "md:hidden p-2 rounded-lg transition-all duration-300",
                  "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900",
                  "border border-blue-200/50 dark:border-gray-700/50",
                  "hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-700 dark:hover:to-gray-800",
                  "hover:shadow-subtle"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Subtle bottom border */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-primary opacity-20" />
        )}
      </motion.nav>

      {/* Professional Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                opacity: { duration: 0.2 }
              }}
              className={cn(
                "fixed top-16 right-0 bottom-0 w-80 max-w-sm",
                "bg-background/95 backdrop-blur-xl",
                "border-l border-border/50 shadow-professional"
              )}
            >
              {/* Content */}
              <div className="flex flex-col p-6 space-y-2 h-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold heading-gradient">Navigation</h3>
                  <div className="w-12 h-0.5 bg-gradient-primary mx-auto mt-2 rounded-full" />
                </div>
                
                {/* Navigation items */}
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "flex items-center space-x-4 w-full p-4 rounded-lg text-left transition-all duration-300",
                        "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50",
                        "dark:hover:from-blue-950/30 dark:hover:to-indigo-950/30",
                        "hover:shadow-subtle border border-transparent group",
                        activeSection === item.href.slice(1)
                          ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200/30 text-primary shadow-subtle"
                          : "hover:text-primary text-muted-foreground"
                      )}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                      </motion.div>
                      <span className="font-medium">{item.name}</span>
                      
                      {/* Active indicator */}
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-primary rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
                
                {/* Footer */}
                <div className="mt-auto pt-6">
                  <div className="text-center">
                    <div className="section-divider" />
                    <p className="text-xs text-muted-foreground font-mono">
                      Professional Portfolio 2024
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 