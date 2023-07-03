import { useContext } from "react";
import { Link } from "react-scroll";
import { ThemContext } from "../../../Layout/Main";
import { FaRockrms } from 'react-icons/fa';


const Footer = () => {
  const dark = useContext(ThemContext)
    return (
        <div>
          <footer className="footer footer-center p-10  text-base-content rounded"> 
  <div className="flex gap-10">
    <p className={dark?'text-white':'text-black'}>Copyright © 2023 - All right reserved by Md. Tarikul Islm</p>
  <Link to="navbar" smooth={true} className="btn btn-lg text-4xl me-5 bg-gradient-to-t from-cyan-500  to-indigo-400 "><FaRockrms className="animate-bounce" /></Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;