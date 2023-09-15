import React from "react";
import { useNavigate } from "react-router-dom";

export const ShopNavigation = () => {
  const navigate = useNavigate();

  const shopNavData = [
    { name: "SHIRTS", link: "/shop/shirts" },
    { name: "KNITS", link: "/shop/knits" },
    { name: "SWEATERS", link: "/shop/sweaters" },
    { name: "BOTTOMS", link: "/shop/bottoms" },
    { name: "DENIM", link: "/shop/denim" },
    { name: "OUTWEAR", link: "/shop/outwear" },
    { name: "FOOTWEAR", link: "/shop/footwear" },
    { name: "ACCESSORIES", link: "/shop/accessories" },
  ];

  return (
    <aside className="collections-name h-[100vh]  pl-3  w-80  text-black bg-white border border-black rounded-xl py-10 font-nunito font-thin text-xs hidden md:block cursor-pointer ">
      <ul className="collections flex flex-col gap-3 pt-2 h-fit pr-5">
        {shopNavData.map((data) => (
          <li
            className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
            key={data.name}
            onClick={() => {
              navigate(data.link);
            }}
          >
            {data.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};
