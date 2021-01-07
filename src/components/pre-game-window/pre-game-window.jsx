import React, {useEffect, useRef, useState} from "react";
import {setActiveGame, setPause} from "../../actions/actions";
import {useDispatch} from "react-redux";
import {CenterSideWrapper} from "../styled-components/styled-components";

const PreGameWindow = ({isGamePaused, isGameFinished, isGameActive}) => {
    const [prevTimer, setPrevTimer] = useState(3);
    const reference = useRef(null);
    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        if (+e.keyCode === 27 && isGamePaused) {
            setPrevTimer(3);
            dispatch(setPause(false));
        }
    };

    useEffect(() => {
        reference.current.focus();
    }, []);

    useEffect(() => {
        if (!isGamePaused) {
            if (!isGameActive && !isGameFinished) {
                if (prevTimer > 0) {
                    setTimeout(() => setPrevTimer(prevTimer - 1), 1000);
                }
                if (prevTimer === 0) {
                    dispatch(setActiveGame(true));
                    setPrevTimer(null);
                }
            }
        }
    }, [dispatch, isGameActive, isGameFinished, isGamePaused, prevTimer]);

    return (
        <CenterSideWrapper ref={reference} tabIndex="0" onKeyDown={handleKeyDown}>
            {isGamePaused ? "Пауза" : prevTimer}
        </CenterSideWrapper>
    );
};

export default PreGameWindow;
