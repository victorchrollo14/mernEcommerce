import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";

import { MobNavigation } from "./MobNavigation";
import { useUserContext } from "../contexts/userContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { loggedIn, user } = useUserContext();
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  // console.log(user);
  // console.log(user?.avatar);

  return (
    // <div className="sm:h-[60px] md:h-[70px] xl:h-[89px]">
    <div className="flex justify-between h-[50px] border border-black rounded-[10px] bg-white mx-4 my-4 p-2 md:h-[70px] xl:h-[80px]">
      <div className="flex items-center xl:w-2/4  md:w-4/6">
        <div
          className="font-Volkhov text-xl text-zinc-700 cursor-pointer ml-2 md:text-2xl lg:text-3xl mt-1 xl:text-4xl"
          onClick={() => {
            navigate("/");
          }}
        >
          Men's Tribe
        </div>
        <div className="hidden justify-center gap-3 mt-1 items-center ml-9 md:flex xl:mt-2 xl:pl-5 xl:gap-6">
          <Link
            to="/"
            className="font-Poppins text-zinc-700 font-medium md:text-lg xl:text-xl"
          >
            Home
          </Link>
          <Link
            to="/shop/shirts"
            className="font-Poppins text-zinc-700 font-medium md:text-lg xl:text-xl"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="font-Poppins text-zinc-700 font-medium md:text-lg xl:text-xl"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="left justify-around items-center mr-3 hidden  md:flex md:gap-3 xl:gap-4 xl:mr-4">
        <div className="inputBox relative flex rounded-lg  border border-neutral-400 md:w-36 md:h-9 xl:w-56 h-10">
          <div className="relative flex my-auto">
            <BiSearch className="text-3xl mx-2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full font-Poppins pt-1 pr-2 outline-none bg-transparent"
            />
          </div>
        </div>
        <HiShoppingCart
          className="text-2xl place-items-end cursor-pointer xl:text-3xl"
          onClick={() => {
            navigate("/cart");
          }}
        />

        {user?.avatar ? (
          <img
            src={user?.avatar}
            alt="userImage"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}
          />
        ) : (
          <FaUserCircle
            className="text-[25px] place-items-center cursor-pointer xl:text-[35px]"
            onClick={() => {
              loggedIn ? navigate("/profile") : navigate("/register");
            }}
          />
        )}
      </div>

      {/* Mobile view */}
      <div className="flex items-center gap-2 md:hidden">
        <BiSearch
          className="text-2xl  text-neutral-400"
          onClick={() => {
            setSearch(!search);
            setToggle(false);
          }}
        />
        <FaUserCircle
          className="text-[25px] place-items-center cursor-pointer relative"
          onClick={() => {
            loggedIn ? navigate("/profile") : navigate("/register");
          }}
        />
        {!toggle ? (
          <HiOutlineMenuAlt2
            className="text-2xl  text-black"
            onClick={() => {
              setToggle(true);
              setSearch(false);
            }}
          />
        ) : (
          <HiOutlineX
            className="text-2xl text-black float-right"
            onClick={() => setToggle(false)}
          />
        )}
      </div>

      {toggle && <MobNavigation setToggle={setToggle} />}
      {search && (
        <div className="flex absolute z-50 top-20 border-2 px-3 py-2 w-[90vw] rounded-md border-black bg-white border-opacity-70 bg-gray-200 md:hidden lg:hidden xl:hidden">
          <BiSearch className="text-3xl text-black" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full pt-1 pr-2 ml-2 outline-none bg-transparent font-Poppins placeholder:text-black placeholder:opacity-60"
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
