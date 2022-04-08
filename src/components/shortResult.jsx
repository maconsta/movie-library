import React from "react";
import { Link } from "react-router-dom";
import MovieInfo from "./movieInfo";
import Thumbnail from "./thumbnail";

const ShortResult = ({ movie }) => {
  return (
    <React.Fragment>
      <Link to="/moviePage" state={movie}>
        <Thumbnail className="thumbnail" source={selectSource(movie)} />
      </Link>
      <MovieInfo
        classNames={[
          "info-container",
          "link-decoration",
          "genres",
          "summary",
          "official-site",
        ]}
        movie={movie}
      />
    </React.Fragment>
  );
};

export default ShortResult;

const selectSource = (movie) => {
  if (movie.show.image === null) {
    return "https://picsum.photos/200/250";
  } else return movie.show.image.medium;
};
