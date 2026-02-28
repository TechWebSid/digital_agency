"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hamburger from "hamburger-react"

const menuItems = [
  { title: "Works", href: "#", num: "01" },
  { title: "Expertise", href: "#", num: "02" },
  { title: "Studio", href: "#", num: "03" },
  { title: "Talk", href: "#", num: "04" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuLinkVars = {
    initial: { y: "100%", rotate: 5 },
    animate: (i) => ({
      y: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i },
    }),
    exit: (i) => ({
      y: "100%",
      transition: { duration: 0.4, delay: 0.05 * i },
    }),
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[9999] py-5 sm:py-6 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 flex items-center justify-between">
          
          {/* BRAND - Unified "One Word" Look */}
          <a 
            href="/" 
            className="text-xl sm:text-2xl font-black tracking-[-0.05em] flex items-baseline text-white relative z-[10000] overflow-visible"
          >
            <span>Tech</span>
            {/* -mx-1 pulls the words together, pr-2 ensures the italic doesn't clip */}
            <span className="italic font-serif text-indigo-400 -mx-1 pr-2">Web</span>
            <span>Sid</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="md:hidden relative z-[10000]">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} rounded color="#ffffff" />
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#070708] z-[9998] flex flex-col md:hidden"
          >
             {/* ... (Background Aesthetic Elements remain the same) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-indigo-600/20 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-600/10 blur-[100px] rounded-full" />
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 relative z-10 mt-10">
              <div className="flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <div key={i} className="overflow-hidden border-b border-white/5 pb-4">
                    <motion.div
                      custom={i}
                      variants={menuLinkVars}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex items-baseline gap-4"
                    >
                      <span className="text-[10px] font-mono text-indigo-500/60 font-bold">
                        {item.num}
                      </span>
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-5xl font-light tracking-tighter text-white active:italic active:text-indigo-400"
                      >
                        {item.title}
                      </a>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="p-10 flex justify-between items-end border-t border-white/5"
            >
              <div className="space-y-2">
                <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase">Digital Studio</p>
                <div className="flex gap-4 text-[10px] text-white/40 uppercase tracking-widest">
                  <span>In</span> / <span>Be</span> / <span>Tw</span>
                </div>
              </div>
              <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase">© 2026</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}