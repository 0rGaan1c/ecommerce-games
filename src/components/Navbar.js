import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.cartItems.forEach((item) => {
      total += item.count;
    });

    setTotal(total);
  }, [cart.cartItems]);

  return (
    <>
      <nav className="bg-black">
        <div className="flex justify-between items-center text-white text-2xl p-3 font-bold tracking-wide cursor-pointer md:text-3xl md:py-5 md:w-11/12 md:mx-auto">
          <Link to="/">Cloud</Link>
          <div className="flex">
            <Link to="/cart">
              <FaShoppingCart className="transition duration-200 ease-in-out transform hover:scale-110" />
            </Link>
            <div className="text-sm text-white relative bottom-2 ml-1">
              {total}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
