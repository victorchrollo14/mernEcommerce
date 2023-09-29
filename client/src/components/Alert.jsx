import React from "react";

const ErrorMessage = ({ error }) => {
  return <h2 className="text-red-500 px-8 text-center">{error}</h2>;
};

const SuccessMessage = ({ success }) => {
  return <h2 className="text-green-500 px-8 text-center text-lg uppercase">{success}</h2>;
};

export { ErrorMessage, SuccessMessage };
