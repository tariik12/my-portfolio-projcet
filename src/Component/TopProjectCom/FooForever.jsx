import {  OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Chef from "../Chef"
import { Link } from "react-router-dom";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";


const FooForever = ({project}) => {
    console.log(project)
    const [handle, setHandle] = useState(false)
const handleProject = () =>{
setHandle(true)
}
    const food = project.find(sum =>sum.projectName === 'Food Forever')
    console.log(food)
    return (
        <>
          <Canvas className="">
            <Stage environment="city" intensity={1}>

           <Chef/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        
        <Link ><div className=" flex justify-center  ">
                    {/* TODO */}
                    
                   <button onClick={handleProject}  className="btn btn-lg text-4xl w-full  bg-gradient-to-t from-cyan-500  to-indigo-400">Explore More</button>
                   {handle&& <ProjectDetails pro={food}/>}
                   </div></Link>
        </>
    );
};

export default FooForever;