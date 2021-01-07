import React from "react";
import PropTypes from "prop-types";
import Square from "../square/square";

const CurrentFigure = ({currentFigure}) => {
    return (
        <>
            {currentFigure.isEmpty
                ? null
                : currentFigure.coords.map((item, index) => (
                    <Square
                        key={index}
                        color={currentFigure.color}
                        x={item.x}
                        y={item.y}
                    />
                ))}
        </>
    );
};

CurrentFigure.propTypes = {
    currentFigure: PropTypes.object
};

CurrentFigure.defaultProps = {
    currentFigure: {}
};

export default CurrentFigure;
