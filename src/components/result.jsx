import React from "react";
import LongResult from "./longResult";

import ShortResult from "./shortResult";

const Result = ({ movie, detailed }) => {
  let str = "result-card ";
  return (
    <div
      className={(str += detailed ? "result-card-long" : "result-card-short")}
    >
      <ShortResult movie={movie} />
      {detailed && <LongResult />}
    </div>
  );
};

export default Result;
