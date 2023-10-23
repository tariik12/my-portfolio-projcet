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
          <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <FaReact className="animate-spin"/></button>
          <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <FaHtml5/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <FaCss3Alt/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <BsFillBootstrapFill/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <TbBrandTailwind/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <SiDaisyui/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <SiReactrouter/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">   <BiLogoFirebase/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">   <SiReacthookform/></button>
            <img className=" h-[82px] rounded-xl  w-[82px] p-2  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/02/js-es6.jpg?fit=1200%2C700&ssl=1" alt="" />
          </div>
            </div>
            
          <dir>
          <SubHeader title={"Comfortable"}/>
          <div className="grid grid-cols-3 gap-5  mt-5 p-5">
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <TbBrandJavascript/></button>
          <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <FaNodeJs className="animate-spin"/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <BiLogoMongodb/></button>
            <button className="h-[82px] rounded-xl  w-[82px] p-2 text-4xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <p>JWT</p></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <SiAxios/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <BsFiletypeJson/></button>
            <button className="h-[82px] rounded-xl  w-[82px] p-2  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">    <p>Devtool and Debug</p></button>
            <button className="h-[82px] rounded-xl  w-[82px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">   <p>TansTack Query</p></button>
            <img className="h-[82px] rounded-xl  w-[82px] p-2 text-4xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="" />
            <img className="h-[82px] rounded-xl  w-[82px] p-2 text-4xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" src="https://www.coretech.it/_public/img/video/icon/ApirestFul.png" alt="" />
            </div>
          </dir>
           
            <div>
            <SubHeader title={"Familiar"}/>
            <div className="grid grid-cols-2 gap-32  mt-5 p-5">
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <SiRedux/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <SiPlaycanvas/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <TbBrandThreejs/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <TbBrandNextjs/></button>
            </div>
            </div>
            <div>
            <SubHeader title={"Now Learning"}/>
            <div className="grid grid-cols-1 gap-32  mt-5 p-5">  
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <SiTypescript className="animate-pulse"/></button>
            <button className="  rounded-xl  text-7xl p-2 me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">   <SiReduxsaga className="animate-spin"/></button>
            </div>
            </div>
           <div>
           <SubHeader title={"Tools "}/>
           <div className="grid grid-cols-3 gap-5  mt-5 p-5">
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <SiNetlify/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <FiFigma/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <SiVercel /></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <SiCanva className="animate-spin"/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <SiDotenv/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"> <AiFillWindows/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">  <TbBrandVscode/></button>
            </div>
           </div>
            
            
           
           
            <div>
            <SubHeader title={"Interpersonal Skill"}/>
            <div className="grid grid-cols-1 gap-10  mt-5 p-5">
            <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">   <p>Team Worker</p></button>
          <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">   <p>Heard Worker</p></button>
          <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">   <p>Good communication</p></button>
            </div>
            </div>
            
          </Marquee>
        </div>
      </div>
    );
};

export default Skills;