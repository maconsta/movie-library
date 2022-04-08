import React from "react";
import NavBar from "./navBar";

const Header = ({ query, handleSubmit, handleChange }) => {
  return (
    <NavBar
      query={query}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default Header;
