import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-darkBlue text-white mb-0  pt-16">
      <div className="px-5 flex flex-col w-screen md:items-center md:pt-3 md:pb-9">
        <h1 className="text-4xl md:text-6xl font-Volkhov">Black Market</h1>
        <p className="text-[#81868C] text-left md:text-center w-64 my-3 md:text-xl md:w-96">
          We are a Reputed Men’s Clothing Brand and we sell clothes and also
          some{" "}
          <a href="https://www.youtube.com/watch?v=toL2_zifwuU">
            <span className="font-extrabold">shady</span>
          </a>{" "}
          stuff for low Prices
        </p>
        <div className="footer-links font-medium flex w-auto my-8 ml-2 md:text-xl  justify-start gap-7">
          <div className="flex flex-col md:flex-row gap-3 md:gap-7">
            <Link to={"/shop/shirts"} className="hover:underline">
              Shirts
            </Link>
            <Link to={"/shop/knits"} className="hover:underline">
              Knits
            </Link>
            <Link to={"/shop/bottoms"} className="hover:underline">
              Bottoms
            </Link>
            <Link to={"/shop/sweaters"} className="hover:underline">
              Sweaters{" "}
            </Link>
          </div>
          <div className="ml-3 flex flex-col md:flex-row gap-3 md:gap-7">
            <Link to={"/shop/denim"} className="hover:underline">
              Denim{" "}
            </Link>
            <Link to={"/shop/outwear"} className="hover:underline">
              Outwear
            </Link>
            <Link to={"/shop/footwear"} className="hover:underline">
              Footwear{" "}
            </Link>
            <Link to={"/shop/accessories"} className="hover:underline">
              Accessories
            </Link>
          </div>
        </div>
        <div className="socials flex text-2xl my-8 md:text-3xl">
          <FaFacebookF className="mr-5 md:mr-10" />
          <FaTwitter className="mr-5 md:mr-10" />
          <FaInstagram className="mr-5 md:mr-10" />
        </div>
      </div>
      <hr className="w-screen" />

      <div className="py-5 flex justify-center items-center">
        <div className="md:text-2xl md:flex">
          <div>COPYRIGHTS BLACKMARKET.COM.</div>
          <p className="text-center ml-1">ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
