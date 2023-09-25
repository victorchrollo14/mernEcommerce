import { ExtraInfo } from "./ExtraInfo";
import { PriceSection } from "./PriceSection";
import { SizeSection } from "./SizeSection";
import { AddCart } from "./AddCart";

export const RightContent = ({ data }) => {
  const { description, price, ratings, sizeOptions } = data;

  return (
    <div className="right_section flex flex-col gap-3 md:w-4/6 md:mt-4 pl-2 lg:w-3/5 lg:mt-2 xl:mt-4">
      <div className="description border-b border-gray-300 pb-3 mx-2 ">
        <h1 className="text-lg font-semibold xl:text-xl">Description</h1>
        <p className="text-base text-gray-500 xl:mt-2 xl:text-lg">
          {description}
        </p>
      </div>
      <PriceSection price={price} ratings={ratings} />
      <SizeSection sizeOptions={sizeOptions} />
      <AddCart />
      <ExtraInfo />
    </div>
  );
};
