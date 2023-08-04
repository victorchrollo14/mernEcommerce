import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import {HiShoppingCart} from 'react-icons/hi'
import {FaUserCircle} from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[89px] mx-5 my-4 bg-white rounded-[10px] border border-black flex justify-between">
      <div className="w-[50%] flex justify-around items-center">
        <div className="font-Volkhov text-zinc-700 text-5xl place-items-center cursor-pointer" onClick={() => {navigate("/")}}>
          Black Market
        </div>
        <div className="flex justify-center pt-2 gap-7">
          <Link
            to="/"
            className="font-Poppins text-zinc-700 text-xl font-medium"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="font-Poppins text-zinc-700 text-xl font-medium"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="font-Poppins text-zinc-700 text-xl font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="left flex justify-around items-center gap-6 pr-8">
        <div className="inputBox relative w-60 h-11 flex rounded-lg border border-neutral-400">
      
          <div className="relative flex my-auto">
            <BiSearch className="text-3xl mx-2 text-neutral-400"/>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none bg-transparent font-Poppins"
          />
          </div>

        </div>
        <HiShoppingCart
          className="text-3xl place-items-end cursor-pointer"
          onClick={() => {navigate("/cart")}}
        />
        <FaUserCircle
          className="text-[35px] place-items-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavBar;

{
  /* <Link to="/">
  <button className="ml-4 hover:text-white">Home</button>
</Link>
<Link to="/shop">
  <button className="ml-4 hover:text-white">Shop</button>
</Link>
<Link to="/cart">
  <button className="ml-4 hover:text-white">Cart</button>
</Link> */
}
