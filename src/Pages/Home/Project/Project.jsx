import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Header from "../../../Component/Header";



const Project = () => {

    const [projects,setProject] = useState([])
    console.log(projects)
        useEffect(() =>{
            fetch('https://my-portfolio-server-psi.vercel.app/projects')
            .then(res =>res.json())
            .then(data =>setProject(data))
        },[])
    return (
       <div id="project">
      
        <Header   title={'Projects'}/>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 shadow-xl">
        {
            projects.map(project =><div  key={project.id} className=" overflow-hidden  pt-20 hover:pt-0 group " style={{backgroundImage:`url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80")`}}>
               <Link to={`/projectDetails/${project._id}`} className="relative"> <img  className="  flex opacity-10 mx-auto   hover:opacity-100 h-1/2  bg-blue-400 transition-all group-hover:w-full group-hover:h-full" src={project.image1} alt=""  title="click here for showing details"/>
               <div>
               <div className="absolute top-3  opacity-100 group-hover:opacity-0  text-cyan-300  ">
                
               <p className="   text-xl text-center font-bold">{project.projectName}</p>
               <p className=" text-center my-3 border-b-2 pb-2">Technology</p>
               <Marquee>
               <p className="inline text-white">{project.tec}</p>
               </Marquee>
               </div>
               </div>
                </Link>
            </div>)
        }
            
        </div>
<div className="text-center">
<Link to='/allProject' className=" mt-5  border-spacing-3 btn bg-cyan-800">Show All project </Link>
</div>
       </div>
    );
};

export default Project;