"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function TechEngineScene() {
  const containerRef = useRef()
  const frameRef = useRef()

  useEffect(() => {
    const container = containerRef.current
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })

    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // ================= DYNAMIC KNOT (The Core) =================
    // TorusKnot creates a complex, mathematical "brain-like" structure
    const knotGeometry = new THREE.TorusKnotGeometry(1.5, 0.4, 200, 32)
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: true,
      emissive: 0x4338ca,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.6,
    })

    const knot = new THREE.Mesh(knotGeometry, knotMaterial)
    scene.add(knot)

    // ================= REACTIVE NEBULA =================
    const particleCount = 2000
    const particleGeometry = new THREE.BufferGeometry()
    const posArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      // Random spread in a sphere
      posArray[i] = (Math.random() - 0.5) * 12
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x818cf8,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending, // Makes particles "glow" when they overlap
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // ================= LIGHTING =================
    const mainLight = new THREE.PointLight(0x6366f1, 2)
    mainLight.position.set(2, 3, 4)
    scene.add(mainLight)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
    scene.add(ambientLight)

    // ================= INTERACTION & ANIMATION =================
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      targetX = ((e.clientX - rect.left) / rect.width - 0.5)
      targetY = ((e.clientY - rect.top) / rect.height - 0.5)
    }

    container.addEventListener("mousemove", handleMouseMove)

    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Organic rotation
      knot.rotation.y = elapsedTime * 0.3
      knot.rotation.z = elapsedTime * 0.1
      
      // Floating motion
      knot.position.y = Math.sin(elapsedTime * 0.5) * 0.2

      // Smooth mouse follow (Interpolation)
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05
      
      knot.rotation.x += mouseY * 0.5
      knot.rotation.y += mouseX * 0.5

      // Particle Nebula breathing
      particles.rotation.y = -elapsedTime * 0.05
      particles.position.y = Math.cos(elapsedTime * 0.5) * 0.1

      renderer.render(scene, camera)
      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(frameRef.current)
      container.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      
      // Proper memory cleanup
      knotGeometry.dispose()
      knotMaterial.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full cursor-pointer relative group">
      {/* Subtle overlay glow to blend 3D with CSS */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
    </div>
  )
}