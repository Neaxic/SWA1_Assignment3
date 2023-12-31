import { Dispatch } from "redux";
import {
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
} from "../reducers-Slice/gameReducer";
const url = "http://localhost:9090";

export const fetchGames = (token) => {
  return async (dispatch) => {
    dispatch(getGamesRequest());

    try {
      const response = await fetch(`${url}/games?token=${token}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }

      const data = await response.json();
      dispatch(getGamesSuccess(data));
    } catch (error) {
      dispatch(getGamesFailure("Network error. Please try again."));
    }
  };
};

export const startNewGame = (token, userId) => {
  return async (dispatch) => {
    dispatch(postGameRequest());
    try {
      const response = await fetch(`${url}/games?token=${token}`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to start new game");
      }

      const data = await response.json();
      dispatch(postGameSuccess(data));
      dispatch(updateGameSuccess({ id: data.id, user: userId }));
    } catch (error) {
      dispatch(postGameFailure("Failed Starting new game try agian."));
    }
  };
};

export const fetchGameById = (token, gameId) => {
  return async (dispatch) => {
    dispatch(getGameByIdRequest());

    try {
      const response = await fetch(`${url}/games/${gameId}?token=${token}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to get gameID");
      }

      const game = await response.json();
      dispatch(getGameByIdSuccess(game));
    } catch (error) {
      dispatch(getGameByIdFailure("Failed Starting new game try agian."));
    }
  };
};

export const updateGame = (gameId, token, updateData) => {
  return async (dispatch) => {
    dispatch(updateGameRequest());

    try {
      const response = await fetch(`${url}/games/${gameId}?token=${token}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Failed to update game");
      }

      const data = await response.json();
      dispatch(updateGameSuccess(data));
    } catch (error) {
      dispatch(updateGameFailure("Failed to update Game"));
    }
  };
};
