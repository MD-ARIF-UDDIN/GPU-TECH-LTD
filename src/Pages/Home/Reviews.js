import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://scrap-management-server-side.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-28">
      <h2 className="text-4xl font-bold text-center text-primary">
        Customer reviews
      </h2>

      <p className="text-center">Some of the latest reviews given by our customer are here</p>
      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
        {reviews
          .map((reviews) => (
            <Review key={reviews._id} reviews={reviews}></Review>
          ))
          .reverse().slice(0, 8)}
      </div>
    </div>
  );
};

export default Reviews;
