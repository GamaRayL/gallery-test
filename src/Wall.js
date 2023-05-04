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
      <mesh position={[0, 13.5, 0]}>
        <boxGeometry args={[100, 22, 1]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh position={[1, 15, 0.8]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh>
        <boxGeometry args={[100, 5, 2]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
};

export default Wall;
