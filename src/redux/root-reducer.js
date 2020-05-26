import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import navReducer from "./navigation/nav-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  nav: navReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
