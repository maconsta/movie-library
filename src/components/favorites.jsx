import React from "react";
import Hero from "./hero";

const Favorites = ({ handleSubmit, clearMovies }) => {
  return (
    <React.Fragment>
      <Hero handleSubmit={handleSubmit} clearMovies={clearMovies}></Hero>
      <main>
        <h2>Your Favorites</h2>
      </main>
    </React.Fragment>
  );
};

export default Favorites;
