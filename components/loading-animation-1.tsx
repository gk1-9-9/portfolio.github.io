"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingAnimationmain() {
  const [showName, setShowName] = useState(false)
  const [namePosition, setNamePosition] = useState("center")
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const [quoteOpacity, setQuoteOpacity] = useState(0)

  useEffect(() => {
    // Show quote after 1 second
    const quoteTimer = setTimeout(() => {
      setShowQuote(true)
    }, 1000)

    // Fade in quote over 3 seconds
    const quoteOpacityTimer = setTimeout(() => {
      setQuoteOpacity(1)
    }, 1500)

    // Show name after 3.5 seconds
    const nameTimer = setTimeout(() => {
      setShowName(true)
    }, 3500)

    // Move name to top right after 4.5 seconds
    const positionTimer = setTimeout(() => {
      setNamePosition("topRight")
    }, 4500)

    // Complete loading after 5.5 seconds
    const completeTimer = setTimeout(() => {
      setLoadingComplete(true)
    }, 5500)

    return () => {
      clearTimeout(quoteTimer)
      clearTimeout(quoteOpacityTimer)
      clearTimeout(nameTimer)
      clearTimeout(positionTimer)
      clearTimeout(completeTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-silver dark:bg-navy z-50">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Clock Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: loadingComplete ? 0 : 1,
            scale: loadingComplete ? 0.8 : 1,
            y: loadingComplete ? -50 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="relative w-40 h-40 md:w-48 md:h-48"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Clock face */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gold/30"
              />

              {/* Hour markers */}
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="10"
                  x2="50"
                  y2={i % 3 === 0 ? "15" : "12"}
                  stroke="currentColor"
                  strokeWidth={i % 3 === 0 ? "3" : "1.5"}
                  className="text-gold"
                  transform={`rotate(${i * 30} 50 50)`}
                />
              ))}

              {/* Minute markers */}
              {[...Array(60)].map(
                (_, i) =>
                  i % 5 !== 0 && (
                    <line
                      key={i}
                      x1="50"
                      y1="10"
                      x2="50"
                      y2="11"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gold/70"
                      transform={`rotate(${i * 6} 50 50)`}
                    />
                  ),
              )}

              {/* Hour hand */}
              <motion.line
                x1="50"
                y1="50"
                x2="50"
                y2="25"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-gold"
                animate={{ rotate: 360 }}
                transition={{ duration: 60 * 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ transformOrigin: "50px 50px" }}
              />

              {/* Minute hand */}
              <motion.line
                x1="50"
                y1="50"
                x2="50"
                y2="20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-gold"
                animate={{ rotate: 360 }}
                transition={{ duration: 60 * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ transformOrigin: "50px 50px" }}
              />

              {/* Second hand */}
              <motion.line
                x1="50"
                y1="50"
                x2="50"
                y2="15"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                className="text-red-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ transformOrigin: "50px 50px" }}
              />

              {/* Center dot */}
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-gold" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Quote Text */}
        {showQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: quoteOpacity }}
            transition={{ duration: 2 }}
            className="text-center mb-8 max-w-md px-4"
          >
            <p className="text-lg italic text-slate-700 dark:text-slate-300 leading-relaxed">
              "Design's beauty lies not in pixel perfection, but in the unique experiences crafted from imperfect
              iterations."
            </p>
          </motion.div>
        )}

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loadingComplete ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-slate-700 dark:text-slate-300"
          >
            Crafting experiences...
          </motion.p>
        </motion.div>

        {/* Name Animation */}
        <AnimatePresence>
          {showName && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                top: namePosition === "topRight" ? "2rem" : "auto",
                right: namePosition === "topRight" ? "2rem" : "auto",
                position: namePosition === "topRight" ? "absolute" : "relative",
                translateX: namePosition === "topRight" ? "0%" : "-50%",
                translateY: namePosition === "topRight" ? "0%" : "-50%",
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className={`${namePosition === "topRight" ? "text-right" : "text-center"}`}
            >
              <h1
                className={`font-bold bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent ${namePosition === "topRight" ? "text-2xl" : "text-4xl md:text-5xl"}`}
              >
                Gaurav Kumar
              </h1>
              {namePosition !== "topRight" && (
                <p className="text-slate-700 dark:text-slate-300 mt-2">UI/UX Designer & Front End Developer</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

