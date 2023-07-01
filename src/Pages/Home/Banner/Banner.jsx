import {  MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Banner = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 items-center gap-5 border'>
            <div className=" mb-0 pb-0 border">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate necessitatibus tempore assumenda molestias autem error voluptatem fugiat soluta reiciendis.</h1>
                <div className='mt-10 mx-auto border  flex justify-center '>
                {/* <button className='btn btn-outline me-10'>explore </button> */}
                <button className='btn btn-outline'> CV Download</button>
                </div>
            </div>
            
            <div className=" relative hover:opacity-40 " >
            <img className="w-[220px] animate-pulse  z-50 absolute ms-[220px] md:ms-52 mt-10 h-[270px]"  src="https://i.ibb.co/BwLqTJK/DSC-0028-2-01-2-jpeg-removebg-preview.png" alt="" />
            <div className=" h-[400px] w-full ">
            <Canvas className=" animate-pulse" >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1,100,200]} scale={2.8}>
                <MeshDistortMaterial  color="#1e9db3" attach="material" distort={0.4} speed={2}/>
                </Sphere>
               
            </Canvas>
            </div>
            
                
            </div>
        </div>
    );
};

export default Banner;