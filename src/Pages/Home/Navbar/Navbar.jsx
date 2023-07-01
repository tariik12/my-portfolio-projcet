
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";



const Navbar = () => {


    

  const navMenu = <>

    <li>
      <Link to='home' smooth={true}  >
        Home
      </Link>
    </li>
    <li>
      <Link to='education' smooth={true} >
        Education
      </Link>
    </li>
    <li>
      <Link to='skill' smooth={true} >
        Skill
      </Link>
    </li>
    <li>
      <Link to='topProject' smooth={true} >
        Top project
      </Link>
    </li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navMenu}
            </ul>
          </div>
          <NavLink className=" uppercase text-2xl font-bold italic">Ta<span className="text-cyan-500 text">ri</span>k</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;