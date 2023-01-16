import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RatingPill from "../components/RatingPill";
import { GlobalContext } from "../context/GlobalState";
import "../css/product.css";
function Product() {
  const { product } = useContext(GlobalContext);
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div>
      <Header />
      <div className="container-fluid bg-white">
        <div className="row my-3">
          <div className="col-md-5 d-flex border">
            <div class="d-flex flex-column mb-3 border product-img-tab-container">
              {product.images.map((image, i) => {
                return (
                  <div class="p-2" onMouseOver={() => setActiveImg(i)}>
                    <img src={image} className="img-fluid" />
                  </div>
                );
              })}
            </div>
            <div className="col-auto product-img">
              <img src={product.images[activeImg]} alt="product image" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="col-auto">
              <h5 className="fw-normal">
                HP 14s Intel Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11
                Home) 14s - dy2507TU Thin and Light Laptop (14 inch, Natural
                Silver, 1.41 Kg, With MS Office)
              </h5>
              <div className="d-flex">
                <RatingPill rating={4.3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
