import React from "react";
import LongResult from "./longResult";
import ShortResult from "./shortResult";

const Result = ({
  movie,
  review,
  favorites,
  detailed,
  handleComment,
  handleRating,
  handleFavorites,
  addMovieToReview,
}) => {
  let str = "result-card ";
  return (
    <div
      className={(str += detailed ? "result-card-long" : "result-card-short")}
    >
      <ShortResult
        movie={movie}
        favorites={favorites}
        handleFavorites={handleFavorites}
      />
      {detailed && (
        <LongResult
          movie={movie}
          review={review}
          handleComment={handleComment}
          handleRating={handleRating}
          addMovieToReview={addMovieToReview}
        />
      )}
    </div>
  );
};

export default Result;
