import React from "react";
import louis from "../assets/brands/louis.png";
import denim from "../assets/brands/denim.png";
import calvin from "../assets/brands/calvin.png";
import chanel from "../assets/brands/chanel.png";
import prada from "../assets/brands/prada.png";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 1700,
  slidesToShow: 4,
  sidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Brands = () => {
  const brands = [
    {
      id: 1,
      src: louis,
    },
    {
      id: 2,
      src: denim,
    },
    {
      id: 3,
      src: chanel,
    },
    {
      id: 4,
      src: calvin,
    },
    {
      id: 5,
      src: prada,
    },
  ];
  return (
    <>
      <div className="mt-7 py-2 md:mt-10">
        <Slider {...settings} className="">
          {brands.map((b) => (
            <div className="h-6 flex items-center" key={b.id}>
              <img
                src={b.src}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Brands;
