import React from "react";
import { Link } from "react-router-dom";
import Hero from "./hero";
import Thumbnail from "./thumbnail";
import { selectSource } from "./utilities/utilities";

const Favorites = ({ favorites, handleSubmit, clearMovies }) => {
  return (
    <React.Fragment>
      <Hero handleSubmit={handleSubmit} clearMovies={clearMovies}></Hero>
      <main>
        <h2>Your Favorites</h2>
        <div className="fav-container">
          {Object.keys(favorites).map((id) => (
            <Link key={id} to="/moviePage" state={favorites[id]}>
              <Thumbnail
                className="thumbnail"
                source={selectSource(favorites[id])}
              />
            </Link>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Favorites;
