import * as sagas from "./sagas"; //import index.js from sagas folder

export const initSagas = (sagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware)); //for each values of saga we call this function
};
