import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF(
    "/basic_low_poly_wall_with_a_baseboard/scene.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube_Material_0.geometry}
        material={materials.Material}
        position={[0, 10, -20]}
      />
    </group>
  );
}
export default Model;

useGLTF.preload("/scene.gltf");
