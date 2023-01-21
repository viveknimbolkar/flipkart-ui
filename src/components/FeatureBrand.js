import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/feature-brand.css";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

function FeatureBrand({ images }) {
  const featureBrandContainerRef = useRef(null);
  const handleRightScroll = (e) => {
    e.preventDefault();
    featureBrandContainerRef.current.scrollLeft += 100;
  };

  const handleLeftScroll = (e) => {
    e.preventDefault();
    featureBrandContainerRef.current.scrollLeft -= 100;
  };
  return (
    <div className="container-fluid">
      <div className="row p-2">
        <div className="col-md-12 text-start">
          <h4 className="fw-bold">Featured Brand</h4>
        </div>
        <div className="d-flex">
          <button
            onClick={handleLeftScroll}
            className="flipkart-feature-brand-btn-left btn "
          >
            <FontAwesomeIcon icon={faLessThan} />
          </button>
          <div
            ref={featureBrandContainerRef}
            className="flipkart-feature-brand-container d-flex"
            id="feature-brand"
          >
            {images.map((item) => {
              return (
                <div className="flipkart-feature-brand-image-container card">
                  <a href="$">
                    <img src={item} />
                  </a>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleRightScroll}
            className=" flipkart-feature-brand-btn-right btn  btn-lg"
          >
            <FontAwesomeIcon icon={faGreaterThan} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeatureBrand;
