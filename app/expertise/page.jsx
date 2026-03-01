"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect } from "react"
import * as THREE from "three"

function Scene3D() {
  const containerRef = useRef()
  const frameRef = useRef()
  const visibleRef = useRef(true)

  useEffect(() => {
    const container = containerRef.current

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    container.appendChild(renderer.domElement)

    // ===== PARTICLE FIELD =====
    const count = 900
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    )

    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    camera.position.z = 4

    // ===== MOUSE =====
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener("mousemove", handleMouseMove)

    // ===== VISIBILITY PAUSE =====
    const handleVisibility = () => {
      visibleRef.current = !document.hidden
    }
    document.addEventListener("visibilitychange", handleVisibility)

    const animate = () => {
      if (!visibleRef.current) return

      points.rotation.y += 0.0008
      points.rotation.x += 0.0004

      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.05
      camera.position.y += (-mouseY * 0.6 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)

      geometry.dispose()
      material.dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}

export default function ExpertisePage() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({ target: container })
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })
  const yParallax = useTransform(smooth, [0, 1], [0, -150])

  return (
    <main
      ref={container}
      className="relative bg-[#020204] text-white overflow-x-hidden"
    >
      <Scene3D />

      {/* Subtle animated vignette */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#020204_85%)] z-[5]" />

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="z-10"
        >
          <h1 className="text-[clamp(3rem,12vw,8rem)] font-light leading-[0.85] tracking-tighter">
            Engineering <br />
            <span className="italic font-serif text-indigo-500">
              Digital Systems
            </span>
          </h1>

          <div className="mt-10 flex items-center gap-6">
            <div className="h-[1px] w-16 bg-white/20" />
            <p className="text-xs tracking-[0.3em] uppercase text-white/40">
              Siddhartha Srivastava · TechWebSid
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== CONTENT ===== */}
      <motion.div
        style={{ y: yParallax }}
        className="relative z-10 space-y-48 pb-32"
      >
        <section className="px-6 lg:px-24 max-w-6xl mx-auto">
          <h2 className="text-4xl italic font-serif mb-12">
            The Blueprint
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {[
              "Motion Architecture",
              "3D Visual Systems",
              "Frontend Engineering",
              "Performance Logic",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 15 }}
                className="border-b border-white/10 pb-8 group cursor-crosshair"
              >
                <span className="text-indigo-500 text-xs font-mono">
                  0{i + 1}
                </span>
                <h3 className="text-3xl font-light mt-3 group-hover:text-indigo-400 transition">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Marquee optimized */}
        <section className="overflow-hidden py-20 border-y border-white/5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap text-6xl font-black text-white/[0.03] uppercase tracking-tighter"
          >
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>Three.js</span>
            <span>WebGL</span>
            <span>React</span>
            <span>Node</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>Three.js</span>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="text-center px-6">
          <h2 className="text-5xl font-light mb-12">
            Ambitious idea?
          </h2>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="border border-white/20 px-12 py-5 rounded-full uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Engineering
          </motion.button>
        </section>
      </motion.div>

      <footer className="relative z-10 py-12 text-center text-white/10 text-[10px] tracking-[0.6em] uppercase">
        Built with Precision by Siddhartha
      </footer>
    </main>
  )
}