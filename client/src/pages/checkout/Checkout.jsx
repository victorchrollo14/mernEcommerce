import NavBar from "../../components/NavBar";
import Shipping from "./Shipping";
import Payment from "./Payment/Payment";
import Confirm from "./Payment/Confirm";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";
import { useState } from "react";
import ShippingImage from "./shipping.png";
import { useNavigate } from "react-router-dom";
import { useCheckoutContext } from "../../contexts/checkoutContext";
import { ConfirmModal } from "../../components/ConfirmModal";

const CheckoutPage = () => {
  const [shipping, setShipping] = useState(true);
  const [payment, setPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const { totalBill } = useCheckoutContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setConfirmModal(false);
    setConfirmation(true);
    setPayment(false);
  };

  return (
    <>
      <NavBar />
      <div className="checkOut lg:flex lg:mb-10 lg:mt-4">
        <div className="left lg:w-2/3 xl:w-1/2">
          <div
            className="flex items-center gap-0.5 mx-4  md:ml-3 xl:ml-6 w-fit xl:text-xl hover:underline cursor-pointer"
            onClick={() => {
              if (payment) {
                setPayment(false);
                setPaymentStatus(false);
                setShipping(true);
              }
              if (confirmation) {
                setConfirmation(false);
                setPayment(true);
              }
              if (shipping) {
                navigate(-1);
              }
            }}
          >
            <IoChevronBackOutline className="" />
            <span className="font-Volkho">Back</span>
          </div>
          <div className="status md:ml-6 xl:ml-10 xl:text-xl flex flex-wrap gap-2 items-center mx-4 mt-4">
            <span className="text-md font-['Inter'] text-lightBlue">
              Shipping
            </span>
            <div className="break flex gap-1 text-lg pt-1">
              <AiOutlineLine
                className={paymentStatus ? "text-lightBlue" : "text-zinc-600"}
              />
              <IoCheckmarkDoneCircleSharp
                className={paymentStatus ? "text-lightBlue" : "text-zinc-600"}
              />
              <AiOutlineLine
                className={paymentStatus ? "text-lightBlue" : "text-zinc-600"}
              />
            </div>
            <span
              className={`text-md font-['Inter'] ${
                paymentStatus ? "text-lightBlue" : "text-zinc-600"
              }`}
            >
              Payment
            </span>
            <div className="break flex gap-1 text-lg pt-1">
              <AiOutlineLine
                className={confirmation ? "text-lightBlue" : "text-zinc-600"}
              />
              <IoCheckmarkDoneCircleSharp
                className={confirmation ? "text-lightBlue" : "text-zinc-600"}
              />
              <AiOutlineLine
                className={confirmation ? "text-lightBlue" : "text-zinc-600"}
              />
            </div>
            <span className="text-md font-['Inter'] text-slate">
              Confirmation
            </span>
          </div>
          <div className="form md:mx-10 w-fit md:px-10 md:py-10  mt-8 mb-6 border rounded-md font-['Inter'] border-slate-100 flex flex-col mx-5 py-8 px-4 gap-4 bg-slate-200">
            {shipping && <Shipping />}
            {shipping && (
              <button
                className="py-3 mt-3 text-base text-white font-medium bg-PrimaryBlue rounded-md border border-PrimaryBlue font-['Inter']"
                onClick={() => {
                  setShipping(false);
                  setPayment(true);
                  setPaymentStatus(true);
                }}
              >
                Continue to Payments
              </button>
            )}
            {payment && <Payment />}
            {payment && (
              <button
                className="py-3 mt-4 text-base text-white font-medium bg-PrimaryBlue rounded-md border border-PrimaryBlue font-['Inter']"
                onClick={() => {
                  setConfirmModal(true);
                }}
              >
                Confirm Payment : ${totalBill}
              </button>
            )}
            {confirmModal && (
              <ConfirmModal
                confirmModal={confirmModal}
                setConfirmModal={setConfirmModal}
                confirmText={"Confirm"}
                handleClick={handleClick}
              >
                Are you sure you want to Confirm the Payment
              </ConfirmModal>
            )}
            {confirmation && <Confirm />}
          </div>
        </div>
        {/* Image */}
        <div className="right hidden lg:flex pt-3 pr-5">
          <img
            src={ShippingImage}
            alt=""
            className="w-full object-cover rounded-md px-10"
          />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
