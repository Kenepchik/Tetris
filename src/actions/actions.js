import * as types from "../constants";

export const setServerStatus = (isConnected, message) => ({
    type: types.SET_SERVER_STATUS,
    payload: {
        isConnected,
        message,
    },
});

export const startGame = (player, width) => ({
    type: types.START_GAME,
    payload: {
        player,
        width,
    },
});

export const clearSession = () => ({
    type: types.CLEAR_SESSION,
});

export const restartGame = () => ({
    type: types.RESTART_GAME,
});

export const setActiveGame = (flag) => ({
    type: types.SET_ACTIVE_GAME,
    payload: {
        flag,
    },
});

export const setPause = (flag) => ({
    type: types.SET_PAUSE,
    payload: {
        flag,
    },
});

export const setTime = (hours, minutes, seconds) => ({
    type: types.SET_TIME,
    payload: {
        hours,
        minutes,
        seconds,
    },
});

export const addPoints = (count) => ({
    type: types.ADD_POINTS,
    payload: {
        count,
    },
});

export const endGame = () => ({
    type: types.END_GAME,
});

export const createNextFigure = () => ({
    type: types.CREATE_NEXT_FIGURE,
});

export const clearNextFigure = () => ({
    type: types.CLEAR_NEXT_FIGURE,
});

export const setCurrentFigure = (nextFigure, fallenFigures) => ({
    type: types.SET_CURRENT_FIGURE,
    payload: {
        nextFigure,
        fallenFigures,
    },
});

export const clearCurrentFigure = () => ({
    type: types.CLEAR_CURRENT_FIGURE,
});

export const rotateFigure = (fallenFigures) => ({
    type: types.ROTATE_FIGURE,
    payload: fallenFigures,
});

export const moveDown = (fallenFigures) => ({
    type: types.MOVE_DOWN,
    payload: fallenFigures,
});

export const moveLeft = (fallenFigures) => ({
    type: types.MOVE_LEFT,
    payload: fallenFigures,
});

export const moveRight = (fallenFigures) => ({
    type: types.MOVE_RIGHT,
    payload: fallenFigures,
});

export const addFallenFigure = (figure) => ({
    type: types.ADD_FALLEN_FIGURE,
    payload: figure,
});

export const clearFilledLine = () => ({
    type: types.CLEAR_FILLED_LINES,
});

export const clearFallenFigures = () => ({
    type: types.CLEAR_FALLEN_FIGURES,
});
