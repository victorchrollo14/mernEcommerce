import React, { createContext, useState, useContext } from "react";

// Create the Checkout Context
const CheckoutContext = createContext();

// Create a provider component
export const CheckoutProvider = ({ children }) => {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });

  const [totalBill, setTotalBill] = useState(0);

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
