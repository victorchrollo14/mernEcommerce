import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const GithubButton = ({ children }) => {
  const githubLogin = () => {
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
      onClick={githubLogin}
    >
      <FaGithub className="" />
      <span>{children}</span>
    </button>
  );
};

export { GithubButton };
