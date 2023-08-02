import {  useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { FaHome } from "react-icons/fa";
// import { GoProjectSymlink } from "react-icons/go";
// import { ThemContext } from "../../Layout/Main";


const AllProject = () => {
  // const dark = useContext(ThemContext)
    const [projects,setProject] = useState([])
    // const [projects, setprojects] = useState([])
  const [loading,setLoading] = useState(true)

  const fullStacks = projects.filter(data => data.id === 'Full Stack')
  const frontEnd = projects.filter(data => data.id === 'Front End' || data.id === 'React.js')
  const Bootstraps = projects.filter(data => data.id === 'Bootstrap')
  const HTMLCSS = projects.filter(data => data.id === 'HTML & CSS')
  const JavaScripts = projects.filter(data => data.id === 'JavaScript')

    console.log(projects)
        useEffect(() =>{
          setLoading(true)
            fetch('https://my-portfolio-server-psi.vercel.app/projects')
            .then(res =>res.json())
            .then(data =>{
              setLoading(false)
              setProject(data)
            })
        },[])

        if(loading){
          return  <progress className="progress w-56"></progress>
          }
    return (
        <div className="text-black font-bold "  >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tarik | All Project</title>
                
            </Helmet>
            <div className=" flex justify-center py-5">
         
      <Link to='/' smooth={true} >
       <FaHome className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8" title="Home"/>
      </Link>
    
            </div>
 <Tabs >
      <TabList className='text-center bg-gradient-to-t from-cyan-500  to-indigo-400 my-3'>
        <Tab >HTML & CSS </Tab>
        <Tab>Bootstrap</Tab>
        <Tab>Javascript</Tab>
        <Tab>All Project</Tab>
        {/* <Tab>Tailwind</Tab> */}
        <Tab>Front End</Tab>
        <Tab>Full Stack Project</Tab>
        
      </TabList>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-2 ">
        {
            HTMLCSS.map(project =><div  key={project.id} className=" overflow-hidden bg-opacity-80  pt-20 hover:pt-0 group " style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/05/12/57/88/360_F_512578835_BdfMwRzEOA0YEih1fn9MZ7EJSNXfsfLM.jpg")`}}>
               <Link to={`/projectDetails/${project._id}`} className="relative"> <img  className="  flex opacity-10 mx-auto   hover:opacity-100 h-1/2  bg-blue-400 transition-all group-hover:w-full group-hover:h-full" src={project.image1} alt=""  title="click here for showing details"/>
               <div>
               <div className=" top-3  opacity-100 group-hover:opacity-0  text-cyan-300  ">
                
               <p className="text-xl w-full text-center font-bold">{project.projectName}</p>
               <p className=" text-center my-3 border-b-2  w-full pb-2">Technology</p>
               <Marquee>
               <p className="inline text-black font-bold">{project.tec}</p>
               </Marquee>
               </div>
               </div>
                </Link>
            </div>)
        }
            
        </div>

      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 ">
        {
            Bootstraps.map(project =><div  key={project.id} className=" overflow-hidden  pt-20 hover:p-2 rounded-sm group " style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/05/12/57/88/360_F_512578835_BdfMwRzEOA0YEih1fn9MZ7EJSNXfsfLM.jpg")`}}>
               <Link to={`/projectDetails/${project._id}`} className="relative"> <img  className="  flex opacity-10 mx-auto   hover:opacity-100 h-1/2  bg-blue-400 transition-all group-hover:w-full group-hover:h-full rounded-sm" src={project.image1} alt=""  title="click here for showing details"/>
               <div>
               <div className="   opacity-100 group-hover:opacity-0  text-cyan-300  ">
                
               <p className="   text-xl text-center font-bold">{project.projectName}</p>
               <p className=" text-center my-3 border-b-2 pb-2">Technology</p>
               <Marquee>
               <p className="inline text-black font-bold">{project.tec}</p>
               </Marquee>
               </div>
               </div>
                </Link>
            </div>)
        }
            
        </div>

      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 ">
        {
            JavaScripts.map(project =><div  key={project.id} className=" overflow-hidden  pt-20 hover:pt-0 group " style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/05/12/57/88/360_F_512578835_BdfMwRzEOA0YEih1fn9MZ7EJSNXfsfLM.jpg")`}}>
               <Link to={`/projectDetails/${project._id}`} className="relative"> <img  className="  flex opacity-10 mx-auto   hover:opacity-100 h-1/2  bg-blue-400 transition-all group-hover:w-full group-hover:h-full" src={project.image1} alt=""  title="click here for showing details"/>
               <div>
               <div className="  opacity-100 group-hover:opacity-0  text-cyan-300  ">
                
               <p className="   text-xl text-center font-bold">{project.projectName}</p>
               <p className=" text-center my-3 border-b-2 pb-2">Technology</p>
               <Marquee>
               <p className="inline text-black font-bold">{project.tec}</p>
               </Marquee>
               </div>
               </div>
                </Link>
            </div>)
        }
            
        </div>

      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 ">
        {
            projects.map(project =><div  key={project.id} className=" overflow-hidden  pt-20 hover:pt-0 group " style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/05/12/57/88/360_F_512578835_BdfMwRzEOA0YEih1fn9MZ7EJSNXfsfLM.jpg")`}}>
               <Link to={`/projectDetails/${project._id}`} className="relative"> <img  className="  flex opacity-10 mx-auto   hover:opacity-100 h-1/2  bg-blue-400 transition-all group-hover:w-full group-hover:h-full" src={project.image1} alt=""  title="click here for showing details"/>
               <div>
               <div className="  opacity-100 group-hover:opacity-0  text-cyan-300  ">
                
               <p className="   text-xl text-center font-bold">{project.projectName}</p>
               <p className=" text-center my-3 border-b-2 pb-2">Technology</p>
               <Marquee>
               <p className="inline text-black font-bold">{project.tec}</p>
               </Marquee>
               </div>
               </div>
                </Link>
            </div>)
        }
            
        </div>

      </TabPanel>
      
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 ">
        {
            frontEnd.map(project =><div  key={project.id} className=" overflow-hidden  pt-20 hover:pt-0 group " style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/05/12/57/88/360_F_512578835_BdfMwRzEOA0YEih1fn9MZ7EJSNXfsfLM.jpg")`}}>
               <Link to={`/projectDetails/${project._id}`} className="relative"> <img  className="  flex opacity-10 mx-auto   hover:opacity-100 h-1/2  bg-blue-400 transition-all group-hover:w-full group-hover:h-full" src={project.image1} alt=""  title="click here for showing details"/>
               <div>
               <div className="  opacity-100 group-hover:opacity-0  text-cyan-300  ">
                
               <p className="   text-xl text-center font-bold">{project.projectName}</p>
               <p className=" text-center my-3 border-b-2 pb-2">Technology</p>
               <Marquee>
               <p className="inline text-black font-bold">{project.tec}</p>
               </Marquee>
               </div>
               </div>
                </Link>
            </div>)
        }
            
        </div>

      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 ">
        {
            fullStacks.map(project =><div  key={project.id} className=" overflow-hidden  pt-20 hover:pt-0 group" style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/05/12/57/88/360_F_512578835_BdfMwRzEOA0YEih1fn9MZ7EJSNXfsfLM.jpg")`}}>
               <Link to={`/projectDetails/${project._id}`} className="relative"> <img  className="  flex opacity-10 mx-auto   hover:opacity-100 h-1/2  bg-blue-400 transition-all group-hover:w-full group-hover:h-full" src={project.image1} alt=""  title="click here for showing details"/>
               <div>
               <div className="absolute top-3  opacity-100 group-hover:opacity-0  text-cyan-300  ">
                
               <p className="   text-xl text-center font-bold">{project.projectName}</p>
               <p className=" text-center my-3 border-b-2 pb-2">Technology</p>
               <Marquee>
               <p className="inline text-black font-bold">{project.tec}</p>
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