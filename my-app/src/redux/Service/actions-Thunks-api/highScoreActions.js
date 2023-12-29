export const SET_HIGHSCORE = "SET_HIGHSCORE";

export function setHighscore(newHighScore) {
  return {
    type: SET_HIGHSCORE,
    highScore: newHighScore,
  };
}
