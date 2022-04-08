import React from "react";
import { Link } from "react-router-dom";

const MovieInfo = ({ movie, classNames }) => {
  return (
    <div className={classNames[0]}>
      <Link className={classNames[1]} to="/moviePage" state={movie}>
        <h2>
          {movie.show.name} {addYearPremiered(movie)}
        </h2>
      </Link>
      <span className={classNames[2]}>{addGenresAndDuration(movie)}</span>
      <p className={classNames[3]}>{addSummary(movie)}</p>
      <a className={classNames[4]} href={movie.show.officialSite}>
        View the official site
      </a>
      <button className="btn-add-fav btn-xlarge">Add to favorites</button>
    </div>
  );
};

export default MovieInfo;

const addYearPremiered = (movie) => {
  if (movie.show.premiered !== null) {
    return "(" + movie.show.premiered.split("-")[0] + ")";
  }
};

const addGenresAndDuration = (movie) => {
  const { genres, averageRuntime } = movie.show;
  const arr = [];
  if (genres.length !== 0) {
    genres.forEach((element) => {
      arr.push(element + " ");
    });
    if (averageRuntime !== null) {
      arr.push("| " + averageRuntime + " minutes");
    }
    return arr;
  }
};

const addSummary = (movie) => {
  const { summary } = movie.show;
  if (summary) {
    const regex = new RegExp("(<p>)|(<b>)|(</p>)|(</b>)|(<i>)|(</i>)", "g");
    return summary.replaceAll(regex, "");
  }
};
