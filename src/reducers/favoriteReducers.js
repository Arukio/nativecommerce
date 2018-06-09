import { ADD_FAVORITE } from "../actions/favorite";

const initialState = {
  favorites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    default:
      return state;
  }
};
