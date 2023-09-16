import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

import { FaShare } from "react-icons/fa6";

export const LeftContent = ({ data }) => {
  const [wishlist, setWishlist] = useState(false);
  const { images, title, subtitle } = data;

  const localImages = import.meta.glob("../ProductAssets/*/*");
  const gallery = [];

  for (const path in localImages) {
    const p = new URL(path, import.meta.url).href;
    gallery.push(p);
  }

  const firstImage = gallery.find((element) => element.includes(images[0]));
  const secondImage = gallery.find((element) => element.includes(images[1]));

  return (
    <div className="left_section flex flex-col mt-2 xl:w-1/2">
      <div className="heading flex justify-between items-center ml-2 mt-2">
        <div className="left_heading flex flex-col md:ml-2 xl:ml-4">
          <h1 className="text-2xl font-Poppins font-semibold pr-4 md:text-xl xl:text-2xl">
            {title}
          </h1>
          <span className="text-sm font-Poppins text-black opacity-70">
            {subtitle}
          </span>
        </div>
        <div className="icons flex mr-3 gap-2">
          {wishlist ? (
            <FaHeart
              onClick={() => setWishlist(!wishlist)}
              className="text-sky-800 bg-sky-100 rounded-lg w-9 h-9 p-2"
            />
          ) : (
            <FaRegHeart
              onClick={() => setWishlist(!wishlist)}
              className="text-sky-800 bg-sky-100 rounded-lg w-9 h-9 p-2"
            />
          )}
          <FaShare className="text-sky-800 font-semibold bg-sky-100 rounded-lg w-9 h-9 p-2" />
        </div>
      </div>
      <div className="main_image rounded-lg border border-slate-100  mx-2 mt-4 xl:mx-5">
        <img
          className="object-cover h-auto w-full rounded-lg"
          src={firstImage}
        />
      </div>
      <div className="sub_images rounded-md flex gap-2  items-start my-3 mx-4">
        {}
        <img
          src={firstImage}
          alt={title + "image"}
          className="object-cover h-[115px] w-[115px] rounded-md  border border-slate-100 "
        />
        <img
          src={secondImage}
          alt={title + "Image"}
          className="object-cover h-[115px] w-[115px] rounded-md  border border-slate-100 "
        />
      </div>
    </div>
  );
};
