import React, {useContext} from "react";
import PropTypes from "prop-types";
import {TableContext} from "../table/table";
import {SquareWrapper} from "../styled-components/styled-components";

const Square = ({color, x, y}) => {
    const {width} = useContext(TableContext);
    return <SquareWrapper width={width} x={x} y={y} color={color}/>;
};

Square.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
};
Square.defaultProps = {
    x: 0,
    y: 0,
    color: "red",
};

export default Square;
