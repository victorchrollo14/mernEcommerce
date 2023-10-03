import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ImageSection } from "./ImageSection";
import { SuccessMessage, ErrorMessage } from "../../components/Alert";
import { RegisterForm } from "./RegisterForm";
import { GithubButton } from "../../components/Github";
import { GoogleButton } from "../../components/Google";

const RegisterPage = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  return (
    <div className="bg-lightestSlate overflow-x-hidden">
      <NavBar />
      <div className="flex flex-row justify-center my-5 sm:m-5 gap-5 md:gap-10">
        <ImageSection />
        <div className="form flex items-center flex-col w-5/6 max-w-md py-10 bg-white  md:py-10 rounded-xl h-fit ">
          <h2 className="text-center font-medium text-2xl  sm:text-3xl">
            Register
          </h2>
          <div className="md:text-xl my-5">
            Already Have an Account?{" "}
            <span className="text-red">
              <Link to={"/login"}>Login</Link>
            </span>
          </div>
          <GithubButton>Register with Github</GithubButton>
          <GoogleButton>Register With Google</GoogleButton>
          <div className="text-center text-2xl font-semibold my-6 flex">
            {" "}
            <hr className="bg-black w-[28vw] max-w-[135px] h-[2px]   relative top-3 right-1" />{" "}
            OR{" "}
            <hr className="bg-black w-[28vw] max-w-[135px] h-[2px]   relative top-3 left-1" />
          </div>
          <RegisterForm setError={setError} setSuccess={setSuccess} />
          {error && <ErrorMessage error={error} />}
          {success && <SuccessMessage success={success} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
