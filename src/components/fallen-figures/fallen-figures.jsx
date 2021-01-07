import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addPoints, clearFilledLine} from "../../actions/actions";
import Square from "../square/square";
import PropTypes from "prop-types";

const FallenFigures = ({fallenFigures}) => {
    const dispatch = useDispatch();
    const lines = Object.entries(fallenFigures.lines);

    useEffect(() => {
        if (fallenFigures.filledLines.length !== 0) {
            dispatch(clearFilledLine());
            dispatch(addPoints(fallenFigures.filledLines.length));
        }
    }, [dispatch, fallenFigures.filledLines.length]);

    return (
        <>
            {fallenFigures.linesCount === 0
                ? null
                : lines.map((line) =>
                    line[1].map((item, i) => (
                        <Square key={i} x={item.x} y={+line[0]} color={item.color}/>
                    ))
                )}
        </>
    );
};

FallenFigures.propTypes = {
    fallenFigures: PropTypes.object,
};
FallenFigures.defaultProps = {
    fallenFigures: {},
};

export default React.memo(FallenFigures);
