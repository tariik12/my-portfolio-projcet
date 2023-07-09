import  { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';
import { loadFull } from 'tsparticles';
import psParticles from '../../public/particles.json';
import psParticles1 from '../../public/particles1.json';
import Particles from 'react-tsparticles';
import { MdOutlineDarkMode } from 'react-icons/md';
import { createContext } from 'react';


const particlesInit = (engine) => {
  loadFull(engine);
};
export const ThemContext = createContext(null)
const Main = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <ThemContext.Provider value={dark}>
      {dark ? (
        <Particles init={particlesInit} options={psParticles1} />
        ) : (
          <Particles init={particlesInit} options={psParticles} />
      )}


      <Navbar />
      <div>
      <p  className=' ms-[200px] w-5 -mt-[50px]   md:-mt-14 ' onClick={toggleDarkMode}><MdOutlineDarkMode className={dark? 'text-black':'text-white'} style={{fontSize:'40px'}}/></p>
      </div>
      <Outlet />
      <Footer />
    </ThemContext.Provider>
  );
};

export default Main;
