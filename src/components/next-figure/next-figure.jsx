import React from "react";
import PropTypes from "prop-types";
import Square from "../square/square";
import {FigureWrapper, SideHeader, SideWrapper} from "../styled-components/styled-components";

const NextFigure = ({nextFigure, width}) => {
    return (
        <SideWrapper>
            <SideHeader>Следующая фигура</SideHeader>
            <FigureWrapper
                width={width}
                startWidth={nextFigure.startWidth}
                startHeight={nextFigure.startHeight}
            >
                {nextFigure.isEmpty
                    ? null
                    : nextFigure.startCoords.map((item, index) => (
                        <Square
                            key={index}
                            color={nextFigure.color}
                            x={item.x}
                            y={item.y}
                        />
                    ))}
            </FigureWrapper>
        </SideWrapper>
    );
};

NextFigure.propTypes = {
    figure: PropTypes.object,
    width: PropTypes.number
};

NextFigure.defaultProps = {
    figure: {},
    width: 40
};

export default NextFigure;
