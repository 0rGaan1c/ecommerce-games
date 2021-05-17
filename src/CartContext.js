import React, { useContext, useReducer, useEffect } from "react";
import { games } from "./games";

export const CartContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

export const useCart = () => {
  return useContext(CartContext);
};

function reducer(state, action) {
  switch (action.type) {
    case "add-to-cart":
      const idx = parseInt(action.payload.idx);
      const data = games[idx];

      const setData = [...state.cartItems, { ...data, count: 1 }];
      return { ...state, cartItems: setData };

    case "remove-from-cart":
      const removeData = state.cartItems.filter((item) => {
        if (!(item.id === action.payload.id)) {
          return item;
        }
        return null;
      });
      return { ...state, cartItems: removeData };

    case "increase":
      const increaseData = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      return { ...state, cartItems: increaseData };

    case "decrease":
      let decreaseData = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          if (item.count - 1 === 0) {
            return null;
          }
          return { ...item, count: item.count - 1 };
        }
        return item;
      });

      decreaseData = decreaseData.filter((item) => {
        if (item !== null) {
          return item;
        }
        return null;
      });

      return { ...state, cartItems: decreaseData };

    default:
      return;
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, {
    cartItems: getLocalStorage(),
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(cart.cartItems));
  }, [cart]);

  const value = {
    cart,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
