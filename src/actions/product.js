import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILED = "FETCH_PRODUCTS_FAILED";
export const GET_DETAIL = "GET_DETAIL";
export const REMOVE_DETAIL = "REMOVE_DETAIL";

export const FetchStart = () => ({
  type: FETCH_PRODUCTS
});

export const FetchSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});

export const FetchFailed = data => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: {
    data
  }
});

export const getDetail = data => ({
  type: GET_DETAIL,
  payload: {
    data
  }
});

export const removeDetail = data => ({
  type: REMOVE_DETAIL,
  payload: {
    data
  }
});

export const FetchProduct = () => dispatch => {
  dispatch(FetchStart());
  axios
    .get(
      "https://us-central1-react-native-project-cfd3e.cloudfunctions.net/products"
    )
    .then(res => {
      dispatch(FetchSuccess(res.data));
      return res.data;
    })
    .catch(e => console.log(e));
};
