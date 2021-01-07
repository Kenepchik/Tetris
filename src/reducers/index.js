import {combineReducers} from "redux";
import {currentFigure} from "./current-figure";
import {fallenFigures} from "./fallen-figures";
import {nextFigure} from "./next-figure";
import {gameSession} from "./game-session";

const rootReducer = combineReducers({
    gameSession,
    currentFigure,
    nextFigure,
    fallenFigures
});

export default rootReducer;
