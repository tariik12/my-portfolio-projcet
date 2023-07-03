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
          <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <FaReact className="animate-spin"/></button>
          <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <FaHtml5/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <FaCss3Alt/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <BsFillBootstrapFill/></button>
            <button className="btn h-48 w-48 text-7xl font-bold me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <TbBrandTailwind/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <SiDaisyui/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <SiReactrouter/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">   <BiLogoFirebase/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">   <SiReacthookform/></button>
            <button >   </button>
            <img className="btn h-48 w-48 p-16  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/02/js-es6.jpg?fit=1200%2C700&ssl=1" alt="" />
            
          </Marquee>
          <SubHeader title={"Comfortable"}/>
          <Marquee direction="left" className="text-center  mt-5 p-5">
          <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <TbBrandJavascript/></button>
          <button className="btn h-48 w-48 text-7xl    me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <FaNodeJs className="animate-spin"/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <BiLogoMongodb/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <p>JWT</p></button>
            <button className="btn h-48 w-48 text-7xl font-bold me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <SiAxios/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <BsFiletypeJson/></button>
            <button className="btn h-48 w-48 text-2xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">    <p>Devtool and Debugging</p></button>
            <button className="btn h-48 w-48 text-2xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">   <p>TansTack Query</p></button>
            <button >   </button>
            <img className="btn h-48 w-48 p-16  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400" src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="" />
            <img className="btn h-48 w-48 p-16  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400" src="https://www.coretech.it/_public/img/video/icon/ApirestFul.png" alt="" />
         
          </Marquee>
        </div>
     
        <SubHeader title={"Familiar"}/>
          <Marquee direction="right" className="text-center  mt-5 p-5">
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <SiRedux/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <SiPlaycanvas/></button>
            <button className="btn h-48 w-48 text-7xl font-bold me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <TbBrandThreejs/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <TbBrandNextjs/></button>
           
          
          
        
          </Marquee>
        
     
          <SubHeader title={"Tools "}/>
          <Marquee direction="left" className="text-center  mt-5 p-5">
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <SiNetlify/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <FiFigma/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <SiVercel /></button>
            <button className="btn h-48 w-48 text-7xl font-bold me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <SiCanva className="animate-spin"/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <SiDotenv/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <AiFillWindows/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">  <TbBrandVscode/></button>
           
            
           
            
            
           
           
          </Marquee>
        
          <SubHeader title={"Now Learning"}/>
          <Marquee direction="right" className="text-center  mt-5 p-5">
          <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400"> <SiTypescript/></button>
            <button className="btn h-48 w-48 text-7xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">   <SiReduxsaga className="animate-spin"/></button>
           
          
          </Marquee>
          <SubHeader title={"Interpersonal Skill"}/>
          <Marquee direction="left" className="text-center  mt-5 p-5">
          <button className="btn h-48 w-48 text-2xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">   <p>Team Worker</p></button>
          <button className="btn h-48 w-48 text-2xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">   <p>Heard Worker</p></button>
          <button className="btn h-48 w-48 text-xl  me-5 bg-gradient-to-t from-cyan-500  to-indigo-400">   <p>Good communication</p></button>
         
        
         
          </Marquee>
       
      </div>
    );
};

export default Skills;