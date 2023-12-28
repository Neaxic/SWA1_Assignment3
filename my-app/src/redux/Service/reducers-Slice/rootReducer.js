import { combineReducers } from "@reduxjs/toolkit";
import highscoreReducer from "./highScoreReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import userProfileReducer from "./userReducer";

const rootReducer = combineReducers({
  //highscore: highscoreReducer,
  login: loginReducer,
  //profile: profileReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
