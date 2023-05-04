import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Model(props) {
  const { position, rotation, image } = props;
  const { nodes, materials } = useGLTF("/victorian_era_wall_modkit/scene.gltf");
  const texture = useLoader(TextureLoader, image || "test.jpg");
  return (
    <group
      {...props}
      rotation={rotation || [0, -Math.PI / 2, 0]}
      position={position || [-20, 0, 5]}
      dispose={null}
    >
      <group scale={0.0522}>
        <group
          position={[1.05, 320.05, -230.66]}
          rotation={[0, Math.PI / 2, 0]}
          scale={1.47}
        >
          <mesh>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial map={texture} />
          </mesh>
        </group>
        <group
          position={[1.05, 320.05, -780.66]}
          rotation={[0, Math.PI / 2, Math.PI * 1]}
          scale={1.47}
        >
          <mesh
            geometry={nodes.frame4_Painting1_0.geometry}
            material={materials.Painting1}
          />
          <mesh
            geometry={nodes.frame4_Frame_0.geometry}
            material={materials.Frame}
          />
        </group>
        <mesh
          geometry={nodes.wainscotting_lambert1_0.geometry}
          material={materials.lambert1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.wall_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0, 448.99, -447.99]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[881.58, 897.99, 897.99]}
        />
        <mesh
          geometry={nodes.crown_Molding_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0, 448.99, -447.99]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[881.58, 897.99, 897.99]}
        />
        <mesh
          geometry={nodes.wall_decor_lambert2_0.geometry}
          material={materials.lambert2}
          position={[0, 0, 3.58]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1.03, 1]}
        />
      </group>
    </group>
  );
  // return (
  //   <group {...props} dispose={null}>
  //     <group scale={0.05}>
  //       <mesh
  //         geometry={nodes.Wall1_All_0.geometry}
  //         material={materials.material}
  //       />
  //       <mesh
  //         position={[0, 0, -200]}
  //         geometry={nodes.Wall1_All_0.geometry}
  //         material={materials.material}
  //       />
  //     </group>
  //   </group>
  // );
}

export default Model;

useGLTF.preload("/scene.gltf");
