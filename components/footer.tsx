"use client"

import { Github, Linkedin, Mail, ChevronUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/gk1-9-9",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gkgauravkumar/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "mailto:bt22cse001@iiitn.ac.in",
      icon: <Mail className="w-5 h-5" />,
    },
  ]

  return (
    <footer className="w-full py-12 bg-silver/30 dark:bg-navy-light/30 backdrop-blur-sm border-t border-gold/10">
      <div className="container mx-auto px-4">
        {/* Top section with back to top button */}
        <div className="flex justify-center mb-10">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
            className="flex flex-col items-center text-slate-700 dark:text-slate-300 hover:text-gold dark:hover:text-gold transition-colors group"
          >
            <ChevronUp className="w-6 h-6 mb-1 group-hover:text-gold transition-colors" />
            <span className="text-sm">Back to top</span>
          </motion.button>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">
              Gaurav Kumar
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-center md:text-left max-w-xs">
              Engineering the future. | Designed with passion. | Built for impact.

            </p>
          </motion.div>

          {/* Navigation links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-gold dark:hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-navy/50 border border-gold/10 text-slate-700 hover:text-gold dark:text-slate-300 dark:hover:text-gold transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section with copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-gold/10 text-center"
        >
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            © {currentYear} Gaurav Kumar. All rights reserved.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xs mt-2">
            Designed & Built with <span className="text-gold">❤️</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

