import React from "react";

export const SizeSection = ({ sizeOptions }) => {
  return (
    <section className="size_section mx-3 my-2 border-b border-gray-300 pb-3 ">
      <span className="text-lg xl:text-xl">Choose size</span>
      <div className="size_selection flex flex-wrap mt-1 mb-3 gap-2 xl:mt-4">
        {sizeOptions.map((size) => (
          <li key={size} className="radio flex items-center justify-around cursor-pointer bg-sky-200 px-2 py-1 rounded-lg gap-1">
            <input type="radio" name="small" id="" />
            <span className="text-indigo-900">{size}</span>
          </li>
        ))}
      </div>
    </section>
  );
};

