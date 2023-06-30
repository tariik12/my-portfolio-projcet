import Banner from "../Banner/Banner";
import Skill from "../Skill/Skill";
import TextHeader from "../TextHeader/TextHeader";

import Course from "../Course/Course";
import Education from "../Education/Education";
import Language from "../Language/Language";
import Activities from "../Activities/Activities";
import Hobby from "../Hobby/Hobby";
import TopProject from "../TopProject/TopProject";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div id="home">
            <TextHeader></TextHeader>
            <Banner></Banner>
            <Skill></Skill>
            <TopProject></TopProject>
            <Course></Course>
            <Education></Education>
            <Language></Language>
            <Activities></Activities>
            <Hobby></Hobby>
            <Review></Review>
            

        </div>
    );
};

export default Home;