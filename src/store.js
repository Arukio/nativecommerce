import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./reducers/authReducers";

const RootReducers = combineReducers({
  auth
});

const store = createStore(
  RootReducers,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);

export default store;
