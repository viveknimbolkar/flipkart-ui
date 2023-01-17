import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/brand-logo.webp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RatingPill from "../components/RatingPill";
import { GlobalContext } from "../context/GlobalState";
import "../css/product.css";
import flipakartPlusPoster from "../assets/flipkart-plus-poster.webp";
import { Modal } from "react-bootstrap";
import flipkartAssuredIcon from "../assets/flipkart-assured.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  faTag,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import SellerRatingPill from "../components/SellerRatingPill";

function DeliveryDetails(props) {
  return (
    <Modal
      {...props}
      size="k"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delivery & Installation Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-auto theme-font-size">Delivery by</div>
          <div className="d-flex gap-2">
            <div className="fw-bold border-right">22 Jan, Sunday</div>
            <strong className="text-success fw-bold">Free</strong>
            <span className="text-secondary">
              <FontAwesomeIcon icon={faIndianRupee} />
              <s>40</s>
            </span>
          </div>
          <span className="product-order-before">
            if ordered before 7:15 PM
          </span>
          <div>
            <p className="text-secondary fw-bold theme-font-size">
              Installation Details
            </p>
            <ul>
              <li className="theme-font-size">
                This product doesn't require installation
              </li>
            </ul>
          </div>
          <div>
            <p className="text-secondary theme-font-size fw-bold">
              Shipping Charges For Flipkart Assured Items
            </p>
            <p className="theme-font-size">
              Shipping Charges For Flipkart Assured Items
            </p>
            <p className="theme-font-size">
              For Plus customers, shipping charges are free. For non-Plus
              customers, if the total value of FAssured items is more than
              Rs.500, shipping charges are free. If the total value of FAssured
              items is less than Rs.500, shipping charges = Rs.40 per unit * For
              faster delivery, shipping charges will be applicable.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Product() {
  const { product } = useContext(GlobalContext);
  const [activeImg, setActiveImg] = useState(0);
  const [modal, setModal] = useState(false);
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
              <div className="d-flex gap-3 align-items-center">
                <RatingPill rating={4.3} />
                <span className="text-secondary">(1,56,569)</span>

                <img src={flipkartAssuredIcon} width={80} />
              </div>
              <p className="text-success">
                Extra <FontAwesomeIcon icon={faIndianRupee} /> 2000 off
              </p>
              <div className="d-flex align-items-center gap-4">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faIndianRupee} size="xl" />
                  <h2 className="fw-bold">33,990</h2>
                </span>
                <span className="text-secondary">
                  <s>
                    <FontAwesomeIcon icon={faIndianRupee} />
                    45,990
                  </s>
                </span>
                <span className="text-success fw-bold">26% off</span>
              </div>
              <div>
                <ul className="list-unstyled">
                  <li className="d-flex flex-wrap align-items-center theme-font-size">
                    <FontAwesomeIcon
                      className="text-success mx-2"
                      icon={faTag}
                    />
                    <strong className="">Bank Offer</strong>
                    <span>
                      10% off on Citi Credit Card and EMI Transactions, up to
                      ₹1,500. On orders of ₹5,000 and above
                    </span>
                    <Link to="/account">T&C</Link>
                  </li>
                </ul>
              </div>
              <div className=" d-flex flex-column w-50">
                <div className="d-flex justify-content-between p-3 border">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Buy with exchange
                    </label>
                  </div>
                  <span>33,990</span>
                </div>
                <div className="d-flex justify-content-between p-3 border">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Buy without exchange
                    </label>
                  </div>
                  <span className="text-secondary">
                    Upto <FontAwesomeIcon icon={faIndianRupee} /> 12,000 off
                  </span>
                  <div className="flex-0">sdfs</div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <img className="border" src={brandLogo} width={60} />
                  <span className="mx-2 theme-font-size">
                    One year onsite warranty
                  </span>
                  <strong className="text-primary theme-pointer-cursor">
                    Know More
                  </strong>
                </div>
              </div>
              <div className="product-highlight-container">
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="row">
                      <div className="col-md-2">
                        <h6 className="text-secondary"> Delivery</h6>
                      </div>
                      <div className="col-md-10 d-flex flex-column">
                        <div class="input-group d-flex mx-3 align-items-center dropdown ">
                          <div style={{ width: 20 }}>
                            <FontAwesomeIcon
                              class="text-primary mx-1"
                              icon={faLocationDot}
                            />
                          </div>
                          <input
                            type="text"
                            class="product-delivery-pincode"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          />
                          <span class="text-primary theme-pointer-cursor fw-bold mx-2">
                            check
                          </span>
                          <ul class="dropdown-menu px-2">
                            <h6 className="theme-font-size">
                              From Saved Address
                            </h6>
                            <li className="proudct-address-item theme-font-size">
                              <a class="dropdown-item" href="#">
                                <strong>444567</strong>
                                <span className="mx-2 text-secondary">
                                  Amravati Tq. Amravati Dist. Amravati
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="">
                          <span className="theme-font-size border-right fw-bold">
                            Delivery by22 Jan, Sunday
                          </span>
                          <strong className="text-success mx-2 theme-font-size">
                            Free &nbsp;
                            <FontAwesomeIcon icon={faIndianRupee} /> 40
                          </strong>
                          <br />
                          <span className="product-order-before">
                            if ordered before 7:15 PM
                          </span>
                          <p
                            className="text-primary theme-pointer-cursor theme-font-size fw-bold"
                            onClick={() => setModal(true)}
                          >
                            View Details
                          </p>
                          <DeliveryDetails
                            show={modal}
                            onHide={() => setModal(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2 theme-font-size text-secondary">
                        Highlights
                      </div>
                      <div className="col-md-10">
                        <ul className="theme-font-size">
                          <li>
                            <p>Stylish & Portable Thin and Light Laptop</p>
                          </li>
                          <li>
                            <p>
                              15.6 inch Full HD (200nits, 45% NTSC color gamut,
                              non-OLED, Anti-glare display)
                            </p>
                          </li>
                          <li>
                            <p>Finger Print Sensor for Faster System Access</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2 theme-font-size text-secondary">
                        Easy Payment Options
                      </div>
                      <div className="col-md-10">
                        <ul className="theme-font-size">
                          <li>
                            <p>Stylish & Portable Thin and Light Laptop</p>
                          </li>
                          <li>
                            <p>
                              15.6 inch Full HD (200nits, 45% NTSC color gamut,
                              non-OLED, Anti-glare display)
                            </p>
                          </li>
                          <li>
                            <p>Finger Print Sensor for Faster System Access</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2 theme-font-size text-secondary">
                        Seller
                      </div>
                      <div className="col-md-10">
                        <p className="text-primary d-flex fw-bold">
                          IBL Online <SellerRatingPill rating={2.6} />
                        </p>
                        <ul className="theme-font-size">
                          <li>
                            <p>Stylish & Portable Thin and Light Laptop</p>
                          </li>
                          <li>
                            <p>
                              15.6 inch Full HD (200nits, 45% NTSC color gamut,
                              non-OLED, Anti-glare display)
                            </p>
                          </li>
                          <li>
                            <p>Finger Print Sensor for Faster System Access</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src={flipakartPlusPoster} />
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
