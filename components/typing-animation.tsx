"use client"
import { Typewriter } from "react-simple-typewriter"

interface TypingAnimationProps {
  words: string[]
  className?: string
}

export function TypingAnimation({ words, className = "" }: TypingAnimationProps) {
  return (
    <div className={`inline-block ${className}`}>
      <Typewriter
        words={words}
        loop={0} // Infinite loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
      <style jsx>{`
        :global(.typing-cursor) {
          width: 3px;
          height: 1em;
          background-color: #fbbf24;
          display: inline-block;
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

