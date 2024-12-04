import { authAPI, securityAPI } from "./../api/api";
import defaultAvatarka from "./../assets/images/avatarka.webp";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "test-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "test-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  email: null,
  id: null,
  login: null,
  photos: null,
  isAuth: false,
  captchaUrl: null,

  //isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      //debugger;
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth, photos) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
    photos,
  },
});

export const gethCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  //   .then((response) => {
  if (response.data.resultCode === 0) {
    let photos = response.data.data.photos;
    if (response.data.photos === undefined) photos = defaultAvatarka;
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true, photos));
  }
  //});
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();

  const captchaUrl = response.data.url;

  dispatch(gethCaptchaUrlSuccess(captchaUrl));
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    //.then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());

        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
      //});
    }
  };

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  //.then((data) => {
  if (response.data.resultCode === 0) {
    dispatch(dispatch(setAuthUserData(null, null, null, false)));
  }
  // });
};

export default authReducer;
