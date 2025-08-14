import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import NavBar from "../Components/NavBar";
import CartPage from "./CartPage";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ShoppingCart = ({ products }) => {
  const { addToCart} = useContext(CartContext);
  const [notification, setNotification] = useState("");
  const [showCart, setShowCart] = useState(false);

  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product, size) => {
    const key = `${product.id}_${size}`;
    const qty = parseInt(quantities[key]) || 1;
    addToCart(product, size, qty);
    setNotification(`${product.name} (Size: ${size}) added!`);
    setTimeout(() => setNotification(""), 2000);
    toast.success("Item added to cart")
  };
      console.log(handleAddToCart)
  const handleQtyChange = (prodId, size, val) => {
    setQuantities({ ...quantities, [`${prodId}_${size}`]: val });
  };

 

  return (
    <div>
     
     
      {/* Notification */}
      {notification && (
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            background: "#4BB543",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
         
          {notification}
        </div>
      )}

      {/* Product list */}
      {!showCart ? (
        <div style={{ padding: "20px" }}>
          <h2 style={{ fontSize:"1.5rem" }}>Products</h2>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "20px",
              }}
            >
              <h3 style={{fontSize:'1.2rem'}}>{product.name}</h3>
              <p> {product.about}</p>
              <h3>${product.price}</h3>

              {product.sizes.map((size) => (
                <div key={size} style={{ marginBottom: "10px" }}>
                  <label>Size: {size}</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue={1}
                    style={{
                      width: "50px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                    onChange={(e) =>
                      handleQtyChange(product.id, size, e.target.value)
                    }
                  />
                  <button
                    onClick={() => handleAddToCart(product, size)}
                    class="btn btn-dark"
                  >
                    Add to Cart
                  </button>
                 
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <CartPage goBack={() => setShowCart(false)}/>
       
      )}
      
    </div>
  );
};

export default ShoppingCart;
