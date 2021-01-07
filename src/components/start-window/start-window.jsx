import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setServerStatus, startGame} from "../../actions/actions";
import {Button, Image, StartWindowInput, StartWindowWrapper} from "../styled-components/styled-components";
import {request} from "../../api/api";

const StartWindow = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = ({target: {value}}) => {
        setName(value);
    };

    const handleButtonClick = () => {
        request
            .post("/players", {name})
            .then(() => dispatch(setServerStatus(true, "Connected")))
            .catch((error) => dispatch(setServerStatus(false, error)));
        dispatch(startGame(name, 40));
    };

    return (
        <StartWindowWrapper>
            <Image src="LOG.png"></Image>
            <StartWindowInput value={name} onChange={handleInputChange}/>
            <Button as="button" onClick={handleButtonClick}>
                СТАРТ
            </Button>
        </StartWindowWrapper>
    );
};

export default StartWindow;
