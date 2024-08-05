import React from "react";
import card from "./card.png";
import { useState } from "react";
import Card from "./Card";
import Upi from "./Upi";
import Rezorpay from "./Rezorpay";
import upiSvg from "./Upi.svg";
import razorpay from "./razorpay.svg";
import { useCheckoutContext } from "../../../contexts/checkoutContext";

const Payment = () => {
  const { paymentMethod, setPaymentMethod } = useCheckoutContext();
  return (
    <>
      <>
        <h1 className="text-lg font-semibold">Payment Method</h1>
        <div className="choice mt-1 flex flex-wrap items-center justify-between">
          <div
            className="cards flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setPaymentMethod("card");
            }}
          >
            <input
              type="radio"
              className="mt-3 w-4 h-4"
              value={"card"}
              name="payment"
              checked={paymentMethod === "card"}
              readOnly
            />
            <img src={card} alt="" className="w-8 h-8" />
          </div>
          <div
            className="upi flex items-center cursor-pointer"
            onClick={() => {
              setPaymentMethod("upi");
            }}
          >
            <input
              type="radio"
              className="mt-3 w-4 h-4"
              value={"upi"}
              name="payment"
              checked={paymentMethod === "upi"}
              readOnly
            />
            <div className="upiImage pt-3">
              <img src={upiSvg} alt="" />
            </div>
          </div>
          <div
            className="rezorpay flex items-center gap-1 cursor-pointer"
            onClick={() => {
              setPaymentMethod("razorpay");
            }}
          >
            <input
              type="radio"
              className="mt-3 w-4 h-4"
              value={"razorpay"}
              name="payment"
              checked={paymentMethod === "razorpay"}
              readOnly
            />
            <div className="rezorpay pt-3">
              <img src={razorpay} alt="" />
            </div>
          </div>
        </div>
        {paymentMethod === "card" && <Card />}
        {paymentMethod === "upi" && <Upi />}
        {paymentMethod === "razorpay" && <Rezorpay />}
      </>
    </>
  );
};

export default Payment;
