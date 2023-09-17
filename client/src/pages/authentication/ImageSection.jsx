import React from "react";
import loginimg from "../../assets/login-side-img.png";

export const ImageSection = () => {
  return (
    <div className="container relative hidden lg:block w-fit">
      <img
        src={loginimg}
        alt="just a product image"
        srcset=""
        className="h-[740px] w-auto"
      />
      <div className="text-on-image font-Poppins text-6xl font-bold absolute top-[40%] left-8 text-white">in Sun Bleached Chambray</div>
    </div>
  );
};
