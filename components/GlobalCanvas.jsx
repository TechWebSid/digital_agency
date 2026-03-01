"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function GlobalCanvas() {
  const containerRef = useRef()
  const frameRef = useRef()

  useEffect(() => {
    const container = containerRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100)
    
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance", // Hints the browser to use the GPU
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // ===== OPTIMIZED STAR FIELD =====
    const count = 1200
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
      sizes[i] = Math.random() * 2
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x6366f1, // Your Indigo theme
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    camera.position.z = 5

    // ===== SMOOTH INTERACTION =====
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.5
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.5
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      // Smooth interpolation for mouse
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      points.rotation.y += 0.0005
      points.rotation.x += 0.0002

      camera.position.x = mouseX
      camera.position.y = -mouseY
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
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none bg-[#020204]"
      style={{ perspective: '1000px' }}
    />
  )
}