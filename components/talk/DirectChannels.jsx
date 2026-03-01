"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const contacts = [
  { label: "Neural Link", value: "hello@techwebsid.com", type: "Email" },
  { label: "Secure Line", value: "+91 98765 43210", type: "WhatsApp" },
  { label: "Time Sync", value: "cal.com/techwebsid", type: "Schedule" },
]

export default function DirectChannels() {
  const [copied, setCopied] = useState(null)

  const handleCopy = (val, i) => {
    navigator.clipboard.writeText(val)
    setCopied(i)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-40 bg-[#030508] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col gap-px bg-white/5 border border-white/5">
          {contacts.map((contact, i) => (
            <motion.div 
              key={i}
              onClick={() => handleCopy(contact.value, i)}
              className="relative group bg-[#030508] p-8 lg:p-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer overflow-hidden"
            >
              {/* PROGRESS FILL ON HOVER */}
              <motion.div 
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-indigo-500/5 z-0"
              />

              <div className="relative z-10">
                <span className="text-[10px] font-mono text-indigo-400 block mb-2">{contact.type}</span>
                <h4 className="text-xl text-white/40 group-hover:text-white transition-colors uppercase tracking-widest font-light">
                  {contact.label}
                </h4>
              </div>

              <div className="relative z-10 mt-6 md:mt-0 flex items-center gap-6">
                <span className="text-lg md:text-2xl font-mono tracking-tighter text-white/80 transition-all group-hover:text-indigo-300">
                  {copied === i ? "DATA_COPIED_TO_CLIPBOARD" : contact.value}
                </span>
                <div className={`w-2 h-2 rounded-full ${copied === i ? "bg-green-500 animate-ping" : "bg-indigo-500/20"}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER METADATA */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10">
          <div className="flex gap-10 font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">
            <span>Loc: 28.6139° N, 77.2090° E</span>
            <span>Status: Ready_For_Link</span>
          </div>
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[9px] font-mono text-indigo-500 uppercase tracking-widest"
          >
            Encryption: AES-256
          </motion.div>
        </div>
      </div>
    </section>
  )
}