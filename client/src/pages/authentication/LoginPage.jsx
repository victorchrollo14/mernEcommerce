import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ImageSection } from "./ImageSection";
import { LoginForm } from "./LoginForm";
import { GithubButton } from "../../components/Github";
import { GoogleButton } from "../../components/Google";
import { ErrorMessage, SuccessMessage } from "../../components/Alert";

const LoginPage = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  return (
    <div className="bg-lightestSlate overflow-x-hidden">
      <NavBar />
      <div className="flex flex-row justify-center sm:m-5 gap-5 md:gap-10">
        <ImageSection />
        <div className="form flex items-center flex-col w-5/6 max-w-md py-10 bg-white  md:py-10 rounded-xl h-fit ">
          <h2 className="text-center font-medium text-2xl  sm:text-3xl">
            Login
          </h2>
          <div className="md:text-xl my-5">
            Not Registered yet?{" "}
            <span className="text-red">
              <Link to={"/register"}>Register</Link>
            </span>
          </div>
          <GithubButton
            name={"Login with Github"}
            setError={setError}
            setSuccess={setSuccess}
          />
          <GoogleButton>Login With Google</GoogleButton>
          <div className="text-center text-2xl font-semibold my-6 flex">
            {" "}
            <hr className="bg-black w-[28vw] max-w-[135px] h-[2px]   relative top-3 right-1" />{" "}
            OR{" "}
            <hr className="bg-black w-[28vw] max-w-[135px] h-[2px]   relative top-3 left-1" />
          </div>
          <LoginForm setError={setError} setSuccess={setSuccess} />
          {error && <ErrorMessage error={error} />}
          {success && <SuccessMessage success={success} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
