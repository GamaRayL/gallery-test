import React, { useEffect, useRef, useState } from "react";
import { useHelper } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { SpotLightHelper, TextureLoader } from "three";

function LightScene({ frameRef }) {
  const [target, setTarget] = useState();
  const { distance, intensity, angle, x, y, z } = useControls({
    distance: { value: 56, min: 1, max: 100 },
    intensity: { value: 2, min: 0, max: 5 },
    angle: { value: 0.4, min: 0.1, max: 1 },
    x: { value: 1, min: -20, max: 20 },
    y: { value: 20, min: -20, max: 20 },
    z: { value: 20, min: -20, max: 20 },
  });

  useEffect(() => {
    setTarget(frameRef.current);
  }, [frameRef]);

  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, "red");

  return (
    <spotLight
      castShadow
      ref={spotLightRef}
      position={[x, y, z]}
      intensity={intensity}
      distance={distance}
      angle={angle}
      target={target}
      penumbra={1}
    />
  );
}

const Frame = ({ url, ...props }) => {
  const texture = useLoader(TextureLoader, url);
  const [width, height] = props.size;
  const frameRef = useRef();

  return (
    <group {...props} ref={frameRef}>
      <LightScene frameRef={frameRef} />
      <group
        position={[0, 2, 0.5]}
        scale={[width * 0.002, height * 0.002, 0.05]}
      >
        <mesh scale={[1, 1, 10]} castShadow receiveShadow>
          <boxGeometry args={[1.05, 1.05]} />
          <meshStandardMaterial
            color="#151515"
            metalness={0.5}
            roughness={0.5}
            envMapIntensity={2}
          />
        </mesh>
        <mesh position={[0, 0, 6]} castShadow receiveShadow>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        {/* <Image url={url} position={[0, 0, 6]} /> */}
      </group>
    </group>
  );
};

export default Frame;
