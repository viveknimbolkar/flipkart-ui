import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import sliderImg1 from "../src/assets/slider-img-1.webp";
import sliderImg2 from "../src/assets/slider-img-2.webp";
import sliderImg3 from "../src/assets/slider-img-3.webp";
import FeatureBrand from "./components/FeatureBrand";
import featureBrand1 from "../src/assets/feature-brand-1.webp";
import featureBrand2 from "../src/assets/feature-brand-2.webp";
import featureBrand3 from "../src/assets/feature-brand-3.webp";
import featureBrand4 from "../src/assets/feature-brand-4.webp";
import featureBrand5 from "../src/assets/feature-brand-5.webp";
import featureBrand6 from "../src/assets/feature-brand-6.webp";
import featureBrand7 from "../src/assets/feature-brand-7.webp";

function App() {
  const imagesOfSlider = [sliderImg1, sliderImg2, sliderImg3];
  const featureBrandImages = [
    featureBrand1,
    featureBrand2,
    featureBrand3,
    featureBrand4,
    featureBrand5,
    featureBrand6,
    featureBrand7,
  ];
  return (
    <div className="App">
      <Header />
      <FeatureBrand cards={featureBrandImages} />
      <Slider images={imagesOfSlider} />

      <Footer />
    </div>
  );
}

export default App;
