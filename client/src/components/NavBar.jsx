import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

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
        <div className="inputBox relative w-60 h-11 bg-white bg-opacity-60 rounded-lg border border-neutral-400">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full pl-9 outline-none bg-transparent font-Poppins"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            className="absolute top-2.5 left-2"
          >
            <path
              d="M9.80584 17.7966C13.9429 17.7966 17.2967 14.4428 17.2967 10.3058C17.2967 6.1687 13.9429 2.81494 9.80584 2.81494C5.66876 2.81494 2.315 6.1687 2.315 10.3058C2.315 14.4428 5.66876 17.7966 9.80584 17.7966Z"
              stroke="#969696"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.015 15.9041L17.9517 18.8332"
              stroke="#969696"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-2xl place-items-end cursor-pointer"
          onClick={() => {navigate("/cart")}}
        />
        <FontAwesomeIcon
          icon={faCircleUser}
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
