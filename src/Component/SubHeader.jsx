

const SubHeader = ({title}) => {
    return (
        <div className=" md:ms-10" >
        <h1 className="md:text-3xl italic mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-xl ">
       {title}
          </span>
        </h1>
      </div>
    );
};

export default SubHeader;