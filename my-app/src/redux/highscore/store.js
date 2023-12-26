import { createStore } from "redux";
import highScoreReducer from "./highScoreReducer";

const store = createStore(highScoreReducer);

export default store;
