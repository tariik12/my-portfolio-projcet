import {  useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
// import { ThemContext } from "../../Layout/Main";


const AllProject = () => {
  // const dark = useContext(ThemContext)
    const [projects,setProject] = useState([])
    console.log(projects)
        useEffect(() =>{
            fetch('https://my-portfolio-server-psi.vercel.app/projects')
            .then(res =>res.json())
            .then(data =>setProject(data))
        },[])
    return (
        <div className="text-white bg-black h-[600px]"  >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tarik | All Project</title>
                
            </Helmet>
            <div className=" flex justify-center py-5">
            <Link to='/' smooth={true} >
       <FaHome className=" p-2 rounded-xl bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-4xl me-8" title="Home"/>
      </Link>
      <Link to='/allProject'  smooth={true} >
        <GoProjectSymlink className=" p-2 rounded-xl bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-4xl me-8" title="All Projects"/>
      </Link>
            </div>
 <Tabs >
      <TabList className='text-center border-b-4 my-3'>
        <Tab >HTML & CSS </Tab>
        <Tab>Javascript</Tab>
        <Tab>Bootstrap</Tab>
        <Tab>All Project</Tab>
        <Tab>Tailwind</Tab>
        <Tab>React</Tab>
        <Tab>Full Stack Project</Tab>
        
      </TabList>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-2 shadow-xl">
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

      </TabPanel>
      <TabPanel>
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

      </TabPanel>
      <TabPanel>
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

      </TabPanel>
      <TabPanel>
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

      </TabPanel>
      <TabPanel>
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

      </TabPanel>
      <TabPanel>
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

      </TabPanel>
      <TabPanel>
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

      </TabPanel>
    </Tabs>
         <h1 className="text-center text-4xl animate-pulse mt-5">PortFolio Projects Updating</h1>
       </div>
    );
};

export default AllProject;