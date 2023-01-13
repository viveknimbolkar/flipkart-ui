import React from "react";
import logo from "../assets/logo.png";
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
import { Link } from "react-router-dom";
function Header() {
  const userDropdown = [
    {
      label: "My Profile",
      icon: faUser,
    },
    {
      label: "Flipkart Plus Zone",
      icon: faPlus,
    },
    {
      label: "SuperCoin Zone",
      icon: faCoins,
    },
    {
      label: "Orders",
      icon: faBagShopping,
    },
    {
      label: "Wishlist",
      icon: faList,
    },
    {
      label: "Coupons",
      icon: faTicket,
    },
    {
      label: "Gift Cards",
      icon: faGift,
    },
    {
      label: "Notifications",
      icon: faBell,
    },
    {
      label: "Logout",
      icon: faRightFromBracket,
    },
  ];
  return (
    <nav style={{position:'fit'}} className="navbar  navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <img src={logo} className="img-fluid" width={50} alt="flipkart-logo" />

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className=" navbar-nav align-items-center w-100 justify-content-around text-light">
            <li className="nav-item">
              <div class="input-group w-100">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for product's, brands and many more..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button class="btn btn-light" type="button" id="button-addon2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
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
                    <li className="d-flex align-items-center  border-bottom dropdown-item">
                      <FontAwesomeIcon icon={item.icon} />
                      <a className="dropdown-item" href="#">
                        {item.label}
                      </a>
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
