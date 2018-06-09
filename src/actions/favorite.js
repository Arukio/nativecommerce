export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = data => ({
  type: ADD_FAVORITE,
  payload: data
});

export const removeFavorite = data => ({
  type: REMOVE_FAVORITE,
  payload: data
});
