import {
    OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "../../../Cube";
import './textHeader.css'


const TextHeader = () => {
    return (
        <div> 
            <div className=' font-mono text-2xl  mt-20'>
            <div className=" ">
            <Canvas camera={{fov:10, position:[5,5,5]}} >
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={2} />
                <directionalLight position={[3, 2, 1]} />
                <Cube/>
            </Canvas>
            </div>
        {/* <h2 className='text-center '> <span className="text-cyan-500 italic">Hey</span> Welcome,</h2> */}
              <div className=' p-5 flex mx-auto'>
              <div className='flex mx-auto uppercase font-thin'>
                    <p className=''>I&apos;m a </p>
                    <ul className='dynamicText text-cyan-500 italic'>
                    <li><span>Front End Developer</span></li>
                    <li><span>Full Stack Developer</span></li>
                    <li><span>MERN Stack Developer</span></li>
                    <li><span>React Developer</span></li>
                 </ul>
                 </div>
              </div>
                 </div>
                
           
        </div>
    );
};

export default TextHeader;