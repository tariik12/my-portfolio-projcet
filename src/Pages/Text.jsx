import {
    OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { styled } from "styled-components";
import Cube from "../Cube";

// const Container = styled.div`
// height:100vh;
// width:100vh;
// `
const Test = () => {
    return (
        <div className="w-full mx-auto border border-cyan-300 p-5 h-full ">
            <Canvas className="">
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube/>
            </Canvas>
        </div>
    );
};

export default Test;