import React from "react";

const Input = ({ type, name, placeholder, handleChange }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      className="border-2 p-4 w-full max-w-xs min-w-[220px] my-2 placeholder:text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl md:w-[400px]"
    />
  );
};

const SubmitButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-[#1E1E1E] w-full max-w-xs min-w-[220px]  h-16 text-white px-20 my-4 text-2xl hover:bg-[#B5AA8F] transition"
    >
      {children}
    </button>
  );
};

export { Input, SubmitButton };
