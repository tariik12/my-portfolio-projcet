import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";


const ProjectDetails = () => {

    const [projects,setProject] = useState([])
    console.log(projects)
        useEffect(() =>{
            fetch('project.json')
            .then(res =>res.json())
            .then(data =>setProject(data))
        },[])
    return (
        <div>
            {
                projects.slice(0,0).map((project,index) => <div key={index} className="h-[500px]  z-50  top-0 p-10 overflow-scroll text-white bg-black absolute" style={{ width: '50vw', height: '50vh', top: 0, right: 0}}>
                <div className="">
                {/* <Education image={image}/> */}
                </div>
            
          <div className="mt-5 md:w-9/12 md:mx-auto ">
          <Link to={project.clientLink} className="btn btn-sm md:btn-md mb-3 text-xl me-2 bg-gradient-to-t from-cyan-500  to-indigo-400"><button >Client Git</button></Link>
           <Link to='https://github.com/tariik12' className="btn btn-sm md:btn-md text-xl  bg-gradient-to-t from-cyan-500 me-2 mb-3 to-indigo-400"><button>LiveLink</button></Link>
          
           <Link to={project.serverLink} className="btn  btn-sm md:btn-md text-xl  bg-gradient-to-t from-cyan-500  to-indigo-400"><button><button>server Git</button></button></Link>
          </div>
          <SubHeader title={project.projectName}/>
          {/* <h1 className="text-">{projectName}</h1> */}
           <div>
             <h4 className="text-xl font-bold">Description</h4>
           {
             project.description.map(des =><li className="list-none text-1g" key={des}>{des}</li>)
           }
           </div>
           <h4 className="text-xl font-bold">Technology</h4>
           <div className="grid grid-cols-2">
 
           {
             project.tec.map(te =><li key={te}>{te}</li>)
           }
           </div>
         </div>)
            }
        </div>
    );
};

export default ProjectDetails;