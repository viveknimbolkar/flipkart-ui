import React from "react";
import AccountSideMenu from "../components/AccountSideMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Account() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AccountSideMenu />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
