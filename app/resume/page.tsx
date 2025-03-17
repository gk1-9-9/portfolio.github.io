"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Download,
  Award,
  BookOpen,
  Briefcase,
  Code,
  Database,
  Cpu,
  Palette,
  Lightbulb,
  GraduationCap,
  Building,
  FileText,
} from "lucide-react"
import { useEffect, useState } from "react"
import { LoadingAnimation } from "@/components/loading-animation"
import { Footer } from "@/components/footer"

export default function ResumePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  if (loading) {
    return <LoadingAnimation />
  }

  return (
    <div
      className="min-h-screen bg-silver dark:bg-navy text-slate-900 dark:text-white"
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
        {/* Back to Home Link */}
        <div className="max-w-4xl mx-auto">

          {/* Heading & Download PDF */}
          <div className="flex justify-between items-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Resume
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://drive.google.com/file/d/1Y1r2edIKXynitvSINFkJ3JP2XRD161mk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold hover:bg-gold/90 text-navy rounded-full">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="space-y-12">
            {/* Education */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-gold/20">
                  <GraduationCap className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-gold">Education</h2>
              </div>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">Bachelor of Technology in Computer Science</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      Nov. 2022 - June 2026
                    </div>
                  </div>
                  <div className="text-gold mb-4 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Indian Institute of Information Technology, Nagpur, Maharashtra
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Cumulative GPA: 7.97/10</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">CBSE 12th</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      March 2017 - July 2022
                    </div>
                  </div>
                  <div className="text-gold mb-4 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Delhi Public School, Gurugram, Haryana
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Percentage : 87%</p>
                </motion.div>
              </div>
            </motion.section>

            {/* Positions of Responsibility */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-gold/20">
                  <Briefcase className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-gold">Positions of Responsibility</h2>
              </div>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">Core Member, Udyam Entrepreneurship Cell (E-Cell)</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      August 2023 - June 2024
                    </div>
                  </div>
                  <div className="text-gold mb-4 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Indian Institute of Information Technology, Nagpur, Maharashtra
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Spearheaded the E-Summit, coordinating logistics with over 10 teams to bring together 150
                      participants for 7 events, including hackathons and an IPL auction, achieving 90% satisfaction
                      from participants.
                    </li>
                    <li>
                      Curated and executed a cohesive visual identity for the E-Summit across 10 platforms (e.g.,
                      emails, brochures, website), enhancing participant engagement through consistent branding.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* Projects (combined) */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-gold/20">
                  <Code className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-gold">Projects</h2>
              </div>

              <div className="space-y-8">
                {/* PEL Market Expansion */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">PEL Market Expansion Strategy</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      February 2025
                    </div>
                  </div>
                  <div className="text-gold mb-4 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Case Study, Business Analysis
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Developed a market expansion strategy for PEL to shift from imported to in-house centrifugal
                      compressor manufacturing, targeting 20% market share through an 18-month supply chain.
                    </li>
                    <li>
                      Conducted a cost-benefit analysis, identifying a 33% cost reduction per unit, and proposed Digital
                      Twin-driven predictive maintenance and energy-efficient technology to enhance performance by 40%.
                    </li>
                    <li>
                      Designed a risk mitigation framework to address supply chain resilience, economic fluctuations,
                      and competitive pricing, ensuring long-term scalability and profitability.
                    </li>
                  </ul>
                </motion.div>

                {/* Sentify */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">Sentify: Interactive UI/UX Design Inspired by Inside Out</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      September 2024
                    </div>
                  </div>
                  <div className="text-gold mb-4 flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    Figma, UI/UX Design
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Designed an interactive prototype focused on emotional reflection, with features like a discussion
                      forum, story panel, analytics dashboard, and personalized music recommendations for user
                      engagement.
                    </li>
                    <li>
                      Implemented a Q&A and image capture process on the landing page, enabling personalized mood
                      analysis.
                    </li>
                  </ul>
                </motion.div>

                {/* Notable Notification (Blinkx) */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">Notable Notification (Blinkx Project)</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      October 2024
                    </div>
                  </div>
                  <div className="text-gold mb-4 flex items-center gap-2">
                    <Cpu className="h-4 w-4" />
                    AI-Powered Smart Notifications System
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Developed an AI-driven smart notification system, personalizing alerts based on user behavior and
                      contextual relevance.
                    </li>
                    <li>
                      Implemented NLP-based text summarization to enhance notification clarity and reduce cognitive
                      overload.
                    </li>
                    <li>
                      Integrated Blinkx&apos;s user data analytics to optimize message delivery, increasing user
                      engagement by 30%.
                    </li>
                  </ul>
                </motion.div>

                {/* Star Wars Fandom Hub */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">Star Wars Fandom Hub: A Fan Art Showcase Platform</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      November 2024
                    </div>
                  </div>
                  <div className="text-gold mb-4 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Web Development, UI/UX Design
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Developed an interactive platform for Star Wars fans to share, discover, and celebrate fan art,
                      featuring a dynamic gallery and discussion forum.
                    </li>
                    <li>
                      Designed an immersive Millennium Falcon-themed loading screen and implemented an intuitive sign-up
                      system for seamless user experience.
                    </li>
                    <li>
                      Crafted a Star Wars-inspired UI/UX design, incorporating dark mode aesthetics, themed typography,
                      and custom icons for an authentic feel.
                    </li>
                  </ul>
                </motion.div>

                {/* News-Summify */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">News-Summify</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      March 2024
                    </div>
                  </div>
                  <div className="text-gold mb-4 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Python, HTML, CSS, JavaScript
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Led the development of a unified platform integrating a web application with a browser extension,
                      enabling seamless keyword-based article discovery and real-time summarization across 150+ topics.
                    </li>
                    <li>
                      Deployed a robust scraping engine aggregating data from over 100 sources, bolstering market
                      intelligence and accelerating data-informed decision making.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* UPDATED Achievements & Certifications */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-gold/20">
                  <Award className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-gold">Achievements and Certifications</h2>
              </div>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white">1st Place in KIRIT-5.0</strong>
                        <span className="text-sm">KIMS Pune (2025)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white">1st Place in ByteCraft 2024</strong>
                        <span className="text-sm">IIIT Nagpur (2024)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white">
                          1st Place in Analytics Attax 2024
                        </strong>
                        <span className="text-sm">IIT Kanpur (2024)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white">
                          Winner of Shark Tank: Mission Sambhav 2024
                        </strong>
                        <span className="text-sm">Entrepreneurship Competition</span>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* Skills (combined) */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-gold/20">
                  <Lightbulb className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-gold">Skills</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Languages */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="h-5 w-5 text-gold" />
                    <h3 className="font-bold">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Python</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">C/C++</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">SQL</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">JavaScript</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">HTML/CSS</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Java</span>
                  </div>
                </motion.div>

                {/* Frameworks */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Cpu className="h-5 w-5 text-gold" />
                    <h3 className="font-bold">Frameworks</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">React</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Node.js</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Redux</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Flask</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Material-UI</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      React Native
                    </span>
                  </div>
                </motion.div>

                {/* UI/UX Design Skills */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="h-5 w-5 text-gold" />
                    <h3 className="font-bold">UI/UX Design Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Prototyping</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      User Research
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Wireframing</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Interaction Design
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Usability Testing
                    </span>
                  </div>
                </motion.div>

                {/* Libraries */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Database className="h-5 w-5 text-gold" />
                    <h3 className="font-bold">Libraries</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Pandas</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">NumPy</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Matplotlib</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">Seaborn</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">TensorFlow</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">PyTorch</span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      scikit-learn
                    </span>
                  </div>
                </motion.div>

                {/* Business & Data Analytics */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-5 w-5 text-gold" />
                    <h3 className="font-bold">Business &amp; Data Analytics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Market Research
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Competitive Analysis
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Data-Driven Decision Making
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Business Intelligence
                    </span>
                  </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light border border-gold/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="h-5 w-5 text-gold" />
                    <h3 className="font-bold">Soft Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Team Leadership
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Problem-Solving
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Event Management
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Visual Design
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Data Storytelling
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold">
                      Strategic Planning
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

