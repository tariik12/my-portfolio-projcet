import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Language from "../Language"
import { Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";



const SummerCampLanguage = ({project}) => {
    console.log(project[0].projectName)
    const [handle, setHandle] = useState(false)
const handleProject = () =>{
setHandle(true)
}
    const summer = project.find(sum =>sum.projectName === 'Summer Language Camp')
    console.log(summer)
    // sum.projectName 
    return (
        <div className="md:w-full w-[270px] mx-auto">
        <Canvas className="">
            <Stage environment="city" intensity={1}>

            <Language/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <Link ><div className=" flex justify-center  ">
                    {/* TODO */}
                    
                   <button onClick={handleProject}  className="btn btn-xs md:btn-md md:text-2xl w-full md:w-1/2  bg-gradient-to-t from-cyan-500  to-indigo-400">Explore More</button>
                   {handle? <ProjectDetails pro={summer}/>: ""}
                   </div></Link>
        </div>
       
        
    );
};

export default SummerCampLanguage;