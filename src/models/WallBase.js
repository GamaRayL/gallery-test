import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { position } = props;
  const { nodes, materials } = useGLTF("/wall_trim/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={position || [0.13, 0, -0.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0.13, 0.08, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={25}
          >
            <mesh
              geometry={nodes.pPlane1_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-2.06, -0.04, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export default Model;

useGLTF.preload("/scene.gltf");
