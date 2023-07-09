/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 language.gltf --transform
Author: Imago Reliquiae (https://sketchfab.com/ImagoReliquiae)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/presente-de-indicativo-conjugaciones-9fc3c3be20424e9590555fc0904f28f3
Title: Presente de Indicativo (CONJUGACIONES)
*/


import  { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/language-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cone001_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Text029_0.geometry} material={materials.PaletteMaterial001} position={[-5.279, 26.358, 5.981]} rotation={[3.123, 0.002, -3.065]} scale={[-1.93, 1.93, 1.93]} />
      <mesh geometry={nodes.Cube001_0.geometry} material={materials.PaletteMaterial002} position={[0, -0.633, -0.009]} />
    </group>
  )
}

useGLTF.preload('/language-transformed.glb')