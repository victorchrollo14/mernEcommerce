import NavBar from "../../components/NavBar";
import Shipping from "../../components/Shipping";
import Payment from "../../components/Payment/Payment";
import Confirm from "../../components/Payment/Confirm";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";
import { useState } from "react";
import ShippingImage from "../../components/shipping.png"

const CheckoutPage = () => {
  const [shipping, setShipping] = useState(true);
  const [payment, setPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  return (
    <>
      <NavBar />
      <div className="status md:ml-6 xl:ml-10 xl:text-xl flex flex-wrap gap-2 items-center mx-4 mt-6">
        <span className="text-md font-['Inter'] text-blue-500">Shipping</span>
        <div className="break flex gap-1 text-lg pt-1">
          <AiOutlineLine className={paymentStatus ? "text-blue-500" : "text-zinc-600"} />
          <IoCheckmarkDoneCircleSharp className={paymentStatus ? "text-blue-500" : "text-zinc-600"} />
          <AiOutlineLine className={paymentStatus ? "text-blue-500" : "text-zinc-600"} />
        </div>
        <span className={`text-md font-['Inter'] ${paymentStatus ? "text-blue-500" : "text-zinc-600"}`}>Payment</span>
        <div className="break flex gap-1 text-lg pt-1">
          <AiOutlineLine className={confirmation ? "text-blue-500" : "text-zinc-600"} />
          <IoCheckmarkDoneCircleSharp className={confirmation ? "text-blue-500" : "text-zinc-600"} />
          <AiOutlineLine className={confirmation ? "text-blue-500" : "text-zinc-600"} />
        </div>
        <span className="text-md font-['Inter'] text-zinc-500">
          Confirmation
        </span>
      </div>
      <div className="checkOut lg:flex lg:mb-10 lg:mt-4">
        <div className="left lg:w-2/3 xl:w-1/2">
          <div className="form md:mx-10 md:px-10 md:py-10 xl:mx-20 mt-8 mb-6 border rounded-md font-['Inter'] border-slate-100 flex flex-col mx-5 py-8 px-4 gap-4 bg-slate-200">
            {shipping && <Shipping />}
            {shipping && (
              <button className="py-3 mt-3 text-base text-white font-medium bg-indigo-800 rounded-md border border-indigo-900 font-['Inter']" onClick={() => {
                setShipping(false)
                setPayment(true)
                setPaymentStatus(true)
              }}>
                Continue to Payments
              </button>
            )}
            {payment && <Payment />}
            {payment && (
              <button className="py-3 mt-4 text-base text-white font-medium bg-indigo-800 rounded-md border border-indigo-900 font-['Inter']" onClick={() => {
                setConfirmation(true);
                setPayment(false);
              }}>
                Confirm Payment : $698
              </button>
            )}
            {
              confirmation && <Confirm />
            }
          </div>
        </div>
        <div className="right hidden lg:flex pt-3 pr-5 xl:">
          <img src={ShippingImage} alt="" className="w-full object-cover rounded-md px-10" />
        </div>
      </div>

    </>
  );
};

export default CheckoutPage;
