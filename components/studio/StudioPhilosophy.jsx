"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

export default function StudioPhilosophy() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25
  })

  const rotateWall = useTransform(smooth, [0, 1], [-12, 12])
  const yWall = useTransform(smooth, [0, 1], [-120, 120])

  return (
    <section
      ref={ref}
      className="relative bg-[#07090f] overflow-hidden py-32 lg:py-40"
    >
      {/* ================= MASSIVE ROTATED WORD WALL ================= */}
      <motion.div
        style={{ rotate: rotateWall, y: yWall }}
        className="absolute left-[-8vw] top-0 text-[16vw] font-black text-white/[0.02] tracking-tighter leading-none select-none pointer-events-none"
      >
        STRUCTURE
        <br />
        SYSTEMS
        <br />
        ENGINEERING
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-24">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-24">
          <div className="w-16 h-px bg-indigo-500" />
          <span className="text-[10px] font-mono tracking-[0.5em] text-indigo-400 uppercase">
            Philosophy
          </span>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          <FloatingCard
            index="01"
            title="Systems First"
            desc="Architecture defines everything. Visual direction and motion follow structural clarity."
          />

          <FloatingCard
            index="02"
            title="Performance Native"
            desc="Speed is embedded at foundation level — not optimized after design decisions."
          />

          <FloatingCard
            index="03"
            title="Intentional Motion"
            desc="Every animation carries logic, physical reasoning, and narrative alignment."
          />

          <FloatingCard
            index="04"
            title="Long-Term Thinking"
            desc="We build digital systems that evolve — not templates that expire."
          />

        </div>
      </div>

      {/* ================= ENERGY LINES ================= */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-1/3 w-[40%] h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute right-1/4 bottom-1/3 w-[30%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>
    </section>
  )
}

/* ================= FLOATING CARD ================= */

function FloatingCard({ index, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-indigo-600/10 blur-[70px] rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 lg:p-12 transition-all duration-500 group-hover:border-indigo-500/40">

        <div className="text-[10px] font-mono tracking-[0.4em] text-indigo-400 mb-6">
          {index}
        </div>

        <h3 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 group-hover:italic transition-all">
          {title}
        </h3>

        <p className="text-white/40 leading-relaxed text-lg">
          {desc}
        </p>

      </div>
    </motion.div>
  )
}