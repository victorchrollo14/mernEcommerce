import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const { id, src, src2, title, subtitle, price } = item;
  const images = import.meta.glob("../ProductAssets/*/*");
  const gallery = [];

  for (const path in images) {
    const p = new URL(path, import.meta.url).href;
    gallery.push(p);
  }
  const firstImage = gallery.find((element) => element.includes(src));
  const secondImage = gallery.find((element) => element.includes(src2));

  return (
    <li className="w-auto max-w-64 mb-5 h-fit" key={id}>
      <figure>
        <Link to={"/shop"} className="rounded-xl image-wrapper">
          <img
            src={firstImage}
            alt=""
            srcSet=""
            className="normal-image rounded-xl"
          />
          <img src={secondImage} alt="" className="hover-image" />
        </Link>
        <figcaption className="flex flex-col gap-1">
          <span className="font-Poppins text-sm leading-none font-medium mt-2 sm:text-base sm:font-semibold ">
            {title}
          </span>
          <span className="font-Volkhov text-xs text-[#3D4F63] sm:text-sm">
            {subtitle}
          </span>
          <span className="font-Volkhov text-xs text-[#3D4F63] sm:text-sm">
            {price}
          </span>
        </figcaption>
      </figure>
    </li>
  );
};
