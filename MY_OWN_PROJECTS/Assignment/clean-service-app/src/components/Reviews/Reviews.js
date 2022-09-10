import React from "react";
import "./Reviews.css";
import Reviewer from "./Reviwer";

import Services from "../../assets/urbanExpertCleaning-common.json";

const Reviews = () => {
  const reviews = Services[0].reviews;
  return (
    <div className="reviews">
      <h1>Customer reviews</h1>
      <h3>Avg. user rating</h3>
      <span className="rating">★ 4.76</span> <br />
      <span className="review-number">347K reviews</span>
      <hr />
      {reviews.map((review, idx) => {
        return (
          <React.Fragment>
            <Reviewer
              rating={review.rating}
              description={review.review}
              name={review.custName}
            />
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Reviews;
