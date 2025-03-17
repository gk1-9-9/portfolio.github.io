"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Phone,
  Code,
  Palette,
  Database,
  Cpu,
  BookOpen,
  Award,
  Lightbulb,
  Briefcase,
} from "lucide-react"
import { useEffect, useState } from "react"
import { LoadingAnimation } from "@/components/loading-animation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingAnimation />
  }

  return (
    <div
      className="bg-silver dark:bg-navy text-slate-900 dark:text-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff10' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
    
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            About Me
          </motion.h1>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Image
                  src="/Me.png?height=400&width=300"
                  alt="Gaurav Kumar"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span>Nagpur, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gold" />
                  <span>+91 8882104355</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gold" />
                  <a href="mailto:bt22cse001@iiitn.ac.in" className="hover:text-gold transition-colors">
                    bt22cse001@iiitn.ac.in
                  </a>
                </div>

                <div className="flex gap-4 pt-2">
                  <motion.a
                    whileHover={{ y: -3, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    href="https://www.linkedin.com/in/gkgauravkumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    href="https://github.com/gk1-9-9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold/80 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl font-bold"
              >
                Hi there!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-700 dark:text-slate-300"
              >
                I'm Gaurav Kumar, a UI/UX Designer and Computer Science student at Indian Institute of Information
                Technology, Nagpur. I'm passionate about creating user-centered designs that solve real problems and
                enhance user experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-slate-700 dark:text-slate-300"
              >
                With hands-on experience in designing corporate decks and product layouts, I specialize in creating
                self-explanatory, visually impactful designs that tell a story. My work isn't just about making things
                look pretty—it's about driving decisions, engaging audiences, and simplifying complexity. I focus on
                delivering designs that speak for themselves, ensuring they resonate with both users and stakeholders.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-slate-700 dark:text-slate-300"
              >
                I'm passionate about customer-centric innovation, transforming user insights into intuitive, meaningful
                experiences. By blending my technical expertise with a deep understanding of user behavior, I create
                designs that not only enhance user satisfaction but also fuel business growth. Let's build something
                that doesn't just meet expectations—it exceeds them.
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl font-bold pt-4"
              >
                My Design Philosophy
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-slate-700 dark:text-slate-300"
              >
                I believe that great design is not just about aesthetics, but about solving real problems for real
                people. I approach each project with empathy, curiosity, and a commitment to creating solutions that are
                both beautiful and functional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="pt-6"
              >
                <Button asChild variant="default" className="bg-gold hover:bg-gold/90 text-navy rounded-full px-6">
                  <Link href="/resume">View My Resume</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Palette className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">UI/UX Design</h3>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    User Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Wireframing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Prototyping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Usability Testing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Visual Design
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Code className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">Development</h3>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    React & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    JavaScript/TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    HTML/CSS/Tailwind
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Python & Flask
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    C/C++
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Database className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">Data & Analytics</h3>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    SQL & Databases
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Pandas & NumPy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Data Visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    TensorFlow & PyTorch
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Cpu className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">Tools & Frameworks</h3>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Figma & Adobe XD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Node.js & Express
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Material UI & Tailwind
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Framer Motion
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <BookOpen className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">Business Skills</h3>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Market Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Competitive Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Data-Driven Decision Making
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Strategic Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Stakeholder Communication
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Lightbulb className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">Soft Skills</h3>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Team Leadership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Problem-Solving
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Event Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Visual Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    Data Storytelling
                  </li>
                </ul>
              </motion.div>
            </div>

            <h2 className="text-3xl font-bold mb-8">Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">1st Place in KIRIT-5.0</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Competed against 29,174 participants and secured first place in this prestigious competition.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">1st Place in ByteCraft 2024</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Built an AI-based Jaundice and Acne Detection system that won first place.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">1st Place in Analytics Attax 2024</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Won first place at IIT Kanpur's Analytics Attax competition.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gold/20">
                    <Briefcase className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl">Winner of Shark Tank: Mission Sambhav 2024</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Successfully pitched and won the Shark Tank competition.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  )
}

