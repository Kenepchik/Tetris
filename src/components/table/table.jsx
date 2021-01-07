import React, {useEffect} from "react";
import NextFigure from "../next-figure/next-figure";
import GameSession from "../game-session/game-session";
import PlayingField from "../playing-field/playing-field";
import {useDispatch, useSelector} from "react-redux";
import {createNextFigure} from "../../actions/actions";
import {TableWrapper} from "../styled-components/styled-components";
import PreGameWindow from "../pre-game-window/pre-game-window";

export const TableContext = React.createContext(null);

export const Table = () => {
    const dispatch = useDispatch();
    const nextFigure = useSelector((state) => state.nextFigure);
    const {
        isGameActive,
        isGameFinished,
        isGamePaused,
        speed,
        points,
        width,
    } = useSelector((state) => state.gameSession);

    useEffect(() => {
        if (nextFigure.isEmpty && !isGameFinished) dispatch(createNextFigure());
    }, [dispatch, isGameFinished, nextFigure.isEmpty]);

    return (
        <TableContext.Provider value={{width: width}}>
            <TableWrapper width={width}>
                <NextFigure width={width} nextFigure={nextFigure}/>
                {isGameActive ? (
                    <PlayingField
                        width={width}
                        nextFigure={nextFigure}
                        isGameActive={isGameActive}
                    />
                ) : (
                    <PreGameWindow
                        isGamePaused={isGamePaused}
                        isGameActive={isGameActive}
                        isGameFinished={isGameFinished}
                    />
                )}
                <GameSession
                    isGameActive={isGameActive}
                    isGameFinished={isGameFinished}
                    isGamePaused={isGamePaused}
                    speed={speed}
                    points={points}
                />
            </TableWrapper>
        </TableContext.Provider>
    );
};
