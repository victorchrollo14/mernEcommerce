import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export const ShopNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const crntLocation = location.pathname.toUpperCase().split("/SHOP/");

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
    <>
      <aside className="hidden md:flex gap-5 flex-col">
        <p className="flex flex-row h-fit items-center gap-2">
          <span className="text-[#686868]">Shop</span>{" "}
          <IoIosArrowForward className="text-[#686868]" /> {crntLocation}
        </p>
        <section className="collections-container h-[80vh]  pl-3  w-80  text-black bg-white border border-black rounded-xl py-10 font-nunito font-thin text-xs hidden md:block cursor-pointer ">
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
        </section>
      </aside>
    </>
  );
};
