import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import laptopImg1 from "../assets/laptop-1.webp";
import laptopImg2 from "../assets/laptop-2.webp";
import laptopImg3 from "../assets/laptop-3.webp";
import laptopImg4 from "../assets/laptop-4.webp";
import laptopImg5 from "../assets/laptop-5.webp";
import laptopImg6 from "../assets/laptop-6.webp";
import laptopImg7 from "../assets/laptop-7.webp";

const initialState = {
  address: [
    {
      id: 1,
      name: "Vivek Nimbolkar",
      mobile: "987456321",
      address: "Durga Chaulk, Near Z.p. School",
      pincode: "444204",
      city: "Tunki Bk.",
      landmark: "landmark",
      state: "maharashtra",
      alternateMobile: "1234567891",
      addressType: "Home",
    },
    {
      id: 2,
      name: "Vivek Nimbolkar",
      mobile: "987456321",
      address: "Durga Chaulk, Near Z.p. School",
      pincode: "444204",
      city: "Tunki Bk.",
      landmark: "landmark",
      state: "maharashtra",
      alternateMobile: "1234567891",
      addressType: "Home",
    },
  ],
  notification: [
    {
      image: "",
      details:
        'Comes with 6.51" HD+ Display, 6000 mAH Battery & many more exciting features.',
      date: "14 Jan, 2023",
      link: "/",
    },
    {
      image: "",
      details:
        'Comes with 6.51" HD+ Display, 6000 mAH Battery & many more exciting features.',
      date: "14 Jan, 2023",
      link: "/account",
    },
  ],
  orderFilters: {
    status: ["on the way", "delivered", "cancelled", "returned"],
    time: ["last 30 days", "2022", "2021", "2020", "2019", "older"],
  },
  orders: [
    {
      productImg: "",
      details: "this is product details",
      color: "black",
      price: "3445",
      deliveryStatus: "book",
      rateLink: "/",
      deliveryOn: "12 jan 2023",
      deliveredOn: "",
    },
    {
      productImg: "",
      details: "this is product details",
      color: "black",
      price: "3445",
      deliveryStatus: "book",
      rateLink: "/",
      deliveryOn: "12 jan 2023",
      deliveredOn: "",
    },
  ],
  product: {
    images: [
      laptopImg1,
      laptopImg2,
      laptopImg3,
      laptopImg4,
      laptopImg5,
      laptopImg6,
      laptopImg7,
    ],
  },
};

// create context
export const GlobalContext = createContext(initialState);

//create store
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // add new address
  function addNewAddress(newAddress) {
    dispatch({
      payload: newAddress,
      type: "ADD_NEW_ADDRESS",
    });
  }

  // remove address
  function removeAddress(addressid) {
    dispatch({
      payload: addressid,
      type: "REMOVE_ADDRESS",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        address: state.address,
        notification: state.notification,
        orderFilters: state.orderFilters,
        orders: state.orders,
        product: state.product,
        addNewAddress,
        removeAddress,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
