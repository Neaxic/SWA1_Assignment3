import React from "react";
import { useSelector } from "react-redux";

function HighScoreContainer() {
  const highScore = useSelector((state) => state.highscore.highScore);

  return (
    <div>
      <h2>Highscore: {highScore}</h2>
    </div>
  );
}

export default HighScoreContainer;
