import { combineReducers } from "@reduxjs/toolkit";
import highscoreReducer from "./highScoreReducer";
import userProfileReducer from "./UserReducer";
import apiReducer from "./apiReducer";
const rootReducer = combineReducers({
  highscore: highscoreReducer,
  api: apiReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
