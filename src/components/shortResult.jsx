import React from "react";
import { Link } from "react-router-dom";
import MovieInfo from "./movieInfo";
import Thumbnail from "./thumbnail";
import { selectSource } from "./utilities/utilities";

const ShortResult = ({ movie, favorites, handleFavorites }) => {
  return (
    <React.Fragment>
      <Link to="/moviePage" state={movie}>
        <Thumbnail className="thumbnail" source={selectSource(movie)} />
      </Link>
      <MovieInfo
        favorites={favorites}
        movie={movie}
        handleFavorites={handleFavorites}
      />
    </React.Fragment>
  );
};

export default ShortResult;
