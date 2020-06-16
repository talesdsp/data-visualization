import { applyMiddleware, compose, createStore, Store } from "redux";
import createSaga from "redux-saga";
import rootReducer from "./rootReducer";
import sagas from "./rootSaga";
import { ApplicationState } from "./types";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSaga();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
