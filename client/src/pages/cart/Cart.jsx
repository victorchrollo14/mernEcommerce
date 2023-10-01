import { useState } from "react";
import NavBar from "../../components/NavBar";
import CartProduct from "./CartProduct";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(693);

  const totalBill = (price) => {
    setTotal(total + price);
  };
  const items = [
    {
      id: 0,
      src: "../ProductAssets/shirt/instock_m_q123_California_BrickPlaid_Twill_001_530x.progressive.jpg",
      title: "The Hudson Sweater",
      price: "$168",
    },
    {
      id: 1,
      src: "../ProductAssets/sweater/instock_m_q322_HudsonSweater-HeatherGreen_001_530x.progressive.jpg",
      title: "The Everett Sweater",
      price: "$178",
    },
    {
      id: 2,
      src: "../ProductAssets/sweater/instock_m_q422_Magnus_Sweater_Natural_001_530x.progressive.jpg",
      title: "The Magnus Sweater",
      price: "$188",
    },
  ];
  return (
    <>
      <NavBar />

      {/* heading */}
      <div className="header flex flex-col items-center my-2 md:items-start md:ml-7">
        <h1 className="pt-3 text-3xl font-semibold md:pb-1 xl:text-4xl">
          Your Cart
        </h1>
        <h3 className="text-md pt-1 xl:text-lg">
          Not ready to checkout?
          <span className="pl-0.5 font-semibold text-PrimaryBlue cursor-pointer">
            Continue Shopping
          </span>
        </h3>
      </div>

      {/* product cards */}
      <div className="cart_section flex flex-col px-1 lg:flex-row xl:w-full">
        <div className="cart_products my-5 flex flex-col gap-4 xl:w-1/2 xl:mr-16 xl:ml-3">
          {items.map((item) => {
            return <CartProduct item={item} key={item.id} />;
          })}
        </div>

        {/* order_details */}
        <div className="order_details flex flex-col my-7 mx-5 bg-lightestBlue rounded-lg shadow-lg py-10 px-5 md:mx-14 md:px-10 lg:mx-5 lg:grow lg:py-20 lg:px-5 xl:w-1/2 xl:mr-10 xl:px-8 xl:gap-4 xl:py-12">
          <h1 className="text-2xl font-semibold lg:my-2 xl:text-3xl">
            Order Summary
          </h1>
          <input
            type="text"
            placeholder="Enter coupon code here"
            className="bg-transparent outline-none px-3 py-3 border border-black rounded-sm placeholder:text-lg my-4 text-lg md:mx-1"
          />
          <ul className="product_list flex flex-col pb-4 border-b border-gray-400">
            {items.map((item) => {
              return (
                <li className="flex justify-between" key={item.id}>
                  <span className="product_name text-lg ml-2 font-Poppins">
                    {item.title}
                  </span>
                  <span className="price mr-4 text-lg font-semibold text-PrimaryBlue font-Poppins">
                    {item.price}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="total flex justify-between my-2">
            <span className="font-bold text-xl ml-3 xl:text-2xl">Total</span>
            <span className="total_price mr-4 text-xl font-semibold font-Poppins xl:teext-2xl">
              ${total}
            </span>
          </div>
          <button
            className="mt-3 px-5 py-3 border border-PrimaryBlue bg-PrimaryBlue text-xl text-white font-semibold md:mx-1"
            onClick={() => navigate("/cart/checkout")}
          >
            Continue to Shipping
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
