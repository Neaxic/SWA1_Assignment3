import { createSlice } from "@reduxjs/toolkit";
import {
  createInitialBoard,
  performSwap,
  canmove,
  processMatches,
} from "../../../gameLogic/gameLogic";

const initialState = {
  id: -1,
  user: -1,
  completed: false,
  board: createInitialBoard(),
  selectedTile: null,
  matches: [],
  score: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectTile: (state, action) => {
      state.selectedTile = action.payload;
    },
    swapTiles: (state, action) => {
      const { firstTile, secondTile } = action.payload;
      if (canmove(state.board, firstTile, secondTile)) {
        state.board = performSwap(state.board, firstTile, secondTile);
        const matchResult = processMatches(state.board);
        state.board = matchResult.board;
        state.score += matchResult.score;
        state.selectedTile = null;
      } else {
        state.selectedTile = null;
      }
    },
    setGameDetails: (state, action) => {
      state.id = action.payload.id;
      state.user = action.payload.user;
    },
    resetScore: (state) => {
      state.score = 0;
    },
    resetGame: (state) => {
      state.id = -1;
      state.user = -1;
      state.completed = false;
      state.board = createInitialBoard();
      state.selectedTile = null;
      state.matches = [];
      state.score = 0;
    },
  },
});

export const { selectTile, swapTiles, setGameDetails, resetScore, resetGame } =
  gameSlice.actions;

export default gameSlice.reducer;
