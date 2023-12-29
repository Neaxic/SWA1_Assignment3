import { combineReducers } from "@reduxjs/toolkit";
import highscoreReducer from "./highScoreReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import userProfileReducer from "./userReducer";
import apiReducer from "./apiReducer";
const rootReducer = combineReducers({
  highscore: highscoreReducer,
  login: loginReducer,
  api: apiReducer,
  //profile: profileReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
