"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "Sid Portfolio",
    subtitle: "Personal Engineering Portfolio",
    tech: "Next.js · Motion · Performance",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    link: "https://sid-port.vercel.app",
  },
  {
    title: "Obys Clone",
    subtitle: "Creative Agency Experience",
    tech: "GSAP · Scroll · Typography",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    link: "https://obys2.vercel.app",
  },
  {
    title: "3D Dog",
    subtitle: "Interactive WebGL Experience",
    tech: "Three.js · WebGL · R3F",
    image: "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=800&q=80",
    link: "https://3d-dog.vercel.app",
  },
  {
    title: "Video Chat",
    subtitle: "Real-time Communication",
    tech: "WebRTC · Socket · Fullstack",
    image: "https://images.unsplash.com/photo-1587377838865-38ab492fdad3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW8lMjBjYWxsJTIwYXBwfGVufDB8fDB8fHww",
    link: "https://vision-talk-mo48.vercel.app/",
  },
]

export default function WorksShowcase() {
  return (
    <section className="relative bg-[#05070c] selection:bg-indigo-500/30">
      {/* GLOBAL BACKGROUND ELEMENTS (One for the whole section to save memory) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      {projects.map((project, index) => (
        <ProjectPanel key={index} project={project} index={index} />
      ))}
    </section>
  )
}

function ProjectPanel({ project, index }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const yImage = useTransform(smoothProgress, [0, 1], ["10%", "-10%"])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden z-10"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center group"
      >
        {/* TEXT */}
        <motion.div
          style={{ opacity }}
          className={`lg:col-span-5 ${
            index % 2 !== 0 ? "lg:order-last" : ""
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-indigo-500 font-mono text-xs uppercase tracking-[0.4em]">
              Project_0{index + 1}
            </span>
            <div className="h-px w-12 bg-white/10" />
          </div>

          <h2 className="text-[clamp(3rem,8vw,7rem)] font-light leading-[0.8] tracking-tighter mb-8">
            {project.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={i === 1 ? "italic font-serif text-indigo-400" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </h2>

          <p className="text-white/40 text-lg max-w-md leading-relaxed border-l border-indigo-500/30 pl-6 mb-10">
            {project.subtitle}
          </p>

          {/* LINK BUTTON */}
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-500">
              <span className="text-white group-hover:rotate-45 transition-transform duration-500">
                →
              </span>
            </div>

            <span className="relative text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 group-hover:text-white transition-colors">
              View_Live
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-indigo-500 group-hover:w-full transition-all duration-500" />
            </span>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          style={{ scale, y: yImage }}
          className="lg:col-span-7 relative"
        >
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-indigo-500/50 z-20" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-indigo-500/50 z-20" />

          <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-white/[0.02]">
            <div className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-mono tracking-widest uppercase border border-white/10">
                {project.tech}
              </span>
            </div>

            <motion.img
              loading="lazy"
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 pointer-events-none" />
          </div>

          <div className="absolute -bottom-10 -right-10 text-[12vw] font-black text-white/[0.02] pointer-events-none select-none uppercase z-0 italic">
            {project.title.split(" ")[0]}
          </div>
        </motion.div>
      </a>
    </section>
  )
}