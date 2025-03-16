"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-8 bg-paleyellow/20 dark:bg-navy-light/20 backdrop-blur-sm border-t border-gold/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-slate-700 dark:text-slate-300">© {currentYear} Gaurav Kumar. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Link
                href="https://github.com/gk1-9-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-gold dark:text-slate-300 dark:hover:text-gold transition-colors"
            >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link
                href="https://www.linkedin.com/in/gkgauravkumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-gold dark:text-slate-300 dark:hover:text-gold transition-colors"
            >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
                href="mailto:bt22cse001@iiitn.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-gold dark:text-slate-300 dark:hover:text-gold transition-colors"
            >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

