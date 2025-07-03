"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, FolderOpen, Mail, Sparkles } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
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

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5" 
        : "bg-transparent"
    )}>
      <nav className="container">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <Link 
              href="#home" 
              onClick={() => handleNavClick("#home")}
              className="group flex items-center space-x-3 text-xl font-bold"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                  PS
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Pratik Senjaliya
                </div>
                <div className="text-xs text-muted-foreground font-medium">Frontend Developer</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-2 shadow-lg">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group",
                    activeSection === item.href.slice(1)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <item.icon className={cn(
                    "w-4 h-4 relative z-10 transition-all duration-300",
                    activeSection === item.href.slice(1) ? "text-white" : "group-hover:scale-110"
                  )} />
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.slice(1) && (
                    <Sparkles className="w-3 h-3 text-white/80 relative z-10 animate-pulse" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden sm:block"
            >
              <ThemeToggle />
            </motion.div>
            
            {/* Mobile Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="sm:hidden"
            >
              <ThemeToggle />
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-3 rounded-xl bg-card/80 border border-border/50 hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl mx-4 mb-4 rounded-2xl shadow-xl"
            >
              <div className="py-6 px-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "relative flex items-center space-x-4 w-full px-6 py-4 rounded-xl text-left font-semibold transition-all duration-300 group overflow-hidden",
                      activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                      />
                    )}
                    <item.icon className={cn(
                      "w-6 h-6 relative z-10 transition-all duration-300",
                      activeSection === item.href.slice(1) ? "text-white" : "group-hover:scale-110"
                    )} />
                    <span className="relative z-10 text-lg">{item.name}</span>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="relative z-10 ml-auto"
                      >
                        <Sparkles className="w-5 h-5 text-white/80 animate-pulse" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 