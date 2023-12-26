import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./createReducer"; // Adjust the import path as needed

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
