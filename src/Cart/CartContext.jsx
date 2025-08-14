
// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size, quantity) => {
    const index = cartItems.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );
    if (index !== -1) {
      // Update existing item
      const newItems = [...cartItems];
      newItems[index].quantity += quantity;
      setCartItems(newItems);
    } else {
      // Add new item
      setCartItems([...cartItems, { product, size, quantity }]);
    }
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.size === size)));
  };

  const totalQuantity = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
const totalPrice = () => {
  return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
};
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};