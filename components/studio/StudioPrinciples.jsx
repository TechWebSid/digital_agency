"use client"

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion"
import { useRef } from "react"

export default function StudioPrinciples() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <section
      ref={ref}
      className="relative bg-[#06080d] overflow-hidden pt-24 lg:pt-32 pb-40 lg:pb-60"
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ================= LEFT PROGRESS BEAM ================= */}
      <div className="absolute left-8 lg:left-24 top-0 bottom-0 w-[1px] bg-white/5">
        <motion.div
          style={{ scaleY }}
          className="absolute top-0 w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent origin-top"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-12 gap-20">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-5 lg:sticky lg:top-1/4 h-fit">

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border border-indigo-500/50 rounded-sm"
            />
            <span className="text-[9px] font-mono tracking-[0.6em] text-indigo-400 uppercase">
              System_Logic
            </span>
          </div>

          <h2 className="text-[clamp(3rem,6vw,5rem)] font-light leading-[0.85] tracking-tighter mb-10">
            The Studio <br />
            <span className="italic font-serif text-indigo-400">
              Framework
            </span>
            <span className="text-indigo-600">.</span>
          </h2>

          <div className="space-y-6 border-l border-white/10 pl-8 ml-2">
            <p className="text-white/40 text-lg leading-relaxed max-w-sm">
              We architect digital ecosystems where
              <span className="text-white/80"> velocity </span>
              meets
              <span className="text-white/80"> mechanical precision.</span>
            </p>

            <div className="pt-8 font-mono text-[10px] space-y-2 opacity-30">
              <div className="flex justify-between">
                <span>CORE_LOAD:</span>
                <span className="text-indigo-400">STABLE</span>
              </div>
              <div className="flex justify-between">
                <span>LATENCY:</span>
                <span>0.002MS</span>
              </div>
              <div className="flex justify-between">
                <span>TWS_BUILD:</span>
                <span>v.26.04</span>
              </div>
            </div>
          </div>

          {/* ================= WOW VISUAL PANEL ================= */}
          <div className="relative mt-20 hidden lg:block">

            {/* Glow */}
            <div className="absolute -left-10 top-0 w-72 h-72 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative border border-white/10 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-xl overflow-hidden">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Floating Nodes */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 w-2 h-2 bg-indigo-400 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-8 left-10 w-2 h-2 bg-purple-400 rounded-full"
              />

              {/* Bars */}
              <div className="relative flex items-end gap-3 h-32 mt-6">
                <Bar height="40%" delay={0} />
                <Bar height="70%" delay={0.2} />
                <Bar height="55%" delay={0.4} />
                <Bar height="85%" delay={0.6} />
              </div>

              <div className="mt-6 text-[9px] font-mono text-white/30 tracking-widest uppercase">
                Structural Integrity Matrix
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE CARDS ================= */}
        <div className="lg:col-span-7 space-y-32 lg:pt-40">
          <PrincipleCard
            number="01"
            title="Clarity"
            desc="Complex systems simplified through structured hierarchy and intelligent interaction design."
          />
          <PrincipleCard
            number="02"
            title="Depth"
            desc="Layered motion and spatial awareness create immersive digital perception."
          />
          <PrincipleCard
            number="03"
            title="Velocity"
            desc="Raw speed and GPU-first engineering ensure fluid experiences."
          />
          <PrincipleCard
            number="04"
            title="Precision"
            desc="Micro-interactions crafted with mechanical discipline and realism."
          />
        </div>
      </div>
    </section>
  )
}

/* ================= BAR COMPONENT ================= */
function Bar({ height, delay }) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-3 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-sm"
    />
  )
}

/* ================= CARD ================= */
function PrincipleCard({ number, title, desc }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-8, 8])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

      <div className="relative border border-white/5 bg-white/[0.01] backdrop-blur-3xl p-10 lg:p-16 rounded-[2rem] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.03]">
        <div className="flex justify-between items-start mb-12">
          <div>
            <span className="text-[10px] font-mono text-indigo-500 mb-1">
              MODULE // {number}
            </span>
            <div className="h-px w-12 bg-indigo-500/50" />
          </div>
          <div className="text-[8px] font-mono text-white/10 uppercase tracking-widest">
            Architectural_Logic
          </div>
        </div>

        <h3 className="text-5xl lg:text-7xl font-light tracking-tighter mb-8 group-hover:translate-x-4 transition-transform duration-500">
          {title}
          <span className="text-indigo-500 group-hover:opacity-100 opacity-0 transition-opacity">
            _
          </span>
        </h3>

        <p className="text-white/30 text-lg lg:text-xl leading-relaxed max-w-lg group-hover:text-white/60 transition-colors duration-500">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}