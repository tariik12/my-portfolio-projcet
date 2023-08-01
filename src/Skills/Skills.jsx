import Marquee from "react-fast-marquee";
// import { ParallaxContext } from "react-scroll-parallax";
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
        <div id="skill" className="">
          
            <Header title={'Skills And Technology'}/>

        <div>
            <SubHeader title={"Expertise"}/>
          <Marquee direction="right" className="text-center  mt-5 p-5">
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
            
          </Marquee>
          <SubHeader title={"Comfortable"}/>
          <Marquee direction="left" className="text-center  mt-5 p-5">
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
         
          </Marquee>
        </div>
     
        <SubHeader title={"Familiar"}/>
          <Marquee direction="right" className="text-center  mt-5 p-5">
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <SiRedux/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <SiPlaycanvas/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <TbBrandThreejs/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <TbBrandNextjs/></button>
           
          
          
        
          </Marquee>
        
     
          <SubHeader title={"Tools "}/>
          <Marquee direction="left" className="text-center  mt-5 p-5">
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiNetlify/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <FiFigma/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiVercel /></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiCanva className="animate-spin"/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <SiDotenv/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <AiFillWindows/></button>
            <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse">  <TbBrandVscode/></button>
           
            
           
            
            
           
           
          </Marquee>
        
          <SubHeader title={"Now Learning"}/>
          <Marquee direction="right" className="text-center  mt-5 p-5">
          <button className=" rounded-xl   text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 p-2 hover:animate-bounce animate-pulse"> <SiTypescript className="animate-pulse"/></button>
            <button className="  rounded-xl  text-7xl p-2 me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <SiReduxsaga className="animate-spin"/></button>
           
          
          </Marquee>
          <SubHeader title={"Interpersonal Skill"}/>
          <Marquee direction="left" className="text-center  mt-5 p-5">
          <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <p>Team Worker</p></button>
          <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <p>Heard Worker</p></button>
          <button className="h-[92px] rounded-xl  w-[122px] p-2   me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 hover:animate-bounce animate-pulse">   <p>Good communication</p></button>
         
        
         
          </Marquee>
       
      </div>
    );
};

export default Skills;