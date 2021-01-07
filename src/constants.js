export const SET_SERVER_STATUS = "SET_SERVER_STATUS";
export const START_GAME = "START_GAME";
export const SET_ACTIVE_GAME = "SET_ACTIVE_GAME";
export const SET_PAUSE = "SET_PAUSE";
export const SET_TIME = "SET_TIME";
export const END_GAME = "END_GAME";
export const ADD_POINTS = "ADD_POINTS";
export const SPEED_UP = "SPEED_UP";
export const CLEAR_SESSION = "CLEAR_SESSION";
export const RESTART_GAME = "RESTART_GAME";
export const CREATE_NEXT_FIGURE = "CREATE_NEXT_FIGURE";
export const CLEAR_NEXT_FIGURE = "CLEAR_NEXT_FIGURE";
export const SET_CURRENT_FIGURE = "SET_CURRENT_FIGURE";
export const CLEAR_CURRENT_FIGURE = "CLEAR_CURRENT_FIGURE";
export const CLEAR_FILLED_LINES = "CLEAR_FILLED_LINES";
export const CLEAR_FALLEN_FIGURES = "CLEAR_FALLEN_FIGURES";
export const MOVE_DOWN = "MOVE_DOWN";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const ROTATE_FIGURE = "ROTATE_FIGURE";
export const ADD_FALLEN_FIGURE = "ADD_FALLEN_FIGURE";

export const COLORS = [
    "#ec6e86", //розовый
    "#63adec", //голубой
    "#ee6f28", //оранжевый
    "#c5207d", //лиловый
    "#d383c8", //светло-розовый
    "#92ce34", //салатовый
    "#fa965a", //светло-оранжевый
    "#eec68a", //телесный
    "#88d6fd", //светло-голубой
    "#8770b8", //фиолетовый
    "#ae90b6", //светло-фиолетовый
    "#615ab7", //пурпурный
    "#b70b33", //красный
    "#3772be", //синий
    "#249253", //зеленый
    "#58b753", //светло-зеленый
    "#15ad87", //бирюзовый
    "#0eada8", //светло-бирюзовый
    "#ecb41f", //желтый
    "#fce770" //светло-желтый
];

export const FIGURES = [
    {
        name: "square",
        startWidth: 2,
        startHeight: 2,
        startCoords: [
            {
                x: 0,
                y: 0
            },
            {
                x: 0,
                y: 1
            },
            {
                x: 1,
                y: 0
            },
            {
                x: 1,
                y: 1
            }
        ]
    },
    {
        name: "line",
        startWidth: 1,
        startHeight: 4,
        startCoords: [
            {
                x: 0,
                y: 0
            },
            {
                x: 0,
                y: 1
            },
            {
                x: 0,
                y: 2
            },
            {
                x: 0,
                y: 3
            }
        ]
    },
    {
        name: "t-junction",
        startWidth: 3,
        startHeight: 2,
        startCoords: [
            {
                x: 1,
                y: 0
            },
            {
                x: 0,
                y: 1
            },
            {
                x: 1,
                y: 1
            },
            {
                x: 2,
                y: 1
            }
        ]
    },
    {
        name: "zigzag",
        startWidth: 3,
        startHeight: 2,
        startCoords: [
            {
                x: 0,
                y: 0
            },
            {
                x: 1,
                y: 0
            },
            {
                x: 1,
                y: 1
            },
            {
                x: 2,
                y: 1
            }
        ]
    },
    {
        name: "re-zigzag",
        startWidth: 3,
        startHeight: 2,
        startCoords: [
            {
                x: 2,
                y: 0
            },
            {
                x: 1,
                y: 0
            },
            {
                x: 1,
                y: 1
            },
            {
                x: 0,
                y: 1
            }
        ]
    },
    {
        name: "angle",
        startWidth: 2,
        startHeight: 3,
        startCoords: [
            {
                x: 0,
                y: 0
            },
            {
                x: 0,
                y: 1
            },
            {
                x: 0,
                y: 2
            },
            {
                x: 1,
                y: 2
            }
        ]
    },
    {
        name: "re-angle",
        startWidth: 2,
        startHeight: 3,
        startCoords: [
            {
                x: 1,
                y: 0
            },
            {
                x: 1,
                y: 1
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 0,
                y: 2
            }
        ]
    }
];
