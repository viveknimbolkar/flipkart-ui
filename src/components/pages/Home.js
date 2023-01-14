import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Slider from "../Slider";
import sliderImg1 from "../../assets/slider-img-1.webp";
import sliderImg2 from "../../assets/slider-img-2.webp";
import sliderImg3 from "../../assets/slider-img-3.webp";
function Home() {
  const imagesOfSlider = [sliderImg1, sliderImg2, sliderImg3];

  return (
    <>
      <Header />
      <Slider images={imagesOfSlider} />
      <Footer />
    </>
  );
}

export default Home;
