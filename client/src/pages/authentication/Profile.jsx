import React, { useState } from "react";
import { useUserContext } from "../../contexts/userContext";
import { ErrorMessage, SuccessMessage } from "../../components/Alert";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../services/auth";

const Profile = () => {
  const { user } = useUserContext();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const isSuccess = logout();
    if (isSuccess) {
      setError("");
      setSuccess("Successfully logged out");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }
    setSuccess("");
    setError("unable to log out some error occured");
  };
  return (
    <>
      {" "}
      {user ? (
        <section className="profile">
          <h1>{user.fullname}</h1>
          <h2>{user.email}</h2>
          <button
            onClick={handleSubmit}
            className="bg-black text-white h-10 w-24"
          >
            Logout
          </button>
          {error && <ErrorMessage error={error} />}
          {success && <SuccessMessage success={success} />}
        </section>
      ) : (
        <div>
          Login first<Link to={"/login"}></Link>
        </div>
      )}
    </>
  );
};

export default Profile;
