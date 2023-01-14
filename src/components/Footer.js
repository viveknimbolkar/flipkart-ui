import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGift,
  faQuestion,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import paymentMethods from "../assets/payment-methods.svg";
function Footer() {
  return (
    <footer>
      <div className="container-fluid  bg-dark text-light">
        <div className="row p-4">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3 text-start">
                <h6 className="text-secondary  text-uppercase">About</h6>
                <ul className="text-left list-unstyled fw-light lh-lg">
                  <li className="nav-item ">
                    <a href="#" className="text-decoration-none text-light">
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Careers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Flipkart Stories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Press
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Flipkart
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Wholesale
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Corporate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Information
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 text-start">
                <h6 className="text-secondary  text-uppercase">Help</h6>
                <ul className="list-unstyled  fw-light lh-lg">
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Payments
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Shipping
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Cancellation & returns
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Report
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Infringement
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 text-start">
                <h6 className="text-secondary  text-uppercase">POLICY</h6>
                <ul className="list-unstyled  fw-light lh-lg">
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Return Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Term of Use
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Security
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Privacy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Sitemap
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      EPR Compliance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 text-start">
                <h6 className="text-secondary text-uppercase">social</h6>
                <ul className="list-unstyled  fw-light lh-lg">
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      FAcebook
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      Twitter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="text-light text-decoration-none">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 text-start">
                <h6>Mail us</h6>
                <address>
                  Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                  India
                </address>
              </div>
              <div className="col-md-6 text-start">
                <h6>Registered Office Address:</h6>
                <address>
                  Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                  India  <br/> CIN : U51109KA2012PTC066107 <br/> Telephone:
                  <a href="tel:044-45614700"> 044-45614700</a>
                </address>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 d-flex">
            <ul className="d-flex">
              <li className="list-unstyled mx-3 p-2">
                <a href="#" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faBagShopping}
                    alt="shopping bag"
                  />
                  <span>Become a Seller</span>
                </a>
              </li>
              <li className="list-unstyled mx-3 p-2">
                <a href="#" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faStar}
                    alt="shopping bag"
                  />
                  <span>Advertise</span>
                </a>
              </li>
              <li className="list-unstyled mx-3 p-2">
                <a href="#" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faGift}
                    alt="shopping bag"
                  />
                  <span>Gift Card</span>
                </a>
              </li>
              <li className="list-unstyled mx-3 p-2">
                <a href="#" className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faQuestion}
                    alt="shopping bag"
                  />
                  <span>Help</span>
                </a>
              </li>
            </ul>
            <time className=" mx-3 p-2">&copy; 2022-23 Flipkart.com</time>
            <div className="mx-3 p-2">
              <img src={paymentMethods} alt="payment methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
