import { combineReducers } from "@reduxjs/toolkit";
import highscoreReducer from "./highScoreReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import userProfileReducer from "./userReducer";
import gameReducer from "./gameReducer";
const rootReducer = combineReducers({
  //highscore: highscoreReducer,
  login: loginReducer,
  game: gameReducer,
  //profile: profileReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
