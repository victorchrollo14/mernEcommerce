import React from "react";
import { BsHandbag, BsTruck } from "react-icons/bs";

export const ExtraInfo = () => {
  return (
    <div className="free_return mt-2 border border-stone-500 rounded-md mx-2 mb-10 md:mt-3 lg:mx-4 lg:mt-4 xl:mt-14 xl:mr-10">
      <div className="free_delivery flex mx-2 py-3 border-b border-gray-300">
        <BsTruck className="text-red text-lg mt-1" />
        <div className="free_deatils flex flex-col mx-3">
          <span className="text-PrimaryBlue font-semibold">Free Delivery</span>
          <span className="text-slate underline">
            Enter your Postal code for Delivery Availability
          </span>
        </div>
      </div>
      <div className="return_product mx-2 py-3 pb-6 flex">
        <BsHandbag className="text-red mt-1" />
        <div className="return_details flex flex-col mx-3">
          <span className="text-PrimaryBlue font-semibold">Return Delivery</span>
          <span className="text-slate">
            Free 30 days Delivery Return.{" "}
            <span className="underline">Details</span>
          </span>
        </div>
      </div>
    </div>
  );
};
