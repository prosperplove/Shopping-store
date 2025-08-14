import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
const CartPage = () => {
  const { cartItems, removeFromCart, totalQuantity, totalPrice} =
    useContext(CartContext);

       useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", marginTop:"15vh" }}>
      
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row g-3"> 
          {cartItems.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`} className="col-6 col-md-3 col-lg-3"// Use a unique key based on product ID and size
              style={{ borderBottom: "1px solid #ccc", padding: "10px" }}
            >
               <img src={item.product.image} alt=""style={{ width:"10vh" }} />
              <p>
              <strong>{item.product.name}</strong> (Size: {item.size})<br />
                Quantity: {item.quantity}
                <br />
                Price per item: ${item.product.price}
                <br />
                Total: ${item.product.price * item.quantity}
              </p>
              <button
                onClick={() => removeFromCart(item.product.id, item.size)}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Total Items: {totalQuantity()}</h3>
          <h3>Total Price: ${totalPrice().toFixed(2)}</h3>
        </div>
      )}
      <hr />
      <div>
        <Link to="/Checkout"><button className="btn btn-dark">Check out</button></Link>
      </div>
    </div>
  );
};

export default CartPage;