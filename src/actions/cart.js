export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const REMOVE_QUANTITY = "REMOVE_QUANTITY";

export const addProduct = data => ({
  type: ADD_PRODUCT,
  payload: {
    data
  }
});

export const removeProduct = data => ({
  type: REMOVE_PRODUCT,
  payload: {
    data
  }
});

export const addQuantity = data => ({
  type: ADD_QUANTITY,
  payload: {
    data
  }
});

export const removeQuantity = data => ({
  type: REMOVE_QUANTITY,
  payload: {
    data
  }
});
