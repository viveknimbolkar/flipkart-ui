import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
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
        addNewAddress,
        removeAddress,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
