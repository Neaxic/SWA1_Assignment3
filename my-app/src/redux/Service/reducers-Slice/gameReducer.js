const initialState = {
  games: [],
  currentGame: null,
  loading: false,
  error: null,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GAMES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_GAMES_SUCCESS":
      return {
        ...state,
        games: action.payload,
        loading: false,
      };
    case "GET_GAMES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "POST_GAME_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "POST_GAME_SUCCESS":
      return {
        ...state,
        games: [...state.games, action.payload],
        loading: false,
      };
    case "POST_GAME_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_GAME_DETAILS":
      return {
        ...state,
        currentGame: {
          id: action.payload.id,
          user: action.payload.user,
        },
      };
    case "GET_GAME_BY_ID_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_GAME_BY_ID_SUCCESS":
      return {
        ...state,
        currentGame: action.payload,
        loading: false,
      };
    case "GET_GAME_BY_ID_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_GAME_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "UPDATE_GAME_SUCCESS":
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.payload.id ? action.payload : game
        ),
        loading: false,
      };
    case "UPDATE_GAME_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default gamesReducer;
