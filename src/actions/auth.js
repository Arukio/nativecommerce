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
