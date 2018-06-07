import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from "../actions/product";

const initialState = {
  products: [],
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload.data.products
      };
    default:
      return state;
  }
};
