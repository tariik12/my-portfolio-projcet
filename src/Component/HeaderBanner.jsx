import {  OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Header1 from './Header1'


const HeaderBanner = () => {
    return (
        <div>
              <div className="md:h-[500px] h-[400px]">
            <Canvas  >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                
                
       
       <Header1/>
        
                
               
            </Canvas>
            </div>
      
       
        </div>
    );
};

export default HeaderBanner;