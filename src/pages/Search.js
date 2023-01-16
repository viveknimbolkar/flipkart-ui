import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";
const productDetails = {
  details: "details ssssssssssssssssssssssssssssssssssssssssssssssssss",
  quantity: "45ml",
  rating: "4.7",
  price: "3,672",
  originalPrice: "7,342",
  discount: "34",
  deliveryCharges: "free delivery",
  link: "/account",
  imgLink: "",
  flipkartAssured: true,
  purchases: "122334",
};
// sort and render items by popularity
function SortByPopularity(params) {
  return (
    <div className="col-md-3">
      <ProductCard productDetails={productDetails} />
    </div>
  );
}

// sort and render items by low to hign
function SortByLowToHigh(params) {
  return (
    <div className="col-md-3">
      <ProductCard productDetails={productDetails} />
    </div>
  );
}

// sort and render items by hith to low
function SortByHighToLow(params) {
  return (
    <div className="col-md-3">
      <ProductCard productDetails={productDetails} />;
    </div>
  );
}

function Search() {
  const [activeTab, setActiveTab] = useState(1);

  function getActiveTab() {
    if (activeTab == 1) {
      return <SortByPopularity />;
    } else if (activeTab == 2) {
      return <SortByLowToHigh />;
    } else {
      return <SortByHighToLow />;
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-md-3">
            <SearchFilter />
          </div>
          <div className="col-md-9 bg-white p-2">
            <div className="d-flex theme-font-size">
              <h6>All Categories</h6>
              <p className="text-secondary mx-2">
                (Showing 1 – 40 products of 2,89,034 products)
              </p>
            </div>
            <div className="search-product-container">
              <ul class="nav">
                <li class="nav-item nav-link text-dark">Sort By</li>
                <li class="nav-item">
                  <a
                    onClick={() => setActiveTab(1)}
                    class="nav-link theme-pointer-cursor"
                    aria-current="page"
                  >
                    Popularity
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => setActiveTab(2)}
                    class="nav-link theme-pointer-cursor"
                  >
                    Price -- Low to High
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => setActiveTab(3)}
                    class="nav-link theme-pointer-cursor"
                  >
                    Price -- High to Low
                  </a>
                </li>
              </ul>
            </div>
            <div className="search-result-container">{getActiveTab()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
