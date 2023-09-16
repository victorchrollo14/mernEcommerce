import React from "react";
import { BsHandbag, BsTruck } from "react-icons/bs";

export const ExtraInfo = () => {
  return (
    <div className="free_return mt-2 border border-stone-500 rounded-md mx-2 mb-10 md:mt-3 lg:mx-4 lg:mt-4 xl:mt-14 xl:mr-10">
      <div className="free_delivery flex mx-2 py-3 border-b border-gray-300">
        <BsTruck className="text-red-500 text-lg mt-1" />
        <div className="free_deatils flex flex-col mx-3">
          <span className="text-indigo-900 font-semibold">Free Delivery</span>
          <span className="text-gray-600 underline">
            Enter your Postal code for Delivery Availability
          </span>
        </div>
      </div>
      <div className="return_product mx-2 py-3 pb-6 flex">
        <BsHandbag className="text-red-500 mt-1" />
        <div className="return_details flex flex-col mx-3">
          <span className="text-indigo-900 font-semibold">Return Delivery</span>
          <span className="text-gray-600">
            Free 30 days Delivery Return.{" "}
            <span className="underline">Details</span>
          </span>
        </div>
      </div>
    </div>
  );
};
