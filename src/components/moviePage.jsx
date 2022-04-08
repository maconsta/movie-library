import React from "react";
import { useLocation } from "react-router-dom";
import Result from "./result";

const MoviePage = () => {
  const location = useLocation();
  const movie = location.state;
  return (
    <main>
      <Result movie={movie} detailed={true} />
    </main>
  );
};

export default MoviePage;
