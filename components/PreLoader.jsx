"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const brandName = "TECHWEBSID"

export default function Preloader() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("tws_preloader_seen")

    if (hasVisited) return

    setShow(true)

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              setIsComplete(true)
              sessionStorage.setItem("tws_preloader_seen", "true")
            }, 800)
            return 100
          }
          return prev + 1
        })
      }, 20)

      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  if (!show) return null

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080b14] overflow-hidden"
        >
          {/* BACKGROUND TEXTURE */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

          {/* BRAND NAME REVEAL */}
          <div className="relative flex overflow-hidden mb-4">
            {brandName.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.05,
                }}
                className="text-4xl sm:text-7xl font-bold tracking-tighter text-white inline-block"
              >
                {char}
              </motion.span>
            ))}

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 origin-left"
            />
          </div>

          {/* STATUS TEXT */}
          <div className="flex flex-col items-center mt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] uppercase tracking-[0.6em] text-indigo-400/60 font-mono mb-2"
            >
              Initialising Digital Identity
            </motion.p>

            <div className="flex items-center gap-4">
              <span className="text-xl font-light text-white/90 tabular-nums">
                {count.toString().padStart(3, "0")}
              </span>

              <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  style={{ width: `${count}%` }}
                  className="absolute left-0 top-0 h-full bg-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* AMBIENT GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full z-[-1]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}