import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../services/auth";
import { Input, SubmitButton } from "../../components/Buttons";

export const RegisterForm = ({ setError, setSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    console.log(formData);
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
        <Input
          type={"text"}
          name={"fullname"}
          placeholder={"fullname"}
          handleChange={handleChange}
        />
        <Input
          type={"email"}
          name={"email"}
          placeholder={"Email Address"}
          handleChange={handleChange}
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Password"}
          handleChange={handleChange}
        />
        <Input
          type={"password"}
          name={"confirmPassword"}
          placeholder={"Confirm Password"}
          handleChange={handleChange}
        />
        <SubmitButton>REGISTER</SubmitButton>
      </form>
    </>
  );
};
