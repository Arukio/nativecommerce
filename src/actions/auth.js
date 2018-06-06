import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LoginStart = () => ({
  type: LOGIN
});

export const LoginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: {
    data
  }
});

export const LoginFailed = data => ({
  type: LOGIN_FAILED,
  payload: {
    data
  }
});

export const LogingIn = data => dispatch => {
  console.log(data);
  dispatch(LoginStart());
  axios
    .post(
      "https://us-central1-react-native-project-cfd3e.cloudfunctions.net/auth",
      {
        email: data.email.toLowerCase(),
        password: data.password
      }
    )
    .then(res => {
      if (res.data.status === "success") {
        dispatch(LoginSuccess(res.data));
      } else {
        dispatch(LoginFailed(res.data));
      }
      return res.data;
    })
    .catch(e => {
      console.log(e);
    });
};
