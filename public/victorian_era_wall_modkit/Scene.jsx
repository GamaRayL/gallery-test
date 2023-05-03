/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: Okapiguy (https://sketchfab.com/Okapiguy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/victorian-era-wall-modkit-eb2f39e569ae4fe2bd5c3676c4286a25
Title: Victorian Era Wall Modkit
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[1.05, 211.21, -780.07]} rotation={[0, Math.PI / 2, 0]} scale={1.47}>
          <mesh geometry={nodes.frame1_Painting4_0.geometry} material={materials.Painting4} />
          <mesh geometry={nodes.frame1_Frame_0.geometry} material={materials.Frame} />
        </group>
        <group position={[1.05, 211.21, -588.64]} rotation={[0, Math.PI / 2, 0]} scale={1.47}>
          <mesh geometry={nodes.frame2_Painting3_0.geometry} material={materials.Painting3} />
          <mesh geometry={nodes.frame2_Frame_0.geometry} material={materials.Frame} />
        </group>
        <group position={[1.05, 438.19, -317.72]} rotation={[0, Math.PI / 2, 0]} scale={1.47}>
          <mesh geometry={nodes.frame3_Painting_0.geometry} material={materials.Painting} />
          <mesh geometry={nodes.frame3_Frame_0.geometry} material={materials.Frame} />
        </group>
        <group position={[1.05, 199.05, -125.66]} rotation={[0, Math.PI / 2, 0]} scale={1.47}>
          <mesh geometry={nodes.frame4_Painting1_0.geometry} material={materials.Painting1} />
          <mesh geometry={nodes.frame4_Frame_0.geometry} material={materials.Frame} />
        </group>
        <group position={[1.05, 357.24, -623.97]} rotation={[0, Math.PI / 2, 0]} scale={1.47}>
          <mesh geometry={nodes.frame5_Painting2_0.geometry} material={materials.Painting2} />
          <mesh geometry={nodes.frame5_Frame_0.geometry} material={materials.Frame} />
        </group>
        <mesh geometry={nodes.wainscotting_lambert1_0.geometry} material={materials.lambert1} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.wall_lambert1_0.geometry} material={materials.lambert1} position={[0, 448.99, -447.99]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[881.58, 897.99, 897.99]} />
        <mesh geometry={nodes.crown_Molding_lambert1_0.geometry} material={materials.lambert1} position={[0, 448.99, -447.99]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[881.58, 897.99, 897.99]} />
        <mesh geometry={nodes.wall_decor_lambert2_0.geometry} material={materials.lambert2} position={[0, 0, 3.58]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1.03, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
