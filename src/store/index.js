import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const appropriateStore =
  process.env.NODE_ENV === "development"
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(...middlewares)
      )
    : applyMiddleware(...middlewares);

const store = createStore(reducers, appropriateStore);

sagaMiddleware.run(sagas);

export default store;

//https://gist.github.com/fhugoduarte/d57fb1891650d5ec39b2cda31cd2d616
