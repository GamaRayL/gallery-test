import React from "react";
import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";

const Plane = (props) => {
  const texture = useLoader(
    TextureLoader,
    "textures/wood_floor_deck_diff_4k.jpg"
  );

  if (texture) {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(4, 4);
    texture.anisotropy = 16;
  }

  return (
    <mesh
      rotation-x={-Math.PI * 0.5}
      rotation-z={-Math.PI * 0.5}
      castShadow
      receiveShadow
    >
      <planeBufferGeometry args={[100, 100]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Plane;
