
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { ThemContext } from "../../../Layout/Main";



const Navbar = () => {
  
const dark = useContext(ThemContext)
  const navMenu = <>
    <li>
      <Link to='education' smooth={true} className={dark? 'text-white':'text-black'} >
        Education
      </Link>
    </li>
    <li>
      <Link to='skill' smooth={true} className={dark? 'text-white':'text-black'}>
        Skill
      </Link>
    </li>
    <li>
      <Link to='topProject' smooth={true} className={dark? 'text-white':'text-black'}>
        Top project
      </Link>
    </li>
  </>
  return (
    <div>
      <div className="navbar" id="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-4xl dropdown-content mt-2 ms-4 p-2 text-transparent  bg-gradient-to-r from-cyan-500 to-indigo-400  rounded-box h-52 z-40 w-96">
              {navMenu}
            </ul>
          </div>
          <NavLink className={dark? 'text-white uppercase text-2xl font-bold italic':'text-black uppercase text-2xl font-bold italic'} >Ta<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-xl">ri</span>k</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;