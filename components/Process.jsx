"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Discover",
    italic: "Strategy",
    description: "Deep dive into brand, audience, and objectives to define a clear digital direction.",
  },
  {
    number: "02",
    title: "Architect",
    italic: "System",
    description: "Structure scalable systems, interaction logic, and performance strategy before the first line of code.",
  },
  {
    number: "03",
    title: "Build",
    italic: "Engineering",
    description: "Craft high-performance interfaces with cinematic motion and engineering precision.",
  },
  {
    number: "04",
    title: "Optimize",
    italic: "Polish",
    description: "Refine performance, polish micro-interactions, and ensure brutal real-world speed.",
  },
]

export default function Process() {
  const containerRef = useRef(null)
  
  // Scroll progress for the vertical drawing line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="relative w-full bg-transparent py-16 sm:py-32 lg:py-64 overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] whitespace-nowrap">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter">Workflow Workflow Workflow</h2>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="mb-32 sm:mb-48">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,8rem)] font-light tracking-tighter leading-none text-white"
          >
            Our <span className="italic font-serif text-indigo-400">Process</span>
          </motion.h2>
          <div className="h-[1px] w-24 bg-indigo-500 mt-8" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* THE PROGRESS LINE - Draws on scroll */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform sm:-translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 origin-top shadow-[0_0_15px_rgba(99,102,241,0.8)]"
            />
          </div>

          <div className="flex flex-col gap-32 sm:gap-48">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  const isEven = index % 2 === 0
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col sm:flex-row items-start sm:items-center w-full ${
        isEven ? "sm:justify-start" : "sm:justify-end"
      }`}
    >
      {/* Animated Dot */}
      <motion.div 
        whileInView={{ scale: [0, 1.5, 1], opacity: 1 }}
        className="absolute left-[10px] sm:left-1/2 w-4 h-4 rounded-full bg-white z-20 transform sm:-translate-x-1/2 border-4 border-indigo-600 shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
      />

      {/* Content Card */}
      <div className={`
        group relative w-full sm:w-[45%] p-8 sm:p-12 rounded-[2rem] bg-[#0A0A0C] border border-white/5 
        hover:border-indigo-500/30 transition-all duration-700 overflow-hidden
        ${isEven ? "sm:mr-auto" : "sm:ml-auto"}
      `}>
        
        {/* Hover Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10">
          <span className="text-xs font-mono tracking-[0.4em] text-indigo-500/60 uppercase block mb-8">
            Step {step.number}
          </span>

          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white mb-6 leading-none">
            {step.title} <br />
            <span className="italic font-serif text-white/20 group-hover:text-indigo-400/40 transition-colors duration-700">
              {step.italic}
            </span>
          </h3>

          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-sm group-hover:text-white/60 transition-colors duration-700">
            {step.description}
          </p>
        </div>

        {/* Decorative Corner Number */}
        <span className="absolute -bottom-8 -right-8 text-9xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-all duration-700 select-none">
          {step.number}
        </span>
      </div>
      
    </motion.div>
  )
}