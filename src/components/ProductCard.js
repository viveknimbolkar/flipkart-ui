import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flipkartAssuredIcon from "../assets/flipkart-assured.png";
import { faStar, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/user.svg";
import "../css/product-card.css";
function ProductCard({ productDetails }) {
  
  var inFormatPrice = productDetails.price.toLocaleString("hi-IN");
  var inFormatOriginalPrice =
    productDetails.originalPrice.toLocaleString("hi-IN");
  var inFormatPurchases = productDetails.purchases.toLocaleString("hi-IN");
  return (
    <Link
      to={productDetails.link}
      className="text-decoration-none text-dark theme-font-size"
    >
      <div style={{ border: "none" }} class="card product-boxshadow">
        <img src={userImg} class="card-img-top p-2" alt="product image" />
        <div class="card-body lh-lg">
          <div class="card-text product-details">{productDetails.details}</div>
          <div className="text-secondary">
            Quantity {productDetails.quantity}
          </div>
          <div className="d-flex">
            <div class="dropdown">
              <ProductCard rating={productDetails.rating} />
              <div
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className={`bg-${
                  Number(productDetails.rating) < 3 ? "danger" : "success"
                } text-white product-rating`}
              >
                {productDetails.rating} <FontAwesomeIcon icon={faStar} />
              </div>

              <div class="dropdown-menu">googel</div>
            </div>
            <p className="mx-2 text-secondary">({inFormatPurchases})</p>
            <div>
              {productDetails.flipkartAssured && (
                <img src={flipkartAssuredIcon} width={90} />
              )}
            </div>
          </div>
          <div className="justify-content-between d-flex align-items-center">
            <strong className="fs-5">
              <FontAwesomeIcon icon={faIndianRupee} /> {inFormatPrice}
            </strong>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faIndianRupee} />
              <s> {inFormatOriginalPrice}</s>
            </div>
            <div className="d-flex text-success align-items-center">
              {productDetails.discount}% off
            </div>
          </div>
          <p>{productDetails.deliveryCharges}</p>
          <p className="text-success">Save Details</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
