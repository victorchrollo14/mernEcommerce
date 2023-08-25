import React from "react";

export const ShopNavigation = () => {
  return (
    <aside class="collections-name h-[100vh]  pl-3  w-80  text-black bg-white border border-black rounded-xl py-10 font-nunito font-thin text-xs hidden md:block cursor-pointer ">
      <ul class="collections flex flex-col gap-3 pt-2 h-fit pr-5">
        <li class="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white">
          SHIRTS
        </li>
        <li class="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white">
          KNITS
        </li>
        <li class="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white">
          SWEATERS
        </li>
        <li class="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white">
          BOTTOMS
        </li>
        <li class="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white">
          DENIM
        </li>
        <li class="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white">
          OUTWEAR
        </li>
        <li class="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white">
          FOOTWEAR
        </li>
        <li class="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white">
          ACCESSORIES
        </li>
      </ul>
    </aside>
  );
};
