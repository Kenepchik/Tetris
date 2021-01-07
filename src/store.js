import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/index";

const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware())(
    createStore
);

const store = createStoreWithMiddleware(rootReducer);

export default store;
