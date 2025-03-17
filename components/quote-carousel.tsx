"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// Quotes data
const quotes = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    role: "Co-founder of Apple",
    image: "/Steve.jpg?height=100&width=100"
  },
  {
    text: "Be sure you put your feet in the right place, then stand firm.",
    author: "Abraham Lincoln",
    role: "Abraham Lincoln",
    image: "/Abraham.jpg?height=100&width=100"
  },
  {
    text: "Good Design is as little design as possible.",
    author: "Dieter Rams",
    role: "German industrial designer",
    image: "/Dieter.jpg?height=100&width=100"
  },
//   {
//     text: "I don't think outside of the box; I think of what I can do with the box.",
//     author: "Erin Patterson",
//     role: "Author, Writer and Public Speaker",
//     image: "/placeholder.svg?height=100&width=100"
//   },
  {
    text: "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein",
    role: "Theoretical physicist",
    image: "/Albert.jpeg?height=100&width=100"
  }
]

export function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  // Handle next and previous
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    setIsAutoplay(false)
    // Restart autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length)
    setIsAutoplay(false)
    // Restart autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  return (
    <div className="relative w-full py-16 overflow-hidden bg-gradient-to-r from-gold/5 via-transparent to-gold/5">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote size={80} className="text-gold" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 rotate-180">
        <Quote size={80} className="text-gold" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gold/10"
            >
              {/* Author image */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gold/30">
                  <Image 
                    src={quotes[currentIndex].image || "/placeholder.svg"} 
                    alt={quotes[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Quote content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 text-gold">
                  <Quote size={24} className="inline-block mr-2" />
                </div>
                <p className="text-xl md:text-2xl font-medium italic mb-4 text-slate-800 dark:text-slate-200">
                  {quotes[currentIndex].text}
                </p>
                <div>
                  <p className="font-bold text-gold">{quotes[currentIndex].author}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{quotes[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-white/10 border border-gold/20 text-gold hover:bg-gold/10 transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Indicators */}
          <div className="flex items-center gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoplay(false)
                  setTimeout(() => setIsAutoplay(true), 10000)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "w-4 bg-gold" 
                    : "bg-gold/30 hover:bg-gold/50"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-white/10 border border-gold/20 text-gold hover:bg-gold/10 transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
