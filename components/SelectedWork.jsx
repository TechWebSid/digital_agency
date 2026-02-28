"use client"

import { useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

const projects = [
  {
    title: "Sid Portfolio",
    subtitle: "Personal Engineering Portfolio",
    url: "https://sid-port.vercel.app",
    tech: "Next.js · Motion · Performance",
    // Deep indigo abstract waves
    image: "https://images.unsplash.com/photo-1769228092677-9f2d7d7c19f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D", 
  },
  {
    title: "Obys Clone",
    subtitle: "Creative Agency Experience",
    url: "https://obys2.vercel.app",
    tech: "GSAP · Scroll · Typography",
    // Purple & Blue glass morphism shapes
    image: "https://images.unsplash.com/photo-1741454570867-4a10f31fc5e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "3D Dog",
    subtitle: "Interactive WebGL Experience",
    url: "https://3d-dog.vercel.app",
    tech: "Three.js · WebGL · R3F",
    // Futuristic tech/mechanical render
    image: "https://images.unsplash.com/photo-1728198458688-ce498a4e4a61?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZyUyMDNkfGVufDB8fDB8fHww",
  },
  {
    title: "Video Chat",
    subtitle: "Real-time Communication",
    url: "https://vision-talk-mo48.vercel.app/",
    tech: "WebRTC · Socket · Fullstack",
    // Abstract digital network/particles
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
  },
]

/* ---------------- Project Row Component ---------------- */

const ProjectRow = ({ project, index, setModal }) => {
  return (
    <motion.div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      // Handle the click for the whole row
      onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
      className="group relative border-b border-white/10 py-12 sm:py-20 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-all duration-500 hover:px-8"
    >
      <div className="flex flex-col gap-2 relative z-10">
        <span className="text-[10px] font-mono text-indigo-500/60 uppercase tracking-[0.3em]">
          [{index + 1 < 10 ? `0${index + 1}` : index + 1}]
        </span>
        <h3 className="text-[clamp(2.5rem,8vw,6rem)] font-light tracking-tighter text-white group-hover:italic group-hover:translate-x-4 transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
          {project.title.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "italic font-serif text-white/40" : ""}>{word} </span>
          ))}
        </h3>
      </div>

      <div className="flex flex-col md:items-end gap-2 mt-6 md:mt-0 relative z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-3">
          <p className="text-sm sm:text-base text-white font-medium uppercase tracking-widest">
            {project.tech}
          </p>
          {/* Subtle indicator that it's clickable */}
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">→</span>
        </div>
        <p className="text-xs text-white/40 italic font-serif">
          {project.subtitle}
        </p>
      </div>

      {/* Hover background highlight */}
      <div className="absolute inset-0 bg-white/[0.02] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />
    </motion.div>
  )
}

/* ---------------- Floating Modal Component ---------------- */

const FloatingImage = ({ modal, projects }) => {
  const { active, index } = modal
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    mouseX.set(clientX)
    mouseY.set(clientY)
  }

  // Effect to attach mouse move to window
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", handleMouseMove)
  }

  return (
    <motion.div
      style={{ left: smoothX, top: smoothY }}
      initial={{ scale: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: active ? 1 : 0 }}
      className="pointer-events-none fixed z-[60] h-[350px] w-[280px] overflow-hidden rounded-xl border border-white/20 shadow-2xl"
    >
      <div 
        className="h-full w-full transition-transform duration-500 ease-[0.76, 0, 0.24, 1]"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {projects.map((project, i) => (
          <div key={i} className="h-full w-full bg-[#111]">
             <img 
               src={project.image} 
               alt={project.title} 
               className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all"
             />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ---------------- Main Section ---------------- */

export default function SelectedWork() {
  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
  <section className="relative w-full bg-transparent pt-16 sm:pt-24 pb-32 sm:pb-40 overflow-hidden">
      
      {/* Floating Image Reveal - Only visible on Desktop */}
      <div className="hidden lg:block">
        <FloatingImage modal={modal} projects={projects} />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/10 pb-12">
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.8 }}
              className="text-[clamp(3rem,10vw,8rem)] font-light tracking-tighter leading-none text-white"
            >
              Selected <span className="italic font-serif text-indigo-400 pr-4">Works</span>
            </motion.h2>
          </div>
          
          <motion.p 
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
             className="max-w-[300px] text-xs sm:text-sm text-white/30 uppercase tracking-[0.2em] leading-relaxed mt-10 md:mt-0"
          >
            Crafting digital identities through code, cinematic motion, and brutal performance.
          </motion.p>
        </div>

        {/* PROJECTS LIST */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectRow 
              key={index} 
              index={index} 
              project={project} 
              setModal={setModal} 
            />
          ))}
        </div>

        {/* Archive / View More */}
        <div className="mt-32 flex justify-center">
          <a href="#" className="group relative overflow-hidden px-12 py-5 rounded-full border border-white/10 transition-all hover:border-indigo-500">
            <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">
              Archive Store '26
            </span>
            <div className="absolute inset-0 bg-indigo-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>
      </div>
    </section>
  )
}