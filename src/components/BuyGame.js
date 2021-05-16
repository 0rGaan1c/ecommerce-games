import React from "react";
import Navbar from "./Navbar";
import { games } from "../games";
import { useCart } from "../CartContext";

const BuyGame = ({
  match: {
    params: { name, idx },
  },
}) => {
  const { description, img, price } = games[idx];

  const { increase } = useCart();

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
          <div
            className="bg-black text-white p-2 w-2/4 text-lg text-center cursor-pointer hover:text-black hover:bg-white border-2 border-black"
            onClick={increase}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyGame;
