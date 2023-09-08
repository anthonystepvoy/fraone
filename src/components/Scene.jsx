import React, { useRef } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useFrame } from '@react-three/fiber';

export function Scene(props) {
  const { nodes, materials } = useGLTF('./models/world-nasa.glb');
  const planetRef = useRef();

  // Use the useFrame hook to update the planet's rotation
  useFrame((state, delta) => {
    if (planetRef.current) {
      // Adjust the rotation speed by changing the angle value
      planetRef.current.rotation.y += 0.020 * delta;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-0.361, -2.168, -0.401]} scale={1.156}>
        <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={17.062} position={[-8.489, 2.434, 5.151]} rotation={[-0.089, -1.064, -0.093]} />
        <mesh ref={planetRef} geometry={nodes.Sphere001.geometry} material={materials.Sphere} position={[0.312, 1.875, 0.347]} />

        {/* Add bloom effect to the scene */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.1} height={100} />
        </EffectComposer>
      </group>
    </group>
  );
}

useGLTF.preload('./models/scene.glb');
