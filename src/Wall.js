import { Image } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { RepeatWrapping, TextureLoader } from "three";

const Wall = (props) => {
  const { position, rotation = [0, 0, 0] } = props;

  const texture = useLoader(
    TextureLoader,
    "textures/granular_concrete_diff_4k.jpg"
  );

  if (texture) {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(7, 1);
    texture.anisotropy = 16;
  }

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 24, 0]} castShadow receiveShadow>
        <boxGeometry args={[100, 52, 1]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[100, 5, 2]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
};

export default Wall;
