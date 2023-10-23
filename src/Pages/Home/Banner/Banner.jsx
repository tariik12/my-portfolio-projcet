import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import resume from "../../../../public/resume.jso";
// import Lottie from "lottie-react";
import myPdf from "../../../../public/resumeOfMdTarikulIslam.pdf";
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { ThemContext } from "../../../Layout/Main";
import { useContext } from "react";
import { CgCloseO } from "react-icons/cg";


const Banner = () => {
    const dark = useContext(ThemContext)
    const handleDownload = () => {
        window.open(myPdf, '_blank');
    };


    return (
        <div id="/home" className='py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-5 overflow-x-hidden'>
       
            <div className=" mb-0 pb-0 " >
                {/* <div className=" w-full relative hover:opacity-40 ">
                    <div className="absolute z-50">
                        <Lottie animationData={resume} loop={true} />
                    </div>
                    <div className="md:h-[300px] h-[200px]">
                        <Canvas className=" animate-pulse " >
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.8}>
                                <MeshDistortMaterial color="#1e9db3" attach="material" distort={0.4} speed={2} />
                            </Sphere>

                        </Canvas>
                    </div>
                </div> */}
                <div className='     '>
              <h1 className={dark? 'text-black  text-2xl text-center font-bold italic':'text-white  text-2xl font-bold italic text-center'}  >

                
              {/* className='  ps-3 text-4xl md:font-thin italic font-bold  ' */}
                  Hey There, I am a  <br /> <br />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 uppercase 
                                  to-indigo-400  rounded-xl mb-10 '>
                                <Typewriter
                                    words={["Full Stack WEB DEVELOPER", "MERN STACK DEVELOPER", " FRONT-END DEVELOPER" ," Web Developer"]}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h1>
          
              </div>
                <div className=' mx-auto mt-10  flex justify-center gap-5'>

                    <button className="btn text-xs md:font-bold md:text-xl bg-gradient-to-t from-cyan-500 
                                  to-indigo-400 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" onClick={handleDownload}>Resume PDF</button>
                                  {/* Open the modal using ID.showModal() method */}
<button className="btn text-xs md:font-bold md:text-xl bg-gradient-to-r from-cyan-500 to-indigo-400 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" onClick={()=>window.my_modal_10.showModal()}>About Me</button>
<dialog id="my_modal_10" className="modal modal-middle ">
  <form method="dialog" className="modal-box">
    <div >
        
    <img className="w-[200px] h-[200px] animate-pulse hover:w-[220px] hover:h-[220px] border-indigo-300 border-4 mx-auto rounded-full" src="https://imagizer.imageshack.com/img924/4374/aQnXfl.jpg" alt="" />
        <h3 className="font-thin md:text-4xl text-2xl ">Hello there, My name is Md. Tarikul Islam</h3>
    <p className="md:py-4 py-2">I am a hard worker and like to build my programming career by learning new topics and I always like fixed-time maintenance. </p>
    </div>
    <div className="flex justify-center mt-5">
    <button className="rounded-full" ><CgCloseO className="   rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="close" /></button>
    </div>
  </form>
</dialog>
                </div>
                <div className="flex justify-center mt-7">
                <Link to='https://github.com/tariik12' ><AiFillGithub className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"/></Link >
                <Link to='https://www.facebook.com/tariikul12' ><FiFacebook className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" /></Link >
                <Link to='https://www.linkedin.com/in/md-tarikul-islam-8113b9282/' ><AiFillLinkedin className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white"/></ Link >
            </div>
            </div>

            <div className=" relative hover:opacity-40" >
                <img className="w-[220px] animate-pulse  z-50 absolute md:ms-52 mt-10 ms-[70px]  nx-auto " src="https://i.ibb.co/5cWVgdQ/IMG-20230721-183222-01-removebg-preview-3-removebg-preview-1-removebg-preview.pnghttps://i.ibb.co/D4MGHpX/IMG-20230721-183222-01-removebg-preview-4-removebg-preview-1.png" alt="" />
                <div className=" h-[400px]  mx-auto  md:w-full">
                    <Canvas className=" animate-pulse" >
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.8}>
                            <MeshDistortMaterial color="#1e9db3" attach="material" distort={0.4} speed={2} />
                        </Sphere>

                    </Canvas>
                </div>


            </div>
        </div>
    );
};

export default Banner;