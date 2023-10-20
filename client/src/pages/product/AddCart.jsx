import React, { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { useUserContext } from "../../contexts/userContext";
import { DisplayModal } from "../../components/DisplayModal";

export const AddCart = ({ productID, setQuantity, size, quantity }) => {
  const { token, user } = useUserContext();
  const [showModal, setShowModal] = useState(false);
  let message = useRef();

  const addToCart = async () => {
    try {
      if (token) {
        const URL = import.meta.env.VITE_URL;
        const response = await fetch(`${URL}/cart/addItem`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            userID: user._id,
            productID: productID,
            quantity: quantity,
            size: size,
          }),
        });

        const data = await response.json();
        if (response.status === 400 || 500) {
          message.current = data.error;
          setShowModal(true);
        }
        if (response.status === 200 || 409) {
          message.current = data.message;
          setShowModal(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showModal && (
        <DisplayModal showModal={showModal} setShowModal={setShowModal}>
          {message.current}
        </DisplayModal>
      )}
      <div className="add_cart my-2 flex flex-col gap-5 mx-2 lg:mt-4">
        <div className="qty_counter flex justify-around w-28 px-3 py-3 bg-lightestSlate items-center rounded-3xl gap-2 md:ml-2 lg:w-32">
          <FaMinus
            className="text-PrimaryBlue text-md"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <span className="qty font-Poppins font-semibold">{quantity}</span>
          <FaPlus
            className="text-PrimaryBlue text-md"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
        <div className="buttons flex flex-row gap-2">
          {" "}
          <button
            className="cartButton flex sm:px-12 sm:py-3 w-[150px] sm:w-auto text-xs sm:text-lg items-center justify-center sm:font-semibold gap-3 bg-PrimaryBlue text-white rounded-3xl "
            onClick={() => addToCart()}
          >
            <BsHandbag />
            Add To Cart
          </button>
          <button className="buy-now bg-lightestSlate text-PrimaryBlue py-3 px-5 sm:py-3 sm:px-8 sm:font-bold rounded-3xl">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};
