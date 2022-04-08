import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ handleSubmit, clearMovies }) => {
  let navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Movie Library</h2>
        <p>
          This is the world's most popular and authoritative source for movie
          content. Leave a note and rate your favorite TV show.
        </p>
        <button
          className="btn-search btn-hero btn-large"
          onClick={() => {
            navigate("/results");
            clearMovies();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
