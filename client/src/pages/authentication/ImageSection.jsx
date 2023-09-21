import React from "react";
import loginimg from "../../assets/login-side-img.png";

export const ImageSection = () => {
  return (
    <div className="container relative hidden lg:block w-fit">
      <img
        src={loginimg}
        alt="just a product image"
        srcSet=""
        className={`${location.pathname === "/login"? "h-[740px]": "h-[872px]"}`}
      />
      <div className="text-on-image font-Poppins text-6xl leading-tight font-bold absolute top-[40%] left-8 text-white">
        Where Comfort
        <br /> Meets Style. <br />
        Your Everyday <br /> Fashion Hub.
      </div>
    </div>
  );
};
