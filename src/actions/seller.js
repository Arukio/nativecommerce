import axios from "axios";

export const FETCH_SELLER = "FETCH_SELLER";
export const FETCH_SELLER_SUCCESS = "FETCH_SELLER_SUCCESS";
export const FETCH_SELLER_FAILED = "FETCH_SELLER_FAILED";

export const FetchStart = () => ({
  type: FETCH_SELLER
});

export const FetchSuccess = data => ({
  type: FETCH_SELLER_SUCCESS,
  payload: {
    data
  }
});

export const FetchFailed = data => ({
  type: FETCH_SELLER_FAILED,
  payload: {
    data
  }
});

export const FetchSeller = data => dispatch => {
  dispatch(FetchStart());
  axios
    .get(
      "https://us-central1-react-native-project-cfd3e.cloudfunctions.net/seller"
    )
    .then(res => {
      dispatch(FetchSuccess(res.data.seller));
      return res.data;
    })
    .catch(e => console.log(e));
};
