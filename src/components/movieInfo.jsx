import React from "react";
import { Link } from "react-router-dom";
import {
  addYearPremiered,
  addGenresAndDuration,
  addSummary,
  changeButtonClass,
  changeButtonText,
} from "./utilities/utilities";

const MovieInfo = ({ movie, favorites, handleFavorites }) => {
  return (
    <div className={"info-container"}>
      <Link className={"link-decoration"} to="/moviePage" state={movie}>
        <h2>
          {movie.show.name} {addYearPremiered(movie)}
        </h2>
      </Link>
      <span className={"genres"}>{addGenresAndDuration(movie)}</span>
      <p className={"summary"}>{addSummary(movie)}</p>
      <a className={"official-site"} href={movie.show.officialSite}>
        View the official site
      </a>
      <button
        className={changeButtonClass(movie, favorites)}
        onClick={() => {
          handleFavorites(movie);
        }}
      >
        {changeButtonText(movie, favorites)}
      </button>
    </div>
  );
};

export default MovieInfo;
