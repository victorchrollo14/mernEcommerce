import React from "react";
import { FaRegHeart, FaHeart, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const FavoriteCard = ({item}) => {
  const { title, subtitle, price, image, id, category } = item;
  const [wishlist, setWishlist] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="cardContainer bg-lightestBlue cursor-pointer p-4 border border-[#EDF0F8] rounded-2xl flex flex-col md:flex-row md:justify-between"
      onClick={() => {
        navigate(`/shop/${category}/${id}`);
      }}
      >
        <div className="details flex w-full justify-between gap-7 mt-1">
          <div className="flex gap-4">
            <div className="image w-32 h-32 rounded-2xl">
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="item_details flex flex-col">
              <h1 className="text-black text-lg font-semibold font-Poppins">
                {title}
              </h1>
              <h1 className="text-slate text-sm font-Poppins">{subtitle}</h1>
              <span className="price text-PrimaryBlue font-bold text-2xl font-Poppins my-1">
                ${price}
              </span>
            </div>
          </div>
          <div>
            <div
              className="wishlist bg-white p-2 rounded-lg ml-1 md:ml-20 cursor-pointer"
              onClick={() => setWishlist(!wishlist)}
            >
              {wishlist ? (
                <FaHeart className="text-xl text-PrimaryBlue" />
              ) : (
                <FaRegHeart className="text-xl text-PrimaryBlue" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { FavoriteCard };
