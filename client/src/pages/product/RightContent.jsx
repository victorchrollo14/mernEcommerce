import { ExtraInfo } from "./ExtraInfo";
import { PriceSection } from "./PriceSection";
import { SizeSection } from "./SizeSection";
import { AddCart } from "./AddCart";
import { useState } from "react";

export const RightContent = ({ data }) => {
  const { _id, description, price, ratings, sizeOptions } = data;
  const [size, setSize] = useState(sizeOptions[1]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="right_section flex flex-col gap-3 md:w-4/6 md:mt-4 pl-2 lg:w-3/5 lg:mt-2 xl:mt-4">
      <div className="description border-b border-gray-300 pb-3 mx-2 ">
        <h1 className="text-lg font-semibold xl:text-xl">Description</h1>
        <p className="text-base text-gray-500 xl:mt-2 xl:text-lg">
          {description}
        </p>
      </div>
      <PriceSection price={price} ratings={ratings} />
      <SizeSection sizeOptions={sizeOptions} setSize={setSize} size={size} />
      <AddCart
        productID={_id}
        setQuantity={setQuantity}
        size={size}
        quantity={quantity}
      />
      <ExtraInfo />
    </div>
  );
};
