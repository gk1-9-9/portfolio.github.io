"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { LoadingAnimation } from "@/components/loading-animation"
import { LoadingAnimationmain } from "@/components/loading-animation-1"
import { Footer } from "@/components/footer"
import { TypingAnimation } from "@/components/typing-animation"
import { QuoteCarousel } from "@/components/quote-carousel"
import { SpeedInsights } from "@vercel/speed-insights/next"


// Project data
const projects = [  
  {
    id: "sentify",
    title: "Sentify",
    emoji: "🧠",
    description: "Interactive UI/UX Design Inspired by Inside Out",
    image: "/Sentify_main.png?height=600&width=300",
    secondaryImage: "/Sentify_back.png?height=600&width=300",
    link: "https://www.figma.com/proto/3AJTdLIQxEDhWmt6y5kpOb/designathon?page-id=0%3A1&node-id=10-836&starting-point-node-id=10%3A836&t=52IKbJpSs9jQiV0J-1",
  },
  {
    id: "starwars",
    title: "Star Wars Fandom Hub",
    emoji: "✨",
    description: "A Fan Art Showcase Platform",
    image: "/Starwars-1.png?height=500&width=600",
    link: "https://www.figma.com/proto/AttwGLzhNcZ3fQ0hianHGb/Starwars?page-id=0%3A1&node-id=1-3&p=f&viewport=308%2C484%2C0.15&t=XXIOaisCZQeTmM23-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=102%3A120",
  },
  {
    id: "news-summify",
    title: "News-Summify",
    emoji: "📰",
    description: "Keyword-based Article Discovery & Summarization",
    image: "/summary.png?height=600&width=300",
    secondaryImage: "/suggestion.png?height=800&width=400",
    link: "https://github.com/gk1-9-9/OpenHack24-Summify",
  },
]

export default function Home() {
  const { theme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const containerRef = useRef(null)
  const projectsRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  useEffect(() => {
    setMounted(true);
  
    // Determine if it's the first visit in this session
    const firstVisit = sessionStorage.getItem("hasVisited") !== "true";
    setIsFirstVisit(firstVisit);
  
    // Use 5500ms for first visit, 2000ms for returning visitors
    const timer = setTimeout(() => {
      setLoading(false);
      if (firstVisit) {
        sessionStorage.setItem("hasVisited", "true");
      }
    }, firstVisit ? 5500 : 2000);
  
    return () => clearTimeout(timer);
  }, []);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  if (loading) {
    return isFirstVisit ? <LoadingAnimationmain /> : <LoadingAnimation />
  }
  

  return (
    <div
      className="min-h-screen bg-silver dark:bg-navy text-slate-900 dark:text-white"
      ref={containerRef}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${
          theme === "dark" ? "ffffff10" : "00000010"
        }' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Hero Section with Mountain Background */}
      <motion.section className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
        {/* Mountain Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Mountain-hero1.png?height=1080&width=1920"
            alt="Mountain path with light beam"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl mb-4 text-white z-10"
        >
          Hi there!
        </motion.h2>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight text-center text-white z-10"
        >
          I&apos;m Gaurav Kumar a{" "}
          <span className="text-gold dark:text-gold">
            <TypingAnimation
              words={[
                "UI/UX Designer",
                "Front End Developer",
                "Product Manager",
                "Software Engineer",
                "Product Designer",
                "Creative Coder",
              ]}
            />
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 z-10"
        >
          <Button asChild variant="default" className="bg-gold hover:bg-gold/90 text-navy rounded-full px-6 shadow-lg">
            <Link href="/projects">View My Work</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        >
          <p className="text-sm mb-2 text-white">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronRight size={24} className="rotate-90 text-white" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Quote Carousel Section */}
      <QuoteCarousel />

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gold">Projects</span>
            </h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              A selection of my recent work in UI/UX design and development
            </p>
          </motion.div>

          {/* Project Cards Design */}
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl shadow-2xl ${index % 2 === 0 ? "bg-gradient-to-br from-gold/5 to-navy/10" : "bg-gradient-to-bl from-navy/10 to-gold/5"}`}
                >
                  {/* Content wrapper */}
                  <div className="flex flex-col lg:flex-row items-center">
                    {/* Image section */}
                    <div className={`w-full lg:w-7/12 relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          className="h-full w-full"
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover object-center"
                          />
                        </motion.div>

                        {/* Secondary image overlay */}
                        {project.secondaryImage && (
                          <motion.div
                            className="absolute inset-0 opacity-0"
                            animate={{
                              opacity: activeProject === project.id ? 0.9 : 0,
                              clipPath:
                                activeProject === project.id
                                  ? "polygon(70% 0, 100% 0, 100% 100%, 30% 100%)"
                                  : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                            }}
                            transition={{ duration: 0.4 }}
                          >
                            <Image
                              src={project.secondaryImage || "/placeholder.svg"}
                              alt={`${project.title} secondary view`}
                              fill
                              className="object-cover object-center"
                            />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Text section */}
                    <div
                      className={`w-full lg:w-5/12 p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : "lg:text-left"}`}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                        <span className="text-2xl">{project.emoji}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                      <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">{project.description}</p>
                      <motion.div whileHover={{ x: index % 2 === 1 ? -5 : 5 }} transition={{ duration: 0.2 }}>
                        <Button
                          asChild
                          variant="default"
                          className="bg-gold hover:bg-gold/90 text-navy rounded-full px-6 shadow-lg group"
                        >
                          <Link href={project.link}>
                            View
                            <ArrowRight
                              className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${index % 2 === 1 ? "order-first -ml-2 mr-2 group-hover:-translate-x-1 rotate-180" : ""}`}
                            />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div
                  className={`absolute -z-10 ${index % 2 === 0 ? "-bottom-10 -right-10" : "-bottom-10 -left-10"} w-40 h-40 rounded-full bg-gold/5 blur-3xl`}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* View all projects button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button
              asChild
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 rounded-full px-8 py-6 text-lg group"
            >
              <Link href="/projects">
                View All Projects
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-4 md:px-8"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,215,0,0.05) 0%, transparent 70%)",
        }}
      >
        <h2 className="text-center text-4xl font-bold mb-12">
          About <span className="text-gold">Me</span>
        </h2>
        <div className="max-w-5xl mx-auto bg-white/10 dark:bg-navy-light/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center border border-gold/5">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Image
                src="/Me.png?height=400&width=500"
                alt="Gaurav Kumar at desk"
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              I&apos;m Gaurav Kumar, a UI/UX Designer and Computer Science student at Indian Institute of Information
              Technology, Nagpur. I&apos;m passionate about creating user-centered designs that solve real problems and
              enhance user experiences.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              With a background in Computer Science and a keen eye for design, I bring technical knowledge and creative
              problem-solving to my projects. I&apos;ve won competitions like ByteCraft and Analytics Attax, showcasing
              my ability to create innovative and effective solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" className="bg-gold hover:bg-gold/90 text-navy rounded-full px-6">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 rounded-full px-6">
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

