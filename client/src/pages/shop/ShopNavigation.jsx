import React from "react";
import { useNavigate } from "react-router-dom";

export const ShopNavigation = ({ products, setCategory }) => {
  const navigate = useNavigate();

  return (
    <aside className="collections-name h-[100vh]  pl-3  w-80  text-black bg-white border border-black rounded-xl py-10 font-nunito font-thin text-xs hidden md:block cursor-pointer ">
      <ul className="collections flex flex-col gap-3 pt-2 h-fit pr-5">
        <li
          className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
          onClick={() => {
            setCategory(products.shirts);
            navigate("/shop/shirts");
          }}
        >
          SHIRTS
        </li>
        <li
          className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
          onClick={() => {
            setCategory(products.knits);
            navigate("/shop/knits");
          }}
        >
          KNITS
        </li>
        <li
          className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
          onClick={() => {
            setCategory(products.sweaters);
            navigate("/shop/sweaters");
          }}
        >
          SWEATERS
        </li>
        <li
          onClick={() => {
            setCategory(products.bottoms);
            navigate("/shop/bottoms");
          }}
          className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
        >
          BOTTOMS
        </li>
        <li
          onClick={() => {
            setCategory(products.denim);
            navigate("/shop/denim");
          }}
          className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
        >
          DENIM
        </li>
        <li
          onClick={() => {
            setCategory(products.outwear);
            navigate("/shop/outwear");
          }}
          className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
        >
          OUTWEAR
        </li>
        <li
          onClick={() => {
            setCategory(products.footwear);
            navigate("/shop/footwear");
          }}
          className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
        >
          FOOTWEAR
        </li>
        <li
          onClick={() => {
            setCategory(products.accessories);
            navigate("/shop/accessories");
          }}
          className="item-name py-2 pl-3  text-lg font-medium border-b border-black hover:bg-[#3A4980] hover:text-white"
        >
          ACCESSORIES
        </li>
      </ul>
    </aside>
  );
};
