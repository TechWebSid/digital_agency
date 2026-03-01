"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

const channels = [
  { id: "STRAT", title: "Strategic Build", desc: "For high-performance systems and WebGL architecture.", code: "P-77", color: "#6366f1" },
  { id: "COLLAB", title: "Agency Sync", desc: "Technical partnerships for studios and creative directors.", code: "A-12", color: "#a855f7" },
  { id: "DIRECT", title: "Open Query", desc: "General inquiries regarding technology and consulting.", code: "X-01", color: "#4f46e5" },
]

export default function SignalInitiation() {
  return (
    <section className="py-40 lg:py-60 bg-[#020408] relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-[0.5em] text-indigo-500 uppercase">Input_Method</span>
            <h2 className="text-5xl lg:text-7xl font-light tracking-tighter mt-4">
              Select Your <br />
              <span className="italic font-serif text-white/90 pr-4">Protocol</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest leading-loose">
              Security_Cleared: Level_04 <br />
              Node_Status: Encrypted
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {channels.map((item, i) => (
            <ProtocolCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProtocolCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  
  // 3D Tilt Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative aspect-[3/4] group cursor-pointer"
    >
      {/* CARD BODY */}
      <div className="absolute inset-0 bg-[#080a0f] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-indigo-500/50">
        
        {/* TOP HUD BAR */}
        <div className="h-10 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-indigo-500 transition-colors" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[8px] font-mono text-white/20 tracking-widest">{item.code}</span>
        </div>

        {/* CONTENT */}
        <div className="p-10 flex flex-col h-full justify-between pb-16">
          <div style={{ transform: "translateZ(50px)" }}>
            <h3 className="text-3xl lg:text-4xl font-light tracking-tighter leading-tight mb-6">
              {item.title}
              <motion.span 
                animate={{ opacity: hovered ? [0, 1, 0] : 0 }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="text-indigo-500"
              > _</motion.span>
            </h3>
            <p className="text-white/30 text-sm leading-relaxed max-w-[80%] group-hover:text-white/60 transition-colors">
              {item.desc}
            </p>
          </div>

          <div className="relative" style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-500">
                  <span className="text-white transform group-hover:rotate-45 transition-transform duration-500">→</span>
               </div>
               <span className="text-[10px] font-mono tracking-widest text-white/20 group-hover:text-white transition-colors">
                 INITIATE_SYNC
               </span>
            </div>
          </div>
        </div>

        {/* BACKGROUND ACCENTS */}
        <div className="absolute bottom-[-10%] right-[-10%] text-[15vw] font-black text-white/[0.02] pointer-events-none select-none italic">
          {index + 1}
        </div>
        
        {/* SCANLINE EFFECT */}
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-500/[0.03] to-transparent pointer-events-none"
        />
      </div>
    </motion.div>
  )
}