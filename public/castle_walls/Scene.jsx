/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: shadowdraak (https://sketchfab.com/shadowdraak)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/castle-walls-028c96a9a4854edfbb2305835b3aca09
Title: Castle Walls
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 19.86, 0]}>
          <mesh geometry={nodes.GlassWall_Metal_All_0.geometry} material={materials.material} />
          <mesh geometry={nodes.GlassWall_Glass_Glass_0.geometry} material={materials.Glass} />
        </group>
        <mesh geometry={nodes.Wall1_All_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Wall2_All_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Door1_Wall_All_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Door1_Door_All_0.geometry} material={materials.material} />
        <mesh geometry={nodes.DoubleDoors_Wall_All_0.geometry} material={materials.material} />
        <mesh geometry={nodes.DoubleDoors_Door1_All_0.geometry} material={materials.material} />
        <mesh geometry={nodes.DoubleDoors_Door2_All_0.geometry} material={materials.material} />
        <mesh geometry={nodes.GlassDoor_Glass_Glass_0.geometry} material={materials.Glass} />
        <mesh geometry={nodes.GlassDoor_Metal_All_0.geometry} material={materials.material} />
        <mesh geometry={nodes.GlassDoor_Door_Glass_0.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
