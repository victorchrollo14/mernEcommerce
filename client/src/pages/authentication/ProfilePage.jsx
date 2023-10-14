import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { Profile } from "./Profile";

const ProfilePage = () => {
  return (
    <div className="app ">
      <NavBar />
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
