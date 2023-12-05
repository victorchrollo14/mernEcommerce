import React from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { GrClose } from "react-icons/gr";

export const MobNavigation = ({ setToggle }) => {
  const navigate = useNavigate();
  const [shop, setShop] = useState(false);

  return (
    <>
      <div
        className="z-50 text-xl bg-white right-10 px-1 py-1 rounded-full fixed"
        onClick={() => setToggle(false)}
      >
        <GrClose />
      </div>
      <div className="flex flex-col fixed bg-black top-0 overscroll-none overflow-hidden left-0 w-full h-full py-44 px-7 z-40 md:px-20">
        <Link
          to="/"
          className="font-Poppins text-xl text-white py-2 pl-4 border-b border-white border-opacity-40 font-medium xl:text-3xl md:text-2xl"
        >
          Home
        </Link>
        <div className="flex flex-col relative" onClick={() => setShop(!shop)}>
          <div className="flex items-center justify-between pl-4 py-2 ">
            <div
              className="text-xl text-white py-2 font-Poppins cursor-pointer"
              onClick={() => navigate("/shop/shirts")}
            >
              Shop
            </div>
            {shop ? (
              <IoMdArrowDropupCircle className="text-white text-xl mr-4" />
            ) : (
              <IoMdArrowDropdownCircle className="text-white text-xl mr-4" />
            )}
          </div>
          {shop && (
            <div className="relative pl-5 text-lg list-none  text-white border-t border-white border-opacity-40 py-2 font-Poppins">
              <ul className="cursor-pointer" onClick={() => setToggle(false)}>
                <li className="py-1" onClick={() => navigate("/shop/shirts")}>
                  Shirts
                </li>
                <li className="py-1" onClick={() => navigate("/shop/outwear")}>
                  Outwear
                </li>
                <li className="py-1" onClick={() => navigate("/shop/sweaters")}>
                  Sweaters
                </li>
                <li className="py-1" onClick={() => navigate("/shop/footwear")}>
                  Footwear
                </li>
                <li className="py-1" onClick={() => navigate("/shop/bottoms")}>
                  Bottoms
                </li>
                <li
                  className="py-1"
                  onClick={() => navigate("/shop/accessories")}
                >
                  Accesories
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link
          to="/cart"
          className="font-Poppins text-xl text-white py-2 pl-4 border-t border-white border-opacity-40  xl:text-xl md:text-lg"
        >
          Cart
        </Link>
      </div>
    </>
  );
};
