import { useState } from "react";
import SummerCampLanguage from "../../../Component/TopProjectCom/SummerCampLanguage";
import SandPalToy from "../../../Component/TopProjectCom/SandPalToy";
import FooForever from "../../../Component/TopProjectCom/FooForever";
import Header from "../../../Component/Header";
import SubHeader from "../../../Component/SubHeader";
import { SiClickup } from 'react-icons/si';
import { useEffect } from "react";
// import { Link } from "react-router-dom";
// const projects = [
//     'Summer Camp Language',
//     'Sand Pal Toy',
//     'Food Forever',

// ]

const TopProject = () => {
    const [projects,setProject] = useState([])
console.log(projects)
    useEffect(() =>{
        fetch('project.json')
        .then(res =>res.json())
        .then(data =>setProject(data))
    },[])
    const [projectComponent, setProjectComponent] = useState(null)

    return (
        <div id="topProject" className="my-10 relative ">
            <Header title={'Top Project'}/>
            <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                <div className="left h-80 ">
                   {
                    projects.map((project, index) =>
                    <li key={index} onClick={()=>setProjectComponent(project.projectName)} className=" list-none text-3xl cursor-pointer">
                    <SubHeader title={project.projectName} />
                    </li>)
                   }
                   <div className="  mt-10">
                    {/* TODO */}
                   <button className="btn btn-lg text-4xl  ms-5 bg-gradient-to-t from-cyan-500  to-indigo-400"><SiClickup className="animate-bounce"/></button>
                   </div>
                </div>
                <div className="right  h-80 ">
                 {projectComponent ==="Summer Language Camp"? (<SummerCampLanguage project={projects} />)  :projectComponent==="Sand Pal"?(<SandPalToy project={projects}/>):<FooForever project={projects}/>}

               
                </div>
            </div>
        </div>
    );
};

export default TopProject;