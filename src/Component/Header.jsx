import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { ThemContext } from "../Layout/Main";


const Header = ({title}) => {
  const dark = useContext(ThemContext)
    
    return (
        <div className="p-5 flex uppercase flex-col mx-auto">
        <h1 className="text-3xl font-thin italic mx-auto">
          <span className={dark?'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-indigo-400 list-none text-left text-5xl  outline-title  font-bold  cursor-pointer  mb-5 hover:text-cyan-400':'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-indigo-400 list-none text-left text-sm md:text-5xl  outline-title-dark  md:font-bold  cursor-pointer  mb-5 hover:text-cyan-400'}>
            <Typewriter
              words={[`${title}`]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    );
};

export default Header;