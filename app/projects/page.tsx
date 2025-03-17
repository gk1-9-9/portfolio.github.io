"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { ChevronLeft, Filter, Tag, Calendar, ArrowUpRight, Search } from "lucide-react"
import { LoadingAnimation } from "@/components/loading-animation"

// Project type definition
type Project = {
  id: string
  title: string
  category: string
  date: string
  description: string
  tags: string[]
  image: string
  secondaryImage?: string
  link: string
}

// Project data
const projects: Project[] = [
  {
    id: "sentify",
    title: "Sentify",
    category: "Web App",
    date: "2023",
    description:
      "Interactive UI/UX Design Inspired by Inside Out, focused on emotional reflection with features like a discussion forum, story panel, analytics dashboard, and personalized music recommendations.",
    tags: ["UI/UX", "Web App", "Emotion", "Music"],
    image: "/Sentify_main.png?height=600&width=300",
    secondaryImage: "/Sentify_back.png?height=600&width=300",
    link: "http://bit.ly/4kae47p",
  },
  {
    id: "starwars",
    title: "Star Wars Fandom Hub",
    category: "Web Platform",
    date: "2022",
    description:
      "A Fan Art Showcase Platform for Star Wars fans to share, discover, and celebrate fan art, featuring a dynamic gallery and discussion forum with an immersive Millennium Falcon-themed loading screen.",
    tags: ["Web", "Community", "Gallery", "Fan Art"],
    image: "/Starwars-1.png?height=500&width=600",
    link: "/projects/starwars",
  },
  {
    id: "news-summify",
    title: "News-Summify",
    category: "Web & Extension",
    date: "2023",
    description:
      "Keyword-based Article Discovery & Summarization platform integrating a web application with a browser extension, enabling seamless keyword-based article discovery and real-time summarization across 150+ topics.",
    tags: ["Web", "Extension", "AI", "News"],
    image: "/summary.png?height=600&width=300",
    secondaryImage: "/suggestion.png?height=800&width=400",
    link: "https://github.com/gk1-9-9/OpenHack24-Summify",
  },
  {
    id: "pel-market",
    title: "PEL Market Expansion Strategy",
    category: "Business Analysis",
    date: "2025",
    description:
      "Developed a market expansion strategy for PEL to shift from imported to in-house centrifugal compressor manufacturing, targeting 20% market share through an 18-month supply chain.",
    tags: ["Business", "Strategy", "Analysis", "Case Study"],
    image: "/pel_page-1.png?height=600&width=300",
    link: "https://drive.google.com/file/d/10FoVJF7Xo5h0q1agwreQfT1FWq9e83l8/view?usp=sharing",
  },
  {
    id: "recipe-cup",
    title: "Recipe Cup App",
    category: "Product Analysis",
    date: "2024",
    description:
      "Deconstructed the Recipe Cup App, analyzing its user-friendly navigation and chef-centric features, identifying key pain points and proposing strategic improvements to optimize delivery logistics and enhance customer retention.",
    tags: ["UX Research", "Product Analysis", "Food Tech"],
    image: "/cup-1.png?height=600&width=300",
    link: "https://drive.google.com/file/d/1gGEDafRouCGcYFevDVBQT2Azi56TyRMF/view?usp=sharing",
  },
  {
    id: "notable-notification",
    title: "Notable Notification (Blinkx)",
    category: "Business Analysis",
    date: "2024",
    description:
      "Developed an AI-driven smart notification system, personalizing alerts based on user behavior and contextual relevance with NLP-based text summarization to enhance notification clarity and reduce cognitive overload.",
    tags: ["AI", "UX", "Notifications"],
    image: "/blinx-1.png?height=600&width=300",
    link: "https://drive.google.com/file/d/1SkcMtIQ3wtIEabUoUZMbG92ghdhefddA/view",
  },
]

// Categories for filtering
const categories = [
  "All",
  "Web App",
  "Web Platform",
  "Web Design",
  "Web & Extension",
  "Business Analysis",
  "Product Analysis",,
]

export default function ProjectsPage() {
  const { theme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); 

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  if (loading) {
    return <LoadingAnimation />
  }

  
  return (
    
    <div
      className="min-h-screen bg-silver dark:bg-navy text-slate-900 dark:text-white"
      ref={containerRef}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${theme === "dark" ? "ffffff10" : "00000010"}' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >

        
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold z-50" style={{ width: progressBarWidth }} />

      {/* Header */}
      <header className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Link href="/">
              <Button variant="ghost" className="group mb-4 pl-0 hover:bg-transparent">
                <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">
              My <span className="text-gold">Projects</span>
            </h1>
            <p className="text-slate-700 dark:text-slate-300 mt-2 max-w-2xl">
              Explore my portfolio of UI/UX design, business analysis, and development projects
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 dark:bg-navy-light/20 backdrop-blur-sm border border-gold/10 focus:border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          <div className="flex items-center mr-2">
            <Filter className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`rounded-full text-xs ${
                selectedCategory === category
                  ? "bg-gold hover:bg-gold/90 text-navy"
                  : "border-gold/30 text-slate-700 dark:text-slate-300 hover:bg-gold/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </header>

      {/* Projects grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-white/5 dark:bg-navy-light/5 backdrop-blur-sm border border-gold/5 shadow-xl h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                    {/* Project image with parallax effect */}
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Secondary image that appears on hover */}
                    {project.secondaryImage && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: activeProject === project.id ? 1 : 0,
                          x: activeProject === project.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          clipPath: "polygon(70% 0, 100% 0, 100% 100%, 30% 100%)",
                        }}
                      >
                        <Image
                          src={project.secondaryImage || "/placeholder.svg"}
                          alt={`${project.title} secondary view`}
                          fill
                          className="object-cover object-center"
                        />
                      </motion.div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className="inline-flex items-center text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      asChild
                      variant="default"
                      className="w-full bg-gold hover:bg-gold/90 text-navy rounded-full group"
                    >
                      <Link href={project.link}>
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-24 h-24 mb-6 rounded-full bg-gold/10 flex items-center justify-center">
              <Search className="h-10 w-10 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-slate-700 dark:text-slate-300 max-w-md">
              No projects match your current search criteria. Try adjusting your filters or search query.
            </p>
            <Button
              variant="outline"
              className="mt-6 border-gold text-gold hover:bg-gold/10 rounded-full"
              onClick={() => {
                setSelectedCategory("All")
                setSearchQuery("")
              }}
            >
              Clear filters
            </Button>

            
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  )
}

