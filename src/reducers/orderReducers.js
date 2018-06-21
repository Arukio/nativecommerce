import { PROCCEED_ORDER } from "../actions/order";

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROCCEED_ORDER:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
