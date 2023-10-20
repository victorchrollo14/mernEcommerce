import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

import { FaShare } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export const LeftContent = ({ data }) => {
  const [wishlist, setWishlist] = useState(false);
  const { title, subtitle, images } = data;

  return (
    <div className="left_section flex flex-col max-w-[600px] mt-2 w-full md:w-[60vw]">
      <div className="heading flex justify-between items-start ml-2 mt-2">
        <div className="left_heading flex flex-col md:ml-2 xl:ml-4 xl:max-w-[50%] mb-5">
          <h1 className="text-2xl font-Poppins font-semibold pr-4 md:text-xl xl:text-2xl ">
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
              className="text-PrimaryBlue bg-lightestBlue rounded-lg w-9 h-9 p-2"
            />
          ) : (
            <FaRegHeart
              onClick={() => setWishlist(!wishlist)}
              className="text-PrimaryBlue bg-lightestBlue rounded-lg w-9 h-9 p-2"
            />
          )}
          <FaShare className="text-PrimaryBlue font-semibold bg-lightestBlue rounded-lg w-9 h-9 p-2" />
        </div>
      </div>
      <div className="main_image rounded-lg  mt-4 xl:mx-5">
        <Carousel
          autoPlay={true}
          swipeable={false}
          // showIndicators={false}
          // showThumbs={false}
          infiniteLoop={false}
          className="productImages__carousel  items-center justify-between "
        >
          {/* here you can use uuid over i */}
          {images?.map((img, i) => (
            
              <img
              key={i}
                src={img}
                alt="product"
                className="max-h-[auto] object-cover productImages__carousel--item"
              />
            
          ))}
        </Carousel>
      </div>
    </div>
  );
};
