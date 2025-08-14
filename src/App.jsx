import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import JoinUs from "./Mini-Pages/JoinUs";
import SignIn from "./Mini-Pages/SignIn";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import ShoppingCart from "./Cart/ShoppingCart";
import { CartProvider } from "./Cart/CartContext";
import CartPage from "./Cart/CartPage";
import GeneralCart from "./Components/GeneralCart";
import Sneakers from "./Components/Sneakers";
import WomenSpecial from "./Components/WomenSpecial";
import WristWatch from "./Components/WristWatch";
import ContactUs from "./Components/ContactUs";
import Policy from "./Mini-Pages/Policy";
import { ToastContainer } from "react-toastify";
import Checkout from "./Mini-Pages/Checkout";
import DynamicProductPage from "./Mini-Pages/DynamicProductPage";

const App = () => {
  return (
    <Router>
      <div>
       
        <CartProvider>
         
          <NavBar />
       
          <Routes>
            <Route path="/" element={<Section />} />
           <Route path="/Sneakers" element={<Sneakers/>} />
             <Route path="/WristWatch" element={<WristWatch/>} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/WomenSpecial" element={<WomenSpecial/>} />
           <Route path="/ContactUs" element={<ContactUs/>} />
             <Route path="/Policy" element={<Policy/>} />
            <Route path="/GeneralCart" element={<GeneralCart/>} />
              <Route path="/Checkout" element={<Checkout/>} />
              <Route path="/product/:id" element={<DynamicProductPage/>} />
          </Routes>
          <ToastContainer/>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
