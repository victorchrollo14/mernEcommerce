import React from "react";
import { useState } from "react";

const Card = () => {
  const [card, setCard] = useState({})

  const cardDetails = () => {
    setCard({ ...card, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="streetname flex flex-col gap-1 mt-5">
        <label htmlFor="streetname">Street Name</label>
        <input
          type="text"
          name="street"
          className="bg-white px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => cardDetails(e)}
        />
      </div>
      <div className="countryname flex flex-col gap-1">
        <label htmlFor="countryname">Country</label>
        <input
          type="text"
          name="country"
          className="bg-white px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => cardDetails(e)}
        />
      </div>
      <div className="monthYear flex gap-3">
        <div className="month flex flex-col gap-1">
          <label htmlFor="month">Month</label>
          <input
            type="number"
            name="month"
            className="bg-white w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => cardDetails(e)}
          />
        </div>
        <div className="year flex flex-col gap-1">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            className="bg-white w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => cardDetails(e)}
          />
        </div>
        <div className="cvv flex flex-col gap-1">
          <label htmlFor="cvv">CVV</label>
          <input
            type="number"
            name="cvv"
            className="bg-white w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => cardDetails(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
