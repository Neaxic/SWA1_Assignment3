import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE } from "./types";
import thunk from "redux-thunk";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case CREATE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default createReducer;
