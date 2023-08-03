import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Header from "../../../Component/Header";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaSistrix } from "react-icons/fa";


const Project = () => {

    const [loading, setLoading] = useState(true)
    const [projects,setProject] = useState([])
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
        useEffect(() => {
            Aos.init({ duration: 2000 })
          }, [])
          const [searchText, setSearchText] = useState('')
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
       <div id="project" className=" pb-20 " data-aos="zoom-in">

<div className="form-control md:w-1/3  absolute z-50 top-32 md:left-[400px] mx-10 bg-black rounded-2xl">
                    <div className="">
                        <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder="Search by Technology such as react or javascript" className="input bg-transparent border-cyan-100 w-full pr-16 text-cyan-100"  required/>
                        <button onClick={handleSearch} className="  bg-transparent hover:none absolute top-2 rounded-2xl right-0 rounded-l-none"><FaSistrix className="w-16 text-cyan-100 h-8"/></button>
                    </div>
                </div>
     
        <Header   title={'Projects'}/>
         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 py-5 mx-2 ">
        {
            projects.slice(0,3).map(project =><div  key={project.id} className=" overflow-hidden border-cyan-300 pt-20 hover:pt-0 group  rounded-xl hover:shadow-indigo-600 hover:shadow-xl"  style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/05/12/57/88/360_F_512578835_BdfMwRzEOA0YEih1fn9MZ7EJSNXfsfLM.jpg")`}}>
               <Link to={`/projectDetails/${project._id}`} className="relative"> <img  className="  flex opacity-10 mx-auto   hover:opacity-100 h-1/2  bg-blue-400 transition-all group-hover:w-full group-hover:h-full" src={project.image1} alt=""  title="click here for showing details"/>
               <div>
               <div className="  opacity-100 group-hover:opacity-0  text-cyan-300  ">
                
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
<Link to='/allProject' className=" mt-5 bg-gradient-to-r from-cyan-500 to-indigo-400  border-spacing-3 btn ">Show All project </Link>
</div>
       </div>
    );
};

export default Project;