import React from "react";

const SearchBar = ({ id, placeholder, handleChange, query, className }) => {
  return (
    <input
      type="search"
      className={className}
      id={id}
      placeholder={placeholder}
      value={query}
      onChange={handleChange}
    ></input>
  );
};

export default SearchBar;
