import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger];

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
