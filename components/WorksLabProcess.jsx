"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    title: "Discovery Mapping",
    desc: "Project goals translated into structural digital architecture."
  },
  {
    title: "System Architecture",
    desc: "Performance-first design decisions before visuals."
  },
  {
    title: "Motion Integration",
    desc: "Physics-driven animation layered over stable systems."
  },
  {
    title: "Performance Optimization",
    desc: "GPU tuning, bundle strategy, real-world stress testing."
  }
]

export default function WorksLabProcess() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20
  })

  const progressHeight = useTransform(smooth, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={ref}
      className="relative bg-[#04060a] py-40 lg:py-60 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ghost word */}
      <div className="absolute left-[-10vw] top-0 text-[18vw] font-black text-white/[0.02] tracking-tighter pointer-events-none select-none">
        PROCESS
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-12 gap-20">

        {/* LEFT SIDE */}
        <div className="lg:col-span-4 relative">

          <div className="sticky top-1/3">

            <span className="text-[10px] font-mono tracking-[0.5em] text-indigo-400 uppercase">
              Workflow
            </span>

            <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-light leading-[0.9] tracking-tight">
              Engineering <br />
              <span className="italic font-serif text-indigo-400">
                Process
              </span>
            </h2>

            <p className="mt-10 text-white/40 max-w-sm leading-relaxed">
              Every project follows a structured digital system —
              where logic, motion and performance converge.
            </p>

            {/* Vertical progress beam */}
            <div className="relative mt-16 h-64 w-[1px] bg-white/10">
              <motion.div
                style={{ height: progressHeight }}
                className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE STEPS */}
        <div className="lg:col-span-8 space-y-32">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="group relative border border-white/10 rounded-3xl p-12 bg-white/[0.02] backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-700"
            >
              <span className="text-[10px] font-mono tracking-[0.4em] text-indigo-400 uppercase">
                Step {i + 1}
              </span>

              <h3 className="mt-6 text-4xl font-light tracking-tight group-hover:italic transition-all">
                {step.title}
              </h3>

              <p className="mt-6 text-white/40 text-lg leading-relaxed max-w-xl">
                {step.desc}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_70%)] rounded-3xl pointer-events-none" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}