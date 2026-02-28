"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, MeshWobbleMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function MinimalistTechShape() {
  const meshRef = useRef()
  // Using a dummy vector to avoid creating new objects every frame
  const vec = new THREE.Vector3()

  useFrame((state) => {
    const { mouse, viewport } = state
    const isMobile = window.innerWidth < 768

    // 1. REFINED CONTROLLABILITY
    // On Desktop: Stays on the right side but reacts to mouse
    // On Mobile: Stays centered but reacts to tilt/touch
    const targetX = isMobile ? mouse.x * 2 : 2.5 + mouse.x * 2
    const targetY = mouse.y * 2

    // Smoothly interpolate position (0.1 is faster and more responsive than 0.05)
    meshRef.current.position.lerp(vec.set(targetX, targetY, 0), 0.1)

    // 2. DYNAMIC ROTATION
    // Rotates faster when the mouse moves
    meshRef.current.rotation.x += 0.005 + (mouse.y * 0.02)
    meshRef.current.rotation.y += 0.005 + (mouse.x * 0.02)
  })

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={window.innerWidth < 768 ? 0.8 : 1.4}>
        <torusKnotGeometry args={[1, 0.35, 256, 64]} />
        
        {/* High-visibility "Kerosene" Glow Material */}
        <MeshWobbleMaterial
          color="#a78bfa" 
          speed={3} 
          factor={0.6} 
          metalness={0.8}
          roughness={0.1}
          emissive="#4c1d95" // Deep purple glow from within
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

export default function HeroScene() {
  return (
    // REMOVED pointer-events-none from the Canvas container so it can see the mouse
    // ADDED z-index to stay behind text but above the background
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        // This ensures the canvas takes up the full space for mouse tracking
        style={{ pointerEvents: 'auto' }} 
      >
        {/* ENHANCED LIGHTING: Essential for visibility */}
        <ambientLight intensity={1.5} />
        
        {/* Main highlight light that follows the object */}
        <pointLight position={[10, 10, 10]} intensity={2} color="#fff" />
        
        {/* Rim light for that "Awwwards" neon edge effect */}
        <spotLight 
          position={[-10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={3} 
          color="#818cf8" 
        />

        <MinimalistTechShape />
      </Canvas>
    </div>
  )
}