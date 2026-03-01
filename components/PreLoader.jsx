"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const brand = "TECHWEBSID"

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem("tws_loader_v2")
    if (seen) return

    setVisible(true)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setComplete(true)
            sessionStorage.setItem("tws_loader_v2", "true")
          }, 800)
          return 100
        }
        return prev + Math.random() * 8
      })
    }, 60)

    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05070c] overflow-hidden"
        >
          {/* GRID BACKGROUND */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#05070c_85%)]" />

          {/* CONTENT */}
          <div className="relative flex flex-col items-center">

            {/* BRAND */}
            <div className="overflow-hidden flex">
              {brand.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "120%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tighter"
                  style={{
                    color: i > 3 ? "#818cf8" : "white",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-[10px] tracking-[0.6em] uppercase font-mono text-indigo-400"
            >
              Initialising Digital Architecture
            </motion.p>

            {/* PROGRESS */}
            <div className="mt-10 w-64 h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div
                style={{ width: `${progress}%` }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />

              {/* SCAN LINE */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </div>

            {/* COUNTER */}
            <motion.span
              className="mt-6 text-sm text-white/50 tabular-nums"
              animate={{ opacity: 1 }}
            >
              {Math.min(Math.floor(progress), 100).toString().padStart(3, "0")}
            </motion.span>

            {/* MICRO HUD */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-10 text-[9px] font-mono tracking-[0.5em] uppercase text-white/40"
            >
              Core_System_Online · v3.2.0
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}