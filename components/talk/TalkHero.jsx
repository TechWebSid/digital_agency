"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

export default function TalkHero() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Smooth springs for high-end inertia
  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 250]), { stiffness: 100, damping: 30 })

  return (
    <section 
      ref={containerRef} 
      className="relative h-[110vh] flex items-center justify-center bg-[#020408] overflow-hidden"
    >
      {/* ================= LEFT SIDE: TECHNICAL HUD ================= */}
      <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-24 pointer-events-none">
        {/* Signal Strength Meter */}
        <div className="space-y-4">
          <div className="text-[9px] font-mono tracking-[0.3em] text-indigo-500/60 uppercase">Signal_Strength</div>
          <div className="flex gap-1 items-end h-12">
            {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
              <motion.div 
                key={i}
                animate={{ height: [`${h*100}%`, `${(h*0.5)*100}%`, `${h*100}%`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="w-[2px] bg-indigo-500/40"
              />
            ))}
          </div>
        </div>

        {/* Vertical Coordinates */}
        <div className="flex flex-col gap-2 font-mono text-[9px] text-white/10 uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
          <span>LAT: 28.6139° N</span>
          <div className="h-12 w-px bg-white/5 mx-auto my-4" />
          <span>LON: 77.2090° E</span>
        </div>
      </div>

      {/* ================= RIGHT SIDE: STATUS DATA ================= */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 text-right space-y-32 pointer-events-none">
        {/* Rotating Circular HUD */}
        <div className="relative w-24 h-24 ml-auto">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-white/10 rounded-full"
          />
          <div className="absolute inset-4 border border-indigo-500/20 rounded-full flex items-center justify-center">
            <span className="text-[8px] font-mono text-indigo-400 animate-pulse">SYNC</span>
          </div>
        </div>

        {/* Transmission Status */}
        <div className="space-y-2">
          <div className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">Transmission_Type</div>
          <div className="text-xs font-light text-white/60 tracking-widest uppercase italic">Secure_Direct_v3</div>
        </div>
      </div>

      {/* ================= BACKGROUND: THE DEPTH LAYER ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        {/* Sonar Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 2.5], opacity: [0.15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"
          />
        ))}

        {/* Refractive Glows */}
        <motion.div style={{ y: smoothY }} className="absolute -top-[10%] -left-[5%] w-[40vw] h-[40vw] bg-indigo-600/10 blur-[120px] rounded-full" />
        <motion.div style={{ y: useTransform(smoothY, (v) => v * -1) }} className="absolute -bottom-[10%] -right-[5%] w-[40vw] h-[40vw] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* ================= CENTER CONTENT ================= */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, -50]), opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
        className="relative z-10 text-center"
      >
        {/* Magnetic Bracket Branding */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-8 h-[1px] bg-indigo-500/50" />
          <span className="text-[10px] font-mono tracking-[1em] text-indigo-400 uppercase ml-4">Established_2026</span>
          <div className="w-8 h-[1px] bg-indigo-500/50" />
        </div>

        <h1 className="text-[clamp(3.5rem,14vw,9.5rem)] font-light tracking-tighter leading-[0.8] mb-12">
          Initiate <br /> 
          <span className="italic font-serif text-white/95">Transmission</span>
        </h1>

        <div className="flex flex-col items-center gap-12">
          <p className="max-w-xl text-white/30 text-lg md:text-xl font-light leading-relaxed px-6">
            We architect systems where communication becomes a 
            <span className="text-white/60 italic font-serif"> seamless protocol</span>. 
            Connect your vision to our engineering terminal.
          </p>

          {/* Cinematic Scroll Indicator */}
          <div className="relative group cursor-pointer">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <div className="w-[1px] h-20 bg-gradient-to-b from-indigo-500 to-transparent" />
              <span className="text-[8px] font-mono tracking-[0.5em] text-white/20 uppercase mt-4 group-hover:text-indigo-400 transition-colors">
                Decrypt_Scroll
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= BOTTOM METADATA ================= */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
        <div className="flex items-baseline gap-2">
          <span className="text-[40px] font-light text-white/5 tracking-tighter tabular-nums">001</span>
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Global_Node</span>
        </div>
        <div className="text-[10px] font-mono text-white/10 uppercase tracking-[0.5em]">
          Built_By_TechWebSid
        </div>
      </div>
    </section>
  )
}