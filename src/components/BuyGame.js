import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { games } from "../games";
import { useCart } from "../CartContext";

const BuyGame = ({
  match: {
    params: { name, idx },
  },
}) => {
  const { cart, dispatch } = useCart();
  const [toggle, setToggle] = useState(false);

  const { id, img, price, description } = games[idx];

  useEffect(() => {
    if (cart.cartItems.length) {
      cart.cartItems.map((item) => {
        if (id === item.id) {
          setToggle(true);
        }
        return null;
      });
    }
  });

  const handleClickAdd = () => {
    dispatch({
      type: "add-to-cart",
      payload: { idx },
    });
    setToggle(true);
  };

  const handleClickRemove = () => {
    dispatch({ type: "remove-from-cart", payload: { id } });
    setToggle(!toggle);
  };

  return (
    <>
      <Navbar />
      <div className="my-8 w-5/6 mx-auto xl:flex xl:items-center">
        <div className="w-full my-6 xl:mr-8">
          <img className="w-full" src={img} alt={name} />
        </div>
        <div>
          <div className="text-xl font-bold">{name}</div>
          <div className="font-bold">${price}</div>
          <div className="my-2">{description}</div>
          {!toggle ? (
            <div
              className="bg-black text-white p-2 w-2/4 text-lg text-center cursor-pointer hover:text-black hover:bg-white border-2 border-black"
              onClick={() => handleClickAdd()}
            >
              Add to Cart
            </div>
          ) : (
            <div
              className="bg-black text-white p-2 w-2/4 text-lg text-center cursor-pointer hover:text-black hover:bg-white border-2 border-black"
              onClick={() => handleClickRemove()}
            >
              Remove
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BuyGame;
