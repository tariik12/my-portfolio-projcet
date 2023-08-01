import { Link, useLoaderData } from "react-router-dom";
import Education from "../Pages/Home/Education/Education";
import SubHeader from "./SubHeader";
import { Helmet } from "react-helmet";



const ProjectDetails = () => {
  const projectData = useLoaderData();
  const {description,duration,image1,image2,image3,liveLink,projectName,serverLink,tec,clientLink} =projectData
  console.log(projectData)
  const image = {image1,image2,image3}
  console.log(image,image1,image2,image3)
  return (
    <div className="mt-10 text-white">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Tarik | {projectName} Details</title>
                
            </Helmet>
       <div className="text-center mb-5">
       <SubHeader title={projectName}/>
       </div>
      <div className="">

      <Education image={image}/>
      </div>
     
     
     <div className="text-center mt-10">
     <Link to={clientLink} className="btn btn-sm md:btn-md mb-3 text-xl me-2 bg-gradient-to-t from-cyan-500  to-indigo-400"><button >Client Git</button></Link>
      <Link to={liveLink} className="btn btn-sm md:btn-md text-xl  bg-gradient-to-t from-cyan-500 me-2 mb-3 to-indigo-400"><button>LiveLink</button></Link>
      <Link to={serverLink} className="btn  btn-sm md:btn-md text-xl  bg-gradient-to-t from-cyan-500  to-indigo-400"><button><button>server Git</button></button></Link>
     </div>

      <div>
            <h4 className="text-xl font-bold">Description</h4>
          {
           description.map(des =><li className="list-none text-1g" key={des}>{des}</li>)
          }
          </div>
          <h4 className="text-xl font-bold">Technology</h4>
          <div className="grid grid-cols-2">

          {
             tec.map(te =><li key={te}>{te}</li>)
           }
           </div>
           <h1 className="">{duration}</h1>

           <Link className="btn" to='/'>Home</Link>
           <Link className="btn" to='/allProject'>All Project</Link>
    </div>
  );
};

export default ProjectDetails;