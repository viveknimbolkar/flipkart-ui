import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const APIContext = createContext();

function APIProvider({ children }) {
  const BASE_URL = process.env.REACT_APP_BASE_API_URL;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getCustomerName = (email) => {
    const endpoint = "get_customer_name";
    axios
      .get(BASE_URL + endpoint, { email })
      .then((res) => {
        console.log("this is get nan4 ", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCustomerName = (name, email) => {
    const endpoint = "update_customer_name";
    axios
      .post(
        BASE_URL + endpoint,
        { name, email },
        { headers: { Authorization: token } }
      )
      .then((res) => console.log("this is res ", res))
      .catch((error) => {
        console.log(error);
      });
  };

  const loginUser = (email, password) => {
    const endpoint = "login";
    axios
      .post(BASE_URL + endpoint, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((error) => {
        alert("Internal Server Error.\n Pleaes try again later.");
      });
  };

  const registerUser = (name, email, password) => {
    const endpoint = "register";
    axios
      .post(BASE_URL + endpoint, { name, email, password })
      .then((res) => {
        alert("User registered successfully. Please login to continue.");
      })
      .catch((error) => {
        alert("Internal Server Error.\n Pleaes try again later.");
      });
  };

  return (
    <APIContext.Provider
      value={{
        loginUser: loginUser,
        registerUser: registerUser,
        updateCustomerName: updateCustomerName,
        getCustomerName: getCustomerName,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export default APIProvider;
