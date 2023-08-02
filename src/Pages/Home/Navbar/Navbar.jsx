
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { ThemContext } from "../../../Layout/Main";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { BiSolidContact } from "react-icons/bi";
const Navbar = () => {
  
const dark = useContext(ThemContext)
  const navMenu = <>
   
  
      <Link to='/home' smooth={true} >
       <FaHome className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8" title="Home"/>
      </Link>
    
  
      <Link to='skill' smooth={true} >
       <GiSkills className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8" title="Skills" />
      </Link>
    
  
      <Link to='project'  smooth={true} >
        <GoProjectSymlink className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8" title="Projects"/>
      </Link>
    
  
      <Link to='contact' smooth={true}  >
        <BiSolidContact className=" px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8" title="Contact"/>
      </Link>
    
  </>
  
  return (
    <div className="" >
      <div className="navbar" id="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost border lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-4xl dropdown-content mt-2 p-2 text-transparent  bg-gradient-to-r from-cyan-500 to-indigo-400  rounded-box h-[200px]  z-40  w-[200px]">
              {navMenu}
            </ul>
          </div>
          <NavLink className={dark? 'text-black uppercase text-2xl font-bold italic':'text-white uppercase text-2xl font-bold italic'} >Ta<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-xl">ri</span>k</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" >
            {navMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;