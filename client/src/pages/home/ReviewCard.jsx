import React from "react";
import { FaStar } from "react-icons/fa";

import reviewImage1 from "../../assets/review1.png";
import reviewImage2 from "../../assets/review2.png";
import reviewImage3 from "../../assets/review3.png";
import reviewImage4 from "../../assets/review4.png";

export const ReviewCard = ({ reviewCount }) => {
  const reviews = [
    {
      id: 0,
      review:
        "Exceptional quality and style, the brand never disappoints with its attention to detail and timeless designs.",
      rating: 5,
      name: "Adams lenin",
      occupation: "Graphic Designer",
      image: reviewImage1,
    },
    {
      id: 1,
      review:
        "Unbeatable comfort in soft cotton shirts and tailored jeans – a must for modern men",
      rating: 4,
      name: "Michael Johnson",
      occupation: "Software Engineer",
      image: reviewImage2,
    },
    {
      id: 2,
      review:
        "Effortless elegance and comfort combined seamlessly in this brand's stylish clothing",
      rating: 5,
      name: "Roberto del rio",
      occupation: "Musician",
      image: reviewImage3,
    },
    {
      id: 3,
      review:
        "Customer-centric excellence shines with responsive support and consistent sizing, making online shopping a breeze.",
      rating: 3,
      name: "Alex Carter",
      occupation: "Accountant",
      image: reviewImage4,
    },
  ];

  return (
    <>
      {reviews.map((rev) => (
        <li
          key={rev.id}
          className={`w-72 border-[1px] border-black rounded-xl p-6 flex flex-col md:flex-row md:w-[700px] text-[#484848] mt-14 transition-opacity duration-300 ${
            rev.id !== reviewCount ? "hidden" : "slide-in"
          }`}
        >
          <div className="img md:w-1/2 flex h-[20rem] overflow-hidden">
            <img className="m-auto w-5/6 h-auto" src={rev.image} alt="person" />
          </div>
          <div className="info flex justify-center items-center md:items-start md:ml-8 md:text-xl flex-col">
            <p className="text-center md:text-left md:w-72  my-2">
              "{rev.review}"
            </p>
            <StarRating rating={rev.rating} />
            <hr className="w-2/3 mb-6 divide-black" />
            <p className="text-2xl md:text-3xl font-semibold">{rev.name}</p>
            <p className="my-3">{rev.occupation}</p>
          </div>
        </li>
      ))}
    </>
  );
};

const StarRating = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} className="text-yellow" />
  ));

  return <div className="flex my-3 text-lg">{filledStars}</div>;
};
