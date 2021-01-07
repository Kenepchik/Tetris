import * as types from "../constants";

const initialState = {
    startCoords: [],
    isEmpty: true,
};

const getRandomInRange = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

export const nextFigure = (state = initialState, {type}) => {
    switch (type) {
        case types.CREATE_NEXT_FIGURE: {
            const deltaX = getRandomInRange(0, 8);
            const index = getRandomInRange(0, types.FIGURES.length);
            const color = types.COLORS[getRandomInRange(0, types.COLORS.length)];
            const name = types.FIGURES[index].name;
            const startCoords = types.FIGURES[index].startCoords;
            const startWidth = types.FIGURES[index].startWidth;
            const startHeight = types.FIGURES[index].starHeight;
            const position = 1;

            return {
                name,
                color,
                position,
                deltaX,
                startWidth,
                startHeight,
                startCoords,
                isEmpty: false,
            };
        }
        case types.CLEAR_NEXT_FIGURE: {
            return initialState;
        }
        default:
            return state;
    }
};
