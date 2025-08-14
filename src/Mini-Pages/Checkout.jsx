import React, { useContext, useState, useEffect } from 'react';
 // Adjust the import path as needed
import { CartContext } from '../Cart/CartContext';
function Checkout() {

       useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    
  const { cartItems, totalPrice } = useContext(CartContext); // Access cart items and total price
  const total = totalPrice(); // Calculate total

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your purchase!');
    // Add payment processing logic here
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      marginTop:"15vh",      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Shopping Checkout</h2>
      
      {/* Cart Items Section */}
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>Your Items</h3>
          {cartItems.map((item) => (
            <div key={`${item.product.id}-${item.size}`} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <strong>{item.product.name}</strong> (Size: {item.size}) x {item.quantity}
              </div>
              <div>
                ${(item.product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div style={{ fontWeight: 'bold', fontSize: '1.2em', textAlign: 'right' }}>
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}

      {/* Billing & Payment Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Billing Details */}
        <h3>Billing Details</h3>
        <label htmlFor="name" style={{ marginTop: '10px', marginBottom: '5px' }}>Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <label htmlFor="email" style={{ marginTop: '10px', marginBottom: '5px' }}>Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <label htmlFor="address" style={{ marginTop: '10px', marginBottom: '5px' }}>Shipping Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        {/* Payment Information */}
        <h3 style={{ marginTop: '20px' }}>Payment Information</h3>
        <label htmlFor="cardNumber" style={{ marginTop: '10px', marginBottom: '5px' }}>Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <label htmlFor="expiry" style={{ marginTop: '10px', marginBottom: '5px' }}>Expiry Date</label>
        <input
          type="month"
          id="expiry"
          name="expiry"
          value={formData.expiry}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <label htmlFor="cvv" style={{ marginTop: '10px', marginBottom: '5px' }}>CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <button type="submit" style={{
          marginTop: '20px',
          padding: '12px',
          fontSize: '1em',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Pay Now</button>
      </form>
    </div>
  );
}

export default Checkout;