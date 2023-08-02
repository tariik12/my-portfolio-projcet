import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Skills from "../../../Skills/Skills";
import Project from "../Project/Project";
import { Helmet } from "react-helmet";



const Home = () => {
    return (
        <div id="home">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tarik | Home</title>
                
            </Helmet>
            <Banner></Banner>
            {/* <TextHeader></TextHeader> */}
            <Skills/>
             <Project/>
             {/* <ProjectDetails></ProjectDetails> */}
            {/* <TopProject></TopProject> */}
            <Contact></Contact>

            {/* TODO */}
            {/* <Course></Course> */}
            {/* <Education></Education> */}
        
          
           
            

        </div>
    );
};

export default Home;