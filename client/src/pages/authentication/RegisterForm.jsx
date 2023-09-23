import { useNavigate } from "react-router-dom";
import { useState } from "react";
import register from "../../services/auth";

export const RegisterForm = ({ setError, setSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("passwords does not match, try again");
      return;
    }

    const response = await register(formData);
    const data = await response.json();

    if (response.status === 200) {
      setError("");
      setSuccess(data.message);
      setTimeout(() => navigate("/login"), 3000);
      return;
    }

    if (response.status === 400 || response.status === 409) {
      setSuccess("");
      setError(data.error);
      return;
    }
  };

  return (
    <>
      <form
        action=""
        method=""
        onSubmit={handleSubmit}
        className="w-5/6 max-w-xs min-w-[220px]"
      >
        {" "}
        <input
          type="text"
          name="fullname"
          onChange={handleChange}
          placeholder="full Name"
          className="border-2 p-4 w-full max-w-xs min-w-[220px] my-2 placeholder:text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl md:w-[400px]"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email Address"
          className="border-2 p-4 w-full  max-w-xs min-w-[220px] my-2 placeholder:text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl md:w-[400px]"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="border-2 p-4 w-full max-w-xs min-w-[220px] my-2 placeholder:text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl md:w-[400px]"
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm Password"
          className="border-2 p-4 w-full  max-w-xs min-w-[220px] my-2 placeholder:text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl md:w-[400px]"
        />
        <button
          type="submit"
          className="bg-[#1E1E1E] w-full max-w-xs min-w-[220px]  h-16 text-white px-20 my-4 text-2xl hover:bg-[#B5AA8F] transition"
        >
          REGISTER
        </button>
      </form>
    </>
  );
};
