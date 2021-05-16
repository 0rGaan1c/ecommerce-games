import React from "react";
import Navbar from "./Navbar";
import { games } from "../games";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="my-6 w-5/6 mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Products</h2>
          <hr className="border-black" />
        </div>
        <div className="flex">
          <img src={games[0].img} alt={games[0].name} className="w-5/12" />
          <div className="ml-4 font-bold">
            <span className="text-lg">{games[0].name} </span>
            <div className="text-gray-500">${games[0].price}</div>
            <div className="flex items-center text-lg">
              <FaPlusSquare className="cursor-pointer" />
              <span className="mx-2"> {5} </span>
              <FaMinusSquare className="cursor-pointer" />
              <span className="text-sm ml-12 font-thin hover:underline cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
