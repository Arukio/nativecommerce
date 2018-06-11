import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_QUANTITY,
  REMOVE_QUANTITY
} from "../actions/cart";

const initialState = {
  carts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let idx = state.carts.findIndex(
        item => item.product === action.payload.data.product
      );
      if (idx === -1) {
        return {
          ...state,
          carts: [
            ...state.carts,
            { id: state.carts.length + 1, quantity: 1, ...action.payload.data }
          ]
        };
      } else {
        return state;
      }
    case REMOVE_PRODUCT:
      const index = action.payload.data;
      return {
        ...state,
        carts: [...state.carts.slice(0, index), ...state.carts.slice(index + 1)]
      };
    case ADD_QUANTITY:
      let cartsAdd = state.carts.slice();
      let itemAdd = cartsAdd[action.payload.data];
      itemAdd.quantity++;
      cartsAdd[action.payload.data] = itemAdd;
      return {
        ...state,
        carts: cartsAdd
      };
    case REMOVE_QUANTITY:
      let cartsRemove = state.carts.slice();
      let itemRemove = cartsRemove[action.payload.data];
      itemRemove.quantity--;
      cartsRemove[action.payload.data] = itemRemove;
      return {
        ...state,
        carts: cartsRemove
      };
    default:
      return state;
  }
};
