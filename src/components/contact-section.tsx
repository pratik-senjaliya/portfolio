"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageSquare,
  CheckCircle,
  Loader2,
  Sparkles,
  User,
  AtSign
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pratiksenjaliya1999@gmail.com",
    href: "mailto:pratiksenjaliya1999@gmail.com",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9723176882",
    href: "tel:+919723176882",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, India",
    href: "#",
    gradient: "from-purple-500 to-pink-500"
  }
]

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/pratiksenjaliya",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/pratik-senjaliya-732535149",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/pratiksenjaliya",
    gradient: "from-cyan-500 to-blue-500"
  }
]

export function ContactSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section relative overflow-hidden bg-gradient-to-b from-background to-muted/10" ref={ref}>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-foreground">Let&rsquo;s Work </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind? Let&rsquo;s discuss how we can bring your ideas to life with cutting-edge technology and innovative design.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Get in <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&rsquo;m always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and design. Let&rsquo;s create something amazing together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center space-x-4 p-6 bg-card/60 border border-border/50 rounded-xl hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${info.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground text-base">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8 border-t border-border/50"
            >
              <h4 className="text-xl font-bold mb-6">
                Follow <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`group flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${social.gradient} text-white rounded-xl hover:shadow-lg hover:shadow-current/25 transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-r from-card/80 to-card/60 border border-border/50 rounded-3xl backdrop-blur-sm overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">Thank you for reaching out. I&rsquo;ll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <AtSign className="w-4 h-4" />
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200 backdrop-blur-sm resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-3xl backdrop-blur-sm">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Start Something Great?</h3>
            <p className="text-muted-foreground mb-6">
              Let&rsquo;s turn your vision into reality. Whether it&rsquo;s a web application, mobile app, or digital experience, I&rsquo;m here to help you succeed.
            </p>
            <motion.a
              href="mailto:pratiksenjaliya1999@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 