import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/auth";

const initialState = {
  isLogin: false,
  isFetching: false,
  user: {},
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isFetching: false,
        user: action.payload.data
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLogin: false,
        isFetching: false
      };
    default:
      return state;
  }
};
