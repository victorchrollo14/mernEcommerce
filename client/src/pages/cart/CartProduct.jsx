import React from "react";
import { FaRegHeart, FaHeart, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useUserContext } from "../../contexts/userContext";

const CartProduct = ({ item, setCart, cart, setConfirmModal, deleteID }) => {
  let { _id, title, price, size, quantity, images } = item;
  const { token, user } = useUserContext();
  const [wishlist, setWishlist] = useState(false);

  const updateCart = async (itemID, opt) => {
    opt === "minus" ? (quantity -= 1) : (quantity += 1);

    try {
      const URL = import.meta.env.VITE_URL;
      const response = await fetch(`${URL}/cart/updateItem/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          itemID: itemID,
          quantity: quantity,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setCart(
          cart.map((item) => {
            if (item._id === _id) {
              return { ...item, quantity: quantity };
            }
            return item;
          })
        );
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {quantity === 0 ? (
        <div></div>
      ) : (
        <div className="cardContainer bg-lightestBlue p-4 border border-[#EDF0F8] mx-4 rounded-2xl flex flex-col md:flex-row md:justify-between">
          <div className="details flex gap-7 mt-1">
            <div className="image w-32 h-32 rounded-2xl">
              <img
                src={images[1]}
                alt=""
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="item_details flex flex-col">
              <h1 className="text-black text-lg font-semibold font-Poppins">
                {title}
              </h1>
              <span className="price text-PrimaryBlue font-bold text-2xl font-Poppins my-1">
                {price}
              </span>
              <div className="size_selection mt-2 bg-white w-fit py-2 px-3 rounded-lg text-center text-PrimaryBlue font-semibold outline-none">
                {size}
              </div>
            </div>
          </div>
          <div className="lower_card flex justify-between mt-5 items-center md:flex-col md:mt-3">
            <div
              className="wishlist bg-white p-2 rounded-lg ml-1 md:ml-20"
              onClick={() => setWishlist(!wishlist)}
            >
              {wishlist ? (
                <FaHeart className="text-xl text-PrimaryBlue" />
              ) : (
                <FaRegHeart className="text-xl text-PrimaryBlue" />
              )}
            </div>
            <div className="couter flex gap-1 items-center mr-2 justify-around">
              <div className="minus p-2 text-xl bg-white text-PrimaryBlue rounded-xl">
                {quantity === 1 ? (
                  <FaTrash
                    onClick={() => {
                      setConfirmModal(true);
                      deleteID.current = _id;
                    }}
                  />
                ) : (
                  <FaMinus onClick={() => updateCart(_id, "minus")} />
                )}
              </div>
              <span className="text-xl text-gray-400 font-Poppins w-6 text-center mx-2">
                {quantity}
              </span>
              <div
                className="plus p-2 text-xl bg-white text-PrimaryBlue rounded-xl"
                onClick={() => updateCart(_id, "plus")}
              >
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { CartProduct };
