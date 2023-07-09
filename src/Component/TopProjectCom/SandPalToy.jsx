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
        <div className="md:w-full w-[270px] mx-auto">
        <Canvas className="">
            <Stage environmfent="city" intensity={1}>

            <Chir/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <Link className="mx-auto" ><div className=" flex justify-center  ">
                    {/* TODO */}
                    
                   <button onClick={handleProject}  className="btn btn-xs md:btn-md md:text-2xl w-full md:w-1/2  bg-gradient-to-t from-cyan-500  to-indigo-400">Explore More</button>
                   {handle&& <ProjectDetails pro={sand}/>}
                   </div></Link>
        </div>
    );
};

export default SandPalToy;