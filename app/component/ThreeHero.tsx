"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial,useGLTF} from "@react-three/drei";
import { Suspense } from "react";

function DesktopModel(props: any) {
  const { scene } = useGLTF("/models/retrocomputer.glb"); 
  return <primitive object={scene} {...props} />;
}

export default function ThreeDesktop() {
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <Canvas camera={{ position: [0, 1, 1] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <DesktopModel rotation={[0, Math.PI / 4, 0]} />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
      </Canvas>
    </div>
  );
}