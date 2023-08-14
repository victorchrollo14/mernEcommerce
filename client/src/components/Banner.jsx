import React from "react";
import mobileBanner from "../assets/HeroMobile.jpg";
import desktopBanner from "../assets/HeroImage.jpg";

const Banner = () => {
  return (
    <>
      {/* MobileView */}
      <div className="h-[550px] mx-5 my-4 relative md:hidden">
        <img
          className="w-full h-full object-cover rounded-[10px] border border-gray-300"
          src={mobileBanner}
          alt="HeroImage"
        />
        <div className="absolute w-full h-full top-0 rounded-[10px] bg-black bg-opacity-40">
          <div className="top-0 pt-60 pl-3 text-3xl font-Poppins text-white font-semibold md:hidden">
            Where Comfort <br /> Meets Style , <br />
            Your Everyday <br />
            Fashion Hub. <br />
            <button className="px-6 py-3 mt-3 bg-white text-black text-xl font-normal uppercase border-white rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* Desktopview */}
      <div className="hidden md:flex h-[600px] mx-9 mt-6 mb-5 relative xl:h-[800px]">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={desktopBanner}
          alt="HeroImage"
        />
        <div className="absolute w-full h-full top-0 rounded-2xl bg-black bg-opacity-40"></div>
      </div>
    </>
  );
};

export default Banner;
