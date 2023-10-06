import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GithubButton = ({ name, setError, setSuccess }) => {
  const navigate = useNavigate();

  const redirectAuth = () => {
    const CLIENT_ID = "ed45d2b6e0e5bffd1f82";
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    );
  };

  const githubRegister = async () => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      if (code && localStorage.getItem("accessToken") === null) {
        const response = await fetch(
          `http://localhost:3001/user/register/github?code=${code}`
        );
        const data = await response.json();
        if (response.status === 400 || response.status === 500) {
          setSuccess(" ");
          setError(data.error);
          setTimeout(() => navigate("/register"), 3000);
          return;
        }

        if (response.status === 200 || response.status === 409) {
          setError(" ");
          setSuccess(data.message);
          setTimeout(() => navigate("/login"), 3000);
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    githubRegister();
  }, []);

  return (
    <button
      className="flex my-4 gap-4 w-5/6 max-w-xs text-lg md:text-xl justify-center items-center  text-white bg-darkBlue outline-none border-2 border-lightSlate px-2 md:w-[400px] h-16 rounded-xl"
      onClick={name === "Register with Github" ? redirectAuth : redirectAuth}
    >
      <FaGithub className="" />
      <span>{name}</span>
    </button>
  );
};

export { GithubButton };
