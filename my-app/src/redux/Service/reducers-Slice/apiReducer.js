import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  games: [],
  gameDetails: null,
  error: null,
};

const gameServerSlice = createSlice({
  name: "gameServer",
  initialState,
  reducers: {
    getGamesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getGamesSuccess(state, action) {
      state.loading = false;
      state.games = action.payload;
      state.error = null;
    },
    getGamesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    postGameRequest(state) {
      state.loading = true;
      state.error = null;
    },
    postGameSuccess(state, action) {
      state.loading = false;
      state.games = [...state.games, action.payload];
      state.error = null;
    },
    postGameFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getGameByIdRequest(state) {
      state.loading = true;
      state.gameDetails = null;
      state.error = null;
    },
    getGameByIdSuccess(state, action) {
      state.loading = false;
      state.gameDetails = action.payload;
      state.error = null;
    },
    getGameByIdFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateGameRequest(state) {
      state.loading = true;
      state.error = null;
    },
    updateGameSuccess(state, action) {
      state.loading = false;
      state.games = state.games.map((game) =>
        game.id === action.payload.id ? action.payload : game
      );
      state.error = null;
    },
    updateGameFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getGamesRequest,
  getGamesSuccess,
  getGamesFailure,
  postGameRequest,
  postGameSuccess,
  postGameFailure,
  getGameByIdRequest,
  getGameByIdSuccess,
  getGameByIdFailure,
  updateGameRequest,
  updateGameSuccess,
  updateGameFailure,
} = gameServerSlice.actions;

export default gameServerSlice.reducer;
