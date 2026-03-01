"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import dynamic from "next/dynamic"

const MiniTechScene = dynamic(() => import("./MiniTechScene"), {
  ssr: false,
})

export default function WorksHero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const yText = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#05070c] px-6 sm:px-10 lg:px-24"
    >
      {/* Responsive Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "clamp(40px,6vw,60px) clamp(40px,6vw,60px)",
        }}
      />

      {/* Responsive Ghost Word */}
      <div className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 text-[28vw] sm:text-[22vw] lg:text-[20vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter whitespace-nowrap">
        ARCHIVE
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          style={{ y: yText, opacity: opacityFade }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] sm:text-[10px] font-mono tracking-[0.5em] sm:tracking-[0.6em] text-indigo-400 uppercase"
          >
            Selected_Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 sm:mt-8 text-[clamp(2.5rem,10vw,7rem)] font-light leading-[0.95] tracking-tight"
          >
            Digital <br />
            <span className="italic font-serif text-indigo-400">
              Systems
            </span>{" "}
            in Motion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 sm:mt-10 text-white/40 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed"
          >
            A curated archive of engineered experiences —
            where performance, motion and architecture converge.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE MINI 3D */}
        <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[350px] lg:h-[500px]">
          <MiniTechScene />

          {/* Soft vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#05070c_90%)] pointer-events-none" />
        </div>
      </div>

      {/* Scroll Indicator (Hidden on small screens) */}
      <div className="hidden sm:block absolute bottom-10 right-10 h-20 lg:h-24 w-px bg-white/10 overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-500 to-transparent"
        />
      </div>
    </section>
  )
}