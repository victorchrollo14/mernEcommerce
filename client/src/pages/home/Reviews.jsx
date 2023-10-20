import { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import { ReviewCard } from "./ReviewCard";

const Reviews = () => {
  const [reviewCount, setReviewCount] = useState(0);

  const handleReview = (direction) => {
    if (direction === "Next") {
      if (reviewCount < 3) {
        setReviewCount((prev) => prev + 1);
      } else {
        setReviewCount(0);
      }
    }
    if (direction === "Prev") {
      if (reviewCount > 0) {
        setReviewCount((prev) => prev - 1);
      } else {
        setReviewCount(3);
      }
    }
  };

  return (
    <>
      <div className="review w-screen flex justify-center items-center flex-col bg-white">
        <h1 className="mt-8 text-2xl md:text-6xl md:w-full md:mt-28 w-52 text-center text-black font-Volkhov">
          This Is What Our Customers Say
        </h1>
        <h2 className="text-center text-lg md:text-xl md:mt-8 text-slate mx-3 mt-4">
          Customer Testimonials: Real Stories, Real Satisfaction"
        </h2>
        <ReviewCard reviewCount={reviewCount} />
        <div className="flex my-10 text-2xl">
          <div
            className="rounded-full text-2xl p-2 bg-white mx-4 drop-shadow-xl cursor-pointer border border-gray-200"
            onClick={() => handleReview("Prev")}
          >
            <GrPrevious />
          </div>
          <div
            className="rounded-full text-2xl p-2 bg-white mx-4 drop-shadow-xl cursor-pointer border border-gray-200"
            onClick={() => handleReview("Next")}
          >
            <GrNext />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
