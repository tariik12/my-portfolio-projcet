import Banner from "../Banner/Banner";
import TextHeader from "../TextHeader/TextHeader";


// import Skill from "../Skill/Skill";
// import Course from "../Course/Course";
// import Education from "../Education/Education";
// import Language from "../Language/Language";
// import Activities from "../Activities/Activities";
// import Hobby from "../Hobby/Hobby";
// import Review from "../Review/Review";


// import TopProject from "../TopProject/TopProject";
import Contact from "../Contact/Contact";
import Skills from "../../../Skills/Skills";
import Project from "../Project/Project";
import { Helmet } from "react-helmet";
// import ProjectDetails from "../../../Component/ProjectDetails";


const Home = () => {
    return (
        <div id="home">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tarik | Home</title>
                
            </Helmet>
            <TextHeader></TextHeader>
            <Banner></Banner>
            <Skills/>
             <Project/>
             {/* <ProjectDetails></ProjectDetails> */}
            {/* <TopProject></TopProject> */}
            <Contact></Contact>

            {/* TODO */}
            {/* <Course></Course> */}
            {/* <Education></Education> */}
            {/* <Language></Language> */}
            {/* <Activities></Activities> */}
            {/* <Hobby></Hobby> */}
            {/* <Review></Review> */}
            

        </div>
    );
};

export default Home;