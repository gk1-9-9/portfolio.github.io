"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Compass } from 'lucide-react'

export function ScrollIndicator() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  })
  
  // Transform values for animation
  const y = useTransform(scrollYProgress, [0, 1], [0, 400])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  
  return (
    <motion.div
      ref={ref}
      className="fixed right-8 top-1/3 z-40 hidden lg:block"
      style={{ y, opacity }}
    >
      <motion.div 
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 backdrop-blur-md border border-gold/30 text-gold shadow-lg"
        style={{ rotate, scale }}
        whileHover={{ scale: 1.2 }}
      >
        <Compass className="h-8 w-8" />
      </motion.div>
    </motion.div>
  )
}
