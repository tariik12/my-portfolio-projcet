import { useContext } from "react";
import { Link } from "react-scroll";
import { ThemContext } from "../../../Layout/Main";
import { FaRockrms } from 'react-icons/fa';


const Footer = () => {
  const dark = useContext(ThemContext)
    return (
        <div className=" border-cyan-500">
          <footer className="footer footer-center p-10  text-base-content rounded"> 
  <div className="md:flex md:gap-10">
    <p className={dark?'text-black':'text-white'}>Copyright © 2023 - All right reserved by Md. Tarikul Islm</p>
  <Link to="navbar" smooth={true} className="flex-grow-1  animate-bounce rounded-full text-4xl me-5 bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer "><FaRockrms className="" /></Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;