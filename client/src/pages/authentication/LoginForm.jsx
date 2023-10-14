import { useState } from "react";
import { Input, SubmitButton } from "../../components/Buttons";
import { login } from "../../services/auth";
import { useUserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setError, setSuccess }) => {
  const { setLoggedIn, setToken } = useUserContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(formData, setLoggedIn, setToken);
    const data = response.data;

    if (response.status === 400) {
      setSuccess("");
      setError(data.error);
      return;
    }

    if (response.status === 200) {
      setError("");
      setSuccess(data.message);
      setTimeout(() => navigate("/profile"), 2000);
      return;
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-5/6 max-w-xs min-w-[220px]"
      >
        <Input
          type={"email"}
          placeholder={"Email Address"}
          name={"email"}
          handleChange={handleChange}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          handleChange={handleChange}
        />

        <SubmitButton>LOGIN</SubmitButton>
        <span className="text-[#757373] cursor-pointer hover:text-green">
          Forgot password
        </span>
      </form>{" "}
    </>
  );
};

export { LoginForm };
