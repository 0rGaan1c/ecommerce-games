import React, { useContext } from "react";

export const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const value = {};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
