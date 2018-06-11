import { ADD_FAVORITE } from "../actions/favorite";

const initialState = {
  favorites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      let data = state.favorites.slice();
      let index = data.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
