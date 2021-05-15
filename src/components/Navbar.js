import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="flex justify-between items-center text-white text-2xl p-3 font-bold tracking-wide cursor-pointer md:text-3xl md:py-5 md:w-11/12 md:mx-auto">
          <Link to="/">Cloud</Link>
          <div className="flex">
            <FaShoppingCart className="transition duration-200 ease-in-out transform hover:scale-110" />
            <div className="text-sm relative bottom-2 ml-1">0</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
