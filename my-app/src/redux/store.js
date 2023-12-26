import { createStore } from "redux";
import highScoreReducer from "./highscore/highScoreReducer";

const store = createStore(highScoreReducer);

export default store;
