import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaGoogle } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ImageSection } from "./ImageSection";
import { LoginForm } from "./LoginForm";

const Login = () => {
  return (
    <div className="bg-[#DFDFDF] overflow-x-hidden">
      <NavBar />
      <div className="flex flex-row justify-center sm:m-5 gap-5 md:gap-10">
        <ImageSection />
        <div className="form flex items-center flex-col w-5/6 max-w-md py-10 bg-white  md:py-10 rounded-xl h-fit ">
          <h2 className="text-center font-medium text-2xl  sm:text-3xl">
            Login
          </h2>
          <div className="md:text-xl my-5">
            Not Registered yet?{" "}
            <span className="text-red-600">
              <Link to={"/register"}>Register</Link>
            </span>
          </div>
          <button className="flex my-4 gap-4 w-5/6 max-w-xs text-lg md:text-xl justify-center items-center  text-white bg-[#24292F] outline-none border-2 border-[#A7A7A7] px-2 md:w-[400px] h-16 rounded-xl">
            <FaGithub className="" />
            <span>Login with Github</span>
          </button>
          <button className="flex my-4 gap-4 w-5/6 max-w-xs text-lg md:text-xl justify-center items-center  text-black  outline-none border-2 border-[#A7A7A7] px-2 md:w-[400px] h-16 rounded-xl">
            <FcGoogle className="" />
            <span>Login with Google</span>
          </button>
          <div className="text-center text-2xl font-semibold my-6 flex">
            {" "}
            <hr className="bg-black w-[28vw] max-w-[135px] h-[2px]   relative top-3 right-1" />{" "}
            OR{" "}
            <hr className="bg-black w-[28vw] max-w-[135px] h-[2px]   relative top-3 left-1" />
          </div>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
