import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar" style={{ width: "67%", height: "20px", backgroundColor: "lightgray" }}>
      <div
        className="progress-bar__value"
        style={{ width: `${value}%`, height: "100%", backgroundColor: getColor(value) }}
      ></div>
    </div>
  );
};

const getColor = (value) => {
  if (value <= 25) return "red";
  if (value <= 50) return "orange";
  if (value <= 75) return "yellow";
  return "green";
};

export default ProgressBar;
