import React from "react";
import GetStarted from "../components/GetStarted";
import Features from "../components/Features";
import ScrolledImages from "../components/ScrolledImages";
import Footer from "../components/Footer";
import OurFeatures2 from "../components/OurFeatures2";
import OurFeatures1 from "../components/OurFeatures1";
import VisualizeWork from "../components/VisualizeWork";
import TestimonialSlider from "../components/TestimonialSlider";

function LandingPage() {
    return (
      <div>
        <GetStarted />
        <Features />
        <ScrolledImages />
        <OurFeatures1 />
        <OurFeatures2 />
        <VisualizeWork />
        <TestimonialSlider />
        <Footer />
      </div>
    );
  }
  
  export default LandingPage;