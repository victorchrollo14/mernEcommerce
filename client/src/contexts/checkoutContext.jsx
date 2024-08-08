import React, { createContext, useState, useContext, useEffect } from "react";

// Create the Checkout Context
const CheckoutContext = createContext();

// Create a provider component
export const CheckoutProvider = ({ children }) => {
  const [address, setAddress] = useState(() => {
    const address = localStorage.getItem("address");
    return address
      ? JSON.parse(address)
      : {
          name: "",
          street: "",
          country: "",
          state: "",
          city: "",
          postalCode: "",
        };
  });

  const [paymentMethod, setPaymentMethod] = useState(() => {
    const paymentMethod = localStorage.getItem("paymentMethod");
    return paymentMethod ? paymentMethod : "card";
  });
  const [cardDetails, setCardDetails] = useState(() => {
    const cardDetails = localStorage.getItem("cardDetails");
    return cardDetails
      ? JSON.parse(cardDetails)
      : {
          name: "",
          cardNumber: "",
          month: "",
          year: "",
          cvv: "",
        };
  });

  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    if (address) {
      localStorage.setItem("address", JSON.stringify(address));
    }
  }, [address]);

  useEffect(() => {
    if (paymentMethod) {
      localStorage.setItem("paymentMethod", paymentMethod);
    }
  }, [paymentMethod]);

  useEffect(() => {
    if (cardDetails) {
      localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
    }
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
