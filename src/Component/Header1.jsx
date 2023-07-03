import { useGLTF } from '@react-three/drei'
import { useContext } from 'react'
import { ThemContext } from '../Layout/Main'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/header-transformed.glb')
  const dark = useContext(ThemContext)
  return (
    <group {...props} dispose={null} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 , background: '#fff' ,color:'green'}}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[-0.784, 0.016, 0.795]} >
      <meshStandardMaterial
        color="#1e9db3"
        
        />
      </mesh>
      <mesh geometry={nodes.Object_6.geometry} material={materials.ground_low_Baked} >
      </mesh>
      <mesh geometry={nodes.Object_8.geometry} material={materials['Material.008']} position={[0, 0.935, 0]} >
      <meshStandardMaterial
        color="#ea580c"
        
        />
      </mesh>
      <mesh geometry={nodes.Object_10.geometry} material={materials.p_132_CirclePattern_info} position={[1.031, 0.377, 0.663]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.18} >
      <meshStandardMaterial
        color="#ea580c"
        
        />
      </mesh>
      <mesh geometry={nodes.Object_14.geometry} material={materials.PaletteMaterial002} position={[0.332, 0, 0.692]} rotation={[Math.PI / 2, 0, -0.108]} scale={0.02} >
      <meshStandardMaterial
        color={dark?'white':'yellow'}
        
        />
      </mesh>
      <mesh geometry={nodes.Object_18.geometry} material={materials.p_132_CirclePattern_normal} position={[0, 0.934, 0]} >
      <meshStandardMaterial
        color="blue"
        
        />
      </mesh>
      <mesh geometry={nodes.Object_22.geometry} material={materials.PaletteMaterial001} position={[0, 0.956, 0]} >
      <meshStandardMaterial
        color="red"
        
        />
      </mesh>
      <mesh geometry={nodes.Object_54.geometry} material={materials.p_132_CirclePattern_normal} position={[0, 0.932, 0]} >
      <meshStandardMaterial
        color="purple"
        
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/header-transformed.glb')

