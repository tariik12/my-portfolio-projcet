import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Chir from '../Chir'
import { Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";



const SandPalToy = ({project}) => {
    console.log(project[0].projectName)
        const [handle, setHandle] = useState(false)
    const handleProject = () =>{
    setHandle(true)
    }
        const sand = project.find(sum =>sum.projectName === 'Sand Pal')
        console.log(sand)
    return (
        <>
        <Canvas className="">
            <Stage environment="city" intensity={1}>

            <Chir/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <Link ><div className=" flex justify-center  ">
                    {/* TODO */}
                    
                   <button onClick={handleProject}  className="btn btn-lg text-4xl w-full  bg-gradient-to-t from-cyan-500  to-indigo-400">Explore More</button>
                   {handle&& <ProjectDetails pro={sand}/>}
                   </div></Link>
        </>
    );
};

export default SandPalToy;