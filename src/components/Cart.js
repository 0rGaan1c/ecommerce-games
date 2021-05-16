import React from "react";
import Navbar from "./Navbar";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useCart } from "../CartContext";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <>
      <Navbar />
      <div className="my-6 w-5/6 mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Products</h2>
          <hr className="border-black" />
        </div>
        {cart.cartItems.map((cartItem, idx) => {
          const { name, img, price, count } = cartItem;
          if (count >= 1) {
            return (
              <div className="flex mt-4" key={idx}>
                <img src={img} alt={name} className="w-5/12" />
                <div className="ml-4 font-bold">
                  <span className="text-lg leading-none">{name}</span>
                  <div className="text-gray-500">${price}</div>
                  <div className="flex items-center text-lg">
                    <FaPlusSquare className="cursor-pointer" />
                    <span className="mx-2"> {1} </span>
                    <FaMinusSquare className="cursor-pointer" />
                    <span className="text-sm ml-12 font-thin hover:underline cursor-pointer">
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default Cart;
