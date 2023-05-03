/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 fancy_picture_frame_01_2k.gltf
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF(
    "/fancy_picture_frame_01_2k/fancy_picture_frame_01_2k.gltf"
  );
  return (
    <group {...props} dispose={null} scale={60} >
      <mesh
        geometry={nodes.fancy_picture_frame_01.geometry}
        material={materials.fancy_picture_frame_01}
      />
      <mesh
        geometry={nodes.fancy_picture_frame_01_canvas.geometry}
        material={materials.fancy_picture_frame_01_canvas}
      />
    </group>
  );
}

export default Model;
useGLTF.preload("/fancy_picture_frame_01_2k.gltf");
