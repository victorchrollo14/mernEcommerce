import React from "react";
import sub2 from "../product/sub2.jpeg";
import { FaRegHeart, FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const CartProduct = ({item}) => {
  const { id, src, title, price } = item;
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  return (
    <>
      {qty === 0 ? (
        <div></div>
      ) : (
        <div className="cardContainer bg-[#EDF0F8] p-4 border border-[#EDF0F8] mx-4 rounded-2xl flex flex-col md:flex-row md:justify-between" key={id}>
          <div className="details flex gap-7 mt-1">
            <div className="image w-32 h-32 rounded-2xl">
              <img
                src={sub2}
                alt=""
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="item_details flex flex-col">
              <h1 className="text-black text-lg font-semibold font-Poppins">
                {title}
              </h1>
              <span className="price text-indigo-900 font-bold text-2xl font-Poppins my-1">
                {price}
              </span>
              <select
                name=""
                id=""
                className="size_selection mt-1 bg-white border border-white w-20 rounded-lg py-2 text-indigo-900 font-semibold outline-none"
              >
                <option value="">Small</option>
                <option value="">Medium</option>
                <option value="">Large</option>
                <option value="">Extra Large</option>
                <option value="">XXL</option>
              </select>
            </div>
          </div>
          <div className="lower_card flex justify-between mt-5 items-center md:flex-col md:mt-3">
            <div
              className="wishlist bg-white p-2 rounded-lg ml-1 md:ml-20"
              onClick={() => setWishlist(!wishlist)}
            >
              {wishlist ? (
                <FaHeart className="text-xl text-indigo-900" />
              ) : (
                <FaRegHeart className="text-xl text-indigo-900" />
              )}
            </div>
            <div className="couter flex gap-1 items-center mr-2 justify-around">
              <div
                className="minus p-2 text-xl bg-white text-indigo-900 rounded-xl"
                onClick={() => (qty > 1 ? setQty(qty - 1) : setQty(0))}
              >
                <FaMinus />
              </div>
              <span className="text-xl text-gray-400 font-Poppins w-6 text-center mx-2">
                {qty}
              </span>
              <div
                className="plus p-2 text-xl bg-white text-indigo-900 rounded-xl"
                onClick={() => setQty(qty + 1)}
              >
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartProduct;
