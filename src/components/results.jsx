import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./searchBar";
import Result from "./result";

const Results = ({ query, movies, handleChange, handleSubmit }) => {
  let navigate = useNavigate();
  return (
    <main>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <SearchBar
          id="main-searchbar"
          className="searchbar searchbar-large"
          query={query}
          placeholder="Search by movie title... "
          handleChange={handleChange}
        ></SearchBar>
        <button
          className="btn-search btn-large btn-rightside"
          onClick={() => {
            if (query === "") return;
            else navigate("/results");
          }}
        >
          Search
        </button>
      </form>
      <div className="container">
        {movies.map((movie) => (
          <Result key={movie.show.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Results;
