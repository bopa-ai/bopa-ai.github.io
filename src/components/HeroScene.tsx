import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Float,
  Text3D,
  Center,
  Environment,
} from '@react-three/drei'
import { ACESFilmicToneMapping, Group } from 'three'

const fontPath = import.meta.env.BASE_URL + 'fonts/montserrat-extrabold.json'

const sharedTextProps = {
  font: fontPath,
  bevelEnabled: true,
  bevelSegments: 8,
  curveSegments: 16,
}

interface HeroSceneProps {
  dark?: boolean
}

function BalloonMetalMaterial({ dark }: { dark: boolean }) {
  return (
    <meshStandardMaterial
      color={dark ? '#eeeeee' : '#111111'}
      metalness={0.95}
      roughness={0.14}
      envMapIntensity={2.4}
    />
  )
}

function BopaText({ dark }: { dark: boolean }) {
  const groupRef = useRef<Group>(null)

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
                <BalloonMetalMaterial dark={dark} />
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
                <BalloonMetalMaterial dark={dark} />
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
                <BalloonMetalMaterial dark={dark} />
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
      <ambientLight intensity={0.3} />
      <directionalLight position={[6, 8, 5]} intensity={1.6} />
      <directionalLight position={[-4, 3, 3]} intensity={0.6} color="#9ca3af" />
    </>
  )
}

export default function HeroScene({ dark = false }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.1, 12], fov: 36 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: ACESFilmicToneMapping,
        toneMappingExposure: 1.15,
      }}
    >
      <color attach="background" args={[dark ? '#0A0A0A' : '#ffffff']} />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <SceneLights />

        <group position={[0, 0.25, 0]}>
          <BopaText dark={dark} />
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
