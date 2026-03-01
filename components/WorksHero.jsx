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

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#05070c] px-6 lg:px-24"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ghost word */}
      <div className="absolute text-[20vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter">
        ARCHIVE
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          style={{ y: yText, opacity: opacityFade }}
          className="lg:col-span-7"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-mono tracking-[0.6em] text-indigo-400 uppercase"
          >
            Selected_Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 text-[clamp(3rem,8vw,7rem)] font-light leading-[0.9] tracking-tight"
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
            className="mt-10 text-white/40 max-w-xl text-lg leading-relaxed"
          >
            A curated archive of engineered experiences —
            where performance, motion and architecture converge.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE MINI 3D */}
        <div className="lg:col-span-5 h-[400px] lg:h-[500px] relative">
          <MiniTechScene />

          {/* Soft vignette for blending */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#05070c_90%)] pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 h-24 w-px bg-white/10 overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-500 to-transparent"
        />
      </div>
    </section>
  )
}