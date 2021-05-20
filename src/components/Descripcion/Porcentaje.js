import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

export const Porcentaje = ({ vote_average }) => {
  const percentage = vote_average * 10;

  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0.25,

          strokeLinecap: "butt",

          textSize: "30px",
          pathTransitionDuration: 1,
          pathColor: `black`,
          textColor: "white",
          trailColor: "red",
          backgroundColor: "red",
        })}
      />
    </div>
  );
};
