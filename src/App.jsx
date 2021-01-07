import React from "react";
import {useSelector} from "react-redux";
import {Wrapper} from "./components/styled-components/styled-components";
import StartWindow from "./components/start-window/start-window";
import {Table} from "./components/table/table";
import EndWindow from "./components/end-window/end-window";

const App = () => {
    const {isGameStarted, isFirstStart, isGameFinished} = useSelector(
        (state) => state.gameSession
    );

    return (
        <Wrapper>
            {isFirstStart ? <StartWindow/> : null}
            {isGameStarted ? <Table/> : null}
            {isGameFinished ? <EndWindow/> : null}
        </Wrapper>
    );
};

export default App;
