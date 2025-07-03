"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-xl bg-card/50 border border-border/50 animate-pulse" />
    )
  }

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5 text-orange-500" />
      case "dark":
        return <Moon className="h-5 w-5 text-blue-400" />
      default:
        return <Monitor className="h-5 w-5 text-purple-500" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Switch to dark mode"
      case "dark":
        return "Switch to system theme"
      default:
        return "Switch to light mode"
    }
  }

  const getThemeName = () => {
    switch (theme) {
      case "light":
        return "Light"
      case "dark":
        return "Dark"
      default:
        return "System"
    }
  }

  const getBackgroundGradient = () => {
    switch (theme) {
      case "light":
        return "from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 border-orange-200/50 dark:border-orange-800/30"
      case "dark":
        return "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200/50 dark:border-blue-800/30"
      default:
        return "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200/50 dark:border-purple-800/30"
    }
  }

  return (
    <motion.button
      onClick={handleThemeChange}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-gradient-to-r ${getBackgroundGradient()} rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {/* Icon with rotation animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {getIcon()}
        </motion.div>
      </AnimatePresence>

      {/* Theme name text */}
      <motion.span 
        className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200 hidden sm:block"
        key={theme}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {getThemeName()}
      </motion.span>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Active indicator */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-background"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  )
} 