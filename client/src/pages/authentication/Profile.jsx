import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/userContext";
import { ErrorMessage, SuccessMessage } from "../../components/Alert";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../services/auth";
import { Loading } from "../../components/Loading";
import { FavoriteCard } from "../../components/FavoriteCard";
import { useCheckoutContext } from "../../contexts/checkoutContext";

const Profile = () => {
  const { user, setUser, setLoggedIn, token } = useUserContext();
  const { userWishlist, setUserWishlist } = useUserContext();
  const { address, setAddress } = useCheckoutContext();
  const [isEditing, setIsEditing] = useState(false);
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

  const shippingDetails = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    // console.log(address)
  };
  return (
    <>
      {" "}
      {token ? (
        user ? (
          <div className="flex w-full mt-10 h-[80vh]">
            <div className="flex flex-col items-center mt-6 w-2/5 px-6">
              <div>
                <h1 className="text-2xl text-center mb-6 font-Volkhov font-semibold">
                  Your Profile
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                <div className="name flex flex-col gap-1">
                  <label htmlFor="name">Full name</label>
                  <input
                    type="text"
                    name="name"
                    disabled={!isEditing}
                    value={user.fullname}
                    className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
                    onChange={(e) => shippingDetails(e)}
                  />
                </div>
                <div className="name flex flex-col gap-1">
                  <label htmlFor="name">Your Address</label>
                  <input
                    type="text"
                    name="name"
                    disabled={!isEditing}
                    value={address.name}
                    className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
                    onChange={(e) => shippingDetails(e)}
                  />
                </div>
                <div className="streetname flex flex-col gap-1">
                  <label htmlFor="streetname">Street Name</label>
                  <input
                    type="text"
                    name="street"
                    disabled={!isEditing}
                    value={address.street}
                    className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
                    onChange={(e) => shippingDetails(e)}
                  />
                </div>
                <div className="countryname flex flex-col gap-1">
                  <label htmlFor="countryname">Country</label>
                  <input
                    type="text"
                    name="country"
                    disabled={!isEditing}
                    value={address.country}
                    className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
                    onChange={(e) => shippingDetails(e)}
                  />
                </div>
                <div className="stateCity flex w-full items-center gap-3">
                  <div className="state flex flex-col gap-1">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      name="state"
                      disabled={!isEditing}
                      value={address.state}
                      className="bg-lightestBlue w-full px-2 py-2 rounded-md border border-white outline-none"
                      onChange={(e) => shippingDetails(e)}
                    />
                  </div>
                  <div className="city flex flex-col gap-1">
                    <label htmlFor="name">City</label>
                    <input
                      type="text"
                      name="city"
                      disabled={!isEditing}
                      value={address.city}
                      className="bg-lightestBlue w-full px-2 py-2 rounded-md border border-white outline-none"
                      onChange={(e) => shippingDetails(e)}
                    />
                  </div>
                </div>
                <div className="pincode flex flex-col gap-1">
                  <label htmlFor="pincode">Pin Code</label>
                  <input
                    type="number"
                    name="pincode"
                    disabled={!isEditing}
                    value={address.pincode}
                    className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
                    onChange={(e) => shippingDetails(e)}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  console.log("edit");
                  setIsEditing(!isEditing);
                }}
                className="bg-PrimaryBlue rounded-lg font-semibold font-Poppins text-white mt-6 px-4 py-2  text-center"
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
            {/* <section className="profile my-5 flex flex-col min-h-[40vh] gap-4 xl:w-1/2 xl:mr-16 xl:ml-3">
              <h1 className="text-center font-serif text-2xl">
                {user.fullname}
              </h1>
              <h2 className="text-center font-Poppins text-2xl">
                {user.email}
              </h2>
              <button
                onClick={handleSubmit}
                className="bg-black text-white h-10 w-24 text-center"
              >
                Logout
              </button>
              {error && <ErrorMessage error={error} />}
              {success && <SuccessMessage success={success} />}
            </section> */}
            <div className="flex flex-col h-full w-3/5">
              <div>
                <h1 className="text-2xl text-center font-Volkhov font-semibold">
                  Your Wishlist
                </h1>
              </div>
              {userWishlist?.length > 0 ? (
                <div className="flex flex-col h-full flex-wrap  overflow-scroll overflow-y-hidden md:mx-14 md:px-10 lg:mx-5 lg:py-20 lg:px-5 xl:mr-10 xl:px-8 xl:gap-4 xl:py-12">
                  {userWishlist?.map((item, index) => (
                    <FavoriteCard
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-40 text-center">
                  <h1 className="text-2xl">No items in wishlist</h1>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Loading />
        )
      ) : (
        <div className="w-screen text-center">
          <Link to={"/login"}>Login First</Link>
        </div>
      )}
    </>
  );
};

export { Profile };
