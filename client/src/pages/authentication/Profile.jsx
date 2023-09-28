import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/userContext";
import { ErrorMessage, SuccessMessage } from "../../components/Alert";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../services/auth";

const Profile = () => {
  const { user, setUser, setLoggedIn } = useUserContext();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const isSuccess = logout();
    if (isSuccess) {
      setError("");
      setLoggedIn(false);
      setSuccess("Successfully logged out");
      setTimeout(() => {
        navigate("/login");
        setUser(undefined);
      }, 2000);

      return;
    }
    setSuccess("");
    setError("unable to log out some error occured");
  };

  return (
    <>
      {" "}
      {user ? (
        <section className="profile flex items-center gap-2 flex-col w-screen">
          <h1 className="text-center font-serif text-2xl">{user.fullname}</h1>
          <h2 className="text-center font-Poppins text-2xl">{user.email}</h2>
          <button
            onClick={handleSubmit}
            className="bg-black text-white h-10 w-24 text-center"
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
