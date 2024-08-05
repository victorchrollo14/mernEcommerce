import React, { createContext, useState, useContext, useEffect } from "react";

// Create the Checkout Context
const CheckoutContext = createContext();

// Create a provider component
export const CheckoutProvider = ({ children }) => {
  const [address, setAddress] = useState(
    localStorage.getItem("address") !== "undefined"
      ? JSON.parse(localStorage.getItem("address"))
      : {
          name: "",
          street: "",
          country: "",
          state: "",
          city: "",
          postalCode: "",
        }
  );

  const [paymentMethod, setPaymentMethod] = useState(
    localStorage.getItem("paymentMethod") !== "undefined"
      ? localStorage.getItem("paymentMethod")
      : "card"
  );
  const [cardDetails, setCardDetails] = useState(
    localStorage.getItem("cardDetails") !== "undefined"
      ? JSON.parse(localStorage.getItem("cardDetails"))
      : {
          name: "",
          cardNumber: "",
          month: "",
          year: "",
          cvv: "",
        }
  );

  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("paymentMethod", paymentMethod);
    localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
  }, [address]);

  useEffect(() => {
    localStorage.setItem("paymentMethod", paymentMethod);
  }, [paymentMethod]);

  useEffect(() => {
    localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
  }, [cardDetails]);

  return (
    <CheckoutContext.Provider
      value={{
        address,
        setAddress,
        paymentMethod,
        setPaymentMethod,
        cardDetails,
        setCardDetails,
        totalBill,
        setTotalBill,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

// Custom hook to use the CheckoutContext
export const useCheckoutContext = () => {
  return useContext(CheckoutContext);
};
