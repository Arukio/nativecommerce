import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./reducers/authReducers";
import product from "./reducers/productReducers";
import cart from "./reducers/cartReducers";
import seller from "./reducers/sellerReducers";
import favorite from "./reducers/favoriteReducers";

const RootReducers = combineReducers({
  auth,
  product,
  cart,
  seller,
  favorite
});

const store = createStore(
  RootReducers,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);

export default store;
