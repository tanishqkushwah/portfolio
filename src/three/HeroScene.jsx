import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import profileImage from "../assets/profile.jpg";
import * as THREE from "three";
function Particles() {
  const particlesRef = useRef(null);

  const count = window.innerWidth <= 700 ? 80 : 180;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 8;
  }

  useFrame((state, delta) => {
    if (!particlesRef.current) return;

    particlesRef.current.rotation.y += delta * 0.03;
    particlesRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.025}
        color="#7cff00"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}


 function RotatingObject() {
  const groupRef = useRef(null);
  const texture = useTexture(profileImage);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Continuous rotation
    groupRef.current.rotation.y += delta * 0.15;

    // Browser page scroll
    const scrollY = window.scrollY;

    groupRef.current.position.y = -scrollY * 0.001;
    groupRef.current.rotation.z = scrollY * 0.0005;

    // Mouse interaction
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    groupRef.current.rotation.x +=
      (mouseY * -0.12 - groupRef.current.rotation.x) * 0.03;

    groupRef.current.rotation.y +=
      (mouseX * 0.12 - groupRef.current.rotation.y) * 0.03;
  });

  return (
    <group ref={groupRef}>

      {/* Profile photo */}
      {/* Front side */}
<mesh>
  <circleGeometry args={[1.55, 64]} />
  <meshBasicMaterial
    map={texture}
    transparent
    side={THREE.FrontSide}
  />
</mesh>

{/* Back side — same photo */}
<mesh rotation={[0, Math.PI, 0]}>
  <circleGeometry args={[1.55, 64]} />
  <meshBasicMaterial
    map={texture}
    transparent
    side={THREE.FrontSide}
  />
</mesh>

      {/* Green glow behind profile */}
      <mesh position={[0, 0, -0.05]} scale={1.08}>
        <circleGeometry args={[1.55, 64]} />

        <meshBasicMaterial
          color="#7cff00"
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Main ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.9, 0.012, 16, 100]} />

        <meshStandardMaterial
          color="#7cff00"
          emissive="#7cff00"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.1, 0.006, 16, 100]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#7cff00"
          emissiveIntensity={0.25}
        />
      </mesh>

    </group>
  );
}


function Scene() {
  const lightRef = useRef(null);

  useFrame((state) => {
    if (!lightRef.current) return;

    const targetX = state.pointer.x * 4;
    const targetY = state.pointer.y * 4;

    lightRef.current.position.x +=
      (targetX - lightRef.current.position.x) * 0.05;

    lightRef.current.position.y +=
      (targetY - lightRef.current.position.y) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={1.1} />

      <directionalLight
        position={[3, 3, 4]}
        intensity={2}
      />

      <pointLight
        ref={lightRef}
        position={[0, 2, 3]}
        intensity={3}
        color="#7cff00"
      />

      <Particles />

      <RotatingObject />
    </>
  );
}

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <Scene />

      <OrbitControls
        enableZoom={false}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  );
}

export default HeroScene;