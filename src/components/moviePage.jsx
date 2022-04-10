import React from "react";
import { useLocation } from "react-router-dom";
import Result from "./result";

const MoviePage = ({
  review,
  favorites,
  handleComment,
  handleRating,
  handleFavorites,
  addMovieToReview,
}) => {
  const location = useLocation();
  const movie = location.state;
  return (
    <main>
      <Result
        movie={movie}
        review={review}
        favorites={favorites}
        detailed={true}
        handleComment={handleComment}
        handleRating={handleRating}
        handleFavorites={handleFavorites}
        addMovieToReview={addMovieToReview}
      />
    </main>
  );
};

export default MoviePage;
