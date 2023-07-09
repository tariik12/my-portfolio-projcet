import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import resume from "../../../../public/resume.json";
import Lottie from "lottie-react";
import myPdf from "../../../../public/resume.pdf";
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Banner = () => {
    const handleDownload = () => {
        window.open(myPdf, '_blank');
    };
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 items-center gap-5 overflow-x-hidden'>
            <div className="absolute top-[420px] left-[10px] md:top-[540px] md:left-[600px]">
                <Link to='https://github.com/tariik12' className="btn md:btn-lg btn-md text-lg md:text-4xl me-2 bg-gradient-to-t from-cyan-500  to-indigo-400"><AiFillGithub /></Link >
                <Link to='https://www.facebook.com/tariikul12' className="btn md:btn-lg btn-md text-lg md:text-4xl bg-gradient-to-t from-cyan-500 me-2  to-indigo-400"><FiFacebook className="after:animate-pulse" /></Link >
                <Link to='https://www.linkedin.com/in/md-tarikul-islam-8113b9282/' className="btn md:btn-lg btn-md text-lg md:text-4xl bg-gradient-to-t from-cyan-500  to-indigo-400"><AiFillLinkedin /></Link >
            </div>
            <div className=" mb-0 pb-0 ">
                <div className=" w-full relative hover:opacity-40 ">
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
                </div>
                <div className=' mx-auto mt-10  flex justify-center gap-5'>

                    <button className="btn text-xs md:font-bold md:text-xl bg-gradient-to-t from-cyan-500 
                                  to-indigo-400" onClick={handleDownload}>Resume PDF</button>
                    <button className="btn text-xs md:font-bold md:text-xl bg-gradient-to-r from-cyan-500 
                                  to-indigo-400" >About More Me</button>
                </div>
            </div>

            <div className=" relative hover:opacity-40" >
                <img className="w-[220px] animate-pulse  z-50 absolute md:ms-52 mt-10 ms-[70px] h-[270px] nx-auto " src="https://i.ibb.co/BwLqTJK/DSC-0028-2-01-2-jpeg-removebg-preview.png" alt="" />
                <div className=" h-[400px]  mx-auto md:w-full">
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