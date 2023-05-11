import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import RootReducer from "./RootReducer";
import { todos } from "./Saga";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleWares = [logger, sagaMiddleware];

export const store = createStore(persistedReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);

sagaMiddleware.run(todos);
