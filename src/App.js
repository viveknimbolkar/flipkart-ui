import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Account from "./account/Account";
import Coupons from "./account/Coupons";
import Logout from "./account/Logout";
import Orders from "./account/Orders";
import PlusZone from "./account/PlusZone";
import Supercoin from "./account/Supercoin";
import Wishlist from "./account/Wishlist";
import GiftCard from "./account/GiftCard";
import Notifications from "./account/Notifications";
import Pancard from "./account/Pancard";
import Address from "./account/Address";
import GlobalProvider from "./context/GlobalState";
import SavedUPI from "./account/SavedUPI";
function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/address" element={<Address />} />
        <Route path="/account/coupons" element={<Coupons />} />
        <Route path="/account/giftcard" element={<GiftCard />} />
        <Route path="/account/logout" element={<Logout />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/pluszone" element={<PlusZone />} />
        <Route path="/account/vpadetails" element={<SavedUPI />} />
        <Route path="/account/supercoin" element={<Supercoin />} />
        <Route path="/account/wishlist" element={<Wishlist />} />
        <Route path="/account/notifications" element={<Notifications />} />
        <Route path="/account/pancard" element={<Pancard />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
