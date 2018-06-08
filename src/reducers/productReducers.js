import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  GET_DETAIL,
  REMOVE_DETAIL,
  FETCH_NEW_PRODUCT_SUCCESS
} from "../actions/product";

const initialState = {
  products: [],
  isFetching: false,
  productDetail: {}
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
    case FETCH_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, ...action.payload.data.products]
      };
    case GET_DETAIL:
      return {
        ...state,
        productDetail: action.payload.data
      };
    case REMOVE_DETAIL:
      return {
        ...state,
        productDetail: {}
      };
    default:
      return state;
  }
};
