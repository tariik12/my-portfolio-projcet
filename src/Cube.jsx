import {
    PerspectiveCamera,
    RenderTexture,
    Text
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
    const textRef = useRef()
    useFrame((state)=>
        (textRef.current.position.x = Math.sin(state.clock.elapsedTime) *20))
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera
                    makeDefault
                    position={[0, 0,5]}
                    />
                    <color attach="background" args={["#1e9db3"]}/>
                    <Text ref={textRef}  fontSize={5} color="#000">
                       Hey Welcome,
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
            </mesh>
    );
};

export default Cube;