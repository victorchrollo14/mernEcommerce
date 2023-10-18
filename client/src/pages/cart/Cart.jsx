import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import CartProduct from "./CartProduct";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useCartContext } from "../../contexts/cartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useCartContext();
  const [total, setTotal] = useState(0);

  const totalBill = () => {
    let sum = cart.reduce((total, item) => total + item.price, 0);
    setTotal(sum);
  };

  useEffect(() => {
    if (cart) {
      totalBill();
    }
  }, [cart]);

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
          <Link
            to={"/shop/shirts"}
            className="pl-0.5 font-semibold text-PrimaryBlue cursor-pointer"
          >
            Continue Shopping
          </Link>
        </h3>
      </div>

      {/* product cards */}
      <div className="cart_section flex flex-col px-1 lg:flex-row xl:w-full">
        {cart ? (
          <div className="cart_products my-5 flex flex-col md:h-[80vh] md:overflow-y-auto gap-4 xl:w-1/2 xl:mr-16 xl:ml-3">
            {cart.map((item) => {
              return (
                <CartProduct
                  item={item}
                  cart={cart}
                  key={item._id}
                  setCart={setCart}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-black my-5 flex flex-col gap-4 xl:w-1/2 xl:mr-16 ml-8">
            {" "}
            Your Cart is Empty
          </div>
        )}

        {/* order_details */}
        <div className="order_details flex flex-col h-fit my-7 mx-5 bg-lightestBlue rounded-lg shadow-lg py-10 px-5 md:mx-14 md:px-10 lg:mx-5 lg:grow lg:py-20 lg:px-5 xl:w-1/2 xl:mr-10 xl:px-8 xl:gap-4 xl:py-12">
          <h1 className="text-2xl font-semibold lg:my-2 xl:text-3xl">
            Order Summary
          </h1>
          <input
            type="text"
            placeholder="Enter coupon code here"
            className="bg-transparent outline-none px-3 py-3 border border-black rounded-sm placeholder:text-lg my-4 text-lg md:mx-1"
          />
          {cart && (
            <ul className="product_list flex flex-col pb-4 border-b border-gray-400">
              {cart.map((item) => {
                return (
                  <li className="flex justify-between" key={item._id}>
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
          )}

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
