import { usersAPI } from "./../api/api";
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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (email, id, login, photos) => ({
  type: SET_USER_DATA,
  data: { email, id, login, photos },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    debugger;
    usersAPI.getHeaderProfile().then((data) => {
      if (data.resultCode === 0) {
        //debugger;
        let photos = data.data.photos;
        if (data.photos === undefined) photos = defaultAvatarka;
        let { email, id, login } = data.data;
        dispatch(setAuthUserData(email, id, login, photos));
      }
    });
  };
};

export default authReducer;
