// reducers/highscoreReducer.js
import { SET_HIGHSCORE } from "../actions-Thunks-api/highScoreActions";

const initialState = {
  highScore: 0,
};

function highscoreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HIGHSCORE:
      return {
        ...state,
        highScore: action.highScore,
      };
    default:
      return state;
  }
}

export default highscoreReducer;
