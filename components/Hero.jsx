"use client"

import React, { useRef } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false })

const slideUp = {
  initial: { y: "110%" },
  animate: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } }
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-transparent text-white flex flex-col">
      
      {/* 3D Background - Adjusted for Mobile to be more central */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none scale-125 sm:scale-100">
        <HeroScene />
      </div>

      {/* Texture Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.1] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Main Container - Changed justify-between to justify-center on mobile */}
      <div className="relative z-20 container mx-auto px-6 flex-1 flex flex-col justify-center sm:justify-between py-10 lg:py-20">
        
        {/* Top Meta - Hidden on very small screens or moved to improve spacing */}
        <div className="absolute top-12 left-6 right-6 flex justify-between items-start sm:relative sm:top-0 sm:left-0 sm:right-0">
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <p className="text-[9px] tracking-[0.3em] uppercase text-white/40 font-bold">
              Engineering Digital Experiences
            </p>
          </motion.div>
          <motion.p variants={fadeIn} initial="initial" animate="animate" className="hidden sm:block text-[10px] tracking-[0.3em] uppercase text-white/40 text-right font-bold">
            Based in India<br/>Digital Studio
          </motion.p>
        </div>

        {/* Main Content Area - Centered for Mobile */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left">
          
          <div className="overflow-visible pb-2 sm:pb-4 w-full">
            <motion.h1 
              variants={slideUp} 
              initial="initial" 
              animate="animate"
              className="text-[clamp(3.2rem,16vw,10.5rem)] font-black leading-[0.8] tracking-[-0.05em] flex flex-wrap justify-center sm:justify-start items-baseline whitespace-nowrap"
            >
              <span className="bg-gradient-to-br from-indigo-100 to-indigo-400 bg-clip-text text-transparent">Tech</span>
              <span className="stroke-web italic relative px-1 -mx-1 group cursor-default">Web</span>
              <span className="bg-gradient-to-tr from-purple-400 to-indigo-300 bg-clip-text text-transparent">Sid</span>
            </motion.h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mt-6 sm:mt-10">
            <div className="overflow-hidden py-1"> 
              <motion.h2 
                variants={slideUp} initial="initial" animate="animate"
                className="text-[clamp(1.5rem,7vw,4.5rem)] font-light leading-[1.1] tracking-tight text-white/90"
              >
                Engineering <br className="hidden sm:block"/>
                <span className="italic font-serif bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent sm:pr-4">
                  Digital
                </span> Presence
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}
              className="max-w-[260px] sm:max-w-[320px] text-[11px] sm:text-sm md:text-base text-white/30 leading-relaxed font-light"
            >
              Merging logic with aesthetics to build high-performance digital products that convert.
            </motion.p>
          </div>

          {/* Mobile CTA - Moved here for better thumb reach/visual balance */}
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="mt-12 sm:hidden">
              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em]">
                Explore Work
              </button>
          </motion.div>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="hidden sm:flex justify-between items-end">
          <motion.div variants={fadeIn} initial="initial" animate="animate">
              <button className="group relative px-10 py-5 rounded-full border border-white/10 overflow-hidden transition-all duration-500 hover:border-indigo-500/50 bg-white/5 backdrop-blur-sm">
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-500">
                  Explore Work
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
              </button>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-24 bg-gradient-to-b from-indigo-500/50 to-transparent" />
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .stroke-web {
          -webkit-text-stroke: 1.5px rgba(167, 139, 250, 0.5);
          color: transparent;
        }
        @media (max-width: 640px) {
          .stroke-web { -webkit-text-stroke: 1.2px rgba(167, 139, 250, 0.6); }
        }
      `}</style>
    </section>
  )
}