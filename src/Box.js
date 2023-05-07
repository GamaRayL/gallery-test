import { useBox } from "@react-three/cannon";

import React from "react";

const Box = (props) => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props,
  }));
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="green" />
    </mesh>
  );
};

export default Box;
