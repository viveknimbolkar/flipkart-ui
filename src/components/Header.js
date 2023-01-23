import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBell,
  faCoins,
  faGift,
  faList,
  faMagnifyingGlass,
  faPlus,
  faRightFromBracket,
  faTicket,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import shoppingVector from "../assets/shopping.png";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
function Header() {
  const [authModal, setAuthModal] = useState(false);
  const userDropdown = [
    {
      label: "My Profile",
      icon: faUser,
      path: "/account/",
    },
    {
      label: "Flipkart Plus Zone",
      icon: faPlus,
      path: "/account/pluszone",
    },
    {
      label: "SuperCoin Zone",
      icon: faCoins,
      path: "/account/supercoin",
    },
    {
      label: "Orders",
      icon: faBagShopping,
      path: "/account/orders",
    },
    {
      label: "Wishlist",
      icon: faList,
      path: "/account/wishlist",
    },
    {
      label: "Coupons",
      icon: faTicket,
      path: "/account/coupons",
    },
    {
      label: "Gift Cards",
      icon: faGift,
      path: "/account/giftcard",
    },
    {
      label: "Notifications",
      icon: faBell,
      path: "/account/notifications",
    },
    {
      label: "Logout",
      icon: faRightFromBracket,
      path: "/account/logout",
    },
  ];

  function AuthModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="row d-flex auth-container">
          <div className="col-md-5 p-4 text-white bg-primary">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
            <img width={300} src={shoppingVector} />
          </div>
          <div className="col-md-7 p-4 ">
            <input
              className="w-100 my-4"
              placeholder="Enter your email..."
              type="text"
            />
            <p>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
            <button className=" otp-btn my-4 text-white  w-100">
              Request OTP
            </button>
            <p style={{ cursor: "pointer" }} className="text-primary">
              New to Flipkart? Create an account
            </p>
          </div>
        </div>
      </Modal>
    );
  }
  return (
    <nav
      style={{ position: "fit" }}
      className="navbar  navbar-expand-lg navbar-dark bg-primary"
    >
      <div className="container-fluid">
        <Link to="/">
          <img
            src={logo}
            className="img-fluid"
            width={50}
            alt="flipkart-logo"
          />
        </Link>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className=" navbar-nav align-items-center w-100 justify-content-around text-light">
            <li className="nav-item w-50">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for product's, brands and many more..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <Link to="/search">
                  <button
                    class="btn btn-light"
                    type="button"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </Link>
              </div>
            </li>
            <li className="nav-item fw-bold">
              <button
                onClick={() => setAuthModal(true)}
                className="btn bg-white text-primary fw-bold login-btn"
              >
                Login
              </button>
              <AuthModal show={authModal} onHide={() => setAuthModal(false)} />
            </li>
            <li className="nav-item dropdown fw-bold">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vivek
              </a>
              <ul className="dropdown-menu ">
                {userDropdown.map((item, i) => {
                  return (
                    <li
                      key={`list-${i}`}
                      className="d-flex align-items-center  border-bottom dropdown-item"
                    >
                      <FontAwesomeIcon icon={item.icon} />

                      <Link className="dropdown-item" to={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item fw-bold">
              {/* <Link to={'/cart'}> */}
              <FontAwesomeIcon icon={faShoppingCart} />
              Cart
              {/* </Link> */}
            </li>
            <li className="nav-item fw-bold">
              <a className="nav-link text-light" href="#">
                Become a Sellar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
