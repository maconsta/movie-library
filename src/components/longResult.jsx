import React from "react";
import ReactStars from "react-stars";

const LongResult = () => {
  return (
    <React.Fragment>
      <div className="rating">
        <h3>Your Review</h3>
        <ReactStars count={5} size={40} half={false}></ReactStars>
      </div>
      <div className="review-container">
        <textarea
          placeholder="Your private notes and comments about the movie..."
          className="review"
        />
      </div>
    </React.Fragment>
  );
};

export default LongResult;
