import { FETCH_SELLER, FETCH_SELLER_SUCCESS } from "../actions/seller";

const initialState = {
  seller: {},
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SELLER:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SELLER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        seller: action.payload.data
      };
    default:
      return state;
  }
};
