import axios from "axios";

const register = async (userData) => {
  try {
    const response = await fetch("http://localhost:3001/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default register;
