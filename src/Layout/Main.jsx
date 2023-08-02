import  { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';
import { loadFull } from 'tsparticles';
import psParticles from '../../public/particles.json';
import psParticles1 from '../../public/particles1.json';
import Particles from 'react-tsparticles';
import { CgDarkMode } from 'react-icons/cg';
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
      <p  className=' ms-[200px] text-7xl -mt-[50px]   md:-mt-20 ' onClick={toggleDarkMode}><CgDarkMode className={dark? 'text-black cursor-pointer md:text-7xl text-3xl':'text-white cursor-pointer md:text-7xl text-3xl'} /></p>
      </div>
      <Outlet />
      <Footer />
    </ThemContext.Provider>
  );
};

export default Main;
