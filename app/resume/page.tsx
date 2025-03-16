"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, ChevronLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { LoadingAnimation } from "@/components/loading-animation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

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
        // Same SVG background from your main page:
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
          <Link href="/">
            <Button variant="ghost" className="group mb-4 pl-0 hover:bg-transparent">
              <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>

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
              <h2 className="text-2xl font-bold mb-6 text-gold">Education</h2>
              <div className="space-y-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">Bachelor of Technology in Computer Science</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Nov. 2022 - June 2026</div>
                  </div>
                  <div className="text-gold mb-4">
                    Indian Institute of Information Technology, Nagpur, Maharashtra
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Cumulative GPA: 7.97/10</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">CBSE 12th</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">March 2017 - July 2022</div>
                  </div>
                  <div className="text-gold mb-4">Delhi Public School, Gurugram, Haryana</div>
                  <p className="text-slate-700 dark:text-slate-300">Percentage : 87%</p>
                </motion.div>
              </div>
            </motion.section>

            {/* Positions of Responsibility */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <h2 className="text-2xl font-bold mb-6 text-gold">Positions of Responsibility</h2>
              <div className="space-y-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">
                      Core Member, Udyam Entrepreneurship Cell (E-Cell)
                    </h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      August 2023 - June 2024
                    </div>
                  </div>
                  <div className="text-gold mb-4">
                    Indian Institute of Information Technology, Nagpur, Maharashtra
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Spearheaded the E-Summit, coordinating logistics with over 10 teams to bring together
                      150 participants for 7 events, including hackathons and an IPL auction, achieving 90%
                      satisfaction from participants.
                    </li>
                    <li>
                      Curated and executed a cohesive visual identity for the E-Summit across 10 platforms
                      (e.g., emails, brochures, website), enhancing participant engagement through consistent
                      branding.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* Projects (combined) */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <h2 className="text-2xl font-bold mb-6 text-gold">Projects</h2>
              <div className="space-y-8">
                {/* PEL Market Expansion */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">PEL Market Expansion Strategy</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">February 2025</div>
                  </div>
                  <div className="text-gold mb-4">Case Study, Business Analysis</div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Developed a market expansion strategy for PEL to shift from imported to in-house
                      centrifugal compressor manufacturing, targeting 20% market share through an
                      18-month supply chain.
                    </li>
                    <li>
                      Conducted a cost-benefit analysis, identifying a 33% cost reduction per unit, and
                      proposed Digital Twin-driven predictive maintenance and energy-efficient technology
                      to enhance performance by 40%.
                    </li>
                    <li>
                      Designed a risk mitigation framework to address supply chain resilience, economic
                      fluctuations, and competitive pricing, ensuring long-term scalability and
                      profitability.
                    </li>
                  </ul>
                </motion.div>

                {/* Sentify */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">
                      Sentify: Interactive UI/UX Design Inspired by Inside Out
                    </h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">September 2024</div>
                  </div>
                  <div className="text-gold mb-4">Figma, UI/UX Design</div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Designed an interactive prototype focused on emotional reflection, with features
                      like a discussion forum, story panel, analytics dashboard, and personalized music
                      recommendations for user engagement.
                    </li>
                    <li>
                      Implemented a Q&A and image capture process on the landing page, enabling
                      personalized mood analysis.
                    </li>
                  </ul>
                </motion.div>

                {/* Notable Notification (Blinkx) */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">Notable Notification (Blinkx Project)</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">October 2024</div>
                  </div>
                  <div className="text-gold mb-4">AI-Powered Smart Notifications System</div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Developed an AI-driven smart notification system, personalizing alerts based on
                      user behavior and contextual relevance.
                    </li>
                    <li>
                      Implemented NLP-based text summarization to enhance notification clarity and reduce
                      cognitive overload.
                    </li>
                    <li>
                      Integrated Blinkx&apos;s user data analytics to optimize message delivery,
                      increasing user engagement by 30%.
                    </li>
                  </ul>
                </motion.div>

                {/* Star Wars Fandom Hub */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">
                      Star Wars Fandom Hub: A Fan Art Showcase Platform
                    </h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">November 2024</div>
                  </div>
                  <div className="text-gold mb-4">Web Development, UI/UX Design</div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Developed an interactive platform for Star Wars fans to share, discover, and
                      celebrate fan art, featuring a dynamic gallery and discussion forum.
                    </li>
                    <li>
                      Designed an immersive Millennium Falcon-themed loading screen and implemented an
                      intuitive sign-up system for seamless user experience.
                    </li>
                    <li>
                      Crafted a Star Wars-inspired UI/UX design, incorporating dark mode aesthetics,
                      themed typography, and custom icons for an authentic feel.
                    </li>
                  </ul>
                </motion.div>

                {/* News-Summify */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold">News-Summify</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">March 2024</div>
                  </div>
                  <div className="text-gold mb-4">Python, HTML, CSS, JavaScript</div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      Led the development of a unified platform integrating a web application with a
                      browser extension, enabling seamless keyword-based article discovery and
                      real-time summarization across 150+ topics.
                    </li>
                    <li>
                      Deployed a robust scraping engine aggregating data from over 100 sources,
                      bolstering market intelligence and accelerating data-informed decision making.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* UPDATED Achievements & Certifications */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <h2 className="text-2xl font-bold mb-6 text-gold">Achievements and Certifications</h2>
              <div className="space-y-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>
                      <strong>1st Place in KIRIT-5.0.</strong> (KIMS Pune) (2025)
                    </li>
                    <li>
                      <strong>1st Place in ByteCraft 2024</strong> (IIIT Nagpur) (2024)
                    </li>
                    <li>
                      <strong>1st Place in Analytics Attax 2024</strong> (IIT Kanpur) (2024)
                    </li>
      
                    <li>
                      <strong>Winner of Shark Tank: Mission Sambhav 2024</strong>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* Skills (combined) */}
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <h2 className="text-2xl font-bold mb-6 text-gold">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Languages */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <h3 className="font-bold mb-2">Languages</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Python, C/C++, SQL, JavaScript, HTML/CSS, Java
                  </p>
                </motion.div>

                {/* Frameworks */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <h3 className="font-bold mb-2">Frameworks</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    React, Node.js, Redux, Flask, Material-UI, React Native
                  </p>
                </motion.div>

                {/* UI/UX Design Skills */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <h3 className="font-bold mb-2">UI/UX Design Skills</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Prototyping, User Research, Wireframing, Interaction Design, Usability Testing
                  </p>
                </motion.div>

                {/* Libraries */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <h3 className="font-bold mb-2">Libraries</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Pandas, NumPy, Matplotlib, Seaborn, TensorFlow, PyTorch, scikit-learn
                  </p>
                </motion.div>

                {/* Business & Data Analytics */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <h3 className="font-bold mb-2">Business &amp; Data Analytics</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Market Research, Competitive Analysis, Data-Driven Decision Making
                  </p>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-lg bg-paleyellow/30 dark:bg-navy-light"
                >
                  <h3 className="font-bold mb-2">Soft Skills</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Event Management, Team Leadership, Visual Design, Strategic Planning, Stakeholder
                    Communication, Problem-Solving, Data Storytelling
                  </p>
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
