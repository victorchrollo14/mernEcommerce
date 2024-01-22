import React from "react";
import { useState } from "react";

const Card = () => {
  const [card, setCard] = useState({})

  const cardDetails = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value })
    // console.log(card)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="cardname flex flex-col gap-1 mt-5">
        <label htmlFor="cardname">Name</label>
        <input
          type="text"
          name="name"
          className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => cardDetails(e)}
        />
      </div>
      <div className="cardnumber flex flex-col gap-1">
        <label htmlFor="cardnumber">Card Number</label>
        <input
          type="text"
          name="number"
          className="bg-lightestBlue px-2 py-2 rounded-md border border-white outline-none"
          onChange={(e) => cardDetails(e)}
        />
      </div>
      <div className="monthYear flex gap-3">
        <div className="month flex flex-col gap-1">
          <label htmlFor="month">Month</label>
          <input
            type="number"
            name="month"
            className="bg-lightestBlue w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => cardDetails(e)}
          />
        </div>
        <div className="year flex flex-col gap-1">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            className="bg-lightestBlue w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => cardDetails(e)}
          />
        </div>
        <div className="cvv flex flex-col gap-1">
          <label htmlFor="cvv">CVV</label>
          <input
            type="number"
            name="cvv"
            className="bg-lightestBlue w-full px-2 py-2 rounded-md border border-white outline-none"
            onChange={(e) => cardDetails(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
