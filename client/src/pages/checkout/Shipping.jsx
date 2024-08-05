import React from "react";
import { useState } from "react";
import { useCheckoutContext } from "../../contexts/checkoutContext";

const Shipping = () => {
  const {address, setAddress} = useCheckoutContext()
  
  const shippingDetails = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
    // console.log(address)
  }
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="name flex flex-col gap-1">
        <label htmlFor="name">Your Address</label>
        <input
          type="text"
          name="name"
          value={address.name}
          className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => shippingDetails(e)}
        />
      </div>
      <div className="streetname flex flex-col gap-1">
        <label htmlFor="streetname">Street Name</label>
        <input
          type="text"
          name="street"
          value={address.street}
          className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => shippingDetails(e)}
        />
      </div>
      <div className="countryname flex flex-col gap-1">
        <label htmlFor="countryname">Country</label>
        <input
          type="text"
          name="country"
          value={address.country}
          className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => shippingDetails(e)}
        />
      </div>
      <div className="stateCity flex w-full items-center gap-3">
        <div className="state flex flex-col gap-1">
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            value={address.state} 
            className="bg-lightestBlue w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => shippingDetails(e)}
          />
        </div>
        <div className="city flex flex-col gap-1">
          <label htmlFor="name">City</label>
          <input
            type="text"
            name="city"
            value={address.city}
            className="bg-lightestBlue w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => shippingDetails(e)}
          />
        </div>
      </div>
      <div className="pincode flex flex-col gap-1">
        <label htmlFor="pincode">Pin Code</label>
        <input
          type="number"
          name="pincode"
          value={address.pincode}
          className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => shippingDetails(e)}
        />
      </div>

    </div>
  );
};

export default Shipping;
