import React, { useEffect } from "react";
import ReactStars from "react-stars";
import { setValue } from "./utilities/utilities";

const LongResult = ({
  movie,
  review,
  handleComment,
  handleRating,
  addMovieToReview,
}) => {
  useEffect(() => {
    addMovieToReview(movie);
  }, []);

  return (
    <React.Fragment>
      <div className="rating">
        <h3>Your Review</h3>
        <ReactStars
          count={5}
          value={setValue(movie, review, true)}
          size={40}
          half={false}
          onChange={(number) => {
            handleRating(number, movie);
          }}
        ></ReactStars>
      </div>
      <div className="review-container">
        <textarea
          placeholder="Your private notes and comments about the movie..."
          className="review"
          value={setValue(movie, review)}
          onChange={(event) => {
            handleComment(event, movie);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default LongResult;
