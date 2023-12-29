import { combineReducers } from "@reduxjs/toolkit";
import highscoreReducer from "./highScoreReducer";
import profileReducer from "./profileReducer";
import userProfileReducer from "./UserReducer";
import apiReducer from "./apiReducer";
const rootReducer = combineReducers({
  highscore: highscoreReducer,
  api: apiReducer,
  //profile: profileReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
