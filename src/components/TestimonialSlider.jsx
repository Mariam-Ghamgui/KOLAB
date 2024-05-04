import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from "./Testimonial1"; 
import Testimonial2 from "./Testimonial2"; 
import Testimonial3 from "./Testimonial3"; 

const TestimonialSlider = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 1000, 
  };

  return (
    <div>
      <Slider {...settings} >
        <div>
          <Testimonial1 />
        </div>
        <div>
          <Testimonial2 />
        </div>
        <div>
          <Testimonial3 />
        </div>
        
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
