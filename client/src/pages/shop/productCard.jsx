import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const location = useLocation();
  const { _id, title, subtitle, price, images } = item;
  const localImages = import.meta.glob("../ProductAssets/*/*");
  const gallery = [];

  for (const path in localImages) {
    const p = new URL(path, import.meta.url).href;
    gallery.push(p);
  }
  const firstImage = gallery.find((element) => element.includes(images[0]));
  const secondImage = gallery.find((element) => element.includes(images[1]));

  return (
    <li className="w-auto max-w-64 mb-5 h-fit" key={_id}>
      <figure>
        <Link
          to={`${location.pathname}/${_id}`}
          className="rounded-xl image-wrapper"
        >
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
            $ {price}
          </span>
        </figcaption>
      </figure>
    </li>
  );
};
