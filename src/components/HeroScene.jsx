import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Float,
  Text3D,
  Center,
  Environment,
} from '@react-three/drei'
import { ACESFilmicToneMapping } from 'three'

const fontPath = import.meta.env.BASE_URL + 'fonts/montserrat-extrabold.json'

const sharedTextProps = {
  font: fontPath,
  bevelEnabled: true,
  bevelSegments: 24,
  curveSegments: 64,
}

function BalloonMetalMaterial() {
  return (
    <meshPhysicalMaterial
      color="#111111"
      metalness={0.95}
      roughness={0.14}
      clearcoat={1}
      clearcoatRoughness={0.06}
      envMapIntensity={2.4}
      reflectivity={1}
      ior={2.1}
    />
  )
}

function BopaText() {
  const groupRef = useRef(null)

  useFrame((state) => {
    if (!groupRef.current) return

    const t = state.clock.elapsedTime

    groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.09
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.025
    groupRef.current.position.y = Math.sin(t * 0.55) * 0.05
  })

  return (
    <Float speed={1} rotationIntensity={0.08} floatIntensity={0.18}>
      <group ref={groupRef}>
        <Center>
          <group>
            <Center position={[0, 1.1, 0]}>
              <Text3D
                {...sharedTextProps}
                size={1.62}
                height={0.42}
                bevelThickness={0.15}
                bevelSize={0.11}
                letterSpacing={0.05}
              >
                bopa
                <BalloonMetalMaterial />
              </Text3D>
            </Center>

            <Center position={[0, -0.55, 0]}>
              <Text3D
                {...sharedTextProps}
                size={0.56}
                height={0.18}
                bevelThickness={0.065}
                bevelSize={0.048}
                letterSpacing={0.04}
              >
                AI hackathon
                <BalloonMetalMaterial />
              </Text3D>
            </Center>

            <Center position={[0, -1.45, 0]}>
              <Text3D
                {...sharedTextProps}
                size={0.44}
                height={0.15}
                bevelThickness={0.05}
                bevelSize={0.035}
                letterSpacing={0.1}
              >
                2026
                <BalloonMetalMaterial />
              </Text3D>
            </Center>
          </group>
        </Center>
      </group>
    </Float>
  )
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.22} />

      <directionalLight position={[6, 8, 5]} intensity={1.45} />

      <spotLight
        position={[-6, 7, 8]}
        angle={0.42}
        penumbra={1}
        intensity={1.9}
      />

      <pointLight position={[0, 3, -4]} intensity={0.7} color="#9ca3af" />
      <pointLight position={[3, 1, 4]} intensity={0.5} color="#ffffff" />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.1, 12], fov: 36 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: ACESFilmicToneMapping,
        toneMappingExposure: 1.15,
      }}
    >
      <color attach="background" args={['#ffffff']} />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <SceneLights />

        <group position={[0, 0.25, 0]}>
          <BopaText />
        </group>

      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.38}
        minPolarAngle={Math.PI / 2.35}
        maxPolarAngle={Math.PI / 1.95}
      />
    </Canvas>
  )
}