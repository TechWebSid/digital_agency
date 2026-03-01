"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef, useMemo } from "react"

export default function StudioHero() {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // PERFORMANCE FIX: Using 'will-change' and limiting the transform range
  // We use useMemo to prevent unnecessary re-renders of the transform logic
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yGhost = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Optimize the text lines to avoid mapping inside the return if not needed
  const lines = ["A Digital", "Engineering", "Studio"]

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden bg-[#07090f]"
    >
      {/* ================= OPTIMIZED BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* FIX: Large blurs are GPU killers. 
          We use a lower opacity and 'backface-visibility' to force GPU rendering.
        */}
        <motion.div
          style={{ y: yGhost, willChange: "transform" }}
          className="absolute -top-20 -left-20 w-[50vw] h-[50vw] bg-indigo-600/10 blur-[120px] rounded-full"
        />
        
        {/* Static noise overlay for texture without extra layers */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#07090f_90%)]" />
      </div>

      {/* ================= GHOST WORD ================= */}
      <motion.div
        style={{ 
          y: yGhost, 
          willChange: "transform",
          opacity: opacityFade 
        }}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-[20vw] font-black tracking-tighter text-white/[0.015] pointer-events-none select-none uppercase"
      >
        TWS_SYS
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        style={{ 
          y: shouldReduceMotion ? 0 : yText, 
          opacity: opacityFade,
          willChange: "transform, opacity" 
        }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] // Quicker, smoother ease
              }}
              className={`text-[clamp(3.5rem,10vw,8.5rem)] font-light leading-[0.9] tracking-tighter
                ${line === "Studio" ? "italic font-serif text-indigo-400" : "text-white"}
              `}
            >
              {line}
            </motion.h1>
          </div>
        ))}
        {/* ================= MOBILE SYSTEM PANEL ================= */}
<div className="mt-20 lg:hidden relative w-full flex justify-center">

  <div className="relative w-[85%] max-w-[380px] h-[300px]">

    {/* Glow behind */}
    <div className="absolute inset-0 bg-indigo-600/20 blur-[60px] rounded-3xl" />

    {/* Glass Card */}
    <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-20 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent animate-[scan_5s_linear_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">

        <div className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase">
          System Core
        </div>

        <div>
          <div className="text-3xl font-light text-indigo-400 tracking-tight">
            TWS
          </div>
          <div className="text-sm text-white/40 mt-2">
            Engineered Motion Architecture
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-white/30">
          <span>Latency: 12ms</span>
          <span className="text-indigo-400 animate-pulse">Online</span>
        </div>

      </div>

    </div>
  </div>
</div>

        {/* Subtext with simplified animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row md:items-center gap-8"
        >
          <div className="w-12 h-[1px] bg-indigo-500/50 hidden md:block" />
          <p className="max-w-xl text-white/40 text-lg md:text-xl font-light leading-relaxed tracking-tight">
            Engineering digital architectures that prioritize 
            <span className="text-white/60"> raw speed </span> 
            and cinematic movement over generic templates.
          </p>
        </motion.div>
      </motion.div>

      {/* ================= HUD DETAILS (BETTER THAN GHOST TEXT) ================= */}
      <div className="absolute bottom-10 left-6 lg:left-24 flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">
        <span className="text-indigo-500/50">●</span> 
        <span>Core_System_Online</span>
        <span className="ml-4 opacity-50">v3.2.0</span>
      </div>

      {/* ================= OPTIMIZED SCROLL INDICATOR ================= */}
      <div className="absolute bottom-10 right-6 lg:right-24 h-24 w-px bg-white/5 overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"
        />
      </div>
      {/* ================= INTERACTIVE SYSTEM GRID (WOW ELEMENT) ================= */}
<div className="absolute right-10 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block">
  <div
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8

      e.currentTarget.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }}
    className="relative w-[340px] h-[420px] transition-transform duration-300 ease-out"
  >

    {/* Glass Panel */}
    <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Moving scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-24 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-[scan_4s_linear_infinite]" />
      </div>

      {/* Inner content */}
      <div className="relative z-10 p-10 flex flex-col justify-between h-full">

        <div className="text-xs font-mono tracking-[0.4em] text-white/30 uppercase">
          System Core
        </div>

        <div>
          <div className="text-4xl font-light text-indigo-400 tracking-tight">
            TWS
          </div>
          <div className="text-sm text-white/40 mt-2">
            Engineered Motion Architecture
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-white/30">
          <span>Latency: 12ms</span>
          <span className="text-indigo-400">Online</span>
        </div>

      </div>
    </div>
  </div>
</div>
    </section>
  )
}