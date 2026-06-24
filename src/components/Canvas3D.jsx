import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function CyberSphere() {
  const groupRef = useRef();
  const innerRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current && innerRef.current) {
      // Rotating opposing directions
      groupRef.current.rotation.y = time * 0.04;
      groupRef.current.rotation.x = time * 0.02;
      
      innerRef.current.rotation.y = -time * 0.08;
      innerRef.current.rotation.z = time * 0.03;
      
      // Floating animation
      groupRef.current.position.y = 1 + Math.sin(time * 0.6) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[4, 1, -8]}>
      {/* Outer Cyber Sphere (Latitude/Longitude Ring System) */}
      <mesh>
        <sphereGeometry args={[2.5, 12, 10]} />
        <meshBasicMaterial wireframe color="#00f0ff" opacity={0.12} transparent />
      </mesh>
      {/* Inner scanning core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.3]} />
        <meshBasicMaterial wireframe color="#ff007f" opacity={0.2} transparent />
      </mesh>
      {/* Tiny core point */}
      <mesh>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color="#00f0ff" opacity={0.6} transparent />
      </mesh>
    </group>
  );
}

function DataPackets({ count = 80 }) {
  const ref = useRef();
  
  // Create data packet vertices that drift vertically
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20; // wide width
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15; // height
      arr[i * 3 + 2] = -4 - Math.random() * 10; // depth
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      // Slow rotating particle cloud
      ref.current.rotation.y = time * 0.01;
      
      // Parallax mouse follow
      const targetX = state.pointer.x * 0.3;
      ref.current.position.x += (targetX - ref.current.position.x) * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

export default function Canvas3D() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[#03030c] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 70 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        
        {/* Holographic scanning radar in the upper right background */}
        <CyberSphere />
        
        {/* Floating digital particles */}
        <DataPackets count={60} />
      </Canvas>
    </div>
  );
}
