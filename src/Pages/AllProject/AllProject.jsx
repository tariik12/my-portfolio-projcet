import {  useEffect, useState } from "react";

import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { FaHome, FaSistrix } from "react-icons/fa";
// import { GoProjectSymlink } from "react-icons/go";
// import { ThemContext } from "../../Layout/Main";


const AllProject = () => {
  // const dark = useContext(ThemContext)
    const [projects,setProject] = useState([])
    // const [projects, setprojects] = useState([])
  const [loading,setLoading] = useState(true)

  const [searchText, setSearchText] = useState('')

  
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
        const handleSearch =() =>{
          if(searchText === null || searchText === Number || searchText === ""){
            return  alert(' please search valid keyword')
            }
          setLoading(true)
          fetch(`https://my-portfolio-server-psi.vercel.app/projectsSearch/${searchText}`)
          .then(res =>res.json())
          .then(data =>{
              setLoading(false)
             setProject(data)
              console.log(data)
          })
        }
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

            <div className="form-control md:w-1/3  absolute z-50  md:left-[400px] mx-10 bg-black rounded-2xl">
                    <div className="">
                        <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder="Search by Technology such as react or javascript" className="input bg-transparent border-cyan-100 w-full pr-16 text-cyan-100" />
                        <button onClick={handleSearch} className="  bg-transparent hover:none absolute top-2 rounded-2xl right-0 rounded-l-none"><FaSistrix className="w-16 text-cyan-100 h-8"/></button>
                    </div>
                </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 mt-32">
        {
            projects.map(project =><div  key={project.id} className=" overflow-hidden  pt-20 hover:pt-0 group rounded-2xl" style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/05/12/57/88/360_F_512578835_BdfMwRzEOA0YEih1fn9MZ7EJSNXfsfLM.jpg")`}}>
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
            
         <h1 className="text-center text-4xl animate-pulse mt-5">PortFolio Projects Updating</h1>
       </div>
       </div>
    );
};

export default AllProject;