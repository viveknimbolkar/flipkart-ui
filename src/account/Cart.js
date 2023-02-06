import React from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import PriceDetails from "../components/PriceDetails";
import '../css/cart.css'

function Cart() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-md-8">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <div className="col-12 text-end p-3 bg-white cart-action">
              <button className="p-2 fw-bold text-white border-none ">Place Order</button>
            </div>
          </div>
          <div className="col-md-4">
            <PriceDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
