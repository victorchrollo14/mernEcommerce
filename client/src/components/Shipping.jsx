import React from "react";
import { useState } from "react";

const Shipping = () => {
  const [address, setAddress] = useState({})

  const addressDetails = {
    name: "",
    street: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  }
  const shippingDetails = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
    console.log(address)
  }
  return (
    <>
      <div className="name flex flex-col gap-1">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          className="bg-white px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => shippingDetails(e)}
        />
      </div>
      <div className="streetname flex flex-col gap-1">
        <label htmlFor="streetname">Street Name</label>
        <input
          type="text"
          name="street"
          className="bg-white px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => shippingDetails(e)}
        />
      </div>
      <div className="countryname flex flex-col gap-1">
        <label htmlFor="countryname">Country</label>
        <input
          type="text"
          name="country"
          className="bg-white px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => shippingDetails(e)}
        />
      </div>
      <div className="stateCity flex gap-3">
        <div className="state flex flex-col gap-1">
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            className="bg-white w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => shippingDetails(e)}
          />
        </div>
        <div className="city flex flex-col gap-1">
          <label htmlFor="name">City</label>
          <input
            type="text"
            name="city"
            className="bg-white w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => shippingDetails(e)}
          />
        </div>
      </div>
      <div className="pincode flex flex-col gap-1">
        <label htmlFor="pincode">Pin Code</label>
        <input
          type="number"
          name="pincode"
          className="bg-white px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => shippingDetails(e)}
        />
      </div>

    </ >
  );
};

export default Shipping;
