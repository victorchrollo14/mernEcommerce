import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
	const navigate = useNavigate();
	const [toggle, setToggle] = useState(false);
	const [search, setSearch] = useState(false);

	return (
		<div className="mx-5 my-4 p-2 bg-white rounded-[10px] border border-black flex justify-between xs:h-[50px] sm:h-[60px] md:h-[70px] xl:h-[89px] ">
			<div className="flex items-center xl:w-2/4 justify-around md:w-3/4 md:justify-evenly sm:w-full">
				<div
					className="font-Volkhov py-3 text-zinc-700 place-items-center cursor-pointer md:text-3xl pt-5 -ml-20 xl:text-5xl pl-10 sm:-ml-10 sm:text-xl pr-2 sm:-mb-0.5 xs:-ml-4 xs:text-xl xs:pt-3"
					onClick={() => {
						navigate("/");
					}}
				>
					Black Market
				</div>
				<div className="justify-center mb-2 xs:hidden sm:flex sm:pr-24 sm:pb-2 md:pl-2 md:pr-0 gap-4 md:pb-0 lg:mb-2 xl:gap-7 pt-3 xl:pr-0 xl:mb-2">
					<Link
						to="/"
						className="font-Poppins text-zinc-700 font-medium xl:text-xl md:text-lg sm:text-base"
					>
						Home
					</Link>
					<Link
						to="/shop"
						className="font-Poppins text-zinc-700 font-medium xl:text-xl md:text-lg sm:text-base"
					>
						Shop
					</Link>
					<Link
						to="/contact"
						className="font-Poppins text-zinc-700 font-medium xl:text-xl md:text-lg sm:text-base"
					>
						Contact
					</Link>
				</div>
			</div>
			<div className="left justify-around items-center pr-8 xl:gap-6 flex md:gap-3 md:flex md:pr-4 sm:hidden xxs:hidden xs:hidden">
				<div className="inputBox relative flex rounded-lg border border-neutral-400 xl:w-60 h-11 md:w-36 md:h-9">
					<div className="relative flex my-auto">
						<BiSearch className="text-3xl mx-2 text-neutral-400" />
						<input
							type="text"
							placeholder="Search"
							className="md:w-full h-full pt-1 pr-2 outline-none bg-transparent font-Poppins"
						/>
					</div>
				</div>
				<HiShoppingCart
					className="text-3xl place-items-end cursor-pointer"
					onClick={() => {
						navigate("/cart");
					}}
				/>
				<FaUserCircle className="text-[35px] place-items-center cursor-pointer" />
			</div>

			{/* Mobile view */}
			<div className="flex justify-center items-center md:hidden lg:hidden xl:hidden">
				<BiSearch
					className="text-3xl mx-2 text-neutral-400"
					onClick={() => {
						setSearch(!search);
						setToggle(false);
					}}
				/>
				{!toggle ? (
					<HiOutlineMenuAlt2
						className="text-3xl mx-2 text-black"
						onClick={() => {
							setToggle(true);
							setSearch(false);
						}}
					/>
				) : (
					<HiOutlineX
						className="text-3xl mx-2 text-black float-right"
						onClick={() => setToggle(false)}
					/>
				)}
			</div>

			{toggle && (
				<div className="flex flex-col absolute top-16 right-12 bg-gray-200 py-2 rounded-sm">
					<Link
						to="/"
						className="font-Poppins py-1 px-4 border-b-2 border-gray-500 text-zinc-700 font-medium xl:text-xl md:text-lg sm:text-base"
					>
						Account
					</Link>
					<Link
						to="/"
						className="font-Poppins py-1 px-4 border-b-2 border-gray-500 text-zinc-700 font-medium xl:text-xl md:text-lg sm:text-base"
					>
						Home
					</Link>
					<Link
						to="/shop"
						className="font-Poppins py-1 px-4 border-b-2 border-gray-500 text-zinc-700 font-medium xl:text-xl md:text-lg sm:text-base"
					>
						Shop
					</Link>
					<Link
						to="/contact"
						className="font-Poppins py-1 px-4 text-zinc-700 font-medium xl:text-xl md:text-lg sm:text-base"
					>
						Contact
					</Link>
				</div>
			)}
			{search && (
				<div className="flex absolute top-20 border-2 px-3 py-2 w-[88vw] rounded-md bg-gray-200 md:hidden lg:hidden xl:hidden">
					<BiSearch className="text-3xl mx-2 text-black" />
					<input
						type="text"
						placeholder="Search"
						className="w-full h-full pt-1 pr-2 outline-none bg-transparent font-Poppins placeholder:text-black"
					/>
				</div>
			)}
		</div>
	);
};

export default NavBar;
