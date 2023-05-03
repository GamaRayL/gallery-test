import { useLoader } from "@react-three/fiber";
import React from "react";
import { RepeatWrapping, TextureLoader } from "three";

const Wall = (props) => {
  const { position, rotation = [0, 0, 0] } = props;

  const texture = useLoader(
    TextureLoader,
    "textures/granular_concrete_diff_4k.jpg"
  );

  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[100, 40, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Wall;
