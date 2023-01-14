import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import sliderImg1 from "../src/assets/slider-img-1.webp";
import sliderImg2 from "../src/assets/slider-img-2.webp";
import sliderImg3 from "../src/assets/slider-img-3.webp";
function App() {
  const imagesOfSlider = [sliderImg1, sliderImg2, sliderImg3];
  return (
    <div className="App">
      <Header />
      <Slider images={imagesOfSlider} />
      <Footer />
    </div>
  );
}

export default App;
