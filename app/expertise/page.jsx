"use client"

import { motion } from "framer-motion"

export default function ExpertisePage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 lg:px-20 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(3rem,8vw,6rem)] font-light tracking-tight leading-[0.9]"
        >
          Engineering <br />
          <span className="italic font-serif text-indigo-400">
            Digital Systems
          </span>
        </motion.h1>

        <p className="mt-10 max-w-xl text-white/40 text-lg leading-relaxed">
          Not templates. Not trends. High-performance architecture built
          with precision, scalability, and brutal performance in mind.
        </p>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 space-y-32">

          {[
            {
              number: "01",
              title: "Frontend Engineering",
              desc: "Scalable UI architecture using modern frameworks, type-safe systems, and reusable component structures."
            },
            {
              number: "02",
              title: "WebGL & Motion Systems",
              desc: "Three.js powered interactions, shader effects, and cinematic scroll-driven storytelling."
            },
            {
              number: "03",
              title: "Performance Engineering",
              desc: "Core Web Vitals optimization, GPU tuning, bundle strategy and real-world performance testing."
            },
            {
              number: "04",
              title: "Design Systems",
              desc: "Token-driven scalable design systems for long-term brand consistency."
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-12 items-start"
            >
              <div className="md:col-span-2 text-5xl font-light text-indigo-500/40">
                {item.number}
              </div>

              <div className="md:col-span-10">
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-6 text-white/40 max-w-2xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">

          <h2 className="text-5xl font-light mb-16">
            Technical <span className="italic font-serif text-indigo-400">Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React",
              "Next.js",
              "Three.js",
              "GSAP",
              "TypeScript",
              "WebGL",
              "Node",
              "WebRTC"
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/40"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_70%)]" />
                <p className="relative z-10 text-lg text-white/80 group-hover:text-white transition-colors">
                  {tech}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE PHILOSOPHY ================= */}
      <section className="relative py-40 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-light leading-tight">
            Performance is not optimization. <br />
            <span className="italic font-serif text-indigo-400">
              It is architecture.
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
            {[
              "95+ Lighthouse",
              "<1.5s Load",
              "Zero Layout Shift",
              "GPU Optimized"
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="text-white/40"
              >
                {stat}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 border-t border-white/10 text-center">
        <h2 className="text-4xl font-light">
          Have an ambitious idea?
        </h2>

        <button className="mt-10 px-10 py-4 rounded-full border border-white/20 hover:border-indigo-500 transition">
          Let’s Engineer It
        </button>
      </section>

    </main>
  )
}