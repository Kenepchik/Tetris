import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    Button,
    EndWindowContent,
    EndWindowText,
    EndWindowWrapper,
    Header,
    RatingList,
    RatingListItem,
    RatingListWrapper,
    RatingsWrapper
} from "../styled-components/styled-components";
import {clearSession, restartGame} from "../../actions/actions";
import {request} from "../../api/api";

const EndWindow = () => {
    const [commonRating, setCommonRating] = useState({
        rating: [],
        isDowland: false
    });

    const [personalRating, setPersonalRating] = useState({
        rating: [],
        isDowland: false
    });

    const gameSession = useSelector((state) => state.gameSession);
    const {hours, minutes, seconds} = gameSession.time;
    const dispatch = useDispatch();

    const handleNewGameClick = () => {
        dispatch(restartGame());
    };

    const handleExitClick = () => {
        dispatch(clearSession());
    };

    useEffect(() => {
        request
            .post(`/ratings/${gameSession.player}`, {
                point: gameSession.points
            })
            .then(() => {
                request
                    .get("/ratings")
                    .then((response) =>
                        setCommonRating({rating: response.data, isDowland: true})
                    );
                request
                    .get(`/ratings/${gameSession.player}`)
                    .then((response) =>
                        setPersonalRating({rating: response.data, isDowland: true})
                    );
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <EndWindowWrapper>
            <Header>Игра окончена!</Header>
            <EndWindowContent>
                <EndWindowText>Твой результат:</EndWindowText>
            </EndWindowContent>
            <EndWindowText>
                Время: {hours > 9 ? hours : "0" + hours}:
                {minutes > 9 ? minutes : "0" + minutes}:
                {seconds > 9 ? seconds : "0" + seconds}
            </EndWindowText>
            <EndWindowText>Очки: {gameSession.points}</EndWindowText>
            <EndWindowContent>
                <EndWindowText>Результаты:</EndWindowText>
                <RatingsWrapper>
                    {gameSession.serverStatus.isConnected ? (
                        <>
                            <RatingListWrapper>
                                <EndWindowText>{gameSession.player}'s rating:</EndWindowText>
                                {personalRating.isDowland ? (
                                    <RatingList>
                                        {personalRating.rating.map((item, index) => (
                                            <RatingListItem key={index}>
                                                {item.points} P
                                            </RatingListItem>
                                        ))}
                                    </RatingList>
                                ) : (
                                    <p>Загрузка...</p>
                                )}
                            </RatingListWrapper>
                            <RatingListWrapper>
                                <EndWindowText>Common's rating:</EndWindowText>
                                <RatingList>
                                    {commonRating.isDowland ? (
                                        <RatingList>
                                            {commonRating.rating.map((item, index) => (
                                                <RatingListItem key={index}>
                                                    {item.playerName}: {item.points} P
                                                </RatingListItem>
                                            ))}
                                        </RatingList>
                                    ) : (
                                        <p>Загрузка...</p>
                                    )}
                                </RatingList>
                            </RatingListWrapper>
                        </>
                    ) : (
                        <p>No connection to server.</p>
                    )}
                </RatingsWrapper>
            </EndWindowContent>
            <div>
                <Button as="button" onClick={handleNewGameClick}>
                    Новая игра
                </Button>
                <Button as="button" onClick={handleExitClick}>
                    Выход
                </Button>
            </div>
        </EndWindowWrapper>
    );
};

export default EndWindow;
