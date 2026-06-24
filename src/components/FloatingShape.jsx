import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function HologramCore() {
  const outerCageRef = useRef();
  const innerCoreRef = useRef();
  const orbitRingRef = useRef();
  
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (outerCageRef.current && innerCoreRef.current && orbitRingRef.current) {
      // Rotations at different speeds
      outerCageRef.current.rotation.y = time * 0.25;
      outerCageRef.current.rotation.x = time * 0.15;
      
      innerCoreRef.current.rotation.y = -time * 0.4;
      innerCoreRef.current.rotation.z = time * 0.2;
      
      orbitRingRef.current.rotation.z = time * 0.35;
      orbitRingRef.current.rotation.y = time * 0.1;
      
      // Pulsate scale of the inner core
      const pulse = 0.85 + Math.sin(time * 3) * 0.08;
      innerCoreRef.current.scale.set(pulse, pulse, pulse);
      
      // Hover physics scaling
      const targetScale = hovered ? 1.35 : 1.1;
      outerCageRef.current.scale.x += (targetScale - outerCageRef.current.scale.x) * 0.15;
      outerCageRef.current.scale.y += (targetScale - outerCageRef.current.scale.y) * 0.15;
      outerCageRef.current.scale.z += (targetScale - outerCageRef.current.scale.z) * 0.15;
    }
  });

  return (
    <group
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setClicked(!clicked);
      }}
    >
      {/* 1. Outer wireframe dodecahedron cage */}
      <mesh ref={outerCageRef}>
        <dodecahedronGeometry args={[1.2]} />
        <meshBasicMaterial 
          wireframe 
          color={hovered ? '#00f0ff' : clicked ? '#ff007f' : '#8a2be2'} 
          transparent 
          opacity={hovered ? 0.7 : 0.45} 
        />
      </mesh>
      
      {/* 2. Inner glowing nucleus sphere */}
      <mesh ref={innerCoreRef}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshBasicMaterial 
          wireframe 
          color={hovered ? '#ff007f' : '#00f0ff'} 
          transparent 
          opacity={0.7} 
        />
      </mesh>
      
      {/* 3. Tilted scanning ring */}
      <mesh ref={orbitRingRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.6, 0.03, 8, 64]} />
        <meshBasicMaterial 
          color={clicked ? '#00f0ff' : '#ff007f'} 
          transparent 
          opacity={0.3} 
        />
      </mesh>

      {/* 4. Second outer horizontal tracker ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.015, 6, 48]} />
        <meshBasicMaterial 
          color="#8a2be2" 
          transparent 
          opacity={0.25} 
        />
      </mesh>
    </group>
  );
}

export default function FloatingShape() {
  return (
    <div className="w-full h-[300px] md:h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 3, 2]} intensity={1.5} />
        
        {/* Glowing cyber light coordinates */}
        <pointLight position={[-3, -1, -2]} color="#00f0ff" intensity={4} />
        <pointLight position={[3, 1, 2]} color="#ff007f" intensity={3} />
        
        <Float speed={3} rotationIntensity={1.5} floatIntensity={1.2}>
          <HologramCore />
        </Float>
      </Canvas>
    </div>
  );
}
