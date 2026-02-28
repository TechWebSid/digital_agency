"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import dynamic from "next/dynamic"

// Import with SSR disabled to prevent hydration errors with Three.js
const CapabilitiesScene = dynamic(() => import("./CapabilitiesScene"), { ssr: false })

const capabilities = [
  {
    num: "01",
    title: "Frontend Engineering",
    description: "Scalable, maintainable UI architecture built with modern frameworks and performance-first principles.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    num: "02",
    title: "WebGL & Motion",
    description: "High-end 3D interactions, shader-driven visuals, and cinematic motion systems for immersive experiences.",
    tags: ["Three.js", "GSAP", "GLSL"],
  },
  {
    num: "03",
    title: "Performance Tuning",
    description: "Core Web Vitals optimization, GPU tuning, and real-world speed improvements for ambitious startups.",
    tags: ["Vitals", "GPU", "Optimization"],
  },
  {
    num: "04",
    title: "Design Systems",
    description: "Reusable component libraries and scalable UI systems engineered for clarity and brand consistency.",
    tags: ["Figma", "Storybook", "UX"],
  },
]

const SpotlightCard = ({ item }) => {
  const divRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect()
    divRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    divRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0C]/60 backdrop-blur-xl p-8 sm:p-12 transition-all duration-500 hover:border-white/20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(99,102,241,0.15),transparent_70%)]" />

      <div className="relative z-10 flex flex-col h-full">
        <span className="text-xs font-mono tracking-[0.3em] text-indigo-500 mb-6 block">
          [{item.num}]
        </span>

        <h3 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white leading-tight mb-6 overflow-visible">
          {item.title.split(" ").map((word, i) => (
            <span
              key={i}
              className={`${i === 1 ? "italic font-serif text-indigo-200/80 pr-8 -mr-6" : ""} inline-block`}
            >
              {word}{" "}
            </span>
          ))}
        </h3>

        <p className="text-sm sm:text-base text-white/40 leading-relaxed mb-10">
          {item.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Capabilities() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Smooth parallax for the background object
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-transparent py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* --- 3D BACKGROUND LAYER --- */}
      <motion.div 
        style={{ y: yTranslate }}
        className="absolute inset-0 w-full h-full z-0 opacity-50"
      >
        <CapabilitiesScene />
        {/* Dark Vignette Overlay to blend the 3D scene edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#030303_85%)]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 sm:mb-20">
          <div className="lg:col-span-8 overflow-visible">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-[0.5em] text-indigo-500 block mb-6"
            >
              Our Expertise
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-[clamp(2.2rem,6vw,5.5rem)] font-light tracking-tighter leading-[0.95] text-white overflow-visible"
            >
              Capabilities that <br />
              <span className="italic font-serif text-indigo-300 inline-block pr-12 -mr-8">
                define
              </span>{" "}
              the future.
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-white/40 leading-relaxed max-w-sm"
            >
              We don’t just build websites; we engineer digital identities.
              Focus on clarity, cinematic motion, and brutal performance.
            </motion.p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {capabilities.map((item, index) => (
            <div key={index} className={index % 2 !== 0 ? "md:mt-24" : ""}>
              <SpotlightCard item={item} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24"
        />
      </div>

      <style jsx global>{`
        :root {
          --mouse-x: 0px;
          --mouse-y: 0px;
        }
      `}</style>
    </section>
  )
}