import React, { useContext, useReducer } from "react";
import { games } from "./games";

export const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

function reducer(state, action) {
  switch (action.type) {
    case "add-to-cart":
      const idx = parseInt(action.payload.idx);
      const data = games[idx];

      const setData = [...state.cartItems, { ...data, count: 1 }];
      return { ...state, totalItems: setData.length, cartItems: setData };

    case "remove-from-cart":
      const id = parseInt(action.payload.id);
      const removeData = state.cartItems.filter((item) => {
        if (!(item.id === id)) {
          return item;
        }
        return null;
      });
      return { ...state, totalItems: removeData.length, cartItems: removeData };

    default:
      return;
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
  });

  const value = {
    cart,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
