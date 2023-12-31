import { Link, useLoaderData } from "react-router-dom";
import Education from "../Pages/Home/Education/Education";
import SubHeader from "./SubHeader";
import { Helmet } from "react-helmet";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { ThemContext } from "../Layout/Main";
import { GoProjectSymlink } from "react-icons/go";



const ProjectDetails = () => {

  
  const dark = useContext(ThemContext)
  const projectData = useLoaderData();
  const {description,duration,image1,image2,image3,liveLink,projectName,serverLink,tec,clientLink} =projectData
  console.log(projectData)
  const image = {image1,image2,image3}
  console.log(image,image1,image2,image3)
  return (
    <div className={dark? 'text-black bg-white':'text-white bg-black'}>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Tarik | {projectName} Details</title>
                
            </Helmet>
            <div className=" flex justify-center py-5">
          
            <Link to='/' smooth={true} >
       <FaHome className=" p-2 rounded-xl bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-4xl me-8 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="Home"/>
      </Link>
      <Link to='/allProject'  smooth={true} >
        <GoProjectSymlink className=" p-2 rounded-xl bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-4xl me-8 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="All Projects"/>
      </Link>
            </div>
          {/* 

 */}
       <div className="text-center mb-5">
       <SubHeader title={projectName}/>
       </div>
      <div className="mx-10">

      <Education image={image}/>
      </div>
     
     
     <div className="text-center mt-10">
     <Link to={clientLink} className="btn btn-sm md:btn-md mb-3 text-xl me-2 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"><button >Client Git</button></Link>
      <Link to={liveLink} className="btn btn-sm md:btn-md text-xl  bg-gradient-to-t from-cyan-500 me-2 mb-3 to-indigo-400 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"><button>LiveLink</button></Link>
    {
      (serverLink === '' ?<></>:<><Link to={serverLink} className="btn  btn-sm md:btn-md text-xl  bg-gradient-to-t from-cyan-500  to-indigo-400 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"><button><button>server Git</button></button></Link></>)
    }
      
     </div>

      <div className="ps-10">
            <h4 className="text-xl font-bold mb-2">Description</h4>
          {
           description.map(des =><li className="list-none text-1g" key={des}>{des}</li>)
          }
          <h4 className="text-xl font-bold mt-4">Technology</h4>
          <div className="grid grid-cols-2 ">

          {
             tec.map(te =><li key={te}>{te}</li>)
           }
           </div>
           <h1 className=""> <span className="text-xl font-bold mt-5">Duration:</span> {duration}</h1>
          </div>
          

         
    </div>
  );
};

export default ProjectDetails;