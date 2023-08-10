import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
const NavBar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [shop, setShop] = useState(false);

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
          Black Market
        </div>
        <div className="hidden justify-center gap-3 mt-1 items-center ml-9 md:flex xl:mt-2 xl:pl-5 xl:gap-6">
          <Link
            to="/"
            className="font-Poppins text-zinc-700 font-medium md:text-lg xl:text-xl"
          >
            Home
          </Link>
          <Link
            to="/shop"
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
      <div className="left justify-around items-center mr-3 hidden md:flex md:gap-3 xl:gap-4 xl:mr-4">
        <div className="inputBox relative flex rounded-lg border border-neutral-400 md:w-36 md:h-9 xl:w-56 h-10">
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
        <FaUserCircle className="text-[25px] place-items-center cursor-pointer xl:text-[35px]" />
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
        <FaUserCircle className="text-[25px] place-items-center cursor-pointer relative" />
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

      {toggle && (
        <div className="flex flex-col absolute top-14 right-10 bg-black py-2 rounded-sm px-2 z-50">
          <Link
            to="/"
            className="font-Poppins text-base text-white py-1 pl-1 border-b border-white border-opacity-40 font-medium xl:text-xl md:text-lg"
          >
            Home
          </Link>
          {/* <Link
            to="/shop"
            className="font-Poppins py-1 px-3 border-b border-gray-500 text-zinc-700 font-medium xl:text-xl md:text-lg sm:text-base"
          >
            Shop
          </Link> */}
          <div
            className="flex flex-col relative"
            onClick={() => setShop(!shop)}
          >
            <div className="flex items-center space-x-6 pl-1 py-2 ">
              <div className="text-white font-Poppins text-base">Shop</div>
              {shop ? (
                <IoMdArrowDropupCircle className="text-white text-lg" />
              ) : (
                <IoMdArrowDropdownCircle className="text-white text-lg" />
              )}
            </div>
            {shop && (
              <div className="relative my-1 ml-1">
                <li className="list-none text-white">Shirts</li>
                <li className="list-none text-white">Outwear</li>
                <li className="list-none text-white">Sweaters</li>
                <li className="list-none text-white">Footwear</li>
                <li className="list-none text-white">Bottoms</li>
                <li className="list-none text-white">Accesories</li>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className="font-Poppins text-base text-white py-1 pl-1 font-medium border-t border-white border-opacity-40  xl:text-xl md:text-lg"
          >
            Contact
          </Link>
        </div>
      )}
      {search && (
        <div className="flex absolute top-20 border-2 px-3 py-2 w-[90vw] rounded-md border-black border-opacity-70 bg-gray-200 md:hidden lg:hidden xl:hidden">
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
