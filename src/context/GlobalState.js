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
};

// create context
export const GlobalContext = createContext(initialState);

//create store
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // add new address
  function addNewAddress(newAddress) {
    console.log(newAddress);
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
      value={{ address: state.address, addNewAddress, removeAddress }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
