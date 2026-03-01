"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function TechObject() {
  const meshRef = useRef()

  useFrame((state) => {
    const { mouse } = state

    if (!meshRef.current) return

    // Cursor-based smooth rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.y * 0.6,
      0.08
    )

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.x * 0.6,
      0.08
    )
  })

  return (
    <Float speed={3} rotationIntensity={0.6} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.6}>
        {/* Low poly geometry = lightweight */}
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#1e1b4b"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

export default function MiniTechScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <TechObject />
      </Canvas>
    </div>
  )
}