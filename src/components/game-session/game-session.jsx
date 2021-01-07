import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useStopwatch} from "react-timer-hook";
import PropTypes from "prop-types";
import {SideHeader, SideHeader1, SideText, SideWrapper} from "../styled-components/styled-components";
import {endGame, setTime} from "../../actions/actions";

const GameSession = ({
                         isGameActive,
                         isGameFinished,
                         isGamePaused,
                         speed,
                         points
                     }) => {
    const dispatch = useDispatch();
    const {seconds, minutes, hours, start, pause, isRunning} = useStopwatch({
        autoStart: false
    });

    useEffect(() => {
        if (isGameActive && !isGameFinished && !isRunning) {
            start();
        }
        if (!isGameActive && isRunning) {
            pause();
            if (!isGamePaused) {
                dispatch(setTime(hours, minutes, seconds));
                dispatch(endGame());
            }
        }
    }, [
        dispatch,
        hours,
        isGameActive,
        isGameFinished,
        isGamePaused,
        isRunning,
        minutes,
        pause,
        seconds,
        start
    ]);

    return (
        <SideWrapper>
            <SideHeader>Игра</SideHeader>
            <SideText as="span">
                Время: {hours > 9 ? hours : "0" + hours}:
                {minutes > 9 ? minutes : "0" + minutes}:
                {seconds > 9 ? seconds : "0" + seconds}
            </SideText>
            <SideText as="span">Очки: {points}</SideText>
            <SideHeader1>Пауза "Esc"</SideHeader1>
        </SideWrapper>
    );
};

GameSession.propTypes = {
    isGameActive: PropTypes.bool,
    isGameFinished: PropTypes.bool,
    speed: PropTypes.number,
    points: PropTypes.number
};

GameSession.defaultProps = {
    isGameActive: false,
    isGameFinished: true,
    speed: 0,
    points: 0
};

export default GameSession;
