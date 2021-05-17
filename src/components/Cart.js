import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useCart } from "../CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;

    cart.cartItems.forEach((item) => {
      total += item.count * item.price;
    });

    setTotalPrice(total.toFixed(2));
  }, [cart.cartItems]);

  const handleClickRemove = (id) => {
    dispatch({ type: "remove-from-cart", payload: { id } });
  };

  const handleClickIncrease = (id) => {
    dispatch({ type: "increase", payload: { id } });
  };

  const handleClickDecrease = (id) => {
    dispatch({ type: "decrease", payload: { id } });
  };

  return (
    <>
      <Navbar />
      <div className="my-6 w-5/6 mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Products</h2>
          <hr className="border-black" />
        </div>
        {cart.cartItems.map((cartItem) => {
          const { name, img, price, count, id } = cartItem;
          if (count >= 1) {
            return (
              <div className="flex mt-4" key={id}>
                <img src={img} alt={name} className="w-5/12" />
                <div className="ml-4 font-bold">
                  <span className="text-lg leading-none">{name}</span>
                  <div className="text-gray-500">${price}</div>
                  <div className="flex items-center text-lg">
                    <FaPlusSquare
                      className="cursor-pointer"
                      onClick={() => handleClickIncrease(id)}
                    />
                    <span className="mx-2"> {count} </span>
                    <FaMinusSquare
                      className="cursor-pointer"
                      onClick={() => handleClickDecrease(id)}
                    />
                    <span
                      className="text-sm ml-12 font-thin hover:underline cursor-pointer"
                      onClick={() => handleClickRemove(id)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
        {cart.cartItems.length ? (
          <div>
            <hr className="border-black mt-6" />
            <div className="mt-2 flex items-center">
              <div className="font-bold text-lg">Total Price</div>
              <div className="text-bold text-gray-500 text-lg ml-auto">
                ${totalPrice}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
