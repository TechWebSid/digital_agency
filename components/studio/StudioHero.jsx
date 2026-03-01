"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"

export default function StudioHero() {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], [0, 160])
  const yGhost = useTransform(scrollYProgress, [0, 1], [0, 70])
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const lines = ["A Digital", "Engineering", "Studio"]

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center px-6 sm:px-10 lg:px-24 overflow-hidden bg-[#07090f]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <motion.div
          style={{ y: yGhost }}
          className="absolute -top-10 -left-10 w-[70vw] h-[70vw] sm:w-[60vw] sm:h-[60vw] bg-indigo-600/10 blur-[100px] rounded-full"
        />

        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#07090f_90%)]" />
      </div>

      {/* ================= GHOST WORD ================= */}
      <motion.div
        style={{ y: yGhost, opacity: opacityFade }}
        className="absolute 
                   left-1/2 -translate-x-1/2 
                   lg:left-6 lg:translate-x-0 
                   top-1/2 -translate-y-1/2 
                   text-[30vw] sm:text-[22vw] lg:text-[18vw] 
                   font-black tracking-tighter 
                   text-white/[0.015] 
                   pointer-events-none select-none uppercase whitespace-nowrap"
      >
        TWS_SYS
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : yText,
          opacity: opacityFade
        }}
        className="relative z-10 w-full max-w-7xl mx-auto 
                   text-center lg:text-left
                   pt-24 sm:pt-28 lg:pt-0"
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-3">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`text-[clamp(2.4rem,8vw,8rem)] 
                          sm:text-[clamp(2.8rem,7vw,8rem)] 
                          font-light 
                          leading-[1.05] sm:leading-[0.95] 
                          tracking-tight
                ${line === "Studio"
                  ? "italic font-serif text-indigo-400"
                  : "text-white"
                }`}
            >
              {line}
            </motion.h1>
          </div>
        ))}

        {/* ================= MOBILE PANEL ================= */}
        <div className="mt-16 sm:mt-20 lg:hidden relative w-full flex justify-center">
          <div className="relative w-[90%] max-w-[420px] h-[260px] sm:h-[300px]">

            <div className="absolute inset-0 bg-indigo-600/20 blur-[50px] rounded-3xl" />

            <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-16 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent animate-scan" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">

                <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase">
                  System Core
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-light text-indigo-400 tracking-tight">
                    TWS
                  </div>
                  <div className="text-xs sm:text-sm text-white/40 mt-2">
                    Engineered Motion Architecture
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-white/30">
                  <span>Latency: 12ms</span>
                  <span className="text-indigo-400 animate-pulse">Online</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= SUBTEXT ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 justify-center lg:justify-start"
        >
          <div className="w-12 h-[1px] bg-indigo-500/50 hidden md:block" />
          <p className="max-w-xl text-white/40 text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-tight">
            Engineering digital architectures that prioritize
            <span className="text-white/60"> raw speed </span>
            and cinematic movement over generic templates.
          </p>
        </motion.div>
      </motion.div>

      {/* ================= DESKTOP WOW PANEL ================= */}
      <div className="absolute right-6 xl:right-24 top-1/2 -translate-y-1/2 hidden lg:block">
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -6
            const rotateY = ((x - centerX) / centerX) * 6

            e.currentTarget.style.transform =
              `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "perspective(1000px) rotateX(0deg) rotateY(0deg)"
          }}
          className="relative w-[300px] xl:w-[340px] h-[380px] xl:h-[420px] transition-transform duration-300 ease-out"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-20 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-scan" />
            </div>

            <div className="relative z-10 p-8 xl:p-10 flex flex-col justify-between h-full">

              <div className="text-xs font-mono tracking-[0.4em] text-white/30 uppercase">
                System Core
              </div>

              <div>
                <div className="text-3xl xl:text-4xl font-light text-indigo-400 tracking-tight">
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

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="hidden sm:block absolute bottom-8 right-6 lg:right-24 h-20 lg:h-24 w-px bg-white/5 overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"
        />
      </div>

      {/* ================= GLOBAL ANIMATION ================= */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  )
}