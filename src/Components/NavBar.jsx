import React, { useContext, useState } from "react";
import nikee from "../images/niketwo.jpg";

import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
const NavBar = ({ goToCart }) => {
  
   const { totalQuantity  } = useContext(CartContext);

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <div className="brand">
            <Link
              to="/"
              className="navbar-brand"
              href="#"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              DA STELLA'S
            </Link>
            <img src={nikee} style={{ width: "5vh" }} />
          </div>
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
               <li className="nav-item">
                <Link to="/" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Menu</Link>
                         <ul className="dropdown-menu">
                           <li><Link to="/Sneakers" className="dropdown-item" href="#">Sneakers</Link></li>
                           <li><Link to="/WomenSpecial" className="dropdown-item" href="#">Women's Special</Link></li>
                            <li><Link to="/WristWatch" className="dropdown-item" href="#">Luxury Wrist Watch</Link></li>
                         </ul>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Help</Link>
                         <ul className="dropdown-menu">
                           <li><Link to="/ContactUs" className="dropdown-item" href="#">Contact Us</Link></li>
                           <li><Link to="/Policy" className="dropdown-item" href="#">Terms of use</Link></li>
                          
                         </ul>
              </li>
              <li className="nav-item">
                <Link to="/JoinUs" className="nav-link" href="#">
                 Join Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SignIn" className="nav-link" href="#">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/GeneralCart">
            <button onClick={goToCart} style={{ fontSize: "16px" }} className="btn btn-outline-white">
              🛒 Cart  ({totalQuantity()})
              
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
