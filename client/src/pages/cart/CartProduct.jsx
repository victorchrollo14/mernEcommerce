import React from "react";
import { FaRegHeart, FaHeart, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useState } from "react";

const CartProduct = ({ item }) => {
  const { title, price, size, quantity, images } = item;
  const [qty, setQty] = useState(quantity);
  const [wishlist, setWishlist] = useState(false);
  return (
    <>
      {qty === 0 ? (
        <div></div>
      ) : (
        <div className="cardContainer bg-lightestBlue p-4 border border-[#EDF0F8] mx-4 rounded-2xl flex flex-col md:flex-row md:justify-between">
          <div className="details flex gap-7 mt-1">
            <div className="image w-32 h-32 rounded-2xl">
              <img
                src={images[1]}
                alt=""
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="item_details flex flex-col">
              <h1 className="text-black text-lg font-semibold font-Poppins">
                {title}
              </h1>
              <span className="price text-PrimaryBlue font-bold text-2xl font-Poppins my-1">
                {price}
              </span>
              <div className="size_selection mt-2 bg-white w-fit py-2 px-3 rounded-lg text-center text-PrimaryBlue font-semibold outline-none">
                {size}
              </div>
            </div>
          </div>
          <div className="lower_card flex justify-between mt-5 items-center md:flex-col md:mt-3">
            <div
              className="wishlist bg-white p-2 rounded-lg ml-1 md:ml-20"
              onClick={() => setWishlist(!wishlist)}
            >
              {wishlist ? (
                <FaHeart className="text-xl text-PrimaryBlue" />
              ) : (
                <FaRegHeart className="text-xl text-PrimaryBlue" />
              )}
            </div>
            <div className="couter flex gap-1 items-center mr-2 justify-around">
              <div
                className="minus p-2 text-xl bg-white text-PrimaryBlue rounded-xl"
                onClick={() => (qty > 1 ? setQty(qty - 1) : setQty(0))}
              >
                {qty === 1 ? <FaTrash /> : <FaMinus />}
              </div>
              <span className="text-xl text-gray-400 font-Poppins w-6 text-center mx-2">
                {qty}
              </span>
              <div
                className="plus p-2 text-xl bg-white text-PrimaryBlue rounded-xl"
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
