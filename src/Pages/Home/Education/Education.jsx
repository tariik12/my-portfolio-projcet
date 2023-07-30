// import Header from "../../../Component/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Education = ({image}) => {
  const {image1,image2,image3} = image
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay:true
    
  };
    return (
        <div id="education">
          {/* TODO */}
            {/* <Header title={'Education'}/> */}
            <div>
        <Slider {...settings} className="bg-black text-white text-4xl">
          <div >
            <img src={image1} alt="" />
          </div>
          <div >
          <img src={image2} alt="" />
          </div>
          <div >
          <img src={image3} alt="" />
          </div>
         
        </Slider>
      </div>

        </div>
    );
};

export default Education;