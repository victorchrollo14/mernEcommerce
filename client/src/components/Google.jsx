import React from "react";
import { FcGoogle } from "react-icons/fc";
import { handleGoogleAuth } from "../services/auth";

const GoogleButton = ({ children }) => {
  return (
    <button className="flex my-4 gap-4 w-5/6 max-w-xs text-lg md:text-xl justify-center items-center  text-black  outline-none border-2 border-lightSlate px-2 md:w-[400px] h-16 rounded-xl"
    onClick={handleGoogleAuth}
    >
      <FcGoogle className="" />
      <span>{children}</span>
    </button>
  );
};

export { GoogleButton };
