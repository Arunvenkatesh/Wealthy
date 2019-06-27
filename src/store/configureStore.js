import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";

export default function configureStore(initialState) {
    const enhancer = compose(applyMiddleware(reduxThunk));
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}
