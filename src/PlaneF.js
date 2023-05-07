import React from "react";
import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";
import { MeshReflectorMaterial, Plane } from "@react-three/drei";

const PlaneF = (props) => {
  const texture = useLoader(
    TextureLoader,
    "textures/laminate_floor_02_diff_4k.jpg"
  );

  if (texture) {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(4, 4);
    texture.anisotropy = 16;
  }

  return (
    // <Plane scale={100} rotation-x={-Math.PI / 2} position-y={-2} />
    <mesh rotation-x={-Math.PI * 0.5} rotation-z={-Math.PI * 0.5} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial />
      {/* <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={50}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
      /> */}
    </mesh>
  );
};

export default PlaneF;
