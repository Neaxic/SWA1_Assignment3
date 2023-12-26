import { Increse_HighScore } from "./highScoreTypes";
const initialState = {
  highScore: 110,
};

const highScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increse_HighScore":
      return {
        ...state,
        highScore: action.payload,
      };
    default:
      return state;
  }
};

export default highScoreReducer;
