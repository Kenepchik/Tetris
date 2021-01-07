import * as types from "../constants";

const initialState = { lines: {}, filledLines: [], linesCount: 0 };

export const fallenFigures = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_FALLEN_FIGURE: {
      const lines = { ...state.lines };
      const filledLines = [...state.filledLines];
      let linesCount = state.linesCount;

      for (let i = 0; i < payload.coords.length; i++) {
        let { x, y } = payload.coords[i];
        let item = { x, color: payload.color };

        if (y in lines) {
          lines[y].push(item);
          if (lines[y].length === 10) filledLines.push(y);
        } else {
          lines[y] = [item];
          linesCount++;
        }
      }

      if (filledLines.length > 1) filledLines.sort((a, b) => a - b);

      return { lines, filledLines, linesCount };
    }
    case types.CLEAR_FILLED_LINES: {
      const lines = { ...state.lines };
      const filledLines = [...state.filledLines];
      let linesCount = state.linesCount;

      for (let i = 0; i < filledLines.length; i++) {
        let preLine = [];

        for (let key in lines) {
          if (+key <= +filledLines[i]) {
            let tempLine = [...lines[key]];

            if (preLine.length === 0) {
              delete lines[key];
              linesCount--;
            } else lines[key] = [...preLine];

            preLine = [...tempLine];
          } else break;
        }
      }

      return { lines, filledLines: [], linesCount };
    }
    case types.CLEAR_FALLEN_FIGURES:
      return initialState;
    default:
      return state;
  }
};
