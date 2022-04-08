import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./searchBar";

const NavBar = ({ query, handleSubmit, handleChange }) => {
  let navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navigation">
        <Link className="link-decoration navbar-home" to="/">
          Home
        </Link>
        <Link className="link-decoration navbar-menu" to="/favorites">
          My Movie Collection
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <SearchBar
          id="navbar-search"
          className="searchbar searchbar-medium"
          query={query}
          placeholder="Search by movie title... "
          handleChange={handleChange}
        ></SearchBar>
        <button
          className="btn-search btn-medium btn-rightside"
          onClick={() => {
            if (query === "") return;
            else navigate("/results");
          }}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
