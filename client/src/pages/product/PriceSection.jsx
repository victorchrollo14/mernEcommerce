/* eslint-disable react/prop-types */
import React from "react";
import { FaRegCommentDots, FaRegStar } from "react-icons/fa";

export const PriceSection = ({price, ratings}) => {
  return (
    <div className="price_section flex flex-col border-b border-gray-300 pb-3 mx-2 mt-2 xl:mt-4 lg:flex-row">
      <span className="font-semibold text-PrimaryBlue mt-3 px-3 text-4xl">
        ${price}
      </span>
      <div className="left_price flex flex-col mt-2 xl:mt-1 lg:ml-4">
        <div className="rating_review flex ml-2 mt-2 gap-2">
          <span className="rating_section flex justify-between items-center px-3 py-2 bg-lightOrange rounded-3xl gap-1">
            {/* <span className="px-1">S</span> */}
            <FaRegStar className="text-orange text-md" />
            <span className="ratings font-semibold text-orange">
              {ratings.stars}
            </span>
          </span>
          <span className="review_section flex justify-between items-center px-3 py-2 bg-lightestBlue rounded-3xl gap-1">
            <FaRegCommentDots />
            <span className="reviews font-semibold px-1 text-PrimaryBlue">
              {ratings.reviewCount} Reviews
            </span>
          </span>
        </div>
        <span className="recommended text-slate-400 mx-3 mt-2">
          <span className="text-green-600">93%</span>of buyers have recommended
          this.
        </span>
      </div>
    </div>
  );
};

