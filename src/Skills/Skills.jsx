import Marquee from "react-fast-marquee";

import Header from "../Component/Header";
import SubHeader from "../Component/SubHeader";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { BsFiletypeJson, BsFillBootstrapFill } from 'react-icons/bs';
import { TbBrandJavascript, TbBrandNextjs, TbBrandTailwind, TbBrandThreejs, TbBrandVscode } from 'react-icons/tb';
import { BiLogoFirebase, BiLogoMongodb } from 'react-icons/bi';
import { FiFigma } from 'react-icons/fi';
import { AiFillWindows } from 'react-icons/ai';
import { SiAxios, SiCanva, SiDaisyui, SiDotenv, SiNetlify, SiPlaycanvas, SiReacthookform, SiReactrouter, SiRedux, SiReduxsaga, SiTypescript, SiVercel } from 'react-icons/si';


const Skills = () => {

    return (
        <div  id="skill" className=" bg-no-repeat bg-cover bg-fixed   "   >
           <div className="" >
           <Header title={'Skills And Technology'}/>
           </div>

        <div className=" ">
          <Marquee direction="right" className="text-center ">
            <div>
            <SubHeader title={"Expertise"}/>
            <div className="grid grid-cols-3 gap-10  mt-5 p-5">
          <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <FaReact className="animate-spin"/></button>
          <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <FaHtml5/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <FaCss3Alt/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <BsFillBootstrapFill/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <TbBrandTailwind/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <SiDaisyui/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <SiReactrouter/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">   <BiLogoFirebase/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">   <SiReacthookform/></button>
            <img className=" h-[82px] rounded-xl  w-[82px] p-2  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/02/js-es6.jpg?fit=1200%2C700&ssl=1" alt="" />
          </div>
            </div>
            
          <dir>
          <SubHeader title={"Comfortable"}/>
          <div className="grid grid-cols-3 gap-5  mt-5 p-5">
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <TbBrandJavascript/></button>
          <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <FaNodeJs className="animate-spin"/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <BiLogoMongodb/></button>
            <button className="h-[82px] rounded-xl  w-[82px] p-2 text-4xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse"> <p>JWT</p></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiAxios/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <BsFiletypeJson/></button>
            <button className="h-[82px] rounded-xl  w-[82px] p-2  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">    <p>Devtool and Debug</p></button>
            <button className="h-[82px] rounded-xl  w-[82px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <p>TansTack Query</p></button>
            <img className="h-[82px] rounded-xl  w-[82px] p-2 text-4xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse" src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="" />
            <img className="h-[82px] rounded-xl  w-[82px] p-2 text-4xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse" src="https://www.coretech.it/_public/img/video/icon/ApirestFul.png" alt="" />
            </div>
          </dir>
           
            <div>
            <SubHeader title={"Familiar"}/>
            <div className="grid grid-cols-2 gap-32  mt-5 p-5">
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <SiRedux/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <SiPlaycanvas/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <TbBrandThreejs/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <TbBrandNextjs/></button>
            </div>
            </div>
            <div>
            <SubHeader title={"Now Learning"}/>
            <div className="grid grid-cols-1 gap-32  mt-5 p-5">  
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiTypescript className="animate-pulse"/></button>
            <button className="  rounded-xl  text-7xl p-2 me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <SiReduxsaga className="animate-spin"/></button>
            </div>
            </div>
           <div>
           <SubHeader title={"Tools "}/>
           <div className="grid grid-cols-3 gap-5  mt-5 p-5">
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiNetlify/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <FiFigma/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiVercel /></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiCanva className="animate-spin"/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <SiDotenv/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <AiFillWindows/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <TbBrandVscode/></button>
            </div>
           </div>
            
            
           
           
            <div>
            <SubHeader title={"Interpersonal Skill"}/>
            <div className="grid grid-cols-1 gap-10  mt-5 p-5">
            <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <p>Team Worker</p></button>
          <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <p>Heard Worker</p></button>
          <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <p>Good communication</p></button>
            </div>
            </div>
            
          </Marquee>
        </div>
      </div>
    );
};

export default Skills;