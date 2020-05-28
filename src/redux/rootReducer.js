import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import navReducer from "./navigation/navReducer";
import featuresReducer from "./features/featuresReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  navReducer,
  featuresReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);