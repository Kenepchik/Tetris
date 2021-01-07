import * as types from "../constants";

const initialState = {
  player: "",
  points: 0,
  speed: 500,
  width: 40,
  time: {
    seconds: 0,
    minutes: 0,
    hours: 0,
  },
  isFirstStart: true,
  isGameStarted: false,
  isGameActive: false,
  isGameFinished: false,
  isGamePaused: false,
  serverStatus: {
    isConnected: false,
    message: "",
  },
};

export const gameSession = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SERVER_STATUS: {
      return { ...state, serverStatus: { ...payload } };
    }
    case types.START_GAME: {
      return { ...state, ...payload, isGameStarted: true, isFirstStart: false };
    }
    case types.RESTART_GAME: {
      const player = state.player;
      return {
        ...initialState,
        player,
        isGameStarted: true,
        isFirstStart: false,
      };
    }
    case types.SET_ACTIVE_GAME: {
      return { ...state, isGameActive: !state.isGameActive };
    }
    case types.SET_PAUSE: {
      return { ...state, isGamePaused: !state.isGamePaused };
    }
    case types.ADD_POINTS: {
      const newPoints = state.points + 10 ** payload.count;
      return { ...state, points: newPoints };
    }
    case types.SET_TIME: {
      return { ...state, time: payload };
    }
    case types.END_GAME: {
      return {
        ...state,
        isGameFinished: true,
        isGameStarted: false,
      };
    }
    case types.CLEAR_SESSION: {
      return initialState;
    }
    default:
      return state;
  }
};
