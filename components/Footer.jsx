"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const socialLinks = [
  { title: "Instagram", href: "#" },
  { title: "LinkedIn", href: "#" },
  { title: "Twitter", href: "#" },
  { title: "GitHub", href: "#" },
]

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Works", href: "#" },
  { title: "Process", href: "#" },
  { title: "Studio", href: "#" },
]

export default function Footer() {
  const container = useRef(null)

  return (
    <footer 
      ref={container}
      className="relative w-full bg-[#070708] pt-24 pb-10 overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* BIG CALL TO ACTION */}
        <div className="relative border-b border-white/5 pb-24 mb-16">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-mono tracking-[0.5em] text-indigo-500 uppercase block mb-8">
              Have an idea?
            </span>
            <a 
              href="mailto:hello@techwebsid.com" 
              className="group relative inline-block text-[clamp(3rem,12vw,10rem)] font-light tracking-tighter leading-none text-white transition-all duration-700 hover:italic"
            >
              Tell us <span className="italic font-serif text-indigo-400">Everything</span>
              {/* Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-700 ease-in-out" />
            </a>
          </motion.div>
        </div>

        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="/" className="text-2xl font-black tracking-tighter flex items-baseline text-white mb-8">
               <span>Tech</span>
               <span className="italic font-serif text-indigo-400 -mx-1 pr-2">Web</span>
               <span>Sid</span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Engineering high-performance digital identities with cinematic motion and brutal precision. Based in the future.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20">Sitemap</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-indigo-400 transition-colors uppercase tracking-widest">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20">Socials</h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-indigo-400 transition-colors uppercase tracking-widest">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="md:col-span-3 space-y-6 md:text-right">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20">Get in touch</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              24/7 Digital Studio <br />
              Remote First · Global Coverage <br />
              hello@techwebsid.com
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © 2026 <span className="text-white/40">TechWebSid</span> — All Rights Reserved
          </p>

          <div className="text-[10px] uppercase tracking-[0.2em] text-white/20">
             Loc: <span className="text-white/40">28.53° N, 80.12° E</span>
          </div>
        </div>
      </div>

      {/* AESTHETIC GRADIENT BLOB */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  )
}