// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../src/redux/Service/reducers-Slice/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
