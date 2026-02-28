"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import {
  Float,
  MeshDistortMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function SceneContent() {
  const meshRef = useRef()

  useFrame((state) => {
    const { mouse } = state
    if (!meshRef.current) return

    const targetX = mouse.y * 0.5
    const targetY = mouse.x * 0.5

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetX,
      0.08
    )

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetY,
      0.08
    )
  })

  return (
    <>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} scale={1.5}>
          <icosahedronGeometry args={[1, 0]} />

          <MeshDistortMaterial
            color="#6366f1"
            speed={3}
            distort={0.3}
            metalness={0.9}
            roughness={0.1}
            emissive="#2e1065"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      <ContactShadows
        position={[0, -3.5, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4.5}
      />
    </>
  )
}

export default function CapabilitiesScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.5} />

        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />

        <pointLight
          position={[-10, -10, -10]}
          color="#818cf8"
          intensity={1}
        />

        <Environment preset="city" />

        <SceneContent />
      </Canvas>
    </div>
  )
}