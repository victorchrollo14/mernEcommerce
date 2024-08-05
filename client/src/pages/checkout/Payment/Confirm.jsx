import React from "react";
import { useCheckoutContext } from "../../../contexts/checkoutContext";

const Confirm = () => {
  const { address, cardDetails, paymentMethod } = useCheckoutContext();
  return (
    <div className="flex flex-col w-full gap-10">
      <h2 className="text-lg xl:text-4xl font-semibold">Payment Confirm</h2>
      <div>
        <h1 className="text-lg font-semibold">Shipping Address</h1>
        <div>
          <p>{address.name}</p>
          <p>{address.street}</p>
          <p>{address.city}</p>
          <p>{address.state}</p>
          <p>{address.country}</p>
        </div>
        <h1 className="text-lg font-semibold">Payment Method</h1>
        <div>
          <p>{paymentMethod}</p>
          {paymentMethod === "card" && (
            <>
              <p>{cardDetails.name}</p>
              <p>{cardDetails.number}</p>
              <p>{cardDetails.month}</p>
              <p>{cardDetails.year}</p>
              <p>{cardDetails.cvv}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
