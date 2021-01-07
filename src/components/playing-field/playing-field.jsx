import React, {useCallback, useEffect, useRef, useState} from "react";
import CurrentFigure from "../current-figure/current-figure";
import FallenFigures from "../fallen-figures/fallen-figures";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {PlayingFieldWrapper} from "../styled-components/styled-components";
import {
    addFallenFigure,
    clearCurrentFigure,
    clearFallenFigures,
    clearNextFigure,
    moveDown,
    moveLeft,
    moveRight,
    rotateFigure,
    setActiveGame,
    setCurrentFigure,
    setPause,
} from "../../actions/actions";

const PlayingField = ({nextFigure, isGameActive}) => {
    const [speed, setFigureSpeed] = useState(500);
    const reference = useRef(null);
    const dispatch = useDispatch();
    const currentFigure = useSelector((state) => state.currentFigure);
    const fallenFigures = useSelector((state) => state.fallenFigures);

    const handleEndGame = useCallback(() => {
        dispatch(setActiveGame(false));
        dispatch(clearNextFigure());
        dispatch(clearCurrentFigure());
        dispatch(clearFallenFigures());
    }, [dispatch]);

    useEffect(() => {
        reference.current.focus();
    }, []);

    useEffect(() => {
        if (currentFigure.isFallen) {
            if (currentFigure.isFallenOnStart) {
                handleEndGame();
            } else {
                dispatch(addFallenFigure(currentFigure));
                dispatch(clearCurrentFigure());
            }
        }
    }, [currentFigure, dispatch, handleEndGame]);

    useEffect(() => {
        if (!nextFigure.isEmpty && currentFigure.isEmpty) {
            if (fallenFigures.linesCount === 20) {
                handleEndGame();
            } else {
                dispatch(setCurrentFigure(nextFigure, fallenFigures));
                dispatch(clearNextFigure());
            }
        }
    }, [
        currentFigure.isEmpty,
        dispatch,
        fallenFigures,
        handleEndGame,
        isGameActive,
        nextFigure,
    ]);

    useEffect(() => {
        const timer = setInterval(
            () => dispatch(moveDown(fallenFigures.lines)),
            speed
        );
        return () => {
            clearInterval(timer);
        };
    }, [dispatch, fallenFigures.lines, speed]);

    const handleKeyUp = (e) => {
        if (e.keyCode === 40) {
            setFigureSpeed(500);
        }
    };

    const handleKeyDown = (e) => {
        if (isGameActive) {
            switch (+e.keyCode) {
                case 27: {
                    dispatch(setPause(true));
                    dispatch(setActiveGame(false));
                    break;
                }
                case 37: {
                    dispatch(moveLeft(fallenFigures.lines));
                    break;
                }
                case 38: {
                    if (currentFigure.name !== "square")
                        dispatch(rotateFigure(fallenFigures.lines));
                    break;
                }
                case 39: {
                    dispatch(moveRight(fallenFigures.lines));
                    break;
                }
                case 40: {
                    setFigureSpeed(60);
                    break;
                }
                default:
                    break;
            }
        }
    };

    return (
        <PlayingFieldWrapper
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            tabIndex="0"
            ref={reference}
        >
            <CurrentFigure currentFigure={currentFigure}/>

            <FallenFigures fallenFigures={fallenFigures}/>
        </PlayingFieldWrapper>
    );
};

PlayingField.propTypes = {
    nextFigure: PropTypes.object,
    isGameActive: PropTypes.bool,
};
PlayingField.defaultProps = {
    nextFigure: {},
    isGameActive: false,
};

export default PlayingField;
