import { authAPI } from "./../api/api";
import defaultAvatarka from "./../assets/images/avatarka.webp";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  email: null,
  id: null,
  login: null,
  photos: null,
  isAuth: false,

  //isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
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

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let photos = response.data.data.photos;
      if (response.data.photos === undefined) photos = defaultAvatarka;
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true, photos));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(dispatch(setAuthUserData(null, null, null, false)));
    }
  });
};

export default authReducer;
