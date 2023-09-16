import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";

export const AddCart = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="add_cart my-2 flex flex-col gap-5 mx-2 lg:mt-4">
      <div className="qty_counter flex justify-around w-28 px-3 py-3 bg-gray-200 items-center rounded-3xl gap-2 md:ml-2 lg:w-32">
        <FaMinus
          className="text-indigo-900 text-md"
          onClick={() => qty > 1 && setQty(qty - 1)}
        />
        <span className="qty font-Poppins font-semibold">{qty}</span>
        <FaPlus
          className="text-indigo-900 text-md"
          onClick={() => setQty(qty + 1)}
        />
      </div>
      <div className="buttons flex flex-row gap-2">
        {" "}
        <button className="cartButton flex sm:px-12 sm:py-3 w-[150px] sm:w-auto text-xs sm:text-lg items-center justify-center sm:font-semibold gap-3 bg-indigo-900 text-white rounded-3xl ">
          <BsHandbag />
          Add To Cart
        </button>
        <button className="buy-now bg-slate-200 text-indigo-900 py-3 px-5 sm:py-3 sm:px-8 sm:font-bold rounded-3xl">
          Buy Now
        </button>
      </div>
    </div>
  );
};
